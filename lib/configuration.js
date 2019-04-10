/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];

environmentsMap[environments.PRODUCTION][servers.MDEFAULT] = 'https://api.meraki.com/api/v0';

const Configuration = {
    // DevNet Demo Sandbox API Key
    xCiscoMerakiAPIKey: '093b24e85df15a3e66f1fc359f4c48493eaa1b73',

    /**
     * Sandbox Demo Org
     * @type {string}
     */
    organizationId: '537758',

    /**
     * Sandbox Demo Net
     * @type {string}
     */
    networkId: 'L_646829496481100388',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
            organizationId: this.organizationId,
            networkId: this.networkId,
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
