# Getting started

The Cisco Meraki Dashboard API is a modern REST API based on the [OpenAPI](https://swagger.io/docs/specification/about/) specification.

## What can the API be used for?
The Dashboard API can be used for many purposes. It’s meant to be an open-ended tool. Here are some examples of use cases:

* Add new organizations, admins, networks, devices, VLANs, and more
* Configure networks at scale
* Automatically on-board and off-board new employees’ teleworker setups
* Build your own dashboard for store managers, field techs, or unique use cases

## Enabling the Dashboard API
1. Begin by logging into [Meraki Dashboard](https://dashboard.meraki.com) and navigating to **Organization > Settings**

2. Locate the section titled **Dashboard API access** and select **Enable Access**, then **Save** your changes

3. After enabling the API, choose your username at the top-right of the Meraki Dashboard and select **my profile**

4. Locate the section titled **Dashboard API access** and select **Generate new API key**

*Note: The API key is associated with a Dashboard administrator account. You can generate, revoke, and regenerate your API key on your profile.*

**Keep your API key safe as it provides authentication to all of your organizations with the API enabled. If your API key is shared, you can regenerate your API key at any time. This will revoke the existing API key.**

Copy and store your API key in a safe place. Dashboard does not store API keys in plaintext for security reasons, so this is the only time you will be able to record it. If you lose or forget your API key, you will have to revoke it and generate a new one.

Every request must specify an API key via a request header.

The API key must be specified in the URL header. The API will return a 404 (rather than a 403) in response to a request with a missing or incorrect API key in order to prevent leaking the existence of resources to unauthorized users.

`X-Cisco-Meraki-API-Key: <secret key>`

Read more about API [authorization](../api/#/python/getting-started/authorizing-your-client)


## Versioning
Once an API version is released, we will make only backwards-compatible changes to it. Backwards-compatible changes include:

* Adding new API resources

* Adding new optional request parameters to existing API methods

* Adding new properties to existing API responses

* Changing the order of properties in existing API responses

## Rate Limit
* The Dashboard API is limited to **5 calls per second**, per organization.
* A burst of 5 additional calls are allowed in the first second, so a maximum of 15 calls in the first 2 seconds.
* The rate limiting technique is based off of the [token bucket model](https://en.wikipedia.org/wiki/Token_bucket).
* An error with a `429` status code will be returned when the rate limit has been exceeded.
* Expect to backoff for 1 - 2 seconds if the limit has been exceeded. You may have to wait potentially longer if a large number of requests were made within this timeframe.


## Additional Details
Identifiers in the API are opaque strings. A `{networkId}`, for example, might be the string “126043”, whereas an `{orderId}` might contain characters, such as “4S1234567”. Client applications must not try to parse them as numbers. Even identifiers that look like numbers might be too long to encode without loss of precision in Javascript, where the only numeric type is IEEE 754 floating point.

Verbs in the API follow the usual REST conventions:

`GET` returns the value of a resource or a list of resources, depending on whether an identifier is specified. For example, a `GET` of `/v0/organizations` returns a list of organizations, whereas a `GET` of `/v0/organizations/{organizationId}` returns a particular organization.

`POST` adds a new resource, as in a `POST` to `/v0/organizations/{organizationId}/admins`, or performs some other non-idempotent change.

`PUT` updates a resource. `PUTs` are idempotent; they update a resource, creating it first if it does not already exist. A `PUT` should specify all the fields of a resource; the API will revert omitted fields to their default value.

`DELETE` removes a resource.


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Meraki-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Meraki-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `Meraki ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Meraki-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Meraki-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Meraki-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Meraki-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Meraki Dashboard APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Meraki%20Dashboard%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| xCiscoMerakiAPIKey | TODO: add a description |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.xCiscoMerakiAPIKey = "xCiscoMerakiAPIKey";

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AdminsController](#admins_controller)
* [AlertSettingsController](#alert_settings_controller)
* [MVSenseController](#mv_sense_controller)
* [APIUsageController](#api_usage_controller)
* [BluetoothClientsController](#bluetooth_clients_controller)
* [NetworksController](#networks_controller)
* [CamerasController](#cameras_controller)
* [ClientsController](#clients_controller)
* [ConfigTemplatesController](#config_templates_controller)
* [DevicesController](#devices_controller)
* [MXCellularFirewallController](#mx_cellular_firewall_controller)
* [MXL3FirewallController](#mxl3_firewall_controller)
* [MXL7ApplicationCategoriesController](#mxl7_application_categories_controller)
* [MXL7FirewallController](#mxl7_firewall_controller)
* [MXVPNFirewallController](#mxvpn_firewall_controller)
* [MRL3FirewallController](#mrl3_firewall_controller)
* [GroupPoliciesController](#group_policies_controller)
* [HTTPServersController](#http_servers_controller)
* [MerakiAuthUsersController](#meraki_auth_users_controller)
* [OrganizationsController](#organizations_controller)
* [PIIController](#pii_controller)
* [SAMLRolesController](#saml_roles_controller)
* [ClientSecurityEventsController](#client_security_events_controller)
* [MalwareSettingsController](#malware_settings_controller)
* [NamedTagScopeController](#named_tag_scope_controller)
* [SMController](#sm_controller)
* [SplashLoginAttemptsController](#splash_login_attempts_controller)
* [SplashSettingsController](#splash_settings_controller)
* [SsidsController](#ssids_controller)
* [SwitchSettingsController](#switch_settings_controller)
* [SwitchPortsController](#switch_ports_controller)
* [SwitchStacksController](#switch_stacks_controller)
* [SyslogServersController](#syslog_servers_controller)
* [ContentFilteringCategoriesController](#content_filtering_categories_controller)
* [ContentFilteringRulesController](#content_filtering_rules_controller)
* [FirewalledServicesController](#firewalled_services_controller)
* [MX1ManyNATRulesController](#mx1_many_nat_rules_controller)
* [MX11NATRulesController](#mx11_nat_rules_controller)
* [MXPortForwardingRulesController](#mx_port_forwarding_rules_controller)
* [StaticRoutesController](#static_routes_controller)
* [UplinkSettingsController](#uplink_settings_controller)
* [VlansController](#vlans_controller)
* [WirelessHealthController](#wireless_health_controller)

## <a name="admins_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AdminsController") AdminsController

### Get singleton instance

The singleton instance of the ``` AdminsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AdminsController;
```

### <a name="get_organization_admins"></a>![Method: ](https://apidocs.io/img/method.png ".AdminsController.getOrganizationAdmins") getOrganizationAdmins

> List the dashboard administrators in this organization


```javascript
function getOrganizationAdmins(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationAdmins(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_admins"></a>![Method: ](https://apidocs.io/img/method.png ".AdminsController.createOrganizationAdmins") createOrganizationAdmins

> Create a new dashboard administrator


```javascript
function createOrganizationAdmins(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationAdmins |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['createOrganizationAdmins'] = new CreateOrganizationAdminsModel({"key":"value"});

    controller.createOrganizationAdmins(input, function(error, response, context) {

    
    });
```



### <a name="update_organization_admin"></a>![Method: ](https://apidocs.io/img/method.png ".AdminsController.updateOrganizationAdmin") updateOrganizationAdmin

> Update an administrator


```javascript
function updateOrganizationAdmin(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationAdmin |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';
        input['updateOrganizationAdmin'] = new UpdateOrganizationAdminModel({"key":"value"});

    controller.updateOrganizationAdmin(input, function(error, response, context) {

    
    });
```



### <a name="delete_organization_admin"></a>![Method: ](https://apidocs.io/img/method.png ".AdminsController.deleteOrganizationAdmin") deleteOrganizationAdmin

> Revoke all access for a dashboard administrator within this organization


```javascript
function deleteOrganizationAdmin(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';

    controller.deleteOrganizationAdmin(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="alert_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AlertSettingsController") AlertSettingsController

### Get singleton instance

The singleton instance of the ``` AlertSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AlertSettingsController;
```

### <a name="get_network_alert_settings"></a>![Method: ](https://apidocs.io/img/method.png ".AlertSettingsController.getNetworkAlertSettings") getNetworkAlertSettings

> Return the alert configuration for this network


```javascript
function getNetworkAlertSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkAlertSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_alert_settings"></a>![Method: ](https://apidocs.io/img/method.png ".AlertSettingsController.updateNetworkAlertSettings") updateNetworkAlertSettings

> Update the alert configuration for this network


```javascript
function updateNetworkAlertSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkAlertSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkAlertSettings'] = new UpdateNetworkAlertSettingsModel({"key":"value"});

    controller.updateNetworkAlertSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mv_sense_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MVSenseController") MVSenseController

### Get singleton instance

The singleton instance of the ``` MVSenseController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MVSenseController;
```

### <a name="get_device_camera_analytics_zones"></a>![Method: ](https://apidocs.io/img/method.png ".MVSenseController.getDeviceCameraAnalyticsZones") getDeviceCameraAnalyticsZones

> Returns all configured analytic zones for this camera


```javascript
function getDeviceCameraAnalyticsZones(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraAnalyticsZones(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_recent"></a>![Method: ](https://apidocs.io/img/method.png ".MVSenseController.getDeviceCameraAnalyticsRecent") getDeviceCameraAnalyticsRecent

> Returns most recent record for analytics zones


```javascript
function getDeviceCameraAnalyticsRecent(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraAnalyticsRecent(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_live"></a>![Method: ](https://apidocs.io/img/method.png ".MVSenseController.getDeviceCameraAnalyticsLive") getDeviceCameraAnalyticsLive

> Returns live state from camera of analytics zones


```javascript
function getDeviceCameraAnalyticsLive(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraAnalyticsLive(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_overview"></a>![Method: ](https://apidocs.io/img/method.png ".MVSenseController.getDeviceCameraAnalyticsOverview") getDeviceCameraAnalyticsOverview

> Returns an overview of aggregate analytics data for a timespan


```javascript
function getDeviceCameraAnalyticsOverview(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 194;

    controller.getDeviceCameraAnalyticsOverview(input, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_zone_history"></a>![Method: ](https://apidocs.io/img/method.png ".MVSenseController.getDeviceCameraAnalyticsZoneHistory") getDeviceCameraAnalyticsZoneHistory

> Return historical records for analytic zones


```javascript
function getDeviceCameraAnalyticsZoneHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| zoneId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['zoneId'] = 'zoneId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 194;
        input['resolution'] = 194;

    controller.getDeviceCameraAnalyticsZoneHistory(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="api_usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIUsageController") APIUsageController

### Get singleton instance

The singleton instance of the ``` APIUsageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIUsageController;
```

### <a name="get_organization_api_requests"></a>![Method: ](https://apidocs.io/img/method.png ".APIUsageController.getOrganizationApiRequests") getOrganizationApiRequests

> List the API requests made by an organization


```javascript
function getOrganizationApiRequests(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| adminId |  ``` Optional ```  | Filter the results by the ID of the admin who made the API requests |
| path |  ``` Optional ```  | Filter the results by the path of the API requests |
| method |  ``` Optional ```  | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE') |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 194;
        input['perPage'] = 194;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';
        input['adminId'] = 'adminId';
        input['path'] = 'path';
        input['method'] = 'method';

    controller.getOrganizationApiRequests(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="bluetooth_clients_controller"></a>![Class: ](https://apidocs.io/img/class.png ".BluetoothClientsController") BluetoothClientsController

### Get singleton instance

The singleton instance of the ``` BluetoothClientsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.BluetoothClientsController;
```

### <a name="get_network_bluetooth_client"></a>![Method: ](https://apidocs.io/img/method.png ".BluetoothClientsController.getNetworkBluetoothClient") getNetworkBluetoothClient

> Return a Bluetooth client


```javascript
function getNetworkBluetoothClient(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| includeConnectivityHistory |  ``` Optional ```  | Include the connectivity history for this client |
| connectivityHistoryTimespan |  ``` Optional ```  | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';
        input['includeConnectivityHistory'] = 'includeConnectivityHistory';
        input['connectivityHistoryTimespan'] = 'connectivityHistoryTimespan';

    controller.getNetworkBluetoothClient(input, function(error, response, context) {

    
    });
```



### <a name="get_network_bluetooth_clients"></a>![Method: ](https://apidocs.io/img/method.png ".BluetoothClientsController.getNetworkBluetoothClients") getNetworkBluetoothClients

> List the Bluetooth clients seen by APs in this network


```javascript
function getNetworkBluetoothClients(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| timespan |  ``` Optional ```  | The timespan, in seconds, used to look back from now for bluetooth clients |
| includeConnectivityHistory |  ``` Optional ```  | Include the connectivity history for this client |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['perPage'] = 194;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';
        input['timespan'] = 'timespan';
        input['includeConnectivityHistory'] = 'includeConnectivityHistory';

    controller.getNetworkBluetoothClients(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="networks_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NetworksController") NetworksController

### Get singleton instance

The singleton instance of the ``` NetworksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NetworksController;
```

### <a name="get_network_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkBluetoothSettings") getNetworkBluetoothSettings

> Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.


```javascript
function getNetworkBluetoothSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkBluetoothSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkBluetoothSettings") updateNetworkBluetoothSettings

> Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.


```javascript
function updateNetworkBluetoothSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkBluetoothSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkBluetoothSettings'] = new UpdateNetworkBluetoothSettingsModel({"key":"value"});

    controller.updateNetworkBluetoothSettings(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_networks"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getOrganizationNetworks") getOrganizationNetworks

> List the networks in an organization


```javascript
function getOrganizationNetworks(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Optional ```  | An optional parameter that is the ID of a config template. Will return all networks bound to that template. |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['configTemplateId'] = 'configTemplateId';

    controller.getOrganizationNetworks(input, function(error, response, context) {

    
    });
```



### <a name="create_organization_networks"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createOrganizationNetworks") createOrganizationNetworks

> Create a network


```javascript
function createOrganizationNetworks(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationNetworks |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['createOrganizationNetworks'] = new CreateOrganizationNetworksModel({"key":"value"});

    controller.createOrganizationNetworks(input, function(error, response, context) {

    
    });
```



### <a name="get_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetwork") getNetwork

> Return a network


```javascript
function getNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetwork") updateNetwork

> Update a network


```javascript
function updateNetwork(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetwork |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetwork'] = new UpdateNetworkModel({"key":"value"});

    controller.updateNetwork(input, function(error, response, context) {

    
    });
```



### <a name="delete_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetwork") deleteNetwork

> Delete a network


```javascript
function deleteNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.deleteNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="bind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.bindNetwork") bindNetwork

> Bind a network to a template.


```javascript
function bindNetwork(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| bindNetwork |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['bindNetwork'] = new BindNetworkModel({"key":"value"});

    controller.bindNetwork(input, function(error, response, context) {

    
    });
```



### <a name="unbind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.unbindNetwork") unbindNetwork

> Unbind a network from a template.


```javascript
function unbindNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.unbindNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTraffic") getNetworkTraffic

> The traffic analysis data for this network.
> <a href="https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility">Traffic Analysis with Hostname Visibility</a> must be enabled on the network.
> 


```javascript
function getNetworkTraffic(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| timespan |  ``` Required ```  | The timespan for the data. Must be an integer representing a duration in seconds between two hours and one month. (Mandatory.) |
| deviceType |  ``` Optional ```  | Filter the data by device type: combined (default), wireless, switch, appliance. When using combined, for each rule the data will come from the device type with the most usage. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['timespan'] = 'timespan';
        input['deviceType'] = 'deviceType';

    controller.getNetworkTraffic(input, function(error, response, context) {

    
    });
```



### <a name="get_network_access_policies"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkAccessPolicies") getNetworkAccessPolicies

> List the access policies for this network. Only valid for MS networks.


```javascript
function getNetworkAccessPolicies(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkAccessPolicies(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_air_marshal"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkAirMarshal") getNetworkAirMarshal

> List Air Marshal scan results from a network


```javascript
function getNetworkAirMarshal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['timespan'] = 194;

    controller.getNetworkAirMarshal(input, function(error, response, context) {

    
    });
```



### <a name="get_network_site_to_site_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSiteToSiteVpn") getNetworkSiteToSiteVpn

> Return the site-to-site VPN settings of a network. Only valid for MX networks.


```javascript
function getNetworkSiteToSiteVpn(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSiteToSiteVpn(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_site_to_site_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkSiteToSiteVpn") updateNetworkSiteToSiteVpn

> Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.


```javascript
function updateNetworkSiteToSiteVpn(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSiteToSiteVpn |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkSiteToSiteVpn'] = new UpdateNetworkSiteToSiteVpnModel({"key":"value"});

    controller.updateNetworkSiteToSiteVpn(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="cameras_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CamerasController") CamerasController

### Get singleton instance

The singleton instance of the ``` CamerasController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CamerasController;
```

### <a name="get_network_camera_video_link"></a>![Method: ](https://apidocs.io/img/method.png ".CamerasController.getNetworkCameraVideoLink") getNetworkCameraVideoLink

> Returns video link for the specified camera. If a timestamp supplied, it links to that time.


```javascript
function getNetworkCameraVideoLink(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| timestamp |  ``` Optional ```  | The video link will start at this timestamp. The timestamp is in UNIX Epoch time (milliseconds). |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['timestamp'] = 'timestamp';

    controller.getNetworkCameraVideoLink(input, function(error, response, context) {

    
    });
```



### <a name="snapshot_network_camera"></a>![Method: ](https://apidocs.io/img/method.png ".CamerasController.snapshotNetworkCamera") snapshotNetworkCamera

> Generate a snapshot of what the camera sees at the specified time and return a link to that image.


```javascript
function snapshotNetworkCamera(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| snapshotNetworkCamera |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['snapshotNetworkCamera'] = new SnapshotNetworkCameraModel({"key":"value"});

    controller.snapshotNetworkCamera(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="clients_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ClientsController") ClientsController

### Get singleton instance

The singleton instance of the ``` ClientsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ClientsController;
```

### <a name="get_network_client"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClient") getNetworkClient

> Return the client associated with the given identifier. This endpoint will lookup by client ID or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClient(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['idOrMacOrIp'] = 'idOrMacOrIp';

    controller.getNetworkClient(input, function(error, response, context) {

    
    });
```



### <a name="provision_network_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.provisionNetworkClients") provisionNetworkClients

> Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.


```javascript
function provisionNetworkClients(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| provisionNetworkClients |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['provisionNetworkClients'] = new ProvisionNetworkClientsModel({"key":"value"});

    controller.provisionNetworkClients(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientUsageHistory") getNetworkClientUsageHistory

> Return the client's daily usage history. Usage data is in kilobytes.


```javascript
function getNetworkClientUsageHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['idOrMacOrIp'] = 'idOrMacOrIp';

    controller.getNetworkClientUsageHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_policy"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientPolicy") getNetworkClientPolicy

> Return the policy assigned to a client on the network.


```javascript
function getNetworkClientPolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| mac |  ``` Required ```  | TODO: Add a parameter description |
| timespan |  ``` Optional ```  | The timespan for which clients will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds). |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['mac'] = 'mac';
        input['timespan'] = 'timespan';

    controller.getNetworkClientPolicy(input, function(error, response, context) {

    
    });
```



### <a name="update_network_client_policy"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.updateNetworkClientPolicy") updateNetworkClientPolicy

> Update the policy assigned to a client on the network.


```javascript
function updateNetworkClientPolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| mac |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkClientPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['mac'] = 'mac';
        input['updateNetworkClientPolicy'] = new UpdateNetworkClientPolicyModel({"key":"value"});

    controller.updateNetworkClientPolicy(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_splash_authorization_status"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientSplashAuthorizationStatus") getNetworkClientSplashAuthorizationStatus

> Return the splash authorization for a client, for each SSID they've associated with through splash.


```javascript
function getNetworkClientSplashAuthorizationStatus(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| mac |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['mac'] = 'mac';

    controller.getNetworkClientSplashAuthorizationStatus(input, function(error, response, context) {

    
    });
```



### <a name="update_network_client_splash_authorization_status"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.updateNetworkClientSplashAuthorizationStatus") updateNetworkClientSplashAuthorizationStatus

> Update a client's splash authorization.


```javascript
function updateNetworkClientSplashAuthorizationStatus(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| mac |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkClientSplashAuthorizationStatus |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['mac'] = 'mac';
        input['updateNetworkClientSplashAuthorizationStatus'] = new UpdateNetworkClientSplashAuthorizationStatusModel({"key":"value"});

    controller.updateNetworkClientSplashAuthorizationStatus(input, function(error, response, context) {

    
    });
```



### <a name="get_device_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getDeviceClients") getDeviceClients

> List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.


```javascript
function getDeviceClients(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['t0'] = 't0';
        input['timespan'] = 194;

    controller.getDeviceClients(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_traffic_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientTrafficHistory") getNetworkClientTrafficHistory

> Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page.


```javascript
function getNetworkClientTrafficHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['idOrMacOrIp'] = 'idOrMacOrIp';
        input['perPage'] = 194;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientTrafficHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_events"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientEvents") getNetworkClientEvents

> Return the events associated with this client


```javascript
function getNetworkClientEvents(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 100. Default is 100. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['idOrMacOrIp'] = 'idOrMacOrIp';
        input['perPage'] = 194;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientEvents(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientLatencyHistory") getNetworkClientLatencyHistory

> Return the latency history for a client. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.


```javascript
function getNetworkClientLatencyHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 791 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['idOrMacOrIp'] = 'idOrMacOrIp';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 194;
        input['resolution'] = 194;

    controller.getNetworkClientLatencyHistory(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="config_templates_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ConfigTemplatesController") ConfigTemplatesController

### Get singleton instance

The singleton instance of the ``` ConfigTemplatesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ConfigTemplatesController;
```

### <a name="get_organization_config_templates"></a>![Method: ](https://apidocs.io/img/method.png ".ConfigTemplatesController.getOrganizationConfigTemplates") getOrganizationConfigTemplates

> List the configuration templates for this organization


```javascript
function getOrganizationConfigTemplates(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationConfigTemplates(organizationId, function(error, response, context) {

    
    });
```



### <a name="delete_organization_config_template"></a>![Method: ](https://apidocs.io/img/method.png ".ConfigTemplatesController.deleteOrganizationConfigTemplate") deleteOrganizationConfigTemplate

> Remove a configuration template


```javascript
function deleteOrganizationConfigTemplate(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';

    controller.deleteOrganizationConfigTemplate(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="devices_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DevicesController") DevicesController

### Get singleton instance

The singleton instance of the ``` DevicesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DevicesController;
```

### <a name="get_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDevices") getNetworkDevices

> List the devices in a network


```javascript
function getNetworkDevices(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkDevices(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDevice") getNetworkDevice

> Return a single device


```javascript
function getNetworkDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';

    controller.getNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="update_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.updateNetworkDevice") updateNetworkDevice

> Update the attributes of a device


```javascript
function updateNetworkDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkDevice |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['updateNetworkDevice'] = new UpdateNetworkDeviceModel({"key":"value"});

    controller.updateNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_performance"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDevicePerformance") getNetworkDevicePerformance

> Return the performance score for a single device. Only primary MX devices supported. If no data is available, a 204 error code is returned.


```javascript
function getNetworkDevicePerformance(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';

    controller.getNetworkDevicePerformance(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_uplink"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDeviceUplink") getNetworkDeviceUplink

> Return the uplink information for a device.


```javascript
function getNetworkDeviceUplink(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';

    controller.getNetworkDeviceUplink(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_lldp_cdp"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDeviceLldpCdp") getNetworkDeviceLldpCdp

> List LLDP and CDP information for a device


```javascript
function getNetworkDeviceLldpCdp(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| timespan |  ``` Optional ```  | The timespan for which LLDP and CDP information will be fetched. Must be in seconds and less than or equal to a month (2592000 seconds). LLDP and CDP information is sent to the Meraki dashboard every 10 minutes. In instances where this LLDP and CDP information matches an existing entry in the Meraki dashboard, the data is updated once every two hours. Meraki recommends querying LLDP and CDP information at an interval slightly greater than two hours, to ensure that unchanged CDP / LLDP information can be queried consistently. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['timespan'] = 'timespan';

    controller.getNetworkDeviceLldpCdp(input, function(error, response, context) {

    
    });
```



### <a name="claim_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.claimNetworkDevices") claimNetworkDevices

> Claim a device into a network


```javascript
function claimNetworkDevices(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| claimNetworkDevices |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['claimNetworkDevices'] = new ClaimNetworkDevicesModel({"key":"value"});

    controller.claimNetworkDevices(input, function(error, response, context) {

    
    });
```



### <a name="remove_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.removeNetworkDevice") removeNetworkDevice

> Remove a single device


```javascript
function removeNetworkDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';

    controller.removeNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_loss_and_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDeviceLossAndLatencyHistory") getNetworkDeviceLossAndLatencyHistory

> Get the uplink loss percentage and latency in milliseconds for a wired network device.


```javascript
function getNetworkDeviceLossAndLatencyHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| ip |  ``` Required ```  | The destination IP used to obtain the requested stats. This is required. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. |
| uplink |  ``` Optional ```  | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['ip'] = 'ip';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 31;
        input['resolution'] = 31;
        input['uplink'] = 'uplink';

    controller.getNetworkDeviceLossAndLatencyHistory(input, function(error, response, context) {

    
    });
```



### <a name="reboot_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.rebootNetworkDevice") rebootNetworkDevice

> Reboot a device


```javascript
function rebootNetworkDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';

    controller.rebootNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="blink_leds_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.blinkLedsNetworkDevice") blinkLedsNetworkDevice

> Blink the LEDs on a device


```javascript
function blinkLedsNetworkDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| blinkLedsNetworkDevice |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['blinkLedsNetworkDevice'] = new BlinkLedsNetworkDeviceModel({"key":"value"});

    controller.blinkLedsNetworkDevice(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mx_cellular_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXCellularFirewallController") MXCellularFirewallController

### Get singleton instance

The singleton instance of the ``` MXCellularFirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXCellularFirewallController;
```

### <a name="get_network_cellular_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXCellularFirewallController.getNetworkCellularFirewallRules") getNetworkCellularFirewallRules

> Return the cellular firewall rules for an MX network


```javascript
function getNetworkCellularFirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCellularFirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_cellular_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXCellularFirewallController.updateNetworkCellularFirewallRules") updateNetworkCellularFirewallRules

> Update the cellular firewall rules of an MX network


```javascript
function updateNetworkCellularFirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCellularFirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkCellularFirewallRules'] = new UpdateNetworkCellularFirewallRulesModel({"key":"value"});

    controller.updateNetworkCellularFirewallRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mxl3_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXL3FirewallController") MXL3FirewallController

### Get singleton instance

The singleton instance of the ``` MXL3FirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXL3FirewallController;
```

### <a name="get_network_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXL3FirewallController.getNetworkL3FirewallRules") getNetworkL3FirewallRules

> Return the L3 firewall rules for an MX network


```javascript
function getNetworkL3FirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkL3FirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXL3FirewallController.updateNetworkL3FirewallRules") updateNetworkL3FirewallRules

> Update the L3 firewall rules of an MX network


```javascript
function updateNetworkL3FirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkL3FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkL3FirewallRules'] = new UpdateNetworkL3FirewallRulesModel({"key":"value"});

    controller.updateNetworkL3FirewallRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mxl7_application_categories_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXL7ApplicationCategoriesController") MXL7ApplicationCategoriesController

### Get singleton instance

The singleton instance of the ``` MXL7ApplicationCategoriesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXL7ApplicationCategoriesController;
```

### <a name="get_network_l7_firewall_rules_application_categories"></a>![Method: ](https://apidocs.io/img/method.png ".MXL7ApplicationCategoriesController.getNetworkL7FirewallRulesApplicationCategories") getNetworkL7FirewallRulesApplicationCategories

> Return the L7 firewall application categories and their associated applications for an MX network


```javascript
function getNetworkL7FirewallRulesApplicationCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkL7FirewallRulesApplicationCategories(networkId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mxl7_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXL7FirewallController") MXL7FirewallController

### Get singleton instance

The singleton instance of the ``` MXL7FirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXL7FirewallController;
```

### <a name="get_network_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXL7FirewallController.getNetworkL7FirewallRules") getNetworkL7FirewallRules

> List the MX L7 firewall rules for an MX network


```javascript
function getNetworkL7FirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkL7FirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXL7FirewallController.updateNetworkL7FirewallRules") updateNetworkL7FirewallRules

> Update the MX L7 firewall rules for an MX network


```javascript
function updateNetworkL7FirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkL7FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkL7FirewallRules'] = new UpdateNetworkL7FirewallRulesModel({"key":"value"});

    controller.updateNetworkL7FirewallRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mxvpn_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXVPNFirewallController") MXVPNFirewallController

### Get singleton instance

The singleton instance of the ``` MXVPNFirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXVPNFirewallController;
```

### <a name="get_organization_vpn_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXVPNFirewallController.getOrganizationVpnFirewallRules") getOrganizationVpnFirewallRules

> Return the firewall rules for an organization's site-to-site VPN


```javascript
function getOrganizationVpnFirewallRules(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationVpnFirewallRules(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_vpn_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXVPNFirewallController.updateOrganizationVpnFirewallRules") updateOrganizationVpnFirewallRules

> Update the firewall rules of an organization's site-to-site VPN


```javascript
function updateOrganizationVpnFirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationVpnFirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['updateOrganizationVpnFirewallRules'] = new UpdateOrganizationVpnFirewallRulesModel({"key":"value"});

    controller.updateOrganizationVpnFirewallRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mrl3_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MRL3FirewallController") MRL3FirewallController

### Get singleton instance

The singleton instance of the ``` MRL3FirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MRL3FirewallController;
```

### <a name="get_network_ssid_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MRL3FirewallController.getNetworkSsidL3FirewallRules") getNetworkSsidL3FirewallRules

> Return the L3 firewall rules for an SSID on an MR network


```javascript
function getNetworkSsidL3FirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';

    controller.getNetworkSsidL3FirewallRules(input, function(error, response, context) {

    
    });
```



### <a name="update_network_ssid_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MRL3FirewallController.updateNetworkSsidL3FirewallRules") updateNetworkSsidL3FirewallRules

> Update the L3 firewall rules of an SSID on an MR network


```javascript
function updateNetworkSsidL3FirewallRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSsidL3FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';
        input['updateNetworkSsidL3FirewallRules'] = new UpdateNetworkSsidL3FirewallRulesModel({"key":"value"});

    controller.updateNetworkSsidL3FirewallRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="group_policies_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GroupPoliciesController") GroupPoliciesController

### Get singleton instance

The singleton instance of the ``` GroupPoliciesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GroupPoliciesController;
```

### <a name="get_network_group_policies"></a>![Method: ](https://apidocs.io/img/method.png ".GroupPoliciesController.getNetworkGroupPolicies") getNetworkGroupPolicies

> List the group policies in a network


```javascript
function getNetworkGroupPolicies(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkGroupPolicies(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_group_policies"></a>![Method: ](https://apidocs.io/img/method.png ".GroupPoliciesController.createNetworkGroupPolicies") createNetworkGroupPolicies

> Create a group policy


```javascript
function createNetworkGroupPolicies(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkGroupPolicies |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkGroupPolicies'] = new CreateNetworkGroupPoliciesModel({"key":"value"});

    controller.createNetworkGroupPolicies(input, function(error, response, context) {

    
    });
```



### <a name="get_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".GroupPoliciesController.getNetworkGroupPolicy") getNetworkGroupPolicy

> Display a group policy


```javascript
function getNetworkGroupPolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['groupPolicyId'] = 'groupPolicyId';

    controller.getNetworkGroupPolicy(input, function(error, response, context) {

    
    });
```



### <a name="update_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".GroupPoliciesController.updateNetworkGroupPolicy") updateNetworkGroupPolicy

> Update a group policy


```javascript
function updateNetworkGroupPolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkGroupPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['groupPolicyId'] = 'groupPolicyId';
        input['updateNetworkGroupPolicy'] = new UpdateNetworkGroupPolicyModel({"key":"value"});

    controller.updateNetworkGroupPolicy(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".GroupPoliciesController.deleteNetworkGroupPolicy") deleteNetworkGroupPolicy

> Delete a group policy


```javascript
function deleteNetworkGroupPolicy(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['groupPolicyId'] = 'groupPolicyId';

    controller.deleteNetworkGroupPolicy(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="http_servers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".HTTPServersController") HTTPServersController

### Get singleton instance

The singleton instance of the ``` HTTPServersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.HTTPServersController;
```

### <a name="get_network_http_servers"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.getNetworkHttpServers") getNetworkHttpServers

> List the HTTP servers for a network


```javascript
function getNetworkHttpServers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkHttpServers(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_http_servers"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.createNetworkHttpServers") createNetworkHttpServers

> Add an HTTP server


```javascript
function createNetworkHttpServers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkHttpServers |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkHttpServers'] = new CreateNetworkHttpServersModel({"key":"value"});

    controller.createNetworkHttpServers(input, function(error, response, context) {

    
    });
```



### <a name="get_network_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.getNetworkHttpServer") getNetworkHttpServer

> Return an HTTP server


```javascript
function getNetworkHttpServer(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.getNetworkHttpServer(input, function(error, response, context) {

    
    });
```



### <a name="update_network_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.updateNetworkHttpServer") updateNetworkHttpServer

> Update an HTTP server


```javascript
function updateNetworkHttpServer(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkHttpServer |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';
        input['updateNetworkHttpServer'] = new UpdateNetworkHttpServerModel({"key":"value"});

    controller.updateNetworkHttpServer(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.deleteNetworkHttpServer") deleteNetworkHttpServer

> Delete an HTTP server


```javascript
function deleteNetworkHttpServer(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.deleteNetworkHttpServer(input, function(error, response, context) {

    
    });
```



### <a name="create_network_http_servers_webhook_tests"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.createNetworkHttpServersWebhookTests") createNetworkHttpServersWebhookTests

> Send a test webhook


```javascript
function createNetworkHttpServersWebhookTests(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkHttpServersWebhookTests |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkHttpServersWebhookTests'] = new CreateNetworkHttpServersWebhookTestsModel({"key":"value"});

    controller.createNetworkHttpServersWebhookTests(input, function(error, response, context) {

    
    });
```



### <a name="get_network_http_servers_webhook_test"></a>![Method: ](https://apidocs.io/img/method.png ".HTTPServersController.getNetworkHttpServersWebhookTest") getNetworkHttpServersWebhookTest

> Return the status of a webhook test


```javascript
function getNetworkHttpServersWebhookTest(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.getNetworkHttpServersWebhookTest(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="meraki_auth_users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MerakiAuthUsersController") MerakiAuthUsersController

### Get singleton instance

The singleton instance of the ``` MerakiAuthUsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MerakiAuthUsersController;
```

### <a name="get_network_meraki_auth_users"></a>![Method: ](https://apidocs.io/img/method.png ".MerakiAuthUsersController.getNetworkMerakiAuthUsers") getNetworkMerakiAuthUsers

> List the splash or RADIUS users configured under Meraki Authentication for a network


```javascript
function getNetworkMerakiAuthUsers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkMerakiAuthUsers(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_meraki_auth_user"></a>![Method: ](https://apidocs.io/img/method.png ".MerakiAuthUsersController.getNetworkMerakiAuthUser") getNetworkMerakiAuthUser

> Return the Meraki Auth splash or RADIUS user


```javascript
function getNetworkMerakiAuthUser(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.getNetworkMerakiAuthUser(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organizations_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationsController") OrganizationsController

### Get singleton instance

The singleton instance of the ``` OrganizationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationsController;
```

### <a name="get_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizations") getOrganizations

> List the organizations that the user has privileges on


```javascript
function getOrganizations(callback)
```

#### Example Usage

```javascript


    controller.getOrganizations(function(error, response, context) {

    
    });
```



### <a name="create_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizations") createOrganizations

> Create a new organization


```javascript
function createOrganizations(createOrganizations, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| createOrganizations |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var createOrganizations = new CreateOrganizationsModel({"key":"value"});

    controller.createOrganizations(createOrganizations, function(error, response, context) {

    
    });
```



### <a name="get_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganization") getOrganization

> Return an organization


```javascript
function getOrganization(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganization(id, function(error, response, context) {

    
    });
```



### <a name="update_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganization") updateOrganization

> Update an organization


```javascript
function updateOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganization |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['updateOrganization'] = new UpdateOrganizationModel({"key":"value"});

    controller.updateOrganization(input, function(error, response, context) {

    
    });
```



### <a name="clone_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.cloneOrganization") cloneOrganization

> Create a new organization by cloning the addressed organization


```javascript
function cloneOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| cloneOrganization |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['cloneOrganization'] = new CloneOrganizationModel({"key":"value"});

    controller.cloneOrganization(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_license_state"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLicenseState") getOrganizationLicenseState

> Return the license state for an organization


```javascript
function getOrganizationLicenseState(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganizationLicenseState(id, function(error, response, context) {

    
    });
```



### <a name="get_organization_inventory"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationInventory") getOrganizationInventory

> Return the inventory for an organization


```javascript
function getOrganizationInventory(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganizationInventory(id, function(error, response, context) {

    
    });
```



### <a name="get_organization_device_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationDeviceStatuses") getOrganizationDeviceStatuses

> List the status of every Meraki device in the organization


```javascript
function getOrganizationDeviceStatuses(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganizationDeviceStatuses(id, function(error, response, context) {

    
    });
```



### <a name="get_organization_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSnmp") getOrganizationSnmp

> Return the SNMP settings for an organization


```javascript
function getOrganizationSnmp(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganizationSnmp(id, function(error, response, context) {

    
    });
```



### <a name="update_organization_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationSnmp") updateOrganizationSnmp

> Update the SNMP settings for an organization


```javascript
function updateOrganizationSnmp(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSnmp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['updateOrganizationSnmp'] = new UpdateOrganizationSnmpModel({"key":"value"});

    controller.updateOrganizationSnmp(input, function(error, response, context) {

    
    });
```



### <a name="claim_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.claimOrganization") claimOrganization

> Claim a device, license key, or order into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. These three types of claims are mutually exclusive and cannot be performed in one request.


```javascript
function claimOrganization(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| claimOrganization |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['claimOrganization'] = new ClaimOrganizationModel({"key":"value"});

    controller.claimOrganization(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_uplinks_loss_and_latency"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationUplinksLossAndLatency") getOrganizationUplinksLossAndLatency

> Return the uplink loss and latency for every MX in the organization from 2 - 7 minutes ago


```javascript
function getOrganizationUplinksLossAndLatency(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| uplink |  ``` Optional ```  | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. |
| ip |  ``` Optional ```  | Optional filter for a specific destination IP. Default will return all destination IPs. |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['uplink'] = 'uplink';
        input['ip'] = 'ip';

    controller.getOrganizationUplinksLossAndLatency(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationThirdPartyVPNPeers") getOrganizationThirdPartyVPNPeers

> Return the third party VPN peers for an organization


```javascript
function getOrganizationThirdPartyVPNPeers(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationThirdPartyVPNPeers(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationThirdPartyVPNPeers") updateOrganizationThirdPartyVPNPeers

> Update the third party VPN peers for an organization


```javascript
function updateOrganizationThirdPartyVPNPeers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationThirdPartyVPNPeers |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['updateOrganizationThirdPartyVPNPeers'] = new UpdateOrganizationThirdPartyVPNPeersModel({"key":"value"});

    controller.updateOrganizationThirdPartyVPNPeers(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="pii_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PIIController") PIIController

### Get singleton instance

The singleton instance of the ``` PIIController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PIIController;
```

### <a name="get_network_pii_pii_keys"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.getNetworkPiiPiiKeys") getNetworkPiiPiiKeys

> List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/piiKeys
> ```


```javascript
function getNetworkPiiPiiKeys(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['username'] = 'username';
        input['email'] = 'email';
        input['mac'] = 'mac';
        input['serial'] = 'serial';
        input['imei'] = 'imei';
        input['bluetoothMac'] = 'bluetoothMac';

    controller.getNetworkPiiPiiKeys(input, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_sm_devices_for_key"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.getNetworkPiiSmDevicesForKey") getNetworkPiiSmDevicesForKey

> Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/smDevicesForKey
> ```


```javascript
function getNetworkPiiSmDevicesForKey(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['username'] = 'username';
        input['email'] = 'email';
        input['mac'] = 'mac';
        input['serial'] = 'serial';
        input['imei'] = 'imei';
        input['bluetoothMac'] = 'bluetoothMac';

    controller.getNetworkPiiSmDevicesForKey(input, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_sm_owners_for_key"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.getNetworkPiiSmOwnersForKey") getNetworkPiiSmOwnersForKey

> Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/smOwnersForKey
> ```


```javascript
function getNetworkPiiSmOwnersForKey(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['username'] = 'username';
        input['email'] = 'email';
        input['mac'] = 'mac';
        input['serial'] = 'serial';
        input['imei'] = 'imei';
        input['bluetoothMac'] = 'bluetoothMac';

    controller.getNetworkPiiSmOwnersForKey(input, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_requests"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.getNetworkPiiRequests") getNetworkPiiRequests

> List the PII requests for this network or organization
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests
> ```


```javascript
function getNetworkPiiRequests(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPiiRequests(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_pii_requests"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.createNetworkPiiRequests") createNetworkPiiRequests

> Submit a new delete or restrict processing PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests
> ```


```javascript
function createNetworkPiiRequests(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPiiRequests |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkPiiRequests'] = new CreateNetworkPiiRequestsModel({"key":"value"});

    controller.createNetworkPiiRequests(input, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_request"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.getNetworkPiiRequest") getNetworkPiiRequest

> Return a PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests/{id}
> ```


```javascript
function getNetworkPiiRequest(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.getNetworkPiiRequest(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_pii_request"></a>![Method: ](https://apidocs.io/img/method.png ".PIIController.deleteNetworkPiiRequest") deleteNetworkPiiRequest

> Delete a restrict processing PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests/{id}
> ```


```javascript
function deleteNetworkPiiRequest(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';

    controller.deleteNetworkPiiRequest(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="saml_roles_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SAMLRolesController") SAMLRolesController

### Get singleton instance

The singleton instance of the ``` SAMLRolesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SAMLRolesController;
```

### <a name="get_organization_saml_roles"></a>![Method: ](https://apidocs.io/img/method.png ".SAMLRolesController.getOrganizationSamlRoles") getOrganizationSamlRoles

> List the SAML roles for this organization


```javascript
function getOrganizationSamlRoles(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSamlRoles(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_saml_roles"></a>![Method: ](https://apidocs.io/img/method.png ".SAMLRolesController.createOrganizationSamlRoles") createOrganizationSamlRoles

> Create a SAML role


```javascript
function createOrganizationSamlRoles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationSamlRoles |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['createOrganizationSamlRoles'] = new CreateOrganizationSamlRolesModel({"key":"value"});

    controller.createOrganizationSamlRoles(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".SAMLRolesController.getOrganizationSamlRole") getOrganizationSamlRole

> Return a SAML role


```javascript
function getOrganizationSamlRole(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';

    controller.getOrganizationSamlRole(input, function(error, response, context) {

    
    });
```



### <a name="update_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".SAMLRolesController.updateOrganizationSamlRole") updateOrganizationSamlRole

> Update a SAML role


```javascript
function updateOrganizationSamlRole(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSamlRole |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';
        input['updateOrganizationSamlRole'] = new UpdateOrganizationSamlRoleModel({"key":"value"});

    controller.updateOrganizationSamlRole(input, function(error, response, context) {

    
    });
```



### <a name="delete_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".SAMLRolesController.deleteOrganizationSamlRole") deleteOrganizationSamlRole

> Remove a SAML role


```javascript
function deleteOrganizationSamlRole(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';

    controller.deleteOrganizationSamlRole(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="client_security_events_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ClientSecurityEventsController") ClientSecurityEventsController

### Get singleton instance

The singleton instance of the ``` ClientSecurityEventsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ClientSecurityEventsController;
```

### <a name="get_network_client_security_events"></a>![Method: ](https://apidocs.io/img/method.png ".ClientSecurityEventsController.getNetworkClientSecurityEvents") getNetworkClientSecurityEvents

> List the security events


```javascript
function getNetworkClientSecurityEvents(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Required ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 791 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['clientId'] = 'clientId';
        input['perPage'] = 31;
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 31;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientSecurityEvents(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="malware_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MalwareSettingsController") MalwareSettingsController

### Get singleton instance

The singleton instance of the ``` MalwareSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MalwareSettingsController;
```

### <a name="get_network_security_malware_settings"></a>![Method: ](https://apidocs.io/img/method.png ".MalwareSettingsController.getNetworkSecurityMalwareSettings") getNetworkSecurityMalwareSettings

> Returns all supported malware settings for an MX network


```javascript
function getNetworkSecurityMalwareSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSecurityMalwareSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_security_malware_settings"></a>![Method: ](https://apidocs.io/img/method.png ".MalwareSettingsController.updateNetworkSecurityMalwareSettings") updateNetworkSecurityMalwareSettings

> Set the supported malware settings for an MX network


```javascript
function updateNetworkSecurityMalwareSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSecurityMalwareSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkSecurityMalwareSettings'] = new UpdateNetworkSecurityMalwareSettingsModel({"key":"value"});

    controller.updateNetworkSecurityMalwareSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="named_tag_scope_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NamedTagScopeController") NamedTagScopeController

### Get singleton instance

The singleton instance of the ``` NamedTagScopeController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NamedTagScopeController;
```

### <a name="get_network_sm_target_groups"></a>![Method: ](https://apidocs.io/img/method.png ".NamedTagScopeController.getNetworkSmTargetGroups") getNetworkSmTargetGroups

> List the target groups in this network


```javascript
function getNetworkSmTargetGroups(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| withDetails |  ``` Optional ```  | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['withDetails'] = 'withDetails';

    controller.getNetworkSmTargetGroups(input, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_target_groups"></a>![Method: ](https://apidocs.io/img/method.png ".NamedTagScopeController.createNetworkSmTargetGroups") createNetworkSmTargetGroups

> Add a target group


```javascript
function createNetworkSmTargetGroups(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmTargetGroups |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkSmTargetGroups'] = new CreateNetworkSmTargetGroupsModel({"key":"value"});

    controller.createNetworkSmTargetGroups(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".NamedTagScopeController.getNetworkSmTargetGroup") getNetworkSmTargetGroup

> Return a target group


```javascript
function getNetworkSmTargetGroup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |
| withDetails |  ``` Optional ```  | Boolean indicating if the the ids of devices or users scoped by the target group should be included in the response |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['targetGroupId'] = 'targetGroupId';
        input['withDetails'] = 'withDetails';

    controller.getNetworkSmTargetGroup(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".NamedTagScopeController.updateNetworkSmTargetGroup") updateNetworkSmTargetGroup

> Update a target group


```javascript
function updateNetworkSmTargetGroup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmTargetGroup |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['targetGroupId'] = 'targetGroupId';
        input['updateNetworkSmTargetGroup'] = new UpdateNetworkSmTargetGroupModel({"key":"value"});

    controller.updateNetworkSmTargetGroup(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".NamedTagScopeController.deleteNetworkSmTargetGroup") deleteNetworkSmTargetGroup

> Delete a target group from a network


```javascript
function deleteNetworkSmTargetGroup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['targetGroupId'] = 'targetGroupId';

    controller.deleteNetworkSmTargetGroup(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sm_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMController") SMController

### Get singleton instance

The singleton instance of the ``` SMController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMController;
```

### <a name="create_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.createNetworkSmProfileClarity") createNetworkSmProfileClarity

> Create a new profile containing a Cisco Clarity payload


```javascript
function createNetworkSmProfileClarity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmProfileClarity |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['createNetworkSmProfileClarity'] = new CreateNetworkSmProfileClarityModel({"key":"value"});

    controller.createNetworkSmProfileClarity(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmProfileClarity") updateNetworkSmProfileClarity

> Update an existing profile containing a Cisco Clarity payload


```javascript
function updateNetworkSmProfileClarity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmProfileClarity |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';
        input['updateNetworkSmProfileClarity'] = new UpdateNetworkSmProfileClarityModel({"key":"value"});

    controller.updateNetworkSmProfileClarity(input, function(error, response, context) {

    
    });
```



### <a name="add_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.addNetworkSmProfileClarity") addNetworkSmProfileClarity

> Add a Cisco Clarity payload to an existing profile


```javascript
function addNetworkSmProfileClarity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| addNetworkSmProfileClarity |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';
        input['addNetworkSmProfileClarity'] = new AddNetworkSmProfileClarityModel({"key":"value"});

    controller.addNetworkSmProfileClarity(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmProfileClarity") getNetworkSmProfileClarity

> Get details for a Cisco Clarity payload


```javascript
function getNetworkSmProfileClarity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';

    controller.getNetworkSmProfileClarity(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.deleteNetworkSmProfileClarity") deleteNetworkSmProfileClarity

> Delete a Cisco Clarity payload. Deletes the entire profile if it's empty after removing the payload.


```javascript
function deleteNetworkSmProfileClarity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';

    controller.deleteNetworkSmProfileClarity(input, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_profile_umbrella"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.createNetworkSmProfileUmbrella") createNetworkSmProfileUmbrella

> Create a new profile containing a Cisco Umbrella payload


```javascript
function createNetworkSmProfileUmbrella(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmProfileUmbrella |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['createNetworkSmProfileUmbrella'] = new CreateNetworkSmProfileUmbrellaModel({"key":"value"});

    controller.createNetworkSmProfileUmbrella(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_profile_umbrella"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmProfileUmbrella") updateNetworkSmProfileUmbrella

> Update an existing profile containing a Cisco Umbrella payload


```javascript
function updateNetworkSmProfileUmbrella(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmProfileUmbrella |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';
        input['updateNetworkSmProfileUmbrella'] = new UpdateNetworkSmProfileUmbrellaModel({"key":"value"});

    controller.updateNetworkSmProfileUmbrella(input, function(error, response, context) {

    
    });
```



### <a name="add_network_sm_profile_umbrella"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.addNetworkSmProfileUmbrella") addNetworkSmProfileUmbrella

> Add a Cisco Umbrella payload to an existing profile


```javascript
function addNetworkSmProfileUmbrella(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| addNetworkSmProfileUmbrella |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';
        input['addNetworkSmProfileUmbrella'] = new AddNetworkSmProfileUmbrellaModel({"key":"value"});

    controller.addNetworkSmProfileUmbrella(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_profile_umbrella"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmProfileUmbrella") getNetworkSmProfileUmbrella

> Get details for a Cisco Umbrella payload


```javascript
function getNetworkSmProfileUmbrella(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';

    controller.getNetworkSmProfileUmbrella(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_profile_umbrella"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.deleteNetworkSmProfileUmbrella") deleteNetworkSmProfileUmbrella

> Delete a Cisco Umbrella payload. Deletes the entire profile if it's empty after removing the payload


```javascript
function deleteNetworkSmProfileUmbrella(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['profileId'] = 'profileId';

    controller.deleteNetworkSmProfileUmbrella(input, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_app_polaris"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.createNetworkSmAppPolaris") createNetworkSmAppPolaris

> Create a new Polaris app


```javascript
function createNetworkSmAppPolaris(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmAppPolaris |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['createNetworkSmAppPolaris'] = new CreateNetworkSmAppPolarisModel({"key":"value"});

    controller.createNetworkSmAppPolaris(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_app_polaris"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmAppPolaris") getNetworkSmAppPolaris

> Get details for a Cisco Polaris app if it exists


```javascript
function getNetworkSmAppPolaris(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| bundleId |  ``` Optional ```  | The bundle ID of the app to be found, defaults to com.cisco.ciscosecurity.app |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['bundleId'] = 'bundleId';

    controller.getNetworkSmAppPolaris(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_app_polari"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmAppPolari") updateNetworkSmAppPolari

> Update an existing Polaris app


```javascript
function updateNetworkSmAppPolari(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| appId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmAppPolari |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['appId'] = 'appId';
        input['updateNetworkSmAppPolari'] = new UpdateNetworkSmAppPolariModel({"key":"value"});

    controller.updateNetworkSmAppPolari(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_app_polari"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.deleteNetworkSmAppPolari") deleteNetworkSmAppPolari

> Delete a Cisco Polaris app


```javascript
function deleteNetworkSmAppPolari(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| appId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['appId'] = 'appId';

    controller.deleteNetworkSmAppPolari(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDevices") getNetworkSmDevices

> List the devices enrolled in an SM network with various specified fields and filters


```javascript
function getNetworkSmDevices(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| fields |  ``` Optional ```  | Additional fields that will be displayed for each device. Multiple fields can be passed in as comma separated values.
      The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,
      systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,
      ownerEmail, ownerUsername, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,
      simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,
      isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,
      hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion. |
| wifiMacs |  ``` Optional ```  | Filter devices by wifi mac(s). Multiple wifi macs can be passed in as comma separated values. |
| serials |  ``` Optional ```  | Filter devices by serial(s). Multiple serials can be passed in as comma separated values. |
| ids |  ``` Optional ```  | Filter devices by id(s). Multiple ids can be passed in as comma separated values. |
| scope |  ``` Optional ```  | Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values. |
| batchToken |  ``` Optional ```  | On networks with more than 1000 devices, the device list will be limited to 1000 devices per query.
      If there are more devices to be seen, a batch token will be returned as a part of the device list. To see the remainder of
      the devices, pass in the batchToken as a parameter in the next request. Requests made with the batchToken do not require
      additional parameters as the batchToken includes the parameters passed in with the original request. Additional parameters
      passed in with the batchToken will be ignored. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['fields'] = 'fields';
        input['wifiMacs'] = 'wifiMacs';
        input['serials'] = 'serials';
        input['ids'] = 'ids';
        input['scope'] = 'scope';
        input['batchToken'] = 'batchToken';

    controller.getNetworkSmDevices(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_users"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmUsers") getNetworkSmUsers

> List the owners in an SM network with various specified fields and filters


```javascript
function getNetworkSmUsers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| usernames |  ``` Optional ```  | Filter users by username(s). Multiple usernames can be passed in as comma separated values. |
| emails |  ``` Optional ```  | Filter users by email(s). Multiple emails can be passed in as comma separated values. |
| ids |  ``` Optional ```  | Filter users by id(s). Multiple ids can be passed in as comma separated values. |
| scope |  ``` Optional ```  | Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags as comma separated values. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['usernames'] = 'usernames';
        input['emails'] = 'emails';
        input['ids'] = 'ids';
        input['scope'] = 'scope';

    controller.getNetworkSmUsers(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_user_device_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmUserDeviceProfiles") getNetworkSmUserDeviceProfiles

> Get the profiles associated with a user


```javascript
function getNetworkSmUserDeviceProfiles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmUserDeviceProfiles(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDeviceProfiles") getNetworkSmDeviceProfiles

> Get the profiles associated with a device


```javascript
function getNetworkSmDeviceProfiles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmDeviceProfiles(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_user_softwares"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmUserSoftwares") getNetworkSmUserSoftwares

> Get a list of softwares associated with a user


```javascript
function getNetworkSmUserSoftwares(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmUserSoftwares(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_softwares"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmSoftwares") getNetworkSmSoftwares

> Get a list of softwares associated with a device


```javascript
function getNetworkSmSoftwares(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmSoftwares(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_network_adapters"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmNetworkAdapters") getNetworkSmNetworkAdapters

> List the network adapters of a device


```javascript
function getNetworkSmNetworkAdapters(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmNetworkAdapters(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_wlan_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmWlanLists") getNetworkSmWlanLists

> List the saved SSID names on a device


```javascript
function getNetworkSmWlanLists(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmWlanLists(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_security_centers"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmSecurityCenters") getNetworkSmSecurityCenters

> List the security centers on a device


```javascript
function getNetworkSmSecurityCenters(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmSecurityCenters(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_restrictions"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmRestrictions") getNetworkSmRestrictions

> List the restrictions on a device


```javascript
function getNetworkSmRestrictions(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmRestrictions(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_certs"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmCerts") getNetworkSmCerts

> List the certs on a device


```javascript
function getNetworkSmCerts(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmCerts(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_devices_tags"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDevicesTags") updateNetworkSmDevicesTags

> Add, delete, or update the tags of a set of devices


```javascript
function updateNetworkSmDevicesTags(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDevicesTags |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDevicesTags'] = new UpdateNetworkSmDevicesTagsModel({"key":"value"});

    controller.updateNetworkSmDevicesTags(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_device_fields"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDeviceFields") updateNetworkSmDeviceFields

> Modify the fields of a device


```javascript
function updateNetworkSmDeviceFields(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDeviceFields |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDeviceFields'] = new UpdateNetworkSmDeviceFieldsModel({"key":"value"});

    controller.updateNetworkSmDeviceFields(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_devices_lock"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDevicesLock") updateNetworkSmDevicesLock

> Lock a set of devices


```javascript
function updateNetworkSmDevicesLock(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDevicesLock |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDevicesLock'] = new UpdateNetworkSmDevicesLockModel({"key":"value"});

    controller.updateNetworkSmDevicesLock(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_device_wipe"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDeviceWipe") updateNetworkSmDeviceWipe

> Wipe a device


```javascript
function updateNetworkSmDeviceWipe(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDeviceWipe |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDeviceWipe'] = new UpdateNetworkSmDeviceWipeModel({"key":"value"});

    controller.updateNetworkSmDeviceWipe(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_devices_checkin"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDevicesCheckin") updateNetworkSmDevicesCheckin

> Force check-in a set of devices


```javascript
function updateNetworkSmDevicesCheckin(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDevicesCheckin |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDevicesCheckin'] = new UpdateNetworkSmDevicesCheckinModel({"key":"value"});

    controller.updateNetworkSmDevicesCheckin(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_devices_move"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.updateNetworkSmDevicesMove") updateNetworkSmDevicesMove

> Move a set of devices to a new network


```javascript
function updateNetworkSmDevicesMove(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDevicesMove |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['updateNetworkSmDevicesMove'] = new UpdateNetworkSmDevicesMoveModel({"key":"value"});

    controller.updateNetworkSmDevicesMove(input, function(error, response, context) {

    
    });
```



### <a name="unenroll_network_sm_device"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.unenrollNetworkSmDevice") unenrollNetworkSmDevice

> Unenroll a device


```javascript
function unenrollNetworkSmDevice(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['deviceId'] = 'deviceId';

    controller.unenrollNetworkSmDevice(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmProfiles") getNetworkSmProfiles

> List all the profiles in the network


```javascript
function getNetworkSmProfiles(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = network_id;

    controller.getNetworkSmProfiles(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_cellular_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmCellularUsageHistory") getNetworkSmCellularUsageHistory

> Return the client's daily cellular data usage history. Usage data is in kilobytes.


```javascript
function getNetworkSmCellularUsageHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';

    controller.getNetworkSmCellularUsageHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_performance_history"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmPerformanceHistory") getNetworkSmPerformanceHistory

> Return historical records of various Systems Manager client metrics for desktop devices.


```javascript
function getNetworkSmPerformanceHistory(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';
        input['perPage'] = 'perPage';
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkSmPerformanceHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_desktop_logs"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDesktopLogs") getNetworkSmDesktopLogs

> Return historical records of various Systems Manager network connection details for desktop devices.


```javascript
function getNetworkSmDesktopLogs(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';
        input['perPage'] = 'perPage';
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkSmDesktopLogs(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_command_logs"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDeviceCommandLogs") getNetworkSmDeviceCommandLogs

>     Return historical records of commands sent to Systems Manager devices.
>     <p>Note that this will include the name of the Dashboard user who initiated the command if it was generated
>     by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out
>     of any reports.</p>
> 


```javascript
function getNetworkSmDeviceCommandLogs(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';
        input['perPage'] = 'perPage';
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkSmDeviceCommandLogs(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_connectivity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmConnectivity") getNetworkSmConnectivity

> Returns historical connectivity data (whether a device is regularly checking in to Dashboard).


```javascript
function getNetworkSmConnectivity(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, next or prev page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = network_id;
        input['id'] = 'id';
        input['perPage'] = 'perPage';
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkSmConnectivity(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="splash_login_attempts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SplashLoginAttemptsController") SplashLoginAttemptsController

### Get singleton instance

The singleton instance of the ``` SplashLoginAttemptsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SplashLoginAttemptsController;
```

### <a name="get_network_splash_login_attempts"></a>![Method: ](https://apidocs.io/img/method.png ".SplashLoginAttemptsController.getNetworkSplashLoginAttempts") getNetworkSplashLoginAttempts

> List the splash login attempts for a network


```javascript
function getNetworkSplashLoginAttempts(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| ssidNumber |  ``` Optional ```  | Only return the login attempts for the specified SSID |
| loginIdentifier |  ``` Optional ```  | The username, email, or phone number used during login |
| timespan |  ``` Optional ```  | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['ssidNumber'] = 'ssidNumber';
        input['loginIdentifier'] = 'loginIdentifier';
        input['timespan'] = 'timespan';

    controller.getNetworkSplashLoginAttempts(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="splash_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SplashSettingsController") SplashSettingsController

### Get singleton instance

The singleton instance of the ``` SplashSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SplashSettingsController;
```

### <a name="get_network_ssids_plash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SplashSettingsController.getNetwork_ssids_PlashSettings") getNetwork_ssids_PlashSettings

> Display the splash page settings for the given SSID


```javascript
function getNetwork_ssids_PlashSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';

    controller.getNetwork_ssids_PlashSettings(input, function(error, response, context) {

    
    });
```



### <a name="update_network_ssids_plash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SplashSettingsController.updateNetwork_ssids_PlashSettings") updateNetwork_ssids_PlashSettings

> Modify the splash page settings for the given SSID


```javascript
function updateNetwork_ssids_PlashSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetwork_ssids_PlashSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';
        input['updateNetwork_ssids_PlashSettings'] = new UpdateNetworkSsidsPlashSettingsModel({"key":"value"});

    controller.updateNetwork_ssids_PlashSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="ssids_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SsidsController") SsidsController

### Get singleton instance

The singleton instance of the ``` SsidsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SsidsController;
```

### <a name="get_network_ssids"></a>![Method: ](https://apidocs.io/img/method.png ".SsidsController.getNetwork_ssids") getNetwork_ssids

> List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.


```javascript
function getNetwork_ssids(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetwork_ssids(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".SsidsController.getNetworkSsid") getNetworkSsid

> Return a single SSID


```javascript
function getNetworkSsid(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';

    controller.getNetworkSsid(input, function(error, response, context) {

    
    });
```



### <a name="update_network_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".SsidsController.updateNetworkSsid") updateNetworkSsid

> Update the attributes of an SSID


```javascript
function updateNetworkSsid(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSsid |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';
        input['updateNetworkSsid'] = new UpdateNetworkSsidModel({"key":"value"});

    controller.updateNetworkSsid(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="switch_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SwitchSettingsController") SwitchSettingsController

### Get singleton instance

The singleton instance of the ``` SwitchSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SwitchSettingsController;
```

### <a name="get_network_switch_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchSettingsController.getNetworkSwitchSettings") getNetworkSwitchSettings

> Returns the switch network settings


```javascript
function getNetworkSwitchSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchSettingsController.updateNetworkSwitchSettings") updateNetworkSwitchSettings

> Update switch network settings


```javascript
function updateNetworkSwitchSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkSwitchSettings'] = new UpdateNetworkSwitchSettingsModel({"key":"value"});

    controller.updateNetworkSwitchSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="switch_ports_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SwitchPortsController") SwitchPortsController

### Get singleton instance

The singleton instance of the ``` SwitchPortsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SwitchPortsController;
```

### <a name="get_device_switch_ports"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchPortsController.getDeviceSwitchPorts") getDeviceSwitchPorts

> List the switch ports for a switch


```javascript
function getDeviceSwitchPorts(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceSwitchPorts(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchPortsController.getDeviceSwitchPort") getDeviceSwitchPort

> Return a switch port


```javascript
function getDeviceSwitchPort(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['number'] = 'number';

    controller.getDeviceSwitchPort(input, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchPortsController.updateDeviceSwitchPort") updateDeviceSwitchPort

> Update a switch port


```javascript
function updateDeviceSwitchPort(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchPort |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['number'] = 'number';
        input['updateDeviceSwitchPort'] = new UpdateDeviceSwitchPortModel({"key":"value"});

    controller.updateDeviceSwitchPort(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="switch_stacks_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SwitchStacksController") SwitchStacksController

### Get singleton instance

The singleton instance of the ``` SwitchStacksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SwitchStacksController;
```

### <a name="get_network_switch_stacks"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.getNetworkSwitchStacks") getNetworkSwitchStacks

> List the switch stacks in a network


```javascript
function getNetworkSwitchStacks(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchStacks(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_stacks"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.createNetworkSwitchStacks") createNetworkSwitchStacks

> Create a stack


```javascript
function createNetworkSwitchStacks(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchStacks |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkSwitchStacks'] = new CreateNetworkSwitchStacksModel({"key":"value"});

    controller.createNetworkSwitchStacks(input, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.getNetworkSwitchStack") getNetworkSwitchStack

> Show a switch stack


```javascript
function getNetworkSwitchStack(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['switchStackId'] = 'switchStackId';

    controller.getNetworkSwitchStack(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.deleteNetworkSwitchStack") deleteNetworkSwitchStack

> Delete a stack


```javascript
function deleteNetworkSwitchStack(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['switchStackId'] = 'switchStackId';

    controller.deleteNetworkSwitchStack(input, function(error, response, context) {

    
    });
```



### <a name="add_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.addNetworkSwitchStack") addNetworkSwitchStack

> Add a switch to a stack


```javascript
function addNetworkSwitchStack(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| addNetworkSwitchStack |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['switchStackId'] = 'switchStackId';
        input['addNetworkSwitchStack'] = new AddNetworkSwitchStackModel({"key":"value"});

    controller.addNetworkSwitchStack(input, function(error, response, context) {

    
    });
```



### <a name="remove_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.removeNetworkSwitchStack") removeNetworkSwitchStack

> Remove a switch from a stack


```javascript
function removeNetworkSwitchStack(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkID |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| removeNetworkSwitchStack |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkID'] = 'networkID';
        input['switchStackId'] = 'switchStackId';
        input['removeNetworkSwitchStack'] = new RemoveNetworkSwitchStackModel({"key":"value"});

    controller.removeNetworkSwitchStack(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="syslog_servers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SyslogServersController") SyslogServersController

### Get singleton instance

The singleton instance of the ``` SyslogServersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SyslogServersController;
```

### <a name="get_network_syslog_servers"></a>![Method: ](https://apidocs.io/img/method.png ".SyslogServersController.getNetworkSyslogServers") getNetworkSyslogServers

> List the syslog servers for a network


```javascript
function getNetworkSyslogServers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSyslogServers(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_syslog_servers"></a>![Method: ](https://apidocs.io/img/method.png ".SyslogServersController.updateNetworkSyslogServers") updateNetworkSyslogServers

> Update the syslog servers for a network


```javascript
function updateNetworkSyslogServers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSyslogServers |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkSyslogServers'] = new UpdateNetworkSyslogServersModel({"key":"value"});

    controller.updateNetworkSyslogServers(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="content_filtering_categories_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ContentFilteringCategoriesController") ContentFilteringCategoriesController

### Get singleton instance

The singleton instance of the ``` ContentFilteringCategoriesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ContentFilteringCategoriesController;
```

### <a name="get_network_content_filtering_categories"></a>![Method: ](https://apidocs.io/img/method.png ".ContentFilteringCategoriesController.getNetworkContentFilteringCategories") getNetworkContentFilteringCategories

> List all available content filtering categories for an MX network


```javascript
function getNetworkContentFilteringCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkContentFilteringCategories(networkId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="content_filtering_rules_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ContentFilteringRulesController") ContentFilteringRulesController

### Get singleton instance

The singleton instance of the ``` ContentFilteringRulesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ContentFilteringRulesController;
```

### <a name="get_network_content_filtering"></a>![Method: ](https://apidocs.io/img/method.png ".ContentFilteringRulesController.getNetworkContentFiltering") getNetworkContentFiltering

> Return the content filtering settings for an MX network


```javascript
function getNetworkContentFiltering(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkContentFiltering(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_content_filtering"></a>![Method: ](https://apidocs.io/img/method.png ".ContentFilteringRulesController.updateNetworkContentFiltering") updateNetworkContentFiltering

> Update the content filtering settings for an MX network


```javascript
function updateNetworkContentFiltering(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkContentFiltering |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkContentFiltering'] = new UpdateNetworkContentFilteringModel({"key":"value"});

    controller.updateNetworkContentFiltering(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="firewalled_services_controller"></a>![Class: ](https://apidocs.io/img/class.png ".FirewalledServicesController") FirewalledServicesController

### Get singleton instance

The singleton instance of the ``` FirewalledServicesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.FirewalledServicesController;
```

### <a name="get_network_firewalled_services"></a>![Method: ](https://apidocs.io/img/method.png ".FirewalledServicesController.getNetworkFirewalledServices") getNetworkFirewalledServices

> List the appliance services and their accessibility rules


```javascript
function getNetworkFirewalledServices(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkFirewalledServices(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_firewalled_service"></a>![Method: ](https://apidocs.io/img/method.png ".FirewalledServicesController.getNetworkFirewalledService") getNetworkFirewalledService

> Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')


```javascript
function getNetworkFirewalledService(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| service |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['service'] = 'service';

    controller.getNetworkFirewalledService(input, function(error, response, context) {

    
    });
```



### <a name="update_network_firewalled_service"></a>![Method: ](https://apidocs.io/img/method.png ".FirewalledServicesController.updateNetworkFirewalledService") updateNetworkFirewalledService

> Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')


```javascript
function updateNetworkFirewalledService(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| service |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkFirewalledService |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['service'] = 'service';
        input['updateNetworkFirewalledService'] = new UpdateNetworkFirewalledServiceModel({"key":"value"});

    controller.updateNetworkFirewalledService(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mx1_many_nat_rules_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MX1ManyNATRulesController") MX1ManyNATRulesController

### Get singleton instance

The singleton instance of the ``` MX1ManyNATRulesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MX1ManyNATRulesController;
```

### <a name="get_network_one_to_many_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MX1ManyNATRulesController.getNetworkOneToManyNatRules") getNetworkOneToManyNatRules

> Return the 1:Many NAT mapping rules for an MX network


```javascript
function getNetworkOneToManyNatRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkOneToManyNatRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_one_to_many_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MX1ManyNATRulesController.updateNetworkOneToManyNatRules") updateNetworkOneToManyNatRules

> Set the 1:Many NAT mapping rules for an MX network


```javascript
function updateNetworkOneToManyNatRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkOneToManyNatRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkOneToManyNatRules'] = new UpdateNetworkOneToManyNatRulesModel({"key":"value"});

    controller.updateNetworkOneToManyNatRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mx11_nat_rules_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MX11NATRulesController") MX11NATRulesController

### Get singleton instance

The singleton instance of the ``` MX11NATRulesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MX11NATRulesController;
```

### <a name="get_network_one_to_one_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MX11NATRulesController.getNetworkOneToOneNatRules") getNetworkOneToOneNatRules

> Return the 1:1 NAT mapping rules for an MX network


```javascript
function getNetworkOneToOneNatRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkOneToOneNatRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_one_to_one_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MX11NATRulesController.updateNetworkOneToOneNatRules") updateNetworkOneToOneNatRules

> Set the 1:1 NAT mapping rules for an MX network


```javascript
function updateNetworkOneToOneNatRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkOneToOneNatRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkOneToOneNatRules'] = new UpdateNetworkOneToOneNatRulesModel({"key":"value"});

    controller.updateNetworkOneToOneNatRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="mx_port_forwarding_rules_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXPortForwardingRulesController") MXPortForwardingRulesController

### Get singleton instance

The singleton instance of the ``` MXPortForwardingRulesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXPortForwardingRulesController;
```

### <a name="get_network_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXPortForwardingRulesController.getNetworkPortForwardingRules") getNetworkPortForwardingRules

> Return the port forwarding rules for an MX network


```javascript
function getNetworkPortForwardingRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPortForwardingRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXPortForwardingRulesController.updateNetworkPortForwardingRules") updateNetworkPortForwardingRules

> Update the port forwarding rules for an MX network


```javascript
function updateNetworkPortForwardingRules(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkPortForwardingRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkPortForwardingRules'] = new UpdateNetworkPortForwardingRulesModel({"key":"value"});

    controller.updateNetworkPortForwardingRules(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="static_routes_controller"></a>![Class: ](https://apidocs.io/img/class.png ".StaticRoutesController") StaticRoutesController

### Get singleton instance

The singleton instance of the ``` StaticRoutesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.StaticRoutesController;
```

### <a name="get_network_static_routes"></a>![Method: ](https://apidocs.io/img/method.png ".StaticRoutesController.getNetworkStaticRoutes") getNetworkStaticRoutes

> List the static routes for this network


```javascript
function getNetworkStaticRoutes(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkStaticRoutes(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_static_routes"></a>![Method: ](https://apidocs.io/img/method.png ".StaticRoutesController.createNetworkStaticRoutes") createNetworkStaticRoutes

> Add a static route


```javascript
function createNetworkStaticRoutes(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkStaticRoutes |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkStaticRoutes'] = new CreateNetworkStaticRoutesModel({"key":"value"});

    controller.createNetworkStaticRoutes(input, function(error, response, context) {

    
    });
```



### <a name="get_network_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".StaticRoutesController.getNetworkStaticRoute") getNetworkStaticRoute

> Return a static route


```javascript
function getNetworkStaticRoute(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| srId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['srId'] = 'srId';

    controller.getNetworkStaticRoute(input, function(error, response, context) {

    
    });
```



### <a name="update_network_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".StaticRoutesController.updateNetworkStaticRoute") updateNetworkStaticRoute

> Update a static route


```javascript
function updateNetworkStaticRoute(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| srId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkStaticRoute |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['srId'] = 'srId';
        input['updateNetworkStaticRoute'] = new UpdateNetworkStaticRouteModel({"key":"value"});

    controller.updateNetworkStaticRoute(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".StaticRoutesController.deleteNetworkStaticRoute") deleteNetworkStaticRoute

> Delete a static route from a network


```javascript
function deleteNetworkStaticRoute(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| srId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['srId'] = 'srId';

    controller.deleteNetworkStaticRoute(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="uplink_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UplinkSettingsController") UplinkSettingsController

### Get singleton instance

The singleton instance of the ``` UplinkSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UplinkSettingsController;
```

### <a name="get_network_uplink_settings"></a>![Method: ](https://apidocs.io/img/method.png ".UplinkSettingsController.getNetworkUplinkSettings") getNetworkUplinkSettings

> Returns the uplink settings for your MX network.


```javascript
function getNetworkUplinkSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkUplinkSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_uplink_settings"></a>![Method: ](https://apidocs.io/img/method.png ".UplinkSettingsController.updateNetworkUplinkSettings") updateNetworkUplinkSettings

> Updates the uplink settings for your MX network.


```javascript
function updateNetworkUplinkSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkUplinkSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkUplinkSettings'] = new UpdateNetworkUplinkSettingsModel({"key":"value"});

    controller.updateNetworkUplinkSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="vlans_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VlansController") VlansController

### Get singleton instance

The singleton instance of the ``` VlansController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VlansController;
```

### <a name="get_network_vlans"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.getNetwork_vlans") getNetwork_vlans

> List the VLANs for this network


```javascript
function getNetwork_vlans(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetwork_vlans(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_vlans"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.createNetwork_vlans") createNetwork_vlans

> Add a VLAN


```javascript
function createNetwork_vlans(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetwork_vlans |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetwork_vlans'] = new CreateNetworkVlansModel({"key":"value"});

    controller.createNetwork_vlans(input, function(error, response, context) {

    
    });
```



### <a name="get_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.getNetworkVlan") getNetworkVlan

> Return a VLAN


```javascript
function getNetworkVlan(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['vlanId'] = 'vlanId';

    controller.getNetworkVlan(input, function(error, response, context) {

    
    });
```



### <a name="update_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.updateNetworkVlan") updateNetworkVlan

> Update a VLAN


```javascript
function updateNetworkVlan(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkVlan |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['vlanId'] = 'vlanId';
        input['updateNetworkVlan'] = new UpdateNetworkVlanModel({"key":"value"});

    controller.updateNetworkVlan(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.deleteNetworkVlan") deleteNetworkVlan

> Delete a VLAN from a network


```javascript
function deleteNetworkVlan(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['vlanId'] = 'vlanId';

    controller.deleteNetworkVlan(input, function(error, response, context) {

    
    });
```



### <a name="get_network_vlans_enabled_state"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.getNetwork_vlans_EnabledState") getNetwork_vlans_EnabledState

> Returns the enabled status of VLANs for the network


```javascript
function getNetwork_vlans_EnabledState(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetwork_vlans_EnabledState(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_vlans_enabled_state"></a>![Method: ](https://apidocs.io/img/method.png ".VlansController.updateNetwork_vlans_EnabledState") updateNetwork_vlans_EnabledState

> Enable/Disable VLANs for the given network


```javascript
function updateNetwork_vlans_EnabledState(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetwork_vlans_EnabledState |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetwork_vlans_EnabledState'] = new UpdateNetworkVlansEnabledStateModel({"key":"value"});

    controller.updateNetwork_vlans_EnabledState(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="wireless_health_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WirelessHealthController") WirelessHealthController

### Get singleton instance

The singleton instance of the ``` WirelessHealthController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WirelessHealthController;
```

### <a name="get_network_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkConnectionStats") getNetworkConnectionStats

> Aggregated connectivity info for this network


```javascript
function getNetworkConnectionStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';

    controller.getNetworkConnectionStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_devices_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkDevicesConnectionStats") getNetworkDevicesConnectionStats

> Aggregated connectivity info for this network, grouped by node


```javascript
function getNetworkDevicesConnectionStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';

    controller.getNetworkDevicesConnectionStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkDeviceConnectionStats") getNetworkDeviceConnectionStats

> Aggregated connectivity info for a given AP on this network


```javascript
function getNetworkDeviceConnectionStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';

    controller.getNetworkDeviceConnectionStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_clients_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkClientsConnectionStats") getNetworkClientsConnectionStats

> Aggregated connectivity info for this network, grouped by clients


```javascript
function getNetworkClientsConnectionStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';

    controller.getNetworkClientsConnectionStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkClientConnectionStats") getNetworkClientConnectionStats

> Aggregated connectivity info for a given client on this network


```javascript
function getNetworkClientConnectionStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['clientId'] = 'clientId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';

    controller.getNetworkClientConnectionStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkLatencyStats") getNetworkLatencyStats

> Aggregated latency info for this network


```javascript
function getNetworkLatencyStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['fields'] = 'fields';

    controller.getNetworkLatencyStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_devices_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkDevicesLatencyStats") getNetworkDevicesLatencyStats

> Aggregated latency info for this network, grouped by node


```javascript
function getNetworkDevicesLatencyStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['fields'] = 'fields';

    controller.getNetworkDevicesLatencyStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkDeviceLatencyStats") getNetworkDeviceLatencyStats

> Aggregated latency info for a given AP on this network


```javascript
function getNetworkDeviceLatencyStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['fields'] = 'fields';

    controller.getNetworkDeviceLatencyStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_clients_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkClientsLatencyStats") getNetworkClientsLatencyStats

> Aggregated latency info for this network, grouped by clients


```javascript
function getNetworkClientsLatencyStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['fields'] = 'fields';

    controller.getNetworkClientsLatencyStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkClientLatencyStats") getNetworkClientLatencyStats

> Aggregated latency info for a given client on this network


```javascript
function getNetworkClientLatencyStats(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['clientId'] = 'clientId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['fields'] = 'fields';

    controller.getNetworkClientLatencyStats(input, function(error, response, context) {

    
    });
```



### <a name="get_network_failed_connections"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessHealthController.getNetworkFailedConnections") getNetworkFailedConnections

> List of all failed client connection events on this network in a given time range


```javascript
function getNetworkFailedConnections(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | Start of the requested time range in seconds since epoch (Required) |
| t1 |  ``` Optional ```  | End of the requested time range in seconds since epoch (Required) |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| serial |  ``` Optional ```  | Filter by AP |
| clientId |  ``` Optional ```  | Filter by client |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['ssid'] = 'ssid';
        input['vlan'] = 'vlan';
        input['apTag'] = 'apTag';
        input['serial'] = 'serial';
        input['clientId'] = 'clientId';

    controller.getNetworkFailedConnections(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



