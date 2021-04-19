import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ToastrControlService {
    private url: string;
    constructor(private toastr: ToastrService) {
    }

    success(message: string, title: string) {
        this.toastr.success(message, title, {
            'closeButton': true,
            'positionClass': 'toast-top-full-width',
            'tapToDismiss': false
        });
    }

    warning(message: string, title: string) {
        this.toastr.warning(message, title, {
            'closeButton': true,
            'positionClass': 'toast-top-full-width',
            'tapToDismiss': false
        });
    }

    info(message: string, title: string) {
        this.toastr.info(message, title, {
            'closeButton': true,
            'positionClass': 'toast-top-full-width',
            'tapToDismiss': true,
            'timeOut': 10000
        });
    }

    error(message: string, title: string) {
        this.toastr.error(message, title, {
            'closeButton': true,
            'positionClass': 'toast-top-full-width',
            'tapToDismiss': false
        });
    }
}

