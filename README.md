# Angular Architecture (Introduction)

An interactive Angular learning lab for interns. The app makes the main architectural building blocks visible: application bootstrap, standalone components, templates, dependency injection, routing, signals, and a service-driven data boundary.

## Start here

- Open **Application flow** and select a layer to inspect its responsibility.
- Use **Simulate data refresh** to see a component call a service and update reactive state.
- Select **Routing**, then choose **Open routing example →** to trigger programmatic navigation to `/routing-example`.

## What this project demonstrates

- **Standalone application bootstrap** with `bootstrapApplication`.
- **Standalone components** with separate TypeScript, HTML, and CSS files.
- **Modern control flow**: `@for` renders the architecture layers and `@if` shows the contextual routing note.
- **Templates and binding** through interpolation, property bindings, event bindings, and class/style bindings.
- **Services and dependency injection** using `inject()`.
- **Signals** for focused reactive UI state.
- **Routing** with routes defined in `app.routes.ts`, declarative links, and `Router.navigate()`.
- **HTTP/API boundary concept** represented by a data gateway service, keeping components focused on UI work.

## Project structure

```text
src/
├── main.ts                                  # Bootstraps the standalone app
├── styles.css                               # Global styles
└── app/
    ├── app.component.ts|html|css            # App shell, header, footer, router outlet
    ├── app.routes.ts                         # URL-to-component route definitions
    ├── components/
    │   ├── architecture-page.component.*    # Interactive architecture map
    │   └── routing-example.component.*      # Dedicated route example
    ├── models/
    │   └── architecture-layer.type.ts       # Shared layer type
    └── services/
        ├── architecture-store.service.ts    # Signal-based layer selection state
        └── data-gateway.service.ts          # Simulated data boundary
```

## Request and data flow

`Browser → Router → Component → Service → HTTP/API boundary → Signal update → Template`

Each step has one responsibility: the router selects a screen, the component handles presentation, services own reusable logic and data access, and signals update the affected UI.

## Routes

| Path | Component | Purpose |
| --- | --- | --- |
| `/architecture` | `ArchitecturePageComponent` | Main interactive lesson |
| `/routing-example` | `RoutingExampleComponent` | Simple URL-to-component routing demonstration |

## Discussion prompts

1. Why is the app bootstrapped from `main.ts` instead of an NgModule?
2. Which responsibilities belong in a component versus a service?
3. How does `@for (layer of layers; track layer.name)` improve on a structural `*ngFor` example?
4. What happens after `Router.navigate(['/routing-example'])` runs?
5. Where would a real `HttpClient` request belong in this structure?

## Tech notes

The project uses modern Angular standalone APIs and Angular control-flow syntax. It is designed for explanation and exploration rather than production API integration.