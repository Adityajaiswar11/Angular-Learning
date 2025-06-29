import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-recent-transaction',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css'] // fixed: styleUrl -> styleUrls
})
export class RecentTransactionComponent implements OnInit {
  transaction: any[] = [];

  constructor(private recentTransaction: TransactionService) {}

  ngOnInit(): void {
    this.transaction = this.recentTransaction.getUserTransactions();
  }
}
