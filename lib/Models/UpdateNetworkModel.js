/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkModel
 */
class UpdateNetworkModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.timeZone = this.constructor.getValue(obj.timeZone);
        this.tags = this.constructor.getValue(obj.tags);
        this.disableMyMerakiCom = this.constructor.getValue(obj.disableMyMerakiCom);
        this.disableRemoteStatusPage = this.constructor.getValue(obj.disableRemoteStatusPage);
        this.enrollmentString = this.constructor.getValue(obj.enrollmentString);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'timeZone', realName: 'timeZone' },
            { name: 'tags', realName: 'tags' },
            { name: 'disableMyMerakiCom', realName: 'disableMyMerakiCom' },
            { name: 'disableRemoteStatusPage', realName: 'disableRemoteStatusPage' },
            { name: 'enrollmentString', realName: 'enrollmentString' },
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

module.exports = UpdateNetworkModel;
