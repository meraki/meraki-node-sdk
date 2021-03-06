/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateNetworkSmAppPolarisModel
 */
class CreateNetworkSmAppPolarisModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.scope = this.constructor.getValue(obj.scope);
        this.manifestUrl = this.constructor.getValue(obj.manifestUrl);
        this.bundleId = this.constructor.getValue(obj.bundleId);
        this.preventAutoInstall = this.constructor.getValue(obj.preventAutoInstall);
        this.usesVPP = this.constructor.getValue(obj.usesVPP);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'scope', realName: 'scope' },
            { name: 'manifestUrl', realName: 'manifestUrl' },
            { name: 'bundleId', realName: 'bundleId' },
            { name: 'preventAutoInstall', realName: 'preventAutoInstall' },
            { name: 'usesVPP', realName: 'usesVPP' },
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

module.exports = CreateNetworkSmAppPolarisModel;
