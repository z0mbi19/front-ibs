import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfessionService } from 'src/app/services/profession.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete-profession',
  templateUrl: './dialog-delete-profession.component.html',
  styleUrls: ['./dialog-delete-profession.component.css'],
})
export class DialogDeleteProfessionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private professionService: ProfessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.professionService.deleteProfession(this.data).subscribe(
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
