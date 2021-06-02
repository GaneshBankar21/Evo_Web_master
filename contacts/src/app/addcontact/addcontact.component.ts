import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../service/contact.service';
import { Contact } from '../model/Contact';


@Component({
  selector: 'app-contact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = new Contact("1345", "asmita", "garde", "as.ig@cf.com", "7276469499", "Active");
  submitted = false;
  activeContact = true;
  inactiveContact = false;
  isActive: boolean = false;
  note: string = "";

  constructor(private contactService: ContactService,
    private router: Router) { }

  ngOnInit(): void {

  }

  newContact(): void {
  }

  getFormValues() {
    let contact: Contact = new Contact("", this.contact.firstName, this.contact.lastName,
      this.contact.email, this.contact.phoneNumber, this.contact.status);
    return contact;
  }

  save() {
    let body = this.getFormValues();
    this.contactService
      .createContact(body).subscribe(data => {
        this.gotoList();
        this.note = "You submitted successfully!"
      },
        error => {
          if(error.error.details === "fail"){
            this.note = "Error : "+error.error.message[0];

          }
        });
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/contacts']);
  }

  setStatus(status : any){
 this.isActive = status === "Active" ? true : false;
 this.contact.status = status;
  }


}
