import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { IonicModule } from '@ionic/angular';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CourierPage } from './courier.page';

const routes: Routes = [
  {
    path: '',
    component: CourierPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    IonicModule,
    ScrollingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CourierPage]
})
export class CourierPageModule {}
