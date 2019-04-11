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

class IDSAlertsController {
    /**
     * Query a single network for the packet that generated the ids alert at the given timestamp
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -X GET -H 'Content-Type: application/json'
     * 'https://n144.meraki.com/api/v0/ids_alerts/packet?q_ts=1517243994.
     * 16592&q_organization_id&q_network_id=1195612'
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['idsAlertTimestamp'] TODO: type description here
     * @param {string} input['organizationId'] TODO: type description here
     * @param {string} input['networkId'] TODO: type description here
     * @param {string} input['qTs'] (optional) The timestamp of the original ids alert
     * @param {string} input['qOrgId'] (optional) The organization id of the ids alert
     * @param {string} input['qNetworkId'] (optional) The network id of the ids alert
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIdsAlertsPacketQTsIdsAlertTimestampQOrganizationIdOrganizationIdQNetworkIdNetworkId(input,
        callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.idsAlertTimestamp === null || input.idsAlertTimestamp === undefined) {
            const _err = { errorMessage: 'The property `idsAlertTimestamp` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.organizationId === null || input.organizationId === undefined) {
            const _err = { errorMessage: 'The property `organizationId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.networkId === null || input.networkId === undefined) {
            const _err = { errorMessage: 'The property `networkId` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/ids_alerts/packet?q_ts={ids_alert_timestamp}q_organization_id={organization_id}&q_network_id={network_id}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            ids_alert_timestamp: input.idsAlertTimestamp,
            organization_id: input.organizationId,
            network_id: input.networkId,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            q_ts: input.qTs,
            q_org_id: input.qOrgId,
            q_network_id: input.qNetworkId,
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
     * Query a shard for up to the last 24 hours of IDS alert data
     * ## SAMPLE REQUEST
     * ```
     * curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -X GET -H 'Content-Type: application/json'
     * 'https://n144.meraki.com/api/v0/ids_alerts?start_time=1474922408.474945'
     * ```
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['floatStartTime'] TODO: type description here
     * @param {string} input['optionalFloatEndTime'] TODO: type description here
     * @param {string} input['startTime'] (optional) The start time (exclusive) of the query
     * specified as seconds since the epoch expressed as a
     * floating-point number.
     * @param {string} input['endTime'] (optional) The end time (exclusive) of the query specified
     * as seconds since the epoch expressed as a floating-point
     * number. This parameter is optional.
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getIdsAlertsStartTimeFloatStartTimeEndTimeOptionalFloatEndTime(input, callback) {
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        if (input.floatStartTime === null || input.floatStartTime === undefined) {
            const _err = { errorMessage: 'The property `floatStartTime` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.optionalFloatEndTime === null || input.optionalFloatEndTime === undefined) {
            const _err = { errorMessage: 'The property `optionalFloatEndTime` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        const _baseUri = _configuration.BASEURI;

        let _pathUrl = '/ids_alerts?start_time={float_start_time}&end_time={optional_float_end_time}';
        // process template parameters
        _pathUrl = _apiHelper.appendUrlWithTemplateParameters(_pathUrl, {
            float_start_time: input.floatStartTime,
            optional_float_end_time: input.optionalFloatEndTime,
        });

        let _queryBuilder = `${_baseUri}${_pathUrl}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            start_time: input.startTime,
            end_time: input.endTime,
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
module.exports = IDSAlertsController;
