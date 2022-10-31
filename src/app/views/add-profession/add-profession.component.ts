import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessionService } from 'src/app/services/profession.service';

@Component({
  selector: 'app-add-profession',
  templateUrl: './add-profession.component.html',
  styleUrls: ['./add-profession.component.css'],
})
export class AddProfessionComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    private professionService: ProfessionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.professionService.saveProfession(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/']);
    });
  }
}
