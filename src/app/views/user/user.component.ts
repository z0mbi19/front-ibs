import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from 'src/app/shared/dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: User;

  id!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getUser(this.id);
  }

  openDialog(): void {
    const dialog = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: this.user,
    });
    dialog.afterOpened().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  getUser(id: number) {
    this.userService.getUsersById(id).subscribe((user: any) => {
      this.user = user[0];
      console.log(user[0]);
    });
  }
}
