import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  templateUrl: 'counter.component.html'
})
export class CounterComponent {
  value = input(0);
  data: any = [];
  constructor() {
    effect(() =>{
      console.log('Counter value changed to ' + this.value());
      this.getProducts()
    })
  }
  async getProducts() {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${this.value()}`);
    const ELEMENT_DATA = await response.json();
    this.data = ELEMENT_DATA
  }
}
