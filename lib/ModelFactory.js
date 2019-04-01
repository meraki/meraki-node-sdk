/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated for Meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const UpdateNetworkClientPolicyModel = require('../lib/Models/UpdateNetworkClientPolicyModel');
const BlinkLedsNetworkDeviceModel = require('../lib/Models/BlinkLedsNetworkDeviceModel');
const UpdateNetworkL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL3FirewallRulesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('../lib/Models/UpdateOrganizationVpnFirewallRulesModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkSsidL3FirewallRulesModel');
const MondayModel = require('../lib/Models/MondayModel');
const TuesdayModel = require('../lib/Models/TuesdayModel');
const WednesdayModel = require('../lib/Models/WednesdayModel');
const ThursdayModel = require('../lib/Models/ThursdayModel');
const FridayModel = require('../lib/Models/FridayModel');
const SaturdayModel = require('../lib/Models/SaturdayModel');
const SundayModel = require('../lib/Models/SundayModel');
const BandwidthModel = require('../lib/Models/BandwidthModel');
const BandwidthLimitsModel = require('../lib/Models/BandwidthLimitsModel');
const UpdateNetworkGroupPolicyModel = require('../lib/Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServersModel = require('../lib/Models/CreateNetworkHttpServersModel');
const UpdateNetworkHttpServerModel = require('../lib/Models/UpdateNetworkHttpServerModel');
const UpdateOrganizationAlertSettingsModel =
  require('../lib/Models/UpdateOrganizationAlertSettingsModel');
const DefaultDestinations1Model = require('../lib/Models/DefaultDestinations1Model');
const CreateOrganizationSamlRolesModel = require('../lib/Models/CreateOrganizationSamlRolesModel');
const Tag2Model = require('../lib/Models/Tag2Model');
const Network2Model = require('../lib/Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('../lib/Models/UpdateOrganizationSamlRoleModel');
const CreateNetworkSmGeofencesModel = require('../lib/Models/CreateNetworkSmGeofencesModel');
const UpdateNetworkSmGeofenceModel = require('../lib/Models/UpdateNetworkSmGeofenceModel');
const CreateNetworkSmTargetGroupsModel = require('../lib/Models/CreateNetworkSmTargetGroupsModel');
const UpdateNetworkSmTargetGroupModel = require('../lib/Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSmTagModel = require('../lib/Models/UpdateNetworkSmTagModel');
const CreateNetworkSmTagModel = require('../lib/Models/CreateNetworkSmTagModel');
const UpdateNetworkSmAppPolariModel = require('../lib/Models/UpdateNetworkSmAppPolariModel');
const UpdateNetworkSmDeviceFieldsModel = require('../lib/Models/UpdateNetworkSmDeviceFieldsModel');
const UpdateNetworkSmDeviceWipeModel = require('../lib/Models/UpdateNetworkSmDeviceWipeModel');
const UpdateNetworkSmDevicesCheckinModel =
  require('../lib/Models/UpdateNetworkSmDevicesCheckinModel');
const UpdateNetworkSsidSplashSettingsModel =
  require('../lib/Models/UpdateNetworkSsidSplashSettingsModel');
const RadiusServerModel = require('../lib/Models/RadiusServerModel');
const RadiusAccountingServerModel = require('../lib/Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('../lib/Models/ApTagsAndVlanIdModel');
const UpdateNetworkSwitchSettingsModel = require('../lib/Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('../lib/Models/PowerExceptionModel');
const CreateNetworkSwitchStacksModel = require('../lib/Models/CreateNetworkSwitchStacksModel');
const ServerModel = require('../lib/Models/ServerModel');
const UpdateNetworkTrafficShapingModel = require('../lib/Models/UpdateNetworkTrafficShapingModel');
const DefinitionModel = require('../lib/Models/DefinitionModel');
const PerClientBandwidthLimitsModel = require('../lib/Models/PerClientBandwidthLimitsModel');
const BandwidthLimits2Model = require('../lib/Models/BandwidthLimits2Model');
const UpdateNetworkSsidTrafficShapingModel =
  require('../lib/Models/UpdateNetworkSsidTrafficShapingModel');
const UpdateNetworkContentFilteringModel =
  require('../lib/Models/UpdateNetworkContentFilteringModel');
const UpdateNetworkFirewalledServiceModel =
  require('../lib/Models/UpdateNetworkFirewalledServiceModel');
const CreateNetworkStaticRoutesModel = require('../lib/Models/CreateNetworkStaticRoutesModel');
const BandwidthLimits4Model = require('../lib/Models/BandwidthLimits4Model');
const CreateNetworkVlansModel = require('../lib/Models/CreateNetworkVlansModel');
const DhcpOptionModel = require('../lib/Models/DhcpOptionModel');
const CreateOrganizationAdminsModel = require('../lib/Models/CreateOrganizationAdminsModel');
const UpdateOrganizationAdminModel = require('../lib/Models/UpdateOrganizationAdminModel');
const AlertModel = require('../lib/Models/AlertModel');
const UpdateNetworkBluetoothSettingsModel =
  require('../lib/Models/UpdateNetworkBluetoothSettingsModel');
const CreateOrganizationNetworksModel = require('../lib/Models/CreateOrganizationNetworksModel');
const UpdateNetworkModel = require('../lib/Models/UpdateNetworkModel');
const ProvisionNetworkClientsModel = require('../lib/Models/ProvisionNetworkClientsModel');
const UpdateNetworkDeviceModel = require('../lib/Models/UpdateNetworkDeviceModel');
const RuleModel = require('../lib/Models/RuleModel');
const Rule2Model = require('../lib/Models/Rule2Model');
const Rule3Model = require('../lib/Models/Rule3Model');
const CreateNetworkGroupPoliciesModel = require('../lib/Models/CreateNetworkGroupPoliciesModel');
const SchedulingModel = require('../lib/Models/SchedulingModel');
const Alert1Model = require('../lib/Models/Alert1Model');
const UpdateOrganizationSnmpModel = require('../lib/Models/UpdateOrganizationSnmpModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('../lib/Models/UpdateOrganizationThirdPartyVPNPeersModel');
const ClaimOrganizationModel = require('../lib/Models/ClaimOrganizationModel');
const UpdateNetworkPhoneAssignmentModel =
  require('../lib/Models/UpdateNetworkPhoneAssignmentModel');
const CreateNetworkPhoneConferenceRoomsModel =
  require('../lib/Models/CreateNetworkPhoneConferenceRoomsModel');
const CreateOrganizationActionBatchesModel =
  require('../lib/Models/CreateOrganizationActionBatchesModel');
const ActionModel = require('../lib/Models/ActionModel');
const UpdateOrganizationActionBatchModel =
  require('../lib/Models/UpdateOrganizationActionBatchModel');
const TagModel = require('../lib/Models/TagModel');
const NetworkModel = require('../lib/Models/NetworkModel');
const UpdateNetworkAlertSettingsModel = require('../lib/Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('../lib/Models/DefaultDestinationsModel');
const BindNetworkModel = require('../lib/Models/BindNetworkModel');
const UpdateNetworkSiteToSiteVpnModel = require('../lib/Models/UpdateNetworkSiteToSiteVpnModel');
const HubModel = require('../lib/Models/HubModel');
const SubnetModel = require('../lib/Models/SubnetModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('../lib/Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SnapshotNetworkCameraModel = require('../lib/Models/SnapshotNetworkCameraModel');
const ClaimNetworkDevicesModel = require('../lib/Models/ClaimNetworkDevicesModel');
const SsidsModel = require('../lib/Models/SsidsModel');
const CreateNetworkHttpServersWebhookTestsModel =
  require('../lib/Models/CreateNetworkHttpServersWebhookTestsModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('../lib/Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateOrganizationModel = require('../lib/Models/UpdateOrganizationModel');
const CreateOrganizationsModel = require('../lib/Models/CreateOrganizationsModel');
const CreateNetworkPhoneAnnouncementsModel =
  require('../lib/Models/CreateNetworkPhoneAnnouncementsModel');
const CloneOrganizationModel = require('../lib/Models/CloneOrganizationModel');
const UpdateNetworkPhoneContactModel = require('../lib/Models/UpdateNetworkPhoneContactModel');
const CreateNetworkPhoneContactsModel = require('../lib/Models/CreateNetworkPhoneContactsModel');
const AddNetworkSwitchStackModel = require('../lib/Models/AddNetworkSwitchStackModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('../lib/Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const UpdateNetworkSyslogServersModel = require('../lib/Models/UpdateNetworkSyslogServersModel');
const RemoveNetworkSwitchStackModel = require('../lib/Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkOneToOneNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToOneNatRulesModel');
const UpdateNetworkOneToManyNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToManyNatRulesModel');
const UpdateNetworkUplinkSettingsModel = require('../lib/Models/UpdateNetworkUplinkSettingsModel');
const UpdateNetworkPortForwardingRulesModel =
  require('../lib/Models/UpdateNetworkPortForwardingRulesModel');
const UpdateNetworkVlansEnabledStateModel =
  require('../lib/Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkPhoneConferenceRoomModel =
  require('../lib/Models/UpdateNetworkPhoneConferenceRoomModel');
const CreateNetworkPiiRequestsModel = require('../lib/Models/CreateNetworkPiiRequestsModel');
const CreateNetworkSmProfileClarityModel =
  require('../lib/Models/CreateNetworkSmProfileClarityModel');
const UpdateNetworkSmProfileClarityModel =
  require('../lib/Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('../lib/Models/AddNetworkSmProfileClarityModel');
const CreateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/UpdateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileUmbrellaModel = require('../lib/Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmAppPolarisModel = require('../lib/Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmDevicesTagsModel = require('../lib/Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkSmDevicesLockModel = require('../lib/Models/UpdateNetworkSmDevicesLockModel');
const UpdateNetworkSmDevicesMoveModel = require('../lib/Models/UpdateNetworkSmDevicesMoveModel');
const Rule4Model = require('../lib/Models/Rule4Model');
const Rule5Model = require('../lib/Models/Rule5Model');
const Rule7Model = require('../lib/Models/Rule7Model');
const Rule8Model = require('../lib/Models/Rule8Model');
const UpdateNetworkStaticRouteModel = require('../lib/Models/UpdateNetworkStaticRouteModel');
const IpsecPoliciesModel = require('../lib/Models/IpsecPoliciesModel');
const CreateNetworkPhoneCallgroupsModel =
  require('../lib/Models/CreateNetworkPhoneCallgroupsModel');
const UpdateNetworkPhoneCallgroupModel = require('../lib/Models/UpdateNetworkPhoneCallgroupModel');
const CreateNetworkSmGeofenceRegionsModel =
  require('../lib/Models/CreateNetworkSmGeofenceRegionsModel');
const UpdateNetworkSmGeofenceRegionModel =
  require('../lib/Models/UpdateNetworkSmGeofenceRegionModel');
const UpdateDeviceSwitchPortModel = require('../lib/Models/UpdateDeviceSwitchPortModel');
const Rule6Model = require('../lib/Models/Rule6Model');
const UpdateNetworkVlanModel = require('../lib/Models/UpdateNetworkVlanModel');
const UpdateNetworkSsidModel = require('../lib/Models/UpdateNetworkSsidModel');

const classMap = {
    UpdateNetworkClientPolicyModel,
    BlinkLedsNetworkDeviceModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    MondayModel,
    TuesdayModel,
    WednesdayModel,
    ThursdayModel,
    FridayModel,
    SaturdayModel,
    SundayModel,
    BandwidthModel,
    BandwidthLimitsModel,
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServersModel,
    UpdateNetworkHttpServerModel,
    UpdateOrganizationAlertSettingsModel,
    DefaultDestinations1Model,
    CreateOrganizationSamlRolesModel,
    Tag2Model,
    Network2Model,
    UpdateOrganizationSamlRoleModel,
    CreateNetworkSmGeofencesModel,
    UpdateNetworkSmGeofenceModel,
    CreateNetworkSmTargetGroupsModel,
    UpdateNetworkSmTargetGroupModel,
    UpdateNetworkSmTagModel,
    CreateNetworkSmTagModel,
    UpdateNetworkSmAppPolariModel,
    UpdateNetworkSmDeviceFieldsModel,
    UpdateNetworkSmDeviceWipeModel,
    UpdateNetworkSmDevicesCheckinModel,
    UpdateNetworkSsidSplashSettingsModel,
    RadiusServerModel,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    CreateNetworkSwitchStacksModel,
    ServerModel,
    UpdateNetworkTrafficShapingModel,
    DefinitionModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits2Model,
    UpdateNetworkSsidTrafficShapingModel,
    UpdateNetworkContentFilteringModel,
    UpdateNetworkFirewalledServiceModel,
    CreateNetworkStaticRoutesModel,
    BandwidthLimits4Model,
    CreateNetworkVlansModel,
    DhcpOptionModel,
    CreateOrganizationAdminsModel,
    UpdateOrganizationAdminModel,
    AlertModel,
    UpdateNetworkBluetoothSettingsModel,
    CreateOrganizationNetworksModel,
    UpdateNetworkModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkDeviceModel,
    RuleModel,
    Rule2Model,
    Rule3Model,
    CreateNetworkGroupPoliciesModel,
    SchedulingModel,
    Alert1Model,
    UpdateOrganizationSnmpModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    ClaimOrganizationModel,
    UpdateNetworkPhoneAssignmentModel,
    CreateNetworkPhoneConferenceRoomsModel,
    CreateOrganizationActionBatchesModel,
    ActionModel,
    UpdateOrganizationActionBatchModel,
    TagModel,
    NetworkModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    BindNetworkModel,
    UpdateNetworkSiteToSiteVpnModel,
    HubModel,
    SubnetModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SnapshotNetworkCameraModel,
    ClaimNetworkDevicesModel,
    SsidsModel,
    CreateNetworkHttpServersWebhookTestsModel,
    UpdateNetworkCellularFirewallRulesModel,
    UpdateOrganizationModel,
    CreateOrganizationsModel,
    CreateNetworkPhoneAnnouncementsModel,
    CloneOrganizationModel,
    UpdateNetworkPhoneContactModel,
    CreateNetworkPhoneContactsModel,
    AddNetworkSwitchStackModel,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    UpdateNetworkSyslogServersModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkOneToOneNatRulesModel,
    UpdateNetworkOneToManyNatRulesModel,
    UpdateNetworkUplinkSettingsModel,
    UpdateNetworkPortForwardingRulesModel,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkPhoneConferenceRoomModel,
    CreateNetworkPiiRequestsModel,
    CreateNetworkSmProfileClarityModel,
    UpdateNetworkSmProfileClarityModel,
    AddNetworkSmProfileClarityModel,
    CreateNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileUmbrellaModel,
    AddNetworkSmProfileUmbrellaModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSmDevicesTagsModel,
    UpdateNetworkSmDevicesLockModel,
    UpdateNetworkSmDevicesMoveModel,
    Rule4Model,
    Rule5Model,
    Rule7Model,
    Rule8Model,
    UpdateNetworkStaticRouteModel,
    IpsecPoliciesModel,
    CreateNetworkPhoneCallgroupsModel,
    UpdateNetworkPhoneCallgroupModel,
    CreateNetworkSmGeofenceRegionsModel,
    UpdateNetworkSmGeofenceRegionModel,
    UpdateDeviceSwitchPortModel,
    Rule6Model,
    UpdateNetworkVlanModel,
    UpdateNetworkSsidModel,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
