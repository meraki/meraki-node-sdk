/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSwitchLinkAggregationModel
 */
class UpdateNetworkSwitchLinkAggregationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.switchPorts = this.constructor.getValue(obj.switchPorts);
        this.switchProfilePorts = this.constructor.getValue(obj.switchProfilePorts);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'switchPorts', realName: 'switchPorts', array: true, type: 'SwitchPortModel' },
            {
                name: 'switchProfilePorts',
                realName: 'switchProfilePorts',
                array: true,
                type: 'SwitchProfilePortModel',
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

module.exports = UpdateNetworkSwitchLinkAggregationModel;
