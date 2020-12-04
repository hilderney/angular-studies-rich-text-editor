import { CkEditorComponent } from './views/CkEditor/CkEditor.component';
import { MainComponent } from './pages/main/main.component';
import { FroalaComponent } from './views/Froala/Froala.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/auth-guard';
import { AngularEditorComponent } from './views/AngularEditor/AngularEditor.component';
import { NgxEditorComponent } from './views/NgxEditor/NgxEditor.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'FroalaEditor',
        component: FroalaComponent,
      },
      {
        path: 'AngularEditor',
        component: AngularEditorComponent,
      },
      {
        path: 'NgxEditor',
        component: NgxEditorComponent,
      },
      {
        path: 'CkEditor',
        component: CkEditorComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
