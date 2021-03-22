import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { UserService } from '../../user.services';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-dialog-text',
  templateUrl: './dialog-text.component.html',
  styleUrls: ['./dialog-text.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DialogTextComponent implements OnInit {
  niveau:String;
  data:any;
  columnsToDisplay = ['الاسم و اللقب', 'القسم', 'مستوى الامتحان'];
  expandedElement: PeriodicElement | null;
  
  constructor(private dialog:MatDialog,private us:UserService) { }

  ngOnInit(): void {
    this.niveau = localStorage.getItem('niveau')
    this.us.getResult(this.niveau).subscribe(
      res => {
        this.data=res;
        console.log(this.data);
      },
      err => {
      }
    );
  }

}
export interface PeriodicElement {
  fullname: string;
  class: string;
  level: string;
  score: string;
}

