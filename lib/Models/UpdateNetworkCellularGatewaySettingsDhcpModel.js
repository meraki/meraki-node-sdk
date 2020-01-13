/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkCellularGatewaySettingsDhcpModel
 */
class UpdateNetworkCellularGatewaySettingsDhcpModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.dhcpLeaseTime = this.constructor.getValue(obj.dhcpLeaseTime);
        this.dnsNameservers = this.constructor.getValue(obj.dnsNameservers);
        this.dnsCustomNameservers = this.constructor.getValue(obj.dnsCustomNameservers);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'dhcpLeaseTime', realName: 'dhcpLeaseTime' },
            { name: 'dnsNameservers', realName: 'dnsNameservers' },
            { name: 'dnsCustomNameservers', realName: 'dnsCustomNameservers', array: true },
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

module.exports = UpdateNetworkCellularGatewaySettingsDhcpModel;
