import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  ngOnInit(): void {
  }
  public onLoginForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router ,private us:UserService,private snackbar:MatSnackBar) {this.createForm(); }
  createForm() {
    this.onLoginForm= this.fb.group({
      login: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }
  Start(form: FormGroup) {
  if ((form.value.login == "admin")&&(form.value.password == "admin")){
    this.router.navigate(['/result']) ;
  }
  else{
    this.snackbar.open('الرجاء التثبت من معطياتك الشخصية', 'X', {
      duration: 2000
    });
  }
  }

}
