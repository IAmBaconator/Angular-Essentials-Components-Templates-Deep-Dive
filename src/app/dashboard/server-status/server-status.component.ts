import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {} // should really only reserve the constructor() for initializing classes and other small things to keep it clean.
  // Ref: Constructor Lifestyle https://angular.dev/guide/components/lifecycle

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random(); // Will produce a value between 0 and 0.9999999999999

      if (rnd > 0.5) {
        this.currentStatus = 'online';
      } else if (rnd > 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

}
