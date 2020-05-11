import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { DataService } from '../data.service';

//User Interface
import { IUser } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {
  userMessage: string;
  users: IUser[] = [];
  //Set values to map the ColumnDef
  displayedColumns: string[] = ['id', 'email', 'firstName', 'lastName'];
  dataSource: MatTableDataSource<IUser>;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dataService: DataService) { }

  //Get the user details and display into the table
  ngOnInit() {
    this.dataService.getUsers().subscribe((users) => {
      (this.users = users);

      /*Set user data to populate the table.
        sort the table while clicking on table headers
      */
      this.dataSource = new MatTableDataSource<IUser>(this.users);
      this.dataSource.sort = this.sort;
    });

    //Subscribe user message
    this.dataService.sharedUserMessage.subscribe(message => this.userMessage = message);
  }
}
