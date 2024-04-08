import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';

import { register } from '../graphqlquery';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private apollo:Apollo){}

  addUser(username:string, email:string, password:string){
    this.apollo.mutate<any>({
      mutation:register,
      variables:{
        username,
        email,
        password
      }
    }).subscribe(({data})=>{
      console.log(data)
    },error=>{
      alert('There is server error try late!')
    })
    alert(username+email+password)
  }
  

}
