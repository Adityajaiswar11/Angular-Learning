import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private maxHistory = 10;

  private get userKey(): string {
    const userId = localStorage.getItem('userId');
 
    return userId ? `transactions-${userId}` : 'transactions-guest';
  }

  addTransaction(txn: any) {
    const existing = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    existing.unshift(txn); // add to top
    if (existing.length > this.maxHistory) existing.pop(); // keep only last 10
    localStorage.setItem(this.userKey, JSON.stringify(existing));
  }

  getUserTransactions(): any[] {
    const data = JSON.parse(localStorage.getItem(this.userKey) || '[]');
    console.log(data);
    return data
  }
}
