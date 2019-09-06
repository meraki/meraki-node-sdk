/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkWirelessRfProfileModel
 */
class UpdateNetworkWirelessRfProfileModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.clientBalancingEnabled = this.constructor.getValue(obj.clientBalancingEnabled);
        this.minBitrateType = this.constructor.getValue(obj.minBitrateType);
        this.bandSelectionType = this.constructor.getValue(obj.bandSelectionType);
        this.apBandSettings = this.constructor.getValue(obj.apBandSettings);
        this.twoFourGhzSettings = this.constructor.getValue(obj.twoFourGhzSettings);
        this.fiveGhzSettings = this.constructor.getValue(obj.fiveGhzSettings);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'clientBalancingEnabled', realName: 'clientBalancingEnabled' },
            { name: 'minBitrateType', realName: 'minBitrateType' },
            { name: 'bandSelectionType', realName: 'bandSelectionType' },
            { name: 'apBandSettings', realName: 'apBandSettings', type: 'ApBandSettings1Model' },
            {
                name: 'twoFourGhzSettings',
                realName: 'twoFourGhzSettings',
                type: 'TwoFourGhzSettings1Model',
            },
            { name: 'fiveGhzSettings', realName: 'fiveGhzSettings', type: 'FiveGhzSettings1Model' },
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

module.exports = UpdateNetworkWirelessRfProfileModel;
