import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { RecentTransactionComponent } from '../recent-transaction/recent-transaction.component';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-change-box',
  standalone: true,
  imports: [CommonModule, FormsModule,HeaderComponent,RecentTransactionComponent],
  templateUrl: './change-box.component.html',
  styleUrls: ['./change-box.component.css']
})
export class ChangeBoxComponent {

  constructor(private txnService: TransactionService) {}

  amount: number =0 ;
  error: string = '';
  result: { denomination: number; count: number }[] = [];

  denominations = [10, 5, 2, 1];

  calculateChange() {
    this.result = [];
    this.error = '';

    if (!this.amount || this.amount <= 0 || !Number.isInteger(this.amount)) {
      this.error = 'Please enter a valid whole number greater than 0';
      return;
    }

    let remaining = this.amount;

    for (const denom of this.denominations) {
      const count = Math.floor(remaining / denom);
      if (count > 0) {
        this.result.push({ denomination: denom, count });
        remaining -= count * denom;
      }
    }
     this.txnService.addTransaction({
    amount: this.amount,
    type: 'ChangeBox',
    breakdown: this.result.map(r => `${r.count} x ₹${r.denomination}`).join(', '),
    date: new Date().toLocaleString()
  });
  
  //updating data
   this.txnService.getUserTransactions();
   
  }
 
}
