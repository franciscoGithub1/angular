(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~roles-roles-module~usuarios-usuarios-module"],{

/***/ "../../node_modules/@matheo/datasource/fesm5/matheo-datasource.js":
/*!********************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/@matheo/datasource/fesm5/matheo-datasource.js ***!
  \********************************************************************************************************/
/*! exports provided: MatDataSourceModule, MatDataSource, DataSourceLogger, ReactiveDataSource, DataSourceEmpty, DataSourceError, DataSourceLoading, getterPaginator, getterSort, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDataSourceModule", function() { return MatDataSourceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDataSource", function() { return MatDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceLogger", function() { return DataSourceLogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveDataSource", function() { return ReactiveDataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceEmpty", function() { return DataSourceEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceError", function() { return DataSourceError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceLoading", function() { return DataSourceLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterPaginator", function() { return getterPaginator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getterSort", function() { return getterSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DataSourceContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return DataSourceOverlay; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Config Texts
 */
/**
 * @return {?}
 */
function emptyMsg() {
    return 'No data available';
}
/**
 * @return {?}
 */
function waitMsg() {
    return 'Please wait...';
}
/**
 * @return {?}
 */
function delayMsg() {
    return 'The data is still loading...';
}
/**
 * @return {?}
 */
function timeoutMsg() {
    return 'Loading has timed out, please try again.';
}
/**
 * Debug Messages
 * @return {?}
 */
function removingStream() {
    return "Removing stream";
}
/**
 * @param {?} name
 * @return {?}
 */
function setValue(name) {
    return name + " setted:";
}
/**
 * @param {?} name
 * @param {?} required
 * @return {?}
 */
function srcAdding(name, required) {
    return required
        ? "Adding required '" + name + "' stream"
        : "Adding optional '" + name + "' stream";
}
/**
 * @param {?} name
 * @return {?}
 */
function srcEmpty(name) {
    return "Adding empty stream '" + name + "'";
}
/**
 * @return {?}
 */
function srcInvalid() {
    return "Empty stream provided!";
}
/**
 * @return {?}
 */
function srcEmitted() {
    return "Stream emitted:";
}
/**
 * @return {?}
 */
function isAutoStarting() {
    return "DataSource starting automatically";
}
/**
 * @param {?} length
 * @return {?}
 */
function notAutoStarting(length) {
    return ("DataSource not auto starting with " + length.optional +
        (" optional and " + length.required + " required streams"));
}
/**
 * @return {?}
 */
function resolvedArgs() {
    return 'Resolved request';
}
/**
 * @return {?}
 */
function queryResponse() {
    return 'Query response:';
}
/**
 * @return {?}
 */
function queryTimeout() {
    return 'Query timeout count:';
}
/**
 * @return {?}
 */
function responseTotal() {
    return 'Total returned:';
}
/**
 * @param {?} result
 * @return {?}
 */
function responseSuccess(result) {
    /** @type {?} */
    var len = result.length;
    return ["Response succeed with " + len + " item" + (len === 1 ? '' : 's'), result];
}
/**
 * @param {?} errors
 * @return {?}
 */
function responseError(errors) {
    return ['Response failed', errors];
}
/**
 * Error Messages
 * @param {?} item
 * @return {?}
 */
function addWhenRunning(item) {
    return "Adding \"" + item + "\" after the DataSource is already running.";
}
/**
 * @param {?} item
 * @return {?}
 */
function rmWhenRunning(item) {
    return "Trying to remove \"" + item + "\" after the DataSource is already running.";
}
/**
 * @param {?} name
 * @return {?}
 */
function nonNumeric(name) {
    return 'Non numeric ${name} passed';
}
/**
 * @return {?}
 */
function missingDataSourceInput() {
    return 'mat-datasource must receive a dataSource input';
}
/**
 * @return {?}
 */
function resException() {
    return 'Exception processing the result';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultConfig = {
    debug: false,
    autoStart: true,
    showErrors: true,
    emptyMsg: emptyMsg,
    waitMsg: waitMsg(),
    delayMsg: delayMsg(),
    timeoutMsg: timeoutMsg(),
    progressMode: 'indeterminate'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Logging Handler
 */
var  /**
 * Logging Handler
 */
DataSourceLogger = /** @class */ (function () {
    function DataSourceLogger(sourceName) {
        this.sourceName = sourceName;
        /**
         * Errors Collection
         */
        this._errors = {};
    }
    Object.defineProperty(DataSourceLogger.prototype, "config", {
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Error Management Methods
     */
    /**
     * Error Management Methods
     * @return {?}
     */
    DataSourceLogger.prototype.getErrors = /**
     * Error Management Methods
     * @return {?}
     */
    function () {
        return this._errors;
    };
    /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    DataSourceLogger.prototype.addError = /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    function (errorCode, error) {
        this._errors[errorCode] = typeof error === 'string' ? error : error.message;
    };
    /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    DataSourceLogger.prototype.handleError = /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    function (errorCode, error) {
        this._config.errorHandler
            ? this.addError(errorCode, this._config.errorHandler(error))
            : this.addError(errorCode, error);
    };
    /**
     * @param {?} errorCode
     * @return {?}
     */
    DataSourceLogger.prototype.hasError = /**
     * @param {?} errorCode
     * @return {?}
     */
    function (errorCode) {
        return this._errors.hasOwnProperty(errorCode);
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    DataSourceLogger.prototype.hasErrors = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        if (force === void 0) { force = false; }
        return ((this._config.showErrors || force) && !!Object.keys(this._errors).length);
    };
    /**
     * @param {?} attempt
     * @return {?}
     */
    DataSourceLogger.prototype.getTimeoutError = /**
     * @param {?} attempt
     * @return {?}
     */
    function (attempt) {
        switch (attempt) {
            case 0:
                return this._config.waitMsg;
            case 1:
                return this._config.delayMsg;
            default:
                throw new Error(this._config.timeoutMsg);
        }
    };
    /**
     * @return {?}
     */
    DataSourceLogger.prototype.clearErrors = /**
     * @return {?}
     */
    function () {
        this._errors = {};
    };
    /**
     * Debug Utils
     */
    // display a message according a condition
    /**
     * Debug Utils
     * @param {?} truthy
     * @param {?=} falsy
     * @param {?=} condition
     * @return {?}
     */
    // display a message according a condition
    DataSourceLogger.prototype.debug = /**
     * Debug Utils
     * @param {?} truthy
     * @param {?=} falsy
     * @param {?=} condition
     * @return {?}
     */
    // display a message according a condition
    function (truthy, falsy, condition) {
        if (condition === void 0) { condition = true; }
        if (this._config.debug) {
            if (condition) {
                console.log(this.sourceName + ":", truthy);
            }
            else if (falsy) {
                console.log(this.sourceName + ":", falsy);
            }
        }
    };
    // logs an object if debug mode is enabled
    // logs an object if debug mode is enabled
    /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    DataSourceLogger.prototype.print = 
    // logs an object if debug mode is enabled
    /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    function (message, obj) {
        if (this._config.debug) {
            console.log(this.sourceName + ":", message, obj);
        }
    };
    // throw an error if the condition is truthy
    // throw an error if the condition is truthy
    /**
     * @param {?} condition
     * @param {?} message
     * @return {?}
     */
    DataSourceLogger.prototype.check = 
    // throw an error if the condition is truthy
    /**
     * @param {?} condition
     * @param {?} message
     * @return {?}
     */
    function (condition, message) {
        if (condition) {
            throw new Error(this.sourceName + ": " + message);
        }
    };
    return DataSourceLogger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants
 * @type {?}
 */
var REQUIRED_INIT = 'required.init';
/** @type {?} */
var TRIGGER_INIT = 'trigger.init';
/** @type {?} */
var TRIGGER_REFRESH = 'trigger.refresh';
/** @type {?} */
var TRIGGER_RELOAD = 'trigger.reload';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
DataSourceStreamer = /** @class */ (function () {
    function DataSourceStreamer(logger) {
        this.logger = logger;
        // streams to listen
        this.streams = [];
        // micro optimization
        this.length = {
            required: 0,
            optional: 0
        };
    }
    Object.defineProperty(DataSourceStreamer.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this.streams.filter((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.required; })).map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.stream; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSourceStreamer.prototype, "optional", {
        get: /**
         * @return {?}
         */
        function () {
            return this.streams.filter((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return !s.required; })).map((/**
             * @param {?} s
             * @return {?}
             */
            function (s) { return s.stream; }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} src
     * @return {?}
     */
    DataSourceStreamer.prototype.add = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        this.logger.check(!src.stream, srcInvalid());
        this.streams.push(src);
        this.update();
    };
    /**
     * @param {?} name
     * @return {?}
     */
    DataSourceStreamer.prototype.remove = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this.streams = this.streams.filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.name !== name; }));
        this.update();
    };
    /**
     * @private
     * @return {?}
     */
    DataSourceStreamer.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
        this.length = {
            required: this.required.length,
            optional: this.optional.length - 1 // remove trigger$
        };
    };
    /**
     * @param {?} defaults
     * @param {?} overrides
     * @return {?}
     */
    DataSourceStreamer.prototype.args = /**
     * @param {?} defaults
     * @param {?} overrides
     * @return {?}
     */
    function (defaults, overrides) {
        // merge all the argument sources
        /** @type {?} */
        var args = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])([
            defaults
        ], this.streams
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) {
            return (a.weight || 0) < (b.weight || 0) ? -1 : 1;
        }))
            .map((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.getter(); })), [
            overrides
        ]).filter((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(v); }));
        // all the defaults and getters must complete a T object
        return (/** @type {?} */ ((args.length > 1
            ? args.reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) { return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({}, a, b); }))
            : args[0] || {})));
    };
    /**
     * @return {?}
     */
    DataSourceStreamer.prototype.connect = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.streams.some((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.required; }))
            ? rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])(this.required)) : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(REQUIRED_INIT), rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"].apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__spread"])(this.optional))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return _this.logger.print(srcEmitted(), v); })));
    };
    return DataSourceStreamer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template REQ, RAW, RES
 */
var  /**
 * @abstract
 * @template REQ, RAW, RES
 */
MatDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(MatDataSource, _super);
    /**
     * DataSource.
     */
    function MatDataSource() {
        var _this = _super.call(this) || this;
        _this._loading = true;
        _this._reloading = true;
        _this._loaded = false;
        _this._empty = true;
        _this._total = 0;
        _this._data = [];
        _this._progress = 0;
        _this._config = defaultConfig;
        /**
         * Control members for the datasource processing.
         */
        _this.defaults = {};
        _this.overrides = {};
        /**
         * Error control vars.
         */
        _this._logger = new DataSourceLogger(_this.constructor.name);
        /**
         * Stream only used to trigger a refresh on the data.
         * Can receive some Criteria overrides for a temporary update.
         * It has to be used outside the datasource to prevent infinite loops.
         */
        _this._trigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](TRIGGER_INIT);
        /**
         * Executions counter
         */
        _this._triggered = 0;
        /**
         * Output Emitter to refresh the UI.
         */
        _this._change$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        /**
         * Registered streams
         */
        _this._streams = new DataSourceStreamer(_this._logger);
        /**
         * Disconnect internal observable.
         */
        _this._disconnect$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // initial config sync
        _this._logger.config = _this._config;
        // listen the internal trigger
        _this.addOptional({
            stream: _this._trigger$,
            getter: (/**
             * @return {?}
             */
            function () { return ({}); })
        });
        return _this;
    }
    Object.defineProperty(MatDataSource.prototype, "isLoading", {
        /**
         * State to control outside behavior like css classes and components.
         * Updated by pre/postQuery to show/hide the loading overlay and empty message.
         */
        get: /**
         * State to control outside behavior like css classes and components.
         * Updated by pre/postQuery to show/hide the loading overlay and empty message.
         * @return {?}
         */
        function () {
            return this._loading;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "isLoaded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._loaded;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._empty;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "total", {
        /**
         * Number used to calculate the pagination length.
         * Updated after the rawResult method according to the response data.
         */
        get: /**
         * Number used to calculate the pagination length.
         * Updated after the rawResult method according to the response data.
         * @return {?}
         */
        function () {
            return this._total;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "progress", {
        /**
         * Number used to calculate the loading progress.
         * Updated while loading the query and triggering change$.
         */
        get: /**
         * Number used to calculate the loading progress.
         * Updated while loading the query and triggering change$.
         * @return {?}
         */
        function () {
            return this._progress;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "outputMsg", {
        /**
         * Output message getter.
         */
        get: /**
         * Output message getter.
         * @return {?}
         */
        function () {
            return this._outputMsg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "args", {
        /**
         * Accessors
         */
        get: /**
         * Accessors
         * @return {?}
         */
        function () {
            return this.arguments || ((/** @type {?} */ ({})));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "progressMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._config.progressMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "change$", {
        get: /**
         * @return {?}
         */
        function () {
            return this._change$;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "hasErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._logger.hasErrors(true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "getErrors", {
        get: /**
         * @return {?}
         */
        function () {
            return this._logger.getErrors();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatDataSource.prototype, "config", {
        /**
         * Setters
         */
        // config settings
        get: /**
         * Setters
         * @return {?}
         */
        // config settings
        function () {
            return this._config;
        },
        set: /**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            this._config = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__assign"])({}, this._config, config);
            this._logger.config = this._config;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Streams
     */
    /**
     * Streams
     * @param {?} args
     * @return {?}
     */
    MatDataSource.prototype.addArguments = /**
     * Streams
     * @param {?} args
     * @return {?}
     */
    function (args) {
        this.defaults = Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__assign"])({}, this.defaults, args);
    };
    /**
     * @param {?} src
     * @return {?}
     */
    MatDataSource.prototype.addRequired = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        this._logger.check(this._triggered, addWhenRunning(src.name || src.stream));
        this._logger.debug(srcAdding(src.name, true), srcEmpty(src.name), src.stream);
        this._streams.add(Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__assign"])({}, src, { required: true }));
    };
    /**
     * @param {?} src
     * @return {?}
     */
    MatDataSource.prototype.addOptional = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        this._logger.check(this._triggered, addWhenRunning(src.name || src.stream));
        this._logger.debug(srcAdding(src.name, false), srcEmpty(src.name), src.stream);
        this._streams.add(Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__assign"])({}, src, { required: false }));
    };
    /**
     * @param {?} name
     * @return {?}
     */
    MatDataSource.prototype.remStream = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        this._logger.check(this._triggered, rmWhenRunning(name));
        this._logger.print(removingStream(), name);
        this._streams.remove(name);
    };
    /**
     * Triggers
     */
    /**
     * Triggers
     * @param {?=} overrides
     * @return {?}
     */
    MatDataSource.prototype.refresh = /**
     * Triggers
     * @param {?=} overrides
     * @return {?}
     */
    function (overrides) {
        if (overrides === void 0) { overrides = {}; }
        this.overrides = overrides;
        this._trigger$.next(TRIGGER_REFRESH);
    };
    /**
     * @return {?}
     */
    MatDataSource.prototype.reload = /**
     * @return {?}
     */
    function () {
        if (this._loaded) {
            this.overrides = { forceReload: true };
        }
        this._reloading = true;
        this._trigger$.next(TRIGGER_RELOAD);
    };
    /**
     * Data processing that can be completely customized.
     */
    /**
     * Data processing that can be completely customized.
     * @param {?} args
     * @return {?}
     */
    MatDataSource.prototype.reqArguments = /**
     * Data processing that can be completely customized.
     * @param {?} args
     * @return {?}
     */
    function (args) {
        return args;
    };
    /**
     * Data Fetching Methods
     */
    /**
     * Data Fetching Methods
     * @private
     * @param {?} streamed
     * @return {?}
     */
    MatDataSource.prototype._blockStart = /**
     * Data Fetching Methods
     * @private
     * @param {?} streamed
     * @return {?}
     */
    function (streamed) {
        // check if it's not configured to start after the initial optional stream
        /** @type {?} */
        var block = !this._config.autoStart && streamed[1] === TRIGGER_INIT;
        if (this._triggered === 1) {
            this._logger.debug(isAutoStarting(), notAutoStarting(this._streams.length), !block);
        }
        if (block) {
            this._loading = false;
        }
        return block;
    };
    /**
     * @private
     * @return {?}
     */
    MatDataSource.prototype._getArgs = /**
     * @private
     * @return {?}
     */
    function () {
        // merge all the getters outputs
        this.arguments = this._streams.args(this.defaults, this.overrides);
        this.overrides = {};
        this._logger.print(resolvedArgs(), this.arguments);
        // TODO consider any edge case with forceReload
        delete this.arguments.forceReload;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.arguments);
    };
    /**
     * @private
     * @return {?}
     */
    MatDataSource.prototype._isEqual = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        function (prev, curr) { return !_this._reloading && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(prev, curr); });
    };
    /**
     * @private
     * @return {?}
     */
    MatDataSource.prototype._preQuery = /**
     * @private
     * @return {?}
     */
    function () {
        // state update
        this._loading = true;
        this._reloading = false;
        this._outputMsg = '';
        this._logger.clearErrors();
        this._change$.next({});
    };
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    MatDataSource.prototype._execQuery = /**
     * @private
     * @param {?} args
     * @return {?}
     */
    function (args) {
        var _this = this;
        /** @type {?} */
        var query = this.rawFetch(args);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(query, 
        // timers check
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(5000, 8000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(query), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(3) // 5s, 13s, 21s
        )).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(3), 
        // delay check
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (typeof val !== 'number') {
                _this._logger.print(queryResponse(), val);
            }
            else {
                _this._logger.print(queryTimeout(), val);
                try {
                    _this._outputMsg = _this._logger.getTimeoutError(val);
                }
                catch (e) {
                    _this._logger.addError('timeout', e.message);
                    _this._loading = false;
                }
                _this._change$.next({});
            }
        })), 
        // discard timer result
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return typeof result !== 'number'; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            // isolate query error
            _this._logger.handleError('query', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_this.rawDefault());
        })));
    };
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    MatDataSource.prototype._updateTotal = /**
     * @private
     * @param {?} res
     * @return {?}
     */
    function (res) {
        var _this = this;
        if (!this.hasErrors) {
            // microtask as workaround for change detection
            this.rawTotal(res)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
             * @param {?} total
             * @return {?}
             */
            function (total) { return _this._logger.print(responseTotal(), total); })))
                .subscribe((/**
             * @param {?} total
             * @return {?}
             */
            function (total) { return (_this._total = total); }));
        }
    };
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    MatDataSource.prototype._postQuery = /**
     * @private
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var hasErrors = this.hasErrors;
        this._data = !hasErrors ? this.rawResult(res) : [];
        this._logger.debug(responseSuccess(this._data), responseError(this.getErrors), !hasErrors);
        this._empty = !this._data || !this._data.length;
        if (!hasErrors && this._empty) {
            this._outputMsg = this._config.emptyMsg();
        }
        this._loaded = !hasErrors;
        this._loading = false;
        this._change$.next({});
        return this._data;
    };
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    MatDataSource.prototype._processException = /**
     * @private
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._logger.print(resException(), err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
    };
    /**
     * Data API
     */
    /**
     * Data API
     * @return {?}
     */
    MatDataSource.prototype.connect = /**
     * Data API
     * @return {?}
     */
    function () {
        var _this = this;
        return (/** @type {?} */ (this._streams.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._disconnect$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @return {?}
         */
        function () { return _this._triggered++; })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["skipWhile"])((/**
         * @param {?} val
         * @return {?}
         */
        function (val) { return _this._blockStart(val); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
         * @return {?}
         */
        function () { return _this._getArgs(); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @param {?} req
         * @return {?}
         */
        function (req) { return _this.reqArguments(req); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])(this._isEqual()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @return {?}
         */
        function () { return _this._preQuery(); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((/**
         * @param {?} req
         * @return {?}
         */
        function (req) { return _this._execQuery(req); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])((/**
         * @param {?} raw
         * @return {?}
         */
        function (raw) { return _this._updateTotal(raw); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @param {?} raw
         * @return {?}
         */
        function (raw) { return _this._postQuery(raw); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) { return _this._processException(err); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return typeof res !== 'boolean'; })))));
    };
    /**
     * @return {?}
     */
    MatDataSource.prototype.disconnect = /**
     * @return {?}
     */
    function () {
        this._trigger$.complete();
        this._change$.complete();
        this._disconnect$.next();
        this._disconnect$.complete();
    };
    return MatDataSource;
}(_angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template REQ, RAW, RES
 */
var DataSourceContainer = /** @class */ (function () {
    function DataSourceContainer() {
        this.diameter = 40;
        this.strokeWidth = 5;
    }
    /**
     * @return {?}
     */
    DataSourceContainer.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this._validateSource();
    };
    /**
     * @private
     * @return {?}
     */
    DataSourceContainer.prototype._validateSource = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.dataSource) {
            throw Error(missingDataSourceInput());
        }
    };
    DataSourceContainer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'mat-datasource',
                    template: "<div class=\"mat-datasource-container\">\n  <div [attr.hidden]=\"dataSource.isLoading || dataSource.isEmpty ? '' : null\">\n    <ng-content select=\"mat-table,table\"></ng-content>\n  </div>\n\n  <mat-datasource-overlay [dataSource]=\"dataSource\" [diameter]=\"diameter\" [strokeWidth]=\"strokeWidth\">\n    <ng-content select=\"mat-datasource-empty\" ngProjectAs=\"mat-datasource-empty\"></ng-content>\n    <ng-content select=\"mat-datasource-error\" ngProjectAs=\"mat-datasource-error\"></ng-content>\n    <ng-content select=\"mat-datasource-loading\" ngProjectAs=\"mat-datasource-loading\"></ng-content>\n  </mat-datasource-overlay>\n</div>\n\n<div [attr.hidden]=\"dataSource.isLoading || dataSource.isEmpty ? '' : null\">\n  <ng-content></ng-content>\n</div>\n",
                    host: {
                        class: 'mat-datasource'
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    styles: [".mat-datasource-container{position:relative}", ".mat-datasource-empty,.mat-datasource-error,.mat-datasource-loading{display:block;text-align:center}", ".mat-datasource-overlay{display:flex;flex-direction:column;min-height:120px;width:100%;align-items:center;place-content:center}.mat-datasource-overlay>*{margin-bottom:15px}.mat-datasource-overlay>:last-child{margin-bottom:0}.mat-datasource-overlay:empty{margin-bottom:0;min-height:0}"]
                }] }
    ];
    /** @nocollapse */
    DataSourceContainer.ctorParameters = function () { return []; };
    DataSourceContainer.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return DataSourceContainer;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataSourceEmpty = /** @class */ (function () {
    function DataSourceEmpty() {
    }
    DataSourceEmpty.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-datasource-empty',
                    host: {
                        class: 'mat-datasource-empty'
                    }
                },] }
    ];
    return DataSourceEmpty;
}());
var DataSourceError = /** @class */ (function () {
    function DataSourceError() {
    }
    DataSourceError.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-datasource-error',
                    host: {
                        class: 'mat-datasource-error'
                    }
                },] }
    ];
    return DataSourceError;
}());
var DataSourceLoading = /** @class */ (function () {
    function DataSourceLoading() {
    }
    DataSourceLoading.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-datasource-loading',
                    host: {
                        class: 'mat-datasource-loading'
                    }
                },] }
    ];
    return DataSourceLoading;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template REQ, RAW, RES
 */
var DataSourceOverlay = /** @class */ (function () {
    function DataSourceOverlay(cdr) {
        this.cdr = cdr;
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * @return {?}
     */
    DataSourceOverlay.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._validateSource();
        // listen source changes
        this.dataSource.change$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.onDestroy)).subscribe((/**
         * @return {?}
         */
        function () {
            _this._display =
                _this.dataSource.isLoading ||
                    _this.dataSource.hasErrors ||
                    _this.dataSource.isEmpty
                    ? 'flex'
                    : 'none';
            _this.cdr.markForCheck();
        }));
    };
    /**
     * @private
     * @return {?}
     */
    DataSourceOverlay.prototype._validateSource = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.dataSource) {
            throw Error(missingDataSourceInput());
        }
    };
    /**
     * @return {?}
     */
    DataSourceOverlay.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.onDestroy.next();
        this.onDestroy.complete();
    };
    DataSourceOverlay.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'mat-datasource-overlay',
                    template: "<ng-container *ngIf=\"dataSource.isLoading then loading; else loaded\"></ng-container>\n\n<ng-template #loading>\n  <mat-progress-spinner\n    [mode]=\"dataSource.progressMode\"\n    [value]=\"dataSource.progress\"\n    [diameter]=\"diameter\"\n    [strokeWidth]=\"strokeWidth\"\n  ></mat-progress-spinner>\n\n  <div #out>\n    <ng-content select=\"mat-datasource-loading\"></ng-content>\n  </div>\n  <ng-container *ngIf=\"!out.childNodes.length\">\n    <mat-datasource-loading *ngIf=\"dataSource.outputMsg\">{{ dataSource.outputMsg }}</mat-datasource-loading>\n  </ng-container>\n</ng-template>\n\n<ng-template #loaded>\n  <ng-container *ngIf=\"dataSource.hasErrors then errors; else empty\"></ng-container>\n\n  <ng-template #errors>\n    <div class=\"mat-datasource-overlay\" #err>\n      <ng-content select=\"mat-datasource-error\"></ng-content>\n    </div>\n    <ng-container *ngIf=\"!err.childNodes.length\">\n      <mat-datasource-error *ngFor=\"let error of dataSource.getErrors | keyvalue\">{{ error.value }}</mat-datasource-error>\n    </ng-container>\n  </ng-template>\n\n  <ng-template #empty>\n    <div class=\"mat-datasource-overlay\" #emp>\n      <ng-content select=\"mat-datasource-empty\"></ng-content>\n    </div>\n    <ng-container *ngIf=\"!emp.childNodes.length\">\n      <mat-datasource-empty>{{ dataSource.outputMsg }}</mat-datasource-empty>\n    </ng-container>\n  </ng-template>\n</ng-template>\n",
                    host: {
                        class: 'mat-datasource-overlay'
                    },
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    DataSourceOverlay.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
    ]; };
    DataSourceOverlay.propDecorators = {
        dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        _display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.display',] }]
    };
    return DataSourceOverlay;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MatDataSourceModule = /** @class */ (function () {
    function MatDataSourceModule() {
    }
    MatDataSourceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]],
                    declarations: [
                        DataSourceContainer,
                        DataSourceEmpty,
                        DataSourceError,
                        DataSourceLoading,
                        DataSourceOverlay
                    ],
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                        DataSourceContainer,
                        DataSourceEmpty,
                        DataSourceError,
                        DataSourceLoading
                    ]
                },] }
    ];
    return MatDataSourceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template REQ, RAW, RES
 */
var  /**
 * @abstract
 * @template REQ, RAW, RES
 */
ReactiveDataSource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_6__["__extends"])(ReactiveDataSource, _super);
    function ReactiveDataSource() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pageIndex = 0;
        _this._pageSize = 10;
        return _this;
    }
    Object.defineProperty(ReactiveDataSource.prototype, "pageIndex", {
        /**
         * Pagination Settings
         */
        get: /**
         * Pagination Settings
         * @return {?}
         */
        function () {
            return this._pageIndex;
        },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            this._logger.check(isNaN(Number(size)), nonNumeric('pageIndex'));
            this._logger.print(setValue('PageIndex'), Number(size));
            this._pageIndex = Number(size);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveDataSource.prototype, "pageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} size
         * @return {?}
         */
        function (size) {
            if (size) {
                this._logger.check(isNaN(Number(size)), nonNumeric('pageSize'));
                this._logger.print(setValue('PageSize'), Number(size));
                this._pageSize = Number(size);
            }
        },
        enumerable: true,
        configurable: true
    });
    // be sure the paginator's view has been initialized
    // be sure the paginator's view has been initialized
    /**
     * @param {?} paginator
     * @param {?} getter
     * @return {?}
     */
    ReactiveDataSource.prototype.setPaginator = 
    // be sure the paginator's view has been initialized
    /**
     * @param {?} paginator
     * @param {?} getter
     * @return {?}
     */
    function (paginator, getter) {
        this.addOptional({
            name: 'MatPaginator',
            stream: paginator.page,
            getter: getter(this.pageSize)
        });
    };
    // sort changes emitted will trigger an update
    // sort changes emitted will trigger an update
    /**
     * @param {?} sort
     * @param {?} getter
     * @return {?}
     */
    ReactiveDataSource.prototype.setSort = 
    // sort changes emitted will trigger an update
    /**
     * @param {?} sort
     * @param {?} getter
     * @return {?}
     */
    function (sort, getter) {
        this.addOptional({
            name: 'MatSort',
            stream: sort.sortChange,
            getter: getter
        });
    };
    /**
     * Attachs an autocompleter with this data source filtered. Note that
     * the stream provided will be accessed during change detection and should not directly change
     * values that are bound in template views.
     * @returns Observable that emits a new value when the data changes.
     */
    /**
     * Attachs an autocompleter with this data source filtered. Note that
     * the stream provided will be accessed during change detection and should not directly change
     * values that are bound in template views.
     * @return {?} Observable that emits a new value when the data changes.
     */
    ReactiveDataSource.prototype.attach = /**
     * Attachs an autocompleter with this data source filtered. Note that
     * the stream provided will be accessed during change detection and should not directly change
     * values that are bound in template views.
     * @return {?} Observable that emits a new value when the data changes.
     */
    function () {
        var _this = this;
        return this.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.resFilter(res); })));
    };
    return ReactiveDataSource;
}(MatDataSource));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Premade Getters
 * @param {?} paginator
 * @return {?}
 */
function getterPaginator(paginator) {
    return (/**
     * @param {?} pageSize
     * @return {?}
     */
    function (pageSize) {
        // : DataSourceGetter<T>
        return (/**
         * @return {?}
         */
        function () { return ({
            pageIndex: paginator ? paginator.pageIndex : 0,
            pageSize: paginator ? paginator.pageSize : pageSize
        }); });
    });
}
/**
 * @param {?} sorter
 * @return {?}
 */
function getterSort(sorter) {
    // DataSourceGetter<T>
    return (/**
     * @return {?}
     */
    function () {
        return sorter && sorter.active
            ? {
                orderBy: sorter.active,
                orderDir: sorter.direction || undefined
            }
            : {};
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=matheo-datasource.js.map

/***/ })

}]);
//# sourceMappingURL=default~roles-roles-module~usuarios-usuarios-module-es5.js.map