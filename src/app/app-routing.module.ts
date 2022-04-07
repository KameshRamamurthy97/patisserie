import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {path: 'our-story', component: OurStoryComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'signin', component:SigninComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
