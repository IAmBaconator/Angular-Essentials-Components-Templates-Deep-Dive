import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, //To disable the component encapsulation allowing elements outside this component to still get the css details.
  host: {
    class: 'control', //adds this as a property to your component selector (host element).
    '(click)': 'onClick()' //recommended option for listening to component elements.
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'; //Alternative option instead of host: {class} above, but this is a legacy option.
  // @HostListener() //Alternative option instead of host: {'(click)'} above, but this is a legacy option.
  @Input({required: true}) label!: string;

  onClick() {
    console.log('Clicked!');
  }
}
