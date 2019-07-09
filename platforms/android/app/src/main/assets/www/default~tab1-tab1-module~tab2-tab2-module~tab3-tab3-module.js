(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module"],{

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_group_news_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-group/news-group.component */ "./src/app/components/news-group/news-group.component.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_news_group_news_group_component__WEBPACK_IMPORTED_MODULE_3__["NewsGroupComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_4__["NewsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]],
            exports: [_news_group_news_group_component__WEBPACK_IMPORTED_MODULE_3__["NewsGroupComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/news-group/news-group.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/news-group/news-group.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid fixed>\n  <ion-row>\n    <ion-col *ngFor=\"let article of newsgroup; let i =index\" size=\"12\" size-lg=\"3\" size-md=\"4\" size-sm=\"6\"  size-lg=\"12\">\n      <app-news [article]=\"article\" [index]=\"i\" [isFavorites]=\"isFavorites\" ></app-news>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/components/news-group/news-group.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/news-group/news-group.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1ncm91cC9uZXdzLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/news-group/news-group.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/news-group/news-group.component.ts ***!
  \***************************************************************/
/*! exports provided: NewsGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsGroupComponent", function() { return NewsGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewsGroupComponent = /** @class */ (function () {
    function NewsGroupComponent() {
        this.newsgroup = [];
        this.isFavorites = false;
    }
    NewsGroupComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NewsGroupComponent.prototype, "newsgroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NewsGroupComponent.prototype, "isFavorites", void 0);
    NewsGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-group',
            template: __webpack_require__(/*! ./news-group.component.html */ "./src/app/components/news-group/news-group.component.html"),
            styles: [__webpack_require__(/*! ./news-group.component.scss */ "./src/app/components/news-group/news-group.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewsGroupComponent);
    return NewsGroupComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card color=\"dark\">\n  <ion-card-header>\n    <ion-card-subtitle>\n      <span class=\"text-primary\">{{ index + 1}}. </span>\n      <span class=\"news-sourse-name\">{{ article.source.name }}</span>\n\n      <div class=\"news-more\">\n        <ion-button fill=\"clear\" (click)=\"more()\">\n          <ion-icon slot=\"icon-only\" name=\"md-more\"></ion-icon>\n        </ion-button>\n      </div>\n\n    </ion-card-subtitle>\n    <ion-card-title (click)=\"launch()\">{{ article.title }}</ion-card-title>\n  </ion-card-header>\n\n  <ion-img *ngIf=\"article.urlToImage\" [src]=\"article.urlToImage\"\n    class=\"animated fadeIn slow\"\n   (click)=\"launch()\" ></ion-img>\n\n  <ion-card-content>\n    <p>{{ article.description }}</p>\n  </ion-card-content>\n\n</ion-card>"

/***/ }),

/***/ "./src/app/components/news/news.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-more {\n  font-size: 25px !important;\n  position: absolute;\n  right: -10px;\n  top: -18px; }\n\nion-card {\n  -webkit-margin-start: 5px !important;\n  margin-inline-start: 5px !important;\n  -webkit-margin-end: 5px !important;\n  margin-inline-end: 5px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2FkZW15X2ludGVybi9EZXNrdG9wL0hlYWRsaW5lci9zcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUVYO0VBQ0Msb0NBQW9DO0VBQ3BDLG1DQUFtQztFQUNuQyxrQ0FBa0M7RUFDbEMsaUNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLW1vcmUge1xuXHRmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogLTEwcHg7XG5cdHRvcDogLTE4cHg7XG59XG5pb24tY2FyZCB7XG5cdC13ZWJraXQtbWFyZ2luLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcblx0bWFyZ2luLWlubGluZS1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG5cdC13ZWJraXQtbWFyZ2luLWVuZDogNXB4ICFpbXBvcnRhbnQ7XG5cdG1hcmdpbi1pbmxpbmUtZW5kOiA1cHggIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_data_local_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data-local.service */ "./src/app/services/data-local.service.ts");






var NewsComponent = /** @class */ (function () {
    function NewsComponent(inappbrowser, actionSheetCtrl, socialCtrl, datalocalService) {
        this.inappbrowser = inappbrowser;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialCtrl = socialCtrl;
        this.datalocalService = datalocalService;
    }
    NewsComponent.prototype.ngOnInit = function () { };
    NewsComponent.prototype.launch = function () {
        var browser = this.inappbrowser.create(this.article.url, '_system');
    };
    NewsComponent.prototype.more = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var favoritesAddRem, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isFavorites)
                            favoritesAddRem = {
                                text: 'Remove',
                                icon: 'trash',
                                cssClass: 'action-dark',
                                handler: function () {
                                    console.log('Favorite remove');
                                    try {
                                        _this.datalocalService.favoritesDelete(_this.article);
                                    }
                                    catch (error) { }
                                }
                            };
                        else
                            favoritesAddRem = {
                                text: 'Favorite',
                                icon: 'star',
                                cssClass: 'action-dark',
                                handler: function () {
                                    console.log('Favorite clicked');
                                    try {
                                        _this.datalocalService.favoritesSet(_this.article);
                                    }
                                    catch (error) { }
                                }
                            };
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                buttons: [
                                    {
                                        text: 'Share',
                                        icon: 'share',
                                        cssClass: 'action-dark',
                                        handler: function () {
                                            console.log('Share clicked');
                                            _this.socialCtrl.share(_this.article.title, _this.article.source.name, '', _this.article.url);
                                        }
                                    },
                                    favoritesAddRem,
                                    {
                                        text: 'Cancel',
                                        icon: 'close',
                                        role: 'cancel',
                                        cssClass: 'action-dark',
                                        handler: function () {
                                            console.log('Cancel clicked');
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NewsComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NewsComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NewsComponent.prototype, "isFavorites", void 0);
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/components/news/news.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_2__["InAppBrowser"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"],
            _services_data_local_service__WEBPACK_IMPORTED_MODULE_5__["DataLocalService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/services/data-local.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-local.service.ts ***!
  \************************************************/
/*! exports provided: DataLocalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLocalService", function() { return DataLocalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var DataLocalService = /** @class */ (function () {
    function DataLocalService(storage, toastCtrl) {
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.newsFavorites = [];
        this.newsFavorites = [];
        this.favoritesGet();
    }
    DataLocalService.prototype.favoritesSet = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.newsFavorites) {
                    this.newsFavorites = new Array();
                }
                if (this.newsFavorites.find(function (x) { return x.title === n.title; }))
                    return [2 /*return*/];
                this.newsFavorites.unshift(n);
                this.toastPresent('Saved to your favorites');
                return [2 /*return*/, this.storage.set('favorites', this.newsFavorites)];
            });
        });
    };
    DataLocalService.prototype.favoritesDelete = function (n) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.newsFavorites = this.newsFavorites.filter(function (x) { return x.title != n.title; });
                this.toastPresent('Removed from your favorites');
                return [2 /*return*/, this.storage.set('favorites', this.newsFavorites)];
            });
        });
    };
    DataLocalService.prototype.favoritesGet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var f;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get('favorites')];
                    case 1:
                        f = _a.sent();
                        if (f == null)
                            this.newsFavorites = new Array();
                        this.newsFavorites = f;
                        return [2 /*return*/];
                }
            });
        });
    };
    DataLocalService.prototype.toastPresent = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var t;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({ message: message, duration: 2000 })];
                    case 1:
                        t = _a.sent();
                        t.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DataLocalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
    ], DataLocalService);
    return DataLocalService;
}());



/***/ })

}]);
//# sourceMappingURL=default~tab1-tab1-module~tab2-tab2-module~tab3-tab3-module.js.map