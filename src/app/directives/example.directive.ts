import { Directive } from '@angular/core';

@Directive({
  selector: '[appExample]'// uygulama seviyesinde directive'i kullanmamızı sağlayan referanstır
})
export class ExampleDirective {

  constructor() { }

}
