/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');

class ClientsController {
    /**
     * Return the latency history for a client. Clients can be identified by a client key or
     * either the MAC or IP depending on whether the network uses Track-by-IP. The latency data
     * is from a sample of 2% of packets and is grouped into 4 traffic categories: background,
     * best effort, video, voice. Within these categories the sampled packet counters are
     * bucketed by latency in milliseconds.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 791 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 791 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 791 days. The default is 1 day.
     * @param {int} input['resolution'] (optional) The time resolution in seconds for returned data.
     * The valid resolutions are: 86400. The default is 86400.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientLatencyHistory(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/latencyHistory';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            t1: input.t1,
            timespan: input.timespan,
            resolution: input.resolution,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List the clients that have used this network in the timespan
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 31 days from today.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameter t0.
     * The value must be in seconds and be less than or equal to 31
     * days. The default is 1 day.
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 1000. Default is 10.
     * @param {string} input['startingAfter'] (optional) A token used by the server to indicate the
     * start of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     * @param {string} input['endingBefore'] (optional) A token used by the server to indicate the
     * end of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClients(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            timespan: input.timespan,
            perPage: input.perPage,
            startingAfter: input.startingAfter,
            endingBefore: input.endingBefore,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the splash authorization for a client, for each SSID they've associated with
     * through splash. Clients can be identified by a client key or either the MAC or IP
     * depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientSplashAuthorizationStatus(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the policy assigned to a client on the network. Clients can be identified by a
     * client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientPolicy(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/policy';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the client's daily usage history. Usage data is in kilobytes. Clients can be
     * identified by a client key or either the MAC or IP depending on whether the network uses
     * Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientUsageHistory(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/usageHistory';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Provisions a client with a name and policy. Clients can be provisioned before they
     * associate to the network.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {ProvisionNetworkClientsModel} input['provisionNetworkClients'] (optional) TODO: type
     * description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static provisionNetworkClients(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/provision';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'POST',
            headers: _headers,
            body: _apiHelper.jsonSerialize(input.provisionNetworkClients),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the events associated with this client. Clients can be identified by a client key
     * or either the MAC or IP depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 100. Default is 100.
     * @param {string} input['startingAfter'] (optional) A token used by the server to indicate the
     * start of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     * @param {string} input['endingBefore'] (optional) A token used by the server to indicate the
     * end of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientEvents(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/events';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            perPage: input.perPage,
            startingAfter: input.startingAfter,
            endingBefore: input.endingBefore,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the client's network traffic data over time. Usage data is in kilobytes. This
     * endpoint requires detailed traffic analysis to be enabled on the Network-wide > General
     * page. Clients can be identified by a client key or either the MAC or IP depending on
     * whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 1000.
     * @param {string} input['startingAfter'] (optional) A token used by the server to indicate the
     * start of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     * @param {string} input['endingBefore'] (optional) A token used by the server to indicate the
     * end of the page. Often this is a timestamp or an ID
     * but it is not limited to those. This parameter should
     * not be defined by client applications. The link for
     * the first, last, prev, or next page in the HTTP Link
     * header should define it.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientTrafficHistory(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/trafficHistory';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            perPage: input.perPage,
            startingAfter: input.startingAfter,
            endingBefore: input.endingBefore,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * List the clients of a device, up to a maximum of a month ago. The usage of each client is
     * returned in kilobytes. If the device is a switch, the switchport is returned; otherwise
     * the switchport field is null.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['serial'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 31 days from today.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameter t0.
     * The value must be in seconds and be less than or equal to 31
     * days. The default is 1 day.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getDeviceClients(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.serial === null || input.serial === undefined) {
            const _err = { errorMessage: 'The property `serial` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/devices/{serial}/clients';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            serial: input.serial,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            timespan: input.timespan,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Update a client's splash authorization. Clients can be identified by a client key or
     * either the MAC or IP depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {UpdateNetworkClientSplashAuthorizationStatusModel} input['updateNetworkClientSplashAuthorizationStatus'] (optional) TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateNetworkClientSplashAuthorizationStatus(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/splashAuthorizationStatus';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(input.updateNetworkClientSplashAuthorizationStatus),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Update the policy assigned to a client on the network. Clients can be identified by a
     * client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {UpdateNetworkClientPolicyModel} input['updateNetworkClientPolicy'] (optional) TODO:
     * type description
     * here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateNetworkClientPolicy(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/policy';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'PUT',
            headers: _headers,
            body: _apiHelper.jsonSerialize(input.updateNetworkClientPolicy),
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return the client associated with the given identifier. Clients can be identified by a
     * client key or either the MAC or IP depending on whether the network uses Track-by-IP.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClient(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.clientId === null || input.clientId === undefined) {
            const _err = { errorMessage: 'The property `clientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/clients/{clientId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            clientId: input.clientId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            accept: 'application/json',
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };

        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    const parsed = JSON.parse(_response.body);
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
}
module.exports = ClientsController;
