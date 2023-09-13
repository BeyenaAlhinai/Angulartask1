import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarksComponent } from './marks/marks.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'marks',component:MarksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
