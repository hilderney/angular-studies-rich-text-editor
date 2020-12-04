import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';
// import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';


@Component({
  selector: 'app-ck-editor',
  templateUrl: './CkEditor.component.html',
  styleUrls: ['./CkEditor.component.scss']
})
export class CkEditorComponent implements OnInit {

  public Editor = ClassicEditor;

  // ClassicEditor.builtinPlugins.map( plugin: any => plugin: any.pluginName: any );

  constructor() { }

  ngOnInit() {
  }



}
