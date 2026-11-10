import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataGatewayService {
  refresh() {
    return of('Service refreshed a simulated HTTP response.').pipe(delay(350));
  }
}
