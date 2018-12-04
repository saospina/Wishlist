import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';
import { Lista } from '../../models';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html',
})
export class PendientesPage{
    constructor ( public deseosService: DeseosService) {



    }
    listaSeleccionada(lista: Lista){
        console.log(lista);
        

    }

}