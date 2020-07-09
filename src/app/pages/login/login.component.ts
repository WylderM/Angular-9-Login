import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private elementRef: ElementRef) {}

    ngOnInit(): void {
        // // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
        // //     '#122230';
    }
}
