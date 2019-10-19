(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["movies-movie-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"movies$ | async as movies\">\n  <li *ngFor=\"let movie of movies\">\n    <a [routerLink]=\"movie.id\">\n      <img [src]=\"movie.image\">\n    </a>\n  </li>\n</ul>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-preview/movie-preview.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-preview/movie-preview.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <img [src]=\"movie.image\">\n  <h2>{{ movie.id }} - {{ movie.name }}</h2>\n  <p>{{ movie.genre }} | {{ movie.releaseYear }}</p>\n  <p>{{ movie.description }}</p>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-preview-container/movie-preview-container.component.html": 
        /*!******************************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-preview-container/movie-preview-container.component.html ***!
          \******************************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-movie-preview [movie]=\"movie\"></app-movie-preview>\n");
            /***/ 
        }),
        /***/ "./src/app/movies/models/movie.model.ts": 
        /*!**********************************************!*\
          !*** ./src/app/movies/models/movie.model.ts ***!
          \**********************************************/
        /*! exports provided: movies */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "movies", function () { return movies; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var movies = [
                {
                    id: '1',
                    name: 'Dawn of the Planet of the Apes',
                    genre: 'Sci-Fi',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/c6b7a11f-d1cb-427f-b784-4475f033fc48_1.jpg',
                    releaseYear: '2014',
                    description: 'A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.'
                },
                {
                    id: '2',
                    name: 'X-Men: Days of Future Past',
                    genre: 'Sci-Fi',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/652565bb-02ad-487f-929e-78308085ca1e_4.jpg',
                    releaseYear: '2014',
                    description: 'The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.'
                },
                {
                    id: '3',
                    name: 'Despicable Me 2',
                    genre: 'Animation',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/43b8cf94-8074-4e72-b58f-de6a3d067464_11.jpg',
                    releaseYear: '2013',
                    description: 'Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.\n'
                },
                {
                    id: '4',
                    name: 'A Bugs Life',
                    genre: 'Animation',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/92b4aed5-ef06-4065-af9a-1bb65e3d36d5_13.jpg',
                    releaseYear: '1998',
                    description: 'On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.'
                },
                {
                    id: '5',
                    name: 'Life of Brian',
                    genre: 'Comedy',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/4ba2afbe-61b4-4780-a3d8-9487524cb5c1_14.jpg',
                    releaseYear: '1972',
                    description: 'A brilliant parody from the British comedy group Monty Python about the history of (not Jesus but the boy born right next door to The Manger, Brian). A Terry Jones directed film from 1979 that has since gained cult status.'
                },
                {
                    id: '6',
                    name: 'District 9',
                    genre: 'Action, Sci-fi, Thriller',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/7a53a11c-9dae-48b4-ac36-38916bcf0096_2.jpg',
                    releaseYear: '2009',
                    description: 'Aliens land in South Africa and have no way home. Years later after living in a slum and wearing out their welcome the \"Non-Humans\" are being moved to a new tent city overseen by Multi-National United (MNU). The movie follows an MNU employee tasked with leading the relocation and his relationship with one of the alien leaders.'
                },
                {
                    id: '7',
                    name: 'Transformers: Age of Extinction',
                    genre: 'Action, Adventure, Sci-fi',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/b2610bfc-c8b7-48e0-8577-15ed47952a26_3.jpg',
                    releaseYear: '2014',
                    description: 'As humanity picks up the pieces, following the conclusion of \"Transformers: Dark of the Moon,\" Autobots and Decepticons have all but vanished from the face of the planet. However, a group of powerful, ingenious businessman and scientists attempt to learn from past Transformer incursions and push the boundaries of technology beyond what they can control - all while an ancient, powerful Transformer menace sets Earth in his cross-hairs.'
                },
                {
                    id: '8',
                    name: 'The Machinist',
                    genre: 'Drama, Thriller',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/db4e5018-a345-4535-a99a-b77689f83d0a_5.jpg',
                    releaseYear: '2004',
                    description: 'The Machinist is the story of Trevor Reznik, a lathe-operator who is dying of insomnia. In a machine shop, occupational hazards are bad enough under normal circumstances; yet for Trevor the risks are compounded by fatigue. Trevor has lost the ability to sleep. This is no ordinary insomnia...'
                },
                {
                    id: '9',
                    name: 'The Last Samurai',
                    genre: 'Action, Drama, History',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/3552b586-2580-4d95-b244-103d520d1cda_6.jpg',
                    releaseYear: '2003',
                    description: 'Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurais way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.'
                },
                {
                    id: '10',
                    name: 'The Amazing Spider-Man 2',
                    genre: 'Action, Adventure, Fantasy',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/fc92ca2c-bb7d-4020-b92e-f5fa0915181b_7.jpg',
                    releaseYear: '2014',
                    description: 'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.\n'
                },
                {
                    id: '11',
                    name: 'Tangled',
                    genre: 'Animation, Fantasy',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/7e5d4fec-2f54-4edf-b815-3d58ce2ca188_8.jpg',
                    releaseYear: '2010',
                    description: "When the kingdom's most wanted-and most charming-bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. Flynn's curious captor, who's looking for her ticket out of the tower where she's been locked away for years, strikes a deal with the handsome thief and the unlikely duo sets off on an action-packed escapade, complete with a super-cop horse, an over-protective chameleon and a gruff gang of pub thugs.\n"
                },
                {
                    id: '12',
                    name: 'Drag Me to Hell',
                    genre: 'Horror, Thriller',
                    image: 'https://peruzal-parse-media.s3.amazonaws.com/eee9d012-a5c1-42e2-8f38-0efc1729d89b_10.jpg',
                    releaseYear: '2009',
                    description: "After denying a woman the extension she needs to keep her home, loan officer Christine Brown sees her once-promising life take a startling turn for the worse. Christine is convinced she's been cursed by a Gypsy, but her boyfriend is skeptical. Her only hope seems to lie in a psychic who claims he can help her lift the curse and keep her soul from being dragged straight to hell."
                },
            ];
            /***/ 
        }),
        /***/ "./src/app/movies/movie-list/movie-list.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/movies/movie-list/movie-list.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-width: 200px;\r\n  height: 300px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  transition: ease-in .3s;\r\n}\r\n\r\nimg:hover {\r\n  -webkit-filter: blur(5px) brightness(0.5);\r\n          filter: blur(5px) brightness(0.5);\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin: 0;\r\n  padding: 20px 0;\r\n  justify-content: center;\r\n}\r\n\r\nli {\r\n  margin: 10px;\r\n  width: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHlDQUFpQztVQUFqQyxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4gLjNzO1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIGZpbHRlcjogYmx1cig1cHgpIGJyaWdodG5lc3MoMC41KTtcclxufVxyXG5cclxudWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmxpIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/movies/movie-list/movie-list.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/movies/movie-list/movie-list.component.ts ***!
          \***********************************************************/
        /*! exports provided: MovieListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieListComponent", function () { return MovieListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movies/services/movie.service.ts");
            /* harmony import */ var src_app_navbar_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/navbar/services/navbar.service */ "./src/app/navbar/services/navbar.service.ts");
            var MovieListComponent = /** @class */ (function () {
                function MovieListComponent(movieService, navbarService) {
                    this.movieService = movieService;
                    this.navbarService = navbarService;
                }
                MovieListComponent.prototype.ngOnInit = function () {
                    this.movies$ = this.movieService.getMovies();
                    this.navbarService.title.next('Movies');
                };
                return MovieListComponent;
            }());
            MovieListComponent.ctorParameters = function () { return [
                { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
                { type: src_app_navbar_services_navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"] }
            ]; };
            MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-list/movie-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-list.component.css */ "./src/app/movies/movie-list/movie-list.component.css")).default]
                })
            ], MovieListComponent);
            /***/ 
        }),
        /***/ "./src/app/movies/movie-preview/movie-preview.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/movies/movie-preview/movie-preview.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("img {\r\n  max-width: 300px;\r\n}\r\n\r\n\r\ndiv {\r\n  margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllLXByZXZpZXcvbW92aWUtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZS1wcmV2aWV3L21vdmllLXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbmRpdiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/movies/movie-preview/movie-preview.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/movies/movie-preview/movie-preview.component.ts ***!
          \*****************************************************************/
        /*! exports provided: MoviePreviewComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewComponent", function () { return MoviePreviewComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var MoviePreviewComponent = /** @class */ (function () {
                function MoviePreviewComponent() {
                }
                MoviePreviewComponent.prototype.ngOnInit = function () {
                };
                return MoviePreviewComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], MoviePreviewComponent.prototype, "movie", void 0);
            MoviePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-preview',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movie-preview/movie-preview.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-preview.component.css */ "./src/app/movies/movie-preview/movie-preview.component.css")).default]
                })
            ], MoviePreviewComponent);
            /***/ 
        }),
        /***/ "./src/app/movies/movie-routing.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/movies/movie-routing.module.ts ***!
          \************************************************/
        /*! exports provided: MovieRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieRoutingModule", function () { return MovieRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
            /* harmony import */ var _movies_preview_container_movie_preview_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movies-preview-container/movie-preview-container.component */ "./src/app/movies/movies-preview-container/movie-preview-container.component.ts");
            var routes = [
                {
                    path: '',
                    component: _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"]
                },
                {
                    path: ':id',
                    component: _movies_preview_container_movie_preview_container_component__WEBPACK_IMPORTED_MODULE_4__["MoviePreviewContainerComponent"]
                }
            ];
            var MovieRoutingModule = /** @class */ (function () {
                function MovieRoutingModule() {
                }
                return MovieRoutingModule;
            }());
            MovieRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], MovieRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/movies/movie.module.ts": 
        /*!****************************************!*\
          !*** ./src/app/movies/movie.module.ts ***!
          \****************************************/
        /*! exports provided: MovieModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieModule", function () { return MovieModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-list/movie-list.component */ "./src/app/movies/movie-list/movie-list.component.ts");
            /* harmony import */ var _movie_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-routing.module */ "./src/app/movies/movie-routing.module.ts");
            /* harmony import */ var _movies_preview_container_movie_preview_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-preview-container/movie-preview-container.component */ "./src/app/movies/movies-preview-container/movie-preview-container.component.ts");
            /* harmony import */ var _movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-preview/movie-preview.component */ "./src/app/movies/movie-preview/movie-preview.component.ts");
            var MovieModule = /** @class */ (function () {
                function MovieModule() {
                }
                return MovieModule;
            }());
            MovieModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_3__["MovieListComponent"], _movies_preview_container_movie_preview_container_component__WEBPACK_IMPORTED_MODULE_5__["MoviePreviewContainerComponent"], _movie_preview_movie_preview_component__WEBPACK_IMPORTED_MODULE_6__["MoviePreviewComponent"]],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _movie_routing_module__WEBPACK_IMPORTED_MODULE_4__["MovieRoutingModule"]
                    ]
                })
            ], MovieModule);
            /***/ 
        }),
        /***/ "./src/app/movies/movies-preview-container/movie-preview-container.component.css": 
        /*!***************************************************************************************!*\
          !*** ./src/app/movies/movies-preview-container/movie-preview-container.component.css ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMtcHJldmlldy1jb250YWluZXIvbW92aWUtcHJldmlldy1jb250YWluZXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/movies/movies-preview-container/movie-preview-container.component.ts": 
        /*!**************************************************************************************!*\
          !*** ./src/app/movies/movies-preview-container/movie-preview-container.component.ts ***!
          \**************************************************************************************/
        /*! exports provided: MoviePreviewContainerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviePreviewContainerComponent", function () { return MoviePreviewContainerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/movie.service */ "./src/app/movies/services/movie.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_navbar_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/navbar/services/navbar.service */ "./src/app/navbar/services/navbar.service.ts");
            var MoviePreviewContainerComponent = /** @class */ (function () {
                function MoviePreviewContainerComponent(movieService, navbarService, route) {
                    this.movieService = movieService;
                    this.navbarService = navbarService;
                    this.route = route;
                }
                MoviePreviewContainerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.id = +this.route.snapshot.paramMap.get('id');
                    this.movieSub$ = this.movieService.movie(this.id)
                        .subscribe(function (movie) {
                        _this.movie = movie;
                        _this.navbarService.title.next(movie.name);
                    });
                };
                MoviePreviewContainerComponent.prototype.ngOnDestroy = function () {
                    this.movieSub$.unsubscribe();
                };
                return MoviePreviewContainerComponent;
            }());
            MoviePreviewContainerComponent.ctorParameters = function () { return [
                { type: _services_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"] },
                { type: src_app_navbar_services_navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            MoviePreviewContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-movie-preview-container',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movie-preview-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/movies/movies-preview-container/movie-preview-container.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movie-preview-container.component.css */ "./src/app/movies/movies-preview-container/movie-preview-container.component.css")).default]
                })
            ], MoviePreviewContainerComponent);
            /***/ 
        }),
        /***/ "./src/app/movies/services/movie.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/movies/services/movie.service.ts ***!
          \**************************************************/
        /*! exports provided: MovieService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function () { return MovieService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/movie.model */ "./src/app/movies/models/movie.model.ts");
            var MovieService = /** @class */ (function () {
                function MovieService() {
                }
                MovieService.prototype.getMovies = function () {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["movies"]);
                };
                MovieService.prototype.movie = function (id) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_models_movie_model__WEBPACK_IMPORTED_MODULE_3__["movies"].find(function (movie) { return +movie.id === +id; }));
                };
                return MovieService;
            }());
            MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MovieService);
            /***/ 
        })
    }]);
//# sourceMappingURL=movies-movie-module-es2015.js.map
//# sourceMappingURL=movies-movie-module-es5.js.map
//# sourceMappingURL=movies-movie-module-es5.js.map