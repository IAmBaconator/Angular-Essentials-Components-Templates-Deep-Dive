import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy{ // protect code by implementing intefaces to ensure propery spelling of lifestyle methods.
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constructor() {} // should really only reserve the constructor() for initializing classes and other small things to keep it clean.
  // Ref: Constructor Lifestyle https://angular.dev/guide/components/lifecycle

  ngOnInit() {
    console.log('ON INIT');
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

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
    console.log('Interval Destroyed.'); // Clean up is good practice to battle against memory leaks.
  }

}
