import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from '../../user.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  constructor(private user:UserService,private router:Router) {}
   data:any;
   result:Array<string>;
   test:Array<String>
  ngOnInit(): void {
   let subject= localStorage.getItem("subject");
    let level=localStorage.getItem("level");
    console.log(subject,level)
    this.user.getExam(subject,level).subscribe(
      res => {
        this.data = res ;
        console.log(this.data)
      },
      err => {
      }
    );

  }
  next(quest,val){
    localStorage.setItem(quest,val);
    console.log(quest,val)
  }
end(){
    this.result=[localStorage.getItem('question1'),localStorage.getItem('question2'),localStorage.getItem('question3'),localStorage.getItem('question4')
    ,localStorage.getItem('question5'),localStorage.getItem('question6'),localStorage.getItem('question7'),
    localStorage.getItem('question8'),localStorage.getItem('question9'),localStorage.getItem('question10')]
    console.log(this.result);
    this.test=[this.data[0].response,this.data[1].response,this.data[2].response,this.data[3].response,this.data[4].response,this.data[5].response,this.data[6].response,this.data[7].response,this.data[8].response,this.data[9].response]
    console.log(this.test);
    let intersection = this.result.filter(x => this.test.includes(x));
    let score = intersection.length;
    console.log(score);
    var student=localStorage.getItem('student');
    student = JSON.parse(student);
    console.log(student)
    this.user.saveResult(student,score,localStorage.getItem('level'),localStorage.getItem('subject')).subscribe(    res => {
    },
    err => {
    }
  );
    this.router.navigate(['/end']) 
  }
}

