import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Step2PageRoutingModule } from './step2-routing.module';

import { Step2Page } from './step2.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Step2PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Step2Page]
})
export class Step2PageModule {}
