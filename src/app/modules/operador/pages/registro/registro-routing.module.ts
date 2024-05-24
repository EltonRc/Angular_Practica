import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradaPvdComponent } from './entrada-pvd/entrada-pvd.component';
import { EntradaRccComponent } from './entrada-rcc/entrada-rcc.component';

const routes:Routes = [
    {
        path:"pvd",
        component:EntradaPvdComponent
    },
    {
        path:"rcc",
        component:EntradaRccComponent
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"rcc",
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule],
})
export class RegistroRoutingModule { }
