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

class PIIController {
    /**
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager
     * owner ID(s) associated with that identifier. These owner IDs can be used with the Systems
     * Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/smOwnersForKey
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['username'] (optional) The username of a Systems Manager user
     * @param {string} input['email'] (optional) The email of a network user account or a Systems
     * Manager device
     * @param {string} input['mac'] (optional) The MAC of a network client device or a Systems
     * Manager device
     * @param {string} input['serial'] (optional) The serial of a Systems Manager device
     * @param {string} input['imei'] (optional) The IMEI of a Systems Manager device
     * @param {string} input['bluetoothMac'] (optional) The MAC of a Bluetooth client
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkPiiSmOwnersForKey(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/pii/smOwnersForKey';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            username: input.username,
            email: input.email,
            mac: input.mac,
            serial: input.serial,
            imei: input.imei,
            bluetoothMac: input.bluetoothMac,
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
     * Given a piece of Personally Identifiable Information (PII), return the Systems Manager
     * device ID(s) associated with that identifier. These device IDs can be used with the
     * Systems Manager API endpoints to retrieve device details. Exactly one identifier will be
     * accepted.
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/smDevicesForKey
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['username'] (optional) The username of a Systems Manager user
     * @param {string} input['email'] (optional) The email of a network user account or a Systems
     * Manager device
     * @param {string} input['mac'] (optional) The MAC of a network client device or a Systems
     * Manager device
     * @param {string} input['serial'] (optional) The serial of a Systems Manager device
     * @param {string} input['imei'] (optional) The IMEI of a Systems Manager device
     * @param {string} input['bluetoothMac'] (optional) The MAC of a Bluetooth client
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkPiiSmDevicesForKey(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/pii/smDevicesForKey';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            username: input.username,
            email: input.email,
            mac: input.mac,
            serial: input.serial,
            imei: input.imei,
            bluetoothMac: input.bluetoothMac,
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
     * List the keys required to access Personally Identifiable Information (PII) for a given
     * identifier. Exactly one identifier will be accepted. If the organization contains org-wide
     * Systems Manager users matching the key provided then there will be an entry with the key
     * "0" containing the applicable keys.
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/piiKeys
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['username'] (optional) The username of a Systems Manager user
     * @param {string} input['email'] (optional) The email of a network user account or a Systems
     * Manager device
     * @param {string} input['mac'] (optional) The MAC of a network client device or a Systems
     * Manager device
     * @param {string} input['serial'] (optional) The serial of a Systems Manager device
     * @param {string} input['imei'] (optional) The IMEI of a Systems Manager device
     * @param {string} input['bluetoothMac'] (optional) The MAC of a Bluetooth client
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkPiiPiiKeys(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/pii/piiKeys';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            username: input.username,
            email: input.email,
            mac: input.mac,
            serial: input.serial,
            imei: input.imei,
            bluetoothMac: input.bluetoothMac,
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
     * Delete a restrict processing PII request
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['requestId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteNetworkPiiRequest(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.requestId === null || input.requestId === undefined) {
            const _err = { errorMessage: 'The property `requestId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/pii/requests/{requestId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            requestId: input.requestId,
        });

        const _queryBuilder = `${_baseUri}${_pathUrl}`;

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        const _headers = {
            'X-Cisco-Meraki-API-Key': _configuration.xCiscoMerakiAPIKey,
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'DELETE',
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
                    _callback(null, null, _context);
                    _fulfill();
                } else {
                    errorResponse = _baseController.validateResponse(_context);
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }
    /**
     * Return a PII request
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/requests/{requestId}
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['requestId'] TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkPiiRequest(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.requestId === null || input.requestId === undefined) {
            const _err = { errorMessage: 'The property `requestId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/pii/requests/{requestId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            requestId: input.requestId,
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
     * Submit a new delete or restrict processing PII request
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {CreateNetworkPiiRequestModel} input['createNetworkPiiRequest'] (optional) TODO: type
     * description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static createNetworkPiiRequest(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/pii/requests';
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
            body: _apiHelper.jsonSerialize(input.createNetworkPiiRequest),
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
     * List the PII requests for this network or organization
     * ## ALTERNATE PATH
     * ```
     * /organizations/{organizationId}/pii/requests
     * ```
     *
     * @param {string} networkId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkPiiRequests(networkId, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (networkId === null || networkId === undefined) {
            const _err = { errorMessage: 'The parameter `networkId` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/pii/requests';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId,
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
module.exports = PIIController;
