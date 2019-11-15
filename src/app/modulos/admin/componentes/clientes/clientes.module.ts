import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesRoutingModule} from './clientes-routing.module';


// Componentes
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListarComponent } from './listar/listar.component';
import { PrincipalComponent } from './principal/principal.component';

@NgModule ({
    declarations: [
        AddComponent,
        EditComponent,
        ListarComponent,
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ClientesRoutingModule
    ],
    providers: [],
    exports: [
        AddComponent,
        EditComponent,
        ListarComponent,
        PrincipalComponent
    ]
})

export class ClientesModule { }