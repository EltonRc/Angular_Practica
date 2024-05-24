import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:"registro",
        loadChildren: ()=> import("./pages/registro/registro.module").then(m=>m.RegistroModule)
    },
    // {
    //     path:"mantenmiento",
    //     loadChildren: ()=> import("./pages/registro/registro.module").then(m=>m.RegistroModule)
    // },
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
