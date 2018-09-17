import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId);
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getCustomers(){
    return this.http.get('http://localhost:3000/customers')
  }
  getCustomersId(userId){
    return this.http.get('http://localhost:3000/customers'+userId);
  }
  postCustomers(obj){
    return this.http.post('http://localhost:3000/customers',obj)
  }
  editCustomers(userId,obj){
    return this.http.put('http://localhost:3000/customers/'+userId,obj)
  }
  deleteCustomers(userId){
    return this.http.delete('http://localhost:3000/customers/'+userId)
  }
} 
