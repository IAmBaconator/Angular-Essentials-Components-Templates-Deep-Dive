import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';
import { RectComponent } from '../../shared/rect/rect.component';


@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, RectComponent, FormsModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  // Custom Two-way Binding
  rectSize = {
    width: '100',
    height: '100',
  };

  // Tickets Binding
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string; }) {
    const ticket: Ticket = {
      title: ticketData.title,
      request: ticketData.text,
      id: Math.random().toString(),
      status: 'open'
    }

    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {...ticket, status: 'closed' }
      }
      return ticket;
    });
  }

}
