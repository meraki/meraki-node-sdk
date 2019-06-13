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

class BluetoothClientsController {
    /**
     * List the Bluetooth clients seen by APs in this network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {int} input['perPage'] (optional) The number of entries per page returned. Acceptable
     * range is 5 - 1000. Default is 10.
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
     * @param {string} input['timespan'] (optional) The timespan, in seconds, used to look back
     * from now for bluetooth clients
     * @param {string} input['includeConnectivityHistory'] (optional) Include the connectivity
     * history for this client
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkBluetoothClients(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/bluetoothClients';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            perPage: input.perPage,
            startingAfter: input.startingAfter,
            endingBefore: input.endingBefore,
            timespan: input.timespan,
            includeConnectivityHistory: input.includeConnectivityHistory,
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
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['bluetoothClientId'] TODO: type description here
     * @param {string} input['includeConnectivityHistory'] (optional) Include the connectivity
     * history for this client
     * @param {string} input['connectivityHistoryTimespan'] (optional) The timespan, in seconds,
     * for the connectivityHistory data. By
     * default 1 day, 86400, will be used.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkBluetoothClient(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.bluetoothClientId === null || input.bluetoothClientId === undefined) {
            const _err = { errorMessage: 'The property `bluetoothClientId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/bluetoothClients/{bluetoothClientId}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            bluetoothClientId: input.bluetoothClientId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            includeConnectivityHistory: input.includeConnectivityHistory,
            connectivityHistoryTimespan: input.connectivityHistoryTimespan,
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
module.exports = BluetoothClientsController;
