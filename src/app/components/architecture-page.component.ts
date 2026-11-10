import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ArchitectureStoreService } from '../services/architecture-store.service';
import { DataGatewayService } from '../services/data-gateway.service';

@Component({
  selector: 'architecture-page',
  standalone: true,
  templateUrl: './architecture-page.component.html',
  styleUrl: './architecture-page.component.css',
})
export class ArchitecturePageComponent {
  readonly store = inject(ArchitectureStoreService);
  private readonly gateway = inject(DataGatewayService);
  private readonly router = inject(Router);
  readonly message = signal('Ready to explore the data flow.');

  refresh(): void {
    this.message.set('Refreshing through a service...');
    this.gateway.refresh().subscribe((text) => this.message.set(text));
  }

  openRoutingExample(): void {
    void this.router.navigate(['/routing-example']);
  }
}
