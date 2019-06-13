/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkGroupPolicyModel
 */
class UpdateNetworkGroupPolicyModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.scheduling = this.constructor.getValue(obj.scheduling);
        this.bandwidth = this.constructor.getValue(obj.bandwidth);
        this.firewallAndTrafficShaping = this.constructor.getValue(obj.firewallAndTrafficShaping);
        this.splashAuthSettings = this.constructor.getValue(obj.splashAuthSettings);
        this.vlanTagging = this.constructor.getValue(obj.vlanTagging);
        this.bonjourForwarding = this.constructor.getValue(obj.bonjourForwarding);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'scheduling', realName: 'scheduling', type: 'SchedulingModel' },
            { name: 'bandwidth', realName: 'bandwidth', type: 'BandwidthModel' },
            {
                name: 'firewallAndTrafficShaping',
                realName: 'firewallAndTrafficShaping',
                type: 'FirewallAndTrafficShapingModel',
            },
            { name: 'splashAuthSettings', realName: 'splashAuthSettings' },
            { name: 'vlanTagging', realName: 'vlanTagging', type: 'VlanTaggingModel' },
            {
                name: 'bonjourForwarding',
                realName: 'bonjourForwarding',
                type: 'BonjourForwardingModel',
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

module.exports = UpdateNetworkGroupPolicyModel;
