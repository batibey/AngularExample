import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template : `
  <app-example-comp data="merhaba"></app-example-comp>
  `
})

export class AppComponent {
  
}
