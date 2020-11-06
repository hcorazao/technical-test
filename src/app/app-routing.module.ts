import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  {
    path: "",
    component: FormComponent,
    pathMatch: "full"
  },
  {
    path: "assignment",
    component: AssignmentComponent
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
