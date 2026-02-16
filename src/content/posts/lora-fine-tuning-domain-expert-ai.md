---
title: "Fine-Tuning Domain Experts That Actually Know Things"
description: "I built a pipeline that turns a 50-line persona definition into a locally-runnable AI expert in 10 minutes. Here's how the whole system works."
date: "2025-02-10"
tags: ["ai", "fine-tuning", "lora", "llm", "open-source"]
---

There's a massive gap between "tell the AI to act like an expert" and "train an AI that actually absorbed the expertise." I built a system that bridges it.

The [Xerox Project](https://github.com/p5150j/xerox-project) is an automated pipeline that takes a 50-line persona definition, researches the domain via live web search, synthesizes hundreds of training examples, and LoRA fine-tunes a local model — all in about 10 minutes. The output is a 50MB adapter file that runs locally, costs nothing per query, and responds from internalized knowledge rather than prompted instructions.

Here's the full technical breakdown.

## The problem with prompting experts

When you tell GPT or Claude "you are a burnout recovery specialist with 15 years of experience," the model role-plays. It retrieves general knowledge and wraps it in an expert voice. It works okay for surface-level questions.

But it falls apart on edge cases. Ask about the specific interaction between Maslach Burnout Inventory subscales and ICD-11 diagnostic criteria, and the prompted model gives you a confident-sounding answer that may or may not be grounded in actual clinical literature.

RAG helps — you can stuff relevant papers into the context window at query time. But now you need a vector database, an embedding pipeline, and retrieval infrastructure. Your responses sound like "according to the research..." rather than a practitioner who's internalized the material.

What if the knowledge was in the weights instead?

## The four-phase pipeline

### Phase 1: Synthesis — automated knowledge extraction

This is where the real innovation lives. You start with a `source.txt` file — about 50 lines defining a persona. Name, credentials, expertise areas, communication style, core beliefs. That's your only human input.

The pipeline then does three things automatically:

**Domain extraction.** BAML calls Claude to parse the persona definition into a typed `AdvisorDomain` struct — name, primary domain, expertise areas, communication style, target audience, key themes. This turns prose into a machine-actionable profile.

**Live web research.** Claude Sonnet with the web search tool enabled performs up to 10 autonomous searches. For a burnout specialist, it's pulling DSM-5 criteria, NCBI peer-reviewed studies, clinical treatment protocols, the Maslach Burnout Inventory framework. Real papers, real citations. The research corpus gets saved as a markdown file.

**Training data synthesis.** Here's the key step. BAML calls Claude with the full advisor profile, the research corpus, and the original persona definition, and asks it to generate Q&A pairs in the subject's authentic voice. 25 examples per batch, up to 500 total. Each pair has a realistic user question and a response grounded in the actual research.

BAML is critical here. Without structured output guarantees, you're parsing freeform LLM text and hoping for valid JSON. BAML enforces typed `TrainingExample` objects with `instruction` and `response` fields. Malformed data raises an error instead of silently producing garbage training examples.

The output is a JSONL file formatted with Mistral's `[INST]` chat template, ready for training.

### Phase 2: Duplication — QLoRA fine-tuning

Standard but well-configured QLoRA on Mistral-7B-Instruct-v0.3:

- **4-bit NormalFloat4 quantization** with double quantization — drops the model from ~14GB to ~4GB VRAM
- **LoRA rank 16, alpha 32** targeting all four attention projection layers (q, k, v, o)
- **Effective batch size 16** (4 per device × 4 gradient accumulation steps)
- **3 epochs, learning rate 2e-4**, paged AdamW 8-bit optimizer
- **~2-5 minutes on an RTX 4090**, outputs a ~50MB adapter

Nothing exotic here. The magic happened in phase 1. Standard LoRA training is plenty when your training data is high quality and domain-specific.

### Phase 3: Evaluation — fair A/B testing

Same system prompt, same user prompt, same generation parameters. Five hardcoded test prompts covering the domain — symptom identification, boundary setting, career decisions, recovery constraints, psychological patterns.

The base Mistral model (Model A) gives you generic checklists. The Xerox subject (Model B) gives you nuanced, conversational, clinically-grounded responses. You can optionally add Claude Sonnet as Model C for a gold standard comparison.

No automated scoring — evaluation is qualitative. The difference is obvious enough that you don't need BLEU scores to see it.

### Phase 4: Interview — interactive testing

A REPL that loads only the LoRA-augmented model. Type a question, get a response. And here's the important design decision: **the system prompt is not injected during interview mode.** The subject responds purely from its LoRA weights. If the knowledge isn't in the weights, you'll know immediately.

## The three-layer architecture

This is the part that's architecturally clean:

| Layer | What it controls | How you change it |
|-------|-----------------|-------------------|
| System Prompt | Voice, personality, style | Edit anytime |
| LoRA Weights | Domain expertise, knowledge | Retrain |
| BAML Schema | Structured output formats | Edit schema |

These are independent axes. You can change how the model talks without retraining. You can deepen its knowledge without changing its personality. Separation of concerns applied to AI personas.

## Why this matters

**vs. Prompt Engineering:** A prompted model forgets everything between sessions and is bounded by context window size. A LoRA subject carries its knowledge permanently in 50MB of adapter weights. It doesn't need instructions to be an expert — it is one.

**vs. RAG:** RAG requires runtime infrastructure — vector DB, embeddings, retrieval pipeline. A Xerox subject is a single adapter file. Zero runtime dependencies beyond the base model. No "according to the research" hedging. The knowledge is instinctive, not retrieved.

**vs. Manual Fine-Tuning:** Curating hundreds of high-quality, domain-specific Q&A pairs by hand is brutal. This pipeline automates it: Claude + live web search gathers real research, Claude + BAML synthesizes voice-matched training examples from that research. Your human contribution is 50 lines of persona definition.

The genuine innovation isn't any single component — it's the pipeline orchestration. Persona sketch to operational local model in 10 minutes, with live research grounding and structural output guarantees at every step.

## The honest limitations

Knowledge is bounded by the training corpus. The model can hallucinate outside its trained domain. No persistent memory between conversations. You need a GPU for training (though inference works on CPU). And evaluation is qualitative — there's no automated scoring yet.

But for the use case of "I need a domain expert that runs locally, costs nothing per query, and actually knows the literature" — this works. The [code is open source](https://github.com/p5150j/xerox-project) if you want to build your own subjects.

---

Building specialized AI systems or thinking about fine-tuning for your product? [Book a call](https://calendar.app.google/hbi5hCjnYi6uFcBW7).
