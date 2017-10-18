import { NgModule }                         from '@angular/core';
import { CommonModule }                     from '@angular/common';
import { Routes, RouterModule }             from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }                       from '@angular/http';
import { TestComponent }                    from './test.component';
import { TestRoutes }                       from './test.routes';
import { FileUtil }                         from './file.util';
import { Constants }                        from './test.constants';

@NgModule({
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module

    imports: [ 
        CommonModule,
        TestRoutes,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpModule
    ],

    // put all your components / directives / pipes here
    declarations:[
        TestComponent
    ],

    // put all your services here
    providers: [
        FileUtil,
        Constants
    ],
})

export class TestModule{}