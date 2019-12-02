/**
  * @module meraki
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date:
  * 02 December, 2019 > > [What's New](https://meraki.io/whats-new/)  ---  [API
  * Documentation](https://meraki.io/api)  [Community Support](https://meraki.io/community)
  * [Meraki Homepage](https://www.meraki.com)
  */

'use strict';

const Configuration = require('./configuration');
const APIUsageController = require('./Controllers/APIUsageController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const AdminsController = require('./Controllers/AdminsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const CamerasController = require('./Controllers/CamerasController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const ConnectivityMonitoringDestinationsController =
  require('./Controllers/ConnectivityMonitoringDestinationsController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const DashboardBrandingPoliciesController =
  require('./Controllers/DashboardBrandingPoliciesController');
const DevicesController = require('./Controllers/DevicesController');
const EventsController = require('./Controllers/EventsController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const FloorplansController = require('./Controllers/FloorplansController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const LicensesController = require('./Controllers/LicensesController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MVSenseController = require('./Controllers/MVSenseController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const MXVLANPortsController = require('./Controllers/MXVLANPortsController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const MXStaticRoutesController = require('./Controllers/MXStaticRoutesController');
const MXWarmSpareSettingsController = require('./Controllers/MXWarmSpareSettingsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const ManagementInterfaceSettingsController =
  require('./Controllers/ManagementInterfaceSettingsController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const NetflowSettingsController = require('./Controllers/NetflowSettingsController');
const NetworksController = require('./Controllers/NetworksController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PIIController = require('./Controllers/PIIController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const SMController = require('./Controllers/SMController');
const SNMPSettingsController = require('./Controllers/SNMPSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SwitchACLsController = require('./Controllers/SwitchACLsController');
const SwitchPortSchedulesController = require('./Controllers/SwitchPortSchedulesController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchProfilesController = require('./Controllers/SwitchProfilesController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TrafficAnalysisSettingsController =
  require('./Controllers/TrafficAnalysisSettingsController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VlansController = require('./Controllers/VlansController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const WirelessSettingsController = require('./Controllers/WirelessSettingsController');
const ObjectTypeEnum = require('./Models/ObjectTypeEnum');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const UdldEnum = require('./Models/UdldEnum');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkAppliancePortModel = require('./Models/UpdateNetworkAppliancePortModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const MajorMinorAssignmentModeEnum = require('./Models/MajorMinorAssignmentModeEnum');
const GenerateNetworkCameraSnapshotModel = require('./Models/GenerateNetworkCameraSnapshotModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const RuleModel = require('./Models/RuleModel');
const PolicyEnum = require('./Models/PolicyEnum');
const ProtocolEnum = require('./Models/ProtocolEnum');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('./Models/SsidsModel');
const UpdateNetworkConnectivityMonitoringDestinationsModel =
  require('./Models/UpdateNetworkConnectivityMonitoringDestinationsModel');
const DestinationModel = require('./Models/DestinationModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const BlinkNetworkDeviceLedsModel = require('./Models/BlinkNetworkDeviceLedsModel');
const UplinkEnum = require('./Models/UplinkEnum');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('./Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const Wan1Model = require('./Models/Wan1Model');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const Wan2Model = require('./Models/Wan2Model');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const AccessEnum = require('./Models/AccessEnum');
const CreateNetworkFloorPlanModel = require('./Models/CreateNetworkFloorPlanModel');
const CenterModel = require('./Models/CenterModel');
const BottomLeftCornerModel = require('./Models/BottomLeftCornerModel');
const BottomRightCornerModel = require('./Models/BottomRightCornerModel');
const TopLeftCornerModel = require('./Models/TopLeftCornerModel');
const TopRightCornerModel = require('./Models/TopRightCornerModel');
const UpdateNetworkFloorPlanModel = require('./Models/UpdateNetworkFloorPlanModel');
const Center1Model = require('./Models/Center1Model');
const CreateNetworkGroupPolicyModel = require('./Models/CreateNetworkGroupPolicyModel');
const SchedulingModel = require('./Models/SchedulingModel');
const MondayModel = require('./Models/MondayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const FridayModel = require('./Models/FridayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const SundayModel = require('./Models/SundayModel');
const BandwidthModel = require('./Models/BandwidthModel');
const SettingsEnum = require('./Models/SettingsEnum');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const Settings1Enum = require('./Models/Settings1Enum');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const DefinitionModel = require('./Models/DefinitionModel');
const TypeEnum = require('./Models/TypeEnum');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const L3FirewallRuleModel = require('./Models/L3FirewallRuleModel');
const L7FirewallRuleModel = require('./Models/L7FirewallRuleModel');
const Policy1Enum = require('./Models/Policy1Enum');
const Type1Enum = require('./Models/Type1Enum');
const ContentFilteringModel = require('./Models/ContentFilteringModel');
const AllowedUrlPatternsModel = require('./Models/AllowedUrlPatternsModel');
const Settings2Enum = require('./Models/Settings2Enum');
const BlockedUrlPatternsModel = require('./Models/BlockedUrlPatternsModel');
const BlockedUrlCategoriesModel = require('./Models/BlockedUrlCategoriesModel');
const Settings4Enum = require('./Models/Settings4Enum');
const SplashAuthSettingsEnum = require('./Models/SplashAuthSettingsEnum');
const VlanTaggingModel = require('./Models/VlanTaggingModel');
const Settings5Enum = require('./Models/Settings5Enum');
const BonjourForwardingModel = require('./Models/BonjourForwardingModel');
const Settings6Enum = require('./Models/Settings6Enum');
const Rule1Model = require('./Models/Rule1Model');
const ServiceEnum = require('./Models/ServiceEnum');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServerModel = require('./Models/CreateNetworkHttpServerModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('./Models/CreateNetworkHttpServersWebhookTestModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const Rule4Model = require('./Models/Rule4Model');
const Policy4Enum = require('./Models/Policy4Enum');
const Type4Enum = require('./Models/Type4Enum');
const UpdateNetworkNetflowSettingsModel = require('./Models/UpdateNetworkNetflowSettingsModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const Rule5Model = require('./Models/Rule5Model');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const Rule6Model = require('./Models/Rule6Model');
const CreateNetworkPiiRequestModel = require('./Models/CreateNetworkPiiRequestModel');
const Type5Enum = require('./Models/Type5Enum');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const Rule7Model = require('./Models/Rule7Model');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const AllowedUrlModel = require('./Models/AllowedUrlModel');
const AllowedFileModel = require('./Models/AllowedFileModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const ModeEnum = require('./Models/ModeEnum');
const HubModel = require('./Models/HubModel');
const SubnetModel = require('./Models/SubnetModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmAppPolarisModel = require('./Models/UpdateNetworkSmAppPolarisModel');
const CreateNetworkSmBypassActivationLockAttemptModel =
  require('./Models/CreateNetworkSmBypassActivationLockAttemptModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const DeviceFieldsModel = require('./Models/DeviceFieldsModel');
const WipeNetworkSmDeviceModel = require('./Models/WipeNetworkSmDeviceModel');
const CheckinNetworkSmDevicesModel = require('./Models/CheckinNetworkSmDevicesModel');
const MoveNetworkSmDevicesModel = require('./Models/MoveNetworkSmDevicesModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const VendorConfigModel = require('./Models/VendorConfigModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const ProviderConfigurationModel = require('./Models/ProviderConfigurationModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmTargetGroupModel = require('./Models/CreateNetworkSmTargetGroupModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSnmpSettingsModel = require('./Models/UpdateNetworkSnmpSettingsModel');
const Access1Enum = require('./Models/Access1Enum');
const UserModel = require('./Models/UserModel');
const SsidNumberEnum = require('./Models/SsidNumberEnum');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const AuthModeEnum = require('./Models/AuthModeEnum');
const EnterpriseAdminAccessEnum = require('./Models/EnterpriseAdminAccessEnum');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const SplashPageEnum = require('./Models/SplashPageEnum');
const RadiusServerModel = require('./Models/RadiusServerModel');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule8Model = require('./Models/Rule8Model');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const Rule9Model = require('./Models/Rule9Model');
const CreateNetworkStaticRouteModel = require('./Models/CreateNetworkStaticRouteModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const UpdateNetworkSwitchAccessControlListsModel =
  require('./Models/UpdateNetworkSwitchAccessControlListsModel');
const Rule10Model = require('./Models/Rule10Model');
const Policy6Enum = require('./Models/Policy6Enum');
const IpVersionEnum = require('./Models/IpVersionEnum');
const Protocol3Enum = require('./Models/Protocol3Enum');
const CreateNetworkSwitchPortScheduleModel =
  require('./Models/CreateNetworkSwitchPortScheduleModel');
const PortScheduleModel = require('./Models/PortScheduleModel');
const UpdateNetworkSwitchPortScheduleModel =
  require('./Models/UpdateNetworkSwitchPortScheduleModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const PowerTypeEnum = require('./Models/PowerTypeEnum');
const UpdateNetworkSwitchSettingsDhcpServerPolicyModel =
  require('./Models/UpdateNetworkSwitchSettingsDhcpServerPolicyModel');
const DefaultPolicyEnum = require('./Models/DefaultPolicyEnum');
const UpdateNetworkSwitchSettingsDscpToCosMappingsModel =
  require('./Models/UpdateNetworkSwitchSettingsDscpToCosMappingsModel');
const MappingModel = require('./Models/MappingModel');
const UpdateNetworkSwitchSettingsMtuModel = require('./Models/UpdateNetworkSwitchSettingsMtuModel');
const OverrideModel = require('./Models/OverrideModel');
const CreateNetworkSwitchSettingsQosRuleModel =
  require('./Models/CreateNetworkSwitchSettingsQosRuleModel');
const Protocol4Enum = require('./Models/Protocol4Enum');
const UpdateNetworkSwitchSettingsQosRulesOrderModel =
  require('./Models/UpdateNetworkSwitchSettingsQosRulesOrderModel');
const UpdateNetworkSwitchSettingsQosRuleModel =
  require('./Models/UpdateNetworkSwitchSettingsQosRuleModel');
const Protocol5Enum = require('./Models/Protocol5Enum');
const UpdateNetworkSwitchSettingsStormControlModel =
  require('./Models/UpdateNetworkSwitchSettingsStormControlModel');
const UpdateNetworkSwitchSettingsStpModel = require('./Models/UpdateNetworkSwitchSettingsStpModel');
const StpBridgePriorityModel = require('./Models/StpBridgePriorityModel');
const CreateNetworkSwitchStackModel = require('./Models/CreateNetworkSwitchStackModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkTrafficAnalysisSettingsModel =
  require('./Models/UpdateNetworkTrafficAnalysisSettingsModel');
const Mode1Enum = require('./Models/Mode1Enum');
const CustomPieChartItemModel = require('./Models/CustomPieChartItemModel');
const Type7Enum = require('./Models/Type7Enum');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const Rule11Model = require('./Models/Rule11Model');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits6Model = require('./Models/BandwidthLimits6Model');
const Wan11Model = require('./Models/Wan11Model');
const Wan21Model = require('./Models/Wan21Model');
const CellularModel = require('./Models/CellularModel');
const CreateNetworkVlanModel = require('./Models/CreateNetworkVlanModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const DhcpHandlingEnum = require('./Models/DhcpHandlingEnum');
const DhcpLeaseTimeEnum = require('./Models/DhcpLeaseTimeEnum');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const Type9Enum = require('./Models/Type9Enum');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkWarmSpareSettingsModel = require('./Models/UpdateNetworkWarmSpareSettingsModel');
const CreateNetworkWirelessRfProfileModel = require('./Models/CreateNetworkWirelessRfProfileModel');
const MinBitrateTypeEnum = require('./Models/MinBitrateTypeEnum');
const BandSelectionTypeEnum = require('./Models/BandSelectionTypeEnum');
const ApBandSettingsModel = require('./Models/ApBandSettingsModel');
const BandOperationModeEnum = require('./Models/BandOperationModeEnum');
const TwoFourGhzSettingsModel = require('./Models/TwoFourGhzSettingsModel');
const FiveGhzSettingsModel = require('./Models/FiveGhzSettingsModel');
const UpdateNetworkWirelessRfProfileModel = require('./Models/UpdateNetworkWirelessRfProfileModel');
const MinBitrateType1Enum = require('./Models/MinBitrateType1Enum');
const BandSelectionType1Enum = require('./Models/BandSelectionType1Enum');
const ApBandSettings1Model = require('./Models/ApBandSettings1Model');
const BandOperationMode1Enum = require('./Models/BandOperationMode1Enum');
const TwoFourGhzSettings1Model = require('./Models/TwoFourGhzSettings1Model');
const FiveGhzSettings1Model = require('./Models/FiveGhzSettings1Model');
const UpdateNetworkWirelessSettingsModel = require('./Models/UpdateNetworkWirelessSettingsModel');
const LockNetworkSmDevicesModel = require('./Models/LockNetworkSmDevicesModel');
const CreateOrganizationModel = require('./Models/CreateOrganizationModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationActionBatchModel = require('./Models/CreateOrganizationActionBatchModel');
const ActionModel = require('./Models/ActionModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const CreateOrganizationAdminModel = require('./Models/CreateOrganizationAdminModel');
const OrgAccessEnum = require('./Models/OrgAccessEnum');
const TagModel = require('./Models/TagModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const CreateOrganizationBrandingPolicyModel =
  require('./Models/CreateOrganizationBrandingPolicyModel');
const AdminSettingsModel = require('./Models/AdminSettingsModel');
const AppliesToEnum = require('./Models/AppliesToEnum');
const HelpSettingsModel = require('./Models/HelpSettingsModel');
const HelpTabEnum = require('./Models/HelpTabEnum');
const GetHelpSubtabEnum = require('./Models/GetHelpSubtabEnum');
const CommunitySubtabEnum = require('./Models/CommunitySubtabEnum');
const CasesSubtabEnum = require('./Models/CasesSubtabEnum');
const DataProtectionRequestsSubtabEnum = require('./Models/DataProtectionRequestsSubtabEnum');
const UniversalSearchKnowledgeBaseSearchEnum =
  require('./Models/UniversalSearchKnowledgeBaseSearchEnum');
const NewFeaturesSubtabEnum = require('./Models/NewFeaturesSubtabEnum');
const FirewallInfoSubtabEnum = require('./Models/FirewallInfoSubtabEnum');
const ApiDocsSubtabEnum = require('./Models/ApiDocsSubtabEnum');
const HardwareReplacementsSubtabEnum = require('./Models/HardwareReplacementsSubtabEnum');
const SmForumsEnum = require('./Models/SmForumsEnum');
const UpdateOrganizationBrandingPoliciesPrioritiesModel =
  require('./Models/UpdateOrganizationBrandingPoliciesPrioritiesModel');
const UpdateOrganizationBrandingPolicyModel =
  require('./Models/UpdateOrganizationBrandingPolicyModel');
const HelpSettings1Model = require('./Models/HelpSettings1Model');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const LicenseModel = require('./Models/LicenseModel');
const Mode2Enum = require('./Models/Mode2Enum');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const StateEnum = require('./Models/StateEnum');
const AssignOrganizationLicensesSeatsModel =
  require('./Models/AssignOrganizationLicensesSeatsModel');
const MoveOrganizationLicensesModel = require('./Models/MoveOrganizationLicensesModel');
const MoveOrganizationLicensesSeatsModel = require('./Models/MoveOrganizationLicensesSeatsModel');
const RenewOrganizationLicensesSeatsModel = require('./Models/RenewOrganizationLicensesSeatsModel');
const UpdateOrganizationLicenseModel = require('./Models/UpdateOrganizationLicenseModel');
const CreateOrganizationNetworkModel = require('./Models/CreateOrganizationNetworkModel');
const CombineOrganizationNetworksModel = require('./Models/CombineOrganizationNetworksModel');
const CreateOrganizationSamlRoleModel = require('./Models/CreateOrganizationSamlRoleModel');
const Tag2Model = require('./Models/Tag2Model');
const Network2Model = require('./Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('./Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const WhitelistedRuleModel = require('./Models/WhitelistedRuleModel');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const V3AuthModeEnum = require('./Models/V3AuthModeEnum');
const V3PrivModeEnum = require('./Models/V3PrivModeEnum');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('./Models/PeerModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const Rule12Model = require('./Models/Rule12Model');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    APIUsageController,
    ActionBatchesController,
    AdminsController,
    AlertSettingsController,
    BluetoothClientsController,
    CamerasController,
    ClientsController,
    ConfigTemplatesController,
    ConnectivityMonitoringDestinationsController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    DashboardBrandingPoliciesController,
    DevicesController,
    EventsController,
    FirewalledServicesController,
    FloorplansController,
    GroupPoliciesController,
    HTTPServersController,
    IntrusionSettingsController,
    LicensesController,
    MRL3FirewallController,
    MVSenseController,
    MX11NATRulesController,
    MX1ManyNATRulesController,
    MXL3FirewallController,
    MXL7ApplicationCategoriesController,
    MXL7FirewallController,
    MXVLANPortsController,
    MXVPNFirewallController,
    MXCellularFirewallController,
    MXPortForwardingRulesController,
    MXStaticRoutesController,
    MXWarmSpareSettingsController,
    MalwareSettingsController,
    ManagementInterfaceSettingsController,
    MerakiAuthUsersController,
    NamedTagScopeController,
    NetflowSettingsController,
    NetworksController,
    OpenAPISpecController,
    OrganizationsController,
    PIIController,
    RadioSettingsController,
    SAMLRolesController,
    SMController,
    SNMPSettingsController,
    SsidsController,
    SecurityEventsController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    SwitchACLsController,
    SwitchPortSchedulesController,
    SwitchPortsController,
    SwitchProfilesController,
    SwitchSettingsController,
    SwitchStacksController,
    SyslogServersController,
    TrafficAnalysisSettingsController,
    TrafficShapingController,
    UplinkSettingsController,
    VlansController,
    WebhookLogsController,
    WirelessHealthController,
    WirelessSettingsController,
    // models of meraki
    ObjectTypeEnum,
    UpdateDeviceSwitchPortModel,
    UdldEnum,
    UpdateNetworkModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    AlertModel,
    UpdateNetworkAppliancePortModel,
    BindNetworkModel,
    UpdateNetworkBluetoothSettingsModel,
    MajorMinorAssignmentModeEnum,
    GenerateNetworkCameraSnapshotModel,
    UpdateNetworkCellularFirewallRulesModel,
    RuleModel,
    PolicyEnum,
    ProtocolEnum,
    ProvisionNetworkClientsModel,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    UpdateNetworkConnectivityMonitoringDestinationsModel,
    DestinationModel,
    UpdateNetworkContentFilteringModel,
    ClaimNetworkDevicesModel,
    UpdateNetworkDeviceModel,
    BlinkNetworkDeviceLedsModel,
    UplinkEnum,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    Wan1Model,
    WanEnabledEnum,
    Wan2Model,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    UpdateNetworkFirewalledServiceModel,
    AccessEnum,
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
    SettingsEnum,
    BandwidthLimitsModel,
    FirewallAndTrafficShapingModel,
    Settings1Enum,
    TrafficShapingRuleModel,
    DefinitionModel,
    TypeEnum,
    PerClientBandwidthLimitsModel,
    BandwidthLimits1Model,
    L3FirewallRuleModel,
    L7FirewallRuleModel,
    Policy1Enum,
    Type1Enum,
    ContentFilteringModel,
    AllowedUrlPatternsModel,
    Settings2Enum,
    BlockedUrlPatternsModel,
    BlockedUrlCategoriesModel,
    Settings4Enum,
    SplashAuthSettingsEnum,
    VlanTaggingModel,
    Settings5Enum,
    BonjourForwardingModel,
    Settings6Enum,
    Rule1Model,
    ServiceEnum,
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestModel,
    UpdateNetworkHttpServerModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateNetworkL7FirewallRulesModel,
    Rule4Model,
    Policy4Enum,
    Type4Enum,
    UpdateNetworkNetflowSettingsModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule5Model,
    UpdateNetworkOneToOneNatRulesModel,
    Rule6Model,
    CreateNetworkPiiRequestModel,
    Type5Enum,
    UpdateNetworkPortForwardingRulesModel,
    Rule7Model,
    UpdateNetworkSecurityIntrusionSettingsModel,
    ProtectedNetworksModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    AllowedUrlModel,
    AllowedFileModel,
    UpdateNetworkSiteToSiteVpnModel,
    ModeEnum,
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
    Access1Enum,
    UserModel,
    SsidNumberEnum,
    UpdateNetworkSsidModel,
    AuthModeEnum,
    EnterpriseAdminAccessEnum,
    EncryptionModeEnum,
    WpaEncryptionModeEnum,
    SplashPageEnum,
    RadiusServerModel,
    RadiusFailoverPolicyEnum,
    RadiusLoadBalancingPolicyEnum,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule8Model,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSsidTrafficShapingModel,
    Rule9Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkStaticRouteModel,
    UpdateNetworkSwitchAccessControlListsModel,
    Rule10Model,
    Policy6Enum,
    IpVersionEnum,
    Protocol3Enum,
    CreateNetworkSwitchPortScheduleModel,
    PortScheduleModel,
    UpdateNetworkSwitchPortScheduleModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    PowerTypeEnum,
    UpdateNetworkSwitchSettingsDhcpServerPolicyModel,
    DefaultPolicyEnum,
    UpdateNetworkSwitchSettingsDscpToCosMappingsModel,
    MappingModel,
    UpdateNetworkSwitchSettingsMtuModel,
    OverrideModel,
    CreateNetworkSwitchSettingsQosRuleModel,
    Protocol4Enum,
    UpdateNetworkSwitchSettingsQosRulesOrderModel,
    UpdateNetworkSwitchSettingsQosRuleModel,
    Protocol5Enum,
    UpdateNetworkSwitchSettingsStormControlModel,
    UpdateNetworkSwitchSettingsStpModel,
    StpBridgePriorityModel,
    CreateNetworkSwitchStackModel,
    AddNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkTrafficAnalysisSettingsModel,
    Mode1Enum,
    CustomPieChartItemModel,
    Type7Enum,
    UpdateNetworkTrafficShapingModel,
    Rule11Model,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits6Model,
    Wan11Model,
    Wan21Model,
    CellularModel,
    CreateNetworkVlanModel,
    UpdateNetworkVlanModel,
    DhcpHandlingEnum,
    DhcpLeaseTimeEnum,
    ReservedIpRangeModel,
    DhcpOptionModel,
    Type9Enum,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkWarmSpareSettingsModel,
    CreateNetworkWirelessRfProfileModel,
    MinBitrateTypeEnum,
    BandSelectionTypeEnum,
    ApBandSettingsModel,
    BandOperationModeEnum,
    TwoFourGhzSettingsModel,
    FiveGhzSettingsModel,
    UpdateNetworkWirelessRfProfileModel,
    MinBitrateType1Enum,
    BandSelectionType1Enum,
    ApBandSettings1Model,
    BandOperationMode1Enum,
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
    OrgAccessEnum,
    TagModel,
    NetworkModel,
    UpdateOrganizationAdminModel,
    CreateOrganizationBrandingPolicyModel,
    AdminSettingsModel,
    AppliesToEnum,
    HelpSettingsModel,
    HelpTabEnum,
    GetHelpSubtabEnum,
    CommunitySubtabEnum,
    CasesSubtabEnum,
    DataProtectionRequestsSubtabEnum,
    UniversalSearchKnowledgeBaseSearchEnum,
    NewFeaturesSubtabEnum,
    FirewallInfoSubtabEnum,
    ApiDocsSubtabEnum,
    HardwareReplacementsSubtabEnum,
    SmForumsEnum,
    UpdateOrganizationBrandingPoliciesPrioritiesModel,
    UpdateOrganizationBrandingPolicyModel,
    HelpSettings1Model,
    ClaimOrganizationModel,
    LicenseModel,
    Mode2Enum,
    CloneOrganizationModel,
    StateEnum,
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
    V3AuthModeEnum,
    V3PrivModeEnum,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    IpsecPoliciesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    Rule12Model,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
