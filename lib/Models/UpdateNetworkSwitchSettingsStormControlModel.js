/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSwitchSettingsStormControlModel
 */
class UpdateNetworkSwitchSettingsStormControlModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.broadcastThreshold = this.constructor.getValue(obj.broadcastThreshold);
        this.multicastThreshold = this.constructor.getValue(obj.multicastThreshold);
        this.unknownUnicastThreshold = this.constructor.getValue(obj.unknownUnicastThreshold);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'broadcastThreshold', realName: 'broadcastThreshold' },
            { name: 'multicastThreshold', realName: 'multicastThreshold' },
            { name: 'unknownUnicastThreshold', realName: 'unknownUnicastThreshold' },
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

module.exports = UpdateNetworkSwitchSettingsStormControlModel;
