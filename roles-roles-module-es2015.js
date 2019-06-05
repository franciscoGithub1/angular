(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/form/form.component.html":
/*!**************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/form/form.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <div>\r\n    <mat-label class=\"mat-h2\" mat-color=\"primary\">\r\n      {{item?.id ? l('role.edit.title') : l('role.create.title')}}\r\n    </mat-label>\r\n  </div>\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" fxLayout=\"column\">\r\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n      <mat-form-field fxFlex>\r\n        <mat-label>{{l('role.name')}}</mat-label>\r\n        <input matInput required formControlName=\"name\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field fxFlex>\r\n        <mat-label>{{l('role.displayName')}}</mat-label>\r\n        <input matInput required formControlName=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <mat-form-field floatLabel=\"always\">\r\n      <mat-label>{{l('role.description')}}</mat-label>\r\n      <textarea matInput formControlName=\"description\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <app-roles-permissions\r\n      formControlName=\"permissions\"></app-roles-permissions>\r\n\r\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\">\r\n      <button type=\"button\" mat-button color=\"accent\" [routerLink]=\"['/app/roles']\">\r\n        {{l('Cancel')|uppercase}}\r\n      </button>\r\n\r\n      <button type=\"button\" mat-flat-button color=\"accent\"\r\n        [disabled]=\"isSaving\" (click)=\"onSubmit()\">\r\n        {{l('Save')|uppercase}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/list/filter/filter.component.html":
/*!***********************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/list/filter/filter.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n  <mat-form-field appearance=\"fill\" fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\r\n    <mat-label>{{l('Search')}}</mat-label>\r\n    <input type=\"text\" matInput>\r\n    <mat-icon matSuffix>search</mat-icon>\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n    <button type=\"button\" mat-flat-button color=\"accent\" routerLink=\"create\">\r\n      {{l('role.create.button')}}\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/list/list.component.html":
/*!**************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/list/list.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n  <div>\r\n    <mat-label class=\"mat-h2\" mat-color=\"primary\">\r\n      {{l('role.list.title')}}\r\n    </mat-label>\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n    <app-roles-list-filter [source]=\"datasource\"></app-roles-list-filter>\r\n\r\n    <app-roles-list-table [source]=\"datasource\"></app-roles-list-table>\r\n  </div>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/list/table/table.component.html":
/*!*********************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/list/table/table.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z1\">\r\n  <mat-datasource [dataSource]=\"source\">\r\n\r\n    <mat-table [dataSource]=\"source\">\r\n\r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox color=\"primary\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n            (change)=\"$event ? masterToggle() : null\"\r\n          ></mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <mat-checkbox color=\"primary\"\r\n            (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row.id) : null\"\r\n            [checked]=\"selection.isSelected(row.id)\"\r\n          ></mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef>{{l('role.name')}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.displayName }}\r\n          </span>\r\n          <small>\r\n            {{ row.name }}\r\n          </small>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef>{{l('Edit')}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\r\n          <button type=\"button\" mat-icon-button color=\"accent\" [routerLink]=\"[row.id, 'edit']\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: columns;\" [class.selected]=\"selection.isSelected(row.id)\"></mat-row>\r\n    </mat-table>\r\n\r\n  </mat-datasource>\r\n</div>\r\n\r\n<div class=\"table-actions\" fxLayout=\"row\" fxLayout=\"start\">\r\n  <button type=\"button\" mat-button color=\"accent\"\r\n  [disabled]=\"!selection.selected.length\" (click)=\"batchDelete()\">\r\n    <mat-icon>delete</mat-icon>\r\n    {{l('Delete')}}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/permissions/permissions.component.html":
/*!****************************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/permissions/permissions.component.html ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <form [formGroup]=\"form\">\r\n    <mat-form-field appearance=\"fill\" fxFlexAlign=\"start\">\r\n      <mat-label>{{l('Search')}}</mat-label>\r\n      <input type=\"text\" formControlName=\"query\" matInput>\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n  </form>\r\n\r\n  <mat-datasource [dataSource]=\"source\">\r\n\r\n    <mat-table [dataSource]=\"source\">\r\n\r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox color=\"primary\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n            (change)=\"$event ? masterToggle() : null\"\r\n          ></mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <mat-checkbox color=\"primary\"\r\n            (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row.name) : null\"\r\n            [checked]=\"selection.isSelected(row.name)\"\r\n            [disabled]=\"mandatory.indexOf(row.name) !== -1\"\r\n          ></mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef>{{l('role.name')}}</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.displayName }}\r\n          </span>\r\n          <small>\r\n            {{ row.name }}\r\n          </small>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: columns;\" [class.selected]=\"selection.isSelected(row.name)\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator\r\n      [length]=\"source.total\"\r\n      [pageSize]=\"source.pageSize\"\r\n      [pageSizeOptions]=\"[5, 10, 15, 20]\"\r\n    ></mat-paginator>\r\n\r\n  </mat-datasource>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/roles/wrapper/wrapper.component.html":
/*!********************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/roles/wrapper/wrapper.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outside-container\">\r\n  <div class=\"crud-inner-container\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"10px\">\r\n\r\n      <div fxFlexAlign=\"start\">\r\n        <button class=\"no-padding-button\" type=\"button\" mat-button color=\"accent\" [routerLink]=\"['/app/home']\">\r\n          <mat-icon class=\"remove-icon-margin\">keyboard_arrow_left</mat-icon>{{l('roles.back')}}\r\n        </button>\r\n      </div>\r\n\r\n      <mat-label class=\"mat-h3 crud-tittle\" color=\"accent\">\r\n        {{l('roles.title')}}\r\n      </mat-label>\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/roles/form/form.component.scss":
/*!************************************************!*\
  !*** ./src/app/roles/form/form.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9yb2xlcy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/form/form.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/form/form.component.ts ***!
  \**********************************************/
/*! exports provided: RolesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesFormComponent", function() { return RolesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/utils */ "./src/shared/utils/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ "./src/app/roles/services/index.ts");








let RolesFormComponent = class RolesFormComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"] {
    constructor(injector, route, router, builder, database) {
        super(injector);
        this.route = route;
        this.router = router;
        this.builder = builder;
        this.database = database;
        this.isSaving = false;
    }
    ngOnInit() {
        this.form = this.builder.group({
            id: null,
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            displayName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: null,
            permissions: [_shared_AppConsts__WEBPACK_IMPORTED_MODULE_5__["AppConsts"].mandatoryPerms, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // route parameters
        this.route.data.subscribe((data) => {
            this.item = data.item;
            if (this.item) {
                this.form.patchValue(this.item);
            }
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.isSaving = true;
            this.database
                .save(_shared_utils__WEBPACK_IMPORTED_MODULE_6__["FormUtils"].pruneEmpty(this.form.value))
                .subscribe(() => {
                this.router.navigate(['/app/roles']);
            }, err => {
                console.error(err);
                this.isSaving = false;
            });
        }
        else {
            _shared_utils__WEBPACK_IMPORTED_MODULE_6__["FormUtils"].markAsTouched(this.form);
            this.isSaving = false;
        }
    }
};
RolesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-form',
        template: __webpack_require__(/*! raw-loader!./form.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/form/form.component.html"),
        styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/roles/form/form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services__WEBPACK_IMPORTED_MODULE_7__["PermissionsDatabase"]])
], RolesFormComponent);



/***/ }),

/***/ "./src/app/roles/list/filter/filter.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/roles/list/filter/filter.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-roles-list-filter .mat-form-field {\n  margin-bottom: -1.34375em;\n}\napp-roles-list-filter .mat-form-field .mat-form-field-flex {\n  padding: 0.25em 0.75em 0;\n}\napp-roles-list-filter .mat-form-field .mat-form-field-infix {\n  padding: 0.25em 0 0.5em 0;\n}\napp-roles-list-filter .mat-form-field .mat-icon {\n  color: #6e6f6f;\n}\napp-roles-list-filter .mat-button,\napp-roles-list-filter .mat-flat-button {\n  font-size: 80%;\n  text-transform: uppercase;\n}\napp-roles-list-filter .mat-button .mat-icon,\napp-roles-list-filter .mat-flat-button .mat-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvZmlsdGVyL0M6XFxGaWRlbnNsYXRcXEdpbmdlclxcZ2luZ2VyLmNsaWVudC5zcmMvYXBwc1xcd2Vic2l0ZVxcc3JjXFxhcHBcXHJvbGVzXFxsaXN0XFxmaWx0ZXJcXGZpbHRlci5jb21wb25lbnQuc2NzcyIsImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7QURFSTtFQUNFLHdCQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7QUNGTjtBRE1FOztFQUVFLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FETUk7O0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0hOIiwiZmlsZSI6ImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1yb2xlcy1saXN0LWZpbHRlciB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xLjM0Mzc1ZW07XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC41ZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogIzZlNmY2ZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLFxyXG4gIC5tYXQtZmxhdC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImFwcC1yb2xlcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMS4zNDM3NWVtO1xufVxuYXBwLXJvbGVzLWxpc3QtZmlsdGVyIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW0gMDtcbn1cbmFwcC1yb2xlcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC41ZW0gMDtcbn1cbmFwcC1yb2xlcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQgLm1hdC1pY29uIHtcbiAgY29sb3I6ICM2ZTZmNmY7XG59XG5hcHAtcm9sZXMtbGlzdC1maWx0ZXIgLm1hdC1idXR0b24sXG5hcHAtcm9sZXMtbGlzdC1maWx0ZXIgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuYXBwLXJvbGVzLWxpc3QtZmlsdGVyIC5tYXQtYnV0dG9uIC5tYXQtaWNvbixcbmFwcC1yb2xlcy1saXN0LWZpbHRlciAubWF0LWZsYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/roles/list/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/roles/list/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: RolesListFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesListFilterComponent", function() { return RolesListFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_roles_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/roles/services */ "./src/app/roles/services/index.ts");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");




let RolesListFilterComponent = class RolesListFilterComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_3__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
    }
    ngOnInit() {
        // TODO setup search form control
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_roles_services__WEBPACK_IMPORTED_MODULE_2__["RolesDatasource"])
], RolesListFilterComponent.prototype, "source", void 0);
RolesListFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-list-filter',
        template: __webpack_require__(/*! raw-loader!./filter.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/list/filter/filter.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/roles/list/filter/filter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], RolesListFilterComponent);



/***/ }),

/***/ "./src/app/roles/list/list.component.scss":
/*!************************************************!*\
  !*** ./src/app/roles/list/list.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9yb2xlcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/list/list.component.ts":
/*!**********************************************!*\
  !*** ./src/app/roles/list/list.component.ts ***!
  \**********************************************/
/*! exports provided: RolesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesListComponent", function() { return RolesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/roles/services/index.ts");




let RolesListComponent = class RolesListComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, datasource) {
        super(injector);
        this.datasource = datasource;
    }
    ngOnInit() {
    }
};
RolesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-list',
        template: __webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/list/list.component.html"),
        providers: [_services__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"]],
        styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/roles/list/list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"]])
], RolesListComponent);



/***/ }),

/***/ "./src/app/roles/list/table/table.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/roles/list/table/table.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell {\n  padding-bottom: 7px;\n  padding-top: 10px;\n}\n\n.mat-column-select {\n  overflow: initial;\n}\n\n.mat-column-select.mat-header-cell {\n  flex: 0 0 50px;\n}\n\n.mat-column-select.mat-cell {\n  flex: 0 0 75px;\n}\n\n.mat-column-actions {\n  flex: 0.25;\n}\n\n.table-actions {\n  margin-top: 15px;\n}\n\n.table-actions .mat-button {\n  font-size: 80%;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvdGFibGUvQzpcXEZpZGVuc2xhdFxcR2luZ2VyXFxnaW5nZXIuY2xpZW50LnNyYy9hcHBzXFx3ZWJzaXRlXFxzcmNcXGFwcFxccm9sZXNcXGxpc3RcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0FKOztBRElBO0VBQ0UsVUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURHRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0RKIiwiZmlsZSI6ImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL2xpc3QvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNlbGwge1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNlbGVjdCB7XHJcbiAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcblxyXG4gICYubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZsZXg6IDAgMCA1MHB4O1xyXG4gIH1cclxuXHJcbiAgJi5tYXQtY2VsbCB7XHJcbiAgICBmbGV4OiAwIDAgNzVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWFjdGlvbnMge1xyXG4gIGZsZXg6IDAuMjU7XHJcbn1cclxuXHJcbi50YWJsZS1hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXQtY2VsbCB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cbi5tYXQtY29sdW1uLXNlbGVjdC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAwIDAgNTBweDtcbn1cbi5tYXQtY29sdW1uLXNlbGVjdC5tYXQtY2VsbCB7XG4gIGZsZXg6IDAgMCA3NXB4O1xufVxuXG4ubWF0LWNvbHVtbi1hY3Rpb25zIHtcbiAgZmxleDogMC4yNTtcbn1cblxuLnRhYmxlLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnRhYmxlLWFjdGlvbnMgLm1hdC1idXR0b24ge1xuICBmb250LXNpemU6IDgwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/list/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/roles/list/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: RolesListTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesListTableComponent", function() { return RolesListTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_roles_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/roles/services */ "./src/app/roles/services/index.ts");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");





let RolesListTableComponent = class RolesListTableComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_4__["AppComponentBase"] {
    constructor(injector) {
        super(injector);
        this.columns = ['select', 'name', 'actions'];
    }
    ngOnInit() {
        const initialSelection = [];
        const allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, initialSelection);
    }
    editUser(user) {
        // TODO update user
    }
    batchDelete() {
        // TODO use the selection.selected
        // FIXME prevent admin role to be deleted
    }
    /**
     * Selection Support
     */
    isAllSelected() {
        return !this.source.data.some(row => !this.selection.isSelected(row.id));
    }
    masterToggle() {
        const deselect = this.isAllSelected();
        this.source.data.forEach(row => {
            deselect ? this.selection.deselect(row.id) : this.selection.select(row.id);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_roles_services__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"])
], RolesListTableComponent.prototype, "source", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RolesListTableComponent.prototype, "columns", void 0);
RolesListTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roles-list-table',
        template: __webpack_require__(/*! raw-loader!./table.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/list/table/table.component.html"),
        styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/roles/list/table/table.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
], RolesListTableComponent);



/***/ }),

/***/ "./src/app/roles/permissions/permissions.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/roles/permissions/permissions.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-roles-permissions .mat-form-field {\n  margin-bottom: -1.34375em !important;\n}\napp-roles-permissions .mat-form-field .mat-form-field-flex {\n  padding: 0.25em 0.75em 0;\n}\napp-roles-permissions .mat-form-field .mat-form-field-infix {\n  padding: 0.25em 0 0.5em 0;\n}\napp-roles-permissions .mat-cell {\n  padding-bottom: 7px;\n  padding-top: 10px;\n}\napp-roles-permissions .mat-column-select {\n  overflow: initial;\n}\napp-roles-permissions .mat-column-select.mat-header-cell {\n  flex: 0 0 50px;\n}\napp-roles-permissions .mat-column-select.mat-cell {\n  flex: 0 0 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3JvbGVzL3Blcm1pc3Npb25zL0M6XFxGaWRlbnNsYXRcXEdpbmdlclxcZ2luZ2VyLmNsaWVudC5zcmMvYXBwc1xcd2Vic2l0ZVxcc3JjXFxhcHBcXHJvbGVzXFxwZXJtaXNzaW9uc1xccGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJhcHBzL3dlYnNpdGUvc3JjL2FwcC9yb2xlcy9wZXJtaXNzaW9ucy9wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9DQUFBO0FDQUo7QURFSTtFQUNFLHdCQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0FDRE47QURLRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNISjtBRE1FO0VBQ0UsaUJBQUE7QUNKSjtBRE1JO0VBQ0UsY0FBQTtBQ0pOO0FET0k7RUFDRSxjQUFBO0FDTE4iLCJmaWxlIjoiYXBwcy93ZWJzaXRlL3NyYy9hcHAvcm9sZXMvcGVybWlzc2lvbnMvcGVybWlzc2lvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtcm9sZXMtcGVybWlzc2lvbnMge1xyXG4gIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMS4zNDM3NWVtICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC41ZW0gMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtY2VsbCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1zZWxlY3Qge1xyXG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcblxyXG4gICAgJi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICBmbGV4OiAwIDAgNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLm1hdC1jZWxsIHtcclxuICAgICAgZmxleDogMCAwIDc1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImFwcC1yb2xlcy1wZXJtaXNzaW9ucyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMS4zNDM3NWVtICFpbXBvcnRhbnQ7XG59XG5hcHAtcm9sZXMtcGVybWlzc2lvbnMgLm1hdC1mb3JtLWZpZWxkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAuNzVlbSAwO1xufVxuYXBwLXJvbGVzLXBlcm1pc3Npb25zIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjI1ZW0gMCAwLjVlbSAwO1xufVxuYXBwLXJvbGVzLXBlcm1pc3Npb25zIC5tYXQtY2VsbCB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuYXBwLXJvbGVzLXBlcm1pc3Npb25zIC5tYXQtY29sdW1uLXNlbGVjdCB7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuYXBwLXJvbGVzLXBlcm1pc3Npb25zIC5tYXQtY29sdW1uLXNlbGVjdC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAwIDAgNTBweDtcbn1cbmFwcC1yb2xlcy1wZXJtaXNzaW9ucyAubWF0LWNvbHVtbi1zZWxlY3QubWF0LWNlbGwge1xuICBmbGV4OiAwIDAgNzVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roles/permissions/permissions.component.ts":
/*!************************************************************!*\
  !*** ./src/app/roles/permissions/permissions.component.ts ***!
  \************************************************************/
/*! exports provided: RolesPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesPermissionsComponent", function() { return RolesPermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm2015/collections.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm2015/matheo-datasource.js");
/* harmony import */ var _shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/AppConsts */ "./src/shared/AppConsts.ts");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services */ "./src/app/roles/services/index.ts");

var RolesPermissionsComponent_1;









let RolesPermissionsComponent = RolesPermissionsComponent_1 = class RolesPermissionsComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_7__["AppComponentBase"] {
    constructor(parent, builder, source, injector) {
        super(injector);
        this.parent = parent;
        this.builder = builder;
        this.source = source;
        this.columns = ['select', 'name'];
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.value = [];
        this.mandatory = _shared_AppConsts__WEBPACK_IMPORTED_MODULE_6__["AppConsts"].mandatoryPerms;
        this._disabled = false;
        this.propagateChange = (data) => { };
        this.propagateTouch = () => { };
    }
    ngOnInit() {
        this.form = this.builder.group({
            query: null
        });
        if (this.formControlName) {
            const parent = this.parent.control;
            const control = parent.get(this.formControlName);
            this._required = this.checkRequired(control);
        }
        // datasource setup
        this.source.setPaginator(this.paginator, Object(_matheo_datasource__WEBPACK_IMPORTED_MODULE_5__["getterPaginator"])(this.paginator));
        this.source.addOptional({
            stream: this.form.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])()),
            getter: () => this.form.value
        });
        // selection setup
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.selection.changed.subscribe(() => this.onChange(this.selection.selected));
    }
    onChange(value) {
        this.value = value;
        this.propagateChange(this.value);
        this.change.emit(this.value);
    }
    /**
     * Control Value Accessor Methods
     */
    writeValue(value) {
        if (value && value.length) {
            this.value = value;
            this.selection.select(...value);
        }
    }
    registerOnChange(fn) {
        this.propagateChange = (data) => {
            fn(data);
        };
    }
    registerOnTouched(fn) {
        this.propagateTouch = () => {
            fn();
        };
    }
    setDisabledState(isDisabled) {
        this._disabled = isDisabled;
    }
    validate(c) {
        if (!this._disabled) {
            if (this._required && !this.value.length) {
                return { required: true };
            }
        }
        return null;
    }
    checkRequired(field) {
        if (field.validator) {
            const validator = field.validator(field);
            if (validator && validator.required) {
                return true;
            }
        }
        return false;
    }
    /**
     * Selection Support
     */
    isAllSelected() {
        return !this.source.data.some(row => !this.selection.isSelected(row.name));
    }
    masterToggle() {
        const deselect = this.isAllSelected();
        this.source.data.forEach(row => {
            return deselect
                ? this.mandatory.indexOf(row.name) === -1 ? this.selection.deselect(row.name) : null
                : this.selection.select(row.name);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RolesPermissionsComponent.prototype, "formControlName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RolesPermissionsComponent.prototype, "columns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RolesPermissionsComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], RolesPermissionsComponent.prototype, "paginator", void 0);
RolesPermissionsComponent = RolesPermissionsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roles-permissions',
        template: __webpack_require__(/*! raw-loader!./permissions.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/permissions/permissions.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_9__["PermissionsDatasource"],
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => RolesPermissionsComponent_1),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => RolesPermissionsComponent_1),
                multi: true
            }
        ],
        styles: [__webpack_require__(/*! ./permissions.component.scss */ "./src/app/roles/permissions/permissions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Host"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _services__WEBPACK_IMPORTED_MODULE_9__["PermissionsDatasource"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
], RolesPermissionsComponent);



/***/ }),

/***/ "./src/app/roles/roles-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/roles/roles-routing.module.ts ***!
  \***********************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/roles/services/index.ts");
/* harmony import */ var _roles_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.barrel */ "./src/app/roles/roles.barrel.ts");





const routes = [
    {
        path: '',
        component: _roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesWrapperComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: _roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesListComponent"]
            },
            {
                path: 'create',
                component: _roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesFormComponent"]
            },
            {
                path: ':id/edit',
                component: _roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesFormComponent"],
                resolve: {
                    item: _services__WEBPACK_IMPORTED_MODULE_3__["RolesResolver"]
                }
            }
        ]
    }
];
let RolesRoutingModule = class RolesRoutingModule {
};
RolesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RolesRoutingModule);



/***/ }),

/***/ "./src/app/roles/roles.barrel.ts":
/*!***************************************!*\
  !*** ./src/app/roles/roles.barrel.ts ***!
  \***************************************/
/*! exports provided: RolesImports, RolesComponents, RolesFormComponent, RolesListComponent, RolesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesImports", function() { return RolesImports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponents", function() { return RolesComponents; });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm2015/matheo-datasource.js");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./form/form.component */ "./src/app/roles/form/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesFormComponent", function() { return _form_form_component__WEBPACK_IMPORTED_MODULE_14__["RolesFormComponent"]; });

/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list/list.component */ "./src/app/roles/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesListComponent", function() { return _list_list_component__WEBPACK_IMPORTED_MODULE_15__["RolesListComponent"]; });

/* harmony import */ var _list_table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list/table/table.component */ "./src/app/roles/list/table/table.component.ts");
/* harmony import */ var _list_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./list/filter/filter.component */ "./src/app/roles/list/filter/filter.component.ts");
/* harmony import */ var _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./wrapper/wrapper.component */ "./src/app/roles/wrapper/wrapper.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesWrapperComponent", function() { return _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_18__["RolesWrapperComponent"]; });

/* harmony import */ var _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./permissions/permissions.component */ "./src/app/roles/permissions/permissions.component.ts");




















const RolesImports = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
    _matheo_datasource__WEBPACK_IMPORTED_MODULE_11__["MatDataSourceModule"],
    _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_12__["ServiceProxyModule"],
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
];
const RolesComponents = [
    _form_form_component__WEBPACK_IMPORTED_MODULE_14__["RolesFormComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_15__["RolesListComponent"],
    _list_filter_filter_component__WEBPACK_IMPORTED_MODULE_17__["RolesListFilterComponent"],
    _list_table_table_component__WEBPACK_IMPORTED_MODULE_16__["RolesListTableComponent"],
    _permissions_permissions_component__WEBPACK_IMPORTED_MODULE_19__["RolesPermissionsComponent"],
    _wrapper_wrapper_component__WEBPACK_IMPORTED_MODULE_18__["RolesWrapperComponent"]
];



/***/ }),

/***/ "./src/app/roles/roles.module.ts":
/*!***************************************!*\
  !*** ./src/app/roles/roles.module.ts ***!
  \***************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/roles/roles-routing.module.ts");
/* harmony import */ var _roles_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.barrel */ "./src/app/roles/roles.barrel.ts");





let RolesModule = class RolesModule {
};
RolesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_3__["RolesRoutingModule"],
            ..._roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesImports"]
        ],
        declarations: _roles_barrel__WEBPACK_IMPORTED_MODULE_4__["RolesComponents"]
    })
], RolesModule);



/***/ }),

/***/ "./src/app/roles/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/roles/services/index.ts ***!
  \*****************************************/
/*! exports provided: PermissionsDatabase, PermissionsDatasource, RolesDatabase, RolesDatasource, RolesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _permissions_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./permissions.database */ "./src/app/roles/services/permissions.database.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsDatabase", function() { return _permissions_database__WEBPACK_IMPORTED_MODULE_0__["PermissionsDatabase"]; });

/* harmony import */ var _permissions_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions.datasource */ "./src/app/roles/services/permissions.datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsDatasource", function() { return _permissions_datasource__WEBPACK_IMPORTED_MODULE_1__["PermissionsDatasource"]; });

/* harmony import */ var _roles_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles.database */ "./src/app/roles/services/roles.database.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesDatabase", function() { return _roles_database__WEBPACK_IMPORTED_MODULE_2__["RolesDatabase"]; });

/* harmony import */ var _roles_datasource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles.datasource */ "./src/app/roles/services/roles.datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesDatasource", function() { return _roles_datasource__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"]; });

/* harmony import */ var _roles_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.resolver */ "./src/app/roles/services/roles.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RolesResolver", function() { return _roles_resolver__WEBPACK_IMPORTED_MODULE_4__["RolesResolver"]; });








/***/ }),

/***/ "./src/app/roles/services/permissions.database.ts":
/*!********************************************************!*\
  !*** ./src/app/roles/services/permissions.database.ts ***!
  \********************************************************/
/*! exports provided: PermissionsDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsDatabase", function() { return PermissionsDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");





let PermissionsDatabase = class PermissionsDatabase {
    constructor(roles) {
        this.roles = roles;
        this.perms = [];
    }
    getAll(args) {
        const offset = args.pageIndex * args.pageSize;
        const limit = args.pageSize;
        const response = () => {
            // filter the list if there's a query
            const perms = args.query
                ? this.perms.filter(perm => {
                    const regex = new RegExp(args.query, 'i');
                    return regex.test(perm.name) || regex.test(perm.displayName);
                })
                : this.perms;
            return {
                totalCount: perms.length,
                items: perms.slice(offset, offset + limit)
            };
        };
        if (this.perms.length) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response());
        }
        else {
            return this.roles.getAllPermissions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(perms => (this.perms = perms.items)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => response()));
        }
    }
    save(item) {
        return item.id
            ? this.roles.update(item)
            : this.roles.create(item);
    }
};
PermissionsDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RoleServiceProxy"]])
], PermissionsDatabase);



/***/ }),

/***/ "./src/app/roles/services/permissions.datasource.ts":
/*!**********************************************************!*\
  !*** ./src/app/roles/services/permissions.datasource.ts ***!
  \**********************************************************/
/*! exports provided: PermissionsDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsDatasource", function() { return PermissionsDatasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm2015/matheo-datasource.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _permissions_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./permissions.database */ "./src/app/roles/services/permissions.database.ts");





let PermissionsDatasource = class PermissionsDatasource extends _matheo_datasource__WEBPACK_IMPORTED_MODULE_2__["ReactiveDataSource"] {
    constructor(database) {
        super();
        this.database = database;
        this.config = {
            debug: false,
            autoStart: true
        };
        this.pageSize = 7;
    }
    rawDefault() {
        return {
            totalCount: 0,
            items: []
        };
    }
    rawFetch(args) {
        return this.database.getAll(args);
    }
    rawTotal(result) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result.totalCount);
    }
    rawResult(result) {
        return result.items;
    }
    filter(query, limit) {
        throw new Error('Not Implemented');
    }
    resFilter(result) {
        throw new Error('Not Implemented');
    }
};
PermissionsDatasource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_permissions_database__WEBPACK_IMPORTED_MODULE_4__["PermissionsDatabase"]])
], PermissionsDatasource);



/***/ }),

/***/ "./src/app/roles/services/roles.database.ts":
/*!**************************************************!*\
  !*** ./src/app/roles/services/roles.database.ts ***!
  \**************************************************/
/*! exports provided: RolesDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesDatabase", function() { return RolesDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");



let RolesDatabase = class RolesDatabase {
    constructor(roles) {
        this.roles = roles;
    }
    get(id) {
        return this.roles.get(id);
    }
    getAll(args) {
        return this.roles.getAll(args.query, args.pageIndex, args.pageSize);
    }
};
RolesDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["RoleServiceProxy"]])
], RolesDatabase);



/***/ }),

/***/ "./src/app/roles/services/roles.datasource.ts":
/*!****************************************************!*\
  !*** ./src/app/roles/services/roles.datasource.ts ***!
  \****************************************************/
/*! exports provided: RolesDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesDatasource", function() { return RolesDatasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm2015/matheo-datasource.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _roles_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles.database */ "./src/app/roles/services/roles.database.ts");





let RolesDatasource = class RolesDatasource extends _matheo_datasource__WEBPACK_IMPORTED_MODULE_2__["ReactiveDataSource"] {
    constructor(database) {
        super();
        this.database = database;
        this.config = {
            debug: false,
            autoStart: true // filter BehaviorSubject
        };
        this.pageSize = 10;
    }
    rawDefault() {
        return {
            totalCount: 0,
            items: []
        };
    }
    rawFetch(args) {
        return this.database.getAll(args);
    }
    rawTotal(result) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result.totalCount);
    }
    rawResult(result) {
        return result.items;
    }
    filter(query, limit) {
        throw new Error('Not Implemented');
    }
    resFilter(result) {
        throw new Error('Not Implemented');
    }
};
RolesDatasource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_roles_database__WEBPACK_IMPORTED_MODULE_4__["RolesDatabase"]])
], RolesDatasource);



/***/ }),

/***/ "./src/app/roles/services/roles.resolver.ts":
/*!**************************************************!*\
  !*** ./src/app/roles/services/roles.resolver.ts ***!
  \**************************************************/
/*! exports provided: RolesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesResolver", function() { return RolesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _roles_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles.database */ "./src/app/roles/services/roles.database.ts");






let RolesResolver = class RolesResolver {
    constructor(router, database) {
        this.router = router;
        this.database = database;
    }
    resolve(route) {
        const id = Number(route.paramMap.get('id'));
        return this.database.get(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.router.navigate(['/app/roles']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }));
    }
};
RolesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _roles_database__WEBPACK_IMPORTED_MODULE_5__["RolesDatabase"]])
], RolesResolver);



/***/ }),

/***/ "./src/app/roles/wrapper/wrapper.component.scss":
/*!******************************************************!*\
  !*** ./src/app/roles/wrapper/wrapper.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9yb2xlcy93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/roles/wrapper/wrapper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/roles/wrapper/wrapper.component.ts ***!
  \****************************************************/
/*! exports provided: RolesWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesWrapperComponent", function() { return RolesWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/roles/services/index.ts");




let RolesWrapperComponent = class RolesWrapperComponent extends _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"] {
    constructor(injector, datasource) {
        super(injector);
        this.datasource = datasource;
    }
    ngOnInit() {
    }
};
RolesWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-wrapper',
        template: __webpack_require__(/*! raw-loader!./wrapper.component.html */ "../../node_modules/raw-loader/index.js!./src/app/roles/wrapper/wrapper.component.html"),
        providers: [_services__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"]],
        styles: [__webpack_require__(/*! ./wrapper.component.scss */ "./src/app/roles/wrapper/wrapper.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services__WEBPACK_IMPORTED_MODULE_3__["RolesDatasource"]])
], RolesWrapperComponent);



/***/ }),

/***/ "./src/shared/utils/form.utils.ts":
/*!****************************************!*\
  !*** ./src/shared/utils/form.utils.ts ***!
  \****************************************/
/*! exports provided: FormUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return FormUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);

var FormUtils_1;



let FormUtils = FormUtils_1 = class FormUtils {
    constructor() {
        this._errors = {};
    }
    /**
     * Prune empty fields from objects
     */
    static pruneEmpty(obj) {
        return (function prune(current) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_3__["forOwn"])(current, function (value, key) {
                if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isUndefined"])(value) ||
                    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNaN"])(value) ||
                    Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isNull"])(value) ||
                    (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(value) && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(value)) ||
                    (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isObject"])(value) && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(prune(value)))) {
                    delete current[key];
                }
            });
            // remove any leftover undefined values from the delete
            // operation on an array
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isArray"])(current)) {
                Object(lodash__WEBPACK_IMPORTED_MODULE_3__["pull"])(current, undefined);
            }
            return current;
        })(Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(obj)); // do not modify the original object, create a clone instead
    }
    /**
     * Check if a Field is Required
     * @param field FormControl to check
     */
    static isRequired(field) {
        if (field.validator) {
            const validator = field.validator(field);
            if (validator && validator.required) {
                return true;
            }
        }
        return false;
    }
    /**
     * Update the validity of a group and its childs
     * @param group Form to update validity
     */
    static updateValidity(group) {
        Object.keys(group.controls).map(field => {
            const control = group.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.updateValueAndValidity({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                FormUtils_1.updateValidity(control);
            }
        });
    }
    /**
     * Makes visible the invalid fields of a form
     * @param group Form to mark as touched
     */
    static markAsTouched(group) {
        Object.keys(group.controls).map(field => {
            const control = group.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                FormUtils_1.markAsTouched(control);
            }
        });
    }
    /**
     * Returns an object with the validation errors
     * @param group Form to mark as touched
     */
    static getErrors(group, errors = {}) {
        Object.assign(errors, group.errors ? group.errors : {});
        Object.keys(group.controls).map(field => {
            const control = group.get(field);
            Object.assign(errors, control.errors ? control.errors : {});
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"] || control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]) {
                FormUtils_1.getErrors(control, errors);
            }
        });
        return errors;
    }
    /**
     * View utils
     */
    hasErrors(group) {
        this._errors = FormUtils_1.getErrors(group);
        return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(this._errors);
    }
    getError(errorCode) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(this._errors, errorCode, null);
    }
};
FormUtils = FormUtils_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormUtils);



/***/ }),

/***/ "./src/shared/utils/index.ts":
/*!***********************************!*\
  !*** ./src/shared/utils/index.ts ***!
  \***********************************/
/*! exports provided: FormUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.utils */ "./src/shared/utils/form.utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormUtils", function() { return _form_utils__WEBPACK_IMPORTED_MODULE_0__["FormUtils"]; });




/***/ })

}]);
//# sourceMappingURL=roles-roles-module-es2015.js.map