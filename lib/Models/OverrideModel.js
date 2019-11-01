/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OverrideModel
 */
class OverrideModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.switches = this.constructor.getValue(obj.switches);
        this.switchProfiles = this.constructor.getValue(obj.switchProfiles);
        this.mtuSize = this.constructor.getValue(obj.mtuSize);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'switches', realName: 'switches', array: true },
            { name: 'switchProfiles', realName: 'switchProfiles', array: true },
            { name: 'mtuSize', realName: 'mtuSize' },
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

module.exports = OverrideModel;
