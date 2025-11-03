import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit { // protect code by implementing intefaces to ensure propery spelling of lifestyle methods.
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
 // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      console.log(this.currentStatus());// Angular will now setup a subscription.
    });
    console.log('Initial status only: ' +this.currentStatus());// will only show this at the time the page loads. Angular will not setup a subscription here.
  } // should really only reserve the constructor() for initializing classes and other small things to keep it clean.
  // Ref: Constructor Lifestyle https://angular.dev/guide/components/lifecycle

  ngOnInit() {
    console.log('ON INIT');
    const interval = setInterval(() => {
      const rnd = Math.random(); // Will produce a value between 0 and 0.9999999999999

      if (rnd > 0.5) {
        this.currentStatus.set('online');
      } else if (rnd > 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    }); // Alternative (A16+) method of app cleanup replacing the ngOnDestroy() method.
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  //   console.log('Interval Destroyed.'); // Clean up is good practice to battle against memory leaks.
  // }

}
