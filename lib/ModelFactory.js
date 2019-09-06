/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const UpdateDeviceSwitchPortModel = require('../lib/Models/UpdateDeviceSwitchPortModel');
const RemoveNetworkSwitchStackModel = require('../lib/Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkModel = require('../lib/Models/UpdateNetworkModel');
const UpdateNetworkAlertSettingsModel = require('../lib/Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('../lib/Models/DefaultDestinationsModel');
const AlertModel = require('../lib/Models/AlertModel');
const UpdateNetworkAppliancePortModel = require('../lib/Models/UpdateNetworkAppliancePortModel');
const BindNetworkModel = require('../lib/Models/BindNetworkModel');
const UpdateNetworkBluetoothSettingsModel =
  require('../lib/Models/UpdateNetworkBluetoothSettingsModel');
const GenerateNetworkCameraSnapshotModel =
  require('../lib/Models/GenerateNetworkCameraSnapshotModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('../lib/Models/UpdateNetworkCellularFirewallRulesModel');
const RuleModel = require('../lib/Models/RuleModel');
const ProvisionNetworkClientsModel = require('../lib/Models/ProvisionNetworkClientsModel');
const UpdateNetworkClientPolicyModel = require('../lib/Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('../lib/Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('../lib/Models/SsidsModel');
const UpdateNetworkContentFilteringModel =
  require('../lib/Models/UpdateNetworkContentFilteringModel');
const ClaimNetworkDevicesModel = require('../lib/Models/ClaimNetworkDevicesModel');
const UpdateNetworkDeviceModel = require('../lib/Models/UpdateNetworkDeviceModel');
const BlinkNetworkDeviceLedsModel = require('../lib/Models/BlinkNetworkDeviceLedsModel');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('../lib/Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const Wan1Model = require('../lib/Models/Wan1Model');
const Wan2Model = require('../lib/Models/Wan2Model');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('../lib/Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const UpdateNetworkFirewalledServiceModel =
  require('../lib/Models/UpdateNetworkFirewalledServiceModel');
const CreateNetworkGroupPolicyModel = require('../lib/Models/CreateNetworkGroupPolicyModel');
const SchedulingModel = require('../lib/Models/SchedulingModel');
const MondayModel = require('../lib/Models/MondayModel');
const TuesdayModel = require('../lib/Models/TuesdayModel');
const WednesdayModel = require('../lib/Models/WednesdayModel');
const ThursdayModel = require('../lib/Models/ThursdayModel');
const FridayModel = require('../lib/Models/FridayModel');
const SaturdayModel = require('../lib/Models/SaturdayModel');
const SundayModel = require('../lib/Models/SundayModel');
const BandwidthModel = require('../lib/Models/BandwidthModel');
const BandwidthLimitsModel = require('../lib/Models/BandwidthLimitsModel');
const FirewallAndTrafficShapingModel = require('../lib/Models/FirewallAndTrafficShapingModel');
const TrafficShapingRuleModel = require('../lib/Models/TrafficShapingRuleModel');
const DefinitionModel = require('../lib/Models/DefinitionModel');
const PerClientBandwidthLimitsModel = require('../lib/Models/PerClientBandwidthLimitsModel');
const BandwidthLimits1Model = require('../lib/Models/BandwidthLimits1Model');
const L3FirewallRuleModel = require('../lib/Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('../lib/Models/L7FirewallRuleModel');
const ContentFilteringModel = require('../lib/Models/ContentFilteringModel');
const AllowedUrlPatternsModel = require('../lib/Models/AllowedUrlPatternsModel');
const BlockedUrlPatternsModel = require('../lib/Models/BlockedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('../lib/Models/BlockedUrlCategoriesModel');
const VlanTaggingModel = require('../lib/Models/VlanTaggingModel');
const BonjourForwardingModel = require('../lib/Models/BonjourForwardingModel');
const Rule1Model = require('../lib/Models/Rule1Model');
const UpdateNetworkGroupPolicyModel = require('../lib/Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServerModel = require('../lib/Models/CreateNetworkHttpServerModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('../lib/Models/CreateNetworkHttpServersWebhookTestModel');
const UpdateNetworkHttpServerModel = require('../lib/Models/UpdateNetworkHttpServerModel');
const UpdateNetworkL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL3FirewallRulesModel');
const UpdateNetworkL7FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL7FirewallRulesModel');
const Rule4Model = require('../lib/Models/Rule4Model');
const UpdateNetworkNetflowSettingsModel =
  require('../lib/Models/UpdateNetworkNetflowSettingsModel');
const UpdateNetworkOneToManyNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToManyNatRulesModel');
const Rule5Model = require('../lib/Models/Rule5Model');
const UpdateNetworkOneToOneNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToOneNatRulesModel');
const Rule6Model = require('../lib/Models/Rule6Model');
const CreateNetworkPiiRequestModel = require('../lib/Models/CreateNetworkPiiRequestModel');
const UpdateNetworkPortForwardingRulesModel =
  require('../lib/Models/UpdateNetworkPortForwardingRulesModel');
const Rule7Model = require('../lib/Models/Rule7Model');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('../lib/Models/UpdateNetworkSecurityIntrusionSettingsModel');
const ProtectedNetworksModel = require('../lib/Models/ProtectedNetworksModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('../lib/Models/UpdateNetworkSecurityMalwareSettingsModel');
const AllowedUrlModel = require('../lib/Models/AllowedUrlModel');
const AllowedFileModel = require('../lib/Models/AllowedFileModel');
const UpdateNetworkSiteToSiteVpnModel = require('../lib/Models/UpdateNetworkSiteToSiteVpnModel');
const HubModel = require('../lib/Models/HubModel');
const SubnetModel = require('../lib/Models/SubnetModel');
const CreateNetworkSmAppPolarisModel = require('../lib/Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmAppPolarisModel = require('../lib/Models/UpdateNetworkSmAppPolarisModel');
const CreateNetworkSmBypassActivationLockAttemptModel =
  require('../lib/Models/CreateNetworkSmBypassActivationLockAttemptModel');
const UpdateNetworkSmDeviceFieldsModel = require('../lib/Models/UpdateNetworkSmDeviceFieldsModel');
const DeviceFieldsModel = require('../lib/Models/DeviceFieldsModel');
const WipeNetworkSmDeviceModel = require('../lib/Models/WipeNetworkSmDeviceModel');
const CheckinNetworkSmDevicesModel = require('../lib/Models/CheckinNetworkSmDevicesModel');
const MoveNetworkSmDevicesModel = require('../lib/Models/MoveNetworkSmDevicesModel');
const UpdateNetworkSmDevicesTagsModel = require('../lib/Models/UpdateNetworkSmDevicesTagsModel');
const CreateNetworkSmProfileClarityModel =
  require('../lib/Models/CreateNetworkSmProfileClarityModel');
const VendorConfigModel = require('../lib/Models/VendorConfigModel');
const UpdateNetworkSmProfileClarityModel =
  require('../lib/Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('../lib/Models/AddNetworkSmProfileClarityModel');
const CreateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/CreateNetworkSmProfileUmbrellaModel');
const ProviderConfigurationModel = require('../lib/Models/ProviderConfigurationModel');
const UpdateNetworkSmProfileUmbrellaModel =
  require('../lib/Models/UpdateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileUmbrellaModel = require('../lib/Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmTargetGroupModel = require('../lib/Models/CreateNetworkSmTargetGroupModel');
const UpdateNetworkSmTargetGroupModel = require('../lib/Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSnmpSettingsModel = require('../lib/Models/UpdateNetworkSnmpSettingsModel');
const UserModel = require('../lib/Models/UserModel');
const UpdateNetworkSsidModel = require('../lib/Models/UpdateNetworkSsidModel');
const RadiusServerModel = require('../lib/Models/RadiusServerModel');
const RadiusAccountingServerModel = require('../lib/Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('../lib/Models/ApTagsAndVlanIdModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule8Model = require('../lib/Models/Rule8Model');
const UpdateNetworkSsidsPlashSettingsModel =
  require('../lib/Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('../lib/Models/UpdateNetworkSsidTrafficShapingModel');
const Rule9Model = require('../lib/Models/Rule9Model');
const CreateNetworkStaticRouteModel = require('../lib/Models/CreateNetworkStaticRouteModel');
const UpdateNetworkStaticRouteModel = require('../lib/Models/UpdateNetworkStaticRouteModel');
const CreateNetworkSwitchPortScheduleModel =
  require('../lib/Models/CreateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('../lib/Models/PortScheduleModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('../lib/Models/UpdateNetworkSwitchPortScheduleModel');
const UpdateNetworkSwitchSettingsModel = require('../lib/Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('../lib/Models/PowerExceptionModel');
const CreateNetworkSwitchStackModel = require('../lib/Models/CreateNetworkSwitchStackModel');
const AddNetworkSwitchStackModel = require('../lib/Models/AddNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('../lib/Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('../lib/Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('../lib/Models/UpdateNetworkTrafficAnalysisSettingsModel');
const CustomPieChartItemModel = require('../lib/Models/CustomPieChartItemModel');
const UpdateNetworkTrafficShapingModel = require('../lib/Models/UpdateNetworkTrafficShapingModel');
const Rule10Model = require('../lib/Models/Rule10Model');
const UpdateNetworkUplinkSettingsModel = require('../lib/Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits6Model = require('../lib/Models/BandwidthLimits6Model');
const CreateNetworkVlanModel = require('../lib/Models/CreateNetworkVlanModel');
const UpdateNetworkVlanModel = require('../lib/Models/UpdateNetworkVlanModel');
const ReservedIpRangeModel = require('../lib/Models/ReservedIpRangeModel');
const DhcpOptionModel = require('../lib/Models/DhcpOptionModel');
const UpdateNetworkVlansEnabledStateModel =
  require('../lib/Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkWarmSpareSettingsModel =
  require('../lib/Models/UpdateNetworkWarmSpareSettingsModel');
const CreateNetworkWirelessRfProfileModel =
  require('../lib/Models/CreateNetworkWirelessRfProfileModel');
const ApBandSettingsModel = require('../lib/Models/ApBandSettingsModel');
const TwoFourGhzSettingsModel = require('../lib/Models/TwoFourGhzSettingsModel');
const FiveGhzSettingsModel = require('../lib/Models/FiveGhzSettingsModel');
const UpdateNetworkWirelessRfProfileModel =
  require('../lib/Models/UpdateNetworkWirelessRfProfileModel');
const ApBandSettings1Model = require('../lib/Models/ApBandSettings1Model');
const TwoFourGhzSettings1Model = require('../lib/Models/TwoFourGhzSettings1Model');
const FiveGhzSettings1Model = require('../lib/Models/FiveGhzSettings1Model');
const LockNetworkSmDevicesModel = require('../lib/Models/LockNetworkSmDevicesModel');
const CreateOrganizationModel = require('../lib/Models/CreateOrganizationModel');
const UpdateOrganizationModel = require('../lib/Models/UpdateOrganizationModel');
const CreateOrganizationActionBatchModel =
  require('../lib/Models/CreateOrganizationActionBatchModel');
const ActionModel = require('../lib/Models/ActionModel');
const UpdateOrganizationActionBatchModel =
  require('../lib/Models/UpdateOrganizationActionBatchModel');
const CreateOrganizationAdminModel = require('../lib/Models/CreateOrganizationAdminModel');
const TagModel = require('../lib/Models/TagModel');
const NetworkModel = require('../lib/Models/NetworkModel');
const UpdateOrganizationAdminModel = require('../lib/Models/UpdateOrganizationAdminModel');
const ClaimOrganizationModel = require('../lib/Models/ClaimOrganizationModel');
const LicenseModel = require('../lib/Models/LicenseModel');
const CloneOrganizationModel = require('../lib/Models/CloneOrganizationModel');
const CreateOrganizationNetworkModel = require('../lib/Models/CreateOrganizationNetworkModel');
const CombineOrganizationNetworksModel = require('../lib/Models/CombineOrganizationNetworksModel');
const CreateOrganizationSamlRoleModel = require('../lib/Models/CreateOrganizationSamlRoleModel');
const Tag2Model = require('../lib/Models/Tag2Model');
const Network2Model = require('../lib/Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('../lib/Models/UpdateOrganizationSamlRoleModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('../lib/Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const WhitelistedRuleModel = require('../lib/Models/WhitelistedRuleModel');
const UpdateOrganizationSnmpModel = require('../lib/Models/UpdateOrganizationSnmpModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('../lib/Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('../lib/Models/PeerModel');
const IpsecPoliciesModel = require('../lib/Models/IpsecPoliciesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('../lib/Models/UpdateOrganizationVpnFirewallRulesModel');
const Rule11Model = require('../lib/Models/Rule11Model');

const classMap = {
    UpdateDeviceSwitchPortModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    AlertModel,
    UpdateNetworkAppliancePortModel,
    BindNetworkModel,
    UpdateNetworkBluetoothSettingsModel,
    GenerateNetworkCameraSnapshotModel,
    UpdateNetworkCellularFirewallRulesModel,
    RuleModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    UpdateNetworkContentFilteringModel,
    ClaimNetworkDevicesModel,
    UpdateNetworkDeviceModel,
    BlinkNetworkDeviceLedsModel,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan1Model,
    Wan2Model,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    UpdateNetworkFirewalledServiceModel,
    CreateNetworkGroupPolicyModel,
    SchedulingModel,
    MondayModel,
    TuesdayModel,
    WednesdayModel,
    ThursdayModel,
    FridayModel,
    SaturdayModel,
    SundayModel,
    BandwidthModel,
    BandwidthLimitsModel,
    FirewallAndTrafficShapingModel,
    TrafficShapingRuleModel,
    DefinitionModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits1Model,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    ContentFilteringModel,
    AllowedUrlPatternsModel,
    BlockedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    VlanTaggingModel,
    BonjourForwardingModel,
    Rule1Model,
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestModel,
    UpdateNetworkHttpServerModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateNetworkL7FirewallRulesModel,
    Rule4Model,
    UpdateNetworkNetflowSettingsModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule5Model,
    UpdateNetworkOneToOneNatRulesModel,
    Rule6Model,
    CreateNetworkPiiRequestModel,
    UpdateNetworkPortForwardingRulesModel,
    Rule7Model,
    UpdateNetworkSecurityIntrusionSettingsModel,
    ProtectedNetworksModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    AllowedUrlModel,
    AllowedFileModel,
    UpdateNetworkSiteToSiteVpnModel,
    HubModel,
    SubnetModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSmAppPolarisModel,
    CreateNetworkSmBypassActivationLockAttemptModel,
    UpdateNetworkSmDeviceFieldsModel,
    DeviceFieldsModel,
    WipeNetworkSmDeviceModel,
    CheckinNetworkSmDevicesModel,
    MoveNetworkSmDevicesModel,
    UpdateNetworkSmDevicesTagsModel,
    CreateNetworkSmProfileClarityModel,
    VendorConfigModel,
    UpdateNetworkSmProfileClarityModel,
    AddNetworkSmProfileClarityModel,
    CreateNetworkSmProfileUmbrellaModel,
    ProviderConfigurationModel,
    UpdateNetworkSmProfileUmbrellaModel,
    AddNetworkSmProfileUmbrellaModel,
    CreateNetworkSmTargetGroupModel,
    UpdateNetworkSmTargetGroupModel,
    UpdateNetworkSnmpSettingsModel,
    UserModel,
    UpdateNetworkSsidModel,
    RadiusServerModel,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule8Model,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSsidTrafficShapingModel,
    Rule9Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkStaticRouteModel,
    CreateNetworkSwitchPortScheduleModel,
    PortScheduleModel,
    UpdateNetworkSwitchPortScheduleModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    CreateNetworkSwitchStackModel,
    AddNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    CustomPieChartItemModel,
    UpdateNetworkTrafficShapingModel,
    Rule10Model,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits6Model,
    CreateNetworkVlanModel,
    UpdateNetworkVlanModel,
    ReservedIpRangeModel,
    DhcpOptionModel,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkWarmSpareSettingsModel,
    CreateNetworkWirelessRfProfileModel,
    ApBandSettingsModel,
    TwoFourGhzSettingsModel,
    FiveGhzSettingsModel,
    UpdateNetworkWirelessRfProfileModel,
    ApBandSettings1Model,
    TwoFourGhzSettings1Model,
    FiveGhzSettings1Model,
    LockNetworkSmDevicesModel,
    CreateOrganizationModel,
    UpdateOrganizationModel,
    CreateOrganizationActionBatchModel,
    ActionModel,
    UpdateOrganizationActionBatchModel,
    CreateOrganizationAdminModel,
    TagModel,
    NetworkModel,
    UpdateOrganizationAdminModel,
    ClaimOrganizationModel,
    LicenseModel,
    CloneOrganizationModel,
    CreateOrganizationNetworkModel,
    CombineOrganizationNetworksModel,
    CreateOrganizationSamlRoleModel,
    Tag2Model,
    Network2Model,
    UpdateOrganizationSamlRoleModel,
    UpdateOrganizationSecurityIntrusionSettingsModel,
    WhitelistedRuleModel,
    UpdateOrganizationSnmpModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    IpsecPoliciesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    Rule11Model,
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
