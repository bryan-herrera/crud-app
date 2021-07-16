import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  fakeData = [
    {
      nombre: 'Edison',
      apellido: 'Penagos',
      email: 'epenagos@gmail.com',
      fecha: '22/03/2021',
    },
    {
      nombre: 'Maria',
      apellido: 'Hernandez',
      email: 'mhernandez@gmail.com',
      fecha: '25/05/2021',
    },
    {
      nombre: 'Ana',
      apellido: 'Suarez',
      email: 'asuarez@gmail.com',
      fecha: '12/07/2020',
    },
    {
      nombre: 'Lina',
      apellido: 'Sierra',
      email: 'lsierra@gmail.com',
      fecha: '02/01/2021',
    },
    {
      nombre: 'Daniel',
      apellido: 'Gomez',
      email: 'dgomez@gmail.com',
      fecha: '01/10/2019',
    }
  ]

  constructor( private router : Router ) { }

  ngOnInit(): void {
  }

  onGoToEdit(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(item: any): void{
    this.navigationExtras.state.value = item;
    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(item: any): void{
    alert('Eliminado');
  }

}
