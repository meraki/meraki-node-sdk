/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkCameraQualityRetentionProfileModel
 */
class UpdateNetworkCameraQualityRetentionProfileModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.motionBasedRetentionEnabled =
          this.constructor.getValue(obj.motionBasedRetentionEnabled);
        this.restrictedBandwidthModeEnabled =
          this.constructor.getValue(obj.restrictedBandwidthModeEnabled);
        this.audioRecordingEnabled = this.constructor.getValue(obj.audioRecordingEnabled);
        this.cloudArchiveEnabled = this.constructor.getValue(obj.cloudArchiveEnabled);
        this.motionDetectorVersion = this.constructor.getValue(obj.motionDetectorVersion);
        this.scheduleId = this.constructor.getValue(obj.scheduleId);
        this.maxRetentionDays = this.constructor.getValue(obj.maxRetentionDays);
        this.videoSettings = this.constructor.getValue(obj.videoSettings);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'motionBasedRetentionEnabled', realName: 'motionBasedRetentionEnabled' },
            { name: 'restrictedBandwidthModeEnabled', realName: 'restrictedBandwidthModeEnabled' },
            { name: 'audioRecordingEnabled', realName: 'audioRecordingEnabled' },
            { name: 'cloudArchiveEnabled', realName: 'cloudArchiveEnabled' },
            { name: 'motionDetectorVersion', realName: 'motionDetectorVersion' },
            { name: 'scheduleId', realName: 'scheduleId' },
            { name: 'maxRetentionDays', realName: 'maxRetentionDays' },
            { name: 'videoSettings', realName: 'videoSettings', type: 'VideoSettingsModel' },
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

module.exports = UpdateNetworkCameraQualityRetentionProfileModel;
