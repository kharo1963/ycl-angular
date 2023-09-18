import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent  {

   resultVideo64 = "";
   constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      this.activatedRoute.queryParams
        .subscribe(params => {
            console.log(params);
            this.resultVideo64 = params['resultVideo64'];
        });
    }
}
