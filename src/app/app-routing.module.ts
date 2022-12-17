import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent, IntervalsFromComponent } from '@views/index';

const routes: Routes = [
  { path: '',                component: MenuComponent },
  { path: 'intervals-from',  component: IntervalsFromComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
