webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_email_login_email__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_of_service_terms_of_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthPage = /** @class */ (function () {
    function AuthPage(navCtrl, auth, platform) {
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.platform = platform;
    }
    AuthPage.prototype.ngOnInit = function () {
        console.log('AuthPage..');
    };
    AuthPage.prototype.openSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    AuthPage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_email_login_email__["a" /* LoginEmailPage */]);
    };
    AuthPage.prototype.openTermsOfService = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
    };
    AuthPage.prototype.loginUserWithGoogle = function () {
        var _this = this;
        this.auth.loginWithGoogle().subscribe(function (data) {
            console.log('log in with Google');
            console.log(data);
            if (_this.platform.is('cordova')) {
                _this.auth.user = {
                    name: data.displayName,
                    image: data.imageUrl,
                    email: data.email,
                    provider: 'google'
                };
            }
            else {
                _this.auth.user = {
                    name: data.displayName,
                    image: data.photoURL,
                    email: data.email,
                    provider: 'google'
                };
            }
            console.log(_this.auth.user);
            console.log('setting tabs page');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__about_about__["a" /* AboutPage */]);
        }, function (err) {
            _this.error = err;
        });
    };
    AuthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/home/home.html"*/'<ion-content class="auth-home">\n  <div class="logo">\n    <div class="logo-icon">\n      PARTY GAMES\n    </div>\n  </div>\n\n  <button ion-button block class="facebook-btn" (click)="loginUserWithFacebook()">\n    <ion-icon name="logo-facebook"></ion-icon>\n    &nbsp;Log In with Facebook\n  </button>\n\n  <button ion-button block class="google-btn" (click)="loginUserWithGoogle()">\n    <ion-icon name="logo-google"></ion-icon>\n    &nbsp;Log In with Google\n  </button>\n\n  <button ion-button color="light" class="sign-up-btn" (click)="openSignUpPage()">Sign Up</button>\n  <button ion-button color="light" class="log-in-btn" (click)="openLoginPage()">Log In</button>\n\n  <div padding class="error" *ngIf="error">\n    <p>{{error}}</p>\n  </div>\n\n  <div class="terms-of-use-txt">\n    By Signing up you agree to the\n    <b (click)="openTermsOfService()">Terms of Service</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/home/home.html"*/,
            selector: 'auth-home',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Platform */]])
    ], AuthPage);
    return AuthPage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginEmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginEmailPage = /** @class */ (function () {
    function LoginEmailPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.form = {
            email: '',
            password: ''
        };
    }
    LoginEmailPage.prototype.openForgotPasswordPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginEmailPage.prototype.openSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    LoginEmailPage.prototype.login = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
    };
    LoginEmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/login-email/login-email.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Log In with Email\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-email">\n  <ion-row>\n    <div padding class="forgot-password-txt" (click)="openForgotPasswordPage()">\n      Forgot Password\n    </div>\n    <div padding class="sign-up-txt" (click)="openSignUpPage()">\n      Sign Up\n    </div>\n  </ion-row>\n\n  <form (ngSubmit)="login()" #loginForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Senha" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!loginForm.form.valid"\n      class="log-in-btn">Log In\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/login-email/login-email.html"*/,
            selector: 'login-email',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
    ], LoginEmailPage);
    return LoginEmailPage;
}());

//# sourceMappingURL=login-email.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataProvider = /** @class */ (function () {
    function DataProvider(afDb) {
        this.afDb = afDb;
    }
    DataProvider.prototype.push = function (path, data) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afDb.list(path).push(data).then(function (firebaseNewData) {
                // Return the uid created
                var newData = firebaseNewData;
                observer.next(newData.path.o[newData.path.o.length - 1]);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    DataProvider.prototype.update = function (path, data) {
        this.afDb.object(path).update(data);
    };
    DataProvider.prototype.list = function (path) {
        return this.afDb.list(path).valueChanges();
    };
    DataProvider.prototype.object = function (path) {
        return this.afDb.object(path).valueChanges();
    };
    DataProvider.prototype.remove = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afDb.object(path).remove().then(function (data) {
                observer.next();
            }, function (error) {
                observer.error(error);
            });
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_email_login_email__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.form = {
            email: '',
            password: ''
        };
    }
    SignUpPage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_email_login_email__["a" /* LoginEmailPage */]);
    };
    SignUpPage.prototype.register = function () {
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/sign-up/sign-up.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sign Up with Email\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="sign-up">\n  <div padding class="log-in-txt" (click)="openLoginPage()">\n    Log In\n  </div>\n\n  <form (ngSubmit)="register()" #signUpForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Senha" [(ngModel)]="form.password" name="password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!signUpForm.form.valid"\n      class="sign-up-btn">Sign Up\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/sign-up/sign-up.html"*/,
            selector: 'sign-up',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gameEnded_gameEnded__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__join_join__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, afDatabase, auth) {
        this.navCtrl = navCtrl;
        this.afDatabase = afDatabase;
        this.auth = auth;
        this.hostLabelColor = 'primary';
        this.isHosting = true;
    }
    AboutPage.prototype.join = function () {
        this.isHosting = false;
    };
    AboutPage.prototype.checkGameEnded = function (mode) {
        var _this = this;
        if (this.hostEmailAddress != null && this.hostEmailAddress !== undefined) {
            var gameKey = this.hostEmailAddress.replace('@', 'at');
            gameKey = gameKey.replace('.', 'dot');
            gameKey = gameKey + 'Game';
            this.isGameEnded$ = this.afDatabase.object(gameKey + '/isGameEnded').valueChanges()
                .subscribe(function (isGameEnded) {
                _this.isGameEnded = isGameEnded;
                _this.showGamePage(mode);
            });
        }
        else {
            this.blinkHostLabel();
        }
    };
    AboutPage.prototype.blinkHostLabel = function () {
        var _this = this;
        this.hostLabelColor = 'danger';
        var blink = setInterval(function () {
            if (_this.hostLabelColor == 'primary') {
                _this.hostLabelColor = 'danger';
            }
            else {
                _this.hostLabelColor = 'primary';
            }
        }, 175);
        setTimeout(function () {
            clearInterval(blink);
        }, 1100);
    };
    AboutPage.prototype.hostMode = function (mode) {
        if (!mode) {
            this.checkGameEnded(mode);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__join_join__["a" /* JoinPage */], { data: mode, hostEmail: this.auth.user.email });
        }
    };
    AboutPage.prototype.showGamePage = function (mode) {
        if (!this.isGameEnded) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__join_join__["a" /* JoinPage */], {
                data: mode,
                hostEmail: this.hostEmailAddress
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__gameEnded_gameEnded__["a" /* GameEndedPage */], {
                data: mode,
                hostEmail: this.hostEmailAddress
            });
        }
        this.isGameEnded$.unsubscribe();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/about/about.html"*/'<ion-content padding>\n\n  <button *ngIf="isHosting" ion-button block class="btn" (click)="join()">\n    &nbsp;Join\n  </button>\n  <ion-item *ngIf="!isHosting">\n    <ion-label color="{{hostLabelColor}}" stacked>Host Email address</ion-label>\n    <ion-input type="email" [(ngModel)]="hostEmailAddress" \n    [ngModelOptions]="{standalone: true}" placeholder="Email address"></ion-input>\n  </ion-item>\n  <ng-container *ngIf="!isHosting">\n      <button color="dark" ion-button block class="btn" (click)="hostMode(false)">\n          &nbsp;Join\n        </button>\n  </ng-container>\n\n  <button *ngIf="isHosting" color="dark" ion-button block class="btn" (click)="hostMode(true)">\n    &nbsp;Host New Game\n  </button>\n\n</ion-content>'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth__["a" /* AuthProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, auth, afDatabase, navParams, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.auth = auth;
        this.afDatabase = afDatabase;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.currentQuestionIdVal = -1;
        this.olProps = [true, true, true];
        this.chosenColor = ['', '', ''];
        this.disabledProp = false;
        this.optionSelectedCount = [0, 0, 0];
        this.displaySelectionCount = false;
        this.tick = 0;
        this.isLate = false;
        this.isEliminated = false;
        this.isQuestionEnded = false;
        this.isGameEnded = false;
        this.userInfo = auth.user;
        // console.log(auth.user);
        this.isHost = this.navParams.get('data');
        this.gameKey = this.navParams.get('gameKey');
        if (this.userInfo !== null && this.userInfo !== undefined) {
            this.afDatabase.object(this.gameKey + '/isGameEnded')
                .valueChanges().subscribe(function (isGameEnded) {
                _this.isGameEnded = isGameEnded;
            });
            this.afDatabase.object(this.gameKey + '/winner')
                .valueChanges().subscribe(function (winner) {
                _this.winner = winner;
            });
            this.currentQuestionId = this.afDatabase.object(this.gameKey + '/currentQuestionId').valueChanges();
            this.currentQuestionId.subscribe((function (cv) {
                if (cv != _this.currentQuestionIdVal) {
                    _this.currentQuestionIdVal = cv;
                    _this.disabledProp = false;
                    _this.displaySelectionCount = false;
                    _this.isQuestionEnded = false;
                    _this.chosenOption = -1;
                    _this.olProps = [true, true, true];
                    _this.optionSelectedCount = [0, 0, 0];
                    _this.chosenColor = ['', '', ''];
                    if (_this.isHost) {
                        _this.afDatabase.object(_this.gameKey + '/isQuestionEnded').set(false);
                    }
                    _this.currentQuestion = _this.afDatabase.object('questions/' + _this.currentQuestionIdVal).valueChanges();
                    _this.currentOptions = _this.afDatabase.list('options/' + _this.currentQuestionIdVal).valueChanges();
                    _this.afDatabase.object('answers/' + _this.currentQuestionIdVal).valueChanges()
                        .subscribe(function (ans) {
                        _this.answer = ans;
                    });
                    if (_this.currentQuestionIdVal > 0) {
                        if (_this.currentQuestionIdVal == 1) {
                            _this.isEliminated = false;
                            _this.afDatabase.object(_this.gameKey + '/members/' + _this.userInfo.uid + '/isEliminated').set(false);
                        }
                        _this.tick = 0;
                        var tickIncrement = setInterval(function () {
                            if (_this.tick < 10) {
                                _this.tick++;
                                if (_this.tick == 10) {
                                    _this.disabledProp = true;
                                }
                            }
                            else {
                                clearInterval(tickIncrement);
                            }
                        }, 1000);
                        // set question ended flag to true after 10 seconds.
                        if (_this.isHost) {
                            setTimeout(function () {
                                _this.afDatabase.object(_this.gameKey + '/isQuestionEnded').set(true);
                            }, 10000);
                        }
                        _this.afDatabase.object(_this.gameKey + '/isQuestionEnded')
                            .valueChanges().subscribe(function (qEnded) {
                            _this.isQuestionEnded = qEnded;
                        });
                        // take 1 second extra time to show the results for any latency factor.
                        setTimeout(function () {
                            _this.countAnswers();
                            _this.setElimination();
                        }, 11000);
                    }
                }
            }));
            // this.setIsLate();
            this.afDatabase.object(this.gameKey + '/members/').snapshotChanges()
                .subscribe(function (gameAnswers) {
                if (gameAnswers != null && gameAnswers != undefined) {
                    _this.gameAnswers = gameAnswers;
                }
            });
        }
    }
    HomePage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__auth_home_home__["a" /* AuthPage */]);
    };
    HomePage.prototype.setElimination = function () {
        if (this.chosenOption >= 0) {
            if ((this.answer - 1) == this.chosenOption) {
                this.chosenColor[this.chosenOption] = 'secondary';
                if (this.optionSelectedCount[this.answer - 1] == 1) {
                    this.afDatabase.object(this.gameKey + '/winner').set(this.userInfo.email);
                    this.afDatabase.object(this.gameKey + '/isGameEnded').set(true);
                    this.isGameEnded = true;
                }
            }
            else {
                this.chosenColor[this.chosenOption] = 'danger';
                this.isEliminated = true;
                this.afDatabase.object(this.gameKey + '/members/' + this.userInfo.uid + '/isEliminated').set(true);
            }
        }
        else if (!this.isEliminated) {
            this.isEliminated = true;
            this.afDatabase.object(this.gameKey + '/members/' + this.userInfo.uid + '/isEliminated').set(true);
        }
        // If everyone is eliminated
        if (this.optionSelectedCount[this.answer - 1] == 0 && this.isHost) {
            this.afDatabase.object(this.gameKey + '/winner').set('No Winners');
            this.afDatabase.object(this.gameKey + '/isGameEnded').set(true);
        }
        this.displaySelectionCount = true;
    };
    HomePage.prototype.countAnswers = function () {
        var _this = this;
        if (this.isQuestionEnded != null && this.isQuestionEnded) {
            console.log('countingAnswers');
            var gameAnswers = this.gameAnswers.payload.val();
            this.totalPlayers = this.gameAnswers.payload.numChildren();
            Object.keys(gameAnswers).forEach(function (key) {
                if (key !== 'isLate' && key !== 'winner' && key !== 'isEliminated') {
                    _this.optionSelectedCount[(gameAnswers[key][_this.currentQuestionIdVal] - 1)] += 1;
                }
            });
        }
    };
    HomePage.prototype.setIsLate = function () {
        var _this = this;
        if (!this.isHost) {
            var isLate$ = this.afDatabase.object(this.gameKey + '/members/' + this.userInfo.uid + '/isLate')
                .valueChanges();
            isLate$.subscribe(function (_isLateLocal) {
                if (_isLateLocal === null || _isLateLocal === undefined) {
                    if (_this.currentQuestionIdVal > 1) {
                        _this.afDatabase.object(_this.gameKey + '/members/' + _this.userInfo.uid + '/isLate').set(true);
                        _this.isLate = true;
                        _this.presentAlert('Sorry you are late! You may continue watching the game.');
                    }
                    else {
                        _this.afDatabase.object(_this.gameKey + '/members/' + _this.userInfo.uid + '/isLate').set(false);
                        _this.isLate = false;
                    }
                }
            });
        }
    };
    HomePage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.chosen = function (i, currentQ) {
        this.olProps[i] = false;
        this.chosenOption = i;
        this.disabledProp = true;
        this.afDatabase.object(this.gameKey + '/members/' + this.userInfo.uid + '/' + currentQ).set((i + 1));
    };
    HomePage.prototype.nextQuestion = function () {
        if (this.isHost) {
            this.afDatabase.object(this.gameKey + '/currentQuestionId')
                .set(this.currentQuestionIdVal + 1);
        }
        ;
    };
    HomePage.DELAY = 10000;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/home/home.html"*/'<ion-content padding>\n    <ion-item><!-- here -->\n      <ion-avatar item-left>\n          <img [src]="userInfo?.image" class="img img-circle"/>\n      </ion-avatar>\n      {{userInfo.email}}\n      <h4 [class.hide]="!isEliminated" style="float:right;background-color:red;color:white;">ELIMINATED</h4>\n  </ion-item>\n  <ion-item text-center text-wrap no-lines>\n    <h1>{{ (currentQuestion | async) }}</h1>\n  </ion-item>  \n    <ion-list>\n      <ng-container *ngFor="let option of currentOptions | async;let i = index">\n        <button id="{{option}}" ion-button large round \n        [outline]="olProps[i]" \n        [color] = "chosenColor[i]"\n        [disabled]="disabledProp || isLate || isEliminated" style="width:100%" \n        (click)="chosen(i, currentQuestionIdVal);">\n          {{option}} <span [class.hide]="!displaySelectionCount">\n            &nbsp;&nbsp;({{this.optionSelectedCount[i]}})</span></button>\n      </ng-container>\n    </ion-list>\n    <div text-center *ngIf="currentQuestionIdVal > 0">\n      <progress value="{{tick}}" max="10" id="progressBar"></progress>\n    </div>\n    <ng-container *ngIf="isHost">\n        <div text-center *ngIf="currentQuestionIdVal > 0 && !isGameEnded">\n          <button ion-button round (click)="nextQuestion()" [disabled]="!displaySelectionCount">Next Question</button>\n        </div>\n        <div text-center *ngIf="currentQuestionIdVal == 0">\n            <button *ngIf="isHost" color="danger" ion-button block class="btn" (click)="nextQuestion()">\n                &nbsp;Begin Q1\n              </button>\n        </div>\n    </ng-container>\n    <h1 *ngIf="!isHost && currentQuestionIdVal == 0">Be Ready for Q1.</h1>\n\n      <div [class.hide]="!isGameEnded">\n        We have a winner: {{winner}}\n      </div>\n\n  <!--<button (click)="logout()" ion-button>Logout</button>-->\n</ion-content>'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(loadingCtrl, auth) {
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.form = {
            email: ''
        };
    }
    ForgotPasswordPage.prototype.reset = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        this.auth.sendPasswordResetEmail(this.form.email).subscribe(function (data) {
            _this.error = 'Soon you will receive an email to change your password.';
            loading.dismiss();
        }, function (error) {
            _this.error = error;
            loading.dismiss();
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/forgot-password/forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reset your password\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forgot-password">\n  <div padding class="reset-password-txt">\n    Please enter your email address and we\'ll send you an email to reset your password.\n  </div>\n\n  <form (ngSubmit)="reset()" #resetForm="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-input type="text" placeholder="E-mail" [(ngModel)]="form.email" name="email"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button block [disabled]="!resetForm.form.valid" class="reset-password-btn">\n      Reset your password\n    </button>\n\n    <div padding class="error" *ngIf="error">\n      <p>{{error}}</p>\n    </div>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/auth/forgot-password/forgot-password.html"*/,
            selector: 'forgot-password',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_auth__["a" /* AuthProvider */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsOfServicePage = /** @class */ (function () {
    function TermsOfServicePage() {
    }
    TermsOfServicePage.prototype.ngOnInit = function () {
    };
    TermsOfServicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Terms Of Service\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="terms-of-service">\n  Terms of Service\n</ion-content>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/terms-of-service/terms-of-service.html"*/,
            selector: 'terms-of-service',
        }),
        __metadata("design:paramtypes", [])
    ], TermsOfServicePage);
    return TermsOfServicePage;
}());

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameEndedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameEndedPage = /** @class */ (function () {
    function GameEndedPage(navCtrl, navParams, afDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.setupGameKey();
    }
    GameEndedPage.prototype.setupGameKey = function () {
        this.hostEmailAddress = this.navParams.get('hostEmail');
        this.gameKey = this.hostEmailAddress.replace('@', 'at');
        this.gameKey = this.gameKey.replace('.', 'dot');
        this.gameKey = this.gameKey + 'Game';
    };
    GameEndedPage.prototype.getGameEnded = function () {
        var _this = this;
        this.afDatabase.object(this.gameKey + '/isGameEnded').valueChanges()
            .subscribe(function (isGend) {
            _this.isGameEnded = isGend;
            if (_this.isGameEnded) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                    data: false,
                    hostEmail: _this.hostEmailAddress
                });
            }
        });
    };
    GameEndedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-ended',template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/gameEnded/gameEnded.html"*/'<ion-content padding>\n<h2>No Active Games</h2>\n<button ion-button>Notify Next Game</button>\n</ion-content>'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/gameEnded/gameEnded.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], GameEndedPage);
    return GameEndedPage;
}());

//# sourceMappingURL=gameEnded.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JoinPage = /** @class */ (function () {
    function JoinPage(navCtrl, navParams, afDatabase, alertCtrl, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        console.log(auth.user);
        this.mode = this.navParams.get('data');
        this.hostEmailAddress = this.navParams.get('hostEmail');
        var gameKey = this.hostEmailAddress.replace('@', 'at');
        gameKey = gameKey.replace('.', 'dot');
        gameKey = gameKey + 'Game';
        this.gameKey = gameKey;
        // Game has begun so clear out all the values and set question = 0
        console.log('this.mode under join.ts: ' + this.mode);
        if (this.mode) {
            this.afDatabase.object(this.gameKey).set('');
            this.afDatabase.object(this.gameKey + '/currentQuestionId').set(0);
            this.afDatabase.object(this.gameKey + '/isGameEnded').set(false);
        }
        else {
            this.afDatabase.object(this.gameKey + '/currentQuestionId').valueChanges()
                .subscribe(function (_questionId) {
                _this.currentQuestionId = _questionId;
            });
            this.setIsLate();
            this.showHomePage();
        }
        this.members$ = this.afDatabase.object(gameKey + '/members').snapshotChanges()
            .subscribe(function (_members) {
            if (_members != null && _members != undefined) {
                _this.members = [];
                var memberVals = _members.payload.val();
                if (memberVals != null && memberVals != undefined) {
                    Object.keys(memberVals).forEach(function (key) {
                        console.log(key);
                        var imageUrl = _this.afDatabase.object('users/' + key).valueChanges()
                            .subscribe(function (user) {
                            _this.members.push({ 'image': user.image, 'name': user.name });
                        });
                    });
                }
            }
        });
    }
    JoinPage.prototype.startGame = function () {
        this.afDatabase.object(this.gameKey + '/isGameStarted').set(true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
            data: true,
            hostEmail: this.hostEmailAddress,
            gameKey: this.gameKey
        });
        this.members$.unsubscribe();
    };
    JoinPage.prototype.showHomePage = function () {
        var _this = this;
        this.afDatabase.object(this.gameKey + '/isGameStarted').valueChanges()
            .subscribe(function (_isGameStarted) {
            if (_isGameStarted) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {
                    data: false,
                    hostEmail: _this.hostEmailAddress,
                    gameKey: _this.gameKey
                });
            }
        });
    };
    JoinPage.prototype.setIsLate = function () {
        var _this = this;
        if (!this.mode) {
            var isLate$ = this.afDatabase.object(this.gameKey + '/members/' + this.auth.user.uid + '/isLate')
                .valueChanges();
            isLate$.subscribe(function (_isLateLocal) {
                if (_isLateLocal === null || _isLateLocal === undefined) {
                    if (_this.currentQuestionId > 1) {
                        _this.afDatabase.object(_this.gameKey + '/members/' + _this.auth.user.uid + '/isLate').set(true);
                        _this.presentAlert('Sorry you are late! You may continue watching the game.');
                    }
                    else {
                        _this.afDatabase.object(_this.gameKey + '/members/' + _this.auth.user.uid + '/isLate').set(false);
                    }
                }
            });
        }
    };
    JoinPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            subTitle: message,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    JoinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-join',template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/join/join.html"*/'<ion-content padding>\n\n  <button *ngIf="mode" color="danger" ion-button block class="btn" (click)="startGame()">\n    &nbsp;Start Game\n  </button>\n    <p text-center>{{members?.length}} Players Online</p>\n    <!-- <ion-row>\n        <ion-item no-lines>\n        <ion-scroll scrollX="true" scroll-avatar>\n            <ion-avatar>\n                <div *ngFor="let member of members">\n              <img src="{{member.image}}" class="scroll-item"/>\n              <label>{{member.name}}</label>\n              </div>\n            </ion-avatar>\n        </ion-scroll>\n        </ion-item>\n      </ion-row> -->\n      <ion-scroll scrollY="true">\n      <ion-list>\n        <ion-item no-lines *ngFor="let member of members">\n            <ion-avatar item-start>\n              <img src="{{member.image}}">\n            </ion-avatar>\n            <label>{{member.name}}</label>\n        </ion-item>\n      </ion-list>\n    </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/pages/join/join.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth__["a" /* AuthProvider */]])
    ], JoinPage);
    return JoinPage;
}());

//# sourceMappingURL=join.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_forgot_password_forgot_password__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_auth_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_auth_login_email_login_email__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_up_sign_up__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_terms_of_service_terms_of_service__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_about_about__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_gameEnded_gameEnded__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_join_join__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// Providers








var firebaseConfig = {
    apiKey: "AIzaSyB_pdGDEb7OuerjJT2gffoIOstB-Yv9HLY",
    authDomain: "socal-73dca.firebaseapp.com",
    databaseURL: "https://socal-73dca.firebaseio.com",
    storageBucket: "socal-73dca.appspot.com",
    messagingSenderId: "333331279538"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_auth_home_home__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_auth_login_email_login_email__["a" /* LoginEmailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_gameEnded_gameEnded__["a" /* GameEndedPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_join_join__["a" /* JoinPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_auth_home_home__["a" /* AuthPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_auth_login_email_login_email__["a" /* LoginEmailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_auth_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_gameEnded_gameEnded__["a" /* GameEndedPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_join_join__["a" /* JoinPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_google_plus__["a" /* GooglePlus */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["c" /* AngularFireDatabaseProvider */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["c" /* AngularFireAuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_home_home__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, data, auth) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */];
        this.isAppInitialized = false;
        platform.ready().then(function () {
            _this.user = {
                image: ''
            };
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.auth.getUserData().subscribe(function (data) {
                if (!_this.isAppInitialized) {
                    _this.isAppInitialized = true;
                }
                _this.user = data;
            }, function (err) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_home_home__["a" /* AuthPage */];
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/itwasnoteasy/Desktop/mobileWebApps/triv2/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Providers


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, data, afDb, platform, googlePlus) {
        this.afAuth = afAuth;
        this.data = data;
        this.afDb = afDb;
        this.platform = platform;
        this.googlePlus = googlePlus;
    }
    AuthProvider.prototype.getUserData = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.afAuth.authState.subscribe(function (authData) {
                if (authData) {
                    _this.data.object('users/' + authData.uid).subscribe(function (userData) {
                        _this.user = userData;
                        observer.next(userData);
                    });
                }
                else {
                    observer.error();
                }
            });
        });
    };
    AuthProvider.prototype.loginWithGoogle = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (_this.platform.is('cordova')) {
                _this.googlePlus.login({
                    'webClientId': '198079995165-2l3qufrukqbt59595uuiu5lnfll6meln.apps.googleusercontent.com'
                }).then(function (googleData) {
                    console.log(googleData);
                    _this.afDb.list('users').update(googleData.userId, {
                        uid: googleData.userId,
                        name: googleData.displayName,
                        email: googleData.email,
                        provider: 'google',
                        image: googleData.imageUrl
                    });
                    observer.next(googleData);
                }, function (error) {
                    observer.error(error);
                });
            }
            else {
                var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth.GoogleAuthProvider();
                _this.afAuth.auth.signInWithPopup(provider).then(function (googleData) {
                    _this.afDb.list('users').update(googleData.user.uid, {
                        uid: googleData.user.uid,
                        name: googleData.user.displayName,
                        email: googleData.user.email,
                        provider: 'google',
                        image: googleData.user.photoURL
                    });
                    observer.next(googleData.user);
                }).catch(function (error) {
                    observer.error(error);
                });
            }
        });
    };
    AuthProvider.prototype.sendPasswordResetEmail = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().sendPasswordResetEmail(email).then(function () {
                observer.next();
                // Email sent.
            }, function (error) {
                observer.error(error);
                // An error happened.
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_6__data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[319]);
//# sourceMappingURL=main.js.map