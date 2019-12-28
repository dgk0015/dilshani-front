import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    const val = this.loginForm.value;

    // if (val.username && val.password) {
    //   this.authService.login(val.email, val.password)
    //     .subscribe(
    //       () => {
    //         console.log("user is logged in");
    //         this.router.navigateByUrl('/busses')
            
    //       }
    //     )
    // }

    this.router.navigateByUrl('/busses');
  }

}
