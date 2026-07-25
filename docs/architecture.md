# Architecture

This project uses a modular monolith with hexagonal architecture.

The goal is to keep one deployable application while preserving strong module boundaries. Each business capability should be implemented as an independent module with its own domain model, application use cases, ports, and adapters.

## Architectural Style

### Modular Monolith

A modular monolith means the system is built, tested, and deployed as one application, but the code is organized into business modules that should be able to evolve independently.

Use this style when adding features:

- Prefer one module per business capability.
- Keep module internals private by default.
- Share behavior through explicit public APIs, not by reaching into another module's folders.
- Avoid cross-module database access. A module owns its persistence model.
- Do not create microservice-style boundaries unless there is a real deployment need.

### Hexagonal Architecture

Hexagonal architecture keeps business rules independent from frameworks, databases, queues, HTTP, and other external systems.

Dependencies must point inward:

```text
External world
  -> Adapters
    -> Application
      -> Domain
```

The domain must not depend on NestJS, ORM decorators, HTTP DTOs, environment variables, or infrastructure libraries.

## Backend Module Shape

New backend modules should follow this shape inside `backend/src/modules/<module-name>`:

```text
<module-name>/
  domain/
    entities/
    value-objects/
    services/
    events/
  application/
    use-cases/
    ports/
    dto/
  infrastructure/
    persistence/
    providers/
    external-services/
  presentation/
    http/
      controllers/
      dto/
  <module-name>.module.ts
```

Use the folders only when they are needed. Small modules can start smaller, but they should keep the same dependency direction.

## Layer Responsibilities

### Domain

The domain layer contains business concepts and rules.

Allowed here:

- Entities
- Value objects
- Domain services
- Domain events
- Business invariants

Avoid here:

- NestJS decorators
- Database or ORM code
- HTTP request or response types
- Logging, configuration, or framework concerns

### Application

The application layer coordinates use cases.

Allowed here:

- Use case classes
- Application services
- Input and output DTOs for use cases
- Port interfaces required by the use cases
- Transaction boundaries when needed

Application code can depend on the domain, but not on concrete infrastructure adapters.

### Infrastructure

The infrastructure layer implements technical details.

Allowed here:

- Repository implementations
- ORM entities and mappers
- External API clients
- Queue, cache, storage, and email adapters
- Framework-specific providers

Infrastructure code can depend on application ports and domain models.

### Presentation

The presentation layer handles delivery mechanisms.

Allowed here:

- HTTP controllers
- Request DTOs and validation
- Response presenters
- Authentication and authorization guards for transport concerns

Controllers should be thin. They should validate and map inputs, call a use case, and map the result into an HTTP response.

## Ports And Adapters

Define ports in `application/ports` when application logic needs something outside itself.

Example:

```ts
export interface BookRepository {
  findById(id: string): Promise<Book | null>;
  save(book: Book): Promise<void>;
}
```

Implement that port in infrastructure:

```ts
export class PrismaBookRepository implements BookRepository {
  // database-specific implementation
}
```

Bind the implementation in the Nest module for that business module.

## Module Communication

Prefer these options, in order:

1. Call another module through an exported application service or use case.
2. Publish and handle domain/application events for asynchronous workflows.
3. Extract shared primitives only when duplication becomes harmful.

Avoid importing another module's infrastructure, persistence models, or private domain internals.

## Shared Code

Shared code belongs in `backend/src/shared` only when it is truly generic and stable.

Good shared candidates:

- Result types
- Base errors
- Date or ID utilities
- Cross-cutting interfaces

Poor shared candidates:

- Business rules owned by one module
- Database models
- DTOs created for one endpoint
- Generic helper code used only once

## Naming Guidelines

Use names that describe business intent.

- Use cases: `CreateBookUseCase`, `RegisterUserUseCase`
- Ports: `BookRepository`, `PasswordHasher`, `EmailSender`
- Infrastructure adapters: `PrismaBookRepository`, `BcryptPasswordHasher`
- Controllers: `BooksController`

Prefer explicit names over broad names like `Manager`, `Handler`, or `Helper`.

## Testing Strategy

Test according to the layer:

- Domain: unit tests for business rules without NestJS testing utilities.
- Application: unit tests with mocked ports.
- Infrastructure: integration tests when talking to databases or external systems.
- Presentation: controller or e2e tests for request validation and HTTP behavior.

Most business behavior should be testable without booting the full Nest application.

## Implementation Checklist

When adding a feature:

1. Identify the business module that owns it.
2. Put business rules in the domain layer.
3. Add a use case in the application layer.
4. Define ports for external dependencies.
5. Implement ports in infrastructure.
6. Keep controllers thin in presentation.
7. Export only the minimum API other modules need.
8. Add tests at the layer where the behavior lives.

## Current Direction

The current backend is a NestJS application under `backend/`. As features are added, prefer moving from the default starter files toward the module structure described here.
