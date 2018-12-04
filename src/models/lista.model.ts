import { ListaItem } from "./lista-item.model";



export class Lista {
    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: boolean;
    terminada: boolean;
    items: ListaItem[];

    constructor(titulo:string) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
        
    }
}