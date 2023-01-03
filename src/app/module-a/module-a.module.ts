import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';



@NgModule({
  declarations: [
    A1Component,
    A2Component
  ],
  imports: [
    CommonModule
  ],
  exports: [
    A1Component,
    A2Component,
  ],
})
export class ModuleAModule { }
