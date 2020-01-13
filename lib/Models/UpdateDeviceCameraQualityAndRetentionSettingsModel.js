/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateDeviceCameraQualityAndRetentionSettingsModel
 */
class UpdateDeviceCameraQualityAndRetentionSettingsModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.profileId = this.constructor.getValue(obj.profileId);
        this.motionBasedRetentionEnabled =
          this.constructor.getValue(obj.motionBasedRetentionEnabled);
        this.audioRecordingEnabled = this.constructor.getValue(obj.audioRecordingEnabled);
        this.restrictedBandwidthModeEnabled =
          this.constructor.getValue(obj.restrictedBandwidthModeEnabled);
        this.quality = this.constructor.getValue(obj.quality);
        this.resolution = this.constructor.getValue(obj.resolution);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'profileId', realName: 'profileId' },
            { name: 'motionBasedRetentionEnabled', realName: 'motionBasedRetentionEnabled' },
            { name: 'audioRecordingEnabled', realName: 'audioRecordingEnabled' },
            { name: 'restrictedBandwidthModeEnabled', realName: 'restrictedBandwidthModeEnabled' },
            { name: 'quality', realName: 'quality' },
            { name: 'resolution', realName: 'resolution' },
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

module.exports = UpdateDeviceCameraQualityAndRetentionSettingsModel;
