import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperadorRoutingModule } from './operador-routing.module';
import { MantenimientoRoutingModule } from './pages/mantenimiento/mantenimiento-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OperadorRoutingModule,
    MantenimientoRoutingModule
  ]
})
export class OperadorModule { }
