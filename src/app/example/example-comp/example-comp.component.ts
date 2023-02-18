import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-example-comp',
  template: `
  Example <br />
  <input type="text" [(ngModel)]= "data" /> <br />
  <ng-content></ng-content>
  `,
})
export class ExampleCompComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, OnDestroy {
  ngOnDestroy(): void {
    console.log("onDestroy");
  }
  ngAfterContentInit(): void {
     console.log("afterContentInit");
  }
  ngDoCheck(): void {
    console.log("doCheck");
  }

  ngOnInit(): void {
    console.log("onInit");
  }

  @Input() data : string; 

  ngOnChanges(_changes: SimpleChanges): void {
    console.log("onChanges");
  }

}
