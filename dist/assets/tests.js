define('tripshare/tests/acceptance/index-test', ['exports', 'qunit', 'tripshare/tests/helpers/module-for-acceptance'], function (exports, _qunit, _tripshareTestsHelpersModuleForAcceptance) {

  (0, _tripshareTestsHelpersModuleForAcceptance['default'])('Acceptance | index');

  (0, _qunit.test)('visiting /index', function (assert) {
    visit('/index');

    andThen(function () {
      assert.equal(currentURL(), '/index');
    });
  });
});
define('tripshare/tests/acceptance/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - acceptance');
  QUnit.test('acceptance/index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/index-test.js should pass jshint.');
  });
});
define('tripshare/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('tripshare/tests/assets/javascripts/adapters/application_adapter.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - assets/javascripts/adapters');
  QUnit.test('assets/javascripts/adapters/application_adapter.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'assets/javascripts/adapters/application_adapter.js should pass jshint.\nassets/javascripts/adapters/application_adapter.js: line 3, col 1, \'Tripshare\' is not defined.\nassets/javascripts/adapters/application_adapter.js: line 3, col 32, \'DS\' is not defined.\n\n2 errors');
  });
});
define('tripshare/tests/assets/javascripts/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - assets/javascripts');
  QUnit.test('assets/javascripts/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'assets/javascripts/application.js should pass jshint.\nassets/javascripts/application.js: line 10, col 1, \'Tripshare\' is not defined.\nassets/javascripts/application.js: line 10, col 13, \'Ember\' is not defined.\n\n2 errors');
  });
});
define('tripshare/tests/assets/javascripts/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - assets/javascripts');
  QUnit.test('assets/javascripts/router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'assets/javascripts/router.js should pass jshint.\nassets/javascripts/router.js: line 3, col 1, \'Tripshare\' is not defined.\n\n1 error');
  });
});
define('tripshare/tests/assets/javascripts/tripshare.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - assets/javascripts');
  QUnit.test('assets/javascripts/tripshare.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'assets/javascripts/tripshare.js should pass jshint.');
  });
});
define('tripshare/tests/assets/javascripts/views/trip_view.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - assets/javascripts/views');
  QUnit.test('assets/javascripts/views/trip_view.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'assets/javascripts/views/trip_view.js should pass jshint.\nassets/javascripts/views/trip_view.js: line 3, col 1, \'Tripshare\' is not defined.\nassets/javascripts/views/trip_view.js: line 3, col 22, \'Ember\' is not defined.\n\n2 errors');
  });
});
define('tripshare/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('tripshare/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('tripshare/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'tripshare/tests/helpers/start-app', 'tripshare/tests/helpers/destroy-app'], function (exports, _qunit, _tripshareTestsHelpersStartApp, _tripshareTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _tripshareTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _tripshareTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('tripshare/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('tripshare/tests/helpers/resolver', ['exports', 'ember/resolver', 'tripshare/config/environment'], function (exports, _emberResolver, _tripshareConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _tripshareConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _tripshareConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('tripshare/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('tripshare/tests/helpers/start-app', ['exports', 'ember', 'tripshare/app', 'tripshare/config/environment'], function (exports, _ember, _tripshareApp, _tripshareConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _tripshareConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _tripshareApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('tripshare/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('tripshare/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('tripshare/tests/test-helper', ['exports', 'tripshare/tests/helpers/resolver', 'ember-qunit'], function (exports, _tripshareTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_tripshareTestsHelpersResolver['default']);
});
define('tripshare/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('tripshare/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map