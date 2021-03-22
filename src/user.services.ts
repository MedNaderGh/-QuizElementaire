import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  uri = 'http://localhost:4000/v1/api';
  userDetails: Object;
  constructor(private http: HttpClient) { }
  login(authCredentials) {
    return this.http.post(`${this.uri}/authenticate`, authCredentials,this.noAuthHeader);
  }
  postUser(user: User){
      user.inscription=user.inscription.toString();
    return this.http.post(`${this.uri}/register`,user,this.noAuthHeader);
  }
  getExam(subject,level) {
    return this.http.post(`${this.uri}/getexam`,{subject,level});
  }
  getResult(niveau)
  { niveau={
    "niveau": niveau
};
    console.log(niveau);
    return this.http.post(`${this.uri}/getresult`,niveau);}
  saveResult(student,score,level,subject) {
    var msg = {"fullname":student.fullname,"inscription":student.inscription,"class":student.class,"gender":student.gender,"date":student.date,"score":score,"level":level,"subject":subject}
    console.log(msg);
    return this.http.post(`${this.uri}/saveresult`,msg);
  }

  //Helper Methods

  setToken(token: string) {
    localStorage.setItem('jwtToken', token);
  }

  getToken() {
    return localStorage.getItem('jwtToken');
  }

  deleteToken() {
    localStorage.removeItem('jwtToken');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
userloged()
{
  let httpOptions = {
    headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
  };
  this.http.get(`${this.uri}/userProfile`,httpOptions).subscribe(
    data => {
      this.userDetails = data;
      return this.userDetails;
    },
    err => { 
      console.log(err);
      
    }
  );
}
}