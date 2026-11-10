import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'routing-example',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './routing-example.component.html',
  styleUrl: './routing-example.component.css'
})
export class RoutingExampleComponent {}
