"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('tripshare/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'tripshare/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _tripshareConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _tripshareConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tripshareConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _tripshareConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("tripshare/assets/javascripts/adapters/application_adapter", ["exports"], function (exports) {
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  Tripshare.ApplicationAdapter = DS.ActiveModelAdapter.extend({});
});
define("tripshare/assets/javascripts/application", ["exports"], function (exports) {
  //= require jquery
  //= require jquery_ujs
  //= require ember
  //= require ember-data
  //= require active-model-adapter
  //= require_self
  //= require ./tripshare

  // for more details see: http://emberjs.com/guides/application/
  Tripshare = Ember.Application.create();
});
define("tripshare/assets/javascripts/router", ["exports"], function (exports) {
  // For more information see: http://emberjs.com/guides/routing/

  Tripshare.Router.map(function () {
    // this.resource('posts');
  });
});
define("tripshare/assets/javascripts/tripshare", ["exports"], function (exports) {});
//= require_tree ./adapters
//= require_tree ./mixins
//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./components
//= require_tree ./templates
//= require_tree ./routes
//= require ./router
//= require_self
define('tripshare/assets/javascripts/views/trip_view', ['exports'], function (exports) {
  // for more details see: http://emberjs.com/guides/views/

  Tripshare.TripView = Ember.View.extend({
    templateName: 'trip'
  });
});
define('tripshare/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'tripshare/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _tripshareConfigEnvironment) {

  var name = _tripshareConfigEnvironment['default'].APP.name;
  var version = _tripshareConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('tripshare/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('tripshare/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('tripshare/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'tripshare/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _tripshareConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_tripshareConfigEnvironment['default'].APP.name, _tripshareConfigEnvironment['default'].APP.version)
  };
});
define('tripshare/initializers/export-application-global', ['exports', 'ember', 'tripshare/config/environment'], function (exports, _ember, _tripshareConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_tripshareConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _tripshareConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_tripshareConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('tripshare/router', ['exports', 'ember', 'tripshare/config/environment'], function (exports, _ember, _tripshareConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _tripshareConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define("tripshare/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "tripshare/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('tripshare/config/environment', ['ember'], function(Ember) {
  var prefix = 'tripshare';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("tripshare/app")["default"].create({"name":"tripshare","version":"0.0.0+c50596c6"});
}

/* jshint ignore:end */
//# sourceMappingURL=tripshare.map