import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-interpretator',
  templateUrl: './interpretator.component.html',
  styleUrls: ['./interpretator.component.css']
})
export class InterpretatorComponent implements OnInit {

  constructor (private httpClient : HttpClient,
               private router     : Router
  ) {}

  ngOnInit(): void {}

  sourceText = "";
  resultText = "";
  resultVideo64 = "";
  fileToUpload:any;

//  private sourceTextURL = '../assets/source-text/m-ext-gcd.txt';
  private sourceTextURL = 'docs/assets/source-text/m-ext-gcd.txt';
  private interpretatorURL = environment.interpretatorURL;

   openVideoPage () {
      console.log('openVideoPage');
      this.router.navigate(
        ['/video'],
        { queryParams: { resultVideo64: this.resultVideo64 } }
      );
   }

  handleInterpret(){
    const requestData = { sourceText : this.sourceText};
    const requestBody =  JSON.stringify(requestData);
    this.httpClient.post<any>(this.interpretatorURL, requestBody
      ,{
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).subscribe((response) => {
        console.log(response);
        console.log(response.resultText);
        this.resultText = response.resultText;
        this.resultVideo64 = response.resultVideo64;
        if (this.resultVideo64 != "") {
            this.openVideoPage ();
        }
    });
  }

  handleAddSample(){
       this.httpClient.get(this.sourceTextURL, {responseType:'text'}).subscribe((response) => {
          this.sourceText = response;
        });
  }

  handleFileInput(event:any){
       this.fileToUpload = event.target.files[0];
       console.log(this.fileToUpload);
       const reader = new FileReader();
       reader.readAsText(this.fileToUpload);
       reader.onload = () => {
          if(reader.result!=null) {
             this.sourceText = reader.result.toString();
          }
       };
    };

}
