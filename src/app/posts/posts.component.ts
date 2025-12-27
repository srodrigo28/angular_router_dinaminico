import { Component, inject, Input, OnInit } from '@angular/core';
import { IPost, PostsService } from '../services/posts.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  postsList$: Observable<IPost[]> = of([]);

  @Input({ required: true }) userId!: string;

  private readonly postsService = inject(PostsService);

  ngOnInit(): void {
    console.log('User ID:', this.userId);
    this.postsList$ = this.postsService.getUserPosts(this.userId);
  }
}