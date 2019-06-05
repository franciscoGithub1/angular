(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuarios-usuarios-module"],{

/***/ "../../node_modules/raw-loader/index.js!./src/app/usuarios/form/form.component.html":
/*!*****************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/usuarios/form/form.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outside-container\">\r\n  <div class=\"crud-inner-container\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n      <mat-label class=\"mat-h3 crud-tittle\" color=\"accent\">\r\n        {{item?.name}}\r\n      </mat-label>\r\n\r\n      <div class=\"mat-elevation-z1\">\r\n        <p>\r\n          Name: {{item?.fullName}}\r\n        </p>\r\n        <p>\r\n          Email: {{item?.emailAddress}}\r\n        </p>\r\n        <p>\r\n          Roles: {{item?.roleNames | json}}\r\n        </p>\r\n      </div>\r\n\r\n      <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\">\r\n        <button mat-button color=\"accent\" [routerLink]=\"['/app/usuarios']\">\r\n          Cancel\r\n        </button>\r\n\r\n        <button mat-flat-button color=\"accent\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/filter/filter.component.html":
/*!**************************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/usuarios/list/filter/filter.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between end\">\r\n  <mat-form-field appearance=\"fill\" fxFlex=\"100%\" fxFlex.gt-sm=\"50%\">\r\n    <mat-label>Buscar</mat-label>\r\n    <input type=\"text\" matInput>\r\n    <mat-icon matSuffix>search</mat-icon>\r\n  </mat-form-field>\r\n\r\n  <div fxLayout=\"row\" fxLayoutGap=\"10px\" fxLayoutAlign=\"end center\" fxFlex=\"100%\" fxFlex.gt-sm=\"49%\">\r\n    <button mat-button color=\"accent\"\r\n    [disabled]=\"!source?.data.length\" (click)=\"downloadTable()\">\r\n      <mat-icon>publish</mat-icon>\r\n      Descargar Tabla\r\n    </button>\r\n\r\n    <button mat-flat-button color=\"accent\" (click)=\"addUser()\">\r\n      Agregar Usuario\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/list.component.html":
/*!*****************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/usuarios/list/list.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outside-container\">\r\n  <div class=\"crud-inner-container\">\r\n    <div fxLayout=\"column\" fxLayoutGap=\"15px\">\r\n      <mat-label class=\"mat-h3 crud-tittle\" color=\"accent\">\r\n        {{l('usuarios.title')}}\r\n      </mat-label>\r\n\r\n      <app-usuarios-list-filter\r\n        [source]=\"datasource\"\r\n      ></app-usuarios-list-filter>\r\n\r\n      <app-usuarios-list-table\r\n        [source]=\"datasource\"\r\n      ></app-usuarios-list-table>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/table/table.component.html":
/*!************************************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/raw-loader!./src/app/usuarios/list/table/table.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z1\">\r\n  <mat-datasource [dataSource]=\"source\">\r\n\r\n    <mat-table [dataSource]=\"source\">\r\n\r\n      <ng-container matColumnDef=\"select\">\r\n        <mat-header-cell *matHeaderCellDef>\r\n          <mat-checkbox color=\"primary\"\r\n            [checked]=\"selection.hasValue() && isAllSelected()\"\r\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n            (change)=\"$event ? masterToggle() : null\"\r\n          ></mat-checkbox>\r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <mat-checkbox color=\"primary\"\r\n            (click)=\"$event.stopPropagation()\"\r\n            (change)=\"$event ? selection.toggle(row) : null\"\r\n            [checked]=\"selection.isSelected(row)\">\r\n          </mat-checkbox>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"name\">\r\n        <mat-header-cell *matHeaderCellDef>Nombre</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.name }}\r\n          </span>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"client\">\r\n        <mat-header-cell *matHeaderCellDef>Cliente</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.id }}\r\n          </span>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"contact\">\r\n        <mat-header-cell *matHeaderCellDef>Contacto</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.emailAddress }}\r\n          </span>\r\n          <small>\r\n            {{ row.phone }}\r\n            &nbsp;\r\n          </small>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"role\">\r\n        <mat-header-cell *matHeaderCellDef>Permiso</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"column\" fxLayoutAlign=\"start start\">\r\n          <span>\r\n            {{ row.roleNames | json }}\r\n          </span>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"actions\">\r\n        <mat-header-cell *matHeaderCellDef>Activo</mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\">\r\n          <mat-slide-toggle\r\n            color=\"primary\"\r\n            [checked]=\"row.isActive\"\r\n            (change)=\"toggleActive($event, row.id)\"\r\n          ></mat-slide-toggle>\r\n\r\n          <button mat-icon-button color=\"accent\" [routerLink]=\"[row.id, 'edit']\">\r\n            <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n          </button>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"columns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: columns;\" [class.selected]=\"selection.isSelected(row)\"></mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator\r\n      [length]=\"source.total\"\r\n      [pageSize]=\"source.pageSize\"\r\n      [pageSizeOptions]=\"[5, 10, 15, 20]\"\r\n    ></mat-paginator>\r\n\r\n  </mat-datasource>\r\n</div>\r\n\r\n<div class=\"table-actions\" fxLayout=\"row\" fxLayout=\"start\">\r\n  <button mat-button color=\"accent\"\r\n  [disabled]=\"!selection.selected.length\" (click)=\"batchDelete()\">\r\n    <mat-icon>delete</mat-icon>\r\n    Eliminar\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/usuarios/form/form.component.scss":
/*!***************************************************!*\
  !*** ./src/app/usuarios/form/form.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC91c3Vhcmlvcy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/usuarios/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/usuarios/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: UsuariosFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormComponent", function() { return UsuariosFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var UsuariosFormComponent = /** @class */ (function () {
    function UsuariosFormComponent(route) {
        this.route = route;
    }
    UsuariosFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // route parameters
        this.route.data.subscribe(function (data) {
            _this.item = data.item;
        });
    };
    UsuariosFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios-form',
            template: __webpack_require__(/*! raw-loader!./form.component.html */ "../../node_modules/raw-loader/index.js!./src/app/usuarios/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/usuarios/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UsuariosFormComponent);
    return UsuariosFormComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/list/filter/filter.component.scss":
/*!************************************************************!*\
  !*** ./src/app/usuarios/list/filter/filter.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-usuarios-list-filter .mat-form-field {\n  margin-bottom: -1.34375em;\n}\napp-usuarios-list-filter .mat-form-field .mat-form-field-flex {\n  padding: 0.25em 0.75em 0;\n}\napp-usuarios-list-filter .mat-form-field .mat-form-field-infix {\n  padding: 0.25em 0 0.5em 0;\n}\napp-usuarios-list-filter .mat-form-field .mat-icon {\n  color: #6e6f6f;\n}\napp-usuarios-list-filter .mat-button,\napp-usuarios-list-filter .mat-flat-button {\n  font-size: 80%;\n  text-transform: uppercase;\n}\napp-usuarios-list-filter .mat-button .mat-icon,\napp-usuarios-list-filter .mat-flat-button .mat-icon {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvZmlsdGVyL0M6XFxGaWRlbnNsYXRcXEdpbmdlclxcZ2luZ2VyLmNsaWVudC5zcmMvYXBwc1xcd2Vic2l0ZVxcc3JjXFxhcHBcXHVzdWFyaW9zXFxsaXN0XFxmaWx0ZXJcXGZpbHRlci5jb21wb25lbnQuc2NzcyIsImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7QURFSTtFQUNFLHdCQUFBO0FDQU47QURHSTtFQUNFLHlCQUFBO0FDRE47QURJSTtFQUNFLGNBQUE7QUNGTjtBRE1FOztFQUVFLGNBQUE7RUFDQSx5QkFBQTtBQ0pKO0FETUk7O0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0hOIiwiZmlsZSI6ImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC11c3Vhcmlvcy1saXN0LWZpbHRlciB7XHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xLjM0Mzc1ZW07XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgcGFkZGluZzogMC4yNWVtIDAgMC41ZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogIzZlNmY2ZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtYnV0dG9uLFxyXG4gIC5tYXQtZmxhdC1idXR0b24ge1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImFwcC11c3Vhcmlvcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAtMS4zNDM3NWVtO1xufVxuYXBwLXVzdWFyaW9zLWxpc3QtZmlsdGVyIC5tYXQtZm9ybS1maWVsZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjc1ZW0gMDtcbn1cbmFwcC11c3Vhcmlvcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC41ZW0gMDtcbn1cbmFwcC11c3Vhcmlvcy1saXN0LWZpbHRlciAubWF0LWZvcm0tZmllbGQgLm1hdC1pY29uIHtcbiAgY29sb3I6ICM2ZTZmNmY7XG59XG5hcHAtdXN1YXJpb3MtbGlzdC1maWx0ZXIgLm1hdC1idXR0b24sXG5hcHAtdXN1YXJpb3MtbGlzdC1maWx0ZXIgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuYXBwLXVzdWFyaW9zLWxpc3QtZmlsdGVyIC5tYXQtYnV0dG9uIC5tYXQtaWNvbixcbmFwcC11c3Vhcmlvcy1saXN0LWZpbHRlciAubWF0LWZsYXQtYnV0dG9uIC5tYXQtaWNvbiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59Il19 */"

/***/ }),

/***/ "./src/app/usuarios/list/filter/filter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/usuarios/list/filter/filter.component.ts ***!
  \**********************************************************/
/*! exports provided: UsuariosListFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListFilterComponent", function() { return UsuariosListFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_usuarios_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/usuarios/services */ "./src/app/usuarios/services/index.ts");



var UsuariosListFilterComponent = /** @class */ (function () {
    function UsuariosListFilterComponent() {
    }
    UsuariosListFilterComponent.prototype.ngOnInit = function () {
        // TODO setup search form control
    };
    UsuariosListFilterComponent.prototype.addUser = function () {
        // TODO trigger add user dialog
    };
    UsuariosListFilterComponent.prototype.downloadTable = function () {
        // TODO download according source.args
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_usuarios_services__WEBPACK_IMPORTED_MODULE_2__["UsuariosDatasource"])
    ], UsuariosListFilterComponent.prototype, "source", void 0);
    UsuariosListFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios-list-filter',
            template: __webpack_require__(/*! raw-loader!./filter.component.html */ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/filter/filter.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./filter.component.scss */ "./src/app/usuarios/list/filter/filter.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsuariosListFilterComponent);
    return UsuariosListFilterComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/list/list.component.scss":
/*!***************************************************!*\
  !*** ./src/app/usuarios/list/list.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC91c3Vhcmlvcy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/usuarios/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/usuarios/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: UsuariosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListComponent", function() { return UsuariosListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/app-component-base */ "./src/shared/app-component-base.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/usuarios/services/index.ts");




var UsuariosListComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsuariosListComponent, _super);
    function UsuariosListComponent(injector, datasource) {
        var _this = _super.call(this, injector) || this;
        _this.datasource = datasource;
        return _this;
    }
    UsuariosListComponent.prototype.ngOnInit = function () {
    };
    UsuariosListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuarios-list',
            template: __webpack_require__(/*! raw-loader!./list.component.html */ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/list.component.html"),
            providers: [_services__WEBPACK_IMPORTED_MODULE_3__["UsuariosDatasource"]],
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/usuarios/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services__WEBPACK_IMPORTED_MODULE_3__["UsuariosDatasource"]])
    ], UsuariosListComponent);
    return UsuariosListComponent;
}(_shared_app_component_base__WEBPACK_IMPORTED_MODULE_2__["AppComponentBase"]));



/***/ }),

/***/ "./src/app/usuarios/list/table/table.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/usuarios/list/table/table.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell {\n  padding-bottom: 7px;\n  padding-top: 10px;\n}\n\n.mat-column-select {\n  overflow: initial;\n}\n\n.mat-column-select.mat-header-cell {\n  flex: 0 0 35px;\n}\n\n.mat-column-select.mat-cell {\n  flex: 0 0 60px;\n}\n\n.table-actions {\n  margin-top: 15px;\n}\n\n.table-actions .mat-button {\n  font-size: 80%;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvdGFibGUvQzpcXEZpZGVuc2xhdFxcR2luZ2VyXFxnaW5nZXIuY2xpZW50LnNyYy9hcHBzXFx3ZWJzaXRlXFxzcmNcXGFwcFxcdXN1YXJpb3NcXGxpc3RcXHRhYmxlXFx0YWJsZS5jb21wb25lbnQuc2NzcyIsImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtBQ0FKOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURHRTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtBQ0RKIiwiZmlsZSI6ImFwcHMvd2Vic2l0ZS9zcmMvYXBwL3VzdWFyaW9zL2xpc3QvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNlbGwge1xyXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNlbGVjdCB7XHJcbiAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcblxyXG4gICYubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZsZXg6IDAgMCAzNXB4O1xyXG4gIH1cclxuXHJcbiAgJi5tYXQtY2VsbCB7XHJcbiAgICBmbGV4OiAwIDAgNjBweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1hY3Rpb25zIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAubWF0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXQtY2VsbCB7XG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cbi5tYXQtY29sdW1uLXNlbGVjdC5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4OiAwIDAgMzVweDtcbn1cbi5tYXQtY29sdW1uLXNlbGVjdC5tYXQtY2VsbCB7XG4gIGZsZXg6IDAgMCA2MHB4O1xufVxuXG4udGFibGUtYWN0aW9ucyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4udGFibGUtYWN0aW9ucyAubWF0LWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/usuarios/list/table/table.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usuarios/list/table/table.component.ts ***!
  \********************************************************/
/*! exports provided: UsuariosListTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosListTableComponent", function() { return UsuariosListTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/collections */ "../../node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _app_usuarios_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/usuarios/services */ "./src/app/usuarios/services/index.ts");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm5/matheo-datasource.js");






var UsuariosListTableComponent = /** @class */ (function () {
    function UsuariosListTableComponent() {
        this.columns = ['select', 'name', 'contact', 'role', 'actions'];
    }
    UsuariosListTableComponent.prototype.ngOnInit = function () {
        this.source.setPaginator(this.paginator, Object(_matheo_datasource__WEBPACK_IMPORTED_MODULE_5__["getterPaginator"])(this.paginator));
        var initialSelection = [];
        var allowMultiSelect = true;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](allowMultiSelect, initialSelection);
    };
    UsuariosListTableComponent.prototype.editUser = function (user) {
        // TODO update user
    };
    UsuariosListTableComponent.prototype.toggleActive = function (event, id) {
        // TODO implement the API call
        console.log(event.checked ? 'Activate' : 'Deactivate', id);
    };
    UsuariosListTableComponent.prototype.batchDelete = function () {
        // TODO use the selection.selected
    };
    /**
     * Selection Support
     */
    UsuariosListTableComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.source.data.length;
        return numSelected === numRows;
    };
    UsuariosListTableComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.source.data.forEach(function (row) { return _this.selection.select(row); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _app_usuarios_services__WEBPACK_IMPORTED_MODULE_4__["UsuariosDatasource"])
    ], UsuariosListTableComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], UsuariosListTableComponent.prototype, "columns", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], UsuariosListTableComponent.prototype, "paginator", void 0);
    UsuariosListTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-usuarios-list-table',
            template: __webpack_require__(/*! raw-loader!./table.component.html */ "../../node_modules/raw-loader/index.js!./src/app/usuarios/list/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/usuarios/list/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsuariosListTableComponent);
    return UsuariosListTableComponent;
}());



/***/ }),

/***/ "./src/app/usuarios/services/index.ts":
/*!********************************************!*\
  !*** ./src/app/usuarios/services/index.ts ***!
  \********************************************/
/*! exports provided: UsuariosDatabase, UsuariosDatasource, UsuariosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usuarios_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.database */ "./src/app/usuarios/services/usuarios.database.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosDatabase", function() { return _usuarios_database__WEBPACK_IMPORTED_MODULE_0__["UsuariosDatabase"]; });

/* harmony import */ var _usuarios_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuarios.datasource */ "./src/app/usuarios/services/usuarios.datasource.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosDatasource", function() { return _usuarios_datasource__WEBPACK_IMPORTED_MODULE_1__["UsuariosDatasource"]; });

/* harmony import */ var _usuarios_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usuarios.resolver */ "./src/app/usuarios/services/usuarios.resolver.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosResolver", function() { return _usuarios_resolver__WEBPACK_IMPORTED_MODULE_2__["UsuariosResolver"]; });






/***/ }),

/***/ "./src/app/usuarios/services/usuarios.database.ts":
/*!********************************************************!*\
  !*** ./src/app/usuarios/services/usuarios.database.ts ***!
  \********************************************************/
/*! exports provided: UsuariosDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosDatabase", function() { return UsuariosDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/service-proxies/service-proxies */ "./src/shared/service-proxies/service-proxies.ts");



var UsuariosDatabase = /** @class */ (function () {
    function UsuariosDatabase(users) {
        this.users = users;
    }
    UsuariosDatabase.prototype.get = function (id) {
        return this.users.get(id);
    };
    UsuariosDatabase.prototype.getAll = function (args) {
        return this.users.getAll(args.query, args.active, args.pageIndex, args.pageSize);
    };
    UsuariosDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_service_proxies_service_proxies__WEBPACK_IMPORTED_MODULE_2__["UserServiceProxy"]])
    ], UsuariosDatabase);
    return UsuariosDatabase;
}());



/***/ }),

/***/ "./src/app/usuarios/services/usuarios.datasource.ts":
/*!**********************************************************!*\
  !*** ./src/app/usuarios/services/usuarios.datasource.ts ***!
  \**********************************************************/
/*! exports provided: UsuariosDatasource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosDatasource", function() { return UsuariosDatasource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm5/matheo-datasource.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _usuarios_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios.database */ "./src/app/usuarios/services/usuarios.database.ts");





var UsuariosDatasource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsuariosDatasource, _super);
    function UsuariosDatasource(database) {
        var _this = _super.call(this) || this;
        _this.database = database;
        _this.config = {
            debug: false,
            autoStart: true // filter BehaviorSubject
        };
        _this.pageSize = 10;
        return _this;
    }
    UsuariosDatasource.prototype.rawDefault = function () {
        return {
            items: []
        };
    };
    UsuariosDatasource.prototype.rawFetch = function (args) {
        return this.database.getAll(args);
    };
    UsuariosDatasource.prototype.rawTotal = function (result) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result.items.length);
    };
    UsuariosDatasource.prototype.rawResult = function (result) {
        return result.items;
    };
    UsuariosDatasource.prototype.filter = function (query, limit) {
        throw new Error('Not Implemented');
    };
    UsuariosDatasource.prototype.resFilter = function (result) {
        throw new Error('Not Implemented');
    };
    UsuariosDatasource = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuarios_database__WEBPACK_IMPORTED_MODULE_4__["UsuariosDatabase"]])
    ], UsuariosDatasource);
    return UsuariosDatasource;
}(_matheo_datasource__WEBPACK_IMPORTED_MODULE_2__["ReactiveDataSource"]));



/***/ }),

/***/ "./src/app/usuarios/services/usuarios.resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/usuarios/services/usuarios.resolver.ts ***!
  \********************************************************/
/*! exports provided: UsuariosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosResolver", function() { return UsuariosResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _usuarios_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios.database */ "./src/app/usuarios/services/usuarios.database.ts");






var UsuariosResolver = /** @class */ (function () {
    function UsuariosResolver(router, database) {
        this.router = router;
        this.database = database;
    }
    UsuariosResolver.prototype.resolve = function (route) {
        var _this = this;
        var id = Number(route.paramMap.get('id'));
        return this.database.get(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () {
            _this.router.navigate(['/app/usuarios']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
        }));
    };
    UsuariosResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _usuarios_database__WEBPACK_IMPORTED_MODULE_5__["UsuariosDatabase"]])
    ], UsuariosResolver);
    return UsuariosResolver;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./src/app/usuarios/services/index.ts");
/* harmony import */ var _usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios.barrel */ "./src/app/usuarios/usuarios.barrel.ts");





var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__["UsuariosListComponent"]
    },
    {
        path: ':id/edit',
        component: _usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__["UsuariosFormComponent"],
        resolve: {
            item: _services__WEBPACK_IMPORTED_MODULE_3__["UsuariosResolver"]
        }
    }
];
var UsuariosRoutingModule = /** @class */ (function () {
    function UsuariosRoutingModule() {
    }
    UsuariosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsuariosRoutingModule);
    return UsuariosRoutingModule;
}());



/***/ }),

/***/ "./src/app/usuarios/usuarios.barrel.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.barrel.ts ***!
  \*********************************************/
/*! exports provided: UsuariosImports, UsuariosComponents, UsuariosFormComponent, UsuariosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosImports", function() { return UsuariosImports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponents", function() { return UsuariosComponents; });
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "../../node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slide-toggle */ "../../node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "../../node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _matheo_datasource__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @matheo/datasource */ "../../node_modules/@matheo/datasource/fesm5/matheo-datasource.js");
/* harmony import */ var _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/service-proxies/service-proxy.module */ "./src/shared/service-proxies/service-proxy.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./form/form.component */ "./src/app/usuarios/form/form.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormComponent", function() { return _form_form_component__WEBPACK_IMPORTED_MODULE_13__["UsuariosFormComponent"]; });

/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./list/list.component */ "./src/app/usuarios/list/list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsuariosListComponent", function() { return _list_list_component__WEBPACK_IMPORTED_MODULE_14__["UsuariosListComponent"]; });

/* harmony import */ var _list_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./list/table/table.component */ "./src/app/usuarios/list/table/table.component.ts");
/* harmony import */ var _list_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./list/filter/filter.component */ "./src/app/usuarios/list/filter/filter.component.ts");

















var UsuariosImports = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
    _matheo_datasource__WEBPACK_IMPORTED_MODULE_10__["MatDataSourceModule"],
    _shared_service_proxies_service_proxy_module__WEBPACK_IMPORTED_MODULE_11__["ServiceProxyModule"],
    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
];
var UsuariosComponents = [
    _form_form_component__WEBPACK_IMPORTED_MODULE_13__["UsuariosFormComponent"],
    _list_list_component__WEBPACK_IMPORTED_MODULE_14__["UsuariosListComponent"],
    _list_filter_filter_component__WEBPACK_IMPORTED_MODULE_16__["UsuariosListFilterComponent"],
    _list_table_table_component__WEBPACK_IMPORTED_MODULE_15__["UsuariosListTableComponent"]
];



/***/ }),

/***/ "./src/app/usuarios/usuarios.module.ts":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios.barrel */ "./src/app/usuarios/usuarios.barrel.ts");





var UsuariosModule = /** @class */ (function () {
    function UsuariosModule() {
    }
    UsuariosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsuariosRoutingModule"]
            ].concat(_usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__["UsuariosImports"]),
            declarations: _usuarios_barrel__WEBPACK_IMPORTED_MODULE_4__["UsuariosComponents"]
        })
    ], UsuariosModule);
    return UsuariosModule;
}());



/***/ })

}]);
//# sourceMappingURL=usuarios-usuarios-module-es5.js.map