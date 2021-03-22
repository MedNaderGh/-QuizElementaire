import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from '../../user.services';
import {MatDialog} from '@angular/material/dialog';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  title = 'QuizElementaire';
  ngOnInit(
    
  ){}
  public onRegisterForm: FormGroup;
    constructor(private fb: FormBuilder,private dialog:MatDialog,private router:Router ,private snackbar:MatSnackBar,private us:UserService) {
      this.createForm();}
      createForm() {
        this.onRegisterForm= this.fb.group({
          fullname: ['', Validators.required ],
          gender: ['', Validators.required ],
          date: ['', Validators.required ],
          class: [null, Validators.compose([
            Validators.required
          ])],
          inscription: [null, Validators.compose([
            Validators.required,Validators.minLength(8),Validators.maxLength(12)
          ])]
        });
      }
      Start(form: FormGroup) {
        console.log(form.value);
        this.us.postUser(form.value).subscribe(
          res => {
            this.router.navigate(['/level'])
            localStorage.setItem('student', JSON.stringify(form.value));
          },
          err => {
            this.snackbar.open('لقد قمت باجتياز هذا الاختبار مسبقا', 'X', {
              duration: 2000
            });
          }
        );
      }
      disableAlert(){
        this.dialog.open(DialogTextComponent);

      }
 
      }

