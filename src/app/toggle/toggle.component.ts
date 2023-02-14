import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {

  @Input() triggerText?: string;

  open = false;
  toggle() {
    this.open = !this.open;
  }
}
