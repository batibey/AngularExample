import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `


  <div appExample color="green">
    test
  </div>
  
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  person!: { name: string; surname: string; }; 
}
