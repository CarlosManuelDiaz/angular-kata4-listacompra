import { Component, OnInit, NgModule } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  public productos: Array<Producto> = [];

  constructor() { }

  ngOnInit() {
  }

  public anadirlista(nombre: string, precio: number, cantidad: number): void {
    this.productos.push({nombre, precio, cantidad});
  }

}
