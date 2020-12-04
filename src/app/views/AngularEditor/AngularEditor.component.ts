import { Component, OnInit } from '@angular/core';
// import { AngularEditorConfig } from '@kolkov/angular-editor/lib/config';

@Component({
  selector: 'app-angular-editor',
  templateUrl: './AngularEditor.component.html',
  styleUrls: ['./AngularEditor.component.scss']
})
export class AngularEditorComponent implements OnInit {

  htmlContent = '';

  constructor() { }

  ngOnInit() {
  }


}
