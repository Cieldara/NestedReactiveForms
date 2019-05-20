import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-example1',
    templateUrl: './example1.component.html',
    styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {

    @Input() configuration: { message: string };
    @Output() configurationChange = new EventEmitter();

    changeText() {
        this.configuration.message = 'new';
    }

    constructor() { }

    ngOnInit() {
    }

}
