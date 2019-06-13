/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Wan2Model
 */
class Wan2Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.wanEnabled = this.constructor.getValue(obj.wanEnabled);
        this.usingStaticIp = this.constructor.getValue(obj.usingStaticIp);
        this.staticIp = this.constructor.getValue(obj.staticIp);
        this.staticGatewayIp = this.constructor.getValue(obj.staticGatewayIp);
        this.staticSubnetMask = this.constructor.getValue(obj.staticSubnetMask);
        this.staticDns = this.constructor.getValue(obj.staticDns);
        this.vlan = this.constructor.getValue(obj.vlan);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'wanEnabled', realName: 'wanEnabled' },
            { name: 'usingStaticIp', realName: 'usingStaticIp' },
            { name: 'staticIp', realName: 'staticIp' },
            { name: 'staticGatewayIp', realName: 'staticGatewayIp' },
            { name: 'staticSubnetMask', realName: 'staticSubnetMask' },
            { name: 'staticDns', realName: 'staticDns', array: true },
            { name: 'vlan', realName: 'vlan' },
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

module.exports = Wan2Model;
