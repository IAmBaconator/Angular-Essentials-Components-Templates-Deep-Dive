import { Component, input, output, signal } from '@angular/core';

import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>(); // to values that can be used, alias & transform.
  close = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    //this.detailsVisible.update((wasVisible) => !wasVisible); //Alternative way to update this signal.
  }

  onMarkAsCompleted() {
    this.close.emit();
  }
}
