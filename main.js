(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/cleanArchitectureAngular17/cleanArchitectureAngular17/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "IbB0":
/*!********************************************************************************************!*\
  !*** ./src/app/infraestructure/driven-adapter/album-api/album-api-withou-delay.service.ts ***!
  \********************************************************************************************/
/*! exports provided: AlbumApiServiceWithoutDelay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumApiServiceWithoutDelay", function() { return AlbumApiServiceWithoutDelay; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/models/Album/gateway/album-gateway */ "pmD/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class AlbumApiServiceWithoutDelay extends src_app_domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__["AlbumGateway"] {
    constructor(http) {
        super();
        this.http = http;
        this._url = 'https://jsonplaceholder.typicode.com/albums/';
    }
    getByID(id) {
        return this.http.get(this._url + id);
    }
    getAll() {
        return this.http.get(this._url);
    }
    saveNew(_alb) {
        throw new Error('Method not implemented.');
    }
}
AlbumApiServiceWithoutDelay.ɵfac = function AlbumApiServiceWithoutDelay_Factory(t) { return new (t || AlbumApiServiceWithoutDelay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AlbumApiServiceWithoutDelay.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlbumApiServiceWithoutDelay, factory: AlbumApiServiceWithoutDelay.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumApiServiceWithoutDelay, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "JLsg":
/*!******************************************************!*\
  !*** ./src/app/domain/usecase/get-album-use-case.ts ***!
  \******************************************************/
/*! exports provided: GetAlbumUseCases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAlbumUseCases", function() { return GetAlbumUseCases; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Album/gateway/album-gateway */ "pmD/");



class GetAlbumUseCases {
    constructor(_albumGateWay) {
        this._albumGateWay = _albumGateWay;
    }
    getAlbumById(id) {
        //TODO: En este sitio podríamos manejar las configuraciones 
        //en cache
        return this._albumGateWay.getByID(id);
    }
    getAllAlbum() {
        return this._albumGateWay.getAll();
    }
}
GetAlbumUseCases.ɵfac = function GetAlbumUseCases_Factory(t) { return new (t || GetAlbumUseCases)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__["AlbumGateway"])); };
GetAlbumUseCases.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetAlbumUseCases, factory: GetAlbumUseCases.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetAlbumUseCases, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__["AlbumGateway"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _infraestructure_driven_adapter_album_api_album_api_withou_delay_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infraestructure/driven-adapter/album-api/album-api-withou-delay.service */ "IbB0");
/* harmony import */ var _UI_view_models_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/view-models/album-card/album-card.component */ "gcMS");




class AppComponent {
    constructor(_albumApiService) {
        this._albumApiService = _albumApiService;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_infraestructure_driven_adapter_album_api_album_api_withou_delay_service__WEBPACK_IMPORTED_MODULE_1__["AlbumApiServiceWithoutDelay"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Arquitectura limpia/ Angular/ BEM / Typescript / Github Actions !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-album-card");
    } }, directives: [_UI_view_models_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_2__["AlbumCardComponent"]], styles: ["h1[_ngcontent-%COMP%] {\n  color: #333;\n  text-transform: uppercase;\n  font-size: 4em;\n  line-height: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgY29sb3I6ICMzMzM7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBsaW5lLWhlaWdodDogMWVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _infraestructure_driven_adapter_album_api_album_api_withou_delay_service__WEBPACK_IMPORTED_MODULE_1__["AlbumApiServiceWithoutDelay"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _UI_view_models_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UI/view-models/album-card/album-card.component */ "gcMS");
/* harmony import */ var _UI_common_circular_progress_indicator_circular_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UI/common/circular-progress-indicator/circular-progress-indicator.component */ "bfFX");
/* harmony import */ var _domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/models/Album/gateway/album-gateway */ "pmD/");
/* harmony import */ var _infraestructure_driven_adapter_album_api_album_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./infraestructure/driven-adapter/album-api/album-api.service */ "kqIQ");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_7__["AlbumGateway"], useClass: _infraestructure_driven_adapter_album_api_album_api_service__WEBPACK_IMPORTED_MODULE_8__["AlbumApiService"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _UI_view_models_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_5__["AlbumCardComponent"],
        _UI_common_circular_progress_indicator_circular_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["CircularProgressIndicatorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _UI_view_models_album_card_album_card_component__WEBPACK_IMPORTED_MODULE_5__["AlbumCardComponent"],
                    _UI_common_circular_progress_indicator_circular_progress_indicator_component__WEBPACK_IMPORTED_MODULE_6__["CircularProgressIndicatorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ],
                providers: [{ provide: _domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_7__["AlbumGateway"], useClass: _infraestructure_driven_adapter_album_api_album_api_service__WEBPACK_IMPORTED_MODULE_8__["AlbumApiService"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bfFX":
/*!************************************************************************************************!*\
  !*** ./src/app/UI/common/circular-progress-indicator/circular-progress-indicator.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CircularProgressIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularProgressIndicatorComponent", function() { return CircularProgressIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CircularProgressIndicatorComponent {
    constructor() { }
    ngOnInit() {
    }
}
CircularProgressIndicatorComponent.ɵfac = function CircularProgressIndicatorComponent_Factory(t) { return new (t || CircularProgressIndicatorComponent)(); };
CircularProgressIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CircularProgressIndicatorComponent, selectors: [["app-circular-progress-indicator"]], decls: 1, vars: 0, consts: [[1, "circle"]], template: function CircularProgressIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["body[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\n.circle[_ngcontent-%COMP%] {\n  border: 6px solid #4b4a50;\n  border-left-color: transparent;\n  border-radius: 100%;\n  margin-left: 45%;\n  width: 60px;\n  height: 60px;\n  animation: rotate360 3s infinite linear;\n  position: relative;\n  z-index: 20;\n}\n\n.circle[_ngcontent-%COMP%]:before {\n  content: \" \";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 7px solid #ddd;\n  border-radius: 100%;\n  z-index: 10;\n}\n\n@keyframes rotate360 {\n  from {\n    transform: rotate(0deg);\n    border-left-color: transparent;\n  }\n  to {\n    transform: rotate(360deg);\n    border-left-color: transparent;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVUkvY29tbW9uL2NpcmN1bGFyLXByb2dyZXNzLWluZGljYXRvci9jaXJjdWxhci1wcm9ncmVzcy1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFFUjs7QUFFQTtFQUNJO0lBQ0ksdUJBQUE7SUFDQSw4QkFBQTtFQUNOO0VBQ0U7SUFDSSx5QkFBQTtJQUNBLDhCQUFBO0VBQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL1VJL2NvbW1vbi9jaXJjdWxhci1wcm9ncmVzcy1pbmRpY2F0b3IvY2lyY3VsYXItcHJvZ3Jlc3MtaW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jaXJjbGUge1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHJnYig3NSwgNzQsIDgwKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBhbmltYXRpb246IHJvdGF0ZTM2MCAzcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDIwO1xuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgI2RkZDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZTM2MCB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircularProgressIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-circular-progress-indicator',
                templateUrl: './circular-progress-indicator.component.html',
                styleUrls: ['./circular-progress-indicator.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gcMS":
/*!*******************************************************************!*\
  !*** ./src/app/UI/view-models/album-card/album-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlbumCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumCardComponent", function() { return AlbumCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _domain_usecase_get_album_use_case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../domain/usecase/get-album-use-case */ "JLsg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_circular_progress_indicator_circular_progress_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/circular-progress-indicator/circular-progress-indicator.component */ "bfFX");





function AlbumCardComponent_app_circular_progress_indicator_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circular-progress-indicator", 9);
} }
function AlbumCardComponent_app_circular_progress_indicator_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circular-progress-indicator", 9);
} }
function AlbumCardComponent_app_circular_progress_indicator_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-circular-progress-indicator", 9);
} }
class AlbumCardComponent {
    constructor(_getAlbumUseCase) {
        this._getAlbumUseCase = _getAlbumUseCase;
    }
    ngOnInit() {
        this.response$ = this._getAlbumUseCase.getAlbumById('12');
        this.response$.subscribe((data) => {
            this.datos = data;
        });
    }
}
AlbumCardComponent.ɵfac = function AlbumCardComponent_Factory(t) { return new (t || AlbumCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_domain_usecase_get_album_use_case__WEBPACK_IMPORTED_MODULE_1__["GetAlbumUseCases"])); };
AlbumCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumCardComponent, selectors: [["app-album-card"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 21, vars: 6, consts: [[1, "body"], [1, "card", "card--type-1"], [1, "card__header"], [1, "card__title"], ["class", "card__loader", 4, "ngIf"], [1, "card__content"], [1, "card__body"], [1, "card__section"], [1, "card__subtitle"], [1, "card__loader"]], template: function AlbumCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Titulo Album :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlbumCardComponent_app_circular_progress_indicator_5_Template, 1, 0, "app-circular-progress-indicator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Album id :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AlbumCardComponent_app_circular_progress_indicator_12_Template, 1, 0, "app-circular-progress-indicator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Album userId :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AlbumCardComponent_app_circular_progress_indicator_18_Template, 1, 0, "app-circular-progress-indicator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.datos == null ? null : ctx.datos.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datos == null ? null : ctx.datos.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.datos == null ? null : ctx.datos.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datos == null ? null : ctx.datos.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.datos == null ? null : ctx.datos.userId));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.datos == null ? null : ctx.datos.userId);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _common_circular_progress_indicator_circular_progress_indicator_component__WEBPACK_IMPORTED_MODULE_3__["CircularProgressIndicatorComponent"]], styles: [".body[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.card--type-1[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  background-color: #fff;\n}\n\n.card__header[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n\n.card__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n  font-weight: bold;\n  color: #333;\n}\n\n.card__loader[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.card__content[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  color: #666;\n  padding: 15px;\n  border-radius: 5px;\n}\n\n.card__body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.card__section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.card__subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 20px;\n  font-weight: bold;\n  color: #333;\n}\n\nh2[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  margin-bottom: 2px;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  text-transform: uppercase;\n  text-align: center;\n  background-color: #e2e1e0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVUkvdmlldy1tb2RlbHMvYWxidW0tY2FyZC9hbGJ1bS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFESjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPRTtFQUNFLGFBQUE7QUFMSjs7QUFRRTtFQUNFLG1CQUFBO0FBTko7O0FBU0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFQSjs7QUFXQTtFQUNFLGtCQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBUkYiLCJmaWxlIjoic3JjL2FwcC9VSS92aWV3LW1vZGVscy9hbGJ1bS1jYXJkL2FsYnVtLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jYXJkIHtcbiAgJi0tdHlwZS0xIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuXG4gICZfX2hlYWRlciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cblxuICAmX19sb2FkZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG5cbiAgJl9fY29udGVudCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxuXG4gICZfX2JvZHkge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAmX19zZWN0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG5cbiAgJl9fc3VidGl0bGUge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxufVxuXG5oMiwgaDF7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuaDN7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMWUwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                providers: [],
                selector: 'app-album-card',
                templateUrl: './album-card.component.html',
                styleUrls: ['./album-card.component.scss']
            }]
    }], function () { return [{ type: _domain_usecase_get_album_use_case__WEBPACK_IMPORTED_MODULE_1__["GetAlbumUseCases"] }]; }, null); })();


/***/ }),

/***/ "kqIQ":
/*!*******************************************************************************!*\
  !*** ./src/app/infraestructure/driven-adapter/album-api/album-api.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AlbumApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumApiService", function() { return AlbumApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/domain/models/Album/gateway/album-gateway */ "pmD/");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AlbumApiService extends src_app_domain_models_Album_gateway_album_gateway__WEBPACK_IMPORTED_MODULE_1__["AlbumGateway"] {
    constructor(http) {
        super();
        this.http = http;
        this._url = 'https://jsonplaceholder.typicode.com/albums/';
    }
    getByID(id) {
        return this.http.get(this._url + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(2000));
    }
    getAll() {
        return this.http.get(this._url);
    }
    saveNew(_alb) {
        throw new Error('Method not implemented.');
    }
}
AlbumApiService.ɵfac = function AlbumApiService_Factory(t) { return new (t || AlbumApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AlbumApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlbumApiService, factory: AlbumApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pmD/":
/*!**************************************************************!*\
  !*** ./src/app/domain/models/Album/gateway/album-gateway.ts ***!
  \**************************************************************/
/*! exports provided: AlbumGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumGateway", function() { return AlbumGateway; });
class AlbumGateway {
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map