import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import {MatSortModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule
  ]
})

export class AngularMaterialModule {}
