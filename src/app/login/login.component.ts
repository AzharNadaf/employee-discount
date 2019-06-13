import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { stringify } from '@angular/compiler/src/util';
import { delay } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

    loginDetails: Array<Login> = [];

    clearSearchInput() {
        this.loginForm.reset();
    }
    ngOnDestroy(): void {

    }
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    errorMsg: string;

    onReset() {
        this.loginForm.reset();
    }
    constructor(


        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: LoginService) {

            localStorage.setItem("MyCart","");
            localStorage.clear();
            sessionStorage.clear();

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.loginDetails.push(new Login("Pratap", "test123","Pratap nayak"), (new Login("praveen", "123","Praveen")));




    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    public handleError(err: any) {

        console.log(err)
        if (err.status == 0) {
            this.errorMsg = 'Connection problem';
        }
        else if (err.status == 401) {
            this.errorMsg = err.error.error_description;
        }
        else if (err.status == 400) {

            this.errorMsg = err.error.error_description;
        }
        else if (err.status == 404) {

            this.errorMsg = 'Username or Password is incorect, Please try again.'
        }
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = false;
        
        var result = this.loginDetails.filter(x => x.Username == this.f.username.value && x.Password == this.f.password.value);
        if (result.length == 0) {
            this.errorMsg = 'Username or Password is incorect, Please try again.'
        }
        else
        {
            sessionStorage.setItem("Name",result[0].FullName);
            //setTimeout(() => 
           // { 
                this.router.navigate(['/homepage']);
           
           // },
           // 10000);
           
        }


       


        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .subscribe(
        //         data => {
        //             this.loading = false;
        //             console.log(data)
        //             this.authService.sendToken(data["access_token"]);
        //             this.authenticationService.GetforAunthicate()
        //                 .subscribe(
        //                     data => {
        //                         console.log(data);

        //                         sessionStorage.setItem("UserId", data["Userid"]);
        //                         let key = 'UserName';
        //                         sessionStorage.setItem("UserName", data["FirstName"] + ' ' + data["lastName"]);
        //                     }
        //                     , error => {
        //                         console.log(error);

        //                     }
        //                     ,
        //                     () => { this.router.navigate(['/MeetingDetails']); }
        //                 );
        //         }, error => {
        //             this.handleError(error);

        //             this.loading = false;
        //         });



    }


}
