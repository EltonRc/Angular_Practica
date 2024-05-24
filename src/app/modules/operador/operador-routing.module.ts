import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:"registro",
        loadChildren: ()=> import("./pages/registro/registro.module").then(m=>m.RegistroModule)
    },
    {
         path:"mantenimiento",
         loadChildren: ()=> import("./pages/mantenimiento/mantenimiento.module").then(m=>m.MantenimientoModule)
    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"mantenimiento",
    },
]

@NgModule({
    imports: [ RouterModule.forChild(routes)],
    exports: [ RouterModule],
  })
export class OperadorRoutingModule { }
