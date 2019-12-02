/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MoveOrganizationLicensesSeatsModel
 */
class MoveOrganizationLicensesSeatsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.destOrganizationId = this.constructor.getValue(obj.destOrganizationId);
        this.licenseId = this.constructor.getValue(obj.licenseId);
        this.seatCount = this.constructor.getValue(obj.seatCount);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'destOrganizationId', realName: 'destOrganizationId' },
            { name: 'licenseId', realName: 'licenseId' },
            { name: 'seatCount', realName: 'seatCount' },
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

module.exports = MoveOrganizationLicensesSeatsModel;
