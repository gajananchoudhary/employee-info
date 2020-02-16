import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { users } from '../../users-data/data';
import { Router } from '@angular/router'

interface PeriodicElement {
  id: number;
  name: string;
  phone: string;
  address: {
    city: string;
    address_line1: string;
    address_line2: string;
    postal_code: string;
  }
}

const ELEMENT_DATA: PeriodicElement[] = users.data;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Output() buttonClicked = new EventEmitter();

  numbers: any = /^[0-9]+$/;
  id: any;
  name: any;

  dataSource: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'pincode', 'edit'];
  @ViewChild('TablePaginator', { static: true }) tablePaginator: MatPaginator;
  @ViewChild('TableSort', { static: true }) tableSort: MatSort;

  constructor(private router: Router) {
    this.dataSource = new MatTableDataSource;
  }

  ngOnInit() {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.tablePaginator;
    this.dataSource.sort = this.tableSort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(event) {
    this.id = event.id;
    this.router.navigate(['/employees/edit/'], { queryParams: { id: this.id, name: event.name, phone: event.phone, address1: event.address['address_line1'], address2: event.address['address_line2'], city: event.address['city'], postalCode: event.address['postal_code'] } });
  }

}
