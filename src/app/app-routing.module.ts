import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProfessionComponent } from './views/add-profession/add-profession.component';
import { AddUserComponent } from './views/add-user/add-user.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';
import { HomeComponent } from './views/home/home.component';
import { ProfessionComponent } from './views/profession/profession.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'userform', component: AddUserComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'edituser/:id', component: EditUserComponent },
  { path: 'profession', component: ProfessionComponent },
  { path: 'professionform', component: AddProfessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
