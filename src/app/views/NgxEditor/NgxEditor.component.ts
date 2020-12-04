import { Component, OnInit } from '@angular/core';
import doc from './doc';

@Component({
  selector: 'app-ngx-editor',
  templateUrl: './NgxEditor.component.html',
  styleUrls: ['./NgxEditor.component.scss']
})
export class NgxEditorComponent implements OnInit {

  jsonDoc = doc;

  constructor() { }

  ngOnInit() {
  }

}
