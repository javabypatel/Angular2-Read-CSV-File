import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';

export const appRoutes: Routes = [
    { 
        path: 'test', 
        component: TestComponent,
    },
    { 
        path: '', 
        component: TestComponent, 
    }
];
