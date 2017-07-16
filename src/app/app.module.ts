import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule }            from '@angular/platform-browser';

import { AppComponent }             from './app.component';
import { appRoutes }                from './app.routes'; 
import { TestModule } from './test/test.module';

@NgModule({
    //put all your modules here
    //The imports key in the context of an @NgModule defines additional modules 
    //that will be imported into the current module
    imports: [ 
		BrowserModule,
	    TestModule,
        RouterModule,
		RouterModule.forRoot(appRoutes, {
			useHash: true
		})
	],
    // put all your components / directives / pipes here
    declarations:[
        AppComponent
    ],

    // put all your services here
    providers: [
      {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
