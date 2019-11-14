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

/***/ "./src/app/_shared-components/copy-environment/copy-environment.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/_shared-components/copy-environment/copy-environment.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"copy-env\">\r\n<div class=\"field\">\r\n  <label class=\"label\">Project to deploy</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>TAL FactFind</option>\r\n        <option>Clearview Insurance</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"field\">\r\n  <label class=\"label\">From Environment</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>CI</option>\r\n        <option>Functional test</option>\r\n        <option>Pre-production</option>\r\n        <option>QA</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"field\">\r\n  <label class=\"label\">To Environment</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>CI</option>\r\n        <option>Functional test</option>\r\n        <option>Pre-production</option>\r\n        <option>QA</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"field is-grouped\">\r\n  <div class=\"control\">\r\n    <button class=\"button is-link\">Submit</button>\r\n  </div>\r\n  <div class=\"control\">\r\n    <button class=\"button is-text\">Cancel</button>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/copy-environment/copy-environment.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/_shared-components/copy-environment/copy-environment.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".copy-env {\n  padding-left: 14px;\n  width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2NvcHktZW52aXJvbm1lbnQvQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcYXBwXFxfc2hhcmVkLWNvbXBvbmVudHNcXGNvcHktZW52aXJvbm1lbnRcXGNvcHktZW52aXJvbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2NvcHktZW52aXJvbm1lbnQvY29weS1lbnZpcm9ubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3B5LWVudiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/copy-environment/copy-environment.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/_shared-components/copy-environment/copy-environment.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CopyEnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyEnvironmentComponent", function() { return CopyEnvironmentComponent; });
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

var CopyEnvironmentComponent = /** @class */ (function () {
    function CopyEnvironmentComponent() {
    }
    CopyEnvironmentComponent.prototype.ngOnInit = function () {
    };
    CopyEnvironmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-copy-environment',
            template: __webpack_require__(/*! ./copy-environment.component.html */ "./src/app/_shared-components/copy-environment/copy-environment.component.html"),
            styles: [__webpack_require__(/*! ./copy-environment.component.scss */ "./src/app/_shared-components/copy-environment/copy-environment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyEnvironmentComponent);
    return CopyEnvironmentComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/create-new-environment/create-new-environment.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/_shared-components/create-new-environment/create-new-environment.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-new-env\">\r\n<div class=\"field\">\r\n  <label class=\"label\">Project to deploy</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>TAL FactFind</option>\r\n        <option>Clearview Insurance</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"field\">\r\n  <label class=\"label\">Environment stage</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>CI</option>\r\n        <option>Functional test</option>\r\n        <option>Pre-production</option>\r\n        <option>QA</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"field\">\r\n  <label class=\"label\">Message</label>\r\n  <div class=\"control\">\r\n    <textarea class=\"textarea\" placeholder=\"Extra details\"></textarea>\r\n  </div>\r\n</div>\r\n<div class=\"field is-grouped\">\r\n  <div class=\"control\">\r\n    <button class=\"button is-link\">Submit</button>\r\n  </div>\r\n  <div class=\"control\">\r\n    <button class=\"button is-text\">Cancel</button>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/create-new-environment/create-new-environment.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/_shared-components/create-new-environment/create-new-environment.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".create-new-env {\n  padding-left: 14px;\n  width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2NyZWF0ZS1uZXctZW52aXJvbm1lbnQvQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcYXBwXFxfc2hhcmVkLWNvbXBvbmVudHNcXGNyZWF0ZS1uZXctZW52aXJvbm1lbnRcXGNyZWF0ZS1uZXctZW52aXJvbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2NyZWF0ZS1uZXctZW52aXJvbm1lbnQvY3JlYXRlLW5ldy1lbnZpcm9ubWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcmVhdGUtbmV3LWVudiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/create-new-environment/create-new-environment.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/_shared-components/create-new-environment/create-new-environment.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreateNewEnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateNewEnvironmentComponent", function() { return CreateNewEnvironmentComponent; });
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

var CreateNewEnvironmentComponent = /** @class */ (function () {
    function CreateNewEnvironmentComponent() {
    }
    CreateNewEnvironmentComponent.prototype.ngOnInit = function () {
    };
    CreateNewEnvironmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-new-environment',
            template: __webpack_require__(/*! ./create-new-environment.component.html */ "./src/app/_shared-components/create-new-environment/create-new-environment.component.html"),
            styles: [__webpack_require__(/*! ./create-new-environment.component.scss */ "./src/app/_shared-components/create-new-environment/create-new-environment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateNewEnvironmentComponent);
    return CreateNewEnvironmentComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/_shared-components/deployment-statistics/deployment-statistics.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"columns build-stats\">\r\n  <div class=\"column divider stats-view\">{{DeploymentStats.StartToDeploy}}<br>\r\n    <span>Production deployment frequency</span></div>\r\n\r\n  <div class=\"column divider stats-view\">{{DeploymentStats.ChangeFailRate}} <br>\r\n    <span>Change failure rate</span></div>\r\n\r\n  <div class=\"column divider stats-view\">{{DeploymentStats.LeadTimeToChange}} <br>\r\n    <span>Lead time to change</span></div>\r\n  <div class=\"column divider stats-view\">{{DeploymentStats.MeanTimeToRestore}} <br>\r\n    <span>Mean time to restore</span></div>\r\n  <div class=\"column stats-view\">{{TeamNpsRating}} <br>\r\n    <span>Team NPS rating</span></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/_shared-components/deployment-statistics/deployment-statistics.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".build-stats {\n  padding-top: 30px;\n  padding-left: 30px; }\n  .build-stats .stats-view {\n    width: 105px;\n    color: #454545;\n    font-family: sans-serif;\n    font-size: 25px;\n    font-weight: bold;\n    line-height: 34px; }\n  .build-stats .divider {\n    border-right: 1px solid #979797; }\n  .build-stats span {\n    height: 19px;\n    width: 170px;\n    color: #454545;\n    font-family: sans-serif;\n    font-size: 14px;\n    font-weight: bold;\n    line-height: 19px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2RlcGxveW1lbnQtc3RhdGlzdGljcy9DOlxcZGV2XFxEZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxjbGllbnQvc3JjXFxhcHBcXF9zaGFyZWQtY29tcG9uZW50c1xcZGVwbG95bWVudC1zdGF0aXN0aWNzXFxkZXBsb3ltZW50LXN0YXRpc3RpY3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBd0JuQjtFQTFCRDtJQUtJLGFBQVk7SUFDWixlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQjtFQVhIO0lBY0ksZ0NBQStCLEVBQ2hDO0VBZkg7SUFrQkksYUFBWTtJQUNaLGFBQVk7SUFDWixlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQtY29tcG9uZW50cy9kZXBsb3ltZW50LXN0YXRpc3RpY3MvZGVwbG95bWVudC1zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1aWxkLXN0YXRzIHtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcblxyXG4gIC5zdGF0cy12aWV3IHtcclxuICAgIHdpZHRoOiAxMDVweDtcclxuICAgIGNvbG9yOiAjNDU0NTQ1O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpdmlkZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk3OTc5NztcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgY29sb3I6ICM0NTQ1NDU7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/_shared-components/deployment-statistics/deployment-statistics.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DeploymentStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeploymentStatisticsComponent", function() { return DeploymentStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared-services/projects.service */ "./src/app/_shared-services/projects.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeploymentStatisticsComponent = /** @class */ (function () {
    function DeploymentStatisticsComponent(_deploymentStats) {
        this._deploymentStats = _deploymentStats;
    }
    DeploymentStatisticsComponent.prototype.ngOnInit = function () {
        this.getProjectStats(this.ProjectId);
    };
    DeploymentStatisticsComponent.prototype.getProjectStats = function (id) {
        var _this = this;
        this._deploymentStats.getProjectById(id).subscribe(function (data) {
            _this.DeploymentStats = data;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DeploymentStatisticsComponent.prototype, "ProjectId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DeploymentStatisticsComponent.prototype, "TeamNpsRating", void 0);
    DeploymentStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deployment-statistics',
            template: __webpack_require__(/*! ./deployment-statistics.component.html */ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.html"),
            styles: [__webpack_require__(/*! ./deployment-statistics.component.scss */ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"]])
    ], DeploymentStatisticsComponent);
    return DeploymentStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/environment-header/environment-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/_shared-components/environment-header/environment-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"environment-header columns\">\r\n  <div class=\"column\">\r\n    <h5>Environment</h5>\r\n    <p>Prod</p>\r\n  </div>\r\n  <div class=\"column\">\r\n    <h5>Database</h5>\r\n    <p>Pine</p>\r\n  </div>\r\n  <div class=\"column\">\r\n    <h5>Last Deploy</h5>\r\n    <p>May 02, 2019 11:29 PM</p>\r\n  </div>\r\n  <div class=\"column\">\r\n    <h5>Version</h5>\r\n    <p>1.2.4353</p>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <h5>URL</h5>\r\n    <p>https://jade-digital-care.azurewebsites.net</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/environment-header/environment-header.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/_shared-components/environment-header/environment-header.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".environment-header {\n  background-color: mediumpurple;\n  margin: 0; }\n\nh5 {\n  padding-bottom: 10px;\n  color: #FFFFFF;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 19px; }\n\np {\n  color: #FFFFFF;\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 19px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2Vudmlyb25tZW50LWhlYWRlci9DOlxcZGV2XFxEZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxjbGllbnQvc3JjXFxhcHBcXF9zaGFyZWQtY29tcG9uZW50c1xcZW52aXJvbm1lbnQtaGVhZGVyXFxlbnZpcm9ubWVudC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBOEI7RUFDOUIsVUFBUyxFQUNWOztBQUVEO0VBQ0UscUJBQW9CO0VBQ3BCLGVBQWM7RUFDZCx3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYztFQUNkLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9fc2hhcmVkLWNvbXBvbmVudHMvZW52aXJvbm1lbnQtaGVhZGVyL2Vudmlyb25tZW50LWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbnZpcm9ubWVudC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmg1IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/environment-header/environment-header.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/_shared-components/environment-header/environment-header.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EnvironmentHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentHeaderComponent", function() { return EnvironmentHeaderComponent; });
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

var EnvironmentHeaderComponent = /** @class */ (function () {
    function EnvironmentHeaderComponent() {
    }
    EnvironmentHeaderComponent.prototype.ngOnInit = function () {
    };
    EnvironmentHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-environment-header',
            template: __webpack_require__(/*! ./environment-header.component.html */ "./src/app/_shared-components/environment-header/environment-header.component.html"),
            styles: [__webpack_require__(/*! ./environment-header.component.scss */ "./src/app/_shared-components/environment-header/environment-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EnvironmentHeaderComponent);
    return EnvironmentHeaderComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/header/header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/_shared-components/header/header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" id=\"navHeader\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <div class=\"navbar-brand\">\r\n    <a role=\"button\" class=\"navbar-burger burger\" aria-label=\"menu\" aria-expanded=\"false\"\r\n       data-target=\"navbarBasicExample\">\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n      <span aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n  <div id=\"navbarBasicExample\" class=\"navbar-menu\">\r\n    <div class=\"navbar-start\">\r\n      <a class=\"navbar-item nav-link\"  [routerLink]=\"['/team-view']\" routerLinkActive=\"is-active\">\r\n        Dashboard\r\n      </a>\r\n      <a class=\"navbar-item nav-link\" [routerLink]=\"['/projects-view']\" routerLinkActive=\"is-active\">\r\n        My test Projects\r\n      </a>\r\n      <a class=\"navbar-item nav-link\" [routerLink]=\"['/environment']\" routerLinkActive=\"is-active\">\r\n        Environment\r\n      </a>\r\n    </div>\r\n    <div class=\"navbar-end\">\r\n      <div class=\"navbar-item\">\r\n\r\n        <input class=\"search\" type=\"text\" placeholder=\"Search\">\r\n        <svg-icon class=\"svg-search\" [applyCss]=\"true\" src=\"../../../assets/icons/headersearch.svg\"></svg-icon>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/header/header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/_shared-components/header/header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#navHeader {\n  height: 60px;\n  width: auto;\n  background-color: #6B6864; }\n  #navHeader .nav-link {\n    padding: 19px 40px 18px 40px;\n    color: #FFFFFF;\n    font-family: sans-serif;\n    font-size: 17px;\n    font-weight: bold;\n    line-height: 23px; }\n  #navHeader .nav-link:hover {\n    background-color: #262626; }\n  #navHeader .search {\n    color: #FFFFFF;\n    background-color: #6B6864;\n    border-style: hidden;\n    border-bottom: #FFFFFF 1px solid; }\n  input[type=\"text\"] {\n  outline: none; }\n  ::-webkit-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1;\n  /* Firefox */ }\n  ::-moz-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1;\n  /* Firefox */ }\n  ::-ms-input-placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1;\n  /* Firefox */ }\n  ::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: #FFFFFF;\n  opacity: 1;\n  /* Firefox */ }\n  :-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #FFFFFF; }\n  ::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: #FFFFFF; }\n  .is-active {\n  background-color: #262626 !important; }\n  .svg-search {\n  padding-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL2hlYWRlci9DOlxcZGV2XFxEZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxjbGllbnQvc3JjXFxhcHBcXF9zaGFyZWQtY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFZO0VBQ1osWUFBVztFQUNYLDBCQUF5QixFQXFCMUI7RUF4QkQ7SUFNSSw2QkFBNEI7SUFDNUIsZUFBYztJQUNkLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixrQkFBaUIsRUFDbEI7RUFaSDtJQWNJLDBCQUF5QixFQUMxQjtFQWZIO0lBbUJJLGVBQWM7SUFDZCwwQkFBeUI7SUFDekIscUJBQW9CO0lBQ3BCLGlDQUFnQyxFQUNqQztFQUVIO0VBQ0UsY0FBYSxFQUNkO0VBRUQ7RUFBZ0IsMENBQTBDO0VBQ3hELGVBQWM7RUFDZCxXQUFVO0VBQUUsYUFBYSxFQUMxQjtFQUhEO0VBQWdCLDBDQUEwQztFQUN4RCxlQUFjO0VBQ2QsV0FBVTtFQUFFLGFBQWEsRUFDMUI7RUFIRDtFQUFnQiwwQ0FBMEM7RUFDeEQsZUFBYztFQUNkLFdBQVU7RUFBRSxhQUFhLEVBQzFCO0VBSEQ7RUFBZ0IsMENBQTBDO0VBQ3hELGVBQWM7RUFDZCxXQUFVO0VBQUUsYUFBYSxFQUMxQjtFQUVEO0VBQXlCLDZCQUE2QjtFQUNwRCxlQUFjLEVBQ2Y7RUFFRDtFQUEwQixvQkFBb0I7RUFDNUMsZUFBYyxFQUNmO0VBRUQ7RUFDRSxxQ0FBb0MsRUFDckM7RUFFRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQtY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdkhlYWRlciB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2QjY4NjQ7XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDQwcHggMThweCA0MHB4O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgfVxyXG4gIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaCB7XHJcblxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkI2ODY0O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAjRkZGRkZGIDFweCBzb2xpZDtcclxuICB9XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5pcy1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN2Zy1zZWFyY2gge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/_shared-components/header/header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/_shared-components/header/header.component.ts ***!
  \***************************************************************/
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
        console.log(this.selectedTab);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/_shared-components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/_shared-components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/project-health/project-health.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/_shared-components/project-health/project-health.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"getClassForHeart(projectHealth)\">\r\n  <div class=\"project-item-health\">\r\n    <div class=\"heart-icon\">\r\n      <svg-icon [applyCss]=\"true\" src=\"../../../assets/icons/heart_icon.svg\"></svg-icon>\r\n    </div>\r\n    <div>{{getTextForHeart(projectHealth)}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/project-health/project-health.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/_shared-components/project-health/project-health.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-item-health {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding-top: 14px;\n  font-size: 12.8px;\n  line-height: 18px; }\n\n.heart-icon {\n  width: 34px; }\n\n.health-poor {\n  color: #E44C41; }\n\n.health-poor #heartPath {\n    fill: url(#poor); }\n\n.health-average {\n  color: #DEEA42; }\n\n.health-average #heartPath {\n    fill: url(#average); }\n\n.health-very-good {\n  color: #4DC736; }\n\n.health-very-good #heartPath {\n    fill: url(#good); }\n\n.health-excellent {\n  color: #31BC87; }\n\n.health-excellent #heartPath {\n    fill: url(#excellent);\n    stroke: #31BC87; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL3Byb2plY3QtaGVhbHRoL0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXGFwcFxcX3NoYXJlZC1jb21wb25lbnRzXFxwcm9qZWN0LWhlYWx0aFxccHJvamVjdC1oZWFsdGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19zaGFyZWQtY29tcG9uZW50cy9wcm9qZWN0LWhlYWx0aC9DOlxcZGV2XFxEZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxjbGllbnQvc3JjXFxzdHlsZXNcXGNvbW1vblxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBYTtFQUNiLHVCQUFzQjtFQUN0Qix3QkFBdUI7RUFDdkIsb0JBQW1CO0VBQ3JCLGtCQUFpQjtFQUNmLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSxlQ0RtQixFRE1wQjs7QUFORDtJQUlJLGlCQUFnQixFQUNqQjs7QUFHSDtFQUNFLGVDVnNCLEVEZXZCOztBQU5EO0lBSUksb0JBQW1CLEVBQ3BCOztBQUdIO0VBQ0UsZUNuQndCLEVEd0J6Qjs7QUFORDtJQUlJLGlCQUFnQixFQUNqQjs7QUFHSDtFQUNFLGVDNUJ3QixFRGtDekI7O0FBUEQ7SUFJSSxzQkFBcUI7SUFDckIsZ0JDaENzQixFRGlDdkIiLCJmaWxlIjoic3JjL2FwcC9fc2hhcmVkLWNvbXBvbmVudHMvcHJvamVjdC1oZWFsdGgvcHJvamVjdC1oZWFsdGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbW1vbi92YXJpYWJsZXNcIjtcclxuXHJcbi5wcm9qZWN0LWl0ZW0taGVhbHRoIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxucGFkZGluZy10b3A6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxMi44cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5oZWFydC1pY29uIHtcclxuICB3aWR0aDogMzRweDtcclxufVxyXG5cclxuLmhlYWx0aC1wb29yIHtcclxuICBjb2xvcjogJGhlYWx0aC1wb29yO1xyXG5cclxuICAjaGVhcnRQYXRoIHtcclxuICAgIGZpbGw6IHVybCgjcG9vcik7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhbHRoLWF2ZXJhZ2Uge1xyXG4gIGNvbG9yOiAkaGVhbHRoLWF2ZXJhZ2U7XHJcblxyXG4gICNoZWFydFBhdGgge1xyXG4gICAgZmlsbDogdXJsKCNhdmVyYWdlKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFsdGgtdmVyeS1nb29kIHtcclxuICBjb2xvcjogJGhlYWx0aC12ZXJ5LWdvb2Q7XHJcblxyXG4gICNoZWFydFBhdGgge1xyXG4gICAgZmlsbDogdXJsKCNnb29kKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFsdGgtZXhjZWxsZW50IHtcclxuICBjb2xvcjogJGhlYWx0aC1leGNlbGxlbnQ7XHJcblxyXG4gICNoZWFydFBhdGgge1xyXG4gICAgZmlsbDogdXJsKCNleGNlbGxlbnQpO1xyXG4gICAgc3Ryb2tlOiAkaGVhbHRoLWV4Y2VsbGVudDtcclxuICB9XHJcbn1cclxuIiwiJGxpZ2h0ZXN0LWdyZXkgOiNFNkU2RTY7XHJcbiRsaWdodGVyLWdyZXk6ICM2QTZBNkE7XHJcbiRncmV5OiAjNkI2ODY0O1xyXG4kZGFya2VyLWdyZXk6ICM0NTQ1NDU7XHJcblxyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRwYWdlLWJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjY7XHJcblxyXG4kdGV4dC1ibHVlOiAjMEQ1Njc0O1xyXG4kdGV4dC1tYWluLWNvbG9yOiAkZGFya2VyLWdyZXk7XHJcblxyXG5cclxuLy9oZWFydCBjb2xvcnM6XHJcbiRoZWFsdGgtZXhjZWxsZW50OiAjMzFCQzg3O1xyXG4kaGVhbHRoLXZlcnktZ29vZDogIzREQzczNjtcclxuJGhlYWx0aC1hdmVyYWdlOiAjREVFQTQyO1xyXG4kaGVhbHRoLXBvb3I6ICNFNDRDNDE7XHJcblxyXG4vL3dvcmsgYnJlYWtkb3duXHJcbiRuZXctZmVhdHVyZXMgOiAjMzZDNzdCO1xyXG4kdGVjaG5pY2FsLWRlYml0czogIzA3OUVEQTtcclxuJHJld29yazogIzU2NjQ3MztcclxuJGJ1Z3M6ICNGRkM5MDc7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_shared-components/project-health/project-health.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/_shared-components/project-health/project-health.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectHealthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectHealthComponent", function() { return ProjectHealthComponent; });
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

var ProjectHealthComponent = /** @class */ (function () {
    function ProjectHealthComponent() {
        // TODO: make into Enum
        this.svgClassDictionary = {
            'poor': 'health-poor',
            'average': 'health-average',
            'good': 'health-very-good',
            'excellent': 'health-excellent'
        };
    }
    ProjectHealthComponent.prototype.ngOnInit = function () {
    };
    ProjectHealthComponent.prototype.getClassForHeart = function (projectHealth) {
        switch (true) {
            case (projectHealth > 75 && projectHealth >= 100):
                return this.svgClassDictionary['excellent'];
            case (projectHealth > 50 && projectHealth >= 75):
                return this.svgClassDictionary['good'];
            case (projectHealth > 25 && projectHealth >= 50):
                return this.svgClassDictionary['average'];
            default:
                return this.svgClassDictionary['poor'];
        }
    };
    ProjectHealthComponent.prototype.getTextForHeart = function (projectHealth) {
        switch (true) {
            case (projectHealth > 75 && projectHealth >= 100):
                return 'Excellent';
            case (projectHealth > 50 && projectHealth >= 75):
                return 'Very Good';
            case (projectHealth > 25 && projectHealth >= 50):
                return 'Average';
            default:
                return 'Poor';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProjectHealthComponent.prototype, "projectHealth", void 0);
    ProjectHealthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-health',
            template: __webpack_require__(/*! ./project-health.component.html */ "./src/app/_shared-components/project-health/project-health.component.html"),
            styles: [__webpack_require__(/*! ./project-health.component.scss */ "./src/app/_shared-components/project-health/project-health.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectHealthComponent);
    return ProjectHealthComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/request-new-environment/request-new-environment.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/_shared-components/request-new-environment/request-new-environment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"request-new-env\">\r\n  <div class=\"test\">\r\n<div class=\"field\">\r\n  <label class=\"label\">Project to deploy</label>\r\n  <div class=\"control\">\r\n    <div class=\"select\">\r\n      <select>\r\n        <option>TAL FactFind</option>\r\n        <option>Clearview Insurance</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n    <div class=\"field\">\r\n      <label class=\"label\">User requesting environment</label>\r\n      <div class=\"control\">\r\n        <input class=\"input\" type=\"text\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label class=\"label\">Email</label>\r\n      <div class=\"control\">\r\n        <input class=\"input\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label class=\"label\">Environment stage</label>\r\n      <div class=\"control\">\r\n        <div class=\"select\">\r\n          <select>\r\n            <option>CI</option>\r\n            <option>Functional test</option>\r\n            <option>Pre-production</option>\r\n            <option>QA</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\">\r\n      <label class=\"label\">Message</label>\r\n      <div class=\"control\">\r\n        <textarea class=\"textarea\" placeholder=\"Extra details\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"field is-grouped\">\r\n      <div class=\"control\">\r\n        <button class=\"button is-link\">Submit</button>\r\n      </div>\r\n      <div class=\"control\">\r\n        <button class=\"button is-text\">Cancel</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/request-new-environment/request-new-environment.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/_shared-components/request-new-environment/request-new-environment.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".request-new-env {\n  padding-left: 14px;\n  width: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL3JlcXVlc3QtbmV3LWVudmlyb25tZW50L0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXGFwcFxcX3NoYXJlZC1jb21wb25lbnRzXFxyZXF1ZXN0LW5ldy1lbnZpcm9ubWVudFxccmVxdWVzdC1uZXctZW52aXJvbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL3JlcXVlc3QtbmV3LWVudmlyb25tZW50L3JlcXVlc3QtbmV3LWVudmlyb25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcXVlc3QtbmV3LWVudiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/request-new-environment/request-new-environment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/_shared-components/request-new-environment/request-new-environment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: RequestNewEnvironmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestNewEnvironmentComponent", function() { return RequestNewEnvironmentComponent; });
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

var RequestNewEnvironmentComponent = /** @class */ (function () {
    function RequestNewEnvironmentComponent() {
    }
    RequestNewEnvironmentComponent.prototype.ngOnInit = function () {
    };
    RequestNewEnvironmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-new-environment',
            template: __webpack_require__(/*! ./request-new-environment.component.html */ "./src/app/_shared-components/request-new-environment/request-new-environment.component.html"),
            styles: [__webpack_require__(/*! ./request-new-environment.component.scss */ "./src/app/_shared-components/request-new-environment/request-new-environment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestNewEnvironmentComponent);
    return RequestNewEnvironmentComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/team-member/team-member.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/_shared-components/team-member/team-member.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team-member\" *ngFor=\"let team of Teams;\">\r\n  <div>\r\n    <img\r\n      src=\"{{team.ImageUrl}}\" ngClass=\"{{imgClass}}\"/><br>\r\n    <span *ngIf=\"displayName\" >{{team.Name}}</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_shared-components/team-member/team-member.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/_shared-components/team-member/team-member.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard-img {\n  border-radius: 50%;\n  height: 90px;\n  width: 85px; }\n\n.project-img {\n  border-radius: 50%;\n  height: 45px;\n  width: 40px; }\n\n.team-member {\n  text-align: center;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL3RlYW0tbWVtYmVyL0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXGFwcFxcX3NoYXJlZC1jb21wb25lbnRzXFx0ZWFtLW1lbWJlclxcdGVhbS1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLFlBQVcsRUFDWjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osWUFBVyxFQUNaOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQUNsQiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQtY29tcG9uZW50cy90ZWFtLW1lbWJlci90ZWFtLW1lbWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIHdpZHRoOiA4NXB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWcge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbn1cclxuXHJcbi50ZWFtLW1lbWJlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_shared-components/team-member/team-member.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/_shared-components/team-member/team-member.component.ts ***!
  \*************************************************************************/
/*! exports provided: TeamMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMemberComponent", function() { return TeamMemberComponent; });
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

var TeamMemberComponent = /** @class */ (function () {
    function TeamMemberComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TeamMemberComponent.prototype, "Teams", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TeamMemberComponent.prototype, "displayName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TeamMemberComponent.prototype, "imgClass", void 0);
    TeamMemberComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-member',
            template: __webpack_require__(/*! ./team-member.component.html */ "./src/app/_shared-components/team-member/team-member.component.html"),
            styles: [__webpack_require__(/*! ./team-member.component.scss */ "./src/app/_shared-components/team-member/team-member.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamMemberComponent);
    return TeamMemberComponent;
}());



/***/ }),

/***/ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"breakdown-heading\">Team work breakdown</div>\r\n  <div class=\"columns breakdown-chart\">\r\n    <svg-icon [applyCss]=\"true\" src=\"../../../assets/icons/chart-{{ProjectId}}.svg\"></svg-icon>\r\n  </div>\r\n  <div class=\"columns breakdown-legend\">\r\n    <div class=\"column rectangle-copy-6\"></div>\r\n    <p>{{TeamWorkBreakdown.NewFeatures}}% New features</p>\r\n    <div class=\"column rectangle-copy-7\"></div>\r\n    <p>{{TeamWorkBreakdown.TechnicalDebits}}% Technical debits</p>\r\n    <div class=\"column rectangle-copy-8\"></div>\r\n    <p>{{TeamWorkBreakdown.Rework}}% Rework</p>\r\n    <div class=\"column rectangle-copy-9\"></div>\r\n    <p>{{TeamWorkBreakdown.Bugs}}% Bugs</p>\r\n  </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breakdown-heading {\n  padding-left: 30px;\n  padding-top: 30px;\n  margin-bottom: 10px;\n  padding-bottom: 30px;\n  height: 22px;\n  width: 182px;\n  color: #454545;\n  font-family: sans-serif;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 19px; }\n\n.breakdown-chart {\n  width: 100%;\n  padding-left: 42px;\n  height: 65px; }\n\n.breakdown-chart .new-features {\n    background-color: #36C77B; }\n\n.breakdown-chart .tech-debt {\n    background-color: #079EDA; }\n\n.breakdown-chart .rework {\n    background-color: #566473; }\n\n.breakdown-chart .bugs {\n    background-color: #FFC907; }\n\n.breakdown-category {\n  width: 88px;\n  color: #FFFFFF;\n  font-family: sans-serif;\n  font-size: 13px;\n  font-weight: bold;\n  line-height: 18px; }\n\n.breakdown-legend {\n  padding-left: 42px;\n  padding-top: 15px; }\n\n.breakdown-legend .rectangle-copy-6 {\n    margin-right: 10px;\n    height: 20px;\n    max-width: 20px;\n    background-color: #36C77B; }\n\n.breakdown-legend .rectangle-copy-7 {\n    margin-right: 10px;\n    height: 20px;\n    max-width: 20px;\n    background-color: #079EDA; }\n\n.breakdown-legend .rectangle-copy-8 {\n    margin-right: 10px;\n    height: 20px;\n    max-width: 20px;\n    background-color: #566473; }\n\n.breakdown-legend .rectangle-copy-9 {\n    margin-right: 10px;\n    height: 20px;\n    max-width: 20px;\n    background-color: #FFC907; }\n\n.breakdown-legend p {\n    height: 22px;\n    width: 100%;\n    color: #454545;\n    font-family: sans-serif;\n    font-size: 12px;\n    font-weight: bold;\n    line-height: 22px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NoYXJlZC1jb21wb25lbnRzL3RlYW0td29yay1icmVha2Rvd24vQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcYXBwXFxfc2hhcmVkLWNvbXBvbmVudHNcXHRlYW0td29yay1icmVha2Rvd25cXHRlYW0td29yay1icmVha2Rvd24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL19zaGFyZWQtY29tcG9uZW50cy90ZWFtLXdvcmstYnJlYWtkb3duL0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXHN0eWxlc1xcY29tbW9uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBa0I7RUFDbEIsa0JBQWlCO0VBQ2pCLG9CQUFtQjtFQUNuQixxQkFBb0I7RUFDcEIsYUFBWTtFQUNaLGFBQVk7RUFDWixlQUFjO0VBQ2Qsd0JBQXVCO0VBQ3ZCLGdCQUFlO0VBQ2Ysa0JBQWlCO0VBQ2pCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLFlBQVc7RUFFWCxtQkFBa0I7RUFDbEIsYUFBWSxFQWFiOztBQWpCRDtJQU1JLDBCQ0htQixFRElwQjs7QUFQSDtJQVNJLDBCQ0xzQixFRE12Qjs7QUFWSDtJQVlJLDBCQ1BZLEVEUWI7O0FBYkg7SUFlSSwwQkNUVSxFRFVYOztBQUdIO0VBRUUsWUFBVztFQUNYLGVBQWM7RUFDZCx3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsbUJBQWtCO0VBQ2xCLGtCQUFpQixFQW1DbEI7O0FBckNEO0lBSUksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixnQkFBZTtJQUNmLDBCQ2pDbUIsRURrQ3BCOztBQVJIO0lBVUksbUJBQWtCO0lBQ2xCLGFBQVk7SUFDWixnQkFBZTtJQUNmLDBCQ3RDc0IsRUR1Q3ZCOztBQWRIO0lBZ0JJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osZ0JBQWU7SUFDZiwwQkMzQ1ksRUQ0Q2I7O0FBcEJIO0lBc0JJLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osZ0JBQWU7SUFDZiwwQkNoRFUsRURpRFg7O0FBMUJIO0lBNkJJLGFBQVk7SUFDWixZQUFXO0lBQ1gsZUFBYztJQUNkLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9fc2hhcmVkLWNvbXBvbmVudHMvdGVhbS13b3JrLWJyZWFrZG93bi90ZWFtLXdvcmstYnJlYWtkb3duLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb21tb24vdmFyaWFibGVzXCI7XHJcblxyXG4uYnJlYWtkb3duLWhlYWRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICB3aWR0aDogMTgycHg7XHJcbiAgY29sb3I6ICM0NTQ1NDU7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG59XHJcblxyXG4uYnJlYWtkb3duLWNoYXJ0IHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICAubmV3LWZlYXR1cmVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXctZmVhdHVyZXM7XHJcbiAgfVxyXG4gIC50ZWNoLWRlYnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRlY2huaWNhbC1kZWJpdHM7XHJcbiAgfVxyXG4gIC5yZXdvcmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHJld29yaztcclxuICB9XHJcbiAgLmJ1Z3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJ1Z3M7XHJcbiAgfVxyXG59XHJcblxyXG4uYnJlYWtkb3duLWNhdGVnb3J5IHtcclxuXHJcbiAgd2lkdGg6IDg4cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uYnJlYWtkb3duLWxlZ2VuZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MnB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIC5yZWN0YW5nbGUtY29weS02IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRuZXctZmVhdHVyZXM7XHJcbiAgfVxyXG4gIC5yZWN0YW5nbGUtY29weS03IHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1heC13aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWNobmljYWwtZGViaXRzO1xyXG4gIH1cclxuICAucmVjdGFuZ2xlLWNvcHktOCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmV3b3JrO1xyXG4gIH1cclxuICAucmVjdGFuZ2xlLWNvcHktOSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnVncztcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzQ1NDU0NTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbn1cclxuIiwiJGxpZ2h0ZXN0LWdyZXkgOiNFNkU2RTY7XHJcbiRsaWdodGVyLWdyZXk6ICM2QTZBNkE7XHJcbiRncmV5OiAjNkI2ODY0O1xyXG4kZGFya2VyLWdyZXk6ICM0NTQ1NDU7XHJcblxyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRwYWdlLWJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjY7XHJcblxyXG4kdGV4dC1ibHVlOiAjMEQ1Njc0O1xyXG4kdGV4dC1tYWluLWNvbG9yOiAkZGFya2VyLWdyZXk7XHJcblxyXG5cclxuLy9oZWFydCBjb2xvcnM6XHJcbiRoZWFsdGgtZXhjZWxsZW50OiAjMzFCQzg3O1xyXG4kaGVhbHRoLXZlcnktZ29vZDogIzREQzczNjtcclxuJGhlYWx0aC1hdmVyYWdlOiAjREVFQTQyO1xyXG4kaGVhbHRoLXBvb3I6ICNFNDRDNDE7XHJcblxyXG4vL3dvcmsgYnJlYWtkb3duXHJcbiRuZXctZmVhdHVyZXMgOiAjMzZDNzdCO1xyXG4kdGVjaG5pY2FsLWRlYml0czogIzA3OUVEQTtcclxuJHJld29yazogIzU2NjQ3MztcclxuJGJ1Z3M6ICNGRkM5MDc7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TeamWorkBreakdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamWorkBreakdownComponent", function() { return TeamWorkBreakdownComponent; });
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

var TeamWorkBreakdownComponent = /** @class */ (function () {
    function TeamWorkBreakdownComponent() {
    }
    TeamWorkBreakdownComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TeamWorkBreakdownComponent.prototype, "TeamWorkBreakdown", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], TeamWorkBreakdownComponent.prototype, "ProjectId", void 0);
    TeamWorkBreakdownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-work-breakdown',
            template: __webpack_require__(/*! ./team-work-breakdown.component.html */ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.html"),
            styles: [__webpack_require__(/*! ./team-work-breakdown.component.scss */ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamWorkBreakdownComponent);
    return TeamWorkBreakdownComponent;
}());



/***/ }),

/***/ "./src/app/_shared-services/projects.service.ts":
/*!******************************************************!*\
  !*** ./src/app/_shared-services/projects.service.ts ***!
  \******************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
        this.ProjectObjl = [
            {
                Id: 0,
                ProjectName: 'TAL Insurance',
                ClientName: 'TAL',
                ProjectHealth: 100,
                TeamId: 2,
                StartToDeploy: '2h 30m',
                ChangeFailRate: '3%',
                LeadTimeToChange: '2h 22m',
                MeanTimeToRestore: '5h 32m'
            },
            {
                Id: 1,
                ProjectName: 'ClearView',
                ClientName: 'ClearView',
                ProjectHealth: 75,
                TeamId: 1,
                StartToDeploy: '3h 30m',
                ChangeFailRate: '2%',
                LeadTimeToChange: '1h 18m',
                MeanTimeToRestore: '5h 00m'
            },
            {
                Id: 2,
                ProjectName: 'SBS Portal',
                ClientName: 'SBS Bank',
                ProjectHealth: 80,
                TeamId: 2,
                StartToDeploy: '01h 30m',
                ChangeFailRate: '4%',
                LeadTimeToChange: '1h 4m',
                MeanTimeToRestore: '3h 14m'
            },
            {
                Id: 3,
                ProjectName: 'Meridian Portal',
                ClientName: 'Meridian',
                ProjectHealth: 75,
                TeamId: 2,
                StartToDeploy: '2h 30m',
                ChangeFailRate: '1%',
                LeadTimeToChange: '2h 2m',
                MeanTimeToRestore: '1h 32m'
            },
            {
                Id: 4,
                ProjectName: 'Third Eye',
                ClientName: 'Jade',
                ProjectHealth: 100,
                TeamId: 1,
                StartToDeploy: '0h 55m',
                ChangeFailRate: '0.1%',
                LeadTimeToChange: '2h 13m',
                MeanTimeToRestore: '0h 55m'
            }
        ];
    }
    ProjectsService.prototype.getProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.ProjectObjl);
    };
    ProjectsService.prototype.getProjectById = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.ProjectObjl.find(function (project) { return project.Id === id; }));
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/_shared-services/team-work-breakdown.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_shared-services/team-work-breakdown.service.ts ***!
  \*****************************************************************/
/*! exports provided: TeamWorkBreakdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamWorkBreakdownService", function() { return TeamWorkBreakdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamWorkBreakdownService = /** @class */ (function () {
    function TeamWorkBreakdownService() {
        this.TeamWorkBreakdown = [
            {
                NewFeatures: 34,
                TechnicalDebits: 49,
                Rework: 12,
                Bugs: 5
            },
            {
                NewFeatures: 64,
                TechnicalDebits: 20,
                Rework: 6,
                Bugs: 10
            }
        ];
    }
    TeamWorkBreakdownService.prototype.getTeamWorkBreakdown = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.TeamWorkBreakdown);
    };
    TeamWorkBreakdownService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TeamWorkBreakdownService);
    return TeamWorkBreakdownService;
}());



/***/ }),

/***/ "./src/app/_shared-services/teams.service.ts":
/*!***************************************************!*\
  !*** ./src/app/_shared-services/teams.service.ts ***!
  \***************************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamsService = /** @class */ (function () {
    function TeamsService() {
        this.Yakuza = [
            {
                Id: 1,
                Name: 'Rebecca',
                ImageUrl: '../assets/jade-staff/p1.png'
            },
            {
                Id: 2,
                Name: 'Jaco',
                ImageUrl: '../assets/jade-staff/p2.png'
            },
            {
                Id: 3,
                Name: 'Kelvin',
                ImageUrl: '../assets/jade-staff/p3.png'
            },
            {
                Id: 4,
                Name: 'Tash',
                ImageUrl: '../assets/jade-staff/p4.png'
            }
        ];
        this.SpgTeam = [
            {
                Id: 1,
                Name: 'Kate',
                ImageUrl: '../assets/jade-staff/p1.png'
            },
            {
                Id: 2,
                Name: 'Hayden',
                ImageUrl: '../assets/jade-staff/p2.png'
            },
            {
                Id: 3,
                Name: 'Susan',
                ImageUrl: '../assets/jade-staff/p4.png'
            }
        ];
        this.Team = [
            {
                Id: 1,
                Name: 'Yakuza',
                Members: this.Yakuza,
                TeamNpsRating: 6,
                ProjectId: 0
            },
            {
                Id: 2,
                Name: 'SPG',
                Members: this.SpgTeam,
                TeamNpsRating: 6,
                ProjectId: 1
            }
        ];
    }
    TeamsService.prototype.getTeams = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.Team);
    };
    // TODO: change when API call
    TeamsService.prototype.getTeamById = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.Team.find(function (aTeam) { return aTeam.Id === id; }));
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TeamsService);
    return TeamsService;
}());



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
/* harmony import */ var _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project-view/project-view.component */ "./src/app/components/project-view/project-view.component.ts");
/* harmony import */ var _components_environments_view_environments_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/environments-view/environments-view.component */ "./src/app/components/environments-view/environments-view.component.ts");
/* harmony import */ var _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/team-view/team-view.component */ "./src/app/components/team-view/team-view.component.ts");
/* harmony import */ var _components_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects-view/projects-view.component */ "./src/app/components/projects-view/projects-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/team-view', pathMatch: 'full' },
    { path: 'team-view', component: _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_4__["TeamViewComponent"] },
    { path: 'projects-view', component: _components_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsViewComponent"] },
    { path: 'project/:id', component: _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_2__["ProjectViewComponent"] },
    { path: 'environment', component: _components_environments_view_environments_view_component__WEBPACK_IMPORTED_MODULE_3__["EnvironmentsViewComponent"] }
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'jade-digital-care-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-svg-icon */ "./node_modules/angular-svg-icon/fesm5/angular-svg-icon.js");
/* harmony import */ var _shared_components_deployment_statistics_deployment_statistics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_shared-components/deployment-statistics/deployment-statistics.component */ "./src/app/_shared-components/deployment-statistics/deployment-statistics.component.ts");
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_shared-components/header/header.component */ "./src/app/_shared-components/header/header.component.ts");
/* harmony import */ var _shared_components_project_health_project_health_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_shared-components/project-health/project-health.component */ "./src/app/_shared-components/project-health/project-health.component.ts");
/* harmony import */ var _shared_components_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_shared-components/team-member/team-member.component */ "./src/app/_shared-components/team-member/team-member.component.ts");
/* harmony import */ var _shared_components_team_work_breakdown_team_work_breakdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_shared-components/team-work-breakdown/team-work-breakdown.component */ "./src/app/_shared-components/team-work-breakdown/team-work-breakdown.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_environments_view_environments_view_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/environments-view/environments-view.component */ "./src/app/components/environments-view/environments-view.component.ts");
/* harmony import */ var _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/project-view/project-view.component */ "./src/app/components/project-view/project-view.component.ts");
/* harmony import */ var _components_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/projects-view/projects-view.component */ "./src/app/components/projects-view/projects-view.component.ts");
/* harmony import */ var _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/team-view/team-view.component */ "./src/app/components/team-view/team-view.component.ts");
/* harmony import */ var _shared_components_create_new_environment_create_new_environment_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_shared-components/create-new-environment/create-new-environment.component */ "./src/app/_shared-components/create-new-environment/create-new-environment.component.ts");
/* harmony import */ var _shared_components_request_new_environment_request_new_environment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_shared-components/request-new-environment/request-new-environment.component */ "./src/app/_shared-components/request-new-environment/request-new-environment.component.ts");
/* harmony import */ var _shared_components_copy_environment_copy_environment_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_shared-components/copy-environment/copy-environment.component */ "./src/app/_shared-components/copy-environment/copy-environment.component.ts");
/* harmony import */ var _shared_components_environment_header_environment_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_shared-components/environment-header/environment-header.component */ "./src/app/_shared-components/environment-header/environment-header.component.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_team_view_team_view_component__WEBPACK_IMPORTED_MODULE_16__["TeamViewComponent"],
                _shared_components_deployment_statistics_deployment_statistics_component__WEBPACK_IMPORTED_MODULE_6__["DeploymentStatisticsComponent"],
                _shared_components_team_member_team_member_component__WEBPACK_IMPORTED_MODULE_9__["TeamMemberComponent"],
                _shared_components_project_health_project_health_component__WEBPACK_IMPORTED_MODULE_8__["ProjectHealthComponent"],
                _components_environments_view_environments_view_component__WEBPACK_IMPORTED_MODULE_13__["EnvironmentsViewComponent"],
                _components_projects_view_projects_view_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsViewComponent"],
                _components_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_14__["ProjectViewComponent"],
                _shared_components_team_work_breakdown_team_work_breakdown_component__WEBPACK_IMPORTED_MODULE_10__["TeamWorkBreakdownComponent"],
                _shared_components_create_new_environment_create_new_environment_component__WEBPACK_IMPORTED_MODULE_17__["CreateNewEnvironmentComponent"],
                _shared_components_request_new_environment_request_new_environment_component__WEBPACK_IMPORTED_MODULE_18__["RequestNewEnvironmentComponent"],
                _shared_components_copy_environment_copy_environment_component__WEBPACK_IMPORTED_MODULE_19__["CopyEnvironmentComponent"],
                _shared_components_environment_header_environment_header_component__WEBPACK_IMPORTED_MODULE_20__["EnvironmentHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], angular_svg_icon__WEBPACK_IMPORTED_MODULE_5__["AngularSvgIconModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/environments-view/environments-view.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/environments-view/environments-view.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"environment\">\r\n  <app-environment-header></app-environment-header>\r\n  <div class=\"project-tabs tabs\" role=\"tablist\">\r\n    <ul>\r\n      <li *ngFor=\"let projectTab of projectTabs\" role=\"presentation\" class=\"is-narrow\"\r\n          [ngClass]=\"{'is-active':selectedTab===projectTab}\"><a\r\n        (click)=\"selectedTab=projectTab\"\r\n        aria-controls=\"one\" role=\"tab\"\r\n        data-toggle=\"tab\">{{projectTab}}</a></li>\r\n    </ul>\r\n  </div>\r\n  <app-copy-environment *ngIf=\"selectedTab === projectTabs[4]\"></app-copy-environment>\r\n  <app-request-new-environment *ngIf=\"selectedTab === projectTabs[3]\"></app-request-new-environment>\r\n  <app-create-new-environment *ngIf=\"selectedTab === projectTabs[2]\"></app-create-new-environment>\r\n  <iframe *ngIf=\"selectedTab === projectTabs[0]\" class=\"dashboard\" (load)=\"removeIframeHeader()\"\r\n          src=\"https://app.powerbi.com/view?r=eyJrIjoiOWUwNjAyOWEtNzY5MC00OGRjLWFjZWMtZGY4Y2M3ODU4YTQ5IiwidCI6ImMyYTEzZDRjLTI2YjUtNDYxZC04MjJkLWM2OGU1NGE5M2MxYSIsImMiOjEwfQ%3D%3D\"></iframe>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/environments-view/environments-view.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/environments-view/environments-view.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard {\n  height: 1073px;\n  width: 1440px; }\n\n.project-tabs {\n  flex: none; }\n\n.is-narrow {\n  padding-right: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbnZpcm9ubWVudHMtdmlldy9DOlxcZGV2XFxEZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxqYWRlLWRpZ2l0YWwtY2FyZS1kZW1vXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVudmlyb25tZW50cy12aWV3XFxlbnZpcm9ubWVudHMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxjQUFhLEVBQ2Q7O0FBRUQ7RUFDSSxXQUFVLEVBQ1g7O0FBRUg7RUFDRSxvQkFBbUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Vudmlyb25tZW50cy12aWV3L2Vudmlyb25tZW50cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgaGVpZ2h0OiAxMDczcHg7XHJcbiAgd2lkdGg6IDE0NDBweDtcclxufVxyXG5cclxuLnByb2plY3QtdGFicyB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gIH1cclxuXHJcbi5pcy1uYXJyb3cge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/environments-view/environments-view.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/environments-view/environments-view.component.ts ***!
  \*****************************************************************************/
/*! exports provided: EnvironmentsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentsViewComponent", function() { return EnvironmentsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_shared-services/projects.service */ "./src/app/_shared-services/projects.service.ts");
/* harmony import */ var _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared-services/teams.service */ "./src/app/_shared-services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnvironmentsViewComponent = /** @class */ (function () {
    function EnvironmentsViewComponent(_projectsService, _teamsService, route) {
        this._projectsService = _projectsService;
        this._teamsService = _teamsService;
        this.route = route;
        this.projectTabs = ['Overview', 'Analytics', 'Create new environment', 'Request a new environment', 'Copy an environment'];
    }
    EnvironmentsViewComponent.prototype.ngOnInit = function () {
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.getProjectById(id);
        this.getTeamById(this.project.TeamId);
        this.selectedTab = 'Overview';
    };
    EnvironmentsViewComponent.prototype.getProjectById = function (id) {
        var _this = this;
        this._projectsService.getProjectById(id).subscribe(function (data) {
            console.log(data, 'data');
            _this.project = data;
        }, function (error1) { return console.log(error1); });
    };
    EnvironmentsViewComponent.prototype.getTeamById = function (id) {
        var _this = this;
        this._teamsService.getTeamById(id).subscribe(function (data) {
            _this.team = data;
        }, function (error1) { return console.log(error1); });
    };
    EnvironmentsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-environments-view',
            template: __webpack_require__(/*! ./environments-view.component.html */ "./src/app/components/environments-view/environments-view.component.html"),
            styles: [__webpack_require__(/*! ./environments-view.component.scss */ "./src/app/components/environments-view/environments-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
            _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EnvironmentsViewComponent);
    return EnvironmentsViewComponent;
}());



/***/ }),

/***/ "./src/app/components/project-view/project-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-project\">\r\n  <div class=\"project-header\">\r\n    <div class=\"project-header-main\">\r\n      <div class=\"columns is-gapless\">\r\n        <div class=\"column project-header-item is-two-fifths\">\r\n          <div class=\"columns\">\r\n            <div class=\"column project-information \">\r\n              <div class=\"project-name\">\r\n                {{project.ClientName}}\r\n              </div>\r\n              <div class=\"project-header-information\">\r\n                {{project.ProjectName}}\r\n              </div>\r\n            </div>\r\n            <div class=\"column project-health\">\r\n              <app-project-health [projectHealth]=project.ProjectHealth></app-project-health>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"column project-header-item\">\r\n          <div class=\"project-header-information\">{{project.StartToDeploy}}</div>\r\n          <div class=\"project-header-title\"> Avg Start to Deploy time</div>\r\n        </div>\r\n        <div class=\"column project-header-item\">\r\n          <div class=\"project-header-information\">{{project.ChangeFailRate}}</div>\r\n          <div class=\"project-header-title\">Change failure rate</div>\r\n        </div>\r\n        <div class=\"column project-header-item\">\r\n          <div class=\"project-header-information\">{{(team.TeamNpsRating)}}</div>\r\n          <div class=\"project-header-title\">Team NPS Rating</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"project-header-team\">\r\n      <div class=\"project-header-title\">{{team.Name}}</div>\r\n      <div class=\"project-header-title\">\r\n        <app-team-member class=\"team-members\" [imgClass]=\"'project-img'\" [Teams]=\"team.Members\"></app-team-member>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"project-tabs tabs\" role=\"tablist\">\r\n    <ul>\r\n      <li *ngFor=\"let projectTab of projectTabs\" role=\"presentation\" class=\"is-narrow\"\r\n          [ngClass]=\"{'is-active':selectedTab===projectTab}\"><a\r\n        (click)=\"selectedTab=projectTab\"\r\n        aria-controls=\"one\" role=\"tab\"\r\n        data-toggle=\"tab\">{{projectTab}}</a></li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"project-tab-content\">\r\n    <div *ngIf=\"selectedTab==='Overview' && project.ClientName === 'TAL'\" class=\"project-tab-pane\"\r\n         id=\"one\">\r\n      <iframe class=\"dashboard\"\r\n              src=\"https://app.powerbi.com/view?r=eyJrIjoiYzI4NDQxYWItNGZmNi00MzNjLThhMTgtNjUyYjBjZWRmNDhiIiwidCI6ImMyYTEzZDRjLTI2YjUtNDYxZC04MjJkLWM2OGU1NGE5M2MxYSIsImMiOjEwfQ%3D%3D\"></iframe>\r\n    </div>\r\n    <div *ngIf=\"selectedTab==='Overview' && project.ClientName === 'ClearView'\" class=\"project-tab-pane\"\r\n         id=\"two\">\r\n      <iframe class=\"dashboard\"\r\n              src=\"https://app.powerbi.com/view?r=eyJrIjoiYzI4NDQxYWItNGZmNi00MzNjLThhMTgtNjUyYjBjZWRmNDhiIiwidCI6ImMyYTEzZDRjLTI2YjUtNDYxZC04MjJkLWM2OGU1NGE5M2MxYSIsImMiOjEwfQ%3D%3D\"></iframe>\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedTab==='Test Reports' && project.ClientName === 'TAL'\" class=\"project-tab-pane\">\r\n      <iframe class=\"dashboard\"\r\n              src=\"https://app.powerbi.com/view?r=eyJrIjoiYzI4NDQxYWItNGZmNi00MzNjLThhMTgtNjUyYjBjZWRmNDhiIiwidCI6ImMyYTEzZDRjLTI2YjUtNDYxZC04MjJkLWM2OGU1NGE5M2MxYSIsImMiOjEwfQ%3D%3D\"></iframe>\r\n    </div>\r\n    <div *ngIf=\"selectedTab==='Test Reports' && project.ClientName === 'ClearView'\" class=\"project-tab-pane\">\r\n      <iframe class=\"dashboard\"\r\n              src=\"https://clearviewtestresults.azurewebsites.net/TestResult.html\"></iframe>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-view/project-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-project {\n  font-family: \"Open Sans\", sans-serif;\n  color: #454545;\n  font-weight: bold;\n  flex: 1;\n  display: flex;\n  flex-direction: column; }\n  .single-project .project-name {\n    color: #0D5674;\n    font-size: 20px;\n    font-weight: 500; }\n  .single-project .project-header {\n    background-color: #ffffff;\n    flex: none;\n    display: flex; }\n  .single-project .project-header-main {\n    flex: auto; }\n  .single-project .project-header-team {\n    padding-top: 14px;\n    flex: none; }\n  .single-project .project-header-item {\n    padding: 10px !important; }\n  .single-project .project-header-item + .project-header-item {\n    border-left: 1px solid #979797; }\n  .single-project .project-tabs {\n    flex: none; }\n  .single-project .project-tab-content {\n    flex: 1;\n    display: flex;\n    flex-direction: column; }\n  .single-project .project-tab-pane {\n    flex: 1; }\n  .single-project .project-header-title {\n    font-size: 16px; }\n  .single-project .project-header-information {\n    font-size: 28px; }\n  .single-project .dashboard {\n    height: calc(100% - 10px);\n    width: 100%; }\n  .single-project .team-members {\n    padding-right: 10px;\n    display: grid;\n    grid-template-columns: 50px 50px 50px 50px;\n    grid-gap: 10px; }\n  .single-project .project-information {\n    padding-left: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXZpZXcvQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0LXZpZXdcXHByb2plY3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0LXZpZXcvQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcc3R5bGVzXFxjb21tb25cXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFDQUFvQztFQUNwQyxlQ0RtQjtFREVuQixrQkFBaUI7RUFDakIsUUFBTztFQUNQLGNBQWE7RUFDYix1QkFBc0IsRUF3RXZCO0VBOUVEO0lBU0ksZUNIZTtJRElmLGdCQUFlO0lBQ2YsaUJBQWdCLEVBQ2pCO0VBWkg7SUFlSSwwQkNaVztJRGFYLFdBQVU7SUFDVixjQUFhLEVBQ2Q7RUFsQkg7SUFxQkksV0FBVSxFQUNYO0VBdEJIO0lBeUJJLGtCQUFpQjtJQUNqQixXQUFVLEVBQ1g7RUEzQkg7SUE4QkkseUJBQXdCLEVBQ3pCO0VBL0JIO0lBa0NJLCtCQUE4QixFQUMvQjtFQW5DSDtJQXNDSSxXQUFVLEVBQ1g7RUF2Q0g7SUEwQ0ksUUFBTztJQUNQLGNBQWE7SUFDYix1QkFBc0IsRUFDdkI7RUE3Q0g7SUFnREksUUFBTyxFQUNSO0VBakRIO0lBb0RJLGdCQUFlLEVBQ2hCO0VBckRIO0lBd0RJLGdCQUFlLEVBQ2hCO0VBekRIO0lBNERJLDBCQUF5QjtJQUN6QixZQUNGLEVBQUM7RUE5REg7SUFxRUksb0JBQW1CO0lBQ25CLGNBQWE7SUFDYiwyQ0FBMEM7SUFDMUMsZUFBYyxFQUNmO0VBekVIO0lBNEVJLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMvY29tbW9uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnNpbmdsZS1wcm9qZWN0IHtcclxuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogJGRhcmtlci1ncmV5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAucHJvamVjdC1uYW1lIHtcclxuICAgIGNvbG9yOiAkdGV4dC1ibHVlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWhlYWRlci1tYWluIHtcclxuICAgIGZsZXg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1oZWFkZXItdGVhbXtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgZmxleDogbm9uZTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWhlYWRlci1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWhlYWRlci1pdGVtICsgLnByb2plY3QtaGVhZGVyLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGFicyB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGFiLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtdGFiLXBhbmUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWhlYWRlci10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1oZWFkZXItaW5mb3JtYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmRhc2hib2FyZCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwcHgpO1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWluZm8tdGFiIHtcclxuXHJcbiAgfVxyXG5cclxuICAudGVhbS1tZW1iZXJzIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1pbmZvcm1hdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiRsaWdodGVzdC1ncmV5IDojRTZFNkU2O1xyXG4kbGlnaHRlci1ncmV5OiAjNkE2QTZBO1xyXG4kZ3JleTogIzZCNjg2NDtcclxuJGRhcmtlci1ncmV5OiAjNDU0NTQ1O1xyXG5cclxuJHdoaXRlOiAjZmZmZmZmO1xyXG4kcGFnZS1iYWNrZ3JvdW5kLWNvbG9yOiAjRUNGMEY2O1xyXG5cclxuJHRleHQtYmx1ZTogIzBENTY3NDtcclxuJHRleHQtbWFpbi1jb2xvcjogJGRhcmtlci1ncmV5O1xyXG5cclxuXHJcbi8vaGVhcnQgY29sb3JzOlxyXG4kaGVhbHRoLWV4Y2VsbGVudDogIzMxQkM4NztcclxuJGhlYWx0aC12ZXJ5LWdvb2Q6ICM0REM3MzY7XHJcbiRoZWFsdGgtYXZlcmFnZTogI0RFRUE0MjtcclxuJGhlYWx0aC1wb29yOiAjRTQ0QzQxO1xyXG5cclxuLy93b3JrIGJyZWFrZG93blxyXG4kbmV3LWZlYXR1cmVzIDogIzM2Qzc3QjtcclxuJHRlY2huaWNhbC1kZWJpdHM6ICMwNzlFREE7XHJcbiRyZXdvcms6ICM1NjY0NzM7XHJcbiRidWdzOiAjRkZDOTA3O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/project-view/project-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-view/project-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_shared-services/projects.service */ "./src/app/_shared-services/projects.service.ts");
/* harmony import */ var _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_shared-services/teams.service */ "./src/app/_shared-services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectViewComponent = /** @class */ (function () {
    function ProjectViewComponent(_projectsService, _teamsService, route) {
        this._projectsService = _projectsService;
        this._teamsService = _teamsService;
        this.route = route;
        this.projectTabs = ['Overview', 'Test Reports', 'Analytics'];
    }
    ProjectViewComponent.prototype.ngOnInit = function () {
        var id = Number(this.route.snapshot.paramMap.get('id'));
        this.getProjectById(id);
        this.getTeamById(this.project.TeamId);
        this.selectedTab = 'Overview';
    };
    ProjectViewComponent.prototype.getProjectById = function (id) {
        var _this = this;
        this._projectsService.getProjectById(id).subscribe(function (data) {
            console.log(data, 'data');
            _this.project = data;
        }, function (error1) { return console.log(error1); });
    };
    ProjectViewComponent.prototype.getTeamById = function (id) {
        var _this = this;
        this._teamsService.getTeamById(id).subscribe(function (data) {
            _this.team = data;
        }, function (error1) { return console.log(error1); });
    };
    ProjectViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-view',
            template: __webpack_require__(/*! ./project-view.component.html */ "./src/app/components/project-view/project-view.component.html"),
            styles: [__webpack_require__(/*! ./project-view.component.scss */ "./src/app/components/project-view/project-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
            _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProjectViewComponent);
    return ProjectViewComponent;
}());



/***/ }),

/***/ "./src/app/components/projects-view/projects-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/projects-view/projects-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-view\" id=\"projectView\">\r\n  <div class=\"project-page-header\">\r\n    <a class=\"page-header\">Projects</a>\r\n    <div class=\"project-search-bar\">\r\n      <div>Project name</div>\r\n      <svg-icon [applyCss]=\"true\" src=\"../../../assets/icons/search_icon.svg\"></svg-icon>\r\n    </div>\r\n  </div>\r\n  <table class=\"table is-fullwidth\">\r\n    <thead class=\"project-panel-header\">\r\n    <tr>\r\n      <th>PROJECTS</th>\r\n      <th>CLIENT</th>\r\n      <th>HEALTH</th>\r\n      <th>PRODUCTION DEPLOYMENT FREQUENCY</th>\r\n      <th>CHANGE FAILURE RATE</th>\r\n      <th>TEAM NPS RATING</th>\r\n      <th>TEAM</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let project of projects\" class=\"project-panel-item\">\r\n      <td><a class=\"project-item-name\" [routerLink]=\"['/project', project.Id]\">{{project.ProjectName}}</a></td>\r\n      <td class=\"project-item-client\">{{project.ClientName}}</td>\r\n      <td>\r\n        <app-project-health [projectHealth]=\"project.ProjectHealth\"></app-project-health>\r\n      </td>\r\n      <td class=\"project-item-avg-deploy\">{{project.StartToDeploy}}</td>\r\n      <td class=\"project-item-failure-rate\">{{project.ChangeFailRate}}</td>\r\n      <td class=\"project-item-team-nps\">{{getTeamNPSForProject(project.TeamId)}}</td>\r\n      <td class=\"project-item-team\">{{getTeamNameForProject(project.TeamId)}}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/projects-view/projects-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/projects-view/projects-view.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-view {\n  padding: 52px 40px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 700; }\n  .projects-view .page-header {\n    height: 38px;\n    width: 90px;\n    color: #454545;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    line-height: 38px; }\n  .projects-view .project-page-header {\n    display: flex;\n    justify-content: space-between;\n    margin-bottom: 20px; }\n  .projects-view .project-search-bar {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-end;\n    margin-bottom: auto;\n    padding-left: 5px;\n    width: 350px;\n    color: #6C6C6C;\n    font-family: Roboto;\n    font-size: 14px;\n    border-bottom: 1px solid #5C5C5C; }\n  .projects-view .project-search-bar #searchIcon {\n      margin-bottom: 0;\n      stroke: #979797; }\n  .projects-view .project-panel {\n    background-color: #ffffff; }\n  .projects-view .project-panel-header {\n    font-family: Roboto;\n    font-size: 14px;\n    line-height: 19px;\n    border-bottom: 1px solid #E6E6E6; }\n  .projects-view .project-panel-header th {\n      color: #6A6A6A;\n      text-align: left; }\n  .projects-view .project-item-health {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    font-size: 12.8px;\n    line-height: 18px; }\n  .projects-view .heart-icon {\n    width: 34px; }\n  .projects-view .health-poor {\n    color: #E44C41; }\n  .projects-view .health-poor #heartPath {\n      fill: url(#poor); }\n  .projects-view .health-average {\n    color: #DEEA42; }\n  .projects-view .health-average #heartPath {\n      fill: url(#average); }\n  .projects-view .health-very-good {\n    color: #4DC736; }\n  .projects-view .health-very-good #heartPath {\n      fill: url(#good); }\n  .projects-view .health-excellent {\n    color: #31BC87; }\n  .projects-view .health-excellent #heartPath {\n      fill: url(#excellent);\n      stroke: #31BC87; }\n  .projects-view .project-panel-item {\n    border-bottom: 1px solid #E6E6E6; }\n  .projects-view .project-item-client, .projects-view .project-item-team {\n    color: #454545;\n    font-size: 16px;\n    line-height: 22px; }\n  .projects-view .project-item-name {\n    color: #0D5674;\n    font-size: 16px;\n    line-height: 22px; }\n  .projects-view .project-item-avg-deploy, .projects-view .project-item-failure-rate, .projects-view .project-item-team-nps {\n    color: #454545;\n    font-size: 20px;\n    line-height: 27px; }\n  .table td {\n  padding: 1.5em 1.7em;\n  vertical-align: middle; }\n  tr > th {\n  padding-left: 28px; }\n  #projectView > table > thead > tr > th:nth-child(3) {\n  padding-left: 48px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy12aWV3L0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xccHJvamVjdHMtdmlld1xccHJvamVjdHMtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy12aWV3L0M6XFxkZXZcXERlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGphZGUtZGlnaXRhbC1jYXJlLWRlbW9cXGNsaWVudC9zcmNcXHN0eWxlc1xcY29tbW9uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBa0I7RUFDbEIscUNBQW9DO0VBQ3BDLGlCQUFnQixFQTRIakI7RUEvSEQ7SUFNSSxhQUFZO0lBQ1osWUFBVztJQUNYLGVDUGlCO0lEUWpCLHdCQUF1QjtJQUN2QixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixrQkFBaUIsRUFDbEI7RUFiSDtJQWdCSSxjQUFhO0lBQ2IsK0JBQThCO0lBQzlCLG9CQUFtQixFQUNwQjtFQW5CSDtJQXNCSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixzQkFBcUI7SUFDckIsb0JBQW1CO0lBQ25CLGtCQUFpQjtJQUVqQixhQUFZO0lBQ1osZUFBYztJQUNkLG9CQUFtQjtJQUNuQixnQkFBZTtJQUNmLGlDQUFnQyxFQU9qQztFQXhDSDtNQW9DTSxpQkFBZ0I7TUFDaEIsZ0JBQWUsRUFDaEI7RUF0Q0w7SUEyQ0ksMEJDeENXLEVEeUNaO0VBNUNIO0lBK0NJLG9CQUFtQjtJQUVuQixnQkFBZTtJQUNmLGtCQUFpQjtJQUNqQixpQ0NyRG1CLEVEMkRwQjtFQXpESDtNQXNETSxlQ3ZEZ0I7TUR3RGhCLGlCQUFnQixFQUNqQjtFQXhETDtJQTRESSxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLHdCQUF1QjtJQUN2QixvQkFBbUI7SUFFbkIsa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQjtFQW5FSDtJQXNFSSxZQUFXLEVBQ1o7RUF2RUg7SUEwRUksZUM1RGlCLEVEaUVsQjtFQS9FSDtNQTZFTSxpQkFBZ0IsRUFDakI7RUE5RUw7SUFrRkksZUNyRW9CLEVEMEVyQjtFQXZGSDtNQXFGTSxvQkFBbUIsRUFDcEI7RUF0Rkw7SUEwRkksZUM5RXNCLEVEbUZ2QjtFQS9GSDtNQTZGTSxpQkFBZ0IsRUFDakI7RUE5Rkw7SUFrR0ksZUN2RnNCLEVENkZ2QjtFQXhHSDtNQXFHTSxzQkFBcUI7TUFDckIsZ0JDM0ZvQixFRDRGckI7RUF2R0w7SUEyR0ksaUNDN0dtQixFRDhHcEI7RUE1R0g7SUErR0ksZUM5R2lCO0lEK0dqQixnQkFBZTtJQUNmLGtCQUFpQixFQUNsQjtFQWxISDtJQXFISSxlQy9HZTtJRGdIZixnQkFBZTtJQUNmLGtCQUFpQixFQUNsQjtFQXhISDtJQTJISSxlQzFIaUI7SUQySGpCLGdCQUFlO0lBQ2Ysa0JBQWlCLEVBQ2xCO0VBR0g7RUFDRSxxQkFBb0I7RUFDcEIsdUJBQXNCLEVBQ3ZCO0VBRUQ7RUFDRSxtQkFBa0IsRUFDbkI7RUFFRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMtdmlldy9wcm9qZWN0cy12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxlcy9jb21tb24vdmFyaWFibGVzXCI7XHJcblxyXG4ucHJvamVjdHMtdmlldyB7XHJcbiAgcGFkZGluZzogNTJweCA0MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gIC5wYWdlLWhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIGNvbG9yOiAkdGV4dC1tYWluLWNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtcGFnZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1zZWFyY2gtYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG5cclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGNvbG9yOiAjNkM2QzZDO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNUM1QzVDO1xyXG5cclxuICAgICNzZWFyY2hJY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgc3Ryb2tlOiAjOTc5Nzk3O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LXBhbmVsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LXBhbmVsLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodGVzdC1ncmV5O1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgY29sb3I6ICRsaWdodGVyLWdyZXk7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1pdGVtLWhlYWx0aCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IDEyLjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlYXJ0LWljb24ge1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgfVxyXG5cclxuICAuaGVhbHRoLXBvb3Ige1xyXG4gICAgY29sb3I6ICRoZWFsdGgtcG9vcjtcclxuXHJcbiAgICAjaGVhcnRQYXRoIHtcclxuICAgICAgZmlsbDogdXJsKCNwb29yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFsdGgtYXZlcmFnZSB7XHJcbiAgICBjb2xvcjogJGhlYWx0aC1hdmVyYWdlO1xyXG5cclxuICAgICNoZWFydFBhdGgge1xyXG4gICAgICBmaWxsOiB1cmwoI2F2ZXJhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWx0aC12ZXJ5LWdvb2Qge1xyXG4gICAgY29sb3I6ICRoZWFsdGgtdmVyeS1nb29kO1xyXG5cclxuICAgICNoZWFydFBhdGgge1xyXG4gICAgICBmaWxsOiB1cmwoI2dvb2QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWx0aC1leGNlbGxlbnQge1xyXG4gICAgY29sb3I6ICRoZWFsdGgtZXhjZWxsZW50O1xyXG5cclxuICAgICNoZWFydFBhdGgge1xyXG4gICAgICBmaWxsOiB1cmwoI2V4Y2VsbGVudCk7XHJcbiAgICAgIHN0cm9rZTogJGhlYWx0aC1leGNlbGxlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvamVjdC1wYW5lbC1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkbGlnaHRlc3QtZ3JleTtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWl0ZW0tY2xpZW50LCAucHJvamVjdC1pdGVtLXRlYW0ge1xyXG4gICAgY29sb3I6ICR0ZXh0LW1haW4tY29sb3I7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcblxyXG4gIC5wcm9qZWN0LWl0ZW0tbmFtZSB7XHJcbiAgICBjb2xvcjogJHRleHQtYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2plY3QtaXRlbS1hdmctZGVwbG95LCAucHJvamVjdC1pdGVtLWZhaWx1cmUtcmF0ZSwgLnByb2plY3QtaXRlbS10ZWFtLW5wcyB7XHJcbiAgICBjb2xvcjogJHRleHQtbWFpbi1jb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxLjVlbSAxLjdlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50ciA+IHRoIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI4cHg7XHJcbn1cclxuXHJcbiNwcm9qZWN0VmlldyA+IHRhYmxlID4gdGhlYWQgPiB0ciA+IHRoOm50aC1jaGlsZCgzKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0OHB4O1xyXG59XHJcblxyXG5cclxuIiwiJGxpZ2h0ZXN0LWdyZXkgOiNFNkU2RTY7XHJcbiRsaWdodGVyLWdyZXk6ICM2QTZBNkE7XHJcbiRncmV5OiAjNkI2ODY0O1xyXG4kZGFya2VyLWdyZXk6ICM0NTQ1NDU7XHJcblxyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbiRwYWdlLWJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjY7XHJcblxyXG4kdGV4dC1ibHVlOiAjMEQ1Njc0O1xyXG4kdGV4dC1tYWluLWNvbG9yOiAkZGFya2VyLWdyZXk7XHJcblxyXG5cclxuLy9oZWFydCBjb2xvcnM6XHJcbiRoZWFsdGgtZXhjZWxsZW50OiAjMzFCQzg3O1xyXG4kaGVhbHRoLXZlcnktZ29vZDogIzREQzczNjtcclxuJGhlYWx0aC1hdmVyYWdlOiAjREVFQTQyO1xyXG4kaGVhbHRoLXBvb3I6ICNFNDRDNDE7XHJcblxyXG4vL3dvcmsgYnJlYWtkb3duXHJcbiRuZXctZmVhdHVyZXMgOiAjMzZDNzdCO1xyXG4kdGVjaG5pY2FsLWRlYml0czogIzA3OUVEQTtcclxuJHJld29yazogIzU2NjQ3MztcclxuJGJ1Z3M6ICNGRkM5MDc7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/projects-view/projects-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/projects-view/projects-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsViewComponent", function() { return ProjectsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared-services/projects.service */ "./src/app/_shared-services/projects.service.ts");
/* harmony import */ var _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_shared-services/teams.service */ "./src/app/_shared-services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectsViewComponent = /** @class */ (function () {
    function ProjectsViewComponent(_projectsService, _teamsService) {
        this._projectsService = _projectsService;
        this._teamsService = _teamsService;
    }
    ProjectsViewComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsViewComponent.prototype.getProjects = function () {
        var _this = this;
        this._projectsService.getProjects().subscribe(function (data) {
            _this.projects = data;
        }, function (error1) { return console.log(error1); });
    };
    ProjectsViewComponent.prototype.getTeamNPSForProject = function (id) {
        var number = 0;
        this._teamsService.getTeamById(id).subscribe(function (data) {
            number = data.TeamNpsRating;
        }, function (error1) { return console.log(error1); });
        return number;
    };
    ProjectsViewComponent.prototype.getTeamNameForProject = function (id) {
        var teamName = 'Example';
        this._teamsService.getTeamById(id).subscribe(function (data) {
            console.log(data);
            teamName = data.Name;
        }, function (error1) { return console.log(error1); });
        return teamName;
    };
    ProjectsViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-view',
            template: __webpack_require__(/*! ./projects-view.component.html */ "./src/app/components/projects-view/projects-view.component.html"),
            styles: [__webpack_require__(/*! ./projects-view.component.scss */ "./src/app/components/projects-view/projects-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_projects_service__WEBPACK_IMPORTED_MODULE_1__["ProjectsService"], _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"]])
    ], ProjectsViewComponent);
    return ProjectsViewComponent;
}());



/***/ }),

/***/ "./src/app/components/team-view/team-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/team-view/team-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team-view\" id=\"teamView\">\r\n  <a class=\"page-header\">Teams</a>\r\n  <div *ngFor=\"let team of Teams; index as i;\" class=\"content team-panel\">\r\n    <div class=\"column is-three-quarters\">\r\n      <h1 class=\"team-name\">{{team.Name}}</h1>\r\n      <app-deployment-statistics [ProjectId]=\"team.ProjectId\" [TeamNpsRating]=\"team.TeamNpsRating\" ></app-deployment-statistics>\r\n      <app-team-work-breakdown [ProjectId]=\"team.ProjectId\" [TeamWorkBreakdown]=\"TeamWorkBreakdown[i]\"></app-team-work-breakdown>\r\n    </div>\r\n       <app-team-member [Teams]=\"team.Members\" class=\"team-members column is-one-quarter\" [imgClass]=\"'dashboard-img'\" [displayName]=\"true\"></app-team-member>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/team-view/team-view.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/team-view/team-view.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team-view {\n  padding-left: 40px;\n  padding-top: 52px; }\n  .team-view .page-header {\n    height: 38px;\n    width: 90px;\n    color: #454545;\n    font-family: sans-serif;\n    font-size: 28px;\n    font-weight: bold;\n    line-height: 38px; }\n  .team-view .team-panel {\n    margin-right: 40px;\n    display: flex;\n    justify-content: space-between;\n    height: 373px;\n    width: auto;\n    border: 1px solid #EEEEEE;\n    background-color: #FFFFFF;\n    box-shadow: 0 2px 4px 0 rgba(194, 194, 194, 0.5); }\n  .team-view .team-panel .team-name {\n      padding-top: 26px;\n      padding-left: 30px;\n      height: 38px;\n      width: 191px;\n      color: #454545;\n      font-family: sans-serif;\n      font-size: 28px;\n      font-weight: 300;\n      line-height: 38px; }\n  .team-view .team-members {\n    display: grid;\n    grid-template-columns: 100px 100px;\n    grid-gap: 30px;\n    background-color: #FFFFFF;\n    color: #444444;\n    padding-top: 44px;\n    padding-left: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFtLXZpZXcvQzpcXGRldlxcRGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcamFkZS1kaWdpdGFsLWNhcmUtZGVtb1xcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFx0ZWFtLXZpZXdcXHRlYW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFrQjtFQUNsQixrQkFBaUIsRUE2Q2xCO0VBL0NEO0lBS0ksYUFBWTtJQUNaLFlBQVc7SUFDWCxlQUFjO0lBQ2Qsd0JBQXVCO0lBQ3ZCLGdCQUFlO0lBQ2Ysa0JBQWlCO0lBQ2pCLGtCQUFpQixFQUNsQjtFQVpIO0lBZUksbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYiwrQkFBOEI7SUFDOUIsY0FBYTtJQUNiLFlBQVc7SUFDWCwwQkFBeUI7SUFDekIsMEJBQXlCO0lBQ3pCLGlEQUFnRCxFQWFqRDtFQW5DSDtNQXlCTSxrQkFBaUI7TUFDakIsbUJBQWtCO01BQ2xCLGFBQVk7TUFDWixhQUFZO01BQ1osZUFBYztNQUNkLHdCQUF1QjtNQUN2QixnQkFBZTtNQUNmLGlCQUFnQjtNQUNoQixrQkFBaUIsRUFDbEI7RUFsQ0w7SUFzQ0ksY0FBYTtJQUNiLG1DQUFrQztJQUNsQyxlQUFjO0lBQ2QsMEJBQXlCO0lBQ3pCLGVBQWM7SUFDZCxrQkFBaUI7SUFDakIsbUJBQWtCLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFtLXZpZXcvdGVhbS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW0tdmlldyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MnB4O1xyXG5cclxuICAucGFnZS1oZWFkZXIge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICBjb2xvcjogIzQ1NDU0NTtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICB9XHJcblxyXG4gIC50ZWFtLXBhbmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDM3M3B4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRUVFRUVFO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMTk0LCAxOTQsIDE5NCwgMC41KTtcclxuXHJcbiAgICAudGVhbS1uYW1lIHtcclxuICAgICAgcGFkZGluZy10b3A6IDI2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICB3aWR0aDogMTkxcHg7XHJcbiAgICAgIGNvbG9yOiAjNDU0NTQ1O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZWFtLW1lbWJlcnMge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHg7XHJcbiAgICBncmlkLWdhcDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBjb2xvcjogIzQ0NDQ0NDtcclxuICAgIHBhZGRpbmctdG9wOiA0NHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/team-view/team-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/team-view/team-view.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamViewComponent", function() { return TeamViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_team_work_breakdown_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_shared-services/team-work-breakdown.service */ "./src/app/_shared-services/team-work-breakdown.service.ts");
/* harmony import */ var _shared_services_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_shared-services/teams.service */ "./src/app/_shared-services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamViewComponent = /** @class */ (function () {
    function TeamViewComponent(_teamService, _workBreakdownService) {
        this._teamService = _teamService;
        this._workBreakdownService = _workBreakdownService;
    }
    TeamViewComponent.prototype.ngOnInit = function () {
        this.getTeams();
        this.getTeamWorkBreakdown();
    };
    TeamViewComponent.prototype.getTeams = function () {
        var _this = this;
        this._teamService.getTeams().subscribe(function (data) {
            _this.Teams = data;
        }, function (error1) { return console.log(error1); });
    };
    TeamViewComponent.prototype.getTeamWorkBreakdown = function () {
        var _this = this;
        this._workBreakdownService.getTeamWorkBreakdown().subscribe(function (data) {
            _this.TeamWorkBreakdown = data;
        }, function (error1) { return console.log(error1); });
    };
    TeamViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-view',
            template: __webpack_require__(/*! ./team-view.component.html */ "./src/app/components/team-view/team-view.component.html"),
            styles: [__webpack_require__(/*! ./team-view.component.scss */ "./src/app/components/team-view/team-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_teams_service__WEBPACK_IMPORTED_MODULE_2__["TeamsService"], _shared_services_team_work_breakdown_service__WEBPACK_IMPORTED_MODULE_1__["TeamWorkBreakdownService"]])
    ], TeamViewComponent);
    return TeamViewComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\Demo\jade-digital-care-demo\jade-digital-care-demo\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map