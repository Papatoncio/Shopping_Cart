import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  display: boolean = false;

  constructor(private dialogModule: DialogModule, private cartService: CartService, private route: ActivatedRoute) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  showDialog() {
    this.display = true;
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
