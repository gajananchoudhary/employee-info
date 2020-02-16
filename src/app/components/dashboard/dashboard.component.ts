import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { users } from '../../users-data/data'

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

  numbers: any = /^[0-9]+$/;

  dataSource: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'pincode'];
  @ViewChild('TablePaginator', { static: true }) tablePaginator: MatPaginator;
  @ViewChild('TableSort', { static: true }) tableSort: MatSort;

  constructor() {
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

}
