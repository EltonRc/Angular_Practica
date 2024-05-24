import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemPerJurComponent } from './rem-per-jur/rem-per-jur.component';
import { RemPerNatComponent } from './rem-per-nat/rem-per-nat.component';
import { RegistroRoutingModule } from '../registro/registro-routing.module';



@NgModule({
  declarations: [
    RemPerJurComponent,
    RemPerNatComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class MantenimientoModule { }
