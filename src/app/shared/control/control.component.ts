import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //To disable the component encapsulation allowing elements outside this component to still get the css details.
  host: {
    class: 'control' //adds this as a property to your component selector (host element).
  }
})
export class ControlComponent {
  @Input({required: true}) label!: string;
}
