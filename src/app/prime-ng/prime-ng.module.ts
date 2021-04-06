import { NgModule } from '@angular/core';

import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

import {FieldsetModule} from 'primeng/fieldset';
import {DividerModule} from 'primeng/divider';


@NgModule({
    exports: [
        MenubarModule,
        TabMenuModule,
        PanelModule,
        InputTextModule,
        ButtonModule,
        CardModule,
        FieldsetModule,
        DividerModule
    ]
})
export class PrimeNGModule { }
