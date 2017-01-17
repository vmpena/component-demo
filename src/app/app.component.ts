import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Customer } from './customers/customer'
import { CustomerService } from './services/customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class AppComponent implements OnInit{
  title = 'Customers';

  errorMessage: string;
  customers: Customer[];

  page: number = 1;

  // 2a. Add reference to PagerService to constructor
  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {

    console.log("Inside app.component, calling customerService ...");

    this.customerService.getCustomers()
      .subscribe(customers => this.customers = customers,
        error => this.errorMessage = <any>error);

  }

}
