import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { getAllEmp,deleteEmp } from '../graphqlquery';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit{

  
  constructor(private apollo:Apollo, private router:Router){}
  allEmployee:any;
  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: getAllEmp
    }).valueChanges.subscribe(({data})=>{
      
      this.allEmployee=Object.values(data.fetchAllEmployees)
     
    },)
    // if(sessionStorage.getItem('login')){

    // }else{
    //   this.router.navigate(["/login"])
    // }

   
   
  }
   deleteEmployee(id:string):void{
    alert(id)
    this.apollo.mutate<any>({
      mutation:deleteEmp,
      variables:{
        eid:id
      }
    }).subscribe(({data})=>{
      alert('data added Sucessfully'+data.deleteEmployeeById.email)
      window.location.reload( )
      
    },error =>{
      alert("Can't delete the employee")
    })
  }
    
  

  

  

}
