import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemPerJurComponent } from './rem-per-jur/rem-per-jur.component';
import { RemPerNatComponent } from './rem-per-nat/rem-per-nat.component';

const routes:Routes = [
    {
        path:"Jur",
        component:RemPerJurComponent
    },
    {
        path:"Nat",
        component:RemPerNatComponent
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"Jur",
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule],
})
export class MantenimientoRoutingModule { }
