/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkSwitchSettingsQosRuleModel
 */
class CreateNetworkSwitchSettingsQosRuleModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.vlan = this.constructor.getValue(obj.vlan);
        this.protocol = this.constructor.getValue(obj.protocol);
        this.srcPort = this.constructor.getValue(obj.srcPort);
        this.srcPortRange = this.constructor.getValue(obj.srcPortRange);
        this.dstPort = this.constructor.getValue(obj.dstPort);
        this.dstPortRange = this.constructor.getValue(obj.dstPortRange);
        this.dscp = this.constructor.getValue(obj.dscp);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'vlan', realName: 'vlan' },
            { name: 'protocol', realName: 'protocol' },
            { name: 'srcPort', realName: 'srcPort' },
            { name: 'srcPortRange', realName: 'srcPortRange' },
            { name: 'dstPort', realName: 'dstPort' },
            { name: 'dstPortRange', realName: 'dstPortRange' },
            { name: 'dscp', realName: 'dscp' },
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

module.exports = CreateNetworkSwitchSettingsQosRuleModel;
