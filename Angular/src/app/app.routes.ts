import { Routes } from '@angular/router';
import { PromptListComponent } from './prompt-list/prompt-list';
import { PromptDetailComponent } from './prompt-detail/prompt-detail';
import { AddPromptComponent } from './add-prompt/add-prompt';

export const routes: Routes = [
    { path: '', component: PromptListComponent },
    { path: 'prompts/:id', component: PromptDetailComponent },
    { path: 'add', component: AddPromptComponent },
];