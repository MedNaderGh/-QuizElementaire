import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 exam(level,subject){
  localStorage.setItem('level', level);
  localStorage.setItem('subject', subject);
  this.router.navigate(['/test'])
 }
}
