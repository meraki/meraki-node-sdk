/**
  * @module meraki
  *
  * This collection of API calls provides an easy way to interact with a Cisco Meraki network
  */

'use strict';

const Configuration = require('./configuration');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const NetworksController = require('./Controllers/NetworksController');
const AnalyticsController = require('./Controllers/AnalyticsController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const AdminsController = require('./Controllers/AdminsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const VlansController = require('./Controllers/VlansController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const IDSAlertsController = require('./Controllers/IDSAlertsController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SMController = require('./Controllers/SMController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TagsController = require('./Controllers/TagsController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const GeofencesController = require('./Controllers/GeofencesController');
const GeofenceRegionsController = require('./Controllers/GeofenceRegionsController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const OrganizationAlertSettingsController =
  require('./Controllers/OrganizationAlertSettingsController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const PIIController = require('./Controllers/PIIController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const ClientSecurityEventsController = require('./Controllers/ClientSecurityEventsController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const DevicesController = require('./Controllers/DevicesController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const ClientsController = require('./Controllers/ClientsController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const CamerasController = require('./Controllers/CamerasController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const APIUsageController = require('./Controllers/APIUsageController');
const TagModel = require('./Models/TagModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const ActionModel = require('./Models/ActionModel');
const CreateOrganizationAdminsModel = require('./Models/CreateOrganizationAdminsModel');
const CreateOrganizationActionBatchesModel =
  require('./Models/CreateOrganizationActionBatchesModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationsModel = require('./Models/CreateOrganizationsModel');
const CreateNetworkHttpServersWebhookTestsModel =
  require('./Models/CreateNetworkHttpServersWebhookTestsModel');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const SsidsModel = require('./Models/SsidsModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const Rule9Model = require('./Models/Rule9Model');
const Rule8Model = require('./Models/Rule8Model');
const Rule6Model = require('./Models/Rule6Model');
const Rule5Model = require('./Models/Rule5Model');
const UpdateNetworkSmDevicesMoveModel = require('./Models/UpdateNetworkSmDevicesMoveModel');
const UpdateNetworkSmDevicesLockModel = require('./Models/UpdateNetworkSmDevicesLockModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const CreateNetworkVlansModel = require('./Models/CreateNetworkVlansModel');
const BandwidthLimits6Model = require('./Models/BandwidthLimits6Model');
const SnapshotNetworkCameraModel = require('./Models/SnapshotNetworkCameraModel');
const SubnetModel = require('./Models/SubnetModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const CreateNetworkStaticRoutesModel = require('./Models/CreateNetworkStaticRoutesModel');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const CreateNetworkSwitchStacksModel = require('./Models/CreateNetworkSwitchStacksModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const RadiusServerModel = require('./Models/RadiusServerModel');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSmDevicesCheckinModel = require('./Models/UpdateNetworkSmDevicesCheckinModel');
const UpdateNetworkSmDeviceWipeModel = require('./Models/UpdateNetworkSmDeviceWipeModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const UpdateNetworkSmAppPolariModel = require('./Models/UpdateNetworkSmAppPolariModel');
const CreateNetworkSmTagModel = require('./Models/CreateNetworkSmTagModel');
const UpdateNetworkSmTagModel = require('./Models/UpdateNetworkSmTagModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const CreateNetworkSmTargetGroupsModel = require('./Models/CreateNetworkSmTargetGroupsModel');
const UpdateNetworkSmGeofenceModel = require('./Models/UpdateNetworkSmGeofenceModel');
const CreateNetworkSmGeofencesModel = require('./Models/CreateNetworkSmGeofencesModel');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const Network2Model = require('./Models/Network2Model');
const Tag2Model = require('./Models/Tag2Model');
const CreateOrganizationSamlRolesModel = require('./Models/CreateOrganizationSamlRolesModel');
const DefaultDestinations1Model = require('./Models/DefaultDestinations1Model');
const UpdateOrganizationAlertSettingsModel =
  require('./Models/UpdateOrganizationAlertSettingsModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const CreateNetworkHttpServersModel = require('./Models/CreateNetworkHttpServersModel');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const DefinitionModel = require('./Models/DefinitionModel');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const BandwidthModel = require('./Models/BandwidthModel');
const SundayModel = require('./Models/SundayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const FridayModel = require('./Models/FridayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const WednesdayModel = require('./Models/WednesdayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const MondayModel = require('./Models/MondayModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const Rule2Model = require('./Models/Rule2Model');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const BlinkLedsNetworkDeviceModel = require('./Models/BlinkLedsNetworkDeviceModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const CreateNetworkPiiRequestsModel = require('./Models/CreateNetworkPiiRequestsModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const UpdateOrganizationConfigTemplateModel =
  require('./Models/UpdateOrganizationConfigTemplateModel');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const HubModel = require('./Models/HubModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const Alert1Model = require('./Models/Alert1Model');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const SchedulingModel = require('./Models/SchedulingModel');
const CreateNetworkGroupPoliciesModel = require('./Models/CreateNetworkGroupPoliciesModel');
const Rule4Model = require('./Models/Rule4Model');
const Rule3Model = require('./Models/Rule3Model');
const Rule1Model = require('./Models/Rule1Model');
const RuleModel = require('./Models/RuleModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const CreateOrganizationNetworksModel = require('./Models/CreateOrganizationNetworksModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const Rule7Model = require('./Models/Rule7Model');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const UpdateNetworkSmGeofenceRegionModel = require('./Models/UpdateNetworkSmGeofenceRegionModel');
const CreateNetworkSmGeofenceRegionsModel = require('./Models/CreateNetworkSmGeofenceRegionsModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    ActionBatchesController,
    NetworksController,
    AnalyticsController,
    OrganizationsController,
    AlertSettingsController,
    AdminsController,
    WirelessHealthController,
    VlansController,
    UplinkSettingsController,
    StaticRoutesController,
    MXPortForwardingRulesController,
    MX11NATRulesController,
    MX1ManyNATRulesController,
    IDSAlertsController,
    FirewalledServicesController,
    ContentFilteringRulesController,
    TrafficShapingController,
    SwitchStacksController,
    SwitchPortsController,
    WebhookLogsController,
    SwitchSettingsController,
    SsidsController,
    SplashSettingsController,
    SplashLoginAttemptsController,
    SMController,
    ContentFilteringCategoriesController,
    SyslogServersController,
    TagsController,
    NamedTagScopeController,
    GeofencesController,
    GeofenceRegionsController,
    SecurityEventsController,
    IntrusionSettingsController,
    SAMLRolesController,
    RadioSettingsController,
    MalwareSettingsController,
    OrganizationAlertSettingsController,
    OpenAPISpecController,
    MerakiAuthUsersController,
    HTTPServersController,
    GroupPoliciesController,
    PIIController,
    MRL3FirewallController,
    MXVPNFirewallController,
    MXL7FirewallController,
    ClientSecurityEventsController,
    MXL3FirewallController,
    MXCellularFirewallController,
    DevicesController,
    ConfigTemplatesController,
    ClientsController,
    MXL7ApplicationCategoriesController,
    CamerasController,
    BluetoothClientsController,
    APIUsageController,
    // models of meraki
    TagModel,
    UpdateOrganizationActionBatchModel,
    UpdateOrganizationAdminModel,
    ActionModel,
    CreateOrganizationAdminsModel,
    CreateOrganizationActionBatchesModel,
    NetworkModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    CloneOrganizationModel,
    UpdateOrganizationModel,
    CreateOrganizationsModel,
    CreateNetworkHttpServersWebhookTestsModel,
    UpdateNetworkL7FirewallRulesModel,
    UpdateNetworkCellularFirewallRulesModel,
    ClaimNetworkDevicesModel,
    SsidsModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    ReservedIpRangeModel,
    DhcpOptionModel,
    UpdateNetworkStaticRouteModel,
    Rule9Model,
    Rule8Model,
    Rule6Model,
    Rule5Model,
    UpdateNetworkSmDevicesMoveModel,
    UpdateNetworkSmDevicesLockModel,
    UpdateNetworkSmDevicesTagsModel,
    CreateNetworkSmAppPolarisModel,
    CreateNetworkVlansModel,
    BandwidthLimits6Model,
    SnapshotNetworkCameraModel,
    SubnetModel,
    UpdateNetworkUplinkSettingsModel,
    UpdateNetworkVlansEnabledStateModel,
    CreateNetworkStaticRoutesModel,
    UpdateNetworkOneToOneNatRulesModel,
    UpdateNetworkPortForwardingRulesModel,
    UpdateNetworkFirewalledServiceModel,
    UpdateNetworkContentFilteringModel,
    UpdateNetworkSsidTrafficShapingModel,
    UpdateNetworkTrafficShapingModel,
    ServerModel,
    UpdateNetworkSyslogServersModel,
    UpdateNetworkOneToManyNatRulesModel,
    AddNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    CreateNetworkSwitchStacksModel,
    PowerExceptionModel,
    UpdateNetworkSwitchSettingsModel,
    ApTagsAndVlanIdModel,
    RadiusAccountingServerModel,
    RadiusServerModel,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSmDevicesCheckinModel,
    UpdateNetworkSmDeviceWipeModel,
    UpdateNetworkSmDeviceFieldsModel,
    UpdateNetworkSmAppPolariModel,
    CreateNetworkSmTagModel,
    UpdateNetworkSmTagModel,
    UpdateNetworkSmTargetGroupModel,
    CreateNetworkSmTargetGroupsModel,
    UpdateNetworkSmGeofenceModel,
    CreateNetworkSmGeofencesModel,
    ProtectedNetworksModel,
    UpdateNetworkSecurityIntrusionSettingsModel,
    UpdateOrganizationSamlRoleModel,
    Network2Model,
    Tag2Model,
    CreateOrganizationSamlRolesModel,
    DefaultDestinations1Model,
    UpdateOrganizationAlertSettingsModel,
    UpdateNetworkHttpServerModel,
    CreateNetworkHttpServersModel,
    BandwidthLimits1Model,
    PerClientBandwidthLimitsModel,
    DefinitionModel,
    FirewallAndTrafficShapingModel,
    BandwidthLimitsModel,
    BandwidthModel,
    SundayModel,
    SaturdayModel,
    AddNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileUmbrellaModel,
    FridayModel,
    ThursdayModel,
    CreateNetworkSmProfileUmbrellaModel,
    WednesdayModel,
    TuesdayModel,
    MondayModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    AddNetworkSmProfileClarityModel,
    Rule2Model,
    UpdateNetworkL3FirewallRulesModel,
    BlinkLedsNetworkDeviceModel,
    UpdateNetworkSmProfileClarityModel,
    CreateNetworkSmProfileClarityModel,
    CreateNetworkPiiRequestsModel,
    ClaimOrganizationModel,
    UpdateOrganizationConfigTemplateModel,
    UpdateNetworkClientPolicyModel,
    HubModel,
    UpdateNetworkSiteToSiteVpnModel,
    BindNetworkModel,
    DefaultDestinationsModel,
    UpdateNetworkAlertSettingsModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    UpdateOrganizationSnmpModel,
    Alert1Model,
    UpdateNetworkGroupPolicyModel,
    TrafficShapingRuleModel,
    SchedulingModel,
    CreateNetworkGroupPoliciesModel,
    Rule4Model,
    Rule3Model,
    Rule1Model,
    RuleModel,
    UpdateNetworkDeviceModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkModel,
    CreateOrganizationNetworksModel,
    UpdateNetworkBluetoothSettingsModel,
    AlertModel,
    UpdateNetworkVlanModel,
    Rule7Model,
    UpdateDeviceSwitchPortModel,
    UpdateNetworkSmGeofenceRegionModel,
    CreateNetworkSmGeofenceRegionsModel,
    IpsecPoliciesModel,
    UpdateNetworkSsidModel,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
