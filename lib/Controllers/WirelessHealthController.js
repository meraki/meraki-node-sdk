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

class WirelessHealthController {
    /**
     * Aggregated connectivity info for a given client on this network. Clients are identified by
     * their MAC.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientConnectionStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/connectionStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
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
     * Aggregated latency info for this network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['fields'] (optional) Partial selection: If present, this call will
     * return only the selected fields of ["rawDistribution",
     * "avg"]. All fields will be returned by default. Selected
     * fields must be entered as a comma separated string.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkLatencyStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/latencyStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            fields: input.fields,
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
     * Aggregated latency info for this network, grouped by node
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['fields'] (optional) Partial selection: If present, this call will
     * return only the selected fields of ["rawDistribution",
     * "avg"]. All fields will be returned by default. Selected
     * fields must be entered as a comma separated string.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkDevicesLatencyStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/devices/latencyStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            fields: input.fields,
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
     * Aggregated latency info for a given AP on this network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['serial'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['fields'] (optional) Partial selection: If present, this call will
     * return only the selected fields of ["rawDistribution",
     * "avg"]. All fields will be returned by default. Selected
     * fields must be entered as a comma separated string.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkDeviceLatencyStats(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.serial === null || input.serial === undefined) {
            const _err = { errorMessage: 'The property `serial` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/devices/{serial}/latencyStats';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            serial: input.serial,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            t1: input.t1,
            timespan: input.timespan,
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            fields: input.fields,
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
     * Aggregated latency info for this network, grouped by clients
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['fields'] (optional) Partial selection: If present, this call will
     * return only the selected fields of ["rawDistribution",
     * "avg"]. All fields will be returned by default. Selected
     * fields must be entered as a comma separated string.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientsLatencyStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/clients/latencyStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            fields: input.fields,
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
     * Aggregated latency info for a given client on this network. Clients are identified by
     * their MAC.
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['clientId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['fields'] (optional) Partial selection: If present, this call will
     * return only the selected fields of ["rawDistribution",
     * "avg"]. All fields will be returned by default. Selected
     * fields must be entered as a comma separated string.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientLatencyStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/clients/{clientId}/latencyStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            fields: input.fields,
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
     * List of all failed client connection events on this network in a given time range
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     * @param {string} input['serial'] (optional) Filter by AP
     * @param {string} input['clientId'] (optional) Filter by client MAC
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkFailedConnections(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/failedConnections';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
            serial: input.serial,
            clientId: input.clientId,
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
     * Aggregated connectivity info for this network, grouped by clients
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkClientsConnectionStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/clients/connectionStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
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
     * Aggregated connectivity info for a given AP on this network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['serial'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkDeviceConnectionStats(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.serial === null || input.serial === undefined) {
            const _err = { errorMessage: 'The property `serial` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/networks/{networkId}/devices/{serial}/connectionStats';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            networkId: input.networkId,
            serial: input.serial,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            t0: input.t0,
            t1: input.t1,
            timespan: input.timespan,
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
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
     * Aggregated connectivity info for this network, grouped by node
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkDevicesConnectionStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/devices/connectionStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
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
     * Aggregated connectivity info for this network
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['t0'] (optional) The beginning of the timespan for the data. The
     * maximum lookback period is 180 days from today.
     * @param {string} input['t1'] (optional) The end of the timespan for the data. t1 can be a
     * maximum of 7 days after t0.
     * @param {int} input['timespan'] (optional) The timespan for which the information will be
     * fetched. If specifying timespan, do not specify parameters t0
     * and t1. The value must be in seconds and be less than or
     * equal to 7 days.
     * @param {int} input['ssid'] (optional) Filter results by SSID
     * @param {int} input['vlan'] (optional) Filter results by VLAN
     * @param {string} input['apTag'] (optional) Filter results by AP Tag
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getNetworkConnectionStats(input, callback) {
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

        let _pathUrl = '/networks/{networkId}/connectionStats';
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
            ssid: input.ssid,
            vlan: input.vlan,
            apTag: input.apTag,
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
module.exports = WirelessHealthController;
