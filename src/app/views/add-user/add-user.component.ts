import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profession } from 'src/app/models/profession';
import { User, UserFromType } from 'src/app/models/user';
import { ProfessionService } from 'src/app/services/profession.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    IdProfession: new FormControl('', Validators.required),
  });

  profession: Profession[];

  constructor(
    private professionService: ProfessionService,
    private userService: UserService,
    private router: Router
  ) {
    this.profession = [];
  }

  ngOnInit(): void {
    this.getProfession();
  }

  getProfession() {
    this.professionService
      .getProfession()
      .subscribe((profession: Profession[]) => {
        this.profession = profession;
      });
  }

  onSubmit() {
    this.userService.saveUser(this.form.value).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/']);
    });
  }
}
