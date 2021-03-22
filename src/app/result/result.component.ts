import { Component, OnInit } from '@angular/core';
import { DialogTextComponent } from '../dialog-text/dialog-text.component';
import {MatDialog} from '@angular/material/dialog';
import { ModalService } from '../_modal';
import { UserService } from '../../user.services';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  niveau:String;
  data:any;
ngOnInit(){
  this.niveau = localStorage.getItem('niveau')
 
}
  constructor(private dialog:MatDialog,private modalService: ModalService,private us:UserService) { }
  async getresultat(id){
    this.us.getResult(id).subscribe(
      res => {
        this.data=res;
        console.log(this.data);
      },
      err => {
      }
    );
  }
  async resultat(id){
    localStorage.setItem('niveau',id); 
    await this.getresultat(id);
    this.modalService.open('custom-modal-1');
    }
    closeModal(id: string) {
      this.modalService.close(id);
  }
  change(val){

    switch(Number(val)) { 
      case 1: { 
         return "السنة الاولى"
         break; 
      } 
      case 2: { 
         return "السنة الثانية" 
         break; 
      } 
      case 3: { 
        return "السنة الثالثة" 
        break; 
      } 
     case 4: { 
      return "السنة الرابعة" 
      break; 
   } 
   case 5: { 
    return "السنة الخامسة" 
    break; 
 } 
      default: { 
        return "السنة السادسة" 
         break; 
      } 
   } 
  }
  change2(val){
    switch(val) { 
      case "math": { 
         return "الرياضيات"
         break; 
      } 
      case "arabic": { 
         return "العربية" 
         break; 
      } 
      case "frensh": { 
        return "الفرنسية" 
        break; 
      } 
     case "english": { 
      return "الانجليزية" 
      break; 
   } 
      default: { 
        return "الإيقاظ العلمي" 
         break; 
      } 
   } 
  }
}

