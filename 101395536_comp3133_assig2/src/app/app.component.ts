import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  login:Boolean=false;
  constructor(private router:Router){}
  ngOnInit(): void {
    if(sessionStorage.getItem('login')){
        this.login=true
    }else{
      this.login=false
    }
  }

  logout():void{
    alert('Logout Sucessfully')
    sessionStorage.removeItem('login')
    this.router.navigate(['/login'])
  }
  title = '101395536_comp3133_assig2';
}
