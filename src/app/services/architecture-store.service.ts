import { Injectable, computed, signal } from '@angular/core';
import { ArchitectureLayer } from '../models/architecture-layer.type';

@Injectable({ providedIn: 'root' })
export class ArchitectureStoreService {
  readonly layers = signal<ArchitectureLayer[]>([
    {
      name: 'Bootstrap',
      file: 'main.ts',
      accent: '#2dd4bf',
      summary: 'Starts one standalone application.',
      detail: 'bootstrapApplication composes AppComponent with providers such as the router.'
    },
    {
      name: 'Standalone UI',
      file: 'architecture-page.component.ts',
      accent: '#60a5fa',
      summary: 'A focused component tree.',
      detail: 'Standalone components own their imports, template, styles, inputs, and outputs.'
    },
    {
      name: 'Services + DI',
      file: 'data-gateway.service.ts',
      accent: '#fbbf24',
      summary: 'Shared logic behind an injectable boundary.',
      detail: 'Dependency injection keeps UI thin and makes shared capabilities easy to test.'
    },
    {
      name: 'Routing',
      file: 'app.routes.ts',
      accent: '#fb7185',
      summary: 'URLs select screen-level components.',
      detail: 'The Router renders the matching page in a router outlet.'
    },
    {
      name: 'State + data',
      file: 'architecture-store.service.ts',
      accent: '#a78bfa',
      summary: 'Signals drive precise UI updates.',
      detail: 'Services translate API responses into application state; signals refresh affected views.'
    }
  ]);

  readonly selectedName = signal('Bootstrap');
  readonly selected = computed(() =>
    this.layers().find(layer => layer.name === this.selectedName()) ?? this.layers()[0]
  );

  select(name: string) {
    this.selectedName.set(name);
  }
}
