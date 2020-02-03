/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSwitchSettingsMulticastModel
 */
class UpdateNetworkSwitchSettingsMulticastModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.defaultSettings = this.constructor.getValue(obj.defaultSettings);
        this.overrides = this.constructor.getValue(obj.overrides);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'defaultSettings', realName: 'defaultSettings', type: 'DefaultSettingsModel' },
            { name: 'overrides', realName: 'overrides', array: true, type: 'Override1Model' },
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

module.exports = UpdateNetworkSwitchSettingsMulticastModel;
