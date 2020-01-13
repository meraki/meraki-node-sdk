/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of VideoSettingsModel
 */
class VideoSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.mV21MV71 = this.constructor.getValue(obj.mV21MV71 || obj['MV21/MV71']);
        this.mV12MV22MV72 = this.constructor.getValue(obj.mV12MV22MV72 || obj['MV12/MV22/MV72']);
        this.mV32 = this.constructor.getValue(obj.mV32 || obj.MV32);
        this.mV12WE = this.constructor.getValue(obj.mV12WE || obj.MV12WE);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'mV21MV71', realName: 'MV21/MV71', type: 'MV21MV71Model' },
            { name: 'mV12MV22MV72', realName: 'MV12/MV22/MV72', type: 'MV12MV22MV72Model' },
            { name: 'mV32', realName: 'MV32', type: 'MV32Model' },
            { name: 'mV12WE', realName: 'MV12WE', type: 'MV12WEModel' },
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

module.exports = VideoSettingsModel;
