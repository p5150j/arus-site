---
title: "Building a Multi-Agent AI Platform From Scratch"
description: "How I architected LifePath — a generative collective intelligence platform — and the hard technical lessons from shipping it."
date: "2025-02-10"
tags: ["ai", "architecture", "firebase", "cloud-tasks", "llm"]
---

I've been advising startups on AI architecture for years. But I also build. My latest project, [LifePath](https://lifepathapp.xyz), is a generative collective intelligence platform — multiple AI personas that debate a user's situation from different angles and synthesize a plan. Think advisory board as a service.

Here's what I learned building it, and what I'd tell any founder attempting something similar.

## The architecture that actually shipped

**Monorepo with Turborepo.** Next.js frontend, Expo mobile app, Firebase Functions backend, and a shared types package — all in one repo. When a Firestore document shape changes, TypeScript catches it across web, mobile, and backend simultaneously. If you're building cross-platform with a shared backend, this is the move.

**Claude Opus 4.5 + BAML for structured outputs.** Every AI response needs to be typed and predictable. BAML gives you TypeScript-safe structured outputs from Claude — no regex parsing, no hoping the model follows your format. One gotcha I burned time on: BAML streaming returns cumulative text, not incremental chunks. Track what you've already processed or you'll duplicate everything.

**Firebase Functions + Cloud Tasks for orchestration.** This is where the real lesson lives.

## Sequential processing will kill your product

V1 was a single monolithic function. Each AI advisor processed sequentially — 30 to 90 minutes per analysis. Nobody's waiting that long.

V2 uses Cloud Tasks for parallel processing. The entry function runs in 60 seconds, then fans out parallel tasks for each advisor. Performance went from 30+ minutes to 5-15. That's a 5-7x improvement from one architectural change.

If your AI pipeline processes things one at a time, fix that before you build anything else. Cloud Tasks give you parallel execution, automatic retries, and explicit error handling. Firestore checkpointing means you can resume from failure points without reprocessing everything.

## The voice and video pipeline nobody warns you about

Each advisor has a unique voice (ElevenLabs) and a generated face (Google Imagen 3.0) with lipsync video (RunPod). The pipeline: TTS generates audio at ~1.4s per block with Flash v2.5, RunPod syncs the face to the audio, FFmpeg concatenates clips, everything lands in Firebase Storage.

This is where costs and latency compound fast. Every additional media format multiplies your processing time, storage costs, and failure surface. My advice: ship text-only first. Add audio when users ask for it. Add video last. We did it the hard way — building all three simultaneously — and the debugging surface area was brutal.

## Real-time progress is non-negotiable for long-running AI

When your product takes minutes to produce results, users need to see progress or they'll bounce. Firestore acts as the real-time bus — the backend writes granular progress updates as each advisor completes, and the frontend streams those updates live.

This isn't optional. I've seen startups ship AI features with a spinner and wonder why completion rates are terrible. Show the work.

## What I'd tell founders building multi-agent systems

**Start with the orchestration layer.** Don't start with the AI prompts. Start with how you'll manage parallel execution, handle failures, and stream progress. Get that right first.

**Structured outputs from day one.** Don't parse freeform LLM text. Use BAML, function calling, or whatever gets you typed responses. You'll thank yourself when you need to change output formats.

**Separate your concerns aggressively.** Frontend on Netlify, backend on Google Cloud, media generation on RunPod. Each service scales and fails independently. A video generation failure shouldn't block text delivery.

**Custom personas are harder than they sound.** Generating a consistent character — with a backstory, a worldview, a face, and a voice — requires coordinating multiple AI services. Imagen for the avatar, Claude for the personality, ElevenLabs for voice selection. Each has its own latency and failure modes. Budget more time than you think.

**Homogeneity is the enemy.** Early users were clear: they want the advisor who disagrees. If all your agents reach the same conclusion, you've built an expensive echo chamber. Deliberately engineer for dissent.

---

Building a multi-agent system or complex AI pipeline? [Book a call](https://calendar.app.google/hbi5hCjnYi6uFcBW7) and I'll help you skip the expensive mistakes.
