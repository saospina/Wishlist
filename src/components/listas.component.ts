import { Component, Input } from '@angular/core';
import { DeseosService } from '../providers/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';



@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html',
})
export class ListasComponent{


    @Input() terminada:boolean = false;

    constructor(public deseosService: DeseosService, private navCtrl: NavController,  private alertCtrl: AlertController){

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
    editarLista(lista: Lista, slidingItem: ItemSliding){

        slidingItem.close();

        const prompt = this.alertCtrl.create({
            title: 'Edit name',
            cssClass: 'alertCreateList',
            message: "Edit name from list",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Name of the list',
                    value: lista.titulo
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        if (data.title.lenght === 0) {
                            return;                            
                        }
                        lista.titulo = data.title;
                        this.deseosService.guardarStorage();
                        
                    }
                }
            ]
        });
        prompt.present();

    }


}