import { DeseosService } from '../../providers/deseos.service';
import { Component } from '@angular/core';
import { Lista } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html',
})
export class PendientesPage {
    constructor(public deseosService: DeseosService,
        private navCtrl: NavController,
        private alertCtrl: AlertController) {



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

    agregarLista() {
        

        const prompt = this.alertCtrl.create({
            title: 'List name',
            cssClass: 'alertCreateList',
            message: "Enter a name for your list",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Name of the list'
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
                        this.navCtrl.push(AgregarPage,{
                            title: data.title
                        })
                        console.log(data);
                    }
                }
            ]
        });
        prompt.present();
    }


}
