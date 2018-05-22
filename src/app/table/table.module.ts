import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDecoratorComponent } from './components/table-decorator/table-decorator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TableDecoratorComponent],
  exports: [TableDecoratorComponent],
  providers: []
})
export class TableModule { }
