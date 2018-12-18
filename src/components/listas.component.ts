import { Component } from '@angular/core';
import { DeseosService } from '../providers/deseos.service';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';



@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html',
})
export class ListasComponent{

    constructor(public deseosService: DeseosService, private navCtrl: NavController){

    }
    listaSeleccionada(lista: Lista) {
        this.navCtrl.push( AgregarPage,{
            title: lista.titulo,
            lista: lista,

        })
    }

    borrarLista(lista) {
        this.deseosService.borrarLista(lista);

    }


}