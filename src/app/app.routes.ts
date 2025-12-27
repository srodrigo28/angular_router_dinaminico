import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    { path: 'user', component: UserComponent },
    { path: 'users/:userId', component: UsersComponent },
    { path: 'posts/:userId', component: PostsComponent },
];
