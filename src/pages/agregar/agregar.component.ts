import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';
import { Lista,ListaItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html',
})
export class AgregarPage {

    lista: Lista;
    nombreItem: string = '';
    constructor(public deseosService: DeseosService,
        private navParams: NavParams) {
        const titulo = this.navParams.get('title');
        this.lista = new Lista(titulo);




    }
    agregarItem(){
        this.nombreItem = this.nombreItem.trim();
        if (this.nombreItem.length === 0) {
            return;
            
        }
        const newItem = new ListaItem(this.nombreItem);
        this.lista.items.push(newItem);
        this.nombreItem = '';

        
    }
    actualizarTarea(item:ListaItem){
        item.completado = !item.completado;
    }


}