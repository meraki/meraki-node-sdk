/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateOrganizationVpnFirewallRulesModel
 */
class UpdateOrganizationVpnFirewallRulesModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.rules = this.constructor.getValue(obj.rules);
        this.syslogDefaultRule = this.constructor.getValue(obj.syslogDefaultRule);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'rules', realName: 'rules', array: true, type: 'Rule3Model' },
            { name: 'syslogDefaultRule', realName: 'syslogDefaultRule' },
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

module.exports = UpdateOrganizationVpnFirewallRulesModel;
