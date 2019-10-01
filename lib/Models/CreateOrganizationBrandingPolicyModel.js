/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateOrganizationBrandingPolicyModel
 */
class CreateOrganizationBrandingPolicyModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.enabled = this.constructor.getValue(obj.enabled);
        this.adminSettings = this.constructor.getValue(obj.adminSettings);
        this.helpSettings = this.constructor.getValue(obj.helpSettings);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'enabled', realName: 'enabled' },
            { name: 'adminSettings', realName: 'adminSettings', type: 'AdminSettingsModel' },
            { name: 'helpSettings', realName: 'helpSettings', type: 'HelpSettingsModel' },
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

module.exports = CreateOrganizationBrandingPolicyModel;
