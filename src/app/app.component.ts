import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
  <div *appCustomif="true">
    custom if
  </div>
  {{"lorem ipsum dolor sit amed" | custom : 2 : 15}}
  <ul>
    <li *appCustomfor="names; let name; let index = index">{{name | uppercase}} - - {{index}}</li>
  </ul>
  `
})

export class AppComponent {
  constructor(private custom : CustomPipe){
    console.log(custom.transform("dgsgsfgf", 3, 6));
  }
  names : string[] = ["Mustafa", "Bati"];
}
