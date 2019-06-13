/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkNetflowSettingsModel
 */
class UpdateNetworkNetflowSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.reportingEnabled = this.constructor.getValue(obj.reportingEnabled);
        this.collectorIp = this.constructor.getValue(obj.collectorIp);
        this.collectorPort = this.constructor.getValue(obj.collectorPort);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'reportingEnabled', realName: 'reportingEnabled' },
            { name: 'collectorIp', realName: 'collectorIp' },
            { name: 'collectorPort', realName: 'collectorPort' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UpdateNetworkNetflowSettingsModel;
