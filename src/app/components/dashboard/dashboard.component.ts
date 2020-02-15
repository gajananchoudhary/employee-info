import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'; 
import { MatTableDataSource } from '@angular/material/table';
import { data } from '../../users-data/data.json'
 
interface PeriodicElement {
  id: string;
  name: string;
  phone: string;
  city: string;
  address1: string;
  address2: string;
  pincode: string;
}

const ELEMENT_DATA: PeriodicElement[] = data;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  numbers : any = /^[0-9]+$/;

  dataSource: MatTableDataSource<PeriodicElement>;
  displayedColumns: string[] = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'pincode'];
  @ViewChild('TablePaginator', {static: true}) tablePaginator: MatPaginator;
  @ViewChild('TableSort', {static: true}) tableSort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource;
  }

  ngOnInit() {
    this.dataSource.data = ELEMENT_DATA;
    this.dataSource.paginator = this.tablePaginator;
    this.dataSource.sort = this.tableSort;
  }

  applyFilterOne(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
