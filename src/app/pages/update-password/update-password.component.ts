import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-update-password',
    templateUrl: './update-password.component.html',
    styleUrls: ['./update-password.component.scss'],
})
export class UpdatePasswordComponent implements OnInit {
    passwordGroup: FormGroup;
    hide: boolean;
    hide1: boolean;
    constructor(private _formBuilder: FormBuilder) {
        this.passwordGroup = this._formBuilder.group({
            passInit: [
                '',
                Validators.compose([
                    Validators.minLength(6),
                    Validators.maxLength(12),
                    Validators.required,
                ]),
            ],
            passEnd: [
                '',
                Validators.compose([
                    Validators.minLength(6),
                    Validators.maxLength(12),
                    Validators.required,
                ]),
            ],
        });

        this.hide = true;
        this.hide1 = true;
    }

    ngOnInit() {}

    recoverPassword(): void {
        console.log('Recuperar senha!');
        console.log(this.passwordGroup.value.passInit);
        console.log(this.passwordGroup.value.passEnd);
    }
}
