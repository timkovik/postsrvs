import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimerPipe } from "./timer.pipe"; //our pipe which we generate

@NgModule({
  imports: [CommonModule],
  declarations: [TimerPipe],
  exports: [TimerPipe],
})
export class PipesModule {}
