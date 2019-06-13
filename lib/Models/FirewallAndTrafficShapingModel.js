/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of FirewallAndTrafficShapingModel
 */
class FirewallAndTrafficShapingModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.settings = this.constructor.getValue(obj.settings);
        this.trafficShapingRules = this.constructor.getValue(obj.trafficShapingRules);
        this.l3FirewallRules = this.constructor.getValue(obj.l3FirewallRules);
        this.l7FirewallRules = this.constructor.getValue(obj.l7FirewallRules);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'settings', realName: 'settings' },
            {
                name: 'trafficShapingRules',
                realName: 'trafficShapingRules',
                array: true,
                type: 'TrafficShapingRuleModel',
            },
            {
                name: 'l3FirewallRules',
                realName: 'l3FirewallRules',
                array: true,
                type: 'L3FirewallRuleModel',
            },
            {
                name: 'l7FirewallRules',
                realName: 'l7FirewallRules',
                array: true,
                type: 'L7FirewallRuleModel',
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

module.exports = FirewallAndTrafficShapingModel;
