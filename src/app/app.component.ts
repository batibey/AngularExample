import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `


  <div *appCustomif="true">
    custom if
  </div>
  <ul>
    <li *appCustomfor="5; let i = index">custom for {{i}}</li>
  </ul>
  
  `
})

export class AppComponent {
  person!: { name: string; surname: string; }; 
}
