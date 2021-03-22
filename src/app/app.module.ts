import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { LevelComponent } from './level/level.component';
import { DialogTextComponent } from './dialog-text/dialog-text.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {MatMenuModule} from '@angular/material/menu';
import { TestComponent } from './test/test.component';
import {MatTabsModule} from '@angular/material/tabs';
import { EndComponent } from './end/end.component';
import { CountdownModule } from 'ngx-countdown';
import { AdminComponent } from './admin/admin.component';
import { ResultComponent } from './result/result.component';
import {MatTableModule} from '@angular/material/table';
import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    LevelComponent,
    DialogTextComponent,
    InscriptionComponent,
    TestComponent,
    EndComponent,
    AdminComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule,
    CountdownModule,
    MatDialogModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: InscriptionComponent
      },
      {
        path: 'level',
        component: LevelComponent
      },
      {
        path: 'result',
        component: ResultComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'end',
        component: EndComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
