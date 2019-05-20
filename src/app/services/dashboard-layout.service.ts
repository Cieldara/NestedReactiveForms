import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
    id: string;
    componentRef: string;
    configuration: {};
}

@Injectable({
    providedIn: 'root'
})
export class DashboardLayoutService {

    public options: GridsterConfig = {
        draggable: {
            enabled: true
        },
        pushItems: true,
        resizable: {
            enabled: true
        }
    };

    public layout: GridsterItem[] = [];
    public components: IComponent[] = [];

    constructor() { }

    addItemOnDrag(dragId: string): void {
        const newID = UUID.UUID();
        const { components } = this;
        this.layout.push({
            cols: 5,
            id: newID,
            rows: 5,
            x: 0,
            y: 0,
        });
        const componentItem: IComponent = {
            id: newID,
            componentRef: dragId,
            configuration: {
                message: 'In a bottle',
            },
        };
        const comp: IComponent = components.find(c => c.id === newID);
        const updateIdx: number = comp ? components.indexOf(comp) : components.length;
        this.components = Object.assign([], this.components, { [updateIdx]: componentItem });
    }

    deleteItem(id: string): void {
        const item = this.layout.find(d => d.id === id);
        this.layout.splice(this.layout.indexOf(item), 1);
        const comp = this.components.find(c => c.id === id);
        this.components.splice(this.components.indexOf(comp), 1);
    }

    getComponentRef(id: string): string {
        const comp = this.components.find(c => c.id === id);
        return comp ? comp.componentRef : null;
    }

}
