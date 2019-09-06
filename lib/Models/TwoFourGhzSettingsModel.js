/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of TwoFourGhzSettingsModel
 */
class TwoFourGhzSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.maxPower = this.constructor.getValue(obj.maxPower);
        this.minPower = this.constructor.getValue(obj.minPower);
        this.minBitrate = this.constructor.getValue(obj.minBitrate);
        this.validAutoChannels = this.constructor.getValue(obj.validAutoChannels);
        this.axEnabled = this.constructor.getValue(obj.axEnabled);
        this.rxsop = this.constructor.getValue(obj.rxsop);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'maxPower', realName: 'maxPower' },
            { name: 'minPower', realName: 'minPower' },
            { name: 'minBitrate', realName: 'minBitrate' },
            { name: 'validAutoChannels', realName: 'validAutoChannels', array: true },
            { name: 'axEnabled', realName: 'axEnabled' },
            { name: 'rxsop', realName: 'rxsop' },
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

module.exports = TwoFourGhzSettingsModel;
