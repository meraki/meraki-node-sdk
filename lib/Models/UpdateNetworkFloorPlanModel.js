/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkFloorPlanModel
 */
class UpdateNetworkFloorPlanModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.center = this.constructor.getValue(obj.center);
        this.bottomLeftCorner = this.constructor.getValue(obj.bottomLeftCorner);
        this.bottomRightCorner = this.constructor.getValue(obj.bottomRightCorner);
        this.topLeftCorner = this.constructor.getValue(obj.topLeftCorner);
        this.topRightCorner = this.constructor.getValue(obj.topRightCorner);
        this.imageContents = this.constructor.getValue(obj.imageContents);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'center', realName: 'center', type: 'Center1Model' },
            {
                name: 'bottomLeftCorner',
                realName: 'bottomLeftCorner',
                type: 'BottomLeftCornerModel',
            },
            {
                name: 'bottomRightCorner',
                realName: 'bottomRightCorner',
                type: 'BottomRightCornerModel',
            },
            { name: 'topLeftCorner', realName: 'topLeftCorner', type: 'TopLeftCornerModel' },
            { name: 'topRightCorner', realName: 'topRightCorner', type: 'TopRightCornerModel' },
            { name: 'imageContents', realName: 'imageContents' },
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

module.exports = UpdateNetworkFloorPlanModel;
