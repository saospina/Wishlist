import { Component } from '@angular/core';
import { DeseosService } from '../providers/deseos.service';



@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html',
})
export class ListasComponent{

    constructor(public deseosService: DeseosService){

    }


}