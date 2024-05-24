import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaPvdComponent } from './entrada-pvd/entrada-pvd.component';
import { EntradaRccComponent } from './entrada-rcc/entrada-rcc.component';
import { RegistroRoutingModule } from './registro-routing.module';



@NgModule({
  declarations: [
    EntradaPvdComponent,
    EntradaRccComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule
  ]
})
export class RegistroModule { }
