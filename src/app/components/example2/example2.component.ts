import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-example2',
    templateUrl: './example2.component.html',
    styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {

    @Input() configuration: Object;

    constructor() { }

    ngOnInit() {
    }

}
