import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartItems:string[]=[]

  async addToCart(){
    await this.cartItems.push('Item')
    const event=new CustomEvent('cartEvent',{detail:{cart:this.cartItems.length}})
    dispatchEvent(event)
  }
}
