import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path:"operador",
        loadChildren: ()=> import("./modules/operador/operador.module").then(m=>m.OperadorModule)

    },
    {
        path:"",
        pathMatch:"full",
        redirectTo:"operador"
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
  