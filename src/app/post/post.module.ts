import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [ViewComponent, CreateComponent, EditComponent, IndexComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
