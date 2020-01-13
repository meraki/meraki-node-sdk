/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of Rule12Model
 */
class Rule12Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.comment = this.constructor.getValue(obj.comment);
        this.policy = this.constructor.getValue(obj.policy);
        this.ipVersion = this.constructor.getValue(obj.ipVersion);
        this.protocol = this.constructor.getValue(obj.protocol);
        this.srcCidr = this.constructor.getValue(obj.srcCidr);
        this.srcPort = this.constructor.getValue(obj.srcPort);
        this.dstCidr = this.constructor.getValue(obj.dstCidr);
        this.dstPort = this.constructor.getValue(obj.dstPort);
        this.vlan = this.constructor.getValue(obj.vlan);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'comment', realName: 'comment' },
            { name: 'policy', realName: 'policy' },
            { name: 'ipVersion', realName: 'ipVersion' },
            { name: 'protocol', realName: 'protocol' },
            { name: 'srcCidr', realName: 'srcCidr' },
            { name: 'srcPort', realName: 'srcPort' },
            { name: 'dstCidr', realName: 'dstCidr' },
            { name: 'dstPort', realName: 'dstPort' },
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

module.exports = Rule12Model;
