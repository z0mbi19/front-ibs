import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css'],
})
export class DialogDeleteComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.userService.deleteUser(this.data).subscribe(
      () => {
        this.dialogRef.close();
        this.router.navigate(['/']);
      },
      (e) => {
        console.log(e);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
