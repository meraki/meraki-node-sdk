/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of StpBridgePriorityModel
 */
class StpBridgePriorityModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.switchProfiles = this.constructor.getValue(obj.switchProfiles);
        this.switches = this.constructor.getValue(obj.switches);
        this.stacks = this.constructor.getValue(obj.stacks);
        this.stpPriority = this.constructor.getValue(obj.stpPriority);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'switchProfiles', realName: 'switchProfiles', array: true },
            { name: 'switches', realName: 'switches', array: true },
            { name: 'stacks', realName: 'stacks', array: true },
            { name: 'stpPriority', realName: 'stpPriority' },
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

module.exports = StpBridgePriorityModel;
