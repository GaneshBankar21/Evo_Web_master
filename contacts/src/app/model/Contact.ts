export class Contact {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber:string;
    status: string;

  //  constructor(){}

    constructor(id: string,firstName: string,lastName: string,email: string,phoneNumber: string,
        active: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = active;
      }
}