/**
  * @module MerakiDashboardAPILib
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
const AdminsController = require('./Controllers/AdminsController');
const AlertSettingsController = require('./Controllers/AlertSettingsController');
const MVSenseController = require('./Controllers/MVSenseController');
const APIUsageController = require('./Controllers/APIUsageController');
const BluetoothClientsController = require('./Controllers/BluetoothClientsController');
const NetworksController = require('./Controllers/NetworksController');
const CamerasController = require('./Controllers/CamerasController');
const ClientsController = require('./Controllers/ClientsController');
const ConfigTemplatesController = require('./Controllers/ConfigTemplatesController');
const DevicesController = require('./Controllers/DevicesController');
const MXCellularFirewallController = require('./Controllers/MXCellularFirewallController');
const MXL3FirewallController = require('./Controllers/MXL3FirewallController');
const MXL7ApplicationCategoriesController =
  require('./Controllers/MXL7ApplicationCategoriesController');
const MXL7FirewallController = require('./Controllers/MXL7FirewallController');
const MXVPNFirewallController = require('./Controllers/MXVPNFirewallController');
const MRL3FirewallController = require('./Controllers/MRL3FirewallController');
const GroupPoliciesController = require('./Controllers/GroupPoliciesController');
const HTTPServersController = require('./Controllers/HTTPServersController');
const MerakiAuthUsersController = require('./Controllers/MerakiAuthUsersController');
const OrganizationsController = require('./Controllers/OrganizationsController');
const PIIController = require('./Controllers/PIIController');
const SAMLRolesController = require('./Controllers/SAMLRolesController');
const ClientSecurityEventsController = require('./Controllers/ClientSecurityEventsController');
const MalwareSettingsController = require('./Controllers/MalwareSettingsController');
const NamedTagScopeController = require('./Controllers/NamedTagScopeController');
const SMController = require('./Controllers/SMController');
const SplashLoginAttemptsController = require('./Controllers/SplashLoginAttemptsController');
const SplashSettingsController = require('./Controllers/SplashSettingsController');
const SsidsController = require('./Controllers/SsidsController');
const SwitchSettingsController = require('./Controllers/SwitchSettingsController');
const SwitchPortsController = require('./Controllers/SwitchPortsController');
const SwitchStacksController = require('./Controllers/SwitchStacksController');
const SyslogServersController = require('./Controllers/SyslogServersController');
const ContentFilteringCategoriesController =
  require('./Controllers/ContentFilteringCategoriesController');
const ContentFilteringRulesController = require('./Controllers/ContentFilteringRulesController');
const FirewalledServicesController = require('./Controllers/FirewalledServicesController');
const MX1ManyNATRulesController = require('./Controllers/MX1ManyNATRulesController');
const MX11NATRulesController = require('./Controllers/MX11NATRulesController');
const MXPortForwardingRulesController = require('./Controllers/MXPortForwardingRulesController');
const StaticRoutesController = require('./Controllers/StaticRoutesController');
const UplinkSettingsController = require('./Controllers/UplinkSettingsController');
const VlansController = require('./Controllers/VlansController');
const WirelessHealthController = require('./Controllers/WirelessHealthController');
const CreateOrganizationAdminsModel = require('./Models/CreateOrganizationAdminsModel');
const TagModel = require('./Models/TagModel');
const NetworkModel = require('./Models/NetworkModel');
const UpdateOrganizationAdminModel = require('./Models/UpdateOrganizationAdminModel');
const UpdateNetworkAlertSettingsModel = require('./Models/UpdateNetworkAlertSettingsModel');
const DefaultDestinationsModel = require('./Models/DefaultDestinationsModel');
const AlertModel = require('./Models/AlertModel');
const UpdateNetworkBluetoothSettingsModel = require('./Models/UpdateNetworkBluetoothSettingsModel');
const CreateOrganizationNetworksModel = require('./Models/CreateOrganizationNetworksModel');
const UpdateNetworkModel = require('./Models/UpdateNetworkModel');
const BindNetworkModel = require('./Models/BindNetworkModel');
const UpdateNetworkSiteToSiteVpnModel = require('./Models/UpdateNetworkSiteToSiteVpnModel');
const HubModel = require('./Models/HubModel');
const SubnetModel = require('./Models/SubnetModel');
const SnapshotNetworkCameraModel = require('./Models/SnapshotNetworkCameraModel');
const ProvisionNetworkClientsModel = require('./Models/ProvisionNetworkClientsModel');
const UpdateNetworkClientPolicyModel = require('./Models/UpdateNetworkClientPolicyModel');
const UpdateNetworkClientSplashAuthorizationStatusModel =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatusModel');
const SsidsModel = require('./Models/SsidsModel');
const UpdateNetworkDeviceModel = require('./Models/UpdateNetworkDeviceModel');
const ClaimNetworkDevicesModel = require('./Models/ClaimNetworkDevicesModel');
const BlinkLedsNetworkDeviceModel = require('./Models/BlinkLedsNetworkDeviceModel');
const UpdateNetworkCellularFirewallRulesModel =
  require('./Models/UpdateNetworkCellularFirewallRulesModel');
const RuleModel = require('./Models/RuleModel');
const UpdateNetworkL3FirewallRulesModel = require('./Models/UpdateNetworkL3FirewallRulesModel');
const UpdateNetworkL7FirewallRulesModel = require('./Models/UpdateNetworkL7FirewallRulesModel');
const Rule2Model = require('./Models/Rule2Model');
const PolicyEnum = require('./Models/PolicyEnum');
const TypeEnum = require('./Models/TypeEnum');
const UpdateOrganizationVpnFirewallRulesModel =
  require('./Models/UpdateOrganizationVpnFirewallRulesModel');
const Rule3Model = require('./Models/Rule3Model');
const UpdateNetworkSsidL3FirewallRulesModel =
  require('./Models/UpdateNetworkSsidL3FirewallRulesModel');
const Rule4Model = require('./Models/Rule4Model');
const CreateNetworkGroupPoliciesModel = require('./Models/CreateNetworkGroupPoliciesModel');
const SchedulingModel = require('./Models/SchedulingModel');
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
const CreateNetworkHttpServersWebhookTestsModel =
  require('./Models/CreateNetworkHttpServersWebhookTestsModel');
const CreateOrganizationsModel = require('./Models/CreateOrganizationsModel');
const UpdateOrganizationModel = require('./Models/UpdateOrganizationModel');
const CloneOrganizationModel = require('./Models/CloneOrganizationModel');
const UpdateOrganizationSnmpModel = require('./Models/UpdateOrganizationSnmpModel');
const ClaimOrganizationModel = require('./Models/ClaimOrganizationModel');
const UpdateOrganizationThirdPartyVPNPeersModel =
  require('./Models/UpdateOrganizationThirdPartyVPNPeersModel');
const PeerModel = require('./Models/PeerModel');
const IpsecPoliciesModel = require('./Models/IpsecPoliciesModel');
const CreateNetworkPiiRequestsModel = require('./Models/CreateNetworkPiiRequestsModel');
const CreateOrganizationSamlRolesModel = require('./Models/CreateOrganizationSamlRolesModel');
const Tag2Model = require('./Models/Tag2Model');
const Network2Model = require('./Models/Network2Model');
const UpdateOrganizationSamlRoleModel = require('./Models/UpdateOrganizationSamlRoleModel');
const UpdateNetworkSecurityMalwareSettingsModel =
  require('./Models/UpdateNetworkSecurityMalwareSettingsModel');
const CreateNetworkSmTargetGroupsModel = require('./Models/CreateNetworkSmTargetGroupsModel');
const UpdateNetworkSmTargetGroupModel = require('./Models/UpdateNetworkSmTargetGroupModel');
const CreateNetworkSmProfileClarityModel = require('./Models/CreateNetworkSmProfileClarityModel');
const UpdateNetworkSmProfileClarityModel = require('./Models/UpdateNetworkSmProfileClarityModel');
const AddNetworkSmProfileClarityModel = require('./Models/AddNetworkSmProfileClarityModel');
const CreateNetworkSmProfileUmbrellaModel = require('./Models/CreateNetworkSmProfileUmbrellaModel');
const UpdateNetworkSmProfileUmbrellaModel = require('./Models/UpdateNetworkSmProfileUmbrellaModel');
const AddNetworkSmProfileUmbrellaModel = require('./Models/AddNetworkSmProfileUmbrellaModel');
const CreateNetworkSmAppPolarisModel = require('./Models/CreateNetworkSmAppPolarisModel');
const UpdateNetworkSmAppPolariModel = require('./Models/UpdateNetworkSmAppPolariModel');
const UpdateNetworkSmDevicesTagsModel = require('./Models/UpdateNetworkSmDevicesTagsModel');
const UpdateNetworkSmDeviceFieldsModel = require('./Models/UpdateNetworkSmDeviceFieldsModel');
const UpdateNetworkSmDevicesLockModel = require('./Models/UpdateNetworkSmDevicesLockModel');
const UpdateNetworkSmDeviceWipeModel = require('./Models/UpdateNetworkSmDeviceWipeModel');
const UpdateNetworkSmDevicesCheckinModel = require('./Models/UpdateNetworkSmDevicesCheckinModel');
const UpdateNetworkSmDevicesMoveModel = require('./Models/UpdateNetworkSmDevicesMoveModel');
const UpdateNetworkSsidsPlashSettingsModel =
  require('./Models/UpdateNetworkSsidsPlashSettingsModel');
const UpdateNetworkSsidModel = require('./Models/UpdateNetworkSsidModel');
const RadiusServerModel = require('./Models/RadiusServerModel');
const RadiusAccountingServerModel = require('./Models/RadiusAccountingServerModel');
const ApTagsAndVlanIdModel = require('./Models/ApTagsAndVlanIdModel');
const UpdateNetworkSwitchSettingsModel = require('./Models/UpdateNetworkSwitchSettingsModel');
const PowerExceptionModel = require('./Models/PowerExceptionModel');
const UpdateDeviceSwitchPortModel = require('./Models/UpdateDeviceSwitchPortModel');
const CreateNetworkSwitchStacksModel = require('./Models/CreateNetworkSwitchStacksModel');
const AddNetworkSwitchStackModel = require('./Models/AddNetworkSwitchStackModel');
const RemoveNetworkSwitchStackModel = require('./Models/RemoveNetworkSwitchStackModel');
const UpdateNetworkSyslogServersModel = require('./Models/UpdateNetworkSyslogServersModel');
const ServerModel = require('./Models/ServerModel');
const UpdateNetworkContentFilteringModel = require('./Models/UpdateNetworkContentFilteringModel');
const UpdateNetworkFirewalledServiceModel = require('./Models/UpdateNetworkFirewalledServiceModel');
const UpdateNetworkOneToManyNatRulesModel = require('./Models/UpdateNetworkOneToManyNatRulesModel');
const Rule5Model = require('./Models/Rule5Model');
const UpdateNetworkOneToOneNatRulesModel = require('./Models/UpdateNetworkOneToOneNatRulesModel');
const Rule6Model = require('./Models/Rule6Model');
const UpdateNetworkPortForwardingRulesModel =
  require('./Models/UpdateNetworkPortForwardingRulesModel');
const Rule7Model = require('./Models/Rule7Model');
const CreateNetworkStaticRoutesModel = require('./Models/CreateNetworkStaticRoutesModel');
const UpdateNetworkStaticRouteModel = require('./Models/UpdateNetworkStaticRouteModel');
const UpdateNetworkUplinkSettingsModel = require('./Models/UpdateNetworkUplinkSettingsModel');
const BandwidthLimits2Model = require('./Models/BandwidthLimits2Model');
const CreateNetworkVlansModel = require('./Models/CreateNetworkVlansModel');
const UpdateNetworkVlanModel = require('./Models/UpdateNetworkVlanModel');
const ReservedIpRangeModel = require('./Models/ReservedIpRangeModel');
const DhcpOptionModel = require('./Models/DhcpOptionModel');
const UpdateNetworkVlansEnabledStateModel = require('./Models/UpdateNetworkVlansEnabledStateModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MerakiDashboardAPILib
    Configuration,
    // controllers of MerakiDashboardAPILib
    AdminsController,
    AlertSettingsController,
    MVSenseController,
    APIUsageController,
    BluetoothClientsController,
    NetworksController,
    CamerasController,
    ClientsController,
    ConfigTemplatesController,
    DevicesController,
    MXCellularFirewallController,
    MXL3FirewallController,
    MXL7ApplicationCategoriesController,
    MXL7FirewallController,
    MXVPNFirewallController,
    MRL3FirewallController,
    GroupPoliciesController,
    HTTPServersController,
    MerakiAuthUsersController,
    OrganizationsController,
    PIIController,
    SAMLRolesController,
    ClientSecurityEventsController,
    MalwareSettingsController,
    NamedTagScopeController,
    SMController,
    SplashLoginAttemptsController,
    SplashSettingsController,
    SsidsController,
    SwitchSettingsController,
    SwitchPortsController,
    SwitchStacksController,
    SyslogServersController,
    ContentFilteringCategoriesController,
    ContentFilteringRulesController,
    FirewalledServicesController,
    MX1ManyNATRulesController,
    MX11NATRulesController,
    MXPortForwardingRulesController,
    StaticRoutesController,
    UplinkSettingsController,
    VlansController,
    WirelessHealthController,
    // models of MerakiDashboardAPILib
    CreateOrganizationAdminsModel,
    TagModel,
    NetworkModel,
    UpdateOrganizationAdminModel,
    UpdateNetworkAlertSettingsModel,
    DefaultDestinationsModel,
    AlertModel,
    UpdateNetworkBluetoothSettingsModel,
    CreateOrganizationNetworksModel,
    UpdateNetworkModel,
    BindNetworkModel,
    UpdateNetworkSiteToSiteVpnModel,
    HubModel,
    SubnetModel,
    SnapshotNetworkCameraModel,
    ProvisionNetworkClientsModel,
    UpdateNetworkClientPolicyModel,
    UpdateNetworkClientSplashAuthorizationStatusModel,
    SsidsModel,
    UpdateNetworkDeviceModel,
    ClaimNetworkDevicesModel,
    BlinkLedsNetworkDeviceModel,
    UpdateNetworkCellularFirewallRulesModel,
    RuleModel,
    UpdateNetworkL3FirewallRulesModel,
    UpdateNetworkL7FirewallRulesModel,
    Rule2Model,
    PolicyEnum,
    TypeEnum,
    UpdateOrganizationVpnFirewallRulesModel,
    Rule3Model,
    UpdateNetworkSsidL3FirewallRulesModel,
    Rule4Model,
    CreateNetworkGroupPoliciesModel,
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
    UpdateNetworkGroupPolicyModel,
    CreateNetworkHttpServersModel,
    UpdateNetworkHttpServerModel,
    CreateNetworkHttpServersWebhookTestsModel,
    CreateOrganizationsModel,
    UpdateOrganizationModel,
    CloneOrganizationModel,
    UpdateOrganizationSnmpModel,
    ClaimOrganizationModel,
    UpdateOrganizationThirdPartyVPNPeersModel,
    PeerModel,
    IpsecPoliciesModel,
    CreateNetworkPiiRequestsModel,
    CreateOrganizationSamlRolesModel,
    Tag2Model,
    Network2Model,
    UpdateOrganizationSamlRoleModel,
    UpdateNetworkSecurityMalwareSettingsModel,
    CreateNetworkSmTargetGroupsModel,
    UpdateNetworkSmTargetGroupModel,
    CreateNetworkSmProfileClarityModel,
    UpdateNetworkSmProfileClarityModel,
    AddNetworkSmProfileClarityModel,
    CreateNetworkSmProfileUmbrellaModel,
    UpdateNetworkSmProfileUmbrellaModel,
    AddNetworkSmProfileUmbrellaModel,
    CreateNetworkSmAppPolarisModel,
    UpdateNetworkSmAppPolariModel,
    UpdateNetworkSmDevicesTagsModel,
    UpdateNetworkSmDeviceFieldsModel,
    UpdateNetworkSmDevicesLockModel,
    UpdateNetworkSmDeviceWipeModel,
    UpdateNetworkSmDevicesCheckinModel,
    UpdateNetworkSmDevicesMoveModel,
    UpdateNetworkSsidsPlashSettingsModel,
    UpdateNetworkSsidModel,
    RadiusServerModel,
    RadiusAccountingServerModel,
    ApTagsAndVlanIdModel,
    UpdateNetworkSwitchSettingsModel,
    PowerExceptionModel,
    UpdateDeviceSwitchPortModel,
    CreateNetworkSwitchStacksModel,
    AddNetworkSwitchStackModel,
    RemoveNetworkSwitchStackModel,
    UpdateNetworkSyslogServersModel,
    ServerModel,
    UpdateNetworkContentFilteringModel,
    UpdateNetworkFirewalledServiceModel,
    UpdateNetworkOneToManyNatRulesModel,
    Rule5Model,
    UpdateNetworkOneToOneNatRulesModel,
    Rule6Model,
    UpdateNetworkPortForwardingRulesModel,
    Rule7Model,
    CreateNetworkStaticRoutesModel,
    UpdateNetworkStaticRouteModel,
    UpdateNetworkUplinkSettingsModel,
    BandwidthLimits2Model,
    CreateNetworkVlansModel,
    UpdateNetworkVlanModel,
    ReservedIpRangeModel,
    DhcpOptionModel,
    UpdateNetworkVlansEnabledStateModel,
    // exceptions of MerakiDashboardAPILib
    APIException,
};

module.exports = initializer;
