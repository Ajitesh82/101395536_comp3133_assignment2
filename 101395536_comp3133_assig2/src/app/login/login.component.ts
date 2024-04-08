import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { login } from '../graphqlquery';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private apollo:Apollo){}
  loginUser(usernameOrEmail:string, password:string){
    alert(usernameOrEmail+password)

    this.apollo.mutate<any>({
      mutation: login,
      variables:{
        usernameOrEmail,
        password
      }
    }).subscribe(({data})=>{
      if(data.loginUser==null){
        alert('Check the username and password')
      }else{
        sessionStorage.setItem('login','ischecked')
      }
    })

    
  }

}
