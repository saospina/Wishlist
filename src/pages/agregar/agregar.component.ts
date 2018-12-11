import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';
import { Lista } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarPage {

    lista: Lista;
    constructor(public deseosService: DeseosService,
        private navParams: NavParams) {
        const titulo = this.navParams.get('title');
        this.lista = new Lista(titulo);




    }


}