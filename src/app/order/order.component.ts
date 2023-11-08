import { Component ,OnInit } from '@angular/core';
import { Orders } from '../orders.list';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orders: Observable<Orders> | undefined;
  selectedOrder: Order | undefined;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

    this.showOrders();
  }

  showOrders() {
    this.orders = this.orderService.getOrders();
  }

  selectOrder(order: Order) {
    this.selectedOrder = order;
    console.log('Commande séléctionnée' + order.user)
  }
}
