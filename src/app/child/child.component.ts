import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() x;
  @Output() counterChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increment() {
    this.x += 1;
    this.counterChange.emit({ value: this.x });
  }

}
