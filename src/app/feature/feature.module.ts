import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRootComponent } from './feature-root/feature-root.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureRootComponent,
    children: [
      {
        path: '',
        component: GridComponent
      }
    ]
  }
];

@NgModule({
  declarations: [FeatureRootComponent, GridComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class FeatureModule {
}
