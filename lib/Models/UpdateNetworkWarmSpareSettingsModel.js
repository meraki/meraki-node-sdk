/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkWarmSpareSettingsModel
 */
class UpdateNetworkWarmSpareSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.enabled = this.constructor.getValue(obj.enabled);
        this.spareSerial = this.constructor.getValue(obj.spareSerial);
        this.uplinkMode = this.constructor.getValue(obj.uplinkMode);
        this.virtualIp1 = this.constructor.getValue(obj.virtualIp1);
        this.virtualIp2 = this.constructor.getValue(obj.virtualIp2);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'enabled', realName: 'enabled' },
            { name: 'spareSerial', realName: 'spareSerial' },
            { name: 'uplinkMode', realName: 'uplinkMode' },
            { name: 'virtualIp1', realName: 'virtualIp1' },
            { name: 'virtualIp2', realName: 'virtualIp2' },
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

module.exports = UpdateNetworkWarmSpareSettingsModel;
