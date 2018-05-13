(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container mb-5\">\r\n  <div class=\"py-5 text-center\">\r\n    <h2>Выбор измерительных трансформаторов тока и напряжения</h2>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <button class=\"btn btn-outline-primary btn-block\" (click)=\"t.select('tab-tt'); setTabType('tab-tt')\">Трансформатор тока</button>\r\n      </div>\r\n      <div class=\"col\">\r\n        <button class=\"btn btn-outline-primary btn-block\" (click)=\"t.select('tab-tn'); setTabType('tab-tn')\">Трансформатор напряжения</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-4\"></div>\r\n  <app-net-params-form [isVisibleFields]=\"isVisibleFields\" #netParamsForm></app-net-params-form>\r\n\r\n  <ngb-tabset #t=\"ngbTabset\">\r\n    <ngb-tab id=\"tab-tt\">\r\n      <ng-template ngbTabContent>\r\n        <app-amperage-transformer></app-amperage-transformer>\r\n      </ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"tab-tn\">\r\n      <ng-template ngbTabContent>\r\n        <app-voltage-transformer-form [netParamsForm]=\"netParamsForm\"></app-voltage-transformer-form>\r\n      </ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n<app-footer></app-footer>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.isVisibleFields = true;
    }
    AppComponent.prototype.setTabType = function (name) {
        this.isVisibleFields = name === 'tab-tt';
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/esm5/ng-select.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _features_net_params_form_net_params_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/net-params-form/net-params-form.component */ "./src/app/features/net-params-form/net-params-form.component.ts");
/* harmony import */ var _features_amperage_transformer_amperage_transformer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./features/amperage-transformer/amperage-transformer.component */ "./src/app/features/amperage-transformer/amperage-transformer.component.ts");
/* harmony import */ var _features_voltage_transformer_form_voltage_transformer_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./features/voltage-transformer-form/voltage-transformer-form.component */ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _features_net_params_form_net_params_form_component__WEBPACK_IMPORTED_MODULE_8__["NetParamsFormComponent"],
                _features_amperage_transformer_amperage_transformer_component__WEBPACK_IMPORTED_MODULE_9__["AmperageTransformerComponent"],
                _features_voltage_transformer_form_voltage_transformer_form_component__WEBPACK_IMPORTED_MODULE_10__["VoltageTransformerFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot()
            ],
            providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/amperage-transformer/amperage-transformer.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/features/amperage-transformer/amperage-transformer.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/amperage-transformer/amperage-transformer.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/features/amperage-transformer/amperage-transformer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h4 class=\"mb-3\">Параметры ТТ</h4>\r\n    <form class=\"needs-validation\" novalidate=\"\" [formGroup]=\"form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальное напряжение, кВ</label>\r\n          <ng-select [items]=\"ratedVoltageData\" bindValue=\"value\" bindLabel=\"value\" formControlName=\"ratedVoltage\"\r\n                     (ngModelChange)=\"saveNominalVoltage($event)\">\r\n          </ng-select>\r\n\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Вторичная номинальная нагрузка (cosφ = 0.8), ВА</label>\r\n          <ng-select [items]=\"ratedSecondaryVoltageData\" formControlName=\"secondaryVoltage\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальный первичный ток, А</label>\r\n          <ng-select [items]=\"primaryAmperageData\" bindValue=\"value\" bindLabel=\"value\" formControlName=\"primaryAmperage\"\r\n                     (ngModelChange)=\"setMaxWorkFirstAmperage($event);calculateTransformCoef()\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальный вторичный ток, А</label>\r\n          <ng-select [items]=\"secondaryAmperageData\" formControlName=\"secondaryAmperage\"\r\n                     (ngModelChange)=\"calculateTransformCoef()\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Коэффициент трансформации</label>\r\n          <input type=\"text\" class=\"form-control\" disabled [value]=\"transformCoef\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Обмотка учета</label>\r\n          <ng-select [items]=\"accountWinding\" formControlName=\"firstWinding\" (ngModelChange)=\"onWindingChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Обмотка измерения</label>\r\n          <ng-select [items]=\"measureWinding\" formControlName=\"secondWinding\" (ngModelChange)=\"onWindingChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Обмотка защиты</label>\r\n          <ng-select [items]=\"defenceWinding\" formControlName=\"thirdWinding\" (ngModelChange)=\"onWindingChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Ток динамической стойкости, кА</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"dynamicAmperage\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Ток термической стойкости, кА</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"termicAmperage\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Время протекания тока термической стойкости, c</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"termicAmperageTime\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Тип соединения</label>\r\n          <ng-select [items]=\"lengthCalcData\" formControlName=\"lengthCalc\" (ngModelChange)=\"calculateLength($event)\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div *ngIf=\"compareAllowedLoad === 'Нужно добавить резистор'\">\r\n          <div class=\"col mb-3\">\r\n            <label>Мощность добавочного резистора, ВА</label>\r\n            <ng-select [items]=\"additionalResistanceData\" formControlName=\"additionalResistance\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Коэффициент безопасности</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"safetyCoef\">\r\n        </div>\r\n      </div>\r\n      <h4 class=\"my-3\">Параметры вторичной сети</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Длина линии, м</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"lineLength\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Материал проводников</label>\r\n          <ng-select [items]=\"wireTypeData\" formControlName=\"wireType\" (ngModelChange)=\"onWireTypeChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Сопротивление приборов, Ом</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"resistance\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Сечение проводников, мм\r\n            <sup>2</sup>\r\n          </label>\r\n          <ng-select [items]=\"crossConductorData\" formControlName=\"crossConductor\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n    <hr class=\"mb-4\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"my-3\">Проверка по напряжению</h5>\r\n        <div class=\"row\">\r\n          <p class=\"text\"> {{ compareVoltagesResult }}</p>\r\n          <br>\r\n          <button class=\"btn btn-primary btn-block btm-sm\" (click)=\"compareVoltages()\">Проверить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"my-3\">Проверка коэффициента трансформации</h5>\r\n        <div class=\"row\">\r\n          <p class=\"text\"> {{ compareTransformCoef }}</p>\r\n          <br>\r\n          <button class=\"btn btn-primary btn-block btm-sm\" (click)=\"calculateTransformCorf()\">Проверить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"my-3\">Проверка по допустимой нагрузке</h5>\r\n        <div class=\"row\">\r\n          <p class=\"text\"> {{ compareAllowedLoad }}</p>\r\n          <br>\r\n          <button class=\"btn btn-primary btn-block btm-sm\" (click)=\"calculateSecondaryLoad()\">Проверить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"my-3\">Проверка ТТ по условиям термической и динамической стойкости</h5>\r\n        <div class=\"row\">\r\n          <p class=\"text\"> {{ compareTransformsShit }}</p>\r\n          <br>\r\n          <button class=\"btn btn-primary btn-block btm-sm\" (click)=\"checkTransformCoefs()\">Проверить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"my-3\">Проверка обмоток учета измерения на соответствие выбранного коэффициента безопасности</h5>\r\n        <div class=\"row\">\r\n          <p class=\"text\"> {{ checkSafetyCoef }}</p>\r\n          <br>\r\n          <button class=\"btn btn-primary btn-block btm-sm\" (click)=\"checkSafetyCoefs()\">Проверить</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/features/amperage-transformer/amperage-transformer.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/amperage-transformer/amperage-transformer.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AmperageTransformerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmperageTransformerComponent", function() { return AmperageTransformerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-form.service */ "./src/app/features/request-form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _net_params_form_net_params_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../net-params-form/net-params-form.component */ "./src/app/features/net-params-form/net-params-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AmperageTransformerComponent = /** @class */ (function () {
    function AmperageTransformerComponent(fb, netParamsForm, requestService) {
        this.fb = fb;
        this.netParamsForm = netParamsForm;
        this.requestService = requestService;
        this.crossConductorData = [];
        this.ratedVoltageData = [
            {
                value: 0.66,
                maxValue: 0.72
            },
            {
                value: 1,
                maxValue: 1.1
            },
            {
                value: 3,
                maxValue: 3.6
            },
            {
                value: 6,
                maxValue: 7.2
            },
            {
                value: 10,
                maxValue: 12
            },
            {
                value: 15,
                maxValue: 17.5
            },
            {
                value: 20,
                maxValue: 24
            },
            {
                value: 24,
                maxValue: 26.5
            },
            {
                value: 27,
                maxValue: 30
            },
            {
                value: 35,
                maxValue: 40.5
            },
            {
                value: 110,
                maxValue: 126
            },
            {
                value: 150,
                maxValue: 172
            },
            {
                value: 220,
                maxValue: 252
            },
            {
                value: 330,
                maxValue: 363
            },
            {
                value: 500,
                maxValue: 525
            },
            {
                value: 750,
                maxValue: 787
            }
        ];
        this.ratedSecondaryVoltageData = [3, 5, 10, 15, 20, 25, 30, 40, 50, 60, 75, 100];
        this.primaryAmperageData = [
            {
                value: 1,
                maxValue: 1
            },
            {
                value: 5,
                maxValue: 5
            },
            {
                value: 10,
                maxValue: 10
            },
            {
                value: 15,
                maxValue: 16
            },
            {
                value: 20,
                maxValue: 20
            },
            {
                value: 30,
                maxValue: 32
            },
            {
                value: 40,
                maxValue: 40
            },
            {
                value: 50,
                maxValue: 50
            },
            {
                value: 75,
                maxValue: 80
            },
            {
                value: 80,
                maxValue: 80
            },
            {
                value: 100,
                maxValue: 100
            },
            {
                value: 150,
                maxValue: 160
            },
            {
                value: 200,
                maxValue: 200
            },
            {
                value: 300,
                maxValue: 320
            },
            {
                value: 400,
                maxValue: 400
            },
            {
                value: 500,
                maxValue: 500
            },
            {
                value: 600,
                maxValue: 630
            },
            {
                value: 750,
                maxValue: 800
            },
            {
                value: 800,
                maxValue: 800
            },
            {
                value: 1000,
                maxValue: 1000
            },
            {
                value: 1200,
                maxValue: 1250
            },
            {
                value: 1500,
                maxValue: 1600
            },
            {
                value: 1600,
                maxValue: 1600
            },
            {
                value: 2000,
                maxValue: 2000
            },
            {
                value: 3000,
                maxValue: 3200
            },
            {
                value: 4000,
                maxValue: 4000
            },
            {
                value: 5000,
                maxValue: 5000
            },
            {
                value: 6000,
                maxValue: 6300
            },
            {
                value: 8000,
                maxValue: 8000
            },
            {
                value: 10000,
                maxValue: 10000
            },
            {
                value: 12000,
                maxValue: 12000
            },
            {
                value: 14000,
                maxValue: 14000
            },
            {
                value: 16000,
                maxValue: 16000
            },
            {
                value: 18000,
                maxValue: 18000
            },
            {
                value: 20000,
                maxValue: 20000
            },
            {
                value: 25000,
                maxValue: 25000
            },
            {
                value: 28000,
                maxValue: 28000
            },
            {
                value: 30000,
                maxValue: 30000
            },
            {
                value: 32000,
                maxValue: 32000
            },
            {
                value: 35000,
                maxValue: 35000
            },
            {
                value: 40000,
                maxValue: 40000
            },
        ];
        this.additionalResistanceData = [1.25, 2.5, 3.75, 5, 6.25, 7.5, 10, 12.5, 15, 20, 25, 30, 40, 50];
        this.secondaryAmperageData = [1, 5];
        this.cosinData = [0.8, 1];
        this.wireTypeData = ['Медь', 'Алюминий'];
        this.lengthCalcData = ['Полная звезда', 'Неполная звезда', 'Включение в одну фазу'];
        this.accountWinding = ['0.2s', '0.5s'];
        this.measureWinding = [0.1, 0.2, 0.5, 1, 3, 5];
        this.defenceWinding = ['5P', '10P'];
        this.transformCoef = '';
        this.compareVoltagesResult = '';
        this.compareAllowedLoad = '';
        this.compareTransformCoef = '';
        this.compareTransformsShit = '';
        this.checkSafetyCoef = '';
        this.form = fb.group({
            ratedVoltage: [''],
            secondaryVoltage: [''],
            primaryAmperage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secondaryAmperage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firstWinding: [''],
            secondWinding: [''],
            thirdWinding: [''],
            firstAccuracyСlass: [''],
            secondAccuracyСlass: [''],
            thirdAccuracyСlass: [''],
            dynamicAmperage: [''],
            termicAmperage: [''],
            termicAmperageTime: [''],
            safetyCoef: [''],
            cosin: [''],
            lineLength: [''],
            lengthCalc: [''],
            resistance: [''],
            wireType: [''],
            crossConductor: [''],
            additionalResistance: ['']
        });
        this._netParamsForm = netParamsForm;
    }
    AmperageTransformerComponent.prototype.onWireTypeChange = function (value) {
        if (value === 'Медь') {
            this.crossConductorData = [2.5, 4, 6, 10];
        }
        if (value === 'Алюминий') {
            this.crossConductorData = [4, 6, 10];
        }
    };
    AmperageTransformerComponent.prototype.calculateTransformCoef = function () {
        if (this.form.valid) {
            this.transformCoef = "" + this.form.value.primaryAmperage / this.form.value.secondaryAmperage;
            sessionStorage.setItem("secondaryAmperage", this.form.value.secondaryAmperage);
        }
    };
    AmperageTransformerComponent.prototype.compareVoltages = function (value) {
        var voltage = sessionStorage.getItem("maxPotential");
        if (this.form.value.ratedVoltage < voltage) {
            this.compareVoltagesResult = 'Трансформатор тока не соответствует номинальному напряжению сети';
        }
        else {
            this.compareVoltagesResult = 'Трансформатор тока соответствует номинальному напряжению сети';
        }
    };
    AmperageTransformerComponent.prototype.calculateSecondaryLoad = function () {
        var secondaryAmperage = Number.parseInt(sessionStorage.getItem("secondaryAmperage"));
        var gamma = this.form.value.wireType === 'Алюминий' ? 34.5 : 57;
        var resistanceProviders = this.form.value.lineLength / (gamma * this.form.value.crossConductor);
        var additionalResist = Number(this.form.value.additionalResistance);
        var load = secondaryAmperage * secondaryAmperage * (Number.parseFloat(this.form.value.resistance) + resistanceProviders + 0.05);
        if (this.form.value.secondaryVoltage >= load + additionalResist) {
            this.compareAllowedLoad = 'Загрузка вторичной обмотки ТТ соответствует номинальным параметрам загрузки';
        }
        else {
            this.compareAllowedLoad = 'Загрузка вторичной обмотки (' + (load + additionalResist).toFixed(2) + ') ТТ не соответствует номинальным параметрам загрузки';
        }
        if (load + additionalResist < 0.25 * this.form.value.secondaryVoltage) {
            this.compareAllowedLoad = 'Нужно добавить резистор';
        }
    };
    AmperageTransformerComponent.prototype.calculateLength = function (value) {
        if (value === 'Полная звезда') {
            this.form.value.lineLength = this.form.value.lineLength;
        }
        if (value === 'Неполная звезда') {
            this.form.value.lineLength = this.form.value.lineLength * Math.sqrt(3);
        }
        if (value === 'Включение в одну фазу') {
            this.form.value.lineLength = this.form.value.lineLength * 2;
        }
    };
    AmperageTransformerComponent.prototype.setMaxWorkFirstAmperage = function (value) {
        var _this = this;
        this.primaryAmperageData.map(function (config) {
            if (config.value === value) {
                _this.maxWorkAmperage = config.maxValue;
                _this.maxAmperage = "" + config.value;
                sessionStorage.setItem("maxAmperage", _this.maxWorkAmperage);
            }
        });
    };
    AmperageTransformerComponent.prototype.calculateTransformCorf = function () {
        var maxAmperage = Number.parseFloat(sessionStorage.getItem("maxAmperage"));
        var netMaxAmperage = Number.parseFloat(sessionStorage.getItem("netMaxAmperage"));
        var netMinAmperage = Number.parseFloat(sessionStorage.getItem("netMinAmperage"));
        var flag1 = netMaxAmperage / Number.parseFloat(this.transformCoef) > Number.parseFloat(this.form.value.secondaryAmperage) * 0.4;
        var flag2 = netMinAmperage / Number.parseFloat(this.transformCoef) > Number.parseFloat(this.form.value.secondaryAmperage) * 0.05;
        if (maxAmperage > netMaxAmperage && flag1 && flag2) {
            this.compareTransformCoef = 'Номинальный первичный ток соответствует наибольшему рабочему току';
        }
        else {
            if (!flag1 || !flag2) {
                this.compareTransformCoef = 'Коэфициент трансформации завышен. Выберите меньший первичный ток';
            }
            else {
                this.compareTransformCoef = 'Необходимо повысить номинальный первичный ток';
            }
        }
    };
    AmperageTransformerComponent.prototype.checkTransformCoefs = function () {
        var flag1 = this.form.value.dynamicAmperage >= Number.parseFloat(sessionStorage.getItem("shockAmperage"));
        var flag2 = this.form.value.termicAmperage * this.form.value.termicAmperage * this.form.value.termicAmperageTime >= Number.parseFloat(sessionStorage.getItem("kzAmperageImpulse"));
        if (flag1 && flag2) {
            this.compareTransformsShit = 'Трансформатор тока проходит по условия термической и динамической стойкости';
        }
        else {
            if (!flag1 && flag2) {
                this.compareTransformsShit = 'Трансформаторв тока не проходит по условиям динамической стойкости';
            }
            else {
                if (flag1 && !flag2) {
                    this.compareTransformsShit = 'Трансформатор тока не проходит по условия термической стойкости';
                }
                else {
                    this.compareTransformsShit = 'Трансформатор тока не проходит по условия термической и динамической стойкости';
                }
            }
        }
    };
    AmperageTransformerComponent.prototype.checkSafetyCoefs = function () {
        var coef = Number.parseFloat(sessionStorage.getItem("crashModeAmperage")) / this.form.value.primaryAmperage;
        if (coef > this.form.value.safetyCoef) {
            this.checkSafetyCoef = 'Трансформатор не проходит проверку на коэффициент безопасности';
        }
        else {
            this.checkSafetyCoef = 'Трансформатор проходит проверку на коэффициент безопасности';
        }
    };
    AmperageTransformerComponent.prototype.saveNominalVoltage = function (value) {
        sessionStorage.setItem("ratedVoltage", value);
    };
    AmperageTransformerComponent.prototype.ngOnInit = function () {
    };
    AmperageTransformerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-amperage-transformer',
            template: __webpack_require__(/*! ./amperage-transformer.component.html */ "./src/app/features/amperage-transformer/amperage-transformer.component.html"),
            styles: [__webpack_require__(/*! ./amperage-transformer.component.css */ "./src/app/features/amperage-transformer/amperage-transformer.component.css")],
            providers: [_net_params_form_net_params_form_component__WEBPACK_IMPORTED_MODULE_3__["NetParamsFormComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _net_params_form_net_params_form_component__WEBPACK_IMPORTED_MODULE_3__["NetParamsFormComponent"],
            _request_form_service__WEBPACK_IMPORTED_MODULE_1__["RequestFormService"]])
    ], AmperageTransformerComponent);
    return AmperageTransformerComponent;
}());



/***/ }),

/***/ "./src/app/features/net-params-form/net-params-form.component.css":
/*!************************************************************************!*\
  !*** ./src/app/features/net-params-form/net-params-form.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/net-params-form/net-params-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/features/net-params-form/net-params-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h4 class=\"mb-3\">Параметры сети</h4>\r\n    <form class=\"needs-validation\" novalidate=\"\" [formGroup]=\"form\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальное напряжение, кВ</label>\r\n          <ng-select [items]=\"ratedVoltageData\" bindValue=\"value\" bindLabel=\"value\" formControlName=\"potential\" (ngModelChange)=\"changeMaxPotential($event)\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Рабочее напряжение, кВ</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"workPotential\" (ngModelChange)=\"checkPotential()\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid last name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Минимальная мощность, МВт</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"minPower\" (ngModelChange)=\"calculateMinAmperage()\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Максимальная мощность, МВт</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"maxPower\" (ngModelChange)=\"calculateMaxAmperage()\">\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Минимальный ток, А</label>\r\n          <input type=\"text\" disabled class=\"form-control\" [value]=\"minAmperage\">\r\n\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Максмальный ток, А</label>\r\n          <input type=\"text\" disabled class=\"form-control disabled\" [value]=\"maxAmperage\">\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Ток трёхфазного КЗ, кА</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"kzAmperage\" (ngModelChange)=\"onKZEntered($event)\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Расчётное время теплового импульса, с</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"heatImpulseTime\" (ngModelChange)=\"onHeatImpulseTimeEntered($event)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Ударный ток, кА</label>\r\n          <input type=\"text\" class=\"form-control\" disabled [value]=\"shockAmperage\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\" *ngIf=\"isVisibleFields\">\r\n          <label>Импульс тока КЗ, А<sup>2</sup>*сек</label>\r\n          <input type=\"text\" class=\"form-control\" disabled [value]=\"kzAmperageImpulse\">\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/net-params-form/net-params-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/net-params-form/net-params-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: NetParamsFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetParamsFormComponent", function() { return NetParamsFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _request_form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request-form.service */ "./src/app/features/request-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetParamsFormComponent = /** @class */ (function () {
    function NetParamsFormComponent(fb, requestService) {
        this.fb = fb;
        this.requestService = requestService;
        this.isVisibleFields = false;
        this.maxPotential = '';
        this.shockAmperage = '';
        this.kzAmperageImpulse = '';
        this.ratedVoltageData = [
            {
                value: 0.66,
                maxValue: 0.72
            },
            {
                value: 1,
                maxValue: 1.1
            },
            {
                value: 3,
                maxValue: 3.6
            },
            {
                value: 6,
                maxValue: 7.2
            },
            {
                value: 10,
                maxValue: 12
            },
            {
                value: 15,
                maxValue: 17.5
            },
            {
                value: 20,
                maxValue: 24
            },
            {
                value: 24,
                maxValue: 26.5
            },
            {
                value: 27,
                maxValue: 30
            },
            {
                value: 35,
                maxValue: 40.5
            },
            {
                value: 110,
                maxValue: 126
            },
            {
                value: 150,
                maxValue: 172
            },
            {
                value: 220,
                maxValue: 252
            },
            {
                value: 330,
                maxValue: 363
            },
            {
                value: 500,
                maxValue: 525
            },
            {
                value: 750,
                maxValue: 787
            }
        ];
        this.minAmperage = '';
        this.maxAmperage = '';
        this.form = fb.group({
            potential: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            workPotential: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0)]],
            minPower: [''],
            maxPower: [''],
            minAmperage: [''],
            maxAmperage: [''],
            kzAmperage: [''],
            heatImpulseTime: [''],
            crashModeAmperage: ['']
        });
    }
    Object.defineProperty(NetParamsFormComponent.prototype, "getPotential", {
        get: function () {
            return this.form.value.potential;
        },
        enumerable: true,
        configurable: true
    });
    ;
    NetParamsFormComponent.prototype.getVoltage = function () {
        debugger;
        return this.maxPotential;
    };
    NetParamsFormComponent.prototype.calculateMinAmperage = function () {
        if (this.form.valid) {
            this.minAmperage = "" + (this.form.value.minPower * 1000 / (Math.sqrt(3) * this.form.value.potential)).toFixed(2);
            sessionStorage.setItem("netMinAmperage", this.minAmperage);
        }
    };
    NetParamsFormComponent.prototype.calculateMaxAmperage = function () {
        if (this.form.valid) {
            this.maxAmperage = "" + (this.form.value.maxPower * 1000 / (Math.sqrt(3) * this.form.value.potential)).toFixed(2);
            sessionStorage.setItem("netMaxAmperage", this.maxAmperage);
        }
    };
    NetParamsFormComponent.prototype.checkPotential = function () {
        var flag = false;
        if (this.form.value.workPotential > this.maxWorkPotential) {
            flag = true;
        }
        if (flag) {
            alert('Превышает максимальное рабочее напряжение');
        }
    };
    NetParamsFormComponent.prototype.changeMaxPotential = function (value) {
        var _this = this;
        this.ratedVoltageData.map(function (config) {
            if (config.value === value) {
                _this.maxWorkPotential = config.maxValue;
                _this.maxPotential = "" + config.value;
                sessionStorage.setItem("maxPotential", _this.maxPotential);
            }
        });
        sessionStorage.setItem("potential", value);
    };
    NetParamsFormComponent.prototype.onKZEntered = function (value) {
        this.shockAmperage = (this.form.value.kzAmperage * 1.8 * Math.sqrt(2)).toFixed(2);
        sessionStorage.setItem("shockAmperage", this.shockAmperage);
    };
    NetParamsFormComponent.prototype.onHeatImpulseTimeEntered = function (value) {
        this.kzAmperageImpulse = (this.form.value.kzAmperage * this.form.value.kzAmperage * this.form.value.heatImpulseTime).toFixed(2);
        sessionStorage.setItem("kzAmperageImpulse", this.kzAmperageImpulse);
    };
    NetParamsFormComponent.prototype.saveCrashAmperage = function (value) {
        sessionStorage.setItem("crashModeAmperage", value);
    };
    NetParamsFormComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NetParamsFormComponent.prototype, "isVisibleFields", void 0);
    NetParamsFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-net-params-form',
            template: __webpack_require__(/*! ./net-params-form.component.html */ "./src/app/features/net-params-form/net-params-form.component.html"),
            styles: [__webpack_require__(/*! ./net-params-form.component.css */ "./src/app/features/net-params-form/net-params-form.component.css")],
            providers: [_request_form_service__WEBPACK_IMPORTED_MODULE_2__["RequestFormService"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _request_form_service__WEBPACK_IMPORTED_MODULE_2__["RequestFormService"]])
    ], NetParamsFormComponent);
    return NetParamsFormComponent;
}());



/***/ }),

/***/ "./src/app/features/request-form.service.ts":
/*!**************************************************!*\
  !*** ./src/app/features/request-form.service.ts ***!
  \**************************************************/
/*! exports provided: RequestFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestFormService", function() { return RequestFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestFormService = /** @class */ (function () {
    function RequestFormService() {
    }
    RequestFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RequestFormService);
    return RequestFormService;
}());



/***/ }),

/***/ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/features/voltage-transformer-form/voltage-transformer-form.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/voltage-transformer-form/voltage-transformer-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <h4 class=\"mb-3\">Параметры ТН</h4>\r\n    <form class=\"needs-validation\" novalidate=\"\" [formGroup]=\"form\">\r\n      <div class=\"row mb-3\">\r\n        <div class=\"col\">\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"customRadioInline1\" class=\"custom-control-input\" [value]=\"true\"\r\n                   formControlName=\"transformatorType\"\r\n                   (ngModelChange)=\"onTransformatorType($event)\">\r\n            <label class=\"custom-control-label\" for=\"customRadioInline1\">Однофазный трансформатор</label>\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input type=\"radio\" id=\"customRadioInline2\" class=\"custom-control-input\" formControlName=\"transformatorType\"\r\n                   [value]=\"false\" (ngModelChange)=\"onTransformatorType($event)\">\r\n            <label class=\"custom-control-label\" for=\"customRadioInline2\">Трёхфазный трансформатор</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальное напряжение, кВ</label>\r\n          <ng-select [items]=\"getRatedVoltageData\" bindValue=\"value\" bindLabel=\"value\" formControlName=\"ratedVoltage\"\r\n                     (ngModelChange)=\"checkRatedVoltage()\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Тип нагрузки</label>\r\n          <ng-select [items]=\"loadTypeData\" formControlName=\"loadType\" (ngModelChange)=\"onLoadTypeChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Номинальная мощность вторичной нагрузки, ВА</label>\r\n          <ng-select [items]=\"ratedPowerData\" formControlName=\"transformerAccuracy\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Вид соединения основной вторичной обмотки</label>\r\n          <ng-select [items]=\"typeWindingConnectionData\" formControlName=\"typeWindingConnection\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm mb-3\">\r\n          <label>Класс точности основной вторичной обмотки</label>\r\n          <ng-select [items]=\"accountWinding\" formControlName=\"firstWinding\">\r\n          </ng-select>\r\n        </div>\r\n        <div class=\"col-sm mb-3\">\r\n          <label>Класс точности дополнительной вторичной обмотки</label>\r\n          <ng-select [items]=\"defenceWinding\" formControlName=\"thirdWinding\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm mb-3\">\r\n          <label>Напряжение основной вторичной обмотки, В</label>\r\n          <input  class=\"form-control\" formControlName=\"firstVoltageWinding\" disabled>\r\n        </div>\r\n        <div class=\"col-sm mb-3\">\r\n          <label>Напряжение дополнительной вторичной обмотки, В</label>\r\n          <input  class=\"form-control\" formControlName=\"thirdVoltageWinding\" disabled>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col mb-3\">\r\n          <label>Тип использования основной вторичной обмотки</label>\r\n          <ng-select [items]=\"useTypeData\" bindValue=\"value\" bindLabel=\"name\" formControlName=\"useType\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <h4 class=\"my-3\">Параметры вторичной сети</h4>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Длина линии, м</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"lineLength\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Материал проводников</label>\r\n          <ng-select [items]=\"wireTypeData\" formControlName=\"wireType\" (ngModelChange)=\"onWireTypeChange($event)\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Сечении линии, мм<sup>2</sup></label>\r\n          <ng-select [items]=\"crossConductorData\" formControlName=\"crossConductor\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Суммарная мощность приборов основной обмотки, ВА</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"sumPowerPrimary\">\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label>Суммарная мощность приборов дополнительной обмотки, ВА</label>\r\n          <input type=\"text\" class=\"form-control\" formControlName=\"sumPowerSecondary\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isLoadTypeCos08\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label><b>Догрузочный резистор</b><br>\r\n            Номинальная мощность, ВА\r\n          </label>\r\n          <ng-select [items]=\"preloadResistorData\" formControlName=\"preloadResistor\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <div class=\"row mb-4\" *ngIf=\"resultText\">\r\n        <div class=\"col\">\r\n          {{ resultText }}\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-4\" *ngIf=\"resultTextDVPrimary\">\r\n        <div class=\"col\">\r\n          {{ resultTextDVPrimary }}\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-4\" *ngIf=\"resultTextDVSecondary\">\r\n        <div class=\"col\">\r\n          {{ resultTextDVSecondary }}\r\n        </div>\r\n      </div>\r\n      <div class=\"row mb-4\" *ngIf=\"mainResult\">\r\n        <div class=\"col\">\r\n          {{ mainResult }}\r\n        </div>\r\n      </div>\r\n      <button class=\"btn btn-primary btn-lg btn-block\" (click)=\"calculateTransformCorf()\">Рассчитать</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/voltage-transformer-form/voltage-transformer-form.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: VoltageTransformerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoltageTransformerFormComponent", function() { return VoltageTransformerFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _request_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-form.service */ "./src/app/features/request-form.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VoltageTransformerFormComponent = /** @class */ (function () {
    function VoltageTransformerFormComponent(fb, requestService) {
        this.fb = fb;
        this.requestService = requestService;
        this.ratedVoltageData = [
            {
                value: 0.66,
                maxValue: 0.72
            },
            {
                value: 3,
                maxValue: 3.6
            },
            {
                value: 6,
                maxValue: 7.2
            },
            {
                value: 10,
                maxValue: 12
            },
            {
                value: 15,
                maxValue: 17.5
            },
            {
                value: 20,
                maxValue: 24
            },
            {
                value: 24,
                maxValue: 26.5
            },
            {
                value: 27,
                maxValue: 30
            },
            {
                value: 35,
                maxValue: 40.5
            },
            {
                value: 110,
                maxValue: 126
            },
            {
                value: 150,
                maxValue: 172
            },
            {
                value: 220,
                maxValue: 252
            },
            {
                value: 330,
                maxValue: 363
            },
            {
                value: 500,
                maxValue: 525
            },
            {
                value: 750,
                maxValue: 787
            }
        ];
        this.typeWindingConnectionData = ['Открытый треугольник', 'Звезда'];
        this.ratedPowerData = [];
        this.accuracyClassData = [0.1, 0.2, 0.5, 1, 3];
        this.loadTypeData = ['Тип нагрузки I (cos φ = 0.5..1)', 'Тип нагрузки II ( cos φ = 0.8)'];
        this.lineCrossData = [];
        this.crossConductorData = [];
        this.accountWinding = [0.1, 0.2, 0.5, 1, 3];
        this.measureWinding = [0.1, 0.2, 0.5, 1, 3];
        this.defenceWinding = ['3P', '6P'];
        this.wireTypeData = ['Медь', 'Алюминий'];
        this.preloadResistorData = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        this.useTypeData = [{
                name: 'Расчётные счётчики',
                value: 0.005
            },
            {
                name: 'Расчётные счётчики межсистемных линий',
                value: 0.0025
            },
            {
                name: 'Счётчики технического учёта, щитовой прибор и датчики мощности',
                value: 0.015
            }];
        this.form = fb.group({
            transformatorType: [true],
            ratedVoltage: [''],
            ratedPower: [''],
            loadType: [''],
            transformerAccuracy: [''],
            typeWindingConnection: [''],
            firstWinding: [''],
            thirdWinding: [''],
            firstVoltageWinding: [''],
            thirdVoltageWinding: [''],
            useType: [''],
            resistanceSum: [''],
            crossConductor: [''],
            lineLength: [''],
            sumPowerPrimary: [''],
            sumPowerSecondary: [''],
            preloadResistor: [0],
            wireType: ['']
        });
    }
    Object.defineProperty(VoltageTransformerFormComponent.prototype, "getRatedVoltageData", {
        get: function () {
            if (this.netParamsForm.form.value.potential) {
                if (this.form.value.transformatorType) {
                    this.form.get('ratedVoltage').setValue(this.netParamsForm.form.value.potential + ":\u221A3");
                }
                else {
                    this.form.get('ratedVoltage').setValue(this.netParamsForm.form.value.potential);
                }
            }
            else {
                this.form.get('ratedVoltage').setValue([]);
                return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VoltageTransformerFormComponent.prototype, "isLoadTypeCos08", {
        get: function () {
            if (this.form.value.loadType === 'Тип нагрузки II ( cos φ = 0.8)') {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    VoltageTransformerFormComponent.prototype.ngOnInit = function () {
        this.onTransformatorType(true);
    };
    VoltageTransformerFormComponent.prototype.onTransformatorType = function (value) {
        if (value) {
            this.form.get('firstVoltageWinding').setValue('100:√3');
            this.form.get('thirdVoltageWinding').setValue('100:3');
        }
        else {
            this.form.get('firstVoltageWinding').setValue('100');
            this.form.get('thirdVoltageWinding').setValue('100');
        }
    };
    VoltageTransformerFormComponent.prototype.onLoadTypeChange = function (value) {
        if (value === 'Тип нагрузки I (cos φ = 0.5..1)') {
            this.ratedPowerData = [1, 2, 5, 10, 15, 20];
        }
        if (value === 'Тип нагрузки II ( cos φ = 0.8)') {
            this.ratedPowerData = [10, 15, 20, 25, 30, 45, 50, 70, 100, 150, 200,
                300, 400, 500, 600, 800, 1000, 12000];
        }
    };
    VoltageTransformerFormComponent.prototype.onWireTypeChange = function (value) {
        if (value === 'Медь') {
            this.crossConductorData = [1.5, 2.5, 4, 6, 10];
        }
        if (value === 'Алюминий') {
            this.crossConductorData = [2.5, 4, 6, 10];
        }
    };
    VoltageTransformerFormComponent.prototype.checkRatedVoltage = function () {
    };
    VoltageTransformerFormComponent.prototype.checkLoadTransformator = function () {
        if (this.form.value.loadType === 'Тип нагрузки II ( cos φ = 0.8)') {
            if (this.form.value.sumPowerPrimary && this.form.value.sumPowerSecondary
                && this.form.value.transformerAccuracy && this.netParamsForm.form.value.potential) {
                var sumPowers = this.form.value.sumPowerPrimary * 1 + this.form.value.sumPowerSecondary * 1 + this.form.value.preloadResistor * 1;
                var intervalFirst = 0.25 * (this.form.value.transformerAccuracy * 1) *
                    Math.pow(((this.netParamsForm.form.value.potential * 1) / (this.netParamsForm.form.value.potential * 1)), 2);
                var intervalSecond = (this.form.value.transformerAccuracy * 1) *
                    Math.pow(((this.netParamsForm.form.value.potential * 1) / (this.netParamsForm.form.value.potential * 1)), 2);
                var success = true;
                if (sumPowers > intervalFirst && sumPowers < intervalSecond) {
                    this.resultText = 'Загрузка вторичной обмотки трансформатора соответствует нормативу по ГОСТ.';
                }
                else {
                    success = false;
                    this.resultText = 'Загрузка трансформатора напряжения не соответствует интервалу от 25% до 100% номинальной нагрузки.' +
                        'Необходимо выбрать мощность догрузочного резистра';
                }
                return success;
            }
        }
        else {
            return true;
        }
    };
    VoltageTransformerFormComponent.prototype.checkDV = function () {
        if (this.form.value.lineLength && this.form.value.crossConductor && this.form.value.sumPowerPrimary && this.form.value.sumPowerSecondary) {
            var constanta = void 0;
            if (this.form.value.wireType === 'Алюминий') {
                constanta = 34.5;
            }
            else if (this.form.value.wireType === 'Медь') {
                constanta = 57;
            }
            var resistance = (this.form.value.lineLength * 1) / ((this.form.value.crossConductor * 1) * constanta);
            var transformatorType = void 0;
            if (this.form.value.transformatorType) {
                transformatorType = 100 / Math.sqrt(3);
            }
            else {
                transformatorType = 100;
            }
            var primaryWireResult = Math.sqrt(3) * (this.form.value.sumPowerPrimary * 1) / transformatorType;
            var secondaryWireResult = (this.form.value.sumPowerSecondary * 1) / 100;
            var DVPrimary = primaryWireResult * resistance * Math.sqrt(3);
            var DVSecondary = secondaryWireResult * resistance * Math.sqrt(3);
            var success = true;
            if ((this.form.value.useType.value * 1) >= DVPrimary) {
                this.resultTextDVPrimary = 'Выбранный проводник для основной обмотки подходит по условию допустимого падения напряжения на участке.';
            }
            else {
                success = false;
                this.resultTextDVPrimary = 'Проводник не подходит по условию допустимого падения напряжения на участке. Выберите проводник большего сечения или уменьшите длину проводника основной обмотки.';
            }
            if (0.03 >= DVSecondary) {
                this.resultTextDVSecondary = 'Выбранный проводник для дополнительной обмотки подходит по условию допустимого падения напряжения на участке.';
            }
            else {
                success = false;
                this.resultTextDVSecondary = 'Проводник не подходит по условию допустимого падения напряжения на участке. Выберите проводник большего сечения или уменьшите длину проводника дополнительной обмотки.';
            }
            return success;
        }
    };
    VoltageTransformerFormComponent.prototype.calculateTransformCorf = function () {
        if (this.checkLoadTransformator() && this.checkDV()) {
            this.mainResult = 'Трансформатор напряжения соответствует предъявляемым к нему требованиям.';
        }
        else {
            this.mainResult = 'Трансформатор напряжения не соответствует предъявляемым к нему требованиям. Измените параметры' +
                ' трансформатора в соответствии с выведенными пояснениями. См. выше.';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VoltageTransformerFormComponent.prototype, "netParamsForm", void 0);
    VoltageTransformerFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voltage-transformer-form',
            template: __webpack_require__(/*! ./voltage-transformer-form.component.html */ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.html"),
            styles: [__webpack_require__(/*! ./voltage-transformer-form.component.css */ "./src/app/features/voltage-transformer-form/voltage-transformer-form.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _request_form_service__WEBPACK_IMPORTED_MODULE_1__["RequestFormService"]])
    ], VoltageTransformerFormComponent);
    return VoltageTransformerFormComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" href=\"#\"></a>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-dark bg-dark box-shadow\">\r\n  <div class=\"container d-flex justify-content-between\">\r\n    <a href=\"#\" class=\"navbar-brand d-flex align-items-center\">\r\n      <img width=\"40\" height=\"40\" class=\"mr-3\" src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MDggNTA4IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDggNTA4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojOTBERkFBOyIgY3g9IjI1NCIgY3k9IjI1NCIgcj0iMjU0Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjU0LDY1LjZDMTUwLDY1LjYsNjUuNiwxNTAsNjUuNiwyNTRTMTUwLDQ0Mi40LDI1NCw0NDIuNFM0NDIuNCwzNTgsNDQyLjQsMjU0UzM1OCw2NS42LDI1NCw2NS42eiAgIE0yNTQsMzkxLjZjLTc2LDAtMTM3LjYtNjEuNi0xMzcuNi0xMzcuNlMxNzgsMTE2LjQsMjU0LDExNi40UzM5MS42LDE3OCwzOTEuNiwyNTRTMzMwLDM5MS42LDI1NCwzOTEuNnoiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6IzMyNEE1RTsiIHBvaW50cz0iMzU1LjYsMTg3LjYgMjQxLjYsMjA2LjggMzMyLjgsOTMuNiAyMzcuMiw5Ni40IDE2OS42LDI1Ni44IDI0NS42LDI0NiAxODgsMzUwLjQgICAxNjcuMiwzMjkuNiAxNzUuMiwzOTkuMiAyMzUuNiwzNjMuMiAyMTAuOCwzNjAgIi8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\" />\r\n      <strong style=\"padding-bottom: 5px;\">typeof(Energy) team</strong>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\energy_hack\EnergyHack\EnergyHackFrontend\eHack\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map