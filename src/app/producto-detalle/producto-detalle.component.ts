import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {

  public listaproducto: Array<Producto>;

  public productos: Array<Producto> = [{
    nombre: 'cama',
    precio: 100,
    cantidad: 4,
  }, {
    nombre: 'martillo',
    precio: 10,
    cantidad: 8,
  }];

  public productonoencontrado: Producto = {
    nombre: 'Producto no encontrado',
    precio: 0,
    cantidad: 0
  };

  constructor( private route: ActivatedRoute) {
    const nombredeproducto = this.route.snapshot.paramMap.get('idproducto');
    this.listaproducto = this.obtenerproducto(nombredeproducto);
  }


  public obtenerproducto(nombre: string): Producto {
    let productos = this.productos.find((producto) => producto.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase());
    if (!productos) {
      productos = this.productonoencontrado;
    }
    return productos;
  }

}
