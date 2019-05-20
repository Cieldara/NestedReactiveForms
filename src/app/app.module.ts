import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { DashboardLayoutComponent } from './components/dashboard/dashboard-layout.component';
import { DashboardLayoutItemDirective } from './directives/dashboard-layout-item.directive';
import { DashboardLayoutService } from './services/dashboard-layout.service';
import { Example1Component } from './components/example1/example1.component';
import { GridsterModule } from 'angular-gridster2';
import { Example2Component } from './components/example2/example2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PageBuilderComponent,
    FirstPageComponent,
    SecondPageComponent,
    DashboardLayoutComponent,
    DashboardLayoutItemDirective,
    Example1Component,
    Example2Component
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    GridsterModule

  ],
  providers: [DashboardLayoutService],
  bootstrap: [AppComponent],
  entryComponents: [Example1Component, Example2Component],
})
export class AppModule { }
