import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
  //host: {
  //  class: 'dashboard-item'
  //} //though this option works, it may not work to your advantage since this is looking for the element.class you removed from the template and this only extends to this component without including the encaspulation.none.
})
export class DashboardItemComponent {
  @Input({required: true}) image!: { src: string; alt: string; };
  @Input({required: true}) title!: string;
}
