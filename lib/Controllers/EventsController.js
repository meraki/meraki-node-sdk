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

class EventsController {
    /**
     * List the events for the network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['productType'] (optional) The product type to fetch events for. This
     * parameter is required for networks with multiple device
     * types. Valid types are wireless, appliance, switch,
     * systemsManager, and camera
     * @param {array} input['includedEventTypes'] (optional) A list of event types. The returned
     * events will be filtered to only include events
     * with these types.
     * @param {array} input['excludedEventTypes'] (optional) A list of event types. The returned
     * events will be filtered to exclude events with
     * these types.
     * @param {string} input['deviceMac'] (optional) The MAC address of the Meraki device which the
     * list of events will be filtered with
     * @param {string} input['deviceSerial'] (optional) The serial of the Meraki device which the
     * list of events will be filtered with
     * @param {string} input['deviceName'] (optional) The name of the Meraki device which the list
     * of events will be filtered with
     * @param {string} input['clientIp'] (optional) The IP of the client which the list of events
     * will be filtered with. Only supported for track-by-IP
     * networks.
     * @param {string} input['clientMac'] (optional) The MAC address of the client which the list
     * of events will be filtered with. Only supported for track-
     * by-MAC networks.
     * @param {string} input['clientName'] (optional) The name, or partial name, of the client
     * which the list of events will be filtered with
     * @param {string} input['smDeviceMac'] (optional) The MAC address of the Systems Manager
     * device which the list of events will be filtered with
     * @param {string} input['smDeviceName'] (optional) The name of the Systems Manager device
     * which the list of events will be filtered with
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
    static getNetworkEvents(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/events';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            productType: input.productType,
            includedEventTypes: input.includedEventTypes,
            excludedEventTypes: input.excludedEventTypes,
            deviceMac: input.deviceMac,
            deviceSerial: input.deviceSerial,
            deviceName: input.deviceName,
            clientIp: input.clientIp,
            clientMac: input.clientMac,
            clientName: input.clientName,
            smDeviceMac: input.smDeviceMac,
            smDeviceName: input.smDeviceName,
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
            'user-agent': 'APIMATIC 2.0',
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
     * List the event type to human-readable description
     *
     * @param {string} networkId TODO: type description here
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkEventsEventTypes(networkId, callback) {
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

        let _pathUrl = '/networks/{networkId}/events/eventTypes';
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
            'user-agent': 'APIMATIC 2.0',
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
module.exports = EventsController;
