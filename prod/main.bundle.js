webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(170);
	var platform_browser_dynamic_1 = __webpack_require__(290);
	var material_component_1 = __webpack_require__(425);
	core_1.enableProdMode();
	platform_browser_dynamic_1.bootstrap(material_component_1.MaterialComponent, [http_1.HTTP_PROVIDERS])
	    .then(function (success) { console.log("Amgular material  is ready"); })
	    .catch(function (error) { return console.log(error); });


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var portal_1 = __webpack_require__(213);
	/**
	 * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
	 * the directive instance itself can be attached to a host, enabling declarative use of portals.
	 *
	 * Usage:
	 * <template portal #greeting>
	 *   <p> Hello {{name}} </p>
	 * </template>
	 */
	var TemplatePortalDirective = (function (_super) {
	    __extends(TemplatePortalDirective, _super);
	    function TemplatePortalDirective(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    TemplatePortalDirective = __decorate([
	        core_1.Directive({
	            selector: '[portal]',
	            exportAs: 'portal',
	        }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
	    ], TemplatePortalDirective);
	    return TemplatePortalDirective;
	}(portal_1.TemplatePortal));
	exports.TemplatePortalDirective = TemplatePortalDirective;
	/**
	 * Directive version of a PortalHost. Because the directive *is* a PortalHost, portals can be
	 * directly attached to it, enabling declarative use.
	 *
	 * Usage:
	 * <template [portalHost]="greeting"></template>
	 */
	var PortalHostDirective = (function (_super) {
	    __extends(PortalHostDirective, _super);
	    function PortalHostDirective(_componentResolver, _viewContainerRef) {
	        _super.call(this);
	        this._componentResolver = _componentResolver;
	        this._viewContainerRef = _viewContainerRef;
	    }
	    Object.defineProperty(PortalHostDirective.prototype, "portal", {
	        get: function () {
	            return this._portal;
	        },
	        set: function (p) {
	            this._replaceAttachedPortal(p);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /** Attach the given ComponentPortal to this PortlHost using the ComponentResolver. */
	    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
	        var _this = this;
	        portal.setAttachedHost(this);
	        // If the portal specifies an origin, use that as the logical location of the component
	        // in the application tree. Otherwise use the location of this PortalHost.
	        var viewContainerRef = portal.viewContainerRef != null ?
	            portal.viewContainerRef :
	            this._viewContainerRef;
	        return this._componentResolver.resolveComponent(portal.component).then(function (componentFactory) {
	            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, viewContainerRef.parentInjector);
	            _this.setDisposeFn(function () { return ref.destroy(); });
	            return ref;
	        });
	    };
	    /** Attach the given TemplatePortal to this PortlHost as an embedded View. */
	    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
	        var _this = this;
	        portal.setAttachedHost(this);
	        this._viewContainerRef.createEmbeddedView(portal.templateRef);
	        this.setDisposeFn(function () { return _this._viewContainerRef.clear(); });
	        // TODO(jelbourn): return locals from view
	        return Promise.resolve(new Map());
	    };
	    /** Detatches the currently attached Portal (if there is one) and attaches the given Portal. */
	    PortalHostDirective.prototype._replaceAttachedPortal = function (p) {
	        var _this = this;
	        var maybeDetach = this.hasAttached() ? this.detach() : Promise.resolve();
	        maybeDetach.then(function () {
	            if (p != null) {
	                _this.attach(p);
	                _this._portal = p;
	            }
	        });
	    };
	    PortalHostDirective = __decorate([
	        core_1.Directive({
	            selector: '[portalHost]',
	            inputs: ['portal: portalHost']
	        }), 
	        __metadata('design:paramtypes', [core_1.ComponentResolver, core_1.ViewContainerRef])
	    ], PortalHostDirective);
	    return PortalHostDirective;
	}(portal_1.BasePortalHost));
	exports.PortalHostDirective = PortalHostDirective;
	exports.PORTAL_DIRECTIVES = [TemplatePortalDirective, PortalHostDirective];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/portal/portal-directives.js.map

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var error_1 = __webpack_require__(82);
	/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
	var MdComponentPortalAttachedToDomWithoutOriginError = (function (_super) {
	    __extends(MdComponentPortalAttachedToDomWithoutOriginError, _super);
	    function MdComponentPortalAttachedToDomWithoutOriginError() {
	        _super.call(this, 'A ComponentPortal must have an origin set when attached to a DomPortalHost ' +
	            'because the DOM element is not part of the Angular application context.');
	    }
	    return MdComponentPortalAttachedToDomWithoutOriginError;
	}(error_1.MdError));
	exports.MdComponentPortalAttachedToDomWithoutOriginError = MdComponentPortalAttachedToDomWithoutOriginError;
	/** Exception thrown when attempting to attach a null portal to a host. */
	var MdNullPortalError = (function (_super) {
	    __extends(MdNullPortalError, _super);
	    function MdNullPortalError() {
	        _super.call(this, 'Must provide a portal to attach');
	    }
	    return MdNullPortalError;
	}(error_1.MdError));
	exports.MdNullPortalError = MdNullPortalError;
	/** Exception thrown when attempting to attach a portal to a host that is already attached. */
	var MdPortalAlreadyAttachedError = (function (_super) {
	    __extends(MdPortalAlreadyAttachedError, _super);
	    function MdPortalAlreadyAttachedError() {
	        _super.call(this, 'Host already has a portal attached');
	    }
	    return MdPortalAlreadyAttachedError;
	}(error_1.MdError));
	exports.MdPortalAlreadyAttachedError = MdPortalAlreadyAttachedError;
	/** Exception thrown when attempting to attach a portal to an already-disposed host. */
	var MdPortalHostAlreadyDisposedError = (function (_super) {
	    __extends(MdPortalHostAlreadyDisposedError, _super);
	    function MdPortalHostAlreadyDisposedError() {
	        _super.call(this, 'This PortalHost has already been disposed');
	    }
	    return MdPortalHostAlreadyDisposedError;
	}(error_1.MdError));
	exports.MdPortalHostAlreadyDisposedError = MdPortalHostAlreadyDisposedError;
	/** Exception thrown when attempting to attach an unknown portal type. */
	var MdUnknownPortalTypeError = (function (_super) {
	    __extends(MdUnknownPortalTypeError, _super);
	    function MdUnknownPortalTypeError() {
	        _super.call(this, 'Attempting to attach an unknown Portal type. ' +
	            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
	    }
	    return MdUnknownPortalTypeError;
	}(error_1.MdError));
	exports.MdUnknownPortalTypeError = MdUnknownPortalTypeError;
	/** Exception thrown when attempting to attach a portal to a null host. */
	var MdNullPortalHostError = (function (_super) {
	    __extends(MdNullPortalHostError, _super);
	    function MdNullPortalHostError() {
	        _super.call(this, 'Attmepting to attach a portal to a null PortalHost');
	    }
	    return MdNullPortalHostError;
	}(error_1.MdError));
	exports.MdNullPortalHostError = MdNullPortalHostError;
	/** Exception thrown when attempting to detach a portal that is not attached. */
	var MdNoPortalAttachedError = (function (_super) {
	    __extends(MdNoPortalAttachedError, _super);
	    function MdNoPortalAttachedError() {
	        _super.call(this, 'Attmepting to detach a portal that is not attached to a host');
	    }
	    return MdNoPortalAttachedError;
	}(error_1.MdError));
	exports.MdNoPortalAttachedError = MdNoPortalAttachedError;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/portal/portal-errors.js.map

/***/ },

/***/ 213:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var portal_errors_1 = __webpack_require__(212);
	/**
	 * A `Portal` is something that you want to render somewhere else.
	 * It can be attach to / detached from a `PortalHost`.
	 */
	var Portal = (function () {
	    function Portal() {
	    }
	    /** Attach this portal to a host. */
	    Portal.prototype.attach = function (host) {
	        if (host == null) {
	            throw new portal_errors_1.MdNullPortalHostError();
	        }
	        if (host.hasAttached()) {
	            throw new portal_errors_1.MdPortalAlreadyAttachedError();
	        }
	        this._attachedHost = host;
	        return host.attach(this);
	    };
	    /** Detach this portal from its host */
	    Portal.prototype.detach = function () {
	        var host = this._attachedHost;
	        if (host == null) {
	            throw new portal_errors_1.MdNoPortalAttachedError();
	        }
	        this._attachedHost = null;
	        return host.detach();
	    };
	    Object.defineProperty(Portal.prototype, "isAttached", {
	        /** Whether this portal is attached to a host. */
	        get: function () {
	            return this._attachedHost != null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Sets the PortalHost reference without performing `attach()`. This is used directly by
	     * the PortalHost when it is performing an `attach()` or `detatch()`.
	     */
	    Portal.prototype.setAttachedHost = function (host) {
	        this._attachedHost = host;
	    };
	    return Portal;
	}());
	exports.Portal = Portal;
	/**
	 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
	 */
	var ComponentPortal = (function (_super) {
	    __extends(ComponentPortal, _super);
	    function ComponentPortal(component, viewContainerRef) {
	        if (viewContainerRef === void 0) { viewContainerRef = null; }
	        _super.call(this);
	        this.component = component;
	        this.viewContainerRef = viewContainerRef;
	    }
	    return ComponentPortal;
	}(Portal));
	exports.ComponentPortal = ComponentPortal;
	/**
	 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
	 */
	var TemplatePortal = (function (_super) {
	    __extends(TemplatePortal, _super);
	    function TemplatePortal(template, viewContainerRef) {
	        _super.call(this);
	        /**
	         * Additional locals for the instantiated embedded view.
	         * These locals can be seen as "exports" for the template, such as how ngFor has
	         * index / event / odd.
	         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
	         */
	        this.locals = new Map();
	        this.templateRef = template;
	        this.viewContainerRef = viewContainerRef;
	    }
	    Object.defineProperty(TemplatePortal.prototype, "origin", {
	        get: function () {
	            return this.templateRef.elementRef;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    TemplatePortal.prototype.attach = function (host, locals) {
	        this.locals = locals == null ? new Map() : locals;
	        return _super.prototype.attach.call(this, host);
	    };
	    TemplatePortal.prototype.detach = function () {
	        this.locals = new Map();
	        return _super.prototype.detach.call(this);
	    };
	    return TemplatePortal;
	}(Portal));
	exports.TemplatePortal = TemplatePortal;
	/**
	 * Partial implementation of PortalHost that only deals with attaching either a
	 * ComponentPortal or a TemplatePortal.
	 */
	var BasePortalHost = (function () {
	    function BasePortalHost() {
	        /** Whether this host has already been permanently disposed. */
	        this._isDisposed = false;
	    }
	    /** Whether this host has an attached portal. */
	    BasePortalHost.prototype.hasAttached = function () {
	        return this._attachedPortal != null;
	    };
	    BasePortalHost.prototype.attach = function (portal) {
	        if (portal == null) {
	            throw new portal_errors_1.MdNullPortalError();
	        }
	        if (this.hasAttached()) {
	            throw new portal_errors_1.MdPortalAlreadyAttachedError();
	        }
	        if (this._isDisposed) {
	            throw new portal_errors_1.MdPortalHostAlreadyDisposedError();
	        }
	        if (portal instanceof ComponentPortal) {
	            this._attachedPortal = portal;
	            return this.attachComponentPortal(portal);
	        }
	        else if (portal instanceof TemplatePortal) {
	            this._attachedPortal = portal;
	            return this.attachTemplatePortal(portal);
	        }
	        throw new portal_errors_1.MdUnknownPortalTypeError();
	    };
	    BasePortalHost.prototype.detach = function () {
	        this._attachedPortal.setAttachedHost(null);
	        this._attachedPortal = null;
	        if (this._disposeFn != null) {
	            this._disposeFn();
	            this._disposeFn = null;
	        }
	        return Promise.resolve(null);
	    };
	    BasePortalHost.prototype.dispose = function () {
	        if (this.hasAttached()) {
	            this.detach();
	        }
	        this._isDisposed = true;
	    };
	    BasePortalHost.prototype.setDisposeFn = function (fn) {
	        this._disposeFn = fn;
	    };
	    return BasePortalHost;
	}());
	exports.BasePortalHost = BasePortalHost;
	var portal_directives_1 = __webpack_require__(94);
	exports.PORTAL_DIRECTIVES = portal_directives_1.PORTAL_DIRECTIVES;
	exports.TemplatePortalDirective = portal_directives_1.TemplatePortalDirective;
	exports.PortalHostDirective = portal_directives_1.PortalHostDirective;
	var dom_portal_host_1 = __webpack_require__(340);
	exports.DomPortalHost = dom_portal_host_1.DomPortalHost;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/portal/portal.js.map

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(170);
	var error_1 = __webpack_require__(82);
	var Observable_1 = __webpack_require__(14);
	__webpack_require__(585);
	__webpack_require__(586);
	__webpack_require__(591);
	__webpack_require__(589);
	__webpack_require__(588);
	__webpack_require__(592);
	__webpack_require__(590);
	__webpack_require__(587);
	/** Exception thrown when attempting to load an icon with a name that cannot be found. */
	var MdIconNameNotFoundError = (function (_super) {
	    __extends(MdIconNameNotFoundError, _super);
	    function MdIconNameNotFoundError(iconName) {
	        _super.call(this, "Unable to find icon with the name \"" + iconName + "\"");
	    }
	    return MdIconNameNotFoundError;
	}(error_1.MdError));
	exports.MdIconNameNotFoundError = MdIconNameNotFoundError;
	/**
	 * Exception thrown when attempting to load SVG content that does not contain the expected
	 * <svg> tag.
	 */
	var MdIconSvgTagNotFoundError = (function (_super) {
	    __extends(MdIconSvgTagNotFoundError, _super);
	    function MdIconSvgTagNotFoundError() {
	        _super.call(this, '<svg> tag not found');
	    }
	    return MdIconSvgTagNotFoundError;
	}(error_1.MdError));
	exports.MdIconSvgTagNotFoundError = MdIconSvgTagNotFoundError;
	/**
	  * Configuration for an icon, including the URL and possibly the cached SVG element.
	  * @internal
	  */
	var SvgIconConfig = (function () {
	    function SvgIconConfig(url) {
	        this.url = url;
	        this.svgElement = null;
	    }
	    return SvgIconConfig;
	}());
	/** Returns the cache key to use for an icon namespace and name. */
	var iconKey = function (namespace, name) { return namespace + ':' + name; };
	/**
	 * Service to register and display icons used by the <md-icon> component.
	 * - Registers icon URLs by namespace and name.
	 * - Registers icon set URLs by namespace.
	 * - Registers aliases for CSS classes, for use with icon fonts.
	 * - Loads icons from URLs and extracts individual icons from icon sets.
	 */
	var MdIconRegistry = (function () {
	    function MdIconRegistry(_http) {
	        this._http = _http;
	        /**
	         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
	         */
	        this._svgIconConfigs = new Map();
	        /**
	         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
	         * Multiple icon sets can be registered under the same namespace.
	         */
	        this._iconSetConfigs = new Map();
	        /** Cache for icons loaded by direct URLs. */
	        this._cachedIconsByUrl = new Map();
	        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
	        this._inProgressUrlFetches = new Map();
	        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
	        this._fontCssClassesByAlias = new Map();
	        /**
	         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
	         * The default 'material-icons' value assumes that the material icon font has been loaded as
	         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
	         */
	        this._defaultFontSetClass = 'material-icons';
	    }
	    /** Registers an icon by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
	        return this.addSvgIconInNamespace('', iconName, url);
	    };
	    /** Registers an icon by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
	        var key = iconKey(namespace, iconName);
	        this._svgIconConfigs.set(key, new SvgIconConfig(url));
	        return this;
	    };
	    /** Registers an icon set by URL in the default namespace. */
	    MdIconRegistry.prototype.addSvgIconSet = function (url) {
	        return this.addSvgIconSetInNamespace('', url);
	    };
	    /** Registers an icon set by URL in the specified namespace. */
	    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
	        var config = new SvgIconConfig(url);
	        if (this._iconSetConfigs.has(namespace)) {
	            this._iconSetConfigs.get(namespace).push(config);
	        }
	        else {
	            this._iconSetConfigs.set(namespace, [config]);
	        }
	        return this;
	    };
	    /**
	     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
	     * component with the alias as the fontSet input will cause the class name to be applied
	     * to the <md-icon> element.
	     */
	    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
	        if (className === void 0) { className = alias; }
	        this._fontCssClassesByAlias.set(alias, className);
	        return this;
	    };
	    /**
	     * Returns the CSS class name associated with the alias by a previous call to
	     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
	     */
	    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
	        return this._fontCssClassesByAlias.get(alias) || alias;
	    };
	    /**
	     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
	        this._defaultFontSetClass = className;
	        return this;
	    };
	    /**
	     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
	     * have a fontSet input value, and is not loading an icon by name or URL.
	     */
	    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
	        return this._defaultFontSetClass;
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
	     * The response from the URL may be cached so this will not always cause an HTTP request, but
	     * the produced element will always be a new copy of the originally fetched icon. (That is,
	     * it will not contain any modifications made to elements previously returned).
	     */
	    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
	        var _this = this;
	        if (this._cachedIconsByUrl.has(url)) {
	            return Observable_1.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
	        }
	        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
	            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
	            .map(function (svg) { return cloneSvg(svg); });
	    };
	    /**
	     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
	     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
	     * if not, the Observable will throw an MdIconNameNotFoundError.
	     */
	    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
	        if (namespace === void 0) { namespace = ''; }
	        // Return (copy of) cached icon if possible.
	        var key = iconKey(namespace, name);
	        if (this._svgIconConfigs.has(key)) {
	            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
	        }
	        // See if we have any icon sets registered for the namespace.
	        var iconSetConfigs = this._iconSetConfigs.get(namespace);
	        if (iconSetConfigs) {
	            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
	        }
	        return Observable_1.Observable.throw(new MdIconNameNotFoundError(key));
	    };
	    /**
	     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
	     */
	    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
	        if (config.svgElement) {
	            // We already have the SVG element for this icon, return a copy.
	            return Observable_1.Observable.of(cloneSvg(config.svgElement));
	        }
	        else {
	            // Fetch the icon from the config's URL, cache it, and return a copy.
	            return this._loadSvgIconFromConfig(config)
	                .do(function (svg) { return config.svgElement = svg; })
	                .map(function (svg) { return cloneSvg(svg); });
	        }
	    };
	    /**
	     * Attempts to find an icon with the specified name in any of the SVG icon sets.
	     * First searches the available cached icons for a nested element with a matching name, and
	     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
	     * that have not been cached, and searches again after all fetches are completed.
	     * The returned Observable produces the SVG element if possible, and throws
	     * MdIconNameNotFoundError if no icon with the specified name can be found.
	     */
	    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
	        var _this = this;
	        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
	        // requested name.
	        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	        if (namedIcon) {
	            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
	            // time anyway, there's probably not much advantage compared to just always extracting
	            // it from the icon set.
	            return Observable_1.Observable.of(namedIcon);
	        }
	        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
	        // fetched, fetch them now and look for iconName in the results.
	        var iconSetFetchRequests = iconSetConfigs
	            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
	            .map(function (iconSetConfig) {
	            return _this._loadSvgIconSetFromConfig(iconSetConfig)
	                .catch(function (err, caught) {
	                // Swallow errors fetching individual URLs so the combined Observable won't
	                // necessarily fail.
	                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
	                return Observable_1.Observable.of(null);
	            })
	                .do(function (svg) {
	                // Cache SVG element.
	                if (svg) {
	                    iconSetConfig.svgElement = svg;
	                }
	            });
	        });
	        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
	        // cached SVG element (unless the request failed), and we can check again for the icon.
	        return Observable_1.Observable.forkJoin(iconSetFetchRequests)
	            .map(function (ignoredResults) {
	            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
	            if (!foundIcon) {
	                throw new MdIconNameNotFoundError(name);
	            }
	            return foundIcon;
	        });
	    };
	    /**
	     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
	        // Iterate backwards, so icon sets added later have precedence.
	        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
	            var config = iconSetConfigs[i];
	            if (config.svgElement) {
	                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
	                if (foundIcon) {
	                    return foundIcon;
	                }
	            }
	        }
	        return null;
	    };
	    /**
	     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
	        var _this = this;
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
	    };
	    /**
	     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
	     * from it.
	     */
	    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
	        var _this = this;
	        // TODO: Document that icons should only be loaded from trusted sources.
	        return this._fetchUrl(config.url)
	            .map(function (svgText) { return _this._svgElementFromString(svgText); });
	    };
	    /**
	     * Creates a DOM element from the given SVG string, and adds default attributes.
	     */
	    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
	        var svg = this._svgElementFromString(responseText);
	        this._setSvgAttributes(svg, config);
	        return svg;
	    };
	    /**
	     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
	     * tag matches the specified name. If found, copies the nested element to a new SVG element and
	     * returns it. Returns null if no matching element is found.
	     */
	    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
	        var iconNode = iconSet.querySelector('#' + iconName);
	        if (!iconNode) {
	            return null;
	        }
	        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
	        // the content of a new <svg> node.
	        if (iconNode.tagName.toLowerCase() == 'svg') {
	            return this._setSvgAttributes(iconNode.cloneNode(true), config);
	        }
	        // createElement('SVG') doesn't work as expected; the DOM ends up with
	        // the correct nodes, but the SVG content doesn't render. Instead we
	        // have to create an empty SVG node using innerHTML and append its content.
	        // Elements created using DOMParser.parseFromString have the same problem.
	        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
	        var svg = this._svgElementFromString('<svg></svg>');
	        // Clone the node so we don't remove it from the parent icon set element.
	        svg.appendChild(iconNode.cloneNode(true));
	        return this._setSvgAttributes(svg, config);
	    };
	    /**
	     * Creates a DOM element from the given SVG string.
	     */
	    MdIconRegistry.prototype._svgElementFromString = function (str) {
	        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
	        // creating an element from an HTML string.
	        var div = document.createElement('DIV');
	        div.innerHTML = str;
	        var svg = div.querySelector('svg');
	        if (!svg) {
	            throw new MdIconSvgTagNotFoundError();
	        }
	        return svg;
	    };
	    /**
	     * Sets the default attributes for an SVG element to be used as an icon.
	     */
	    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
	        if (!svg.getAttribute('xmlns')) {
	            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	        }
	        svg.setAttribute('fit', '');
	        svg.setAttribute('height', '100%');
	        svg.setAttribute('width', '100%');
	        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
	        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
	        return svg;
	    };
	    /**
	     * Returns an Observable which produces the string contents of the given URL. Results may be
	     * cached, so future calls with the same URL may not cause another HTTP request.
	     */
	    MdIconRegistry.prototype._fetchUrl = function (url) {
	        var _this = this;
	        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
	        // already a request in progress for that URL. It's necessary to call share() on the
	        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
	        if (this._inProgressUrlFetches.has(url)) {
	            return this._inProgressUrlFetches.get(url);
	        }
	        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
	        // Observable. Figure out why and fix it.
	        var req = this._http.get(url)
	            .map(function (response) { return response.text(); })
	            .finally(function () {
	            _this._inProgressUrlFetches.delete(url);
	        })
	            .share();
	        this._inProgressUrlFetches.set(url, req);
	        return req;
	    };
	    MdIconRegistry = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], MdIconRegistry);
	    return MdIconRegistry;
	}());
	exports.MdIconRegistry = MdIconRegistry;
	/** Clones an SVGElement while preserving type information. */
	function cloneSvg(svg) {
	    return svg.cloneNode(true);
	}
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/icon/icon-registry.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(14);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = (function (_super) {
	    __extends(EmptyObservable, _super);
	    function EmptyObservable(scheduler) {
	        _super.call(this);
	        this.scheduler = scheduler;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */
	    EmptyObservable.create = function (scheduler) {
	        return new EmptyObservable(scheduler);
	    };
	    EmptyObservable.dispatch = function (arg) {
	        var subscriber = arg.subscriber;
	        subscriber.complete();
	    };
	    EmptyObservable.prototype._subscribe = function (subscriber) {
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	        }
	        else {
	            subscriber.complete();
	        }
	    };
	    return EmptyObservable;
	}(Observable_1.Observable));
	exports.EmptyObservable = EmptyObservable;
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var portal_1 = __webpack_require__(213);
	var portal_errors_1 = __webpack_require__(212);
	/**
	 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
	 * application context.
	 *
	 * This is the only part of the portal core that directly touches the DOM.
	 */
	var DomPortalHost = (function (_super) {
	    __extends(DomPortalHost, _super);
	    function DomPortalHost(_hostDomElement, _componentResolver) {
	        _super.call(this);
	        this._hostDomElement = _hostDomElement;
	        this._componentResolver = _componentResolver;
	    }
	    /** Attach the given ComponentPortal to DOM element using the ComponentResolver. */
	    DomPortalHost.prototype.attachComponentPortal = function (portal) {
	        var _this = this;
	        if (portal.viewContainerRef == null) {
	            throw new portal_errors_1.MdComponentPortalAttachedToDomWithoutOriginError();
	        }
	        return this._componentResolver.resolveComponent(portal.component).then(function (componentFactory) {
	            var ref = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.viewContainerRef.parentInjector);
	            var hostView = ref.hostView;
	            _this._hostDomElement.appendChild(hostView.rootNodes[0]);
	            _this.setDisposeFn(function () { return ref.destroy(); });
	            return ref;
	        });
	    };
	    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
	        var _this = this;
	        var viewContainer = portal.viewContainerRef;
	        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
	        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
	        this.setDisposeFn((function () {
	            var index = viewContainer.indexOf(viewRef);
	            if (index != -1) {
	                viewContainer.remove(index);
	            }
	        }));
	        // TODO(jelbourn): Return locals from view.
	        return Promise.resolve(new Map());
	    };
	    DomPortalHost.prototype.dispose = function () {
	        _super.prototype.dispose.call(this);
	        if (this._hostDomElement.parentNode != null) {
	            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
	        }
	    };
	    return DomPortalHost;
	}(portal_1.BasePortalHost));
	exports.DomPortalHost = DomPortalHost;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/core/portal/dom-portal-host.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var error_1 = __webpack_require__(82);
	var icon_registry_1 = __webpack_require__(214);
	var icon_registry_2 = __webpack_require__(214);
	exports.MdIconRegistry = icon_registry_2.MdIconRegistry;
	/** Exception thrown when an invalid icon name is passed to an md-icon component. */
	var MdIconInvalidNameError = (function (_super) {
	    __extends(MdIconInvalidNameError, _super);
	    function MdIconInvalidNameError(iconName) {
	        _super.call(this, "Invalid icon name: \"" + name + "\"");
	    }
	    return MdIconInvalidNameError;
	}(error_1.MdError));
	exports.MdIconInvalidNameError = MdIconInvalidNameError;
	/**
	 * Component to display an icon. It can be used in the following ways:
	 * - Specify the svgSrc input to load an SVG icon from a URL. The SVG content is directly inlined
	 *   as a child of the <md-icon> component, so that CSS styles can easily be applied to it.
	 *   The URL is loaded via an XMLHttpRequest, so it must be on the same domain as the page or its
	 *   server must be configured to allow cross-domain requests.
	 *   Example:
	 *     <md-icon svgSrc="assets/arrow.svg"></md-icon>
	 *
	 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
	 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
	 *   MdIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
	 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
	 *   Examples:
	 *     <md-icon svgIcon="left-arrow"></md-icon>
	 *     <md-icon svgIcon="animals:cat"></md-icon>
	 *
	 * - Use a font ligature as an icon by putting the ligature text in the content of the <md-icon>
	 *   component. By default the Material icons font is used as described at
	 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
	 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
	 *   desired font, or to an alias previously registered with MdIconRegistry.registerFontClassAlias.
	 *   Examples:
	 *     <md-icon>home</md-icon>
	 *     <md-icon fontSet="myfont">sun</md-icon>
	 *
	 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
	 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
	 *   CSS class which causes the glyph to be displayed via a :before selector, as in
	 *   https://fortawesome.github.io/Font-Awesome/examples/
	 *   Example:
	 *     <md-icon fontSet="fa" fontIcon="alarm"></md-icon>
	 */
	var MdIcon = (function () {
	    function MdIcon(_element, _renderer, _mdIconRegistry) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._mdIconRegistry = _mdIconRegistry;
	        this.hostAriaLabel = '';
	    }
	    /**
	     * Splits an svgIcon binding value into its icon set and icon name components.
	     * Returns a 2-element array of [(icon set), (icon name)].
	     * The separator for the two fields is ':'. If there is no separator, an empty
	     * string is returned for the icon set and the entire value is returned for
	     * the icon name. If the argument is falsy, returns an array of two empty strings.
	     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
	     * Examples:
	     *   'social:cake' -> ['social', 'cake']
	     *   'penguin' -> ['', 'penguin']
	     *   null -> ['', '']
	     *   'a:b:c' -> (throws MdIconInvalidNameError)
	     */
	    MdIcon.prototype._splitIconName = function (iconName) {
	        if (!iconName) {
	            return ['', ''];
	        }
	        var parts = iconName.split(':');
	        switch (parts.length) {
	            case 1:
	                // Use default namespace.
	                return ['', parts[0]];
	            case 2:
	                return parts;
	            default:
	                throw new MdIconInvalidNameError(iconName);
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnChanges = function (changes) {
	        var _this = this;
	        var changedInputs = Object.keys(changes);
	        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
	        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
	            if (this.svgIcon) {
	                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
	                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	            else if (this.svgSrc) {
	                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
	            }
	        }
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	        this._updateAriaLabel();
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngOnInit = function () {
	        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
	        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
	        if (this._usingFontIcon()) {
	            this._updateFontIconClasses();
	        }
	    };
	    /** TODO: internal */
	    MdIcon.prototype.ngAfterViewChecked = function () {
	        // Update aria label here because it may depend on the projected text content.
	        // (e.g. <md-icon>home</md-icon> should use 'home').
	        this._updateAriaLabel();
	    };
	    MdIcon.prototype._updateAriaLabel = function () {
	        var ariaLabel = this._getAriaLabel();
	        if (ariaLabel) {
	            this._renderer.setElementAttribute(this._element.nativeElement, 'aria-label', ariaLabel);
	        }
	    };
	    MdIcon.prototype._getAriaLabel = function () {
	        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
	        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
	        // the text content of the directive.
	        var label = this.hostAriaLabel ||
	            this.alt ||
	            this.fontIcon ||
	            this._splitIconName(this.svgIcon)[1];
	        if (label) {
	            return label;
	        }
	        // The "content" of an SVG icon is not a useful label.
	        if (this._usingFontIcon()) {
	            var text = this._element.nativeElement.textContent;
	            if (text) {
	                return text;
	            }
	        }
	        // TODO: Warn here in dev mode.
	        return null;
	    };
	    MdIcon.prototype._usingFontIcon = function () {
	        return !(this.svgIcon || this.svgSrc);
	    };
	    MdIcon.prototype._setSvgElement = function (svg) {
	        var layoutElement = this._element.nativeElement;
	        // Remove existing child nodes and add the new SVG element.
	        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
	        // but it fails in IE11: https://github.com/angular/angular/issues/6327
	        layoutElement.innerHTML = '';
	        this._renderer.projectNodes(layoutElement, [svg]);
	    };
	    MdIcon.prototype._updateFontIconClasses = function () {
	        if (!this._usingFontIcon()) {
	            return;
	        }
	        var elem = this._element.nativeElement;
	        var fontSetClass = this.fontSet ?
	            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
	            this._mdIconRegistry.getDefaultFontSetClass();
	        if (fontSetClass != this._previousFontSetClass) {
	            if (this._previousFontSetClass) {
	                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
	            }
	            if (fontSetClass) {
	                this._renderer.setElementClass(elem, fontSetClass, true);
	            }
	            this._previousFontSetClass = fontSetClass;
	        }
	        if (this.fontIcon != this._previousFontIconClass) {
	            if (this._previousFontIconClass) {
	                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
	            }
	            if (this.fontIcon) {
	                this._renderer.setElementClass(elem, this.fontIcon, true);
	            }
	            this._previousFontIconClass = this.fontIcon;
	        }
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgSrc", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "svgIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontSet", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "fontIcon", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "alt", void 0);
	    __decorate([
	        core_1.Input('aria-label'), 
	        __metadata('design:type', String)
	    ], MdIcon.prototype, "hostAriaLabel", void 0);
	    MdIcon = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            template: '<ng-content></ng-content>',
	            selector: 'md-icon',
	            styles: ["/** The width/height of the icon element. */ /** This works because we're using ViewEncapsulation.None. If we used the default encapsulation, the selector would need to be \":host\". */ md-icon { background-repeat: no-repeat; display: inline-block; fill: currentColor; height: 24px; width: 24px; } "],
	            host: {
	                'role': 'img',
	            },
	            encapsulation: core_1.ViewEncapsulation.None,
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer, icon_registry_1.MdIconRegistry])
	    ], MdIcon);
	    return MdIcon;
	}());
	exports.MdIcon = MdIcon;
	exports.MD_ICON_DIRECTIVES = [MdIcon];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/icon/icon.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * The ink-bar is used to display and animate the line underneath the current active tab label.
	 * @internal
	 */
	var MdInkBar = (function () {
	    function MdInkBar(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	    }
	    /**
	     * Calculates the styles from the provided element in order to align the ink-bar to that element.
	     * @param element
	     */
	    MdInkBar.prototype.alignToElement = function (element) {
	        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left', this._getLeftPosition(element));
	        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
	    };
	    /**
	     * Generates the pixel distance from the left based on the provided element in string format.
	     * @param element
	     * @returns {string}
	     */
	    MdInkBar.prototype._getLeftPosition = function (element) {
	        return element.offsetLeft + 'px';
	    };
	    /**
	     * Generates the pixel width from the provided element in string format.
	     * @param element
	     * @returns {string}
	     */
	    MdInkBar.prototype._getElementWidth = function (element) {
	        return element.offsetWidth + 'px';
	    };
	    MdInkBar = __decorate([
	        core_1.Directive({
	            selector: 'md-ink-bar',
	        }), 
	        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef])
	    ], MdInkBar);
	    return MdInkBar;
	}());
	exports.MdInkBar = MdInkBar;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/tabs/ink-bar.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var portal_directives_1 = __webpack_require__(94);
	/** Used to flag tab contents for use with the portal directive */
	var MdTabContent = (function (_super) {
	    __extends(MdTabContent, _super);
	    function MdTabContent(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    MdTabContent = __decorate([
	        core_1.Directive({
	            selector: '[md-tab-content]'
	        }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
	    ], MdTabContent);
	    return MdTabContent;
	}(portal_directives_1.TemplatePortalDirective));
	exports.MdTabContent = MdTabContent;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/tabs/tab-content.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	/**
	 * Used in the `md-tab-group` view to display tab labels
	 * @internal
	 */
	var MdTabLabelWrapper = (function () {
	    function MdTabLabelWrapper(elementRef) {
	        this.elementRef = elementRef;
	    }
	    /**
	     * Sets focus on the wrapper element
	     */
	    MdTabLabelWrapper.prototype.focus = function () {
	        this.elementRef.nativeElement.focus();
	    };
	    MdTabLabelWrapper = __decorate([
	        core_1.Directive({
	            selector: '[md-tab-label-wrapper]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], MdTabLabelWrapper);
	    return MdTabLabelWrapper;
	}());
	exports.MdTabLabelWrapper = MdTabLabelWrapper;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/tabs/tab-label-wrapper.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var portal_directives_1 = __webpack_require__(94);
	/** Used to flag tab labels for use with the portal directive */
	var MdTabLabel = (function (_super) {
	    __extends(MdTabLabel, _super);
	    function MdTabLabel(templateRef, viewContainerRef) {
	        _super.call(this, templateRef, viewContainerRef);
	    }
	    MdTabLabel = __decorate([
	        core_1.Directive({
	            selector: '[md-tab-label]',
	        }), 
	        __metadata('design:paramtypes', [core_1.TemplateRef, core_1.ViewContainerRef])
	    ], MdTabLabel);
	    return MdTabLabel;
	}(portal_directives_1.TemplatePortalDirective));
	exports.MdTabLabel = MdTabLabel;
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/tabs/tab-label.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(1);
	var core_2 = __webpack_require__(1);
	var core_3 = __webpack_require__(1);
	var portal_directives_1 = __webpack_require__(94);
	var tab_label_1 = __webpack_require__(346);
	var tab_content_1 = __webpack_require__(344);
	var tab_label_wrapper_1 = __webpack_require__(345);
	var ink_bar_1 = __webpack_require__(343);
	/** Used to generate unique ID's for each tab component */
	var nextId = 0;
	/**
	 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
	 * animated ink-bar, keyboard navigation, and screen reader.
	 * See: https://www.google.com/design/spec/components/tabs.html
	 */
	var MdTabGroup = (function () {
	    function MdTabGroup(_zone) {
	        this._zone = _zone;
	        this.selectedIndex = 0;
	        this._focusIndex = 0;
	        this._groupId = nextId++;
	    }
	    /**
	     * Waits one frame for the view to update, then upates the ink bar
	     * Note: This must be run outside of the zone or it will create an infinite change detection loop
	     * TODO: internal
	     */
	    MdTabGroup.prototype.ngAfterViewChecked = function () {
	        var _this = this;
	        this._zone.runOutsideAngular(function () {
	            window.requestAnimationFrame(function () {
	                _this._updateInkBar();
	            });
	        });
	    };
	    /** Tells the ink-bar to align itself to the current label wrapper */
	    MdTabGroup.prototype._updateInkBar = function () {
	        this._inkBar.toArray()[0].alignToElement(this._currentLabelWrapper);
	    };
	    Object.defineProperty(MdTabGroup.prototype, "_currentLabelWrapper", {
	        /**
	         * Reference to the current label wrapper; defaults to null for initial render before the
	         * ViewChildren references are ready.
	         */
	        get: function () {
	            return this._labelWrappers
	                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
	                : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(MdTabGroup.prototype, "focusIndex", {
	        /** Tracks which element has focus; used for keyboard navigation */
	        get: function () {
	            return this._focusIndex;
	        },
	        /** When the focus index is set, we must manually send focus to the correct label */
	        set: function (value) {
	            this._focusIndex = value;
	            if (this._labelWrappers && this._labelWrappers.length) {
	                this._labelWrappers.toArray()[value].focus();
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Returns a unique id for each tab label element
	     * @internal
	     */
	    MdTabGroup.prototype.getTabLabelId = function (i) {
	        return "md-tab-label-" + this._groupId + "-" + i;
	    };
	    /**
	     * Returns a unique id for each tab content element
	     * @internal
	     */
	    MdTabGroup.prototype.getTabContentId = function (i) {
	        return "md-tab-content-" + this._groupId + "-" + i;
	    };
	    /** Increment the focus index by 1; prevent going over the number of tabs */
	    MdTabGroup.prototype.focusNextTab = function () {
	        if (this._labelWrappers && this.focusIndex < this._labelWrappers.length - 1) {
	            this.focusIndex++;
	        }
	    };
	    /** Decrement the focus index by 1; prevent going below 0 */
	    MdTabGroup.prototype.focusPreviousTab = function () {
	        if (this.focusIndex > 0) {
	            this.focusIndex--;
	        }
	    };
	    __decorate([
	        core_3.ContentChildren(tab_label_1.MdTabLabel), 
	        __metadata('design:type', core_2.QueryList)
	    ], MdTabGroup.prototype, "labels", void 0);
	    __decorate([
	        core_3.ContentChildren(tab_content_1.MdTabContent), 
	        __metadata('design:type', core_2.QueryList)
	    ], MdTabGroup.prototype, "contents", void 0);
	    __decorate([
	        core_1.ViewChildren(tab_label_wrapper_1.MdTabLabelWrapper), 
	        __metadata('design:type', core_2.QueryList)
	    ], MdTabGroup.prototype, "_labelWrappers", void 0);
	    __decorate([
	        core_1.ViewChildren(ink_bar_1.MdInkBar), 
	        __metadata('design:type', core_2.QueryList)
	    ], MdTabGroup.prototype, "_inkBar", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Number)
	    ], MdTabGroup.prototype, "selectedIndex", void 0);
	    MdTabGroup = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: 'md-tab-group',
	            template: "<div class=\"md-tab-header\" role=\"tablist\" (keydown.arrowRight)=\"focusNextTab()\" (keydown.arrowLeft)=\"focusPreviousTab()\" (keydown.enter)=\"selectedIndex = focusIndex\"> <div class=\"md-tab-label\" role=\"tab\" md-tab-label-wrapper *ngFor=\"let label of labels; let i = index\" [id]=\"getTabLabelId(i)\" [tabIndex]=\"selectedIndex == i ? 0 : -1\" [attr.aria-controls]=\"getTabContentId(i)\" [attr.aria-selected]=\"selectedIndex == i\" [class.md-active]=\"selectedIndex == i\" (click)=\"focusIndex = selectedIndex = i\"> <template [portalHost]=\"label\"></template> </div> <md-ink-bar></md-ink-bar> </div> <div class=\"md-tab-body-wrapper\"> <div class=\"md-tab-body\" *ngFor=\"let content of contents; let i = index\" [id]=\"getTabContentId(i)\" [class.md-active]=\"selectedIndex == i\" [attr.aria-labelledby]=\"getTabLabelId(i)\"> <template role=\"tabpanel\" [portalHost]=\"content\" *ngIf=\"selectedIndex == i\"></template> </div> </div> ",
	            styles: [":host { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; font-family: Roboto, \"Helvetica Neue\", sans-serif; min-height: 248px; } /** The top section of the view; contains the tab labels */ .md-tab-header { overflow: hidden; position: relative; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; border-bottom: 1px solid #e0e0e0; -webkit-flex-shrink: 0; -ms-flex-negative: 0; flex-shrink: 0; } /** Wraps each tab label */ .md-tab-label { line-height: 48px; height: 48px; padding: 0 12px; font-size: 14px; font-family: Roboto, \"Helvetica Neue\", sans-serif; font-weight: 500; cursor: pointer; box-sizing: border-box; color: currentColor; opacity: 0.6; min-width: 160px; text-align: center; } .md-tab-label:focus { outline: none; opacity: 1; background-color: rgba(178, 223, 219, 0.3); } /** The bottom section of the view; contains the tab bodies */ .md-tab-body-wrapper { position: relative; overflow: hidden; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; } /** Wraps each tab body */ .md-tab-body { display: none; overflow: auto; box-sizing: border-box; -webkit-box-flex: 1; -webkit-flex-grow: 1; -ms-flex-positive: 1; flex-grow: 1; -webkit-flex-shrink: 1; -ms-flex-negative: 1; flex-shrink: 1; } .md-tab-body.md-active { display: block; } /** The colored bar that underlines the active tab */ md-ink-bar { position: absolute; bottom: 0; height: 2px; background-color: #009688; -webkit-transition: 0.35s ease-out; transition: 0.35s ease-out; } "],
	            directives: [portal_directives_1.PortalHostDirective, tab_label_wrapper_1.MdTabLabelWrapper, ink_bar_1.MdInkBar],
	        }), 
	        __metadata('design:paramtypes', [core_1.NgZone])
	    ], MdTabGroup);
	    return MdTabGroup;
	}());
	exports.MdTabGroup = MdTabGroup;
	exports.MD_TABS_DIRECTIVES = [MdTabGroup, tab_label_1.MdTabLabel, tab_content_1.MdTabContent];
	//# sourceMappingURL=/usr/local/google/home/jelbourn/material2/tmp/broccoli_type_script_compiler-input_base_path-OxHzApZr.tmp/0/components/tabs/tabs.js.map

/***/ },

/***/ 425:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var sidenav_1 = __webpack_require__(221);
	var toolbar_1 = __webpack_require__(222);
	var button_1 = __webpack_require__(208);
	var checkbox_1 = __webpack_require__(210);
	var radio_1 = __webpack_require__(219);
	var progress_circle_1 = __webpack_require__(218);
	var progress_bar_1 = __webpack_require__(217);
	var card_1 = __webpack_require__(209);
	var input_1 = __webpack_require__(215);
	var list_1 = __webpack_require__(216);
	var icon_1 = __webpack_require__(342);
	var tabs_1 = __webpack_require__(347);
	var MaterialComponent = (function () {
	    function MaterialComponent() {
	        this.foods = [
	            { name: 'Pizza', rating: 'Excellent' },
	            { name: 'Burritos', rating: 'Great' },
	            { name: 'French fries', rating: 'Pretty good' },
	        ];
	        this.progress = 0;
	    }
	    MaterialComponent = __decorate([
	        core_1.Component({
	            moduleId: module.id,
	            selector: "angular-material",
	            template: __webpack_require__(580),
	            providers: [radio_1.MdRadioDispatcher, icon_1.MdIconRegistry],
	            directives: [
	                sidenav_1.MD_SIDENAV_DIRECTIVES,
	                card_1.MD_CARD_DIRECTIVES,
	                toolbar_1.MD_TOOLBAR_DIRECTIVES,
	                button_1.MD_BUTTON_DIRECTIVES,
	                checkbox_1.MD_CHECKBOX_DIRECTIVES,
	                radio_1.MD_RADIO_DIRECTIVES,
	                progress_circle_1.MD_PROGRESS_CIRCLE_DIRECTIVES,
	                input_1.MD_INPUT_DIRECTIVES,
	                list_1.MD_LIST_DIRECTIVES,
	                progress_bar_1.MD_PROGRESS_BAR_DIRECTIVES,
	                icon_1.MD_ICON_DIRECTIVES,
	                tabs_1.MD_TABS_DIRECTIVES,
	            ],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MaterialComponent);
	    return MaterialComponent;
	}());
	exports.MaterialComponent = MaterialComponent;


/***/ },

/***/ 580:
/***/ function(module, exports) {

	module.exports = "<md-sidenav-layout>\r\n    <md-sidenav #sidenav mode=\"side\" class=\"app-sidenav\">\r\n        Sidenav\r\n    </md-sidenav>\r\n\r\n    <md-toolbar color=\"primary\">\r\n        <button class=\"app-icon-button\" (click)=\"sidenav.toggle()\">\r\n            <i class=\"material-icons app-toolbar-menu\">menu</i>\r\n        </button>\r\n\r\n        Angular Material2 Example App\r\n\r\n        <span class=\"app-toolbar-filler\"></span>\r\n    </md-toolbar>\r\n\r\n    <div class=\"app-content\">\r\n\r\n        <md-card>\r\n            <button md-button>FLAT</button>\r\n            <button md-raised-button>RAISED</button>\r\n            <button md-raised-button color=\"primary\">PRIMARY RAISED</button>\r\n            <button md-raised-button color=\"accent\">ACCENT RAISED</button>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <md-checkbox>Unchecked</md-checkbox>\r\n            <md-checkbox [checked]=\"true\">Checked</md-checkbox>\r\n            <md-checkbox [indeterminate]=\"true\">Indeterminate</md-checkbox>\r\n            <md-checkbox [disabled]=\"true\">Disabled</md-checkbox>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <md-radio-button name=\"symbol\">Alpha</md-radio-button>\r\n            <md-radio-button name=\"symbol\">Beta</md-radio-button>\r\n            <md-radio-button name=\"symbol\" disabled>Gamma</md-radio-button>\r\n        </md-card>\r\n\r\n        <md-card class=\"app-input-section\">\r\n            <md-input placeholder=\"First name\"></md-input>\r\n\r\n            <md-input #nickname placeholder=\"Nickname\" maxlength=\"50\">\r\n                <md-hint align=\"end\">\r\n                    {{nickname.characterCount}} / 50\r\n                </md-hint>\r\n            </md-input>\r\n\r\n            <md-input>\r\n                <md-placeholder>\r\n                    <i class=\"material-icons app-input-icon\">android</i> Favorite phone\r\n                </md-placeholder>\r\n            </md-input>\r\n\r\n            <md-input placeholder=\"Motorcycle model\">\r\n        <span md-prefix>\r\n          <i class=\"material-icons app-input-icon\">motorcycle</i>\r\n          &nbsp;\r\n        </span>\r\n            </md-input>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <md-list class=\"app-list\">\r\n                <md-list-item *ngFor=\"let food of foods\">\r\n                    <h3 md-line>{{food.name}}</h3>\r\n                    <p md-line class=\"demo-secondary-text\">{{food.rating}}</p>\r\n                </md-list-item>\r\n            </md-list>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <md-spinner class=\"app-spinner\"></md-spinner>\r\n            <md-spinner color=\"accent\" class=\"app-spinner\"></md-spinner>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <label>\r\n                Indeterminate progress-bar\r\n                <md-progress-bar\r\n                        class=\"app-progress\"\r\n                        mode=\"indeterminate\"\r\n                        aria-label=\"Indeterminate progress-bar example\"></md-progress-bar>\r\n            </label>\r\n\r\n            <label>\r\n                Determinate progress bar - {{progress}}%\r\n                <md-progress-bar\r\n                        class=\"app-progress\"\r\n                        color=\"accent\"\r\n                        mode=\"determinate\"\r\n                        [value]=\"progress\"\r\n                        aria-label=\"Determinate progress-bar example\"></md-progress-bar>\r\n            </label>\r\n        </md-card>\r\n\r\n        <md-card>\r\n            <md-tab-group>\r\n                <md-tab>\r\n                    <template md-tab-label>\r\n                        Earth\r\n                    </template>\r\n                    <template md-tab-content>\r\n                        <p>EARTH</p>\r\n                    </template>\r\n                </md-tab>\r\n                <md-tab>\r\n                    <template md-tab-label>\r\n                        Fire\r\n                    </template>\r\n                    <template md-tab-content>\r\n                        <p>FIRE</p>\r\n                    </template>\r\n                </md-tab>\r\n            </md-tab-group>\r\n        </md-card>\r\n\r\n\r\n        <md-card>\r\n            <md-icon>build</md-icon>\r\n        </md-card>\r\n\r\n    </div>\r\n\r\n</md-sidenav-layout>\r\n\r\n<span class=\"app-action\">\r\n  <button md-fab><md-icon>check circle</md-icon></button>\r\n</span>"

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = (function (_super) {
	    __extends(InnerSubscriber, _super);
	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _super.call(this);
	        this.parent = parent;
	        this.outerValue = outerValue;
	        this.outerIndex = outerIndex;
	        this.index = 0;
	    }
	    InnerSubscriber.prototype._next = function (value) {
	        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	    };
	    InnerSubscriber.prototype._error = function (error) {
	        this.parent.notifyError(error, this);
	        this.unsubscribe();
	    };
	    InnerSubscriber.prototype._complete = function () {
	        this.parent.notifyComplete(this);
	        this.unsubscribe();
	    };
	    return InnerSubscriber;
	}(Subscriber_1.Subscriber));
	exports.InnerSubscriber = InnerSubscriber;
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = (function (_super) {
	    __extends(OuterSubscriber, _super);
	    function OuterSubscriber() {
	        _super.apply(this, arguments);
	    }
	    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.destination.next(innerValue);
	    };
	    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
	        this.destination.error(error);
	    };
	    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
	        this.destination.complete();
	    };
	    return OuterSubscriber;
	}(Subscriber_1.Subscriber));
	exports.OuterSubscriber = OuterSubscriber;
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var forkJoin_1 = __webpack_require__(597);
	Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var of_1 = __webpack_require__(598);
	Observable_1.Observable.of = of_1.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 587:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var catch_1 = __webpack_require__(599);
	Observable_1.Observable.prototype.catch = catch_1._catch;
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var do_1 = __webpack_require__(600);
	Observable_1.Observable.prototype.do = do_1._do;
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var filter_1 = __webpack_require__(601);
	Observable_1.Observable.prototype.filter = filter_1.filter;
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var finally_1 = __webpack_require__(602);
	Observable_1.Observable.prototype.finally = finally_1._finally;
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var map_1 = __webpack_require__(603);
	Observable_1.Observable.prototype.map = map_1.map;
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 592:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(14);
	var share_1 = __webpack_require__(605);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(14);
	var ScalarObservable_1 = __webpack_require__(596);
	var EmptyObservable_1 = __webpack_require__(334);
	var isScheduler_1 = __webpack_require__(611);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = (function (_super) {
	    __extends(ArrayObservable, _super);
	    function ArrayObservable(array, scheduler) {
	        _super.call(this);
	        this.array = array;
	        this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            this._isScalar = true;
	            this.value = array[0];
	        }
	    }
	    ArrayObservable.create = function (array, scheduler) {
	        return new ArrayObservable(array, scheduler);
	    };
	    /**
	     * Creates an Observable that emits some values you specify as arguments,
	     * immediately one after the other, and then emits a complete notification.
	     *
	     * <span class="informal">Emits the arguments you provide, then completes.
	     * </span>
	     *
	     * <img src="./img/of.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the arguments given, and the complete notification thereafter. It can
	     * be used for composing with other Observables, such as with {@link concat}.
	     * By default, it uses a `null` Scheduler, which means the `next`
	     * notifications are sent synchronously, although with a different Scheduler
	     * it is possible to determine when those notifications will be delivered.
	     *
	     * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	     * var numbers = Rx.Observable.of(10, 20, 30);
	     * var letters = Rx.Observable.of('a', 'b', 'c');
	     * var interval = Rx.Observable.interval(1000);
	     * var result = numbers.concat(letters).concat(interval);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link throw}
	     *
	     * @param {...T} values Arguments that represent `next` values to be emitted.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the `next` notifications.
	     * @return {Observable<T>} An Observable that emits each given input value.
	     * @static true
	     * @name of
	     * @owner Observable
	     */
	    ArrayObservable.of = function () {
	        var array = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            array[_i - 0] = arguments[_i];
	        }
	        var scheduler = array[array.length - 1];
	        if (isScheduler_1.isScheduler(scheduler)) {
	            array.pop();
	        }
	        else {
	            scheduler = null;
	        }
	        var len = array.length;
	        if (len > 1) {
	            return new ArrayObservable(array, scheduler);
	        }
	        else if (len === 1) {
	            return new ScalarObservable_1.ScalarObservable(array[0], scheduler);
	        }
	        else {
	            return new EmptyObservable_1.EmptyObservable(scheduler);
	        }
	    };
	    ArrayObservable.dispatch = function (state) {
	        var array = state.array, index = state.index, count = state.count, subscriber = state.subscriber;
	        if (index >= count) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(array[index]);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.index = index + 1;
	        this.schedule(state);
	    };
	    ArrayObservable.prototype._subscribe = function (subscriber) {
	        var index = 0;
	        var array = this.array;
	        var count = array.length;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                array: array, index: index, count: count, subscriber: subscriber
	            });
	        }
	        else {
	            for (var i = 0; i < count && !subscriber.isUnsubscribed; i++) {
	                subscriber.next(array[i]);
	            }
	            subscriber.complete();
	        }
	    };
	    return ArrayObservable;
	}(Observable_1.Observable));
	exports.ArrayObservable = ArrayObservable;
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },

/***/ 594:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(14);
	var Subscriber_1 = __webpack_require__(37);
	var Subscription_1 = __webpack_require__(93);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this.subject;
	        if (subject && !subject.isUnsubscribed) {
	            return subject;
	        }
	        return (this.subject = this.subjectFactory());
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var source = this.source;
	        var subscription = this.subscription;
	        if (subscription && !subscription.isUnsubscribed) {
	            return subscription;
	        }
	        subscription = source.subscribe(this.getSubject());
	        subscription.add(new ConnectableSubscription(this));
	        return (this.subscription = subscription);
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return new RefCountObservable(this);
	    };
	    /**
	     * This method is opened for `ConnectableSubscription`.
	     * Not to call from others.
	     */
	    ConnectableObservable.prototype._closeSubscription = function () {
	        this.subject = null;
	        this.subscription = null;
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ConnectableSubscription = (function (_super) {
	    __extends(ConnectableSubscription, _super);
	    function ConnectableSubscription(connectable) {
	        _super.call(this);
	        this.connectable = connectable;
	    }
	    ConnectableSubscription.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        connectable._closeSubscription();
	        this.connectable = null;
	    };
	    return ConnectableSubscription;
	}(Subscription_1.Subscription));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountObservable = (function (_super) {
	    __extends(RefCountObservable, _super);
	    function RefCountObservable(connectable, refCount) {
	        if (refCount === void 0) { refCount = 0; }
	        _super.call(this);
	        this.connectable = connectable;
	        this.refCount = refCount;
	    }
	    RefCountObservable.prototype._subscribe = function (subscriber) {
	        var connectable = this.connectable;
	        var refCountSubscriber = new RefCountSubscriber(subscriber, this);
	        var subscription = connectable.subscribe(refCountSubscriber);
	        if (!subscription.isUnsubscribed && ++this.refCount === 1) {
	            refCountSubscriber.connection = this.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountObservable;
	}(Observable_1.Observable));
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, refCountObservable) {
	        _super.call(this, null);
	        this.destination = destination;
	        this.refCountObservable = refCountObservable;
	        this.connection = refCountObservable.connection;
	        destination.add(this);
	    }
	    RefCountSubscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    RefCountSubscriber.prototype._error = function (err) {
	        this._resetConnectable();
	        this.destination.error(err);
	    };
	    RefCountSubscriber.prototype._complete = function () {
	        this._resetConnectable();
	        this.destination.complete();
	    };
	    RefCountSubscriber.prototype._resetConnectable = function () {
	        var observable = this.refCountObservable;
	        var obsConnection = observable.connection;
	        var subConnection = this.connection;
	        if (subConnection && subConnection === obsConnection) {
	            observable.refCount = 0;
	            obsConnection.unsubscribe();
	            observable.connection = null;
	            this.unsubscribe();
	        }
	    };
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var observable = this.refCountObservable;
	        if (observable.refCount === 0) {
	            return;
	        }
	        if (--observable.refCount === 0) {
	            var obsConnection = observable.connection;
	            var subConnection = this.connection;
	            if (subConnection && subConnection === obsConnection) {
	                obsConnection.unsubscribe();
	                observable.connection = null;
	            }
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(14);
	var EmptyObservable_1 = __webpack_require__(334);
	var isArray_1 = __webpack_require__(207);
	var subscribeToResult_1 = __webpack_require__(612);
	var OuterSubscriber_1 = __webpack_require__(583);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = (function (_super) {
	    __extends(ForkJoinObservable, _super);
	    function ForkJoinObservable(sources, resultSelector) {
	        _super.call(this);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	    }
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */
	    ForkJoinObservable.create = function () {
	        var sources = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            sources[_i - 0] = arguments[_i];
	        }
	        if (sources === null || arguments.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        var resultSelector = null;
	        if (typeof sources[sources.length - 1] === 'function') {
	            resultSelector = sources.pop();
	        }
	        // if the first and only other argument besides the resultSelector is an array
	        // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	        if (sources.length === 1 && isArray_1.isArray(sources[0])) {
	            sources = sources[0];
	        }
	        if (sources.length === 0) {
	            return new EmptyObservable_1.EmptyObservable();
	        }
	        return new ForkJoinObservable(sources, resultSelector);
	    };
	    ForkJoinObservable.prototype._subscribe = function (subscriber) {
	        return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	    };
	    return ForkJoinObservable;
	}(Observable_1.Observable));
	exports.ForkJoinObservable = ForkJoinObservable;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var ForkJoinSubscriber = (function (_super) {
	    __extends(ForkJoinSubscriber, _super);
	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _super.call(this, destination);
	        this.sources = sources;
	        this.resultSelector = resultSelector;
	        this.completed = 0;
	        this.haveValues = 0;
	        var len = sources.length;
	        this.total = len;
	        this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = subscribeToResult_1.subscribeToResult(this, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                this.add(innerSubscription);
	            }
	        }
	    }
	    ForkJoinSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	        this.values[outerIndex] = innerValue;
	        if (!innerSub._hasValue) {
	            innerSub._hasValue = true;
	            this.haveValues++;
	        }
	    };
	    ForkJoinSubscriber.prototype.notifyComplete = function (innerSub) {
	        var destination = this.destination;
	        var _a = this, haveValues = _a.haveValues, resultSelector = _a.resultSelector, values = _a.values;
	        var len = values.length;
	        if (!innerSub._hasValue) {
	            destination.complete();
	            return;
	        }
	        this.completed++;
	        if (this.completed !== len) {
	            return;
	        }
	        if (haveValues === len) {
	            var value = resultSelector ? resultSelector.apply(this, values) : values;
	            destination.next(value);
	        }
	        destination.complete();
	    };
	    return ForkJoinSubscriber;
	}(OuterSubscriber_1.OuterSubscriber));
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(14);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = (function (_super) {
	    __extends(ScalarObservable, _super);
	    function ScalarObservable(value, scheduler) {
	        _super.call(this);
	        this.value = value;
	        this.scheduler = scheduler;
	        this._isScalar = true;
	    }
	    ScalarObservable.create = function (value, scheduler) {
	        return new ScalarObservable(value, scheduler);
	    };
	    ScalarObservable.dispatch = function (state) {
	        var done = state.done, value = state.value, subscriber = state.subscriber;
	        if (done) {
	            subscriber.complete();
	            return;
	        }
	        subscriber.next(value);
	        if (subscriber.isUnsubscribed) {
	            return;
	        }
	        state.done = true;
	        this.schedule(state);
	    };
	    ScalarObservable.prototype._subscribe = function (subscriber) {
	        var value = this.value;
	        var scheduler = this.scheduler;
	        if (scheduler) {
	            return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                done: false, value: value, subscriber: subscriber
	            });
	        }
	        else {
	            subscriber.next(value);
	            if (!subscriber.isUnsubscribed) {
	                subscriber.complete();
	            }
	        }
	    };
	    return ScalarObservable;
	}(Observable_1.Observable));
	exports.ScalarObservable = ScalarObservable;
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },

/***/ 597:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ForkJoinObservable_1 = __webpack_require__(595);
	exports.forkJoin = ForkJoinObservable_1.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ArrayObservable_1 = __webpack_require__(593);
	exports.of = ArrayObservable_1.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return (operator.caught = caught);
	}
	exports._catch = _catch;
	var CatchOperator = (function () {
	    function CatchOperator(selector) {
	        this.selector = selector;
	    }
	    CatchOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	    };
	    return CatchOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var CatchSubscriber = (function (_super) {
	    __extends(CatchSubscriber, _super);
	    function CatchSubscriber(destination, selector, caught) {
	        _super.call(this, destination);
	        this.selector = selector;
	        this.caught = caught;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.
	    CatchSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var result = void 0;
	            try {
	                result = this.selector(err, this.caught);
	            }
	            catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._innerSub(result);
	        }
	    };
	    CatchSubscriber.prototype._innerSub = function (result) {
	        this.unsubscribe();
	        this.destination.remove(this);
	        result.subscribe(this.destination);
	    };
	    return CatchSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=catch.js.map

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}
	exports._do = _do;
	var DoOperator = (function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }
	    DoOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	    };
	    return DoOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var DoSubscriber = (function (_super) {
	    __extends(DoSubscriber, _super);
	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _super.call(this, destination);
	        var safeSubscriber = new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        this.add(safeSubscriber);
	        this.safeSubscriber = safeSubscriber;
	    }
	    DoSubscriber.prototype._next = function (value) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.next(value);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.next(value);
	        }
	    };
	    DoSubscriber.prototype._error = function (err) {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.error(err);
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.error(err);
	        }
	    };
	    DoSubscriber.prototype._complete = function () {
	        var safeSubscriber = this.safeSubscriber;
	        safeSubscriber.complete();
	        if (safeSubscriber.syncErrorThrown) {
	            this.destination.error(safeSubscriber.syncErrorValue);
	        }
	        else {
	            this.destination.complete();
	        }
	    };
	    return DoSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=do.js.map

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}
	exports.filter = filter;
	var FilterOperator = (function () {
	    function FilterOperator(predicate, thisArg) {
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }
	    FilterOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	    };
	    return FilterOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FilterSubscriber = (function (_super) {
	    __extends(FilterSubscriber, _super);
	    function FilterSubscriber(destination, predicate, thisArg) {
	        _super.call(this, destination);
	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.count = 0;
	        this.predicate = predicate;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.
	    FilterSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.predicate.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        if (result) {
	            this.destination.next(value);
	        }
	    };
	    return FilterSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=filter.js.map

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	var Subscription_1 = __webpack_require__(93);
	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} finallySelector function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(finallySelector) {
	    return this.lift(new FinallyOperator(finallySelector));
	}
	exports._finally = _finally;
	var FinallyOperator = (function () {
	    function FinallyOperator(finallySelector) {
	        this.finallySelector = finallySelector;
	    }
	    FinallyOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new FinallySubscriber(subscriber, this.finallySelector));
	    };
	    return FinallyOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var FinallySubscriber = (function (_super) {
	    __extends(FinallySubscriber, _super);
	    function FinallySubscriber(destination, finallySelector) {
	        _super.call(this, destination);
	        this.add(new Subscription_1.Subscription(finallySelector));
	    }
	    return FinallySubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=finally.js.map

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscriber_1 = __webpack_require__(37);
	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}
	exports.map = map;
	var MapOperator = (function () {
	    function MapOperator(project, thisArg) {
	        this.project = project;
	        this.thisArg = thisArg;
	    }
	    MapOperator.prototype.call = function (subscriber, source) {
	        return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	    };
	    return MapOperator;
	}());
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var MapSubscriber = (function (_super) {
	    __extends(MapSubscriber, _super);
	    function MapSubscriber(destination, project, thisArg) {
	        _super.call(this, destination);
	        this.project = project;
	        this.count = 0;
	        this.thisArg = thisArg || this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.
	    MapSubscriber.prototype._next = function (value) {
	        var result;
	        try {
	            result = this.project.call(this.thisArg, value, this.count++);
	        }
	        catch (err) {
	            this.destination.error(err);
	            return;
	        }
	        this.destination.next(result);
	    };
	    return MapSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=map.js.map

/***/ },

/***/ 604:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ConnectableObservable_1 = __webpack_require__(594);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function} selector - a function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return new ConnectableObservable_1.ConnectableObservable(this, subjectFactory);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(604);
	var Subject_1 = __webpack_require__(66);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(67);
	var Symbol = root_1.root.Symbol;
	if (typeof Symbol === 'function') {
	    if (Symbol.iterator) {
	        exports.$$iterator = Symbol.iterator;
	    }
	    else if (typeof Symbol.for === 'function') {
	        exports.$$iterator = Symbol.for('iterator');
	    }
	}
	else {
	    if (root_1.root.Set && typeof new root_1.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = '@@iterator';
	    }
	    else if (root_1.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(root_1.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && root_1.root.Map.prototype[key] === root_1.root.Map.prototype['entries']) {
	                exports.$$iterator = key;
	                break;
	            }
	        }
	    }
	    else {
	        exports.$$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },

/***/ 610:
/***/ function(module, exports) {

	"use strict";
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	exports.isPromise = isPromise;
	//# sourceMappingURL=isPromise.js.map

/***/ },

/***/ 611:
/***/ function(module, exports) {

	"use strict";
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	exports.isScheduler = isScheduler;
	//# sourceMappingURL=isScheduler.js.map

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(67);
	var isArray_1 = __webpack_require__(207);
	var isPromise_1 = __webpack_require__(610);
	var Observable_1 = __webpack_require__(14);
	var iterator_1 = __webpack_require__(606);
	var observable_1 = __webpack_require__(335);
	var InnerSubscriber_1 = __webpack_require__(581);
	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.isUnsubscribed) {
	        return;
	    }
	    if (result instanceof Observable_1.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return;
	        }
	        else {
	            return result.subscribe(destination);
	        }
	    }
	    if (isArray_1.isArray(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.isUnsubscribed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (isPromise_1.isPromise(result)) {
	        result.then(function (value) {
	            if (!destination.isUnsubscribed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) { return destination.error(err); })
	            .then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            root_1.root.setTimeout(function () { throw err; });
	        });
	        return destination;
	    }
	    else if (typeof result[iterator_1.$$iterator] === 'function') {
	        for (var _i = 0, _a = result; _i < _a.length; _i++) {
	            var item = _a[_i];
	            destination.next(item);
	            if (destination.isUnsubscribed) {
	                break;
	            }
	        }
	        if (!destination.isUnsubscribed) {
	            destination.complete();
	        }
	    }
	    else if (typeof result[observable_1.$$observable] === 'function') {
	        var obs = result[observable_1.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error('invalid observable');
	        }
	        else {
	            return obs.subscribe(new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    }
	    else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	}
	exports.subscribeToResult = subscribeToResult;
	//# sourceMappingURL=subscribeToResult.js.map

/***/ }

});