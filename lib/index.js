/**
  * @module meraki
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the [OpenAPI](https://swagger.
  * io/docs/specification/about/) specification.  ## What can the API be used for? The Dashboard
  * API can be used for many purposes. It’s meant to be an open-ended tool. Here are some examples
  * of use cases:  * Add new organizations, admins, networks, devices, VLANs, and more * Configure
  * networks at scale * Automatically on-board and off-board new employees’ teleworker setups *
  * Build your own dashboard for store managers, field techs, or unique use cases  ## Enabling the
  * Dashboard API 1. Begin by logging into [Meraki Dashboard](https://dashboard.meraki.com) and
  * navigating to **Organization > Settings**  2. Locate the section titled **Dashboard API
  * access** and select **Enable Access**, then **Save** your changes  3. After enabling the API,
  * choose your username at the top-right of the Meraki Dashboard and select **my profile**  4.
  * Locate the section titled **Dashboard API access** and select **Generate new API key**  *Note:
  * The API key is associated with a Dashboard administrator account. You can generate, revoke, and
  * regenerate your API key on your profile.*  **Keep your API key safe as it provides
  * authentication to all of your organizations with the API enabled. If your API key is shared,
  * you can regenerate your API key at any time. This will revoke the existing API key.**  Copy and
  * store your API key in a safe place. Dashboard does not store API keys in plaintext for security
  * reasons, so this is the only time you will be able to record it. If you lose or forget your API
  * key, you will have to revoke it and generate a new one.  Every request must specify an API key
  * via a request header.  The API key must be specified in the URL header. The API will return a
  * 404 (rather than a 403) in response to a request with a missing or incorrect API key in order
  * to prevent leaking the existence of resources to unauthorized users.  `X-Cisco-Meraki-API-Key:
  * <secret key>`  Read more about API [authorization](../api/#/python/getting-started/authorizing-
  * your-client)   ## Versioning Once an API version is released, we will make only backwards-
  * compatible changes to it. Backwards-compatible changes include:  * Adding new API resources  *
  * Adding new optional request parameters to existing API methods  * Adding new properties to
  * existing API responses  * Changing the order of properties in existing API responses  ## Rate
  * Limit * The Dashboard API is limited to **5 calls per second**, per organization. * A burst of
  * 5 additional calls are allowed in the first second, so a maximum of 15 calls in the first 2
  * seconds. * The rate limiting technique is based off of the [token bucket model](https://en.
  * wikipedia.org/wiki/Token_bucket). * An error with a `429` status code will be returned when the
  * rate limit has been exceeded. * Expect to backoff for 1 - 2 seconds if the limit has been
  * exceeded. You may have to wait potentially longer if a large number of requests were made
  * within this timeframe.   ## Additional Details Identifiers in the API are opaque strings. A
  * `{networkId}`, for example, might be the string “126043”, whereas an `{orderId}` might contain
  * characters, such as “4S1234567”. Client applications must not try to parse them as numbers.
  * Even identifiers that look like numbers might be too long to encode without loss of precision
  * in Javascript, where the only numeric type is IEEE 754 floating point.  Verbs in the API follow
  * the usual REST conventions:  `GET` returns the value of a resource or a list of resources,
  * depending on whether an identifier is specified. For example, a `GET` of `/v0/organizations`
  * returns a list of organizations, whereas a `GET` of `/v0/organizations/{organizationId}`
  * returns a particular organization.  `POST` adds a new resource, as in a `POST` to
  * `/v0/organizations/{organizationId}/admins`, or performs some other non-idempotent change.
  * `PUT` updates a resource. `PUTs` are idempotent; they update a resource, creating it first if
  * it does not already exist. A `PUT` should specify all the fields of a resource; the API will
  * revert omitted fields to their default value.  `DELETE` removes a resource.
  */

'use strict';

const Configuration = require('./configuration');
const OrganizationsController = require('./Controllers/OrganizationsController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const TrafficShapingController = require('./Controllers/TrafficShapingController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const AdminsController = require('./Controllers/AdminsController');
const ActionBatchesController = require('./Controllers/ActionBatchesController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SsidsController = require('./Controllers/SsidsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SMController = require('./Controllers/SMController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const PIIController = require('./Controllers/PIIController');
const OpenAPISpecController = require('./Controllers/OpenAPISpecController');
const ManagementInterfaceSettingsController =
  require('./Controllers/ManagementInterfaceSettingsController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const NetworksController = require('./Controllers/NetworksController');
const MVSenseController = require('./Controllers/MVSenseController');
const VlansController = require('./Controllers/VlansController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SwitchProfilesController = require('./Controllers/SwitchProfilesController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SNMPSettingsController = require('./Controllers/SNMPSettingsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const IntrusionSettingsController = require('./Controllers/IntrusionSettingsController');
const RadioSettingsController = require('./Controllers/RadioSettingsController');
const ClientsController = require('./Controllers/ClientsController');
const APIUsageController = require('./Controllers/APIUsageController');
const NetFlowSettingsController = require('./Controllers/NetFlowSettingsController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const DevicesController = require('./Controllers/DevicesController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const CamerasController = require('./Controllers/CamerasController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const SecurityEventsController = require('./Controllers/SecurityEventsController');
const WebhookLogsController = require('./Controllers/WebhookLogsController');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const Rule11Model = require('./Models/Rule11Model');
const Rule10Model = require('./Models/Rule10Model');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const Rule8Model = require('./Models/Rule8Model');
const UpdateNetworkSsidTrafficShapingModel =
  require('./Models/UpdateNetworkSsidTrafficShapingModel');
const Rule7Model = require('./Models/Rule7Model');
const IpAssignmentModeEnum = require('./Models/IpAssignmentModeEnum');
const AuthModeEnum = require('./Models/AuthModeEnum');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const MoveNetworkSmDevicesModel = require('./Models/MoveNetworkSmDevicesModel');
const LockNetworkSmDevicesModel = require('./Models/LockNetworkSmDevicesModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const HubModel = require('./Models/HubModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const CombineOrganizationNetworksModel = require('./Models/CombineOrganizationNetworksModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const NetworkModel = require('./Models/NetworkModel');
const TagModel = require('./Models/TagModel');
const UpdateOrganizationActionBatchModel = require('./Models/UpdateOrganizationActionBatchModel');
const ActionModel = require('./Models/ActionModel');
const CreateOrganizationActionBatchModel = require('./Models/CreateOrganizationActionBatchModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const CreateOrganizationAdminModel = require('./Models/CreateOrganizationAdminModel');
const SsidsModel = require('./Models/SsidsModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const ServiceEnum = require('./Models/ServiceEnum');
const CreateNetworkGroupPolicyModel = require('./Models/CreateNetworkGroupPolicyModel');
const BlinkNetworkDeviceLedsModel = require('./Models/BlinkNetworkDeviceLedsModel');
const UpdateNetworkGroupPolicyModel = require('./Models/UpdateNetworkGroupPolicyModel');
const UpdateNetworkSnmpSettingsModel = require('./Models/UpdateNetworkSnmpSettingsModel');
const CheckinNetworkSmDevicesModel = require('./Models/CheckinNetworkSmDevicesModel');
const WipeNetworkSmDeviceModel = require('./Models/WipeNetworkSmDeviceModel');
const DeviceFieldsModel = require('./Models/DeviceFieldsModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const UpdateNetworkSmAppPolarisModel = require('./Models/UpdateNetworkSmAppPolarisModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const CreateNetworkSmTargetGroupModel = require('./Models/CreateNetworkSmTargetGroupModel');
const AllowedFileModel = require('./Models/AllowedFileModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const WhitelistedRuleModel = require('./Models/WhitelistedRuleModel');
const ProtectedNetworksModel = require('./Models/ProtectedNetworksModel');
const UpdateNetworkSecurityIntrusionSettingsModel =
  require('./Models/UpdateNetworkSecurityIntrusionSettingsModel');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const Network2Model = require('./Models/Network2Model');
const Tag2Model = require('./Models/Tag2Model');
const CreateOrganizationSamlRoleModel = require('./Models/CreateOrganizationSamlRoleModel');
const Type5Enum = require('./Models/Type5Enum');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const UpdateNetworkNetflowSettingsModel = require('./Models/UpdateNetworkNetflowSettingsModel');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const UpdateNetworkDeviceManagementInterfaceSettingsModel =
  require('./Models/UpdateNetworkDeviceManagementInterfaceSettingsModel');
const UpdateNetworkHttpServerModel = require('./Models/UpdateNetworkHttpServerModel');
const CreateNetworkHttpServerModel = require('./Models/CreateNetworkHttpServerModel');
const Rule5Model = require('./Models/Rule5Model');
const Settings3Enum = require('./Models/Settings3Enum');
const BonjourForwardingModel = require('./Models/BonjourForwardingModel');
const Settings2Enum = require('./Models/Settings2Enum');
const VlanTaggingModel = require('./Models/VlanTaggingModel');
const SplashAuthSettingsEnum = require('./Models/SplashAuthSettingsEnum');
const L7FirewallRuleModel = require('./Models/L7FirewallRuleModel');
const BandwidthLimits1Model = require('./Models/BandwidthLimits1Model');
const PerClientBandwidthLimitsModel = require('./Models/PerClientBandwidthLimitsModel');
const DefinitionModel = require('./Models/DefinitionModel');
const Settings1Enum = require('./Models/Settings1Enum');
const FirewallAndTrafficShapingModel = require('./Models/FirewallAndTrafficShapingModel');
const BandwidthLimitsModel = require('./Models/BandwidthLimitsModel');
const SettingsEnum = require('./Models/SettingsEnum');
const BandwidthModel = require('./Models/BandwidthModel');
const SundayModel = require('./Models/SundayModel');
const SaturdayModel = require('./Models/SaturdayModel');
const FridayModel = require('./Models/FridayModel');
const ThursdayModel = require('./Models/ThursdayModel');
const WednesdayModel = require('./Models/WednesdayModel');
const TuesdayModel = require('./Models/TuesdayModel');
const MondayModel = require('./Models/MondayModel');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const Rule2Model = require('./Models/Rule2Model');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const CreateNetworkVlanModel = require('./Models/CreateNetworkVlanModel');
const BandwidthLimits6Model = require('./Models/BandwidthLimits6Model');
const CreateNetworkStaticRouteModel = require('./Models/CreateNetworkStaticRouteModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const UpdateNetworkTrafficShapingModel = require('./Models/UpdateNetworkTrafficShapingModel');
const ServerModel = require('./Models/ServerModel');
const CreateNetworkSwitchStackModel = require('./Models/CreateNetworkSwitchStackModel');
const PowerTypeEnum = require('./Models/PowerTypeEnum');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const BandSelectionEnum = require('./Models/BandSelectionEnum');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const RadiusServerModel = require('./Models/RadiusServerModel');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const V3PrivModeEnum = require('./Models/V3PrivModeEnum');
const V3AuthModeEnum = require('./Models/V3AuthModeEnum');
const UserModel = require('./Models/UserModel');
const AccessEnum = require('./Models/AccessEnum');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const GenerateNetworkCameraSnapshotModel = require('./Models/GenerateNetworkCameraSnapshotModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const AllowedUrlModel = require('./Models/AllowedUrlModel');
const UpdateOrganizationSecurityIntrusionSettingsModel =
  require('./Models/UpdateOrganizationSecurityIntrusionSettingsModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkDeviceWirelessRadioSettingsModel =
  require('./Models/UpdateNetworkDeviceWirelessRadioSettingsModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const Rule9Model = require('./Models/Rule9Model');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const SplashPageEnum = require('./Models/SplashPageEnum');
const SubnetModel = require('./Models/SubnetModel');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const CreateNetworkPiiRequestModel = require('./Models/CreateNetworkPiiRequestModel');
const PeerModel = require('./Models/PeerModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const Wan2Model = require('./Models/Wan2Model');
const Wan1Model = require('./Models/Wan1Model');
const Type2Enum = require('./Models/Type2Enum');
const L3FirewallRuleModel = require('./Models/L3FirewallRuleModel');
const Type1Enum = require('./Models/Type1Enum');
const TrafficShapingRuleModel = require('./Models/TrafficShapingRuleModel');
const SchedulingModel = require('./Models/SchedulingModel');
const Rule4Model = require('./Models/Rule4Model');
const Rule3Model = require('./Models/Rule3Model');
const TypeEnum = require('./Models/TypeEnum');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const RuleModel = require('./Models/RuleModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CreateOrganizationModel = require('./Models/CreateOrganizationModel');
const CreateNetworkHttpServersWebhookTestModel =
  require('./Models/CreateNetworkHttpServersWebhookTestModel');
const Policy1Enum = require('./Models/Policy1Enum');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const PolicyEnum = require('./Models/PolicyEnum');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const CreateOrganizationNetworkModel = require('./Models/CreateOrganizationNetworkModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of meraki
    Configuration,
    // controllers of meraki
    OrganizationsController,
    MX1ManyNATRulesController,
    FirewalledServicesController,
    TrafficShapingController,
    WirelessHealthController,
    AlertSettingsController,
    AdminsController,
    ActionBatchesController,
    SwitchPortsController,
    SsidsController,
    SplashSettingsController,
    SplashLoginAttemptsController,
    SMController,
    NamedTagScopeController,
    SAMLRolesController,
    PIIController,
    OpenAPISpecController,
    ManagementInterfaceSettingsController,
    MRL3FirewallController,
    MXL7FirewallController,
    GroupPoliciesController,
    NetworksController,
    MVSenseController,
    VlansController,
    UplinkSettingsController,
    StaticRoutesController,
    MXPortForwardingRulesController,
    MX11NATRulesController,
    ContentFilteringRulesController,
    ContentFilteringCategoriesController,
    SyslogServersController,
    SwitchStacksController,
    SwitchProfilesController,
    SwitchSettingsController,
    SNMPSettingsController,
    MalwareSettingsController,
    IntrusionSettingsController,
    RadioSettingsController,
    ClientsController,
    APIUsageController,
    NetFlowSettingsController,
    MerakiAuthUsersController,
    HTTPServersController,
    MXVPNFirewallController,
    MXL7ApplicationCategoriesController,
    MXL3FirewallController,
    MXCellularFirewallController,
    DevicesController,
    ConfigTemplatesController,
    CamerasController,
    BluetoothClientsController,
    SecurityEventsController,
    WebhookLogsController,
    // models of meraki
    UpdateNetworkStaticRouteModel,
    Rule11Model,
    Rule10Model,
    UpdateNetworkContentFilteringModel,
    Rule8Model,
    UpdateNetworkSsidTrafficShapingModel,
    Rule7Model,
    IpAssignmentModeEnum,
    AuthModeEnum,
    UpdateOrganizationSnmpModel,
    MoveNetworkSmDevicesModel,
    LockNetworkSmDevicesModel,
    UpdateNetworkSmDevicesTagsModel,
    CreateNetworkSmAppPolarisModel,
    AddNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileUmbrellaModel,
    CreateNetworkSmProfileUmbrellaModel,
    AddNetworkSmProfileClarityModel,
    UpdateNetworkSmProfileClarityModel,
    UpdateNetworkClientPolicyModel,
    HubModel,
    UpdateNetworkSiteToSiteVpnModel,
    CombineOrganizationNetworksModel,
    BindNetworkModel,
    DefaultDestinationsModel,
    UpdateNetworkAlertSettingsModel,
    NetworkModel,
    TagModel,
    UpdateOrganizationActionBatchModel,
    ActionModel,
    CreateOrganizationActionBatchModel,
    UpdateOrganizationAdminModel,
    CreateOrganizationAdminModel,
    SsidsModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    ServiceEnum,
    CreateNetworkGroupPolicyModel,
    BlinkNetworkDeviceLedsModel,
    UpdateNetworkGroupPolicyModel,
    UpdateNetworkSnmpSettingsModel,
    CheckinNetworkSmDevicesModel,
    WipeNetworkSmDeviceModel,
    DeviceFieldsModel,
    UpdateNetworkSmDeviceFieldsModel,
    UpdateNetworkSmAppPolarisModel,
    UpdateNetworkSmTargetGroupModel,
    CreateNetworkSmTargetGroupModel,
    AllowedFileModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    WhitelistedRuleModel,
    ProtectedNetworksModel,
    UpdateNetworkSecurityIntrusionSettingsModel,
    UpdateOrganizationSamlRoleModel,
    Network2Model,
    Tag2Model,
    CreateOrganizationSamlRoleModel,
    Type5Enum,
    UpdateOrganizationThirdPartyVPNPeersModel,
    UpdateNetworkNetflowSettingsModel,
    WanEnabledEnum,
    UpdateNetworkDeviceManagementInterfaceSettingsModel,
    UpdateNetworkHttpServerModel,
    CreateNetworkHttpServerModel,
    Rule5Model,
    Settings3Enum,
    BonjourForwardingModel,
    Settings2Enum,
    VlanTaggingModel,
    SplashAuthSettingsEnum,
    L7FirewallRuleModel,
    BandwidthLimits1Model,
    PerClientBandwidthLimitsModel,
    DefinitionModel,
    Settings1Enum,
    FirewallAndTrafficShapingModel,
    BandwidthLimitsModel,
    SettingsEnum,
    BandwidthModel,
    SundayModel,
    SaturdayModel,
    FridayModel,
    ThursdayModel,
    WednesdayModel,
    TuesdayModel,
    MondayModel,
    UpdateNetworkSsidL3FirewallRulesModel,
    UpdateOrganizationVpnFirewallRulesModel,
    Rule2Model,
    UpdateNetworkL7FirewallRulesModel,
    UpdateNetworkL3FirewallRulesModel,
    DhcpOptionModel,
    ReservedIpRangeModel,
    CreateNetworkVlanModel,
    BandwidthLimits6Model,
    CreateNetworkStaticRouteModel,
    UpdateNetworkFirewalledServiceModel,
    UpdateNetworkTrafficShapingModel,
    ServerModel,
    CreateNetworkSwitchStackModel,
    PowerTypeEnum,
    UpdateNetworkSwitchSettingsModel,
    BandSelectionEnum,
    ApTagsAndVlanIdModel,
    RadiusAccountingServerModel,
    RadiusLoadBalancingPolicyEnum,
    RadiusFailoverPolicyEnum,
    RadiusServerModel,
    WpaEncryptionModeEnum,
    EncryptionModeEnum,
    UpdateNetworkSsidsPlashSettingsModel,
    V3PrivModeEnum,
    V3AuthModeEnum,
    UserModel,
    AccessEnum,
    UpdateNetworkVlanModel,
    GenerateNetworkCameraSnapshotModel,
    IpsecPoliciesModel,
    UpdateNetworkVlansEnabledStateModel,
    UpdateNetworkUplinkSettingsModel,
    UpdateNetworkPortForwardingRulesModel,
    UpdateNetworkOneToOneNatRulesModel,
    UpdateNetworkOneToManyNatRulesModel,
    UpdateNetworkSyslogServersModel,
    RemoveNetworkSwitchStackModel,
    AddNetworkSwitchStackModel,
    PowerExceptionModel,
    AllowedUrlModel,
    UpdateOrganizationSecurityIntrusionSettingsModel,
    AlertModel,
    UpdateNetworkDeviceWirelessRadioSettingsModel,
    ClaimNetworkDevicesModel,
    Rule9Model,
    UpdateDeviceSwitchPortModel,
    SplashPageEnum,
    SubnetModel,
    UpdateNetworkSsidModel,
    CreateNetworkSmProfileClarityModel,
    CreateNetworkPiiRequestModel,
    PeerModel,
    ClaimOrganizationModel,
    Wan2Model,
    Wan1Model,
    Type2Enum,
    L3FirewallRuleModel,
    Type1Enum,
    TrafficShapingRuleModel,
    SchedulingModel,
    Rule4Model,
    Rule3Model,
    TypeEnum,
    CloneOrganizationModel,
    RuleModel,
    UpdateNetworkDeviceModel,
    UpdateOrganizationModel,
    CreateOrganizationModel,
    CreateNetworkHttpServersWebhookTestModel,
    Policy1Enum,
    ProvisionNetworkClientsModel,
    PolicyEnum,
    UpdateNetworkModel,
    CreateOrganizationNetworkModel,
    UpdateNetworkBluetoothSettingsModel,
    UpdateNetworkCellularFirewallRulesModel,
    // exceptions of meraki
    APIException,
};

module.exports = initializer;
