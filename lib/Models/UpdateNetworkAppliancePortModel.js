/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkAppliancePortModel
 */
class UpdateNetworkAppliancePortModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.enabled = this.constructor.getValue(obj.enabled);
        this.dropUntaggedTraffic = this.constructor.getValue(obj.dropUntaggedTraffic);
        this.type = this.constructor.getValue(obj.type);
        this.vlan = this.constructor.getValue(obj.vlan);
        this.allowed_vlans = this.constructor.getValue(obj.allowed_vlans || obj.allowedVlans);
        this.accessPolicy = this.constructor.getValue(obj.accessPolicy);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'enabled', realName: 'enabled' },
            { name: 'dropUntaggedTraffic', realName: 'dropUntaggedTraffic' },
            { name: 'type', realName: 'type' },
            { name: 'vlan', realName: 'vlan' },
            { name: 'allowed_vlans', realName: 'allowedVlans' },
            { name: 'accessPolicy', realName: 'accessPolicy' },
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

module.exports = UpdateNetworkAppliancePortModel;
