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

class SecurityEventsController {
    /**
     * List the security events for an organization
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['organizationId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 365 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 365 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 365 days. The default is 31 days.
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 1000. Default is 100.
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
    static getOrganizationSecurityEvents(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.organizationId === null || input.organizationId === undefined) {
            const _err = { errorMessage: 'The property `organizationId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/organizations/{organizationId}/securityEvents';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            organizationId: input.organizationId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            t1: input.t1,
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
     * List the security events for a network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 365 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 365 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 365 days. The default is 31 days.
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 1000. Default is 100.
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
    static getNetworkSecurityEvents(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/securityEvents';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            t1: input.t1,
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
     * List the security events for a client. Clients can be identified by a client key or either
     * the MAC or IP depending on whether the network uses Track-by-IP.
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
     * equal to 791 days. The default is 31 days.
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 3 - 1000. Default is 100.
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
    static getNetworkClientSecurityEvents(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/securityEvents';
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
}
module.exports = SecurityEventsController;
