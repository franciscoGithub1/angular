(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/form.component.html":
/*!***************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/perfil/form/form.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outside-container\">\r\n  <div class=\"crud-inner-container\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" fxLayoutGap=\"10px\">\r\n\r\n      <div fxFlexAlign=\"start\">\r\n        <button class=\"no-padding-button\" mat-button color=\"accent\" [routerLink]=\"['/app/home']\">\r\n          <mat-icon class=\"remove-icon-margin\">keyboard_arrow_left</mat-icon>{{l('perfil.back')}}\r\n        </button>\r\n      </div>\r\n\r\n      <mat-label class=\"mat-h3 crud-tittle\" color=\"accent\">\r\n        {{l('perfil.title')}}\r\n      </mat-label>\r\n\r\n      <app-perfil-form-user #user></app-perfil-form-user>\r\n\r\n      <app-perfil-form-password #pass\r\n        [attr.hidden]=\"!isPinSent ? '' : null\">\r\n\r\n        <button type=\"button\" mat-stroked-button color=\"primary\" (click)=\"onPasswordChange()\">\r\n          {{l('perfil.password.resendPin') | uppercase}}\r\n        </button>\r\n      </app-perfil-form-password>\r\n\r\n      <div class=\"panel-botones\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <button type=\"button\" mat-stroked-button color=\"primary\"\r\n          [attr.hidden]=\"isPinSent ? '' : null\" (click)=\"onPasswordChange()\">\r\n          {{l('perfil.password.title') | uppercase}}\r\n        </button>\r\n        <span *ngIf=\"isPinSent\">&nbsp;</span>\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\r\n          <button type=\"button\" mat-stroked-button color=\"primary\" [routerLink]=\"['/app/home']\">\r\n            {{l('Cancel') | uppercase}}\r\n          </button>\r\n          <button type=\"button\" mat-raised-button color=\"primary\" [disabled]=\"isSaving\" (click)=\"onSubmit()\">\r\n            {{l('Save') | uppercase}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/password/password.component.html":
/*!****************************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/perfil/form/password/password.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\">\r\n  <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n    <div>\r\n      <mat-label class=\"mat-h2\" mat-color=\"primary\">\r\n        {{this.l('perfil.password.title')}}\r\n      </mat-label>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayoutAlign=\"space-between\">\r\n      <div fxLayout=\"column\" fxFlex=\"100%\" fxFlex.gt-sm=\"40%\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>{{l('perfil.password.newPassword')}}</mat-label>\r\n          <input type=\"password\" formControlName=\"newPassword\" matInput>\r\n          <mat-error *ngIf=\"form.dirty && form.hasError('error')\">\r\n            {{l(form.getError('error'))}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>{{l('perfil.password.repeatPassword')}}</mat-label>\r\n          <input type=\"password\" formControlName=\"repeatPassword\" matInput>\r\n          <mat-error *ngIf=\"form.dirty && form.hasError('match')\">\r\n            {{l(form.getError('match'))}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>{{l('perfil.password.inputPin')}}</mat-label>\r\n          <input formControlName=\"pin\" matInput>\r\n          <mat-error *ngIf=\"form.dirty && form.hasError('pin')\">\r\n            {{l(form.getError('pin'))}}\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <ng-content></ng-content>\r\n      </div>\r\n\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxFlex=\"100%\" fxFlex.gt-sm=\"55%\">\r\n        <div class=\"password-rules\">\r\n          {{l('Password')}}:\r\n          <ul>\r\n            <li>{{l('perfil.password.info.length')}}</li>\r\n            <li>{{l('perfil.password.info.mustHave')}}</li>\r\n            <li>{{l('perfil.password.info.allowedChars')}}</li>\r\n            <li>{{l('perfil.password.info.mustMatch')}}</li>\r\n          </ul>\r\n\r\n          {{l('Pin')}}:\r\n          <ul>\r\n            <li>{{l('perfil.password.info.pinExpiration')}}</li>\r\n            <li>{{l('perfil.password.info.pinResending')}}</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/user/user.component.html":
/*!********************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/perfil/form/user/user.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n  <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n    <div>\r\n      <mat-label class=\"mat-h2\" mat-color=\"primary\">\r\n        {{this.l('perfil.user.title')}}\r\n      </mat-label>\r\n    </div>\r\n\r\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"space-between\">\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.nombre1')}}</mat-label>\r\n        <input formControlName=\"nombre1\" matInput required maxlength=\"50\">\r\n        <mat-error>\r\n          <ng-container *ngIf=\"form.get('nombre1').hasError('required')\">\r\n            {{l('perfil.user.error.nombre1Requerido')}}\r\n          </ng-container>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.nombre2')}}</mat-label>\r\n        <input formControlName=\"nombre2\" matInput maxlength=\"50\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.apellido1')}}</mat-label>\r\n        <input formControlName=\"apellido1\" matInput required maxlength=\"50\">\r\n        <mat-error>\r\n          <ng-container *ngIf=\"form.get('apellido1').hasError('required')\">\r\n            {{l('perfil.user.error.apellido1Requerido')}}\r\n          </ng-container>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.apellido2')}}</mat-label>\r\n        <input formControlName=\"apellido2\" matInput maxlength=\"50\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.telefonoFijo')}}</mat-label>\r\n        <input formControlName=\"telefonoFijo\" matInput maxlength=\"9\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.user.correoElectronico')}}</mat-label>\r\n        <input formControlName=\"correoElectronico\" matInput required>\r\n        <mat-error>\r\n          <ng-container *ngIf=\"form.get('correoElectronico').hasError('required')\">\r\n            {{l('perfil.user.error.correoRequerido')}}\r\n          </ng-container>\r\n          <ng-container *ngIf=\"form.get('correoElectronico').hasError('pattern')\">\r\n            {{l('perfil.user.error.correoInvalido')}}\r\n          </ng-container>\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n  </mat-card>\r\n\r\n  <mat-card fxLayout=\"column\" fxLayoutGap=\"10px\" [attr.hidden]=\"!perfil?.mcaAgente ? '' : null\">\r\n    <div>\r\n      <mat-label class=\"mat-h2\" mat-color=\"primary\">\r\n        {{this.l('perfil.comercial.title')}}\r\n      </mat-label>\r\n    </div>\r\n\r\n    <div fxLayout=\"column\">\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.comercial.channel')}}</mat-label>\r\n        <mat-select formControlName=\"channel\" [compareWith]=\"compareWith\" #channel>\r\n          <mat-option *ngFor=\"let ch of channels\" [value]=\"ch\">\r\n            {{ ch.title }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.comercial.tenant')}}</mat-label>\r\n        <mat-select formControlName=\"tenant\" [compareWith]=\"compareWith\">\r\n          <mat-option *ngFor=\"let tenant of form.value.channel.tenants\" [value]=\"tenant\">\r\n            {{ tenant.title }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field appearance=\"outline\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n        <mat-label>{{l('perfil.comercial.codigo')}}</mat-label>\r\n        <input formControlName=\"codigo\" matInput>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n  </mat-card>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/perfil/form/form.component.scss":
/*!*************************************************!*\
  !*** ./src/app/perfil/form/form.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-perfil-form-password button {\n  margin-bottom: 1.34375em;\n  text-align: left;\n}\n\n.panel-botones {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3BlcmZpbC9mb3JtL0M6XFxGaWRlbnNsYXRcXEdpbmdlclxcZ2luZ2VyLmNsaWVudC5zcmMvYXBwc1xcd2Vic2l0ZVxcc3JjXFxhcHBcXHBlcmZpbFxcZm9ybVxcZm9ybS5jb21wb25lbnQuc2NzcyIsImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3BlcmZpbC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FESUE7RUFDRSxnQkFBQTtBQ0RGIiwiZmlsZSI6ImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3BlcmZpbC9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcGVyZmlsLWZvcm0tcGFzc3dvcmQge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjM0Mzc1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnBhbmVsLWJvdG9uZXMge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuIiwiYXBwLXBlcmZpbC1mb3JtLXBhc3N3b3JkIGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDEuMzQzNzVlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnBhbmVsLWJvdG9uZXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/perfil/form/form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/perfil/form/form.component.ts ***!
  \***********************************************/
/*! exports provided: PerfilFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilFormComponent", function() { return PerfilFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/perfil/form/user/user.component.ts");
/* harmony import */ var _password_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./password/password.component */ "./src/app/perfil/form/password/password.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");







let PerfilFormComponent = class PerfilFormComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
        this.isPinSent = false;
        this.isSaving = false;
    }
    ngOnInit() { }
    onPasswordChange() {
        // TODO consume RecuperarPassword
        // TODO show snack
        this.isPinSent = true;
    }
    onSubmit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])((this.isSaving = true))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => this.cmpUser.submit()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(() => (this.isPinSent ? this.cmpPass.submit() : Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(err)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(() => {
            // TODO show snack
        }, () => {
            // TODO show error snack
        }, () => {
            this.isSaving = false;
            // TODO redirect to home?
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('user', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user_user_component__WEBPACK_IMPORTED_MODULE_3__["PerfilFormUserComponent"])
], PerfilFormComponent.prototype, "cmpUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pass', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _password_password_component__WEBPACK_IMPORTED_MODULE_4__["PerfilFormPasswordComponent"])
], PerfilFormComponent.prototype, "cmpPass", void 0);
PerfilFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/perfil/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], PerfilFormComponent);



/***/ }),

/***/ "./src/app/perfil/form/password/password.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/perfil/form/password/password.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".password-rules {\n  font-size: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3BlcmZpbC9mb3JtL3Bhc3N3b3JkL0M6XFxGaWRlbnNsYXRcXEdpbmdlclxcZ2luZ2VyLmNsaWVudC5zcmMvYXBwc1xcd2Vic2l0ZVxcc3JjXFxhcHBcXHBlcmZpbFxcZm9ybVxccGFzc3dvcmRcXHBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy93ZWJzaXRlL3NyYy9hcHAvcGVyZmlsL2Zvcm0vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoiYXBwcy93ZWJzaXRlL3NyYy9hcHAvcGVyZmlsL2Zvcm0vcGFzc3dvcmQvcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtcnVsZXMge1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG59XHJcbiIsIi5wYXNzd29yZC1ydWxlcyB7XG4gIGZvbnQtc2l6ZTogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/perfil/form/password/password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/perfil/form/password/password.component.ts ***!
  \************************************************************/
/*! exports provided: PerfilFormPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilFormPasswordComponent", function() { return PerfilFormPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");





let PerfilFormPasswordComponent = class PerfilFormPasswordComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, builder) {
        super(injector);
        this.builder = builder;
        this.channels = [
            { value: '', title: super.l('value.default') }
        ];
        this.tenants = [
            { value: '', title: super.l('value.default') }
        ];
    }
    ngOnInit() {
        this.form = this.builder.group({
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            repeatPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {
            validators: this.validate
        });
        // TODO fill the initial values
    }
    validate(form) {
        const password = form.get('newPassword').value;
        const confirm = form.get('repeatPassword').value;
        const oneLowercaseLetter = password.match('(?=.*[a-z])');
        const oneUppercaseLetter = password.match('(?=.*[A-Z])');
        const oneNumber = password.match('(?=.*[0-9])');
        const oneSpecialChar = password.match('(?=.*[^a-zA-Z0-9])');
        const hasMinLength = password.length >= 8;
        const hasMaxLength = password.length <= 16;
        const passwordMatch = password ? password === confirm : false;
        let error = null;
        if (!oneLowercaseLetter) {
            error = { error: 'perfil.password.error.noLowerCase' };
        }
        else if (!oneUppercaseLetter) {
            error = { error: 'perfil.password.error.noUpperCase' };
        }
        else if (!oneNumber) {
            error = { error: 'perfil.password.error.noNumber' };
        }
        else if (!oneSpecialChar) {
            error = { error: 'perfil.password.error.noSpecialChar' };
        }
        else if (!hasMinLength) {
            error = { error: 'perfil.password.error.minLength' };
        }
        else if (!hasMaxLength) {
            error = { error: 'perfil.password.error.maxLength' };
        }
        else if (!passwordMatch) {
            error = { match: 'perfil.password.error.noMatch' };
        }
        if (error) {
            form.get('newPassword').setErrors(error);
            if (error.match) {
                form.get('repeatPassword').setErrors(error);
            }
        }
        return error;
    }
    submit() {
        if (!this.form.dirty) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        else if (this.form.valid) {
            // TODO save this.form.value
            // TODO catch pin error and highlight the field
            this.form.markAsPristine();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        else {
            // TODO mark as invalid
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(false);
        }
    }
};
PerfilFormPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-form-password',
        template: __webpack_require__(/*! raw-loader!./password.component.html */ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/password/password.component.html"),
        styles: [__webpack_require__(/*! ./password.component.scss */ "./src/app/perfil/form/password/password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], PerfilFormPasswordComponent);



/***/ }),

/***/ "./src/app/perfil/form/user/user.component.scss":
/*!******************************************************!*\
  !*** ./src/app/perfil/form/user/user.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9wZXJmaWwvZm9ybS91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/perfil/form/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/perfil/form/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: PerfilFormUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilFormUserComponent", function() { return PerfilFormUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/session/app-session.service */ "./src/shared/session/app-session.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");








let PerfilFormUserComponent = class PerfilFormUserComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector, builder, user, session) {
        super(injector);
        this.builder = builder;
        this.user = user;
        this.session = session;
    }
    ngOnInit() {
        this.form = this.builder.group({
            agenteId: null,
            userId: null,
            nombre1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            nombre2: null,
            apellido1: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            apellido2: null,
            codigo: null,
            correoElectronico: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[^@]+@[^@]+\.[^@]{2,}$/)]],
            telefonoFijo: null,
            channel: [{ value: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            tenant: [{ value: 0 }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.user.obtener(this.session.userId).subscribe(perfil => {
            this.perfil = perfil;
            this.form.patchValue(perfil.agenteDto);
            // fill channels and tenants
            const mapTenant = (sc) => ({
                value: sc.sucursalId,
                title: sc.nombre
            });
            const mapChannel = (ch) => ({
                value: ch.canalId,
                title: ch.nombre,
                tenants: ch.sucursalesDtos.map(mapTenant)
            });
            this.channels = perfil.canalesDtos.map(mapChannel);
            // patch channel and tenant
            const channel = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(perfil.canalesDtos, ch => ch.sucursalesDtos.some(sc => sc.mcaPrincipal));
            if (channel) {
                this.form.patchValue({ channel: mapChannel(channel) });
                const tenant = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["find"])(channel.sucursalesDtos, sc => sc.mcaPrincipal);
                if (tenant) {
                    this.form.patchValue({ tenant: mapTenant(tenant) });
                }
            }
        });
    }
    compareWith(option, selected) {
        return option.value === selected.value;
    }
    submit() {
        if (!this.form.dirty) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(true);
        }
        else if (this.form.valid) {
            // TODO save this.form.value
            this.form.markAsPristine();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(true);
        }
        else {
            // TODO mark as invalid
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(false);
        }
    }
};
PerfilFormUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-form-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "../../node_modules/raw-loader/index.js!./src/app/perfil/form/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/perfil/form/user/user.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_4__["PerfilUsuarioServiceProxy"],
        _shared_session_app_session_service__WEBPACK_IMPORTED_MODULE_5__["AppSessionService"]])
], PerfilFormUserComponent);



/***/ }),

/***/ "./src/app/perfil/perfil-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilRoutingModule", function() { return PerfilRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_barrel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil.barrel */ "./src/app/perfil/perfil.barrel.ts");




const routes = [
    {
        path: '',
        component: _perfil_barrel__WEBPACK_IMPORTED_MODULE_3__["PerfilFormComponent"]
    }
];
let PerfilRoutingModule = class PerfilRoutingModule {
};
PerfilRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PerfilRoutingModule);



/***/ }),

/***/ "./src/app/perfil/perfil.barrel.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.barrel.ts ***!
  \*****************************************/
/*! exports provided: PerfilImports, PerfilComponents, PerfilFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilImports", function() { return PerfilImports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponents", function() { return PerfilComponents; });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form/form.component */ "./src/app/perfil/form/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfilFormComponent", function() { return _form_form_component__WEBPACK_IMPORTED_MODULE_10__["PerfilFormComponent"]; });

/* harmony import */ var _form_password_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./form/password/password.component */ "./src/app/perfil/form/password/password.component.ts");
/* harmony import */ var _form_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./form/user/user.component */ "./src/app/perfil/form/user/user.component.ts");













const PerfilImports = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
    _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_8__["ServiceProxyModule"],
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
];
const PerfilComponents = [
    _form_form_component__WEBPACK_IMPORTED_MODULE_10__["PerfilFormComponent"],
    _form_password_password_component__WEBPACK_IMPORTED_MODULE_11__["PerfilFormPasswordComponent"],
    _form_user_user_component__WEBPACK_IMPORTED_MODULE_12__["PerfilFormUserComponent"]
];



/***/ }),

/***/ "./src/app/perfil/perfil.module.ts":
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/*! exports provided: PerfilModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilModule", function() { return PerfilModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-routing.module */ "./src/app/perfil/perfil-routing.module.ts");
/* harmony import */ var _perfil_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil.barrel */ "./src/app/perfil/perfil.barrel.ts");





let PerfilModule = class PerfilModule {
};
PerfilModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_3__["PerfilRoutingModule"],
            ..._perfil_barrel__WEBPACK_IMPORTED_MODULE_4__["PerfilImports"]
        ],
        declarations: _perfil_barrel__WEBPACK_IMPORTED_MODULE_4__["PerfilComponents"]
    })
], PerfilModule);



/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module-es2015.js.map