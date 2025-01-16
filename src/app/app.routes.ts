import { Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { TagsComponent } from './components/tags/tags.component';

export const routes: Routes = [
    {
        path: 'posts', component: PostsComponent
    },
    {
        path: 'tags', component: TagsComponent
    }
];

