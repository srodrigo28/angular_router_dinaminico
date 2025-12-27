import { Component, inject, OnInit } from '@angular/core';
import { IUser, UsersService } from '../services/users.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ AsyncPipe, RouterLink ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit {
  usersList$: Observable<IUser[]> = of([]);

  private readonly _userService = inject(UsersService);

  ngOnInit(){
    this.usersList$ = this._userService.getUsers();
  }

}
