import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `


  <div *appCustomif="true">
    custom if
  </div>

  <ul>
    <li *appCustomfor="names; let name; let index = index">{{name}} - - {{index}}</li>
  </ul>
  
  `
})

export class AppComponent {
  names : string[] = ["Mustafa", "Batı"];
}
