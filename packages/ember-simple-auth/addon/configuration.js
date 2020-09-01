import { get } from '@ember/object';

const DEFAULTS = {
  rootURL: '',
  routeAfterAuthentication: 'index',
};

/**
  Ember Simple Auth's configuration object.

  @class Configuration
  @extends Object
  @module ember-simple-auth/configuration
  @public
*/
export default {
  /**
    The root URL of the application as configured in `config/environment.js`.

    @property rootURL
    @readOnly
    @static
    @type String
    @default ''
    @public
  */
  rootURL: DEFAULTS.rootURL,

  /**
    The route to transition to after successful authentication.

    @property routeAfterAuthentication
    @readOnly
    @static
    @type String
    @default 'index'
    @public
  */
  routeAfterAuthentication: DEFAULTS.routeAfterAuthentication,

  load(config) {
    // TODO: ideal world would use ??
    // see: https://deprecations.emberjs.com/v3.x/#toc_ember-metal-get-with-default
    // this.rootURL = get(config, 'rootURL') ?? DEFAULTS.rootURL;
    // this.routeAfterAuthentication =
    //   get(config, 'routeAfterAuthentication') ??
    //   DEFAULTS.routeAfterAuthentication;

    let rootURL = get(config, 'rootURL');
    this.rootURL = rootURL === undefined ? DEFAULTS.rootURL : rootURL;

    let raa = get(config, 'routeAfterAuthentication');
    this.routeAfterAuthentication = raa === undefined ? DEFAULTS.routeAfterAuthentication : raa;
  },
};
