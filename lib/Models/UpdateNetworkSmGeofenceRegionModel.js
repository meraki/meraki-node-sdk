/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSmGeofenceRegionModel
 */
class UpdateNetworkSmGeofenceRegionModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.description = this.constructor.getValue(obj.description);
        this.type = this.constructor.getValue(obj.type);
        this.lat = this.constructor.getValue(obj.lat);
        this.lon = this.constructor.getValue(obj.lon);
        this.radius = this.constructor.getValue(obj.radius);
        this.north = this.constructor.getValue(obj.north);
        this.east = this.constructor.getValue(obj.east);
        this.south = this.constructor.getValue(obj.south);
        this.west = this.constructor.getValue(obj.west);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'description', realName: 'description' },
            { name: 'type', realName: 'type' },
            { name: 'lat', realName: 'lat' },
            { name: 'lon', realName: 'lon' },
            { name: 'radius', realName: 'radius' },
            { name: 'north', realName: 'north' },
            { name: 'east', realName: 'east' },
            { name: 'south', realName: 'south' },
            { name: 'west', realName: 'west' },
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

module.exports = UpdateNetworkSmGeofenceRegionModel;
