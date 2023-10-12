import { Component } from '@angular/core';
import { Product } from '../../Models/product.model'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/asianStyle1.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/asianStyle2.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/asianStyle3.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/asianStyle4.jpg'
    },
    {
      id: '5',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/asianStyle5.jpg'
    },
    {
      id: '6',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/asianStyle6.jpg'
    },
    {
      id: '7',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/asianStyle7.jpg'
    },
    {
      id: '8',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/asianStyle8.jpg'
    },

  ];
}
