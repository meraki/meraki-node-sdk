/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkVlanModel
 */
class UpdateNetworkVlanModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.subnet = this.constructor.getValue(obj.subnet);
        this.applianceIp = this.constructor.getValue(obj.applianceIp);
        this.vpnNatSubnet = this.constructor.getValue(obj.vpnNatSubnet);
        this.dhcpHandling = this.constructor.getValue(obj.dhcpHandling);
        this.dhcpRelayServerIps = this.constructor.getValue(obj.dhcpRelayServerIps);
        this.dhcpLeaseTime = this.constructor.getValue(obj.dhcpLeaseTime);
        this.dhcpBootOptionsEnabled = this.constructor.getValue(obj.dhcpBootOptionsEnabled);
        this.dhcpBootNextServer = this.constructor.getValue(obj.dhcpBootNextServer);
        this.dhcpBootFilename = this.constructor.getValue(obj.dhcpBootFilename);
        this.fixedIpAssignments = this.constructor.getValue(obj.fixedIpAssignments);
        this.reservedIpRanges = this.constructor.getValue(obj.reservedIpRanges);
        this.dnsNameservers = this.constructor.getValue(obj.dnsNameservers);
        this.dhcpOptions = this.constructor.getValue(obj.dhcpOptions);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'subnet', realName: 'subnet' },
            { name: 'applianceIp', realName: 'applianceIp' },
            { name: 'vpnNatSubnet', realName: 'vpnNatSubnet' },
            { name: 'dhcpHandling', realName: 'dhcpHandling' },
            { name: 'dhcpRelayServerIps', realName: 'dhcpRelayServerIps', array: true },
            { name: 'dhcpLeaseTime', realName: 'dhcpLeaseTime' },
            { name: 'dhcpBootOptionsEnabled', realName: 'dhcpBootOptionsEnabled' },
            { name: 'dhcpBootNextServer', realName: 'dhcpBootNextServer' },
            { name: 'dhcpBootFilename', realName: 'dhcpBootFilename' },
            { name: 'fixedIpAssignments', realName: 'fixedIpAssignments' },
            {
                name: 'reservedIpRanges',
                realName: 'reservedIpRanges',
                array: true,
                type: 'ReservedIpRangeModel',
            },
            { name: 'dnsNameservers', realName: 'dnsNameservers' },
            { name: 'dhcpOptions', realName: 'dhcpOptions', array: true, type: 'DhcpOptionModel' },
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

module.exports = UpdateNetworkVlanModel;
