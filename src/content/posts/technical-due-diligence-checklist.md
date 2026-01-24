---
title: "What I Look For in Technical Due Diligence"
description: "I've done diligence for VCs and acquirers. Here's what actually matters — and what's a red flag."
date: "2024-01-01"
tags: ["due-diligence", "investors", "technical-assessment"]
---

I've run technical due diligence for VCs and acquirers more times than I can count. Here's what I actually look at.

## Code Quality

Not just "is it clean" but:

- **Test coverage on critical paths.** I don't care about your overall percentage. I care if your payment flow has tests.
- **Technical debt awareness.** Everyone has debt. Do they know where it is? Are they paying it down?
- **Can a new hire understand this?** I read the codebase like I'm onboarding. If I'm confused, so will your next 10 engineers.
- **Security basics.** Secrets in env vars, not code. Input validation. Auth that isn't homebrew.

## Architecture

- **Can it handle 10x load?** Not theoretical. Show me the bottlenecks you've identified.
- **What breaks if AWS has a bad day?** External dependencies are fine. Single points of failure aren't.
- **Data model sanity.** Is this schema going to paint you into a corner in 18 months?
- **Deployment story.** CI/CD, rollbacks, feature flags. How fast can you ship? How fast can you un-ship?

## Team

This is where most diligence gets it wrong. They focus on code, not people.

- **Bus factor.** What happens when your lead dev quits? (They will eventually.)
- **Knowledge distribution.** Is critical context in one person's head?
- **Can they hire?** Growth plans are worthless if they can't close candidates.
- **How do they handle conflict?** Healthy teams disagree. Dysfunctional teams either never disagree or explode.

## Process

- **How does code get to production?** I want to see the actual workflow, not the ideal one.
- **What was your last incident?** And what did you change afterward?
- **How do you prioritize?** If everything is P0, nothing is.

## Red flags I see constantly

- **"We'll refactor after the raise."** You won't.
- **One person owns all the critical systems.** That's not a senior engineer, that's a liability.
- **"We test manually."** Fine at 2 people. Disaster at 20.
- **Dependencies from 2019.** Security vulnerabilities are a matter of when, not if.
- **No one can explain the architecture.** If the team can't draw it on a whiteboard, they don't understand it.

## Green flags

- **Boring tech stack.** Postgres, React, AWS. It's boring because it works.
- **They've had outages and learned from them.** Zero incidents means they haven't scaled yet or they're not monitoring.
- **Technical roadmap tied to business goals.** They know *why* they're building what they're building.
- **Engineers seem happy.** Low turnover, people speak up in meetings, disagreements get resolved.

---

Need a technical assessment before an investment or acquisition? [Book a call](https://calendar.app.google/hbi5hCjnYi6uFcBW7).
