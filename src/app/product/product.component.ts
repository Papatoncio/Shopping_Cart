import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Product } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product!: Product;
  display: boolean = false;

  constructor(private dialogModule: DialogModule) { }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  showDialog() {
    this.display = true;
  }
}
