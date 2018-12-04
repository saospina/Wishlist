import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html',
})
export class PendientesPage{
    constructor ( public deseosService: DeseosService) {


    }

}