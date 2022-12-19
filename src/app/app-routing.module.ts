import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent, IntervalsFromComponent, FourNoteChordsComponent } from '@views/index';

const routes: Routes = [
  { path: '',                   component: MenuComponent },
  { path: 'intervals-from',     component: IntervalsFromComponent },
  { path: 'four-note-chords',   component: FourNoteChordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
