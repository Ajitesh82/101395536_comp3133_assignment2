import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { addEmp } from '../graphqlquery';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent  {
  constructor(private apollo:Apollo, private router:Router){}

  addEmploye(firstName:string, lastName:string, email:string, gender:string, salary:string ){
    this.apollo.mutate<any>({
      mutation: addEmp,
      variables:{
        firstName,
        lastName,
        email,
        salary:parseFloat(salary),
        gender

      }
    }).subscribe(({data})=>{
     
      this.router.navigate(["/"])
 
    }, error=>{
      console.error('Error adding employee:', error);
      alert('Failed to add employee');
    })
    
}

}
