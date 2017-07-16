import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { FileUtil } from './file.util';

@Component({
  template: require('./test.component.html')
})

export class TestComponent implements OnInit {

  @ViewChild('fileImportInput')
  fileImportInput: any;

  csvRecords = [];

  constructor(private _router: Router,
    private _fileUtil: FileUtil
  ) { }

  ngOnInit() { }

  // METHOD CALLED WHEN CSV FILE IS IMPORTED
  fileChangeListener($event): void {

    var text = [];
    var files = $event.srcElement.files;

    if (this._fileUtil.isCSVFile(files[0])) {
      var input = $event.target;
      var reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = (data) => {
        let csvData = reader.result;
        let csvRecordsArray = csvData.split(/\r\n|\n/);

        let headersRow = this._fileUtil
            .getHeaderArray(csvRecordsArray);
        
        this.csvRecords = this._fileUtil
            .getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      }

      reader.onerror = function () {
        alert('Unable to read ' + input.files[0]);
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  };

  fileReset(){
    this.fileImportInput.nativeElement.value = "";
    this.csvRecords = [];
  }

}