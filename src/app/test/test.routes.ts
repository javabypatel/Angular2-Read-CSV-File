import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TestComponent } from './test.component';

const routes: Routes = [
    { 
        path: '',  
        component: TestComponent 
    }
];
export const TestRoutes: ModuleWithProviders = RouterModule.forChild(routes);