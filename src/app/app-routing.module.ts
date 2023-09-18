import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpretatorComponent } from "./interpretator/interpretator.component";
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {path: '', component: InterpretatorComponent},
  {path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
