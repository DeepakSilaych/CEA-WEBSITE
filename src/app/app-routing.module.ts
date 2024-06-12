import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentComponent } from './parent/parent.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CouncilComponent } from './council/council.component';

import { Gallery201718Component } from './gallery201718/gallery201718.component';
import { Gallery201819Component } from './gallery201819/gallery201819.component';
import { Gallery201920Component } from './gallery201920/gallery201920.component';
import { EditorsComponent } from './editors/editors.component';
import { Gallery202223Component } from './gallery202223/gallery202223.component';
import { Gallery202324Component } from './gallery202324/gallery202324.component';
import { Gallery202122Component } from './gallery202122/gallery202122.component';
import { PublicationsComponent } from './publications/publications.component';
import { Publications202324Component } from './publications202324/publications202324.component';
import { Publications202223Component } from './publications202223/publications202223.component';
import { Publications202122Component } from './publications202122/publications202122.component';
import { Publications202021Component } from './publications202021/publications202021.component';
import { Publications201920Component } from './publications201920/publications201920.component';



const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {
    path:'home', component:ParentComponent

  },
  {
    path:'council', component:CouncilComponent

  },
  {
    path:'editors', component: EditorsComponent
    

  },
  {
    path:'gallery', 
    component:GalleryComponent,
    children :[
      {path:'202324', component: Gallery202324Component},
      {path:'202223', component: Gallery202223Component},
      {path:'202122', component: Gallery202122Component},
      {path:'201920', component: Gallery201920Component},
      {path:'201819', component: Gallery201819Component},
      {path:'201718', component: Gallery201718Component}
    ]

  },

  {path:'publications',
     component:PublicationsComponent,
    children :[
      {path:'P202324', component: Publications202324Component},
      {path:'P202223', component: Publications202223Component},
      {path:'P202122', component: Publications202122Component},
      {path:'P202021', component: Publications202021Component},
      {path:'P201920', component: Publications201920Component},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
