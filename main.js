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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");








var routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
        path: 'skills',
        component: _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"]
    }, {
        path: 'education',
        component: _education_education_component__WEBPACK_IMPORTED_MODULE_5__["EducationComponent"]
    }, {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsComponent"]
    }, {
        path: 'contact',
        component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-background></app-background>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(meta) {
        this.meta = meta;
        this.title = 'personalSite';
        this.meta.addTag({ name: 'keywords', content: 'udith shalinda,udith,shalinda,udith-shalida,udith-shalinda.github.io/me' });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-image/profile-image.component */ "./src/app/profile-image/profile-image.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _navgationbar_navgationbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navgationbar/navgationbar.component */ "./src/app/navgationbar/navgationbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-typed-js */ "./node_modules/ngx-typed-js/fesm5/ngx-typed-js.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _education_education_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./education/education.component */ "./src/app/education/education.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
                _profile_image_profile_image_component__WEBPACK_IMPORTED_MODULE_7__["ProfileImageComponent"],
                _navgationbar_navgationbar_component__WEBPACK_IMPORTED_MODULE_10__["NavgationbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_15__["SkillsComponent"],
                _education_education_component__WEBPACK_IMPORTED_MODULE_16__["EducationComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProjectsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_6__["ParticlesModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_typed_js__WEBPACK_IMPORTED_MODULE_12__["NgxTypedJsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_13__["LayoutModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flexspan{\r\n    height: 10vh;\r\n}\r\n\r\n#profile_background{\r\n    margin-left: 10vw;\r\n    width:80vw;\r\n    /* height: 100%; */\r\n    background-color: rgba(10,20,20,0.7);\r\n    padding: 1%;\r\n}\r\n\r\napp-contact{\r\n    display: none;\r\n}\r\n\r\n@media only screen and (max-width: 875px) {\r\n    app-contact {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtNQUNFLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ZsZXhzcGFue1xyXG4gICAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4jcHJvZmlsZV9iYWNrZ3JvdW5ke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwdnc7XHJcbiAgICB3aWR0aDo4MHZ3O1xyXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwyMCwyMCwwLjcpO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbn1cclxuYXBwLWNvbnRhY3R7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3NXB4KSB7XHJcbiAgICBhcHAtY29udGFjdCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\n\n<div id=\"flexspan\"></div>\n\n<div id=\"profile_background\">\n    <div class=\"row\">\n        <div class=\"col-md-3 col-sm-3\">\n            <app-profile-image></app-profile-image> \n        </div>\n        <div class=\"col-md-9 col-sm-3\">\n            <router-outlet></router-outlet> \n            <app-contact></app-contact>\n        </div>\n      </div>\n      <app-navgationbar></app-navgationbar>\n \n</div>\n\n"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    BackgroundComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 500,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
                    type: 'triangle',
                },
            }
        };
    };
    BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span{\r\n    display: inline;\r\n}\r\nh1{\r\n    color: orange;\r\n}\r\n.row{\r\n    color: whitesmoke;\r\n}\r\n.body{\r\n    margin-left: 5%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbi5yb3d7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLmJvZHl7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Contact Details</h1>\n</div>\n<div class=\"body\">\n  <div class=\"row\">\n      <mat-icon class=\"col-sm-1\">email</mat-icon>\n      <h5 class=\"col-sm-7\">udithshalinda2@gmail.com</h5>\n  </div>\n  <div class=\"row\">\n      <mat-icon class=\"col-sm-1\">phone_iphone</mat-icon>\n      <h5 class=\"col-sm-7\">0770087572</h5>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/education/education.component.css":
/*!***************************************************!*\
  !*** ./src/app/education/education.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 100px;\r\n    margin-top: 20%;\r\n}\r\nh1{\r\n    color: orange;\r\n}\r\nh6{\r\n    color:wheat;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbmg2e1xyXG4gICAgY29sb3I6d2hlYXQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/education/education.component.html":
/*!****************************************************!*\
  !*** ./src/app/education/education.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Education</h1>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4 col-sm-4 col-6\">\n    <img src=\"assets/Images/icons/loyolaCollage.jpg\" alt=\"loyolaCollage\">\n    <h6>Loyola Collage</h6>\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-6\">\n      <img src=\"assets/Images/icons/kelaniya.png\" alt=\"kelaniya\">\n    <h6>University of Kelaniya</h6>\n  </div>\n</div>\n  \n<mat-spinner color=\"warn\" strokeWidth=\"10\" diameter=\"200\" *ngIf=\"isLoaded\"></mat-spinner>\n  "

/***/ }),

/***/ "./src/app/education/education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
        this.isLoaded = true;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.isLoaded = false;
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    color:whitesmoke;\r\n}\r\nh1{\r\n    color: orange;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <ngx-typed-js [strings]=\"['Udith Shalinda from Negombo.', 'an undergraduate of University of Kelaniya.']\" [shuffle]=\"false\" [typeSpeed]=\"100\">\n      I am<h1 class=\"typing\"></h1>\n  </ngx-typed-js>  \n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import * as Typed from 'typed.js';
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navgationbar/navgationbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/navgationbar/navgationbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\r\n    margin-top:4%;\r\n    background:black;\r\n    color:orange;\r\n}\r\n\r\n\r\n@media only screen and (max-width: 875px) {\r\n    span {\r\n      display: none;\r\n    }\r\n    #contact{\r\n        display: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2Z2F0aW9uYmFyL25hdmdhdGlvbmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJO01BQ0UsYUFBYTtJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZnYXRpb25iYXIvbmF2Z2F0aW9uYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhcntcclxuICAgIG1hcmdpbi10b3A6NCU7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NzVweCkge1xyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAjY29udGFjdHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/navgationbar/navgationbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/navgationbar/navgationbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar [@fadeInUpOnEnter] = \"fadeInDownBigOnEnter\" >\n  <span class=\"col-sm-6 \"></span>\n  <button mat-button class=\"\" routerLink=\"./\">Home</button>\n  <button mat-button class=\"\" routerLink=\"./education\">Education</button>\n  <button mat-button class=\"\" routerLink=\"./projects\">Projects</button>\n  <button mat-button class=\"\" routerLink=\"./skills\">Skills</button>\n  <button mat-button id=\"contact\" routerLink=\"./contact\">Contant</button>\n</mat-toolbar>\n\n"

/***/ }),

/***/ "./src/app/navgationbar/navgationbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/navgationbar/navgationbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavgationbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavgationbarComponent", function() { return NavgationbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm5/angular-animations.js");



var NavgationbarComponent = /** @class */ (function () {
    function NavgationbarComponent() {
        this.fadeInDownBigOnEnter = true;
    }
    NavgationbarComponent.prototype.ngOnInit = function () {
    };
    NavgationbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navgationbar',
            template: __webpack_require__(/*! ./navgationbar.component.html */ "./src/app/navgationbar/navgationbar.component.html"),
            animations: [
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["fadeInUpOnEnterAnimation"])({
                    duration: 500,
                    delay: 1000
                }),
            ],
            styles: [__webpack_require__(/*! ./navgationbar.component.css */ "./src/app/navgationbar/navgationbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavgationbarComponent);
    return NavgationbarComponent;
}());



/***/ }),

/***/ "./src/app/profile-image/profile-image.component.css":
/*!***********************************************************!*\
  !*** ./src/app/profile-image/profile-image.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#profileImage img{\r\n    width: 94%;\r\n    height: 94%;\r\n    margin: 3%;\r\n}\r\n\r\nmat-card{\r\n    background: whitesmoke;\r\n    width: 100%;\r\n}\r\n\r\n.social_media_icons{\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0px;\r\n}\r\n\r\n.social_media_icons:hover{\r\n    cursor: pointer;\r\n    fill: grayscale(100%);\r\n    /* color: blue;\r\n    background: blue; */\r\n}\r\n\r\n/* mat-icon{   \r\n    padding: 2%;\r\n}\r\nmat-card-actions{\r\n    margin-left: 4%;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS1pbWFnZS9wcm9maWxlLWltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckI7dUJBQ21CO0FBQ3ZCOztBQUNBOzs7OztHQUtHIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS1pbWFnZS9wcm9maWxlLWltYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZUltYWdlIGltZ3tcclxuICAgIHdpZHRoOiA5NCU7XHJcbiAgICBoZWlnaHQ6IDk0JTtcclxuICAgIG1hcmdpbjogMyU7XHJcbn1cclxuXHJcbm1hdC1jYXJke1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc29jaWFsX21lZGlhX2ljb25ze1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4uc29jaWFsX21lZGlhX2ljb25zOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmlsbDogZ3JheXNjYWxlKDEwMCUpO1xyXG4gICAgLyogY29sb3I6IGJsdWU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlOyAqL1xyXG59XHJcbi8qIG1hdC1pY29ueyAgIFxyXG4gICAgcGFkZGluZzogMiU7XHJcbn1cclxubWF0LWNhcmQtYWN0aW9uc3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxufSAqL1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile-image/profile-image.component.html":
/*!************************************************************!*\
  !*** ./src/app/profile-image/profile-image.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card [@bounceInOnEnter]=\"bouncestatus\">\n    <div id=\"profileImage\">\n        <img src=\"assets\\Images\\profile_image/profile_image.jpg\" alt=\"profileImage\">\n      </div>\n      <mat-card-actions class=\"row\">\n        <span class=\"col-sm-5\"></span>\n          <a href=\"https://github.com/udith-shalinda\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"col-sm-5\"><img src=\"assets/Images/icons/github-logo.svg\" alt=\"github\" class=\"social_media_icons\"></mat-icon>\n          </a>\n          <a href=\"https://www.facebook.com/udith.shalinda.1\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"col-sm-5\"><img src=\"assets/Images/icons/facebook.svg\" alt=\"github\" class=\"social_media_icons\"></mat-icon>\n          </a>\n          <a href=\"https://www.linkedin.com/in/shalinda-jayakody-6b25a915b/\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"col-sm-5\"><img src=\"assets/Images/icons/linkedin-logo.svg\" alt=\"github\" class=\"social_media_icons\"></mat-icon>\n          </a>\n          <a href=\"https://www.hackerrank.com/udithshalinda2\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"col-sm-5\"><img src=\"assets/Images/icons/hackerrank.png\" alt=\"github\" class=\"social_media_icons\"></mat-icon>\n          </a>\n          <a href=\"https://medium.com/@udithshalinda\" target=\"_blank\" rel=\"noopener noreferrer\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\" class=\"col-sm-5\"><img src=\"assets/Images/icons/medium.png\" alt=\"github\" class=\"social_media_icons\"></mat-icon>\n          </a>\n        </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./src/app/profile-image/profile-image.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/profile-image/profile-image.component.ts ***!
  \**********************************************************/
/*! exports provided: ProfileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImageComponent", function() { return ProfileImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm5/angular-animations.js");



var ProfileImageComponent = /** @class */ (function () {
    function ProfileImageComponent() {
        this.bouncestatus = false;
    }
    ProfileImageComponent.prototype.ngOnInit = function () {
    };
    ProfileImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-image',
            template: __webpack_require__(/*! ./profile-image.component.html */ "./src/app/profile-image/profile-image.component.html"),
            animations: [
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["bounceInOnEnterAnimation"])({
                    duration: 500,
                    delay: 0
                }),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["bounceAnimation"])({}),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["bounceInUpAnimation"])()
            ],
            styles: [__webpack_require__(/*! ./profile-image.component.css */ "./src/app/profile-image/profile-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileImageComponent);
    return ProfileImageComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectsList{\r\n    height: 300px;\r\n}\r\nh1{\r\n    color:orange;\r\n}\r\nh5{\r\n    color: antiquewhite;\r\n}\r\nli{\r\n    color: orange;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvamVjdHNMaXN0e1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOm9yYW5nZTtcclxufVxyXG5oNXtcclxuICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XHJcbn1cclxubGl7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Projects</h1>\n</div>\n<cdk-virtual-scroll-viewport itemSize=10 class=\"projectsList\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" >\n    <a href={{item.url}} target=\"_blank\" rel=\"noopener noreferrer\">\n      <ul>\n        <li><h5>{{item.name}}</h5></li>\n        <ul><li *ngFor=\"let dec of item.description\">{{dec}}</li></ul>\n      </ul>\n    </a>\n  </div>\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
        this.items = [
            {
                name: "clone of Facebook(micro-services)",
                description: ["flutter", "spring boot"],
                url: "https://github.com/udith-shalinda/facebook_clone_flutter"
            },
            {
                name: "clone of Medium",
                description: ["reactjs", "spring boot"],
                url: "https://github.com/udith-shalinda/Blog_Post_Backend"
            },
            {
                name: "clone of stackoverflow(real-time)",
                description: ["reactjs", "spring boot"],
                url: "https://github.com/udith-shalinda/stackoverflow_clone"
            },
            {
                name: "Student management system",
                description: ["futter", "Node js"],
                url: "https://github.com/udith-shalinda/Student_management_system_flutter"
            },
            {
                name: "Post Sharing Site",
                description: ["Angular", "Node js"],
                url: "https://github.com/udith-shalinda/Post_sharing_site"
            },
            {
                name: "Clone of Stack overFlow",
                description: ["futter", "Firebase"],
                url: "https://github.com/udith-shalinda/My_stackoverflow"
            },
        ];
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.css":
/*!*********************************************!*\
  !*** ./src/app/skills/skills.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    height: 100px;\r\n    margin-top: 20%;\r\n}\r\nh1{\r\n    color:orange;\r\n}\r\n.skillList{\r\n    height: 330px;\r\n    /* width: 90%; */\r\n}\r\n.row{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbn1cclxuaDF7XHJcbiAgICBjb2xvcjpvcmFuZ2U7XHJcbn1cclxuLnNraWxsTGlzdHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICAvKiB3aWR0aDogOTAlOyAqL1xyXG59XHJcblxyXG4ucm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/skills/skills.component.html":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Skills</h1>\n</div>\n\n<cdk-virtual-scroll-viewport itemSize=items.length class=\"skillList\">\n  <div class=\"row\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" >\n      <div class=\"col-md-4 col-sm-4 col-6\">\n        <img [src]=\"item.url\" [alt]=\"item.alt\">\n      </div>\n    </div>\n  </div>\n</cdk-virtual-scroll-viewport>\n"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm5/angular-animations.js");



var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
        this.bouncestatus = true;
        this.items = [
            {
                url: "assets/Images/icons/flutter.png",
                alt: "flutter"
            },
            {
                url: "assets/Images/icons/java.png",
                alt: "java"
            },
            {
                url: "assets/Images/icons/spring_boot.png",
                alt: "spring_boot"
            },
            {
                url: "assets/Images/icons/angular.png",
                alt: "angular"
            },
            {
                url: "assets/Images/icons/nodejs.png",
                alt: "nodejs"
            },
            {
                url: "assets/Images/icons/reactjs.png",
                alt: "reactjs"
            },
        ];
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/skills/skills.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_2__["bounceInOnEnterAnimation"])({
                    duration: 500,
                    delay: 0
                }),
            ],
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular_projects\personalSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map