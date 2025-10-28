import { Component, ElementRef, viewChild, ViewChild, viewChildren } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>; //Decorator to pull from template form.
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //Available in A17.3, signal related feature that works like a decorator.


  onSubmit(title: string, ticketText: String) {
    // console.dir(titleElement); //https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
    // const enteredTitle = titleElement.value;
    // console.log('ENTERED TITLE: ' + enteredTitle);
    console.log(title);
    console.log(ticketText);
    
    //this.form?.nativeElement.reset();
    this.form().nativeElement.reset();
  }
}
