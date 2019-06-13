/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ProtectedNetworksModel
 */
class ProtectedNetworksModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.useDefault = this.constructor.getValue(obj.useDefault);
        this.includedCidr = this.constructor.getValue(obj.includedCidr);
        this.excludedCidr = this.constructor.getValue(obj.excludedCidr);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'useDefault', realName: 'useDefault' },
            { name: 'includedCidr', realName: 'includedCidr', array: true },
            { name: 'excludedCidr', realName: 'excludedCidr', array: true },
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

module.exports = ProtectedNetworksModel;
