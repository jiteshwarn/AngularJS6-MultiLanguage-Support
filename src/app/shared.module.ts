import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FilterPipe } from './Filter/filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
    ],

    declarations: [
        FilterPipe,
    ],

    providers: [
    ],
    exports: [
        FilterPipe,
    ],
})
export class SharedModule {}