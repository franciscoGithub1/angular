(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~roles-roles-module~usuarios-usuarios-module"],{

/***/ "../../node_modules/@matheo/datasource/fesm2015/matheo-datasource.js":
/*!***********************************************************************************************************!*\
  !*** C:/Fidenslat/Ginger/ginger.client.src/node_modules/@matheo/datasource/fesm2015/matheo-datasource.js ***!
  \***********************************************************************************************************/
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "../../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");








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
    return `Removing stream`;
}
/**
 * @param {?} name
 * @return {?}
 */
function setValue(name) {
    return `${name} setted:`;
}
/**
 * @param {?} name
 * @param {?} required
 * @return {?}
 */
function srcAdding(name, required) {
    return required
        ? `Adding required '${name}' stream`
        : `Adding optional '${name}' stream`;
}
/**
 * @param {?} name
 * @return {?}
 */
function srcEmpty(name) {
    return `Adding empty stream '${name}'`;
}
/**
 * @return {?}
 */
function srcInvalid() {
    return `Empty stream provided!`;
}
/**
 * @return {?}
 */
function srcEmitted() {
    return `Stream emitted:`;
}
/**
 * @return {?}
 */
function isAutoStarting() {
    return `DataSource starting automatically`;
}
/**
 * @param {?} length
 * @return {?}
 */
function notAutoStarting(length) {
    return (`DataSource not auto starting with ${length.optional}` +
        ` optional and ${length.required} required streams`);
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
    const len = result.length;
    return [`Response succeed with ${len} item${len === 1 ? '' : 's'}`, result];
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
    return `Adding "${item}" after the DataSource is already running.`;
}
/**
 * @param {?} item
 * @return {?}
 */
function rmWhenRunning(item) {
    return `Trying to remove "${item}" after the DataSource is already running.`;
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
const defaultConfig = {
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
class DataSourceLogger {
    /**
     * @param {?} sourceName
     */
    constructor(sourceName) {
        this.sourceName = sourceName;
        /**
         * Errors Collection
         */
        this._errors = {};
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = config;
    }
    /**
     * Error Management Methods
     * @return {?}
     */
    getErrors() {
        return this._errors;
    }
    /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    addError(errorCode, error) {
        this._errors[errorCode] = typeof error === 'string' ? error : error.message;
    }
    /**
     * @param {?} errorCode
     * @param {?} error
     * @return {?}
     */
    handleError(errorCode, error) {
        this._config.errorHandler
            ? this.addError(errorCode, this._config.errorHandler(error))
            : this.addError(errorCode, error);
    }
    /**
     * @param {?} errorCode
     * @return {?}
     */
    hasError(errorCode) {
        return this._errors.hasOwnProperty(errorCode);
    }
    /**
     * @param {?=} force
     * @return {?}
     */
    hasErrors(force = false) {
        return ((this._config.showErrors || force) && !!Object.keys(this._errors).length);
    }
    /**
     * @param {?} attempt
     * @return {?}
     */
    getTimeoutError(attempt) {
        switch (attempt) {
            case 0:
                return this._config.waitMsg;
            case 1:
                return this._config.delayMsg;
            default:
                throw new Error(this._config.timeoutMsg);
        }
    }
    /**
     * @return {?}
     */
    clearErrors() {
        this._errors = {};
    }
    /**
     * Debug Utils
     * @param {?} truthy
     * @param {?=} falsy
     * @param {?=} condition
     * @return {?}
     */
    // display a message according a condition
    debug(truthy, falsy, condition = true) {
        if (this._config.debug) {
            if (condition) {
                console.log(`${this.sourceName}:`, truthy);
            }
            else if (falsy) {
                console.log(`${this.sourceName}:`, falsy);
            }
        }
    }
    // logs an object if debug mode is enabled
    /**
     * @param {?} message
     * @param {?} obj
     * @return {?}
     */
    print(message, obj) {
        if (this._config.debug) {
            console.log(`${this.sourceName}:`, message, obj);
        }
    }
    // throw an error if the condition is truthy
    /**
     * @param {?} condition
     * @param {?} message
     * @return {?}
     */
    check(condition, message) {
        if (condition) {
            throw new Error(`${this.sourceName}: ${message}`);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constants
 * @type {?}
 */
const REQUIRED_INIT = 'required.init';
/** @type {?} */
const TRIGGER_INIT = 'trigger.init';
/** @type {?} */
const TRIGGER_REFRESH = 'trigger.refresh';
/** @type {?} */
const TRIGGER_RELOAD = 'trigger.reload';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DataSourceStreamer {
    /**
     * @param {?} logger
     */
    constructor(logger) {
        this.logger = logger;
        // streams to listen
        this.streams = [];
        // micro optimization
        this.length = {
            required: 0,
            optional: 0
        };
    }
    /**
     * @return {?}
     */
    get required() {
        return this.streams.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => s.required)).map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.stream));
    }
    /**
     * @return {?}
     */
    get optional() {
        return this.streams.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => !s.required)).map((/**
         * @param {?} s
         * @return {?}
         */
        s => s.stream));
    }
    /**
     * @param {?} src
     * @return {?}
     */
    add(src) {
        this.logger.check(!src.stream, srcInvalid());
        this.streams.push(src);
        this.update();
    }
    /**
     * @param {?} name
     * @return {?}
     */
    remove(name) {
        this.streams = this.streams.filter((/**
         * @param {?} s
         * @return {?}
         */
        s => s.name !== name));
        this.update();
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        this.length = {
            required: this.required.length,
            optional: this.optional.length - 1 // remove trigger$
        };
    }
    /**
     * @param {?} defaults
     * @param {?} overrides
     * @return {?}
     */
    args(defaults, overrides) {
        // merge all the argument sources
        /** @type {?} */
        const args = [
            defaults,
            ...this.streams
                .sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return (a.weight || 0) < (b.weight || 0) ? -1 : 1;
            }))
                .map((/**
             * @param {?} s
             * @return {?}
             */
            s => s.getter())),
            overrides
        ].filter((/**
         * @param {?} v
         * @return {?}
         */
        v => !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEmpty"])(v)));
        // all the defaults and getters must complete a T object
        return (/** @type {?} */ ((args.length > 1
            ? args.reduce((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => Object(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"])({}, a, b)))
            : args[0] || {})));
    }
    /**
     * @return {?}
     */
    connect() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.streams.some((/**
         * @param {?} s
         * @return {?}
         */
        s => s.required))
            ? Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(...this.required)
            : Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(REQUIRED_INIT), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...this.optional)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} v
         * @return {?}
         */
        v => this.logger.print(srcEmitted(), v))));
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template REQ, RAW, RES
 */
class MatDataSource extends _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["DataSource"] {
    /**
     * DataSource.
     */
    constructor() {
        super();
        this._loading = true;
        this._reloading = true;
        this._loaded = false;
        this._empty = true;
        this._total = 0;
        this._data = [];
        this._progress = 0;
        this._config = defaultConfig;
        /**
         * Control members for the datasource processing.
         */
        this.defaults = {};
        this.overrides = {};
        /**
         * Error control vars.
         */
        this._logger = new DataSourceLogger(this.constructor.name);
        /**
         * Stream only used to trigger a refresh on the data.
         * Can receive some Criteria overrides for a temporary update.
         * It has to be used outside the datasource to prevent infinite loops.
         */
        this._trigger$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](TRIGGER_INIT);
        /**
         * Executions counter
         */
        this._triggered = 0;
        /**
         * Output Emitter to refresh the UI.
         */
        this._change$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({});
        /**
         * Registered streams
         */
        this._streams = new DataSourceStreamer(this._logger);
        /**
         * Disconnect internal observable.
         */
        this._disconnect$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // initial config sync
        this._logger.config = this._config;
        // listen the internal trigger
        this.addOptional({
            stream: this._trigger$,
            getter: (/**
             * @return {?}
             */
            () => ({}))
        });
    }
    /**
     * State to control outside behavior like css classes and components.
     * Updated by pre/postQuery to show/hide the loading overlay and empty message.
     * @return {?}
     */
    get isLoading() {
        return this._loading;
    }
    /**
     * @return {?}
     */
    get isLoaded() {
        return this._loaded;
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return this._empty;
    }
    /**
     * Number used to calculate the pagination length.
     * Updated after the rawResult method according to the response data.
     * @return {?}
     */
    get total() {
        return this._total;
    }
    /**
     * @return {?}
     */
    get data() {
        return this._data;
    }
    /**
     * Number used to calculate the loading progress.
     * Updated while loading the query and triggering change$.
     * @return {?}
     */
    get progress() {
        return this._progress;
    }
    /**
     * Output message getter.
     * @return {?}
     */
    get outputMsg() {
        return this._outputMsg;
    }
    /**
     * Accessors
     * @return {?}
     */
    get args() {
        return this.arguments || ((/** @type {?} */ ({})));
    }
    /**
     * @return {?}
     */
    get progressMode() {
        return this._config.progressMode;
    }
    /**
     * @return {?}
     */
    get change$() {
        return this._change$;
    }
    /**
     * @return {?}
     */
    get hasErrors() {
        return this._logger.hasErrors(true);
    }
    /**
     * @return {?}
     */
    get getErrors() {
        return this._logger.getErrors();
    }
    /**
     * Setters
     * @return {?}
     */
    // config settings
    get config() {
        return this._config;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this._config = Object.assign({}, this._config, config);
        this._logger.config = this._config;
    }
    /**
     * Streams
     * @param {?} args
     * @return {?}
     */
    addArguments(args) {
        this.defaults = Object.assign({}, this.defaults, args);
    }
    /**
     * @param {?} src
     * @return {?}
     */
    addRequired(src) {
        this._logger.check(this._triggered, addWhenRunning(src.name || src.stream));
        this._logger.debug(srcAdding(src.name, true), srcEmpty(src.name), src.stream);
        this._streams.add(Object.assign({}, src, { required: true }));
    }
    /**
     * @param {?} src
     * @return {?}
     */
    addOptional(src) {
        this._logger.check(this._triggered, addWhenRunning(src.name || src.stream));
        this._logger.debug(srcAdding(src.name, false), srcEmpty(src.name), src.stream);
        this._streams.add(Object.assign({}, src, { required: false }));
    }
    /**
     * @param {?} name
     * @return {?}
     */
    remStream(name) {
        this._logger.check(this._triggered, rmWhenRunning(name));
        this._logger.print(removingStream(), name);
        this._streams.remove(name);
    }
    /**
     * Triggers
     * @param {?=} overrides
     * @return {?}
     */
    refresh(overrides = {}) {
        this.overrides = overrides;
        this._trigger$.next(TRIGGER_REFRESH);
    }
    /**
     * @return {?}
     */
    reload() {
        if (this._loaded) {
            this.overrides = { forceReload: true };
        }
        this._reloading = true;
        this._trigger$.next(TRIGGER_RELOAD);
    }
    /**
     * Data processing that can be completely customized.
     * @param {?} args
     * @return {?}
     */
    reqArguments(args) {
        return args;
    }
    /**
     * Data Fetching Methods
     * @private
     * @param {?} streamed
     * @return {?}
     */
    _blockStart(streamed) {
        // check if it's not configured to start after the initial optional stream
        /** @type {?} */
        const block = !this._config.autoStart && streamed[1] === TRIGGER_INIT;
        if (this._triggered === 1) {
            this._logger.debug(isAutoStarting(), notAutoStarting(this._streams.length), !block);
        }
        if (block) {
            this._loading = false;
        }
        return block;
    }
    /**
     * @private
     * @return {?}
     */
    _getArgs() {
        // merge all the getters outputs
        this.arguments = this._streams.args(this.defaults, this.overrides);
        this.overrides = {};
        this._logger.print(resolvedArgs(), this.arguments);
        // TODO consider any edge case with forceReload
        delete this.arguments.forceReload;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.arguments);
    }
    /**
     * @private
     * @return {?}
     */
    _isEqual() {
        return (/**
         * @param {?} prev
         * @param {?} curr
         * @return {?}
         */
        (prev, curr) => !this._reloading && Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(prev, curr));
    }
    /**
     * @private
     * @return {?}
     */
    _preQuery() {
        // state update
        this._loading = true;
        this._reloading = false;
        this._outputMsg = '';
        this._logger.clearErrors();
        this._change$.next({});
    }
    /**
     * @private
     * @param {?} args
     * @return {?}
     */
    _execQuery(args) {
        /** @type {?} */
        const query = this.rawFetch(args);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(query, 
        // timers check
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["timer"])(5000, 8000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(query), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(3) // 5s, 13s, 21s
        )).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(3), 
        // delay check
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} val
         * @return {?}
         */
        val => {
            if (typeof val !== 'number') {
                this._logger.print(queryResponse(), val);
            }
            else {
                this._logger.print(queryTimeout(), val);
                try {
                    this._outputMsg = this._logger.getTimeoutError(val);
                }
                catch (e) {
                    this._logger.addError('timeout', e.message);
                    this._loading = false;
                }
                this._change$.next({});
            }
        })), 
        // discard timer result
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} result
         * @return {?}
         */
        result => typeof result !== 'number')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        err => {
            // isolate query error
            this._logger.handleError('query', err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.rawDefault());
        })));
    }
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    _updateTotal(res) {
        if (!this.hasErrors) {
            // microtask as workaround for change detection
            this.rawTotal(res)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
             * @param {?} total
             * @return {?}
             */
            total => this._logger.print(responseTotal(), total))))
                .subscribe((/**
             * @param {?} total
             * @return {?}
             */
            total => (this._total = total)));
        }
    }
    /**
     * @private
     * @param {?} res
     * @return {?}
     */
    _postQuery(res) {
        /** @type {?} */
        const hasErrors = this.hasErrors;
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
    }
    /**
     * @private
     * @param {?} err
     * @return {?}
     */
    _processException(err) {
        this._logger.print(resException(), err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
    }
    /**
     * Data API
     * @return {?}
     */
    connect() {
        return (/** @type {?} */ (this._streams.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this._disconnect$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @return {?}
         */
        () => this._triggered++)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["skipWhile"])((/**
         * @param {?} val
         * @return {?}
         */
        val => this._blockStart(val))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
         * @return {?}
         */
        () => this._getArgs())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} req
         * @return {?}
         */
        req => this.reqArguments(req))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(this._isEqual()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @return {?}
         */
        () => this._preQuery())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])((/**
         * @param {?} req
         * @return {?}
         */
        req => this._execQuery(req))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((/**
         * @param {?} raw
         * @return {?}
         */
        raw => this._updateTotal(raw))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} raw
         * @return {?}
         */
        raw => this._postQuery(raw))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        err => this._processException(err))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])((/**
         * @param {?} res
         * @return {?}
         */
        res => typeof res !== 'boolean')))));
    }
    /**
     * @return {?}
     */
    disconnect() {
        this._trigger$.complete();
        this._change$.complete();
        this._disconnect$.next();
        this._disconnect$.complete();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template REQ, RAW, RES
 */
class DataSourceContainer {
    constructor() {
        this.diameter = 40;
        this.strokeWidth = 5;
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._validateSource();
    }
    /**
     * @private
     * @return {?}
     */
    _validateSource() {
        if (!this.dataSource) {
            throw Error(missingDataSourceInput());
        }
    }
}
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
DataSourceContainer.ctorParameters = () => [];
DataSourceContainer.propDecorators = {
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataSourceEmpty {
}
DataSourceEmpty.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'mat-datasource-empty',
                host: {
                    class: 'mat-datasource-empty'
                }
            },] }
];
class DataSourceError {
}
DataSourceError.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'mat-datasource-error',
                host: {
                    class: 'mat-datasource-error'
                }
            },] }
];
class DataSourceLoading {
}
DataSourceLoading.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                selector: 'mat-datasource-loading',
                host: {
                    class: 'mat-datasource-loading'
                }
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template REQ, RAW, RES
 */
class DataSourceOverlay {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._validateSource();
        // listen source changes
        this.dataSource.change$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.onDestroy)).subscribe((/**
         * @return {?}
         */
        () => {
            this._display =
                this.dataSource.isLoading ||
                    this.dataSource.hasErrors ||
                    this.dataSource.isEmpty
                    ? 'flex'
                    : 'none';
            this.cdr.markForCheck();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _validateSource() {
        if (!this.dataSource) {
            throw Error(missingDataSourceInput());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.onDestroy.next();
        this.onDestroy.complete();
    }
}
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
DataSourceOverlay.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
DataSourceOverlay.propDecorators = {
    dataSource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    diameter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    strokeWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    _display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["HostBinding"], args: ['style.display',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MatDataSourceModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template REQ, RAW, RES
 */
class ReactiveDataSource extends MatDataSource {
    constructor() {
        super(...arguments);
        this._pageIndex = 0;
        this._pageSize = 10;
    }
    /**
     * Pagination Settings
     * @return {?}
     */
    get pageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set pageIndex(size) {
        this._logger.check(isNaN(Number(size)), nonNumeric('pageIndex'));
        this._logger.print(setValue('PageIndex'), Number(size));
        this._pageIndex = Number(size);
    }
    /**
     * @return {?}
     */
    get pageSize() {
        return this._pageSize;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set pageSize(size) {
        if (size) {
            this._logger.check(isNaN(Number(size)), nonNumeric('pageSize'));
            this._logger.print(setValue('PageSize'), Number(size));
            this._pageSize = Number(size);
        }
    }
    // be sure the paginator's view has been initialized
    /**
     * @param {?} paginator
     * @param {?} getter
     * @return {?}
     */
    setPaginator(paginator, getter) {
        this.addOptional({
            name: 'MatPaginator',
            stream: paginator.page,
            getter: getter(this.pageSize)
        });
    }
    // sort changes emitted will trigger an update
    /**
     * @param {?} sort
     * @param {?} getter
     * @return {?}
     */
    setSort(sort, getter) {
        this.addOptional({
            name: 'MatSort',
            stream: sort.sortChange,
            getter
        });
    }
    /**
     * Attachs an autocompleter with this data source filtered. Note that
     * the stream provided will be accessed during change detection and should not directly change
     * values that are bound in template views.
     * @return {?} Observable that emits a new value when the data changes.
     */
    attach() {
        return this.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((/**
         * @param {?} res
         * @return {?}
         */
        res => this.resFilter(res))));
    }
}

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
    (pageSize) => {
        // : DataSourceGetter<T>
        return (/**
         * @return {?}
         */
        () => ({
            pageIndex: paginator ? paginator.pageIndex : 0,
            pageSize: paginator ? paginator.pageSize : pageSize
        }));
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
    () => {
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
//# sourceMappingURL=default~roles-roles-module~usuarios-usuarios-module-es2015.js.map