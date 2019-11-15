import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Componentes modulo clientes
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListarComponent } from './listar/listar.component';
import { PrincipalComponent } from './principal/principal.component';

const clienteRoutes: Routes = [
    { path: 'panel-clientes', component: PrincipalComponent, 
        children: [
            {path: '', redirectTo: 'listar', pathMatch: 'full' },
            {path: 'add', component: AddComponent},
            {path: 'listar', component: ListarComponent},
            {path: 'edit', component: EditComponent}
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(clienteRoutes) ],
    exports: [RouterModule]
})

export class ClientesRoutingModule {}