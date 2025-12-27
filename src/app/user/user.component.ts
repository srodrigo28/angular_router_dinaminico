import { Component, inject, OnInit } from '@angular/core';
import { IUser, UserDetailsService } from '../services/users-details.service';
import { Observable, of } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [AsyncPipe, RouterLink ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

   user$: Observable<IUser[]> = of([]);
  
    private readonly _userService = inject(UserDetailsService);
  
    ngOnInit(){
      this.user$ = this._userService.getOneUsers(); 
    }

}
