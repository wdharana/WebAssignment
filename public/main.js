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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-nav-bar{\r\n  font-family: 'Lobster', sans-serif;\r\n}\r\n\r\napp-side-bar{\r\n  font-family: 'Lobster', sans-serif;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav-bar></app-nav-bar>\n<div class=\"container\">\n  <app-alerts></app-alerts>\n  <router-outlet></router-outlet>\n</div>\n\n"

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
    }
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_addnewlab_addnewlab_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/addnewlab/addnewlab.component */ "./src/app/components/addnewlab/addnewlab.component.ts");
/* harmony import */ var _components_makereservation_makereservation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/makereservation/makereservation.component */ "./src/app/components/makereservation/makereservation.component.ts");
/* harmony import */ var _components_myreservation_myreservation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/myreservation/myreservation.component */ "./src/app/components/myreservation/myreservation.component.ts");
/* harmony import */ var _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/side-bar/side-bar.component */ "./src/app/components/side-bar/side-bar.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
/* harmony import */ var _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/adduser/adduser.component */ "./src/app/components/adduser/adduser.component.ts");
/* harmony import */ var _components_admindashboad_admindashboad_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/admindashboad/admindashboad.component */ "./src/app/components/admindashboad/admindashboad.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'admindashboard', component: _components_admindashboad_admindashboad_component__WEBPACK_IMPORTED_MODULE_23__["AdmindashboadComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'addlab', component: _components_addnewlab_addnewlab_component__WEBPACK_IMPORTED_MODULE_17__["AddnewlabComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'makereservation', component: _components_makereservation_makereservation_component__WEBPACK_IMPORTED_MODULE_18__["MakereservationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'checkavailability', component: _components_myreservation_myreservation_component__WEBPACK_IMPORTED_MODULE_19__["MyreservationComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'adduser', component: _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_22__["AdduserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'reports', component: _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__["ReportsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
                _components_addnewlab_addnewlab_component__WEBPACK_IMPORTED_MODULE_17__["AddnewlabComponent"],
                _components_makereservation_makereservation_component__WEBPACK_IMPORTED_MODULE_18__["MakereservationComponent"],
                _components_myreservation_myreservation_component__WEBPACK_IMPORTED_MODULE_19__["MyreservationComponent"],
                _components_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_20__["SideBarComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_21__["ReportsComponent"],
                _components_adduser_adduser_component__WEBPACK_IMPORTED_MODULE_22__["AdduserComponent"],
                _components_admindashboad_admindashboad_component__WEBPACK_IMPORTED_MODULE_23__["AdmindashboadComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_alert_module__WEBPACK_IMPORTED_MODULE_13__["AlertsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_11__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addnewlab/addnewlab.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addnewlab/addnewlab.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin-left: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/addnewlab/addnewlab.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/addnewlab/addnewlab.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n\n<div class=\"form\">\n  <form (submit)=\"addNewLab()\">\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Lab Name</label>\n      <input type=\"text\" class=\"form-control col-md-10\" [(ngModel)]=\"labName\" name=\"labName\" id=\"labName\" style=\"width: 200px\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Description</label>\n      <input type=\"text\" class=\"form-control col-md-10\" [(ngModel)]=\"labDescription\" name=\"labDescription\" id=\"labDescription\" style=\"width: 200px\">\n    </div>\n\n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/addnewlab/addnewlab.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addnewlab/addnewlab.component.ts ***!
  \*************************************************************/
/*! exports provided: AddnewlabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddnewlabComponent", function() { return AddnewlabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddnewlabComponent = /** @class */ (function () {
    function AddnewlabComponent(validateService, alerts, authService, router) {
        this.validateService = validateService;
        this.alerts = alerts;
        this.authService = authService;
        this.router = router;
    }
    AddnewlabComponent.prototype.ngOnInit = function () {
    };
    AddnewlabComponent.prototype.addNewLab = function () {
        var _this = this;
        var lab = {
            labName: this.labName,
            labDescription: this.labDescription
        };
        if (!this.validateService.validaLab(lab)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        this.authService.registerLab(lab).subscribe(function (data) {
            if (data['success']) {
                _this.alerts.setMessage('Successfully Registered', 'success');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.alerts.setMessage('Somethings went wrong ', 'error');
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    AddnewlabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addnewlab',
            template: __webpack_require__(/*! ./addnewlab.component.html */ "./src/app/components/addnewlab/addnewlab.component.html"),
            styles: [__webpack_require__(/*! ./addnewlab.component.css */ "./src/app/components/addnewlab/addnewlab.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddnewlabComponent);
    return AddnewlabComponent;
}());



/***/ }),

/***/ "./src/app/components/adduser/adduser.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin-left: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/adduser/adduser.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n\n<div class=\"form\">\n  <form (submit)=\"addNewUser()\">\n\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Name</label>\n      <input type=\"text\" class=\"form-control col-md-10\" name=\"name\" id=\"name\" [(ngModel)]=\"name\" placeholder=\"Enter Name\" style=\"width: 200px\">\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Email</label>\n      <input type=\"text\" class=\"form-control col-md-10\" name=\"email\" id=\"email\"  [(ngModel)]=\"email\" placeholder=\"Enter your Email\" [value]=\"emailValue\" style=\"width: 200px\">\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">User Type</label>\n      <select [(ngModel)]=\"type\" name=\"type\" id=\"type\" class=\"col-md-10\" style=\"width: 200px; height: 32px\">\n        <!--<option value=\"User\">Select User Type</option>-->\n        <option value=\"User\">User</option>\n        <option value=\"Admin\" >Admin</option>\n      </select>\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Password</label>\n      <input type=\"text\" class=\"form-control col-md-10\" name=\"password\" id=\"password\"  [(ngModel)]=\"password\" placeholder=\"Enter your Password\" [value]=\"passwordValue\" style=\"width: 200px\">\n    </div>\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Confirm Password</label>\n      <input type=\"text\" class=\"form-control col-md-10\" name=\"confirmPassword\" id=\"confirm\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm your Password\" [value]=\"confirmPasswordValue\" style=\"width: 200px\">\n    </div>\n\n\n\n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/adduser/adduser.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/adduser/adduser.component.ts ***!
  \*********************************************************/
/*! exports provided: AdduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdduserComponent", function() { return AdduserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdduserComponent = /** @class */ (function () {
    function AdduserComponent(validateService, alerts, authService, router) {
        this.validateService = validateService;
        this.alerts = alerts;
        this.authService = authService;
        this.router = router;
    }
    AdduserComponent.prototype.ngOnInit = function () {
    };
    AdduserComponent.prototype.addNewUser = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            // username: this.username,
            type: this.type,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        if (!this.validateService.validateRegister(user)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        if (!this.validateService.validatPassword(user)) {
            this.alerts.setMessage('password mismatch', 'error');
            this.confirmPasswordValue = null;
            this.passwordValue = null;
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.alerts.setMessage('please use a valid email', 'error');
            this.emailValue = null;
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.alerts.setMessage('Successfully Registered', 'success');
                _this.router.navigate(['/login']);
            }
            else {
                _this.alerts.setMessage(data['msg'], 'error');
                _this.router.navigate(['/adduser']);
            }
        });
    };
    AdduserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adduser',
            template: __webpack_require__(/*! ./adduser.component.html */ "./src/app/components/adduser/adduser.component.html"),
            styles: [__webpack_require__(/*! ./adduser.component.css */ "./src/app/components/adduser/adduser.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdduserComponent);
    return AdduserComponent;
}());



/***/ }),

/***/ "./src/app/components/admindashboad/admindashboad.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admindashboad/admindashboad.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  margin-left: 50px ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admindashboad/admindashboad.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admindashboad/admindashboad.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n<div>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Lab Name</th>\n      <th scope=\"col\">Reserve Date</th>\n      <th scope=\"col\">Start Time</th>\n      <th scope=\"col\">End Time</th>\n      <th scope=\"col\">Reserved By</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let a of reservations\">\n      <td>{{a.labName}}</td>\n      <td>{{a.reserveDate}}</td>\n      <td>{{a.startTime}}</td>\n      <td>{{a.endTime}}</td>\n      <td>{{a.reservedBy}}</td>\n      <td><button (click)=\"delete(a._id)\" type=\"button\" class=\"btn btn-danger\">Delete</button></td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n<!--<div *ngIf=\"labReservation\" >-->\n<!--<h2 class=\"page-header\">blaa</h2>-->\n<!--<ul class=\"list=group\">-->\n<!--<li class=\"lost-group-item\">Username : {{user.username}}</li>-->\n<!--<li class=\"lost-group-item\">email : {{user.email}}</li>-->\n<!--</ul>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/components/admindashboad/admindashboad.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admindashboad/admindashboad.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdmindashboadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashboadComponent", function() { return AdmindashboadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdmindashboadComponent = /** @class */ (function () {
    function AdmindashboadComponent(validateService, alerts, authService, router) {
        this.validateService = validateService;
        this.alerts = alerts;
        this.authService = authService;
        this.router = router;
        this.reservations = [];
    }
    AdmindashboadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllReservations().subscribe(function (labReservation) {
            _this.reservations = (labReservation['labReservation']);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    AdmindashboadComponent.prototype.delete = function (_id) {
        var _this = this;
        this._id = _id;
        var labReservation = {
            _id: this._id,
            labName: "bla",
            reserveDate: "bla",
            startTime: 'bla',
            endTime: 'bla',
            reservedBy: 'bla',
            timePeriod: "bla"
        };
        this.authService.deleteReservation(labReservation).subscribe(function (data) {
            if (data['success']) {
                _this.alerts.setMessage('Successfully Delete the Reservation', 'success');
                _this.router.navigate(['/admindashboard']);
                window.location.reload();
            }
            else {
                _this.alerts.setMessage(data['msg'], 'error');
                _this.router.navigate(['/admindashboard']);
            }
        });
    };
    AdmindashboadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admindashboad',
            template: __webpack_require__(/*! ./admindashboad.component.html */ "./src/app/components/admindashboad/admindashboad.component.html"),
            styles: [__webpack_require__(/*! ./admindashboad.component.css */ "./src/app/components/admindashboad/admindashboad.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdmindashboadComponent);
    return AdmindashboadComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  margin-left: 50px ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n<div>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Lab Name</th>\n      <th scope=\"col\">Reserve Date</th>\n      <th scope=\"col\">Start Time</th>\n      <th scope=\"col\">End Time</th>\n      <th scope=\"col\">Reserved By</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let a of reservations\">\n      <td>{{a.labName}}</td>\n      <td>{{a.reserveDate}}</td>\n      <td>{{a.startTime}}</td>\n      <td>{{a.endTime}}</td>\n      <td>{{a.reservedBy}}</td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n<!--<div *ngIf=\"labReservation\" >-->\n  <!--<h2 class=\"page-header\">blaa</h2>-->\n  <!--<ul class=\"list=group\">-->\n    <!--<li class=\"lost-group-item\">Username : {{user.username}}</li>-->\n    <!--<li class=\"lost-group-item\">email : {{user.email}}</li>-->\n  <!--</ul>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService) {
        this.authService = authService;
        this.reservations = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllReservations().subscribe(function (labReservation) {
            _this.reservations = (labReservation['labReservation']);
            console.log(_this.reservations);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jombotron text-center\">\r\n  <h1 style=\"font-family: 'Lobster', cursive;\"> Welcome to UCSC Lab Reservation</h1>\r\n</div>\r\n\r\n<div class=\"row\" style=\"display: flex; align-items: center; justify-content: center\" >\r\n  <div class=\"col-md-4\" style=\"display: flex; align-items: center; justify-content: center\">\r\n    <img src=\"../../../assets/images/Computer-Lab2.jpg\" alt=\"\">\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\nbody, html{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n}\r\n.main{\r\n  margin:20px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  /*background: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f5f5f5), color-stop(100%, #eeeeee));*/\r\n  /*background: -webkit-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -o-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);*/\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 400px;\r\n  padding: 10px 40px;\r\n  background:white;\r\n  color: black;\r\n  text-shadow: none;\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row main\">\n    <div class=\"main-login main-center\">\n      <h3 class=\"page-header text-center\">Login</h3>\n      <form (submit)=\"onLoginSubmit()\">\n        <fieldset>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"  [(ngModel)]=\"email\" placeholder=\"Enter your Email\" [value]=\"emailValue\">\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  [(ngModel)]=\"password\" placeholder=\"Enter your Password\" [value]=\"passwordValue\">\n          </div>\n\n          <!--<div class=\"checkbox\">-->\n          <!--<label>-->\n          <!--<input name=\"remember\" type=\"checkbox\" value=\"Remember Me\"> Remember Me-->\n          <!--</label>-->\n          <!--</div>-->\n\n          <!--<div class=\"row\">-->\n          <!--<div class=\"col-md-6\">-->\n          <!--<input class=\"btn btn-lg btn-success btn-block\" type=\"submit\" value=\"Login\">-->\n          <!--</div>-->\n          <!--<div class=\"col-md-6\">-->\n          <!--<input type=\"submit\" name=\"button\" id=\"button\" class=\"btn btn-primary btn-lg btn-block login-button\" value=\"Register\">-->\n          <!--</div>-->\n          <!--</div>-->\n\n          <div class=\"row\">\n            <div class=\"col-xs-6 col-sm-6 col-md-6\">\n              <input type=\"submit\" class=\"btn btn-lg btn-success btn-block\" value=\"Sign In\" style=\"width: 150px; height: 44px ; font-size: medium; padding: 10px 16px\">\n            </div>\n            <div class=\"col-xs-6 col-sm-6 col-md-6\">\n              <a href=\"/register\" class=\"btn btn-lg btn-primary btn-block\" type=\"button\" style=\"font-size: medium\">Register</a>\n            </div>\n          </div>\n        </fieldset>\n\n\n\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(aurthService, alerts, router, validateService) {
        this.aurthService = aurthService;
        this.alerts = alerts;
        this.router = router;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateLogin(user)) {
            this.alerts.setMessage('please insert all data', 'error');
            this.passwordValue = null;
            return false;
        }
        // have to implement
        this.aurthService.authenticateUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.aurthService.storeUserData(data['token'], data['user']);
                _this.alerts.setMessage('You are logged in', 'success');
                _this.router.navigate(['dashboard']);
            }
            else {
                console.log(data);
                _this.alerts.setMessage(data['msg'], 'error');
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/makereservation/makereservation.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/makereservation/makereservation.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin-left: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/makereservation/makereservation.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/makereservation/makereservation.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n<div class=\"form\">\n  <form (submit)=\"makeReservation()\">\n\n    <div class=\"dropdown form-group row\">\n      <label class=\"col-md-2\">Select the lab</label>\n      <select [(ngModel)]=\"labName\" name=\"labName\" id=\"labName\" class=\"col-md-10\" style=\"width: 200px; height: 32px\">\n        <option value=\"Lab A\" selected>Lab A</option>\n        <option value=\"Lab B\" >Lab B</option>\n        <option value=\"Lab C\" >Lab C</option>\n        <option value=\"Lab D\" >Lab D</option>\n        <option value=\"Lab E\" >Lab E</option>\n        <option value=\"Third Year Lab\" >Third Year Lab</option>\n        <option value=\"Electronic Lab\" >Electronic Lab</option>\n      </select>\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Select Date</label>\n      <input type=\"date\" class=\"form-control col-md-10\" [(ngModel)]=\"date\" name=\"date\" id=\"date\" style=\"width: 200px\" min=\"{{today | date:'yyyy-MM-dd'}}\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Time Slot</label>\n      <select [(ngModel)]=\"timePeriod\" name=\"timePeriod\" id=\"timePeriod\" class=\"col-md-10\" style=\"width: 200px; height: 32px\">\n        <option value=\"1\">08:00 - 09:00</option>\n        <option value=\"2\" >09:00 - 10:00</option>\n        <option value=\"3\" >10:00 - 11:00</option>\n        <option value=\"4\" >11:00 - 12:00</option>\n        <option value=\"5\" >12:00 - 13:00</option>\n        <option value=\"6\" >13:00 - 14:00</option>\n        <option value=\"7\" >14:00 - 15:00</option>\n        <option value=\"8\" >15:00 - 16:00</option>\n        <option value=\"9\" >16:00 - 17:00</option>\n      </select>\n    </div>\n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/makereservation/makereservation.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/makereservation/makereservation.component.ts ***!
  \*************************************************************************/
/*! exports provided: MakereservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakereservationComponent", function() { return MakereservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MakereservationComponent = /** @class */ (function () {
    function MakereservationComponent(authService, alerts, router, validateService) {
        this.authService = authService;
        this.alerts = alerts;
        this.router = router;
        this.validateService = validateService;
    }
    MakereservationComponent.prototype.ngOnInit = function () {
        this.today = Date.now();
        this.reservedBy = this.authService.getUserName();
    };
    MakereservationComponent.prototype.setTime = function (timePeriod) {
        if (timePeriod == "1") {
            this.startTime = "08:00";
            this.endTime = "09:00";
        }
        if (timePeriod == "2") {
            this.startTime = "09:00";
            this.endTime = "10:00";
        }
        if (timePeriod == "3") {
            this.startTime = "10:00";
            this.endTime = "11:00";
        }
        if (timePeriod == "4") {
            this.startTime = "11:00";
            this.endTime = "12:00";
        }
        if (timePeriod == "5") {
            this.startTime = "12:00";
            this.endTime = "13:00";
        }
        if (timePeriod == "6") {
            this.startTime = "13:00";
            this.endTime = "14:00";
        }
        if (timePeriod == "7") {
            this.startTime = "14:00";
            this.endTime = "15:00";
        }
        if (timePeriod == "8") {
            this.startTime = "15:00";
            this.endTime = "16:00";
        }
        if (timePeriod == "9") {
            this.startTime = "16:00";
            this.endTime = "17:00";
        }
    };
    MakereservationComponent.prototype.makeReservation = function () {
        var _this = this;
        this.setTime(this.timePeriod);
        var labReservation = {
            labName: this.labName,
            reserveDate: this.date,
            startTime: this.startTime,
            endTime: this.endTime,
            reservedBy: this.reservedBy,
            timePeriod: this.timePeriod
        };
        if (!this.validateService.validateReservations(labReservation)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        this.authService.makeReservation(labReservation).subscribe(function (data) {
            if (data['success']) {
                _this.alerts.setMessage('Successfully Made the Reservation', 'success');
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.alerts.setMessage(data['msg'], 'error');
                _this.router.navigate(['/makereservation']);
            }
        });
    };
    MakereservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-makereservation',
            template: __webpack_require__(/*! ./makereservation.component.html */ "./src/app/components/makereservation/makereservation.component.html"),
            styles: [__webpack_require__(/*! ./makereservation.component.css */ "./src/app/components/makereservation/makereservation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]])
    ], MakereservationComponent);
    return MakereservationComponent;
}());



/***/ }),

/***/ "./src/app/components/myreservation/myreservation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/myreservation/myreservation.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n  margin-left: 50px;\r\n}\r\ntable{\r\n  margin-left: 50px ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/myreservation/myreservation.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/myreservation/myreservation.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n\n<div class=\"form\">\n  <form (submit)=\"CheckReservation()\">\n\n    <!--<div class=\"dropdown form-group\">-->\n      <!--<label>Select the lab</label>-->\n      <!--<select [(ngModel)]=\"labName\" name=\"labName\" id=\"labName\">-->\n        <!--<option value=\"Lab A\" selected>Lab A</option>-->\n        <!--<option value=\"Lab B\" >Lab B</option>-->\n        <!--<option value=\"Lab C\" >Lab C</option>-->\n        <!--<option value=\"Lab D\" >Lab D</option>-->\n      <!--</select>-->\n    <!--</div>-->\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Select Date</label>\n      <input type=\"date\" class=\"form-control col-md-10\" [(ngModel)]=\"date\" name=\"date\" id=\"date\" style=\"width: 200px\" min=\"{{today | date:'yyyy-MM-dd'}}\">\n    </div>\n\n    <div class=\"form-group row\">\n      <label class=\"col-md-2\">Time Slot</label>\n      <select [(ngModel)]=\"timePeriod\" name=\"timePeriod\" id=\"timePeriod\" class=\"col-md-10 dropdown-toggle\"  style=\"width: 200px; height: 32px\">\n        <option value=\"1\">08:00 - 09:00</option>\n        <option value=\"2\" >09:00 - 10:00</option>\n        <option value=\"3\" >10:00 - 11:00</option>\n        <option value=\"4\" >11:00 - 12:00</option>\n        <option value=\"5\" >12:00 - 13:00</option>\n        <option value=\"6\" >13:00 - 14:00</option>\n        <option value=\"7\" >14:00 - 15:00</option>\n        <option value=\"8\" >15:00 - 16:00</option>\n        <option value=\"9\" >16:00 - 17:00</option>\n      </select>\n    </div>\n\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n\n<div>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Lab Name</th>\n      <th scope=\"col\">Status</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let a of status\">\n      <td>{{a.name}}</td>\n      <td>{{a.state}}</td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/myreservation/myreservation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/myreservation/myreservation.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyreservationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyreservationComponent", function() { return MyreservationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyreservationComponent = /** @class */ (function () {
    function MyreservationComponent(authService, alerts, router, validateService) {
        this.authService = authService;
        this.alerts = alerts;
        this.router = router;
        this.validateService = validateService;
        this.reservedBy = this.authService.getUserName();
        this.reservations = [];
        this.labs = ["Lab A", "Lab B", "Lab C", "Lab D", "Lab E", "Third Year Lab", "Electronic Lab"];
        this.status = [];
    }
    MyreservationComponent.prototype.ngOnInit = function () {
        this.today = Date.now();
    };
    MyreservationComponent.prototype.CheckReservation = function () {
        var _this = this;
        var labReservation = {
            labName: "bla",
            reserveDate: this.date,
            startTime: 'bla',
            endTime: 'bla',
            reservedBy: 'bla',
            timePeriod: this.timePeriod
        };
        if (!this.validateService.validateReservations(labReservation)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        this.authService.checkReservations(labReservation).subscribe(function (labReservation) {
            _this.reservations = (labReservation['labReservation']);
            if (_this.reservations == []) {
                for (var x = 0; x < _this.labs.length - 1; x++) {
                    _this.status[x] = "Available";
                }
            }
            else {
                for (var x = 0; x < _this.labs.length; x++) {
                    _this.status[x] = { name: _this.labs[x], state: "Available" };
                    for (var i = 0; i < _this.reservations.length; i++) {
                        if (_this.labs[x] == _this.reservations[i]) {
                            _this.status[x] = { name: _this.labs[x], state: "Unavailable" };
                        }
                    }
                }
            }
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    MyreservationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myreservation',
            template: __webpack_require__(/*! ./myreservation.component.html */ "./src/app/components/myreservation/myreservation.component.html"),
            styles: [__webpack_require__(/*! ./myreservation.component.css */ "./src/app/components/myreservation/myreservation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_1__["AlertsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"]])
    ], MyreservationComponent);
    return MyreservationComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">UCSC Lab Reservation</a>\r\n    </div>\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink] = \"['/']\">Home</a></li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n\r\n        <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/profile']\">profile</a></li> &lt;!&ndash;*ngIf=\"authService.loggedIn()\" &ndash;&gt;-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/dashboard']\">Dashboard</a></li>-->\r\n        <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/login']\">Login</a></li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/register']\">Register</a></li>\r\n        <li *ngIf=\"authService.loggedIn()\" ><a (click)=\"onLogoutClick()\"  href=\"#\">Logout</a></li>\r\n      </ul>\r\n    </div><!--/.nav-collapse -->\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService, alerts, router) {
        this.authService = authService;
        this.alerts = alerts;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.alerts.setMessage('Your are logged out', 'success');
        this.router.navigate(['']);
        return false;
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n\n<div *ngIf=\"user\" style=\"margin-left: 50px\" >\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list=group\">\n    <li class=\"lost-group-item\">User Type : {{user.type}}</li>\n    <li class=\"lost-group-item\">email : {{user.email}}</li>\n  </ul>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(validateService, alerts, authService, router) {
        this.validateService = validateService;
        this.alerts = alerts;
        this.authService = authService;
        this.router = router;
        this.btnText = "blaaa";
        this.nameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', []);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.nameValue = _this.user['name'];
            _this.emailValue = _this.user['email'];
            _this.typeValue = _this.user['type'];
            _this.nameControl.setValue(_this.user['name']);
            console.log(_this.nameValue, _this.emailValue);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onRegisterSubmit = function () {
        var user = {
            name: this.name,
            email: this.email,
            // username: this.username,
            //type:this.type,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        if (!this.validateService.validateRegister(user)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        if (!this.validateService.validatPassword(user)) {
            this.alerts.setMessage('password mismatch', 'error');
            this.confirmPasswordValue = null;
            this.passwordValue = null;
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.alerts.setMessage('please use a valid email', 'error');
            this.emailValue = null;
            return false;
        }
        //   this.authService.updateUser(user).subscribe(data =>{
        //     if (data['success']){
        //       this.alerts.setMessage('Successfully Registered', 'success');
        //       this.router.navigate(['/login']);
        //     }else{
        //       this.alerts.setMessage( data['msg'], 'error');
        //       this.router.navigate(['/register']);
        //     }
        //   });
        //
        // }
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_4__["AlertsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\nbody, html{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n}\r\n.main{\r\n  margin:20px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #006bff;\r\n  /*background: -moz-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f5f5f5), color-stop(100%, #eeeeee));*/\r\n  /*background: -webkit-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -o-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*background: linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);*/\r\n  /*filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);*/\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 400px;\r\n  padding: 10px 40px;\r\n  background:white;\r\n  color: black;\r\n  text-shadow: none;\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: black;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row main\">\n    <div class=\"main-login main-center\">\n      <h3 class=\"page-header text-center\">Register</h3>\n      <form (submit)=\"onRegisterSubmit()\">\n\n        <div class=\"form-group\">\n          <!--<label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>-->\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"name\" placeholder=\"Enter your Name\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <!--<label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>-->\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\"  [(ngModel)]=\"email\" placeholder=\"Enter your Email\" [value]=\"emailValue\">\n            </div>\n          </div>\n        </div>\n\n        <!--<div class=\"form-group\">-->\n          <!--<label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>-->\n          <!--<div class=\"cols-sm-10\">-->\n            <!--<div class=\"input-group\">-->\n              <!--<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>-->\n              <!--<input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\"  [(ngModel)]=\"username\" placeholder=\"Enter your Username\">-->\n            <!--</div>-->\n          <!--</div>-->\n        <!--</div>-->\n\n        <div class=\"form-group\">\n          <!--<label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>-->\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n              <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  [(ngModel)]=\"password\" placeholder=\"Enter your Password\" [value]=\"passwordValue\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <!--<label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>-->\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n              <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" id=\"confirm\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm your Password\" [value]=\"confirmPasswordValue\">\n            </div>\n          </div>\n        </div>\n\n        <!--<div class=\"form-group \">-->\n          <!--<input type=\"submit\" name=\"button\" id=\"button\" class=\"btn btn-primary btn-lg btn-block\" value=\"Register\">-->\n        <!--</div>-->\n\n        <div class=\"row\">\n          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n            <input type=\"submit\" class=\"btn btn-lg btn-success btn-block\" value=\"Register\" style=\"width: 150px; height: 44px ; font-size: medium; padding: 10px 16px\">\n          </div>\n          <div class=\"col-xs-6 col-sm-6 col-md-6\">\n            <a href=\"/login\" class=\"btn btn-lg btn-primary btn-block\" type=\"button\" style=\"font-size: medium\">LogIn</a>\n          </div>\n        </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, alerts, authService, router) {
        this.validateService = validateService;
        this.alerts = alerts;
        this.authService = authService;
        this.router = router;
        // username: String;
        this.type = "user";
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            // username: this.username,
            type: this.type,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        if (!this.validateService.validateRegister(user)) {
            this.alerts.setMessage('please fill the all fields', 'error');
            return false;
        }
        if (!this.validateService.validatPassword(user)) {
            this.alerts.setMessage('password mismatch', 'error');
            this.confirmPasswordValue = null;
            this.passwordValue = null;
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.alerts.setMessage('please use a valid email', 'error');
            this.emailValue = null;
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data['success']) {
                _this.alerts.setMessage('Successfully Registered', 'success');
                _this.router.navigate(['/login']);
            }
            else {
                _this.alerts.setMessage(data['msg'], 'error');
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_2__["AlertsService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-side-menu {\r\n  overflow: auto;\r\n  font-family: verdana;\r\n  font-size: 10px;\r\n  font-weight: 200;\r\n  background-color: #222;\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 50px;\r\n  width: 100px;\r\n  height: 100%;\r\n  color: #e1ffff;\r\n}\r\n.nav-side-menu .brand {\r\n  background-color: #23282e;\r\n  line-height: 50px;\r\n  display: block;\r\n  text-align: center;\r\n  font-size: 14px;\r\n}\r\n.nav-side-menu .toggle-btn {\r\n  display: none;\r\n}\r\n.nav-side-menu ul,\r\n.nav-side-menu li {\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  line-height: 35px;\r\n  cursor: pointer;\r\n  /*\r\n    .collapsed{\r\n       .arrow:before{\r\n                 font-family: FontAwesome;\r\n                 content: \"\\f053\";\r\n                 display: inline-block;\r\n                 padding-left:10px;\r\n                 padding-right: 10px;\r\n                 vertical-align: middle;\r\n                 float:right;\r\n            }\r\n     }\r\n*/\r\n}\r\n.nav-side-menu ul :not(collapsed) .arrow:before,\r\n.nav-side-menu li :not(collapsed) .arrow:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f078\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n  float: right;\r\n}\r\n.nav-side-menu ul .active,\r\n.nav-side-menu li .active {\r\n  border-left: 3px solid #d19b3d;\r\n  background-color: #4f5b69;\r\n}\r\n.nav-side-menu ul .sub-menu li.active,\r\n.nav-side-menu li .sub-menu li.active {\r\n  color: #d19b3d;\r\n}\r\n.nav-side-menu ul .sub-menu li.active a,\r\n.nav-side-menu li .sub-menu li.active a {\r\n  color: #d19b3d;\r\n}\r\n.nav-side-menu ul .sub-menu li,\r\n.nav-side-menu li .sub-menu li {\r\n  background-color: #181c20;\r\n  border: none;\r\n  line-height: 28px;\r\n  border-bottom: 1px solid #23282e;\r\n  margin-left: 0px;\r\n}\r\n.nav-side-menu ul .sub-menu li:hover,\r\n.nav-side-menu li .sub-menu li:hover {\r\n  background-color: #020203;\r\n}\r\n.nav-side-menu ul .sub-menu li:before,\r\n.nav-side-menu li .sub-menu li:before {\r\n  font-family: FontAwesome;\r\n  content: \"\\f105\";\r\n  display: inline-block;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  vertical-align: middle;\r\n}\r\n.nav-side-menu li {\r\n  padding-left: 0px;\r\n  border-left: 3px solid #2e353d;\r\n  border-bottom: 1px solid #23282e;\r\n}\r\n.nav-side-menu li a {\r\n  text-decoration: none;\r\n  color: #e1ffff;\r\n}\r\n.nav-side-menu li a i {\r\n  padding-left: 10px;\r\n  width: 20px;\r\n  padding-right: 20px;\r\n}\r\n.nav-side-menu li:hover {\r\n  border-left: 3px solid #d19b3d;\r\n  background-color: #4f5b69;\r\n  transition: all 1s ease;\r\n}\r\n@media (max-width: 767px) {\r\n  .nav-side-menu {\r\n    position: relative;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n  }\r\n  .nav-side-menu .toggle-btn {\r\n    display: block;\r\n    cursor: pointer;\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    z-index: 10 !important;\r\n    padding: 3px;\r\n    background-color: #ffffff;\r\n    color: #000;\r\n    width: 40px;\r\n    text-align: center;\r\n  }\r\n  .brand {\r\n    text-align: left !important;\r\n    font-size: 22px;\r\n    padding-left: 20px;\r\n    line-height: 50px !important;\r\n  }\r\n}\r\n@media (min-width: 767px) {\r\n  .nav-side-menu .menu-list .menu-content {\r\n    display: block;\r\n  }\r\n}\r\nbody {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-side-menu\">\n\n\n  <div class=\"menu-list\" style=\"font-family: 'Lobster', cursive;\">\n\n    <ul id=\"menu-content\" class=\"menu-content collapse out\">\n\n      <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/profile']\">profile</a></li> <!--*ngIf=\"authService.loggedIn()\" -->\n\n\n\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a  [routerLink]=\"['/admindashboard']\">Dashboard</a></li>\n\n      <li *ngIf=\"authService.getType()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/addlab']\"><i ></i> Add Lab</a></li>\n\n      <li *ngIf=\"authService.getType()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/reports']\"><i ></i> Reports</a></li>\n\n      <li *ngIf=\"authService.getType()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" ><a [routerLink]=\"['/adduser']\"><i ></i> Add User</a></li>\n\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/makereservation']\"><i ></i> Make Reservation</a></li>\n\n      <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/checkavailability']\"><i ></i>Check Availability </a></li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/side-bar/side-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/side-bar/side-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideBarComponent = /** @class */ (function () {
    function SideBarComponent(authService) {
        this.authService = authService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-bar',
            template: __webpack_require__(/*! ./side-bar.component.html */ "./src/app/components/side-bar/side-bar.component.html"),
            styles: [__webpack_require__(/*! ./side-bar.component.css */ "./src/app/components/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  margin-left: 50px ;\r\n}\r\n"

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <app-side-bar></app-side-bar>\n</div>\n<div id=\"content\" #content>\n  <table class=\"table\">\n    <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Lab Name</th>\n      <th scope=\"col\">Reserve Date</th>\n      <th scope=\"col\">Start Time</th>\n      <th scope=\"col\">End Time</th>\n      <th scope=\"col\">Reserved By</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let a of reservations\">\n      <td>{{a.labName}}</td>\n      <td>{{a.reserveDate}}</td>\n      <td>{{a.startTime}}</td>\n      <td>{{a.endTime}}</td>\n      <td>{{a.reservedBy}}</td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n\n<div>\n  <button (click)=\"downloadPDF()\" type=\"button\" class=\"btn btn-primary\" style=\" margin-left: 50px\">Make Report</button>\n</div>\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "../node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(authService) {
        this.authService = authService;
        this.reservations = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllReservations().subscribe(function (labReservation) {
            _this.reservations = (labReservation['labReservation']);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ReportsComponent.prototype.downloadPDF = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var specialElementHandlers = {
            '#editor': function (element, render) {
                return true;
            }
        };
        var content = this.content.nativeElement;
        doc.fromHTML(content.innerHTML, 30, 10, {
            'width': 400,
            'elementHandlers': specialElementHandlers
        });
        doc.save('report.pdf');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('content'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReportsComponent.prototype, "content", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.registerLab = function (lab) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/labs/registerlab', lab, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.makeReservation = function (labReservation) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/labreservations/makeReservation', labReservation, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.deleteReservation = function (labReservation) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/labreservations/deletereservation', labReservation, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.checkReservations = function (labReservation) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/labreservations/checkreservations', labReservation, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': this.authToken,
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getAllReservations = function () {
        return this.http.get('http://localhost:3000/labreservations/allreservations')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('id_token');
    };
    AuthService.prototype.loggedIn = function () {
        var isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        return !isExpired;
    };
    AuthService.prototype.getType = function () {
        var items = localStorage.getItem('user').split('"');
        var type = items[11];
        //console.log(items[11])
        if (type != 'admin') {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.getUserName = function () {
        var items = localStorage.getItem('user').split('"');
        var user = items[7];
        return user;
        //full name
    };
    AuthService.prototype.getUser = function () {
        var items = localStorage.getItem('user').split('"');
        var user = items[15];
        return user;
        //username
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.type == undefined || user.password == undefined || user.confirmPassword == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateReservations = function (labReservation) {
        if (labReservation.labName == undefined || labReservation.reserveDate == undefined || labReservation.timePeriod == undefined || labReservation.reservedBy == undefined || labReservation.startTime == undefined || labReservation.endTime == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateLogin = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validaLab = function (lab) {
        // console.log(lab.labName, lab.labDescription);
        if (lab.labName == undefined || lab.labDescription == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validatPassword = function (user) {
        if (user.password != user.confirmPassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePassword = function (password) {
        if (password == null) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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

module.exports = __webpack_require__(/*! C:\Users\dwnad\Desktop\TestAdvanceWeb\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map