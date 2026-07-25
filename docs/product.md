# Bookspace Product Context

Bookspace is an AI-powered reading workspace for people who actively study books instead of simply reading them.

This document is the primary product context for development. Use it to make consistent product, UX, and implementation decisions.

## Purpose

Bookspace helps readers turn books into structured understanding.

The application combines:

- PDF reading
- Annotation management
- AI-powered learning
- Personal knowledge organization

Bookspace should feel like a focused hybrid of Kindle, VS Code, Notion, and ChatGPT: calm reading, powerful navigation, structured notes, and contextual AI assistance.

## Product Vision

Traditional e-readers are optimized for consuming text. Bookspace is optimized for studying text.

Readers should be able to open a PDF, stay immersed in the document, highlight important passages, write notes, ask AI questions about selected text, and organize knowledge without losing the original source context.

The product should support deep work. It should feel minimal, fast, and distraction-free, while still giving advanced users efficient tools for navigation and study.

## Core Principles

1. Reading is the primary experience.
2. The PDF is always the main focus.
3. AI assists the reader without interrupting the reading flow.
4. Notes, highlights, bookmarks, and AI conversations remain connected to the source text.
5. Navigation should require as few clicks as possible.
6. The interface should feel minimal, fast, and distraction-free.

## Target Users

Bookspace is designed for people who read with intent:

- Students
- Researchers
- Software engineers
- Professionals
- Lifelong learners

These users often need to extract ideas, compare passages, return to references, and transform reading into durable knowledge.

## Product Positioning

Bookspace is not just a PDF viewer and not just an AI chat interface.

It is a reading workspace where every tool exists to support the document being studied.

Use this positioning when making product decisions:

- If a feature improves focused reading, it is likely valuable.
- If a feature helps preserve source context, it is likely valuable.
- If a feature pulls attention away from the document without improving study, it should be reconsidered.
- If AI output cannot be traced back to source text, it should be treated as incomplete.

## Primary Experience

The main screen should center on the PDF reader.

Expected workspace areas:

- Main document canvas for reading.
- Compact navigation for pages, table of contents, search, and document structure.
- Annotation tools for highlights, notes, bookmarks, and selections.
- Contextual AI panel for questions, explanations, summaries, and study prompts.
- Knowledge area for collected notes and extracted ideas.

The interface should avoid heavy visual decoration. The document, annotations, and AI context should carry the experience.

## Functional Requirements

### Library

Users should be able to:

- Add PDF books or documents.
- View their reading library.
- Search and filter documents.
- See reading progress and recent activity.
- Open a document directly into the reading workspace.

### PDF Reading

Users should be able to:

- Read PDF documents smoothly.
- Navigate by page number.
- Zoom in and out.
- Search inside the document.
- Use a table of contents when available.
- Resume from the last reading position.

### Annotations

Users should be able to:

- Highlight selected text.
- Create notes attached to text or pages.
- Add bookmarks.
- Edit and delete annotations.
- See annotations in context inside the document.
- Navigate from an annotation back to its source location.

### AI Assistance

Users should be able to:

- Ask questions about selected text.
- Ask questions about the current page or document.
- Request explanations, summaries, examples, and study questions.
- Keep AI conversations connected to source passages.
- Reopen previous AI conversations from the relevant document context.

AI should be contextual, not generic. Whenever possible, AI responses should reference the source passage, page, annotation, or document section that informed the answer.

### Knowledge Organization

Users should be able to:

- Collect notes across a document.
- Group highlights and notes by topic.
- Convert important passages into study notes.
- Review saved ideas independently from the PDF.
- Return from any saved idea to the original source text.

## UX Principles

### Reading First

The PDF should remain visually dominant. Side panels and tools should support reading without competing with it.

### Contextual Tools

Actions should appear where they are useful. Text selection should expose annotation and AI actions. Page-level actions should live near navigation or document context.

### Minimal Friction

Common actions should be fast:

- Highlight selected text.
- Add a note.
- Ask AI about a passage.
- Jump to a bookmark.
- Search the document.
- Return to the previous reading position.

### Source-Connected Knowledge

Every annotation, note, and AI thread should preserve enough metadata to return to the source:

- Document ID
- Page number
- Text selection when available
- Position or bounding box when available
- Created date
- Related annotation or conversation ID when applicable

## Suggested Domain Modules

The backend should follow the modular monolith and hexagonal architecture described in [architecture.md](architecture.md).

Likely business modules:

- `library`: document ownership, metadata, reading progress, recent documents.
- `reader`: reading sessions, current position, document structure.
- `annotations`: highlights, notes, bookmarks, source locations.
- `ai-assistant`: AI conversations, prompts, source-grounded responses.
- `knowledge`: saved ideas, study notes, topic grouping.
- `users`: accounts, preferences, and access control.

These module names can evolve, but business boundaries should remain explicit.

## Data Concepts

Important product concepts include:

- User
- Document
- Reading session
- Reading position
- Page
- Text selection
- Highlight
- Note
- Bookmark
- AI conversation
- AI message
- Source reference
- Knowledge item
- Topic

Use source references as a first-class concept. Bookspace should always know where a piece of knowledge came from.

## AI Behavior Guidelines

AI features should:

- Help the user understand the text.
- Prefer grounded answers based on the active document context.
- Make source context visible when available.
- Support follow-up questions without losing the selected passage or document context.
- Avoid taking over the interface or hiding the PDF.

AI features should not:

- Replace the reading experience.
- Produce disconnected notes with no source reference.
- Interrupt the user while reading.
- Require a chat-first workflow for basic annotation tasks.

## MVP Scope

A useful first version should include:

- PDF upload and library view.
- PDF reader with page navigation, zoom, and text search.
- Highlights, notes, and bookmarks.
- Source-linked annotation list.
- AI question answering for selected text.
- Persistent AI conversation history per document.
- Reading progress and resume position.

## Non-Goals For Early Versions

Avoid prioritizing these until the core reading workflow is strong:

- Social reading features.
- Public sharing.
- Marketplace functionality.
- Complex publishing workflows.
- Full Notion-style document editing.
- Generic chatbot experiences unrelated to a document.

## Decision Checklist

When adding or changing a feature, ask:

1. Does this keep reading as the primary experience?
2. Does this preserve source context?
3. Can users complete the action with minimal interruption?
4. Does this fit a clear business module?
5. Can the behavior be tested without relying on the full UI?
6. Is AI assisting the study flow instead of replacing it?
