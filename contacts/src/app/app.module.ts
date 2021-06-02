import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './addcontact/addcontact.component';
import { FormsModule } from '@angular/forms';
import { ContactService } from './service/contact.service';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule } from '@angular/material/table';
import {MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ViewcontactComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
