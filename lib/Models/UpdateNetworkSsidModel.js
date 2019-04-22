/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSsidModel
 */
class UpdateNetworkSsidModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.enabled = this.constructor.getValue(obj.enabled);
        this.authMode = this.constructor.getValue(obj.authMode);
        this.encryptionMode = this.constructor.getValue(obj.encryptionMode);
        this.psk = this.constructor.getValue(obj.psk);
        this.wpaEncryptionMode = this.constructor.getValue(obj.wpaEncryptionMode);
        this.splashPage = this.constructor.getValue(obj.splashPage);
        this.radiusServers = this.constructor.getValue(obj.radiusServers);
        this.radiusCoaEnabled = this.constructor.getValue(obj.radiusCoaEnabled);
        this.radiusFailoverPolicy = this.constructor.getValue(obj.radiusFailoverPolicy);
        this.radiusLoadBalancingPolicy = this.constructor.getValue(obj.radiusLoadBalancingPolicy);
        this.radiusAccountingEnabled = this.constructor.getValue(obj.radiusAccountingEnabled);
        this.radiusAccountingServers = this.constructor.getValue(obj.radiusAccountingServers);
        this.ipAssignmentMode = this.constructor.getValue(obj.ipAssignmentMode);
        this.useVlanTagging = this.constructor.getValue(obj.useVlanTagging);
        this.concentratorNetworkId = this.constructor.getValue(obj.concentratorNetworkId);
        this.vlanId = this.constructor.getValue(obj.vlanId);
        this.defaultVlanId = this.constructor.getValue(obj.defaultVlanId);
        this.apTagsAndVlanIds = this.constructor.getValue(obj.apTagsAndVlanIds);
        this.walledGardenEnabled = this.constructor.getValue(obj.walledGardenEnabled);
        this.walledGardenRanges = this.constructor.getValue(obj.walledGardenRanges);
        this.minBitrate = this.constructor.getValue(obj.minBitrate);
        this.bandSelection = this.constructor.getValue(obj.bandSelection);
        this.perClientBandwidthLimitUp = this.constructor.getValue(obj.perClientBandwidthLimitUp);
        this.perClientBandwidthLimitDown =
          this.constructor.getValue(obj.perClientBandwidthLimitDown);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'enabled', realName: 'enabled' },
            { name: 'authMode', realName: 'authMode' },
            { name: 'encryptionMode', realName: 'encryptionMode' },
            { name: 'psk', realName: 'psk' },
            { name: 'wpaEncryptionMode', realName: 'wpaEncryptionMode' },
            { name: 'splashPage', realName: 'splashPage' },
            {
                name: 'radiusServers',
                realName: 'radiusServers',
                array: true,
                type: 'RadiusServerModel',
            },
            { name: 'radiusCoaEnabled', realName: 'radiusCoaEnabled' },
            { name: 'radiusFailoverPolicy', realName: 'radiusFailoverPolicy' },
            { name: 'radiusLoadBalancingPolicy', realName: 'radiusLoadBalancingPolicy' },
            { name: 'radiusAccountingEnabled', realName: 'radiusAccountingEnabled' },
            {
                name: 'radiusAccountingServers',
                realName: 'radiusAccountingServers',
                array: true,
                type: 'RadiusAccountingServerModel',
            },
            { name: 'ipAssignmentMode', realName: 'ipAssignmentMode' },
            { name: 'useVlanTagging', realName: 'useVlanTagging' },
            { name: 'concentratorNetworkId', realName: 'concentratorNetworkId' },
            { name: 'vlanId', realName: 'vlanId' },
            { name: 'defaultVlanId', realName: 'defaultVlanId' },
            {
                name: 'apTagsAndVlanIds',
                realName: 'apTagsAndVlanIds',
                array: true,
                type: 'ApTagsAndVlanIdModel',
            },
            { name: 'walledGardenEnabled', realName: 'walledGardenEnabled' },
            { name: 'walledGardenRanges', realName: 'walledGardenRanges' },
            { name: 'minBitrate', realName: 'minBitrate' },
            { name: 'bandSelection', realName: 'bandSelection' },
            { name: 'perClientBandwidthLimitUp', realName: 'perClientBandwidthLimitUp' },
            { name: 'perClientBandwidthLimitDown', realName: 'perClientBandwidthLimitDown' },
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

module.exports = UpdateNetworkSsidModel;
