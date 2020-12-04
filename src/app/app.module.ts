import { CkEditorComponent } from './views/CkEditor/CkEditor.component';
import { NgxEditorComponent } from './views/NgxEditor/NgxEditor.component';
import { FroalaComponent } from './views/Froala/Froala.component';
import { AngularEditorComponent } from './views/AngularEditor/AngularEditor.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { NgxEditorModule, schema } from 'ngx-editor';
import { menu, placeholder } from 'ngx-editor/plugins';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { HeaderComponent } from './pages/main/header/header.component';
import { FooterComponent } from './pages/main/footer/footer.component';
import { SidebarComponent } from './pages/main/sidebar/sidebar.component';
import { ProfileComponent } from './views/profile/profile.component';
import { MessagesDropdownMenuComponent } from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import { UserDropdownMenuComponent } from './pages/main/header/user-dropdown-menu.component/user-dropdown-menu.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProfileComponent,
    FroalaComponent,
    AngularEditorComponent,
    NgxEditorComponent,
    CkEditorComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    UserDropdownMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    HttpClientModule,
    AngularEditorModule,
    CKEditorModule,
    NgxEditorModule.forRoot({
      plugins: [
        menu({
          // default options (Optional)
          toolbar: [
            ['bold', 'italic'], // inline icons
            ['code', 'blockquote'],
            ['ordered_list', 'bullet_list'],
            [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }], // dropdown
            ['link']
          ],
          labels: {
            bold: 'Bold',
            italics: 'Italics',
            code: 'Code',
            ordered_list: 'Ordered List',
            bullet_list: 'Bullet List',
            heading: 'Heading',
            link: 'Link',
          },
        }),
      ],
    })
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
