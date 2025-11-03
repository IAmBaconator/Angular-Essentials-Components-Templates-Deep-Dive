import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild, viewChildren } from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit{
  @ViewChild('form') form?: ElementRef<HTMLFormElement>; //Decorator to pull from template form.
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //Available in A17.3, signal related feature that works like a decorator.
  //@Output() add = new EventEmitter(<{title: string; text: string;}>); //Legacy approach.
  enteredTitle = ''; // non-signal option.
  enteredText = '';
  add = output<{title: string; text: string;}>(); //Alternatvie more moder approach.

  ngOnInit(): void {
    console.log('ONINIT'); // Hook garenteed that the template has been initialized.
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('AFTER VIEW INIT'); // Hook garenteed that the template has been initialized.
    console.log(this.form?.nativeElement);
  }

  onSubmit() {
    // console.dir(titleElement); //https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement
    // const enteredTitle = titleElement.value;
    // console.log('ENTERED TITLE: ' + enteredTitle);
    // console.log(title);
    // console.log(ticketText);
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });

    //this.form?.nativeElement.reset();
    //this.form?.nativeElement.reset();
    this.enteredTitle = '';
    this.enteredText = '';
  }
}
