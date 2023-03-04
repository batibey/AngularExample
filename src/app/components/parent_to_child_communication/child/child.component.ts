import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works!! TEST</p>
  {{childData}}
  `
})
export class ChildComponent {
  @Input() childData: any;
}
