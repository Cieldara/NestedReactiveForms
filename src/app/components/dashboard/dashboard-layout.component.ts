import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { DashboardLayoutService, IComponent } from '../../services/dashboard-layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './dashboard-layout.component.html',
    styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

    get options(): GridsterConfig {
        return this.layoutService.options;
    }

    get layout(): GridsterItem[] {
        return this.layoutService.layout;
    }

    get components(): IComponent[] {
        return this.layoutService.components;
    }

    start(event, widgetIdentifier) {
        event.dataTransfer.setData('widgetIdentifier', widgetIdentifier);
    }

    onDrop(event) {
        this.layoutService.addItemOnDrag(event.dataTransfer.getData('widgetIdentifier'));
    }

    prevent(event) {
        event.preventDefault();
    }

    serial() {
        console.log(JSON.stringify(this.layout));
        console.log(JSON.stringify(this.components));
    }

    constructor(
        private layoutService: DashboardLayoutService
    ) { }

    ngOnInit() {
    }

}
