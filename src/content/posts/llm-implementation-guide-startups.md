---
title: "How to Actually Add LLMs to Your Product"
description: "I shipped the first agentic AI assistant in AgTech before everyone else figured it out. Here's what I learned."
date: "2024-01-08"
tags: ["llm", "ai", "startups", "implementation"]
---

Everyone's adding AI to their product. Most are doing it wrong.

I shipped the first agentic AI assistant in AgTech — at least a year before anyone else in the space figured it out. Since then I've helped dozens of startups add LLM features. Here's what actually works.

## Start with the problem, not the tech

Before you write any code:

1. **What specific problem are you solving?** "Add AI" is not a use case. Neither is "our competitors have it."
2. **How will you know it's working?** Define the metric before you build.
3. **What happens when it fails?** Because it will. What's the fallback?

If you can't answer these clearly, you're not ready to build.

## The hierarchy of LLM approaches

Here's how I think about it:

1. **Prompt engineering with GPT-4/Claude** — Start here. Always. You'd be surprised how far this gets you.
2. **RAG (Retrieval-Augmented Generation)** — When you need your own data in the mix.
3. **Fine-tuning** — When prompts plateau and you have quality training data.
4. **Custom models** — Almost never. Unless you're Anthropic, you're not training foundation models.

90% of startups only need level 1 or 2. I've seen teams burn months on fine-tuning when better prompts would've solved it.

## Costs will bite you

LLM APIs are cheap until they're not. I've seen bills go from $500/month to $50K/month overnight.

- **Cache everything.** Most queries repeat.
- **Use smaller models for simple tasks.** GPT-3.5 or Haiku for classification. Save the big models for complex generation.
- **Set hard limits.** Per user, per day, per request. Non-negotiable.
- **Monitor religiously.** Cost per user, per feature, per prompt type.

## LLMs will fail. Plan for it.

They hallucinate. They're inconsistent. They occasionally return garbage. They get rate limited. APIs go down.

Your system needs graceful degradation for all of these. If your product falls over when OpenAI has a bad day, you have a problem.

## My default stack

For most startups:

- **Model:** OpenAI or Anthropic APIs (I lean Claude lately)
- **Orchestration:** LangChain if you need it, plain code if you don't
- **Vector DB:** pgvector if you're on Postgres, Pinecone if you need scale
- **Monitoring:** Whatever gets you cost visibility. LangSmith, Helicone, or roll your own.

Start simple. Measure everything. Iterate based on what users actually do.

---

Building LLM features and want to avoid the expensive mistakes? [Book a call](https://calendar.app.google/hbi5hCjnYi6uFcBW7).
