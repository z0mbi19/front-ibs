import { Component, OnInit } from '@angular/core';
import { Profession } from 'src/app/models/profession';
import { ProfessionService } from 'src/app/services/profession.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteProfessionComponent } from 'src/app/shared/dialog-delete-profession/dialog-delete-profession.component';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrls: ['./profession.component.css'],
})
export class ProfessionComponent implements OnInit {
  dataSource!: Profession[];
  displayedColumns: string[] = ['id', 'name'];

  constructor(
    public dialog: MatDialog,
    private professionService: ProfessionService
  ) {}

  ngOnInit(): void {
    this.getProfessions();
  }

  openDialog(prof: any): void {
    const dialog = this.dialog.open(DialogDeleteProfessionComponent, {
      width: '250px',
      data: prof,
    });
    dialog.afterOpened().subscribe(() => {
      console.log('The dialog was closed');
    });
  }

  getProfessions() {
    this.professionService.getProfession().subscribe((prof: Profession[]) => {
      this.dataSource = prof;
      console.log(prof);
    });
  }
}
