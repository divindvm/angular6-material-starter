import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MaterialTableComponentDataSource } from './material-table-component-datasource';

@Component({
  selector: 'material-table-component',
  templateUrl: './material-table-component.component.html',
  styleUrls: ['./material-table-component.component.css']
})
export class MaterialTableComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MaterialTableComponentDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new MaterialTableComponentDataSource(this.paginator, this.sort);
  }
}
