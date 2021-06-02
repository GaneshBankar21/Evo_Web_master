import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Contact } from '../model/Contact';
import { ContactService } from '../service/contact.service';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
  contactList: Contact[] = [];
  displayedColumns: string[] = ['select','id', 'firstName', 'lastName', 'email','phoneNumber','status'];
  rowData!: any;
  selection: any;
  text:string = "text";
  note!: string;
  
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.getContactList(); } 

  getContactList(){    
  const initialSelection : Contact[]= [];
  this.selection = new SelectionModel<Contact>(true, initialSelection);
    this.contactService.getContactsList().subscribe(res =>{
      this.contactList = res;
      this.rowData = new MatTableDataSource(this.contactList);
    });
  }

/** Whether the number of selected elements matches the total number of rows. */
isAllSelected() {
  if(this.rowData){
    const numSelected = this.selection.selected.length;
    const numRows = this.rowData.data.length;
    return numSelected === numRows;
  }
  return false;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
masterToggle() {
  if (this.isAllSelected()) {
    this.selection.clear();
    return;
  }
 if(this.rowData){
  this.selection.select(...this.rowData.data);
 }
}

/** The label for the checkbox on the passed row */
checkboxLabel(row?: Contact): string {
  if (!row) {
    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
}

onEdit(){
  let body = this.selection.selected[0];
  this.contactService
    .updateContact(body['id'],body).subscribe(data => {
      this.note = "Contact Edited successfully!"
    },
      error => {
        if(error.error.details === "fail")
      this.note = "Error : "+error.error.message[0];
      });
}


onDelete(){
  let body = this.selection.selected[0];
  this.contactService
    .deleteContact(body['id']).subscribe(data => {
      this.note = "Contact Deleted successfully!"
      this.getContactList();
    },
      error => {
        if(error.error.details == "fail"){
          this.note = "Error : "+error.error.message[0];
        }else{
          this.note = "Contact Deleted successfully!"

        }
      this.getContactList();
      });
}

}
