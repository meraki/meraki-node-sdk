/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSecurityIntrusionSettingsModel
 */
class UpdateNetworkSecurityIntrusionSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.mode = this.constructor.getValue(obj.mode);
        this.idsRulesets = this.constructor.getValue(obj.idsRulesets);
        this.protectedNetworks = this.constructor.getValue(obj.protectedNetworks);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'mode', realName: 'mode' },
            { name: 'idsRulesets', realName: 'idsRulesets' },
            {
                name: 'protectedNetworks',
                realName: 'protectedNetworks',
                type: 'ProtectedNetworksModel',
            },
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

module.exports = UpdateNetworkSecurityIntrusionSettingsModel;
