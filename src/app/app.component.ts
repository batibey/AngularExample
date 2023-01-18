import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <p>
    {{person.name}}
  </p>  
  
  `,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  person!: { name: string; surname: string; };
}
