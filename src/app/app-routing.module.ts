import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuView, IntervalsFromView, FourNoteChordsView, ScalesDegreesView } from '@views';

const routes: Routes = [
  { path: '',                   component: MenuView },
  { path: 'intervals-from',     component: IntervalsFromView },
  { path: 'four-note-chords',   component: FourNoteChordsView },
  { path: 'scales-degrees',      component: ScalesDegreesView },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
