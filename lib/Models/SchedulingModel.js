/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of SchedulingModel
 */
class SchedulingModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.enabled = this.constructor.getValue(obj.enabled);
        this.monday = this.constructor.getValue(obj.monday);
        this.tuesday = this.constructor.getValue(obj.tuesday);
        this.wednesday = this.constructor.getValue(obj.wednesday);
        this.thursday = this.constructor.getValue(obj.thursday);
        this.friday = this.constructor.getValue(obj.friday);
        this.saturday = this.constructor.getValue(obj.saturday);
        this.sunday = this.constructor.getValue(obj.sunday);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'enabled', realName: 'enabled' },
            { name: 'monday', realName: 'monday', type: 'MondayModel' },
            { name: 'tuesday', realName: 'tuesday', type: 'TuesdayModel' },
            { name: 'wednesday', realName: 'wednesday', type: 'WednesdayModel' },
            { name: 'thursday', realName: 'thursday', type: 'ThursdayModel' },
            { name: 'friday', realName: 'friday', type: 'FridayModel' },
            { name: 'saturday', realName: 'saturday', type: 'SaturdayModel' },
            { name: 'sunday', realName: 'sunday', type: 'SundayModel' },
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

module.exports = SchedulingModel;
