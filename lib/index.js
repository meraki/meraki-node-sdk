/**
  * @module MerakiDashboardAPILib
  *
  * This collection of API calls provides an easy way to interact with a Cisco Meraki network
  */

'use strict';

const Configuration = require('./configuration');
const SMController = require('./Controllers/SMController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SSIDsController = require('./Controllers/SSIDsController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VLANsController = require('./Controllers/VLANsController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const AnalyticsController = require('./Controllers/AnalyticsController');
const APIUsageController = require('./Controllers/APIUsageController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const NetworksController = require('./Controllers/NetworksController');
const CamerasController = require('./Controllers/CamerasController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const DevicesController = require('./Controllers/DevicesController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const OrganizationAlertSettingsController =
  require('./Controllers/OrganizationAlertSettingsController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PhoneAnnouncementsController = require('./Controllers/PhoneAnnouncementsController');
const PhoneAssignmentsController = require('./Controllers/PhoneAssignmentsController');
const PhoneCallgroupsController = require('./Controllers/PhoneCallgroupsController');
const PhoneConferenceRoomsController = require('./Controllers/PhoneConferenceRoomsController');
const PhoneContactsController = require('./Controllers/PhoneContactsController');
const PhoneNumbersController = require('./Controllers/PhoneNumbersController');
const PIIController = require('./Controllers/PIIController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const ClientSecurityEventsController = require('./Controllers/ClientSecurityEventsController');
const GeofenceRegionsController = require('./Controllers/GeofenceRegionsController');
const GeofencesController = require('./Controllers/GeofencesController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const TagsController = require('./Controllers/TagsController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const AdminsController = require('./Controllers/AdminsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const BlinkLedsNetworkDeviceModel = require('./Models/BlinkLedsNetworkDeviceModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const MondayModel = require('./Models/MondayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const FridayModel = require('./Models/FridayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const SundayModel = require('./Models/SundayModel');
const BandwidthModel = require('./Models/BandwidthModel');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const CreateNetworkHttpServersModel = require('./Models/CreateNetworkHttpServersModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const UpdateOrganizationAlertSettingsModel =
  require('./Models/UpdateOrganizationAlertSettingsModel');
const DefaultDestinations1Model = require('./Models/DefaultDestinations1Model');
const CreateOrganizationSamlRolesModel = require('./Models/CreateOrganizationSamlRolesModel');
const Tag2Model = require('./Models/Tag2Model');
const Network2Model = require('./Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const CreateNetworkSmGeofencesModel = require('./Models/CreateNetworkSmGeofencesModel');
const UpdateNetworkSmGeofenceModel = require('./Models/UpdateNetworkSmGeofenceModel');
const CreateNetworkSmTargetGroupsModel = require('./Models/CreateNetworkSmTargetGroupsModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const UpdateNetworkSmTagModel = require('./Models/UpdateNetworkSmTagModel');
const CreateNetworkSmTagModel = require('./Models/CreateNetworkSmTagModel');
const UpdateNetworkSmAppPolariModel = require('./Models/UpdateNetworkSmAppPolariModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const UpdateNetworkSmDeviceWipeModel = require('./Models/UpdateNetworkSmDeviceWipeModel');
const UpdateNetworkSmDevicesCheckinModel = require('./Models/UpdateNetworkSmDevicesCheckinModel');
const UpdateNetworkSsidSplashSettingsModel =
  require('./Models/UpdateNetworkSsidSplashSettingsModel');
const RadiusServerModel = require('./Models/RadiusServerModel');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const CreateNetworkSwitchStacksModel = require('./Models/CreateNetworkSwitchStacksModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const DefinitionModel = require('./Models/DefinitionModel');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const BandwidthLimits2Model = require('./Models/BandwidthLimits2Model');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const CreateNetworkStaticRoutesModel = require('./Models/CreateNetworkStaticRoutesModel');
const BandwidthLimits4Model = require('./Models/BandwidthLimits4Model');
const CreateNetworkVlansModel = require('./Models/CreateNetworkVlansModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const CreateOrganizationAdminsModel = require('./Models/CreateOrganizationAdminsModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const CreateOrganizationNetworksModel = require('./Models/CreateOrganizationNetworksModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const RuleModel = require('./Models/RuleModel');
const Rule2Model = require('./Models/Rule2Model');
const Rule3Model = require('./Models/Rule3Model');
const CreateNetworkGroupPoliciesModel = require('./Models/CreateNetworkGroupPoliciesModel');
const SchedulingModel = require('./Models/SchedulingModel');
const Alert1Model = require('./Models/Alert1Model');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const UpdateNetworkPhoneAssignmentModel = require('./Models/UpdateNetworkPhoneAssignmentModel');
const CreateNetworkPhoneConferenceRoomsModel =
  require('./Models/CreateNetworkPhoneConferenceRoomsModel');
const CreateOrganizationActionBatchesModel =
  require('./Models/CreateOrganizationActionBatchesModel');
const ActionModel = require('./Models/ActionModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const TagModel = require('./Models/TagModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const HubModel = require('./Models/HubModel');
const SubnetModel = require('./Models/SubnetModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SnapshotNetworkCameraModel = require('./Models/SnapshotNetworkCameraModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const SsidsModel = require('./Models/SsidsModel');
const CreateNetworkHttpServersWebhookTestsModel =
  require('./Models/CreateNetworkHttpServersWebhookTestsModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationsModel = require('./Models/CreateOrganizationsModel');
const CreateNetworkPhoneAnnouncementsModel =
  require('./Models/CreateNetworkPhoneAnnouncementsModel');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const UpdateNetworkPhoneContactModel = require('./Models/UpdateNetworkPhoneContactModel');
const CreateNetworkPhoneContactsModel = require('./Models/CreateNetworkPhoneContactsModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkPhoneConferenceRoomModel =
  require('./Models/UpdateNetworkPhoneConferenceRoomModel');
const CreateNetworkPiiRequestsModel = require('./Models/CreateNetworkPiiRequestsModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkSmDevicesLockModel = require('./Models/UpdateNetworkSmDevicesLockModel');
const UpdateNetworkSmDevicesMoveModel = require('./Models/UpdateNetworkSmDevicesMoveModel');
const Rule4Model = require('./Models/Rule4Model');
const Rule5Model = require('./Models/Rule5Model');
const Rule7Model = require('./Models/Rule7Model');
const Rule8Model = require('./Models/Rule8Model');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const CreateNetworkPhoneCallgroupsModel = require('./Models/CreateNetworkPhoneCallgroupsModel');
const UpdateNetworkPhoneCallgroupModel = require('./Models/UpdateNetworkPhoneCallgroupModel');
const CreateNetworkSmGeofenceRegionsModel = require('./Models/CreateNetworkSmGeofenceRegionsModel');
const UpdateNetworkSmGeofenceRegionModel = require('./Models/UpdateNetworkSmGeofenceRegionModel');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const Rule6Model = require('./Models/Rule6Model');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MerakiDashboardAPILib
    Configuration,
    // controllers of MerakiDashboardAPILib
    SMController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    SSIDsController,
    SwitchSettingsController,
    SwitchPortsController,
    SwitchStacksController,
    SyslogServersController,
    TrafficShapingController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    FirewalledServicesController,
    MX1ManyNATRulesController,
    MX11NATRulesController,
    MXPortForwardingRulesController,
    StaticRoutesController,
    UplinkSettingsController,
    VLANsController,
    WirelessHealthController,
    AnalyticsController,
    APIUsageController,
    BluetoothClientsController,
    NetworksController,
    CamerasController,
    ClientsController,
    ConfigTemplatesController,
    DevicesController,
    MXCellularFirewallController,
    MXL3FirewallController,
    MXVPNFirewallController,
    MRL3FirewallController,
    GroupPoliciesController,
    HTTPServersController,
    MerakiAuthUsersController,
    OpenAPISpecController,
    OrganizationAlertSettingsController,
    OrganizationsController,
    PhoneAnnouncementsController,
    PhoneAssignmentsController,
    PhoneCallgroupsController,
    PhoneConferenceRoomsController,
    PhoneContactsController,
    PhoneNumbersController,
    PIIController,
    RadioSettingsController,
    SAMLRolesController,
    ClientSecurityEventsController,
    GeofenceRegionsController,
    GeofencesController,
    NamedTagScopeController,
    TagsController,
    ActionBatchesController,
    AdminsController,
    AlertSettingsController,
    // models of MerakiDashboardAPILib
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
    // exceptions of MerakiDashboardAPILib
    APIException,
};

module.exports = initializer;
