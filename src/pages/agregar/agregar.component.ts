import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';
import { Lista } from '../../models';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarPage {
    constructor(public deseosService: DeseosService) {



    }


}