
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl = 'http://localhost:8080/api/v1/contacts';

  constructor(private http: HttpClient) { }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createContact(contact: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, contact);
  }

  updateContact(id:string,contact:Object):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,contact);
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getContactsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}