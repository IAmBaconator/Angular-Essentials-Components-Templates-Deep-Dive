import { Component, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None //To disable the component encapsulation allowing elements outside this component to still get the css details.
})
export class ControlComponent {
  @Input({required: true}) label!: string;
}
