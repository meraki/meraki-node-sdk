/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of BandwidthLimits6Model
 */
class BandwidthLimits6Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.wan1 = this.constructor.getValue(obj.wan1);
        this.wan2 = this.constructor.getValue(obj.wan2);
        this.cellular = this.constructor.getValue(obj.cellular);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'wan1', realName: 'wan1', type: 'Wan11Model' },
            { name: 'wan2', realName: 'wan2', type: 'Wan21Model' },
            { name: 'cellular', realName: 'cellular', type: 'CellularModel' },
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

module.exports = BandwidthLimits6Model;
