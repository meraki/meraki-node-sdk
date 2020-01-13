/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateDeviceCellularGatewaySettingsModel
 */
class UpdateDeviceCellularGatewaySettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.reservedIpRanges = this.constructor.getValue(obj.reservedIpRanges);
        this.fixedIpAssignments = this.constructor.getValue(obj.fixedIpAssignments);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'reservedIpRanges',
                realName: 'reservedIpRanges',
                array: true,
                type: 'ReservedIpRangeModel',
            },
            {
                name: 'fixedIpAssignments',
                realName: 'fixedIpAssignments',
                array: true,
                type: 'FixedIpAssignmentModel',
            },
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

module.exports = UpdateDeviceCellularGatewaySettingsModel;
