# Agent Instructions

## Product Context

Read and follow [docs/product.md](docs/product.md) before making product, UX, or feature decisions.

Bookspace is an AI-powered reading workspace for people who study books deeply. The PDF reader is the primary experience, and notes, highlights, bookmarks, and AI conversations must remain connected to source text.

## Project Architecture

Read and follow [docs/architecture.md](docs/architecture.md) before creating or changing backend modules.

The project is intended to use a modular monolith with hexagonal architecture. Keep module boundaries explicit, keep domain code independent from frameworks and infrastructure, and make dependencies point inward.
