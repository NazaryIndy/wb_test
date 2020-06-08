import { NgModule } from '@angular/core';
import { HumanizePipe } from './humanize.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    HumanizePipe,
    FilterPipe
  ],
  imports: [],
  exports: [
    HumanizePipe,
    FilterPipe
  ],
  providers: []
})
export class SharedModule { }
