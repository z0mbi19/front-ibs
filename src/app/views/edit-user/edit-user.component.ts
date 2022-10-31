import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Profession } from 'src/app/models/profession';
import { User } from 'src/app/models/user';
import { ProfessionService } from 'src/app/services/profession.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  user!: User;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    IdProfession: new FormControl('', Validators.required),
  });

  profession!: Profession[];

  id!: any;

  constructor(
    private professionService: ProfessionService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getProfession();
    this.getUser(this.id);
  }
  getUser(id: number) {
    this.userService.getUsersById(id).subscribe((user: any) => {
      this.user = user[0];
      this.form.setValue({
        name: user[0].name,
        phone: user[0].phone,
        email: user[0].email,
        IdProfession: user[0].IdProfession.id,
      });
    });
  }

  onSubmit() {
    console.log();
    this.userService
      .updateUser({ ...this.form.value, id: this.user.id })
      .subscribe(() => {
        this.form.reset();
        this.router.navigate(['/']);
      });
  }

  getProfession() {
    this.professionService
      .getProfession()
      .subscribe((profession: Profession[]) => {
        this.profession = profession;
      });
  }
}
