import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component:EmployeesComponent},
    {path:'add', component:AddComponent},
    {path:'edit', component:EditComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}

];
