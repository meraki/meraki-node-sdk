/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ClaimOrganizationModel
 */
class ClaimOrganizationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.orders = this.constructor.getValue(obj.orders);
        this.serials = this.constructor.getValue(obj.serials);
        this.licenses = this.constructor.getValue(obj.licenses);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'orders', realName: 'orders', array: true },
            { name: 'serials', realName: 'serials', array: true },
            { name: 'licenses', realName: 'licenses', array: true, type: 'LicenseModel' },
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

module.exports = ClaimOrganizationModel;
