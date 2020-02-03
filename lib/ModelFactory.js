/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const UpdateDeviceCameraQualityAndRetentionSettingsModel =
  require('../lib/Models/UpdateDeviceCameraQualityAndRetentionSettingsModel');
const UpdateDeviceCellularGatewaySettingsModel =
  require('../lib/Models/UpdateDeviceCellularGatewaySettingsModel');
const ReservedIpRangeModel = require('../lib/Models/ReservedIpRangeModel');
const FixedIpAssignmentModel = require('../lib/Models/FixedIpAssignmentModel');
const UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel =
  require('../lib/Models/UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel');
const RuleModel = require('../lib/Models/RuleModel');
const UpdateDeviceSwitchPortModel = require('../lib/Models/UpdateDeviceSwitchPortModel');
const UpdateNetworkModel = require('../lib/Models/UpdateNetworkModel');
const UpdateNetworkAlertSettingsModel = require('../lib/Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('../lib/Models/DefaultDestinationsModel');
const AlertModel = require('../lib/Models/AlertModel');
const UpdateNetworkApplianceFirewallInboundFirewallRulesModel =
  require('../lib/Models/UpdateNetworkApplianceFirewallInboundFirewallRulesModel');
const Rule1Model = require('../lib/Models/Rule1Model');
const UpdateNetworkAppliancePortModel = require('../lib/Models/UpdateNetworkAppliancePortModel');
const BindNetworkModel = require('../lib/Models/BindNetworkModel');
const UpdateNetworkBluetoothSettingsModel =
  require('../lib/Models/UpdateNetworkBluetoothSettingsModel');
const CreateNetworkCameraQualityRetentionProfileModel =
  require('../lib/Models/CreateNetworkCameraQualityRetentionProfileModel');
const VideoSettingsModel = require('../lib/Models/VideoSettingsModel');
const MV21MV71Model = require('../lib/Models/MV21MV71Model');
const MV12MV22MV72Model = require('../lib/Models/MV12MV22MV72Model');
const MV32Model = require('../lib/Models/MV32Model');
const MV12WEModel = require('../lib/Models/MV12WEModel');
const UpdateNetworkCameraQualityRetentionProfileModel =
  require('../lib/Models/UpdateNetworkCameraQualityRetentionProfileModel');
const GenerateNetworkCameraSnapshotModel =
  require('../lib/Models/GenerateNetworkCameraSnapshotModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('../lib/Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel =
  require('../lib/Models/UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel');
const DestinationModel = require('../lib/Models/DestinationModel');
const UpdateNetworkCellularGatewaySettingsDhcpModel =
  require('../lib/Models/UpdateNetworkCellularGatewaySettingsDhcpModel');
const UpdateNetworkCellularGatewaySettingsSubnetPoolModel =
  require('../lib/Models/UpdateNetworkCellularGatewaySettingsSubnetPoolModel');
const UpdateNetworkCellularGatewaySettingsUplinkModel =
  require('../lib/Models/UpdateNetworkCellularGatewaySettingsUplinkModel');
const BandwidthLimitsModel = require('../lib/Models/BandwidthLimitsModel');
const ProvisionNetworkClientsModel = require('../lib/Models/ProvisionNetworkClientsModel');
const UpdateNetworkClientPolicyModel = require('../lib/Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('../lib/Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('../lib/Models/SsidsModel');
const UpdateNetworkConnectivityMonitoringDestinationsModel =
  require('../lib/Models/UpdateNetworkConnectivityMonitoringDestinationsModel');
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
const CreateNetworkFloorPlanModel = require('../lib/Models/CreateNetworkFloorPlanModel');
const CenterModel = require('../lib/Models/CenterModel');
const BottomLeftCornerModel = require('../lib/Models/BottomLeftCornerModel');
const BottomRightCornerModel = require('../lib/Models/BottomRightCornerModel');
const TopLeftCornerModel = require('../lib/Models/TopLeftCornerModel');
const TopRightCornerModel = require('../lib/Models/TopRightCornerModel');
const UpdateNetworkFloorPlanModel = require('../lib/Models/UpdateNetworkFloorPlanModel');
const Center1Model = require('../lib/Models/Center1Model');
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
const BandwidthLimits1Model = require('../lib/Models/BandwidthLimits1Model');
const FirewallAndTrafficShapingModel = require('../lib/Models/FirewallAndTrafficShapingModel');
const TrafficShapingRuleModel = require('../lib/Models/TrafficShapingRuleModel');
const DefinitionModel = require('../lib/Models/DefinitionModel');
const PerClientBandwidthLimitsModel = require('../lib/Models/PerClientBandwidthLimitsModel');
const BandwidthLimits2Model = require('../lib/Models/BandwidthLimits2Model');
const L3FirewallRuleModel = require('../lib/Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('../lib/Models/L7FirewallRuleModel');
const ContentFilteringModel = require('../lib/Models/ContentFilteringModel');
const AllowedUrlPatternsModel = require('../lib/Models/AllowedUrlPatternsModel');
const BlockedUrlPatternsModel = require('../lib/Models/BlockedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('../lib/Models/BlockedUrlCategoriesModel');
const VlanTaggingModel = require('../lib/Models/VlanTaggingModel');
const BonjourForwardingModel = require('../lib/Models/BonjourForwardingModel');
const Rule3Model = require('../lib/Models/Rule3Model');
const UpdateNetworkGroupPolicyModel = require('../lib/Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServerModel = require('../lib/Models/CreateNetworkHttpServerModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('../lib/Models/CreateNetworkHttpServersWebhookTestModel');
const UpdateNetworkHttpServerModel = require('../lib/Models/UpdateNetworkHttpServerModel');
const UpdateNetworkL3FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL3FirewallRulesModel');
const UpdateNetworkL7FirewallRulesModel =
  require('../lib/Models/UpdateNetworkL7FirewallRulesModel');
const Rule6Model = require('../lib/Models/Rule6Model');
const UpdateNetworkNetflowSettingsModel =
  require('../lib/Models/UpdateNetworkNetflowSettingsModel');
const UpdateNetworkOneToManyNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToManyNatRulesModel');
const Rule7Model = require('../lib/Models/Rule7Model');
const PortRuleModel = require('../lib/Models/PortRuleModel');
const UpdateNetworkOneToOneNatRulesModel =
  require('../lib/Models/UpdateNetworkOneToOneNatRulesModel');
const Rule8Model = require('../lib/Models/Rule8Model');
const CreateNetworkPiiRequestModel = require('../lib/Models/CreateNetworkPiiRequestModel');
const UpdateNetworkPortForwardingRulesModel =
  require('../lib/Models/UpdateNetworkPortForwardingRulesModel');
const Rule9Model = require('../lib/Models/Rule9Model');
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
const Rule10Model = require('../lib/Models/Rule10Model');
const UpdateNetworkSsidsPlashSettingsModel =
  require('../lib/Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('../lib/Models/UpdateNetworkSsidTrafficShapingModel');
const Rule11Model = require('../lib/Models/Rule11Model');
const CreateNetworkStaticRouteModel = require('../lib/Models/CreateNetworkStaticRouteModel');
const UpdateNetworkStaticRouteModel = require('../lib/Models/UpdateNetworkStaticRouteModel');
const UpdateNetworkSwitchAccessControlListsModel =
  require('../lib/Models/UpdateNetworkSwitchAccessControlListsModel');
const Rule12Model = require('../lib/Models/Rule12Model');
const CreateNetworkSwitchLinkAggregationModel =
  require('../lib/Models/CreateNetworkSwitchLinkAggregationModel');
const SwitchPortModel = require('../lib/Models/SwitchPortModel');
const SwitchProfilePortModel = require('../lib/Models/SwitchProfilePortModel');
const UpdateNetworkSwitchLinkAggregationModel =
  require('../lib/Models/UpdateNetworkSwitchLinkAggregationModel');
const CreateNetworkSwitchPortScheduleModel =
  require('../lib/Models/CreateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('../lib/Models/PortScheduleModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('../lib/Models/UpdateNetworkSwitchPortScheduleModel');
const UpdateNetworkSwitchSettingsModel = require('../lib/Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('../lib/Models/PowerExceptionModel');
const UpdateNetworkSwitchSettingsDhcpServerPolicyModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsDhcpServerPolicyModel');
const UpdateNetworkSwitchSettingsDscpToCosMappingsModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsDscpToCosMappingsModel');
const MappingModel = require('../lib/Models/MappingModel');
const UpdateNetworkSwitchSettingsMtuModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsMtuModel');
const OverrideModel = require('../lib/Models/OverrideModel');
const UpdateNetworkSwitchSettingsMulticastModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsMulticastModel');
const DefaultSettingsModel = require('../lib/Models/DefaultSettingsModel');
const Override1Model = require('../lib/Models/Override1Model');
const CreateNetworkSwitchSettingsQosRuleModel =
  require('../lib/Models/CreateNetworkSwitchSettingsQosRuleModel');
const UpdateNetworkSwitchSettingsQosRulesOrderModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsQosRulesOrderModel');
const UpdateNetworkSwitchSettingsQosRuleModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsQosRuleModel');
const UpdateNetworkSwitchSettingsStormControlModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsStormControlModel');
const UpdateNetworkSwitchSettingsStpModel =
  require('../lib/Models/UpdateNetworkSwitchSettingsStpModel');
const StpBridgePriorityModel = require('../lib/Models/StpBridgePriorityModel');
const CreateNetworkSwitchStackModel = require('../lib/Models/CreateNetworkSwitchStackModel');
const AddNetworkSwitchStackModel = require('../lib/Models/AddNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('../lib/Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('../lib/Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('../lib/Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('../lib/Models/UpdateNetworkTrafficAnalysisSettingsModel');
const CustomPieChartItemModel = require('../lib/Models/CustomPieChartItemModel');
const UpdateNetworkTrafficShapingModel = require('../lib/Models/UpdateNetworkTrafficShapingModel');
const Rule13Model = require('../lib/Models/Rule13Model');
const UpdateNetworkUplinkSettingsModel = require('../lib/Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits7Model = require('../lib/Models/BandwidthLimits7Model');
const Wan11Model = require('../lib/Models/Wan11Model');
const Wan21Model = require('../lib/Models/Wan21Model');
const CellularModel = require('../lib/Models/CellularModel');
const CreateNetworkVlanModel = require('../lib/Models/CreateNetworkVlanModel');
const UpdateNetworkVlanModel = require('../lib/Models/UpdateNetworkVlanModel');
const ReservedIpRange1Model = require('../lib/Models/ReservedIpRange1Model');
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
const UpdateNetworkWirelessSettingsModel =
  require('../lib/Models/UpdateNetworkWirelessSettingsModel');
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
const CreateOrganizationBrandingPolicyModel =
  require('../lib/Models/CreateOrganizationBrandingPolicyModel');
const AdminSettingsModel = require('../lib/Models/AdminSettingsModel');
const HelpSettingsModel = require('../lib/Models/HelpSettingsModel');
const UpdateOrganizationBrandingPoliciesPrioritiesModel =
  require('../lib/Models/UpdateOrganizationBrandingPoliciesPrioritiesModel');
const UpdateOrganizationBrandingPolicyModel =
  require('../lib/Models/UpdateOrganizationBrandingPolicyModel');
const HelpSettings1Model = require('../lib/Models/HelpSettings1Model');
const ClaimOrganizationModel = require('../lib/Models/ClaimOrganizationModel');
const LicenseModel = require('../lib/Models/LicenseModel');
const CloneOrganizationModel = require('../lib/Models/CloneOrganizationModel');
const CreateOrganizationInsightMonitoredMediaServerModel =
  require('../lib/Models/CreateOrganizationInsightMonitoredMediaServerModel');
const UpdateOrganizationInsightMonitoredMediaServerModel =
  require('../lib/Models/UpdateOrganizationInsightMonitoredMediaServerModel');
const AssignOrganizationLicensesSeatsModel =
  require('../lib/Models/AssignOrganizationLicensesSeatsModel');
const MoveOrganizationLicensesModel = require('../lib/Models/MoveOrganizationLicensesModel');
const MoveOrganizationLicensesSeatsModel =
  require('../lib/Models/MoveOrganizationLicensesSeatsModel');
const RenewOrganizationLicensesSeatsModel =
  require('../lib/Models/RenewOrganizationLicensesSeatsModel');
const UpdateOrganizationLicenseModel = require('../lib/Models/UpdateOrganizationLicenseModel');
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
const Rule14Model = require('../lib/Models/Rule14Model');

const classMap = {
    UpdateDeviceCameraQualityAndRetentionSettingsModel,
    UpdateDeviceCellularGatewaySettingsModel,
    ReservedIpRangeModel,
    FixedIpAssignmentModel,
    UpdateDeviceCellularGatewaySettingsPortForwardingRulesModel,
    RuleModel,
    UpdateDeviceSwitchPortModel,
    UpdateNetworkModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    AlertModel,
    UpdateNetworkApplianceFirewallInboundFirewallRulesModel,
    Rule1Model,
    UpdateNetworkAppliancePortModel,
    BindNetworkModel,
    UpdateNetworkBluetoothSettingsModel,
    CreateNetworkCameraQualityRetentionProfileModel,
    VideoSettingsModel,
    MV21MV71Model,
    MV12MV22MV72Model,
    MV32Model,
    MV12WEModel,
    UpdateNetworkCameraQualityRetentionProfileModel,
    GenerateNetworkCameraSnapshotModel,
    UpdateNetworkCellularFirewallRulesModel,
    UpdateNetworkCellularGatewaySettingsConnectivityMonitoringDestinationsModel,
    DestinationModel,
    UpdateNetworkCellularGatewaySettingsDhcpModel,
    UpdateNetworkCellularGatewaySettingsSubnetPoolModel,
    UpdateNetworkCellularGatewaySettingsUplinkModel,
    BandwidthLimitsModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    UpdateNetworkConnectivityMonitoringDestinationsModel,
    UpdateNetworkContentFilteringModel,
    ClaimNetworkDevicesModel,
    UpdateNetworkDeviceModel,
    BlinkNetworkDeviceLedsModel,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan1Model,
    Wan2Model,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    UpdateNetworkFirewalledServiceModel,
    CreateNetworkFloorPlanModel,
    CenterModel,
    BottomLeftCornerModel,
    BottomRightCornerModel,
    TopLeftCornerModel,
    TopRightCornerModel,
    UpdateNetworkFloorPlanModel,
    Center1Model,
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
    BandwidthLimits1Model,
    FirewallAndTrafficShapingModel,
    TrafficShapingRuleModel,
    DefinitionModel,
    PerClientBandwidthLimitsModel,
    BandwidthLimits2Model,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    ContentFilteringModel,
    AllowedUrlPatternsModel,
    BlockedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    VlanTaggingModel,
    BonjourForwardingModel,
    Rule3Model,
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestModel,
    UpdateNetworkHttpServerModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateNetworkL7FirewallRulesModel,
    Rule6Model,
    UpdateNetworkNetflowSettingsModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule7Model,
    PortRuleModel,
    UpdateNetworkOneToOneNatRulesModel,
    Rule8Model,
    CreateNetworkPiiRequestModel,
    UpdateNetworkPortForwardingRulesModel,
    Rule9Model,
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
    CreateNetworkSmTargetGroupModel,
    UpdateNetworkSmTargetGroupModel,
    UpdateNetworkSnmpSettingsModel,
    UserModel,
    UpdateNetworkSsidModel,
    RadiusServerModel,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule10Model,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSsidTrafficShapingModel,
    Rule11Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkStaticRouteModel,
    UpdateNetworkSwitchAccessControlListsModel,
    Rule12Model,
    CreateNetworkSwitchLinkAggregationModel,
    SwitchPortModel,
    SwitchProfilePortModel,
    UpdateNetworkSwitchLinkAggregationModel,
    CreateNetworkSwitchPortScheduleModel,
    PortScheduleModel,
    UpdateNetworkSwitchPortScheduleModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    UpdateNetworkSwitchSettingsDhcpServerPolicyModel,
    UpdateNetworkSwitchSettingsDscpToCosMappingsModel,
    MappingModel,
    UpdateNetworkSwitchSettingsMtuModel,
    OverrideModel,
    UpdateNetworkSwitchSettingsMulticastModel,
    DefaultSettingsModel,
    Override1Model,
    CreateNetworkSwitchSettingsQosRuleModel,
    UpdateNetworkSwitchSettingsQosRulesOrderModel,
    UpdateNetworkSwitchSettingsQosRuleModel,
    UpdateNetworkSwitchSettingsStormControlModel,
    UpdateNetworkSwitchSettingsStpModel,
    StpBridgePriorityModel,
    CreateNetworkSwitchStackModel,
    AddNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    CustomPieChartItemModel,
    UpdateNetworkTrafficShapingModel,
    Rule13Model,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits7Model,
    Wan11Model,
    Wan21Model,
    CellularModel,
    CreateNetworkVlanModel,
    UpdateNetworkVlanModel,
    ReservedIpRange1Model,
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
    UpdateNetworkWirelessSettingsModel,
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
    CreateOrganizationBrandingPolicyModel,
    AdminSettingsModel,
    HelpSettingsModel,
    UpdateOrganizationBrandingPoliciesPrioritiesModel,
    UpdateOrganizationBrandingPolicyModel,
    HelpSettings1Model,
    ClaimOrganizationModel,
    LicenseModel,
    CloneOrganizationModel,
    CreateOrganizationInsightMonitoredMediaServerModel,
    UpdateOrganizationInsightMonitoredMediaServerModel,
    AssignOrganizationLicensesSeatsModel,
    MoveOrganizationLicensesModel,
    MoveOrganizationLicensesSeatsModel,
    RenewOrganizationLicensesSeatsModel,
    UpdateOrganizationLicenseModel,
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
    Rule14Model,
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
