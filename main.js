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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n    margin-top: 1rem;\r\n    width: 80%;\r\n    margin: auto;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n    <app-movie-list></app-movie-list>\n</main>\n<app-footer></app-footer>\n"

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
        this.title = 'HeroloCinema';
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movie-list/movie-list.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./delete-modal/delete-modal.component */ "./src/app/delete-modal/delete-modal.component.ts");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-modal/edit-modal.component */ "./src/app/edit-modal/edit-modal.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pipes_onlyEng_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/onlyEng.pipe */ "./src/app/pipes/onlyEng.pipe.ts");
/* harmony import */ var _pipes_cleanRuntim_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/cleanRuntim.pipe */ "./src/app/pipes/cleanRuntim.pipe.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_6__["MovieListComponent"],
                _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteModalComponent"],
                _pipes_onlyEng_pipe__WEBPACK_IMPORTED_MODULE_14__["OnlyEngPipe"],
                _pipes_cleanRuntim_pipe__WEBPACK_IMPORTED_MODULE_15__["CleanRuntimePipe"],
                _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditModalComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]
            ],
            entryComponents: [_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_10__["DeleteModalComponent"], _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_11__["EditModalComponent"]],
            providers: [
                src_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/delete-modal/delete-modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/delete-modal/delete-modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/delete-modal/delete-modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/delete-modal/delete-modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete Movie</h2>\n<mat-dialog-content>Are you sure you want to delete '{{data.movieName}}'?</mat-dialog-content>\n<mat-dialog-actions>\n    <button mat-button mat-dialog-close>Exit</button>\n    <button mat-button [mat-dialog-close]=\"true\" (click)=\"deleteMovie()\">Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/delete-modal/delete-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/delete-modal/delete-modal.component.ts ***!
  \********************************************************/
/*! exports provided: DeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteModalComponent", function() { return DeleteModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/movies.service */ "./src/services/movies.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DeleteModalComponent = /** @class */ (function () {
    function DeleteModalComponent(dialogRef, data, movieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieService = movieService;
    }
    DeleteModalComponent.prototype.deleteMovie = function () {
        this.movieService.deletePost(this.data.id);
    };
    DeleteModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-modal',
            template: __webpack_require__(/*! ./delete-modal.component.html */ "./src/app/delete-modal/delete-modal.component.html"),
            styles: [__webpack_require__(/*! ./delete-modal.component.css */ "./src/app/delete-modal/delete-modal.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, src_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], DeleteModalComponent);
    return DeleteModalComponent;
}());



/***/ }),

/***/ "./src/app/edit-modal/edit-modal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/edit-modal/edit-modal.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\r\ntextarea {\r\n  width: 100%;\r\n}\r\n\r\na.active{\r\n    background: blue;\r\n}\r\n\r\n.errors{\r\n    font-size: 75%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-modal/edit-modal.component.html":
/*!******************************************************!*\
  !*** ./src/app/edit-modal/edit-modal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n    <h2 *ngIf=\"mode == 'edit'\" mat-dialog-title>Edit Movie</h2>\n    <h2 *ngIf=\"mode == 'create'\" mat-dialog-title>Add Movie</h2>\n\n    <form (submit)=\"onAddMovie(postForm)\" #postForm=\"ngForm\">\n        <mat-dialog-content>\n            <mat-form-field>\n                <input matInput type=\"text\" name=\"title\" [ngModel]=\"movie?.Title\" required minlength=\"2\" placeholder=\"Movie Title\"\n                    #title=\"ngModel\">\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\">\n                    <mat-error class=\"errors\" *ngIf=\"title.errors.required\">Please enter a movie title.</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"movieTite\">This movie title is allready exists</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"title.errors.pattern\">Only english characters are allowed</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"title.errors.minlength\">Title must be at least 2 characters long.</mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" name=\"runtime\" [ngModel]=\"movie?.Runtime\" required placeholder=\"Runtime in minutes\"\n                    #Runtime=\"ngModel\">\n                <div *ngIf=\"Runtime.invalid && (Runtime.dirty || Runtime.touched)\">\n                    <mat-error class=\"errors\" *ngIf=\"Runtime.errors.required\">Please enter a movie runtime in minutes.</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"runtimeError\">Please enter at least one digit [1-9] </mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" pattern='[A-Za-z _.,!\"-()?]*' name=\"genre\" [ngModel]=\"movie?.Genre\"\n                    required minlength=\"2\" placeholder=\"Movie Genre\" #Genre=\"ngModel\">\n                <div *ngIf=\"Genre.invalid && (Genre.dirty || Genre.touched)\">\n                    <mat-error class=\"errors\" *ngIf=\"Genre.errors.required\">Please enter a movie genre.</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"Genre.errors.pattern\">Only english characters are allowed</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"Genre.errors.minlength\">Year must be at least 2 characters long.</mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"text\" pattern='[A-Za-z _.,!\"-]*' name=\"director\" [ngModel]=\"movie?.Director\"\n                    required minlength=\"2\" placeholder=\"Movie Director\" #Director=\"ngModel\">\n                <div *ngIf=\"Director.invalid && (Director.dirty || Director.touched)\">\n                    <mat-error class=\"errors\" *ngIf=\"Director.errors.required\">Please enter a movie director.</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"Director.errors.pattern\">Only english characters are allowed</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"Director.errors.minlength\">Year must be at least 2 characters\n                        long.</mat-error>\n                </div>\n            </mat-form-field>\n\n            <mat-form-field>\n                <input matInput type=\"number\" name=\"year\" [ngModel]=\"movie?.Year\" required placeholder=\"Movie Year\"\n                    #year=\"ngModel\">\n                <div *ngIf=\"year.invalid && (year.dirty || year.touched)\">\n                    <mat-error class=\"errors\" *ngIf=\"year.errors.required\">Please enter a movie year.</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"maxError\">Year can't be above {{currentYear}}</mat-error>\n                    <mat-error class=\"errors\" *ngIf=\"minError\">Year must be at least 1900</mat-error>\n                </div>\n            </mat-form-field>\n            <div *ngIf=\"errorReq\">\n                <mat-form-field>\n                    <mat-error class=\"errors\" >Something got wrong, try again!</mat-error>\n\n                </mat-form-field>\n            </div>\n        </mat-dialog-content>\n        <mat-dialog-actions>\n            <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"postForm.invalid\">Save Movie</button>\n            <button mat-button mat-dialog-close>Exit</button>\n        </mat-dialog-actions>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/edit-modal/edit-modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/edit-modal/edit-modal.component.ts ***!
  \****************************************************/
/*! exports provided: EditModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditModalComponent", function() { return EditModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var src_models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/movie.model */ "./src/models/movie.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var EditModalComponent = /** @class */ (function () {
    function EditModalComponent(dialogRef, data, movieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.movieService = movieService;
        this.mode = 'create';
        this.isLoading = false;
        this.movies = [];
        this.currentYear = new Date().getFullYear();
        this.minError = false;
        this.maxError = false;
        this.movieTite = false;
        this.runtimeError = false;
        this.genreError = false;
    }
    EditModalComponent.prototype.ngOnInit = function () {
        this.movie = this.data["movie"];
        // Checking whether this is a 'create' new movie state or 'edit' movie state
        if (this.movie.id != "-1") {
            this.mode = 'edit';
            this.postId = this.movie.id;
            this.poster = this.movie.Poster;
            this.isLoading = true;
        }
        else if (this.movie.id === "-1") {
            this.mode = 'create';
            this.postId = null;
        }
    };
    // handle form validation and send request to server 
    EditModalComponent.prototype.onAddMovie = function (form) {
        var _this = this;
        var sendReq = this.formValidation(form);
        if (form.value.title && sendReq) {
            var title_1 = this.clean(form.value.title);
            this.movieService.getTitleMovie(title_1).subscribe(function (data) {
                if (data.Error) {
                    if (_this.mode === 'edit') {
                        _this.movieTite = false;
                        _this.movieService.updateMovie(_this.postId, title_1, form.value.runtime, form.value.genre, form.value.year, _this.poster, form.value.director);
                    }
                    else {
                        _this.poster = './assets/images/Placeholder.jpg';
                        _this.postId = _this.guid();
                        _this.movieService.addMovie(_this.postId, title_1, form.value.runtime, form.value.genre, form.value.year, _this.poster, form.value.director);
                    }
                    _this.movieTite = false;
                    _this.reset(form);
                }
                else if (data.Title) {
                    console.log("data : ", data);
                    form.controls['title'].setErrors({ 'incorrect': true });
                    _this.movieTite = true;
                }
            }, function (error) {
                //TODO handle error from server
            });
        }
    };
    // create unique id for new movie
    EditModalComponent.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
    // reset all form/modal variables 
    EditModalComponent.prototype.reset = function (form) {
        var _this = this;
        this.isLoading = true;
        this.maxError = false;
        this.minError = false;
        this.runtimeError = false;
        form.controls['runtime'].setErrors(null);
        form.controls['year'].setErrors(null);
        form.controls['title'].setErrors(null);
        form.resetForm();
        setTimeout(function () { return _this.dialogRef.close(); }, 200);
    };
    // form validation
    EditModalComponent.prototype.formValidation = function (form) {
        if (form.invalid) {
            return false;
        }
        if (form.value.year < 1900) {
            form.controls['year'].setErrors({ 'incorrect': true });
            this.minError = true;
            return false;
        }
        if (form.value.year > this.currentYear) {
            form.controls['year'].setErrors({ 'incorrect': true });
            this.maxError = true;
            return false;
        }
        if (form.value.runtime) {
            var runtime = this.hasNumber(form.value.runtime);
            if (runtime == "") {
                form.controls['runtime'].setErrors({ 'incorrect': true });
                this.runtimeError = true;
                return false;
            }
        }
        return true;
    };
    // handle title 
    EditModalComponent.prototype.clean = function (str) {
        return str.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ");
    };
    // handle runtime 
    EditModalComponent.prototype.hasNumber = function (myString) {
        var a = myString.replace(/\D/g, '');
        return a;
    };
    EditModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-modal',
            template: __webpack_require__(/*! ./edit-modal.component.html */ "./src/app/edit-modal/edit-modal.component.html"),
            styles: [__webpack_require__(/*! ./edit-modal.component.css */ "./src/app/edit-modal/edit-modal.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            src_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"], src_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], EditModalComponent);
    return EditModalComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    bottom: 0;\r\n    color:white;\r\n    background: black;\r\n    height: 2em;\r\n    left: 0;\r\n    position: relative; \r\n    font-size: small;\r\n    width:100%;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n    height: 8%;\r\n\r\n}\r\n\r\n#footer{\r\n    position: inline-block;\r\n    margin: 0;\r\n}\r\n\r\nli{\r\n    list-style: none;\r\n}\r\n\r\n.spacer{\r\n    flex:1 1 auto;\r\n}\r\n\r\n.right{\r\n    width: 48%;\r\n    text-align: right;\r\n}\r\n\r\n.left{\r\n    width: 48%;\r\n}\r\n\r\nul li{\r\n    display: inline-block;\r\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div id=\"footer\">\n        <ul>\n            <li class=\"left\">\n                Hadars1234@gmail.com\n            </li>\n            <span class=\"spacer\"></span>\n            <li class=\"right\">\n                &copy; All rights reserved\n            </li>\n        </ul>\n    </div>\n</body>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Montserrat', sans-serif;\r\n    margin: 0;\r\n    height: 600px;\r\n\r\n}\r\n\r\n.navbar{\r\n    color: whitesmoke;\r\n}\r\n\r\n.btn-outline-dark{\r\n    color: whitesmoke;\r\n    border-color: whitesmoke;\r\n    /* border:; */\r\n}\r\n\r\n.btn-outline-dark:hover{\r\n    background: #ff4081;\r\n    border:white;\r\n}\r\n\r\n#product-overview {\r\n    background: url(\"/assets/images/movies.jpg\");\r\n    width: 100%;\r\n    height: 506px;\r\n    /* height: 564px;\r\n     */\r\n    /* padding: 10px;   \r\n     */\r\n    \r\n}\r\n\r\n.header_title{\r\n    font-size: x-large;\r\n}\r\n\r\n#product-overview h1 {\r\n    color: white;\r\n    font-family: 'Trocchi', sans-serif;\r\n    background: black;\r\n    opacity: 0.69;\r\n    display:inline;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.navbar-right {\r\n    margin-right: 23px;\r\n}\r\n\r\n.navbar-right > li > a{\r\n    color: white importent!;\r\n}\r\n\r\n.create-movie{\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n.main-header {\r\n    width: 100%;\r\n    background: black;\r\n    padding: 8px 16px;\r\n}\r\n\r\n.main-header > div {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.main-header__brand {\r\n    color: #0e4f1f;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <header class=\"main-header\">\n        <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n            <a class=\"navbar-brand\" href=\"#\"><i class=\"material-icons\">\n                    movie\n                </i></a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n                aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                <span class=\"navbar-toggler-icon\"></span>\n                <a href=\"#about\" class=\"create-movie\" (click)=\"onCreate()\">Add Movie</a>\n            </button>\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                <ul class=\"navbar-nav mr-auto\">\n                    <li class=\"nav-item active\">\n                        <a class=\"nav-link header_title\" href=\"#\">Herolo Cinema <span class=\"sr-only\">(current)</span></a>\n                    </li>\n                   \n                </ul>\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li><a href=\"#about\" class=\"create-movie\" (click)=\"onCreate()\">Create Movie</a></li>\n                </ul>\n                <form class=\"form-inline my-2 my-lg-0\">\n                    <input  [(ngModel)]=\"search\" name=\"movie\" ngModel class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n                    <button class=\"btn btn-outline-dark my-2 my-sm-0\" (click)=\"onSearch()\" type=\"submit\">Search</button>\n                </form>\n            </div>\n        </nav>\n    </header>\n\n    <main>\n        <section id=\"product-overview\">\n            <h1>All Movies Info In One Place</h1>\n        </section>\n    </main>\n\n</body>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-modal/edit-modal.component */ "./src/app/edit-modal/edit-modal.component.ts");
/* harmony import */ var src_models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/models/movie.model */ "./src/models/movie.model.ts");
/* harmony import */ var src_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/movies.service */ "./src/services/movies.service.ts");
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
    function HeaderComponent(dialog, movieService) {
        this.dialog = dialog;
        this.movieService = movieService;
        this.movie = new src_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["Movie"]();
        this.search = ' ';
    }
    // open edit modal
    HeaderComponent.prototype.onCreate = function () {
        this.movie.id = '-1';
        this.dialog.open(_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_2__["EditModalComponent"], {
            width: '350px',
            data: { movie: this.movie }
        });
    };
    // initialize the movie list with a new movie list title
    HeaderComponent.prototype.onSearch = function () {
        var name = this.search;
        this.movieService.getMovies(name);
        window.scrollTo({
            top: 500,
            left: 1000,
            behavior: 'smooth'
        });
        this.search = ' ';
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], src_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/movie-list/movie-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    margin-top: 1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n\r\n  body{\r\n      height: 100%;\r\n      width: 70%;\r\n      margin: 0 auto;\r\n  }\r\n\r\n  #title{\r\n    text-align: center;\r\n  }\r\n\r\n  h1{\r\n    color:lightseagreen;\r\n    font-family: 'Trocchi'\r\n  }\r\n\r\n  mat-expansion-panel-header{\r\n    letter-spacing: 0.5px;\r\n    font-weight:bold;\r\n  }\r\n\r\n  .list{\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  .poster{\r\n    height: 20%;\r\n    width: 20%;\r\n    float: right;\r\n    top: 0;\r\n    margin: 0;\r\n    /* margin-right: 45px; */\r\n  }\r\n\r\n  .mat-body{\r\n    height:100%;\r\n  }\r\n\r\n  .p-param{\r\n    width: 75%;\r\n    float: left;\r\n    left: 0;\r\n    text-align: left;\r\n  }\r\n\r\n  mat-expansion-panel{\r\n      margin: auto;\r\n      text-align: center;\r\n  }\r\n\r\n  .mat-expansion-panel-body {\r\n      height: 100%;\r\n    background: steelblue;\r\n}\r\n\r\n  .info-text {\r\n    text-align: center;\r\n  }\r\n\r\n  mat-spinner{\r\n      margin: auto;\r\n  }\r\n\r\n  @media only screen and (max-width : 768px) {\r\n    body{\r\n        height: 100%;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n "

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n\n\n\n\n\n<body>\n    <mat-accordion multi=\"true\" *ngIf=\"movies?.length > 0 && !isLoading\">\n        <img *ngIf=\"notFound && !isLoading\" src=\"/assets/gif/404.gif\">\n        <h1 id=\"title\">Movies List -\n            <small class=\"text-muted\">{{movieName | titlecase }}</small>\n        </h1>\n        <div class=\"list\">\n            <mat-expansion-panel *ngFor=\"let movie of movies\" >\n                <mat-expansion-panel-header>\n                  {{movie.Title | titlecase | onlyEng }}\n                </mat-expansion-panel-header>\n                <div class=\"mat-body\">\n                    <div class=\"poster\">\n                        <img *ngIf=\"movie.Poster !== undefined\" class=\"img-thumbnail\" src={{movie.Poster}}>\n                    </div>\n                    <p class=\"p-param\">\n                        <b>Year :</b> {{movie?.Year}}\n                    </p>\n                    <p class=\"p-param\"><b>Runtimr :</b> {{movie?.Runtime | runtimePipe}}</p>\n                    <p class=\"p-param\"><b>Genre :</b> {{movie?.Genre}}</p>\n                    <p class=\"p-param\"><b>Director :</b> {{movie?.Director}}</p>\n                </div>\n                <mat-action-row>\n                    <a mat-button color=\"primary\" (click)=\"onEdit(movie.id)\">EDIT</a>\n                    <button mat-button color=\"warn\" data-toggle=\"modal\" (click)=\"onDelete(movie.id, movie.Title)\"\n                        data-target=\"#deleteModal\">DELETE</button>\n                </mat-action-row>\n\n            </mat-expansion-panel>\n        </div>\n    </mat-accordion>\n   \n\n    <p class=\"info-text mat-body-1\" *ngIf=\"movies?.length <= 0  && !isLoading\">No movies added, please try search again!</p>\n</body>"

/***/ }),

/***/ "./src/app/movie-list/movie-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-list/movie-list.component.ts ***!
  \****************************************************/
/*! exports provided: MovieListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function() { return MovieListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/movies.service */ "./src/services/movies.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../delete-modal/delete-modal.component */ "./src/app/delete-modal/delete-modal.component.ts");
/* harmony import */ var _edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../edit-modal/edit-modal.component */ "./src/app/edit-modal/edit-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieListComponent = /** @class */ (function () {
    function MovieListComponent(movieService, dialog) {
        this.movieService = movieService;
        this.dialog = dialog;
        this.movies = [];
        this.isLoading = false;
        this.movieName = "harry potter";
        this.notFound = false;
    }
    MovieListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize the movie list
        this.movieService.getMovies(this.movieName);
        this.isLoading = true;
        // get the movie list
        this.movieSub = this.movieService.getMoviesUpdateListener()
            .subscribe(function (movies) {
            _this.isLoading = false;
            _this.notFound = false;
            _this.movies = movies;
        }, function (error) {
            _this.isLoading = false;
            _this.notFound = true;
        });
        // get the search movie title
        this.movieNameSub = this.movieService.getMovieSerchedListener()
            .subscribe(function (name) {
            _this.movieName = name;
        }, function (error) {
            _this.movieName = 'harry potter';
        });
    };
    // open delete modal
    MovieListComponent.prototype.onDelete = function (id, movieName) {
        this.dialog.open(_delete_modal_delete_modal_component__WEBPACK_IMPORTED_MODULE_3__["DeleteModalComponent"], {
            width: '350px',
            data: { id: id, movieName: movieName }
        });
    };
    // open edit modal
    MovieListComponent.prototype.onEdit = function (id) {
        var index = this.movies.findIndex(function (m) { return m.id === id; });
        var movie = this.movies[index];
        this.dialog.open(_edit_modal_edit_modal_component__WEBPACK_IMPORTED_MODULE_4__["EditModalComponent"], {
            width: '350px',
            data: { movie: movie }
        });
    };
    // unsubscribe from Observable
    MovieListComponent.prototype.ngOnDestroy = function () {
        this.movieSub.unsubscribe();
        this.movieNameSub.unsubscribe();
    };
    MovieListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-list',
            template: __webpack_require__(/*! ./movie-list.component.html */ "./src/app/movie-list/movie-list.component.html"),
            styles: [__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movie-list/movie-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_services_movies_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], MovieListComponent);
    return MovieListComponent;
}());



/***/ }),

/***/ "./src/app/pipes/cleanRuntim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/cleanRuntim.pipe.ts ***!
  \*******************************************/
/*! exports provided: CleanRuntimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanRuntimePipe", function() { return CleanRuntimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CleanRuntimePipe = /** @class */ (function () {
    function CleanRuntimePipe() {
    }
    CleanRuntimePipe.prototype.transform = function (word) {
        return word ? word.replace(/\D/g, '') + ' minutes' : word;
        //     if (word == "") {
        //         return "please enter runtime"
        //     }
        //     else {
        //         word = word.replace(/\D/g, '');
        //     }
        //     return word + " minutes";
        // }
    };
    CleanRuntimePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'runtimePipe' })
    ], CleanRuntimePipe);
    return CleanRuntimePipe;
}());



/***/ }),

/***/ "./src/app/pipes/onlyEng.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/onlyEng.pipe.ts ***!
  \***************************************/
/*! exports provided: OnlyEngPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyEngPipe", function() { return OnlyEngPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OnlyEngPipe = /** @class */ (function () {
    function OnlyEngPipe() {
    }
    OnlyEngPipe.prototype.transform = function (word) {
        // return word = word.replace(/[^a-zA-Z ]/g, "");
        word = word.replace(/[^0-9a-z-A-Z ]/g, "").replace(/ +/, " ");
        return word;
    };
    OnlyEngPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'onlyEng' })
    ], OnlyEngPipe);
    return OnlyEngPipe;
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

/***/ "./src/models/movie.model.ts":
/*!***********************************!*\
  !*** ./src/models/movie.model.ts ***!
  \***********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(id, Title, Year, Runtime, Genre, Director, Poster) {
        if (id === void 0) { id = null; }
        if (Title === void 0) { Title = null; }
        if (Year === void 0) { Year = null; }
        if (Runtime === void 0) { Runtime = null; }
        if (Genre === void 0) { Genre = null; }
        if (Director === void 0) { Director = null; }
        if (Poster === void 0) { Poster = './assets/images/Placeholder.jpg'; }
        this.id = id;
        this.Title = Title;
        this.Year = Year;
        this.Runtime = Runtime;
        this.Genre = Genre;
        this.Director = Director;
        this.Poster = Poster;
    }
    return Movie;
}());



/***/ }),

/***/ "./src/services/movies.service.ts":
/*!****************************************!*\
  !*** ./src/services/movies.service.ts ***!
  \****************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.movies = [];
        this.moviesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.movieSearched = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    MoviesService.prototype.getMovies = function (movieName) {
        var _this = this;
        movieName = movieName.trim();
        this.movieSearched.next(movieName);
        this.http
            .get("https://www.omdbapi.com/?type=movie&r=json&s=" + movieName + "&page=1&apikey=c60cf6c7").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data.Search.map(function (data) {
                return {
                    Year: data.Year,
                    Title: data.Title,
                    id: data.imdbID,
                    Poster: data.Poster
                };
            });
        }))
            .subscribe(function (movieData) {
            if (movieData != null) {
                movieData = _this.handleMovieList(movieData);
                _this.movies = movieData;
                _this.moviesUpdated.next(_this.movies.slice());
            }
        }, function (error) {
            _this.movieSearched.next('');
            _this.movies = [];
            _this.moviesUpdated.next(_this.movies.slice());
        });
    };
    MoviesService.prototype.getMoviesUpdateListener = function () {
        return this.moviesUpdated.asObservable();
    };
    MoviesService.prototype.getMovieSerchedListener = function () {
        return this.movieSearched.asObservable();
    };
    MoviesService.prototype.deletePost = function (id) {
        var updatedMovies = this.movies.filter(function (movie) { return movie.id !== id; });
        this.movies = updatedMovies;
        this.moviesUpdated.next(this.movies.slice());
    };
    MoviesService.prototype.getMovie = function (id) {
        return this.http.get("https://www.omdbapi.com/?type=movie&r=json&i=" + id + "&apikey=c60cf6c7");
    };
    MoviesService.prototype.updateMovie = function (postId, title, runtime, genre, year, poster, director) {
        var movie = { id: postId, Title: title, Year: year, Runtime: runtime, Genre: genre, Director: director, Poster: poster };
        var updateMovies = this.movies.slice();
        var oldMovieIndex = updateMovies.findIndex(function (p) { return p.id === movie.id; });
        updateMovies[oldMovieIndex] = movie;
        this.movies = updateMovies;
        this.moviesUpdated.next(this.movies.slice());
    };
    MoviesService.prototype.getTitleMovie = function (title) {
        title = title.trim();
        return this.http.get("https://www.omdbapi.com/?type=movie&r=json&t=" + title + "&apikey=c60cf6c7");
    };
    MoviesService.prototype.addMovie = function (postId, title, runtime, genre, year, poster, director) {
        var movie = { id: postId, Title: title, Year: year, Runtime: runtime, Genre: genre, Director: director, Poster: poster };
        this.movies.push(movie);
        this.moviesUpdated.next(this.movies.slice());
    };
    MoviesService.prototype.handlePoster = function (link) {
        link.forEach(function (keys) {
            if (keys.Poster == null || keys.Poster == undefined || keys.Poster == '' || keys.Poster == 'N/A') {
                keys.Poster = "./assets/images/Placeholder.jpg";
            }
        });
    };
    MoviesService.prototype.handleMovieList = function (movieList) {
        this.handlePoster(movieList);
        var _loop_1 = function (i) {
            this_1.getMovie(movieList[i].id).subscribe(function (data) {
                movieList[i].Runtime = data.Runtime,
                    movieList[i].Genre = data.Genre,
                    movieList[i].Director = data.Director;
            });
        };
        var this_1 = this;
        for (var i in movieList) {
            _loop_1(i);
        }
        return movieList;
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Hadar\HeroloCinema\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map