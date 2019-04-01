# Getting started

This collection of API calls provides an easy way to interact with a Cisco Meraki network

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Meraki%20Dashboard%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Meraki%20Dashboard%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MerakiDashboardAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Meraki%20Dashboard%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Meraki%20Dashboard%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Meraki%20Dashboard%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Meraki%20Dashboard%20API-Node)


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

* [SMController](#sm_controller)
* [SplashLoginAttemptsController](#splash_login_attempts_controller)
* [SplashSettingsController](#splash_settings_controller)
* [SSIDsController](#ssi_ds_controller)
* [SwitchSettingsController](#switch_settings_controller)
* [SwitchPortsController](#switch_ports_controller)
* [SwitchStacksController](#switch_stacks_controller)
* [SyslogServersController](#syslog_servers_controller)
* [TrafficShapingController](#traffic_shaping_controller)
* [ContentFilteringCategoriesController](#content_filtering_categories_controller)
* [ContentFilteringRulesController](#content_filtering_rules_controller)
* [FirewalledServicesController](#firewalled_services_controller)
* [MX1ManyNATRulesController](#mx1_many_nat_rules_controller)
* [MX11NATRulesController](#mx11_nat_rules_controller)
* [MXPortForwardingRulesController](#mx_port_forwarding_rules_controller)
* [StaticRoutesController](#static_routes_controller)
* [UplinkSettingsController](#uplink_settings_controller)
* [VLANsController](#vla_ns_controller)
* [WirelessHealthController](#wireless_health_controller)
* [AnalyticsController](#analytics_controller)
* [APIUsageController](#api_usage_controller)
* [BluetoothClientsController](#bluetooth_clients_controller)
* [NetworksController](#networks_controller)
* [CamerasController](#cameras_controller)
* [ClientsController](#clients_controller)
* [ConfigTemplatesController](#config_templates_controller)
* [DevicesController](#devices_controller)
* [MXCellularFirewallController](#mx_cellular_firewall_controller)
* [MXL3FirewallController](#mxl3_firewall_controller)
* [MXVPNFirewallController](#mxvpn_firewall_controller)
* [MRL3FirewallController](#mrl3_firewall_controller)
* [GroupPoliciesController](#group_policies_controller)
* [HTTPServersController](#http_servers_controller)
* [MerakiAuthUsersController](#meraki_auth_users_controller)
* [OpenAPISpecController](#open_api_spec_controller)
* [OrganizationAlertSettingsController](#organization_alert_settings_controller)
* [OrganizationsController](#organizations_controller)
* [PhoneAnnouncementsController](#phone_announcements_controller)
* [PhoneAssignmentsController](#phone_assignments_controller)
* [PhoneCallgroupsController](#phone_callgroups_controller)
* [PhoneConferenceRoomsController](#phone_conference_rooms_controller)
* [PhoneContactsController](#phone_contacts_controller)
* [PhoneNumbersController](#phone_numbers_controller)
* [PIIController](#pii_controller)
* [RadioSettingsController](#radio_settings_controller)
* [SAMLRolesController](#saml_roles_controller)
* [ClientSecurityEventsController](#client_security_events_controller)
* [GeofenceRegionsController](#geofence_regions_controller)
* [GeofencesController](#geofences_controller)
* [NamedTagScopeController](#named_tag_scope_controller)
* [TagsController](#tags_controller)
* [ActionBatchesController](#action_batches_controller)
* [AdminsController](#admins_controller)
* [AlertSettingsController](#alert_settings_controller)

## <a name="sm_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SMController") SMController

### Get singleton instance

The singleton instance of the ``` SMController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SMController;
```

### <a name="get_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDevices") getNetworkSmDevices

> List the devices enrolled in an SM network with various specified fields and filters
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices'
> ```


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



### <a name="get_network_sm_device_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmDeviceProfiles") getNetworkSmDeviceProfiles

> Get the profiles associated with a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/deviceProfiles'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/user/[id]/softwares'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/softwares'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/networkAdapters'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/wlanLists'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/securityCenters'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/restrictions'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/certs'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"scope":"withAny, old_tag","updateAction":"add","tags":"tag1,tag2"}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices/tags'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"id":"1284392014819","deviceFields":{"name":"My name"}}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/device/fields'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"ids":"\"1284392014819\""}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices/lock'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"id":"1284392014819"}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/device/wipe'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"ids":"\"1284392014819\""}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices/checkin'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"ids":"\"1284392014819\"","newNetwork":"N_24329156"}' 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices/move'
> ```


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



### <a name="create_unenroll_network_sm_device"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.createUnenrollNetworkSmDevice") createUnenrollNetworkSmDevice

> Unenroll a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/[network_id]/sm/devices/[deviceId]/unenroll'
> ```


```javascript
function createUnenrollNetworkSmDevice(input, callback)
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

    controller.createUnenrollNetworkSmDevice(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmProfiles") getNetworkSmProfiles

> List all the profiles in the network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/profiles'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/cellularUsageHistory'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/performanceHistory'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/desktopLogs'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/deviceCommandLogs'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/[id]/connectivity'
> ```


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



### <a name="create_network_sm_profile_clarity"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.createNetworkSmProfileClarity") createNetworkSmProfileClarity

> Create a new profile containing a Cisco Clarity payload
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X POST \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "name=Cisco Clarity Config" \
>   -F "PluginBundleID=com.cisco.security.app" \
>   -F 'VendorConfig=[ {"key":"cloud_asn1_server_host", "type":"manual_string", "value":"immunet.com"}, {"key":"cloud_asn1_server_port", "type":"manual_int", "value":443} ]' \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/clarity"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X PUT \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "name=Cisco Clarity Config" \
>   -F 'VendorConfig=[ {"key":"cloud_asn1_server_host", "type":"manual_string", "value":"immunet.com"}, {"key":"cloud_asn1_server_port", "type":"manual_int", "value":443} ]' \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/clarity/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X POST \
>   -H "Content-Type: multipart/form-data" \
>   -F 'VendorConfig=[ {"key":"cloud_asn1_server_host", "type":"manual_string", "value":"immunet.com"}, {"key":"cloud_asn1_server_port", "type":"manual_int", "value":443} ]' \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/clarity/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X GET \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/clarity/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X DELETE \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/clarity/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X POST \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "name=Cisco Umbrella Config" \
>   -F "AppBundleIdentifier=com.cisco.security" \
>   -F "ProviderBundleIdentifier=com.cisco.umbrella" \
>   -F 'ProviderConfiguration=[ {"key":"internalDomains", "type":"manual_list", "value":["meraki.com", "cisco.com"] }, {"key":"user_id", "type":"manual_string", "value":"miles"} ]' \
>   -F "usesCert=true" \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/umbrella"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X PUT \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "name=Cisco Umbrella Config" \
>   -F 'ProviderConfiguration=[ {"key":"internalDomains", "type":"manual_list", "value":["meraki.com", "cisco.com"] }, {"key":"user_id", "type":"manual_string", "value":"miles"} ]' \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/umbrella/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X POST \
>   -H "Content-Type: multipart/form-data" \
>   -F 'ProviderConfiguration=[ {"key":"internalDomains", "type":"manual_list", "value":["meraki.com", "cisco.com"] }, {"key":"user_id", "type":"manual_string", "value":"miles"} ]' \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/umbrella/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X GET \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/umbrella/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X GET \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/profile/umbrella/[profileId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X POST \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "manifestUrl=https://website.com/assets/manifest.plist" \
>   -F "preventAutoInstall=true" \
>   -F "usesVPP=true" \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/app/polaris"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X GET \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/app/polaris?bundleId=com.cisco.polaris"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X PUT \
>   -H "Content-Type: multipart/form-data" \
>   -F "scope=withAny, tag1, tag2" \
>   -F "preventAutoInstall=true" \
>   -F "usesVPP=true" \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/app/polaris/[appId]"
> 
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H "X-Cisco-Meraki-API-KEY: <key>" \
>   -X DELETE \
>   "https://api.meraki.com/api/v0/networks/[networkId]/sm/app/polaris/[appId]"
> 
> ```


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



### <a name="get_network_sm_users"></a>![Method: ](https://apidocs.io/img/method.png ".SMController.getNetworkSmUsers") getNetworkSmUsers

> List the owners in an SM network with various specified fields and filters
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/users'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[network_id]/sm/user/[id]/deviceProfiles'
> ```


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



[Back to List of Controllers](#list_of_controllers)

## <a name="splash_login_attempts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SplashLoginAttemptsController") SplashLoginAttemptsController

### Get singleton instance

The singleton instance of the ``` SplashLoginAttemptsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SplashLoginAttemptsController;
```

### <a name="get_network_splash_login_attempts"></a>![Method: ](https://apidocs.io/img/method.png ".SplashLoginAttemptsController.getNetworkSplashLoginAttempts") getNetworkSplashLoginAttempts

> List the splash login attempts for a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[id]/splashLoginAttempts?timespan=7200'
> ```


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

### <a name="get_network_ssid_splash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SplashSettingsController.getNetworkSsidSplashSettings") getNetworkSsidSplashSettings

> Display the splash page settings for the given SSID
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]/splashSettings'
> ```


```javascript
function getNetworkSsidSplashSettings(input, callback)
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

    controller.getNetworkSsidSplashSettings(input, function(error, response, context) {

    
    });
```



### <a name="update_network_ssid_splash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SplashSettingsController.updateNetworkSsidSplashSettings") updateNetworkSsidSplashSettings

> Modify the splash page settings for the given SSID
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"splashUrl":"https://www.custom_splash_url.com","useSplashUrl":true}' 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]/splashSettings'
> ```


```javascript
function updateNetworkSsidSplashSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSsidSplashSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';
        input['updateNetworkSsidSplashSettings'] = new UpdateNetworkSsidSplashSettingsModel({"key":"value"});

    controller.updateNetworkSsidSplashSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="ssi_ds_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SSIDsController") SSIDsController

### Get singleton instance

The singleton instance of the ``` SSIDsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SSIDsController;
```

### <a name="get_network_ssids"></a>![Method: ](https://apidocs.io/img/method.png ".SSIDsController.getNetworkSsids") getNetworkSsids

> List the SSIDs in a network. Supports networks with access points or wireless-enabled security appliances and teleworker gateways.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/ssids'
> ```


```javascript
function getNetworkSsids(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSsids(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".SSIDsController.getNetworkSsid") getNetworkSsid

> Return a single SSID
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]'
> ```


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



### <a name="update_network_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".SSIDsController.updateNetworkSsid") updateNetworkSsid

> Update the attributes of an SSID
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My SSID","enabled":true}' 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]'
> ```


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



### <a name="create_reset_network_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".SSIDsController.createResetNetworkSsid") createResetNetworkSsid

> Reset configuration and stats for an SSID
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]/reset'
> ```


```javascript
function createResetNetworkSsid(input, callback)
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

    controller.createResetNetworkSsid(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/switch/settings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"useCombinedPower":true,"powerExceptions":[{"serial":"Q234-ABCD-0001","powerType":"redundant"},{"serial":"Q234-ABCD-0002","powerType":"combined"},{"serial":"Q234-ABCD-0003","powerType":"combined"},{"serial":"Q234-ABCD-0004","powerType":"useNetworkSetting"}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/switch/settings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/[serial]/switchPorts'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/[serial]/switchPorts/[number]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT 'https://api.meraki.com/api/v0/devices/[serial]/switchPorts/[number]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/switchStacks'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"A cool stack","serials":["QBZY-XWVU-TSRQ","QBAB-CDEF-GHIJ"]}' 'https://api.meraki.com/api/v0/networks/{networkId}/switchStacks'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/switchStacks/{switchStackId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/{networkId}/switchStacks/{switchStackId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"serial":"QBZY-XWVU-TSRQ"}' 'https://api.meraki.com/api/v0/networks/{networkId}/switchStacks/{switchStackId}/add'
> ```


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



### <a name="create_remove_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchStacksController.createRemoveNetworkSwitchStack") createRemoveNetworkSwitchStack

> Remove a switch from a stack
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"serial":"QBZY-XWVU-TSRQ"}' 'https://api.meraki.com/api/v0/networks/{networkID}/switchStacks/{switchStackId}/remove'
> ```


```javascript
function createRemoveNetworkSwitchStack(input, callback)
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

    controller.createRemoveNetworkSwitchStack(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/syslogServers'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"servers":[{"host":"1.2.3.4","port":443,"roles":["Wireless event log","URLs"]}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/syslogServers'
> ```


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

## <a name="traffic_shaping_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TrafficShapingController") TrafficShapingController

### Get singleton instance

The singleton instance of the ``` TrafficShapingController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TrafficShapingController;
```

### <a name="update_network_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.updateNetworkTrafficShaping") updateNetworkTrafficShaping

> Update the traffic shaping settings for an MX network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT 'https://api.meraki.com/api/v0/networks/{networkId}/trafficShaping'
> ```


```javascript
function updateNetworkTrafficShaping(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkTrafficShaping |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkTrafficShaping'] = new UpdateNetworkTrafficShapingModel({"key":"value"});

    controller.updateNetworkTrafficShaping(input, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.getNetworkTrafficShaping") getNetworkTrafficShaping

> Display the traffic shaping settings for an MX network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/trafficShaping'
> ```


```javascript
function getNetworkTrafficShaping(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficShaping(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_ssid_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.updateNetworkSsidTrafficShaping") updateNetworkSsidTrafficShaping

> Update the traffic shaping settings for an SSID on an MR network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT 'https://api.meraki.com/api/v0/networks/{networkId}/ssids/{number}/trafficShaping'
> ```


```javascript
function updateNetworkSsidTrafficShaping(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSsidTrafficShaping |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['number'] = 'number';
        input['updateNetworkSsidTrafficShaping'] = new UpdateNetworkSsidTrafficShapingModel({"key":"value"});

    controller.updateNetworkSsidTrafficShaping(input, function(error, response, context) {

    
    });
```



### <a name="get_network_ssid_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.getNetworkSsidTrafficShaping") getNetworkSsidTrafficShaping

> Display the traffic shaping settings for a SSID on an MR network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/ssids/{number}/trafficShaping'
> ```


```javascript
function getNetworkSsidTrafficShaping(input, callback)
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

    controller.getNetworkSsidTrafficShaping(input, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_shaping_dscp_tagging_options"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.getNetworkTrafficShapingDscpTaggingOptions") getNetworkTrafficShapingDscpTaggingOptions

> Returns the available DSCP tagging options for your traffic shaping rules.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/trafficShaping/dscpTaggingOptions'
> ```


```javascript
function getNetworkTrafficShapingDscpTaggingOptions(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficShapingDscpTaggingOptions(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_shaping_application_categories"></a>![Method: ](https://apidocs.io/img/method.png ".TrafficShapingController.getNetworkTrafficShapingApplicationCategories") getNetworkTrafficShapingApplicationCategories

> Returns the application categories for traffic shaping rules.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/trafficShaping/applicationCategories'
> ```


```javascript
function getNetworkTrafficShapingApplicationCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficShapingApplicationCategories(networkId, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/contentFiltering/categories'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/contentFiltering'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"allowedUrlPatterns":["http://www.example.org","http://help.com.au"],"blockedUrlPatterns":["http://www.example.com","http://www.betting.com"],"blockedUrlCategories":["meraki:contentFiltering/category/1","meraki:contentFiltering/category/7"],"urlCategoryListSize":"topSites"}' 'https://api.meraki.com/api/v0/networks/[networkId]/contentFiltering'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/firewalledServices'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/firewalledServices/[service]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"access":"restricted","allowedIps":["123.123.123.1"]}' 'https://api.meraki.com/api/v0/networks/[networkId]/firewalledServices/[service]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/oneToManyNatRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"publicIp":"146.11.11.13","uplink":"internet1","portRules":[{"name":"Rule 1","protocol":"tcp","publicPort":"9443","localIp":"192.168.128.1","localPort":"443","allowedIps":["any"]},{"name":"Rule 2","protocol":"tcp","publicPort":"8080","localIp":"192.168.128.1","localPort":"80","allowedIps":["10.82.110.0/24","10.82.111.0/24"]}]}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/oneToManyNatRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/oneToOneNatRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"name":"Service behind NAT","lanIp":"192.168.128.22","publicIp":"146.12.3.33","uplink":"internet1","allowedInbound":[{"protocol":"tcp","destinationPorts":["80"],"allowedIps":["10.82.112.0/24","10.82.0.0/16"]},{"protocol":"udp","destinationPorts":["8080"],"allowedIps":["10.81.110.5","10.81.0.0/16"]}]}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/oneToOneNatRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/portForwardingRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"lanIp":"192.168.128.1","allowedIps":["any"],"name":"Description of Port Forwarding Rule","protocol":"tcp","publicPort":"8100-8101","localPort":"442-443","uplink":"both"}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/portForwardingRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/staticRoutes'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My route","subnet":"192.168.1.0/24","gatewayIp":"1.2.3.5"}' 'https://api.meraki.com/api/v0/networks/[networkId]/staticRoutes'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/staticRoutes/[srId]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My route","subnet":"192.168.1.0/24","fixedIpAssignments":"{}","reservedIpRanges":"[]"}' 'https://api.meraki.com/api/v0/networks/[networkId]/staticRoutes/[srId]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/staticRoutes/[srId]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/uplinkSettings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"bandwidthLimits":{"wan1":{"limitUp":1000000,"limitDown":1000000},"wan2":{"limitUp":1000000,"limitDown":1000000},"cellular":{"limitUp":51200,"limitDown":51200}}}' 'https://api.meraki.com/api/v0/networks/{networkId}/uplinkSettings'
> ```


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

## <a name="vla_ns_controller"></a>![Class: ](https://apidocs.io/img/class.png ".VLANsController") VLANsController

### Get singleton instance

The singleton instance of the ``` VLANsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.VLANsController;
```

### <a name="get_network_vlans"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.getNetworkVlans") getNetworkVlans

> List the VLANs for this network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/vlans'
> ```


```javascript
function getNetworkVlans(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkVlans(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_vlans"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.createNetworkVlans") createNetworkVlans

> Add a VLAN
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"id":"1234","name":"My VLAN","subnet":"192.168.1.0/24","applianceIp":"1.2.3.4"}' 'https://api.meraki.com/api/v0/networks/{networkId}/vlans'
> ```


```javascript
function createNetworkVlans(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkVlans |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkVlans'] = new CreateNetworkVlansModel({"key":"value"});

    controller.createNetworkVlans(input, function(error, response, context) {

    
    });
```



### <a name="get_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.getNetworkVlan") getNetworkVlan

> Return a VLAN
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/vlans/{vlanId}'
> ```


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



### <a name="update_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.updateNetworkVlan") updateNetworkVlan

> Update a VLAN
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"id":"1234","networkId":"N_24329156","name":"My VLAN","applianceIp":"1.2.3.4","subnet":"192.168.1.0/24","fixedIpAssignments":"{}","reservedIpRanges":"[]","dnsNameservers":"google_dns"}' 'https://api.meraki.com/api/v0/networks/{networkId}/vlans/{vlanId}'
> ```


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



### <a name="delete_network_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.deleteNetworkVlan") deleteNetworkVlan

> Delete a VLAN from a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/{networkId}/vlans/{vlanId}'
> ```


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



### <a name="get_network_vlans_enabled_state"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.getNetworkVlansEnabledState") getNetworkVlansEnabledState

> Returns the enabled status of VLANs for the network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/vlansEnabledState'
> ```


```javascript
function getNetworkVlansEnabledState(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkVlansEnabledState(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_vlans_enabled_state"></a>![Method: ](https://apidocs.io/img/method.png ".VLANsController.updateNetworkVlansEnabledState") updateNetworkVlansEnabledState

> Enable/Disable VLANs for the given network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"enabled":true}' 'https://api.meraki.com/api/v0/networks/{networkId}/vlansEnabledState'
> ```


```javascript
function updateNetworkVlansEnabledState(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkVlansEnabledState |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['updateNetworkVlansEnabledState'] = new UpdateNetworkVlansEnabledStateModel({"key":"value"});

    controller.updateNetworkVlansEnabledState(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/connectionStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/connectionStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]/connectionStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/connectionStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[clientId]/connectionStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/latencyStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/latencyStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]/latencyStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/latencyStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[clientId]/latencyStats'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/failedConnections'
> ```


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

## <a name="analytics_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AnalyticsController") AnalyticsController

### Get singleton instance

The singleton instance of the ``` AnalyticsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AnalyticsController;
```

### <a name="get_device_camera_analytics_recent"></a>![Method: ](https://apidocs.io/img/method.png ".AnalyticsController.getDeviceCameraAnalyticsRecent") getDeviceCameraAnalyticsRecent

> Returns most recent record for analytics zones
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/recent'
> ```


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



### <a name="get_device_camera_analytics_live"></a>![Method: ](https://apidocs.io/img/method.png ".AnalyticsController.getDeviceCameraAnalyticsLive") getDeviceCameraAnalyticsLive

> Returns live state from camera of analytics zones
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/live'
> ```


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



### <a name="get_device_camera_analytics_overview"></a>![Method: ](https://apidocs.io/img/method.png ".AnalyticsController.getDeviceCameraAnalyticsOverview") getDeviceCameraAnalyticsOverview

> Returns an overview of aggregate analytics data for a timespan
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/{serial}/camera/analytics/overview'
> ```


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
        input['timespan'] = 244;

    controller.getDeviceCameraAnalyticsOverview(input, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_zone_history"></a>![Method: ](https://apidocs.io/img/method.png ".AnalyticsController.getDeviceCameraAnalyticsZoneHistory") getDeviceCameraAnalyticsZoneHistory

> Return historical records for analytic zones
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/{serial}/camera/analytics/zones/{zoneId}/history'
> ```


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
        input['timespan'] = 244;
        input['resolution'] = 244;

    controller.getDeviceCameraAnalyticsZoneHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_zones"></a>![Method: ](https://apidocs.io/img/method.png ".AnalyticsController.getDeviceCameraAnalyticsZones") getDeviceCameraAnalyticsZones

> Returns all configured analytic zones for this camera
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/[serial]/camera/analytics/zones'
> ```


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



[Back to List of Controllers](#list_of_controllers)

## <a name="api_usage_controller"></a>![Class: ](https://apidocs.io/img/class.png ".APIUsageController") APIUsageController

### Get singleton instance

The singleton instance of the ``` APIUsageController ``` class can be accessed from the API Client.

```javascript
var controller = lib.APIUsageController;
```

### <a name="get_organization_api_requests"></a>![Method: ](https://apidocs.io/img/method.png ".APIUsageController.getOrganizationApiRequests") getOrganizationApiRequests

> List the API requests made by an organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/{organizationId}/apiRequests'
> ```


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
        input['timespan'] = 244;
        input['perPage'] = 244;
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/bluetoothClients/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/bluetoothClients'
> ```


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
        input['perPage'] = 244;
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/bluetoothSettings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"scanningEnabled":true,"advertisingEnabled":true,"uuid":"00000000-0000-0000-000-000000000000","majorMinorAssignmentMode":"Non-unique","major":1}' 'https://api.meraki.com/api/v0/networks/{networkId}/bluetoothSettings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/{organizationId}/networks'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Long Island Office","timeZone":"America/Los_Angeles","tags":" tag1 tag2 ","disableMyMerakiCom":false,"type":"appliance switch camera"}' 'https://api.meraki.com/api/v0/organizations/{organizationId}/networks'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"Long Island Office","timeZone":"America/Los_Angeles","tags":" tag1 tag2 ","disableMyMerakiCom":false}' 'https://api.meraki.com/api/v0/networks/{networkId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/{networkId}'
> ```


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



### <a name="create_bind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createBindNetwork") createBindNetwork

> Bind a network to a template.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"configTemplateId":"N_23952905","autoBind":false}' 'https://api.meraki.com/api/v0/networks/{networkId}/bind'
> ```


```javascript
function createBindNetwork(input, callback)
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

    controller.createBindNetwork(input, function(error, response, context) {

    
    });
```



### <a name="create_unbind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createUnbindNetwork") createUnbindNetwork

> Unbind a network from a template.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/{networkId}/unbind'
> ```


```javascript
function createUnbindNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.createUnbindNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTraffic") getNetworkTraffic

> The traffic analysis data for this network.
> <a href="https://documentation.meraki.com/MR/Monitoring_and_Reporting/Hostname_Visibility">Traffic Analysis with Hostname Visibility</a> must be enabled on the network.
> 
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/traffic'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/accessPolicies'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/airMarshal'
> ```


```javascript
function getNetworkAirMarshal(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['timespan'] = 244;

    controller.getNetworkAirMarshal(input, function(error, response, context) {

    
    });
```



### <a name="get_network_site_to_site_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSiteToSiteVpn") getNetworkSiteToSiteVpn

> Return the site-to-site VPN settings of a network. Only valid for MX networks.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/siteToSiteVpn'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"mode":"spoke","hubs":[{"hubId":"N_4901849","useDefaultRoute":true},{"hubId":"N_1892489","useDefaultRoute":false}],"subnets":[{"localSubnet":"192.168.1.0/24","useVpn":true},{"localSubnet":"192.168.128.0/24","useVpn":true}]}' 'https://api.meraki.com/api/v0/networks/{networkId}/siteToSiteVpn'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/cameras/[serial]/videoLink'
> ```


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



### <a name="create_snapshot_network_camera"></a>![Method: ](https://apidocs.io/img/method.png ".CamerasController.createSnapshotNetworkCamera") createSnapshotNetworkCamera

> Generate a snapshot of what the camera sees at the specified time and return a link to that image.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/[networkId]/cameras/[serial]/snapshot'
> ```


```javascript
function createSnapshotNetworkCamera(input, callback)
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

    controller.createSnapshotNetworkCamera(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[idOrMacOrIp]'
> ```


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



### <a name="create_provision_network_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.createProvisionNetworkClients") createProvisionNetworkClients

> Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"mac":"00:11:22:33:44:55","name":"Miles's phone","devicePolicy":"Group policy","groupPolicyId":"101"}' 'https://api.meraki.com/api/v0/networks/[networkId]/clients/provision'
> ```


```javascript
function createProvisionNetworkClients(input, callback)
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

    controller.createProvisionNetworkClients(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientUsageHistory") getNetworkClientUsageHistory

> Return the client's daily usage history. Usage data is in kilobytes.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[idOrMacOrIp]/usageHistory'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[mac]/policy?timespan=7200'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"mac":"00:11:22:33:44:55","type":"Group policy","groupPolicyId":"101"}' 'https://api.meraki.com/api/v0/networks/[networkId]/clients/[mac]/policy'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[id]/clients/[mac]/splashAuthorizationStatus'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"ssids":{"0":{"isAuthorized":true,"authorizedAt":"2017-07-19 16:24:13 UTC","expiresAt":"2017-07-20 16:24:13 UTC"},"2":{"isAuthorized":false}}}' 'https://api.meraki.com/api/v0/networks/[id]/clients/[mac]/splashAuthorizationStatus'
> ```


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



### <a name="get_network_client_connection_health"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientConnectionHealth") getNetworkClientConnectionHealth

> Return the connection health status for a client and all its uplinks.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[id]/clients/[idOrMacOrIp]/connectionHealth'
> ```


```javascript
function getNetworkClientConnectionHealth(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| idOrMacOrIp |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['idOrMacOrIp'] = 'idOrMacOrIp';

    controller.getNetworkClientConnectionHealth(input, function(error, response, context) {

    
    });
```



### <a name="get_network_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClients") getNetworkClients

> List the clients that have used this network in the timespan
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/clients'
> ```


```javascript
function getNetworkClients(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['t0'] = 't0';
        input['timespan'] = 203;
        input['perPage'] = 203;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClients(input, function(error, response, context) {

    
    });
```



### <a name="get_device_clients"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getDeviceClients") getDeviceClients

> List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/devices/{serial}/clients'
> ```


```javascript
function getDeviceClients(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var input = [];
        input['serial'] = 'serial';
        input['t0'] = 't0';
        input['timespan'] = 203;

    controller.getDeviceClients(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_traffic_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientTrafficHistory") getNetworkClientTrafficHistory

> Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/clients/{idOrMacOrIp}/trafficHistory'
> ```


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
        input['perPage'] = 203;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientTrafficHistory(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_events"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientEvents") getNetworkClientEvents

> Return the events associated with this client
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/clients/{idOrMacOrIp}/events'
> ```


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
        input['perPage'] = 203;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientEvents(input, function(error, response, context) {

    
    });
```



### <a name="get_network_client_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".ClientsController.getNetworkClientLatencyHistory") getNetworkClientLatencyHistory

> Return the latency history for a client. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/clients/{idOrMacOrIp}/latencyHistory?timespan=7200'
> ```


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
        input['timespan'] = 203;
        input['resolution'] = 203;

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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/configTemplates'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/organizations/[organizationId]/configTemplates/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My AP","lat":37.4180951010362,"lng":-122.098531723022,"serial":"Q234-ABCD-5678","mac":"00:11:22:33:44:55","tags":" recently-added "}' 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]/performance'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]/uplink'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/devices/[serial]/lldp_cdp?timespan=7200'
> ```


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



### <a name="create_claim_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.createClaimNetworkDevices") createClaimNetworkDevices

> Claim a device into a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"serial":"Q234-ABCD-5678"}' 'https://api.meraki.com/api/v0/networks/{networkId}/devices/claim'
> ```


```javascript
function createClaimNetworkDevices(input, callback)
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

    controller.createClaimNetworkDevices(input, function(error, response, context) {

    
    });
```



### <a name="create_remove_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.createRemoveNetworkDevice") createRemoveNetworkDevice

> Remove a single device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/remove'
> ```


```javascript
function createRemoveNetworkDevice(input, callback)
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

    controller.createRemoveNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="get_network_device_loss_and_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getNetworkDeviceLossAndLatencyHistory") getNetworkDeviceLossAndLatencyHistory

> Get the uplink loss percentage and latency in milliseconds for a wired network device.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/lossAndLatencyHistory?uplink=wan1&ip=1.2.3.4&timespan=7200'
> ```


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
| uplink |  ``` Optional ```  | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2. The default is wan1. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['ip'] = 'ip';
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 39;
        input['resolution'] = 39;
        input['uplink'] = 'uplink';

    controller.getNetworkDeviceLossAndLatencyHistory(input, function(error, response, context) {

    
    });
```



### <a name="create_reboot_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.createRebootNetworkDevice") createRebootNetworkDevice

> Reboot a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/reboot'
> ```


```javascript
function createRebootNetworkDevice(input, callback)
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

    controller.createRebootNetworkDevice(input, function(error, response, context) {

    
    });
```



### <a name="create_blink_leds_network_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.createBlinkLedsNetworkDevice") createBlinkLedsNetworkDevice

> Blink the LEDs on a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"duration":20,"period":160,"duty":50}' 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/blinkLeds'
> ```


```javascript
function createBlinkLedsNetworkDevice(input, callback)
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

    controller.createBlinkLedsNetworkDevice(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/cellularFirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"comment":"Allow TCP traffic to subnet with HTTP servers.","policy":"allow","protocol":"tcp","destPort":443,"destCidr":"192.168.1.0/24","srcPort":"Any","srcCidr":"Any","syslogEnabled":false}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/cellularFirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/l3FirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"comment":"Allow TCP traffic to subnet with HTTP servers.","policy":"allow","protocol":"tcp","destPort":443,"destCidr":"192.168.1.0/24","srcPort":"Any","srcCidr":"Any","syslogEnabled":false}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/l3FirewallRules'
> ```


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

## <a name="mxvpn_firewall_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MXVPNFirewallController") MXVPNFirewallController

### Get singleton instance

The singleton instance of the ``` MXVPNFirewallController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MXVPNFirewallController;
```

### <a name="get_organization_vpn_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".MXVPNFirewallController.getOrganizationVpnFirewallRules") getOrganizationVpnFirewallRules

> Return the firewall rules for an organization's site-to-site VPN
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/vpnFirewallRules'
> ```


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

> Update firewall rules of an organization's site-to-site VPN
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"comment":"Allow TCP traffic to subnet with HTTP servers.","policy":"allow","protocol":"tcp","destPort":443,"destCidr":"192.168.1.0/24","srcPort":"Any","srcCidr":"Any","syslogEnabled":false}]}' 'https://api.meraki.com/api/v0/organizations/[organizationId]/vpnFirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]/l3FirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rules":[{"comment":"Allow TCP traffic to subnet with HTTP servers.","policy":"allow","protocol":"tcp","destPort":443,"destCidr":"192.168.1.0/24"}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/ssids/[number]/l3FirewallRules'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/groupPolicies'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"No video streaming","scheduling":{"enabled":true,"monday":{"active":true,"from":"9:00","to":"17:00"},"tuesday":{"active":true,"from":"9:00","to":"17:00"},"wednesday":{"active":true,"from":"9:00","to":"17:00"},"thursday":{"active":true,"from":"9:00","to":"17:00"},"friday":{"active":true,"from":"9:00","to":"17:00"},"saturday":{"active":false,"from":"0:00","to":"24:00"},"sunday":{"active":false,"from":"0:00","to":"24:00"}},"bandwidth":{"settings":"custom","bandwidthLimits":{"limitUp":1000000,"limitDown":1000000}}}' 'https://api.meraki.com/api/v0/networks/{networkId}/groupPolicies'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/groupPolicies/{groupPolicyId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"No video streaming","scheduling":{"enabled":true,"monday":{"active":true,"from":"9:00","to":"17:00"},"tuesday":{"active":true,"from":"9:00","to":"17:00"},"wednesday":{"active":true,"from":"9:00","to":"17:00"},"thursday":{"active":true,"from":"9:00","to":"17:00"},"friday":{"active":true,"from":"9:00","to":"17:00"},"saturday":{"active":false,"from":"0:00","to":"24:00"},"sunday":{"active":false,"from":"0:00","to":"24:00"}},"bandwidth":{"settings":"custom","bandwidthLimits":{"limitUp":1000000,"limitDown":1000000}}}' 'https://api.meraki.com/api/v0/networks/{networkId}/groupPolicies/{groupPolicyId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/{networkId}/groupPolicies/{groupPolicyId}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My HTTP server","url":"https://www.example.com/webhooks","sharedSecret":"foobar"}' 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My HTTP server","url":"https://www.example.com/webhooks","sharedSecret":"foobar"}' 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers/webhookTests'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/httpServers/webhookTests/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/merakiAuthUsers'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/merakiAuthUsers/[id]'
> ```


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

## <a name="open_api_spec_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OpenAPISpecController") OpenAPISpecController

### Get singleton instance

The singleton instance of the ``` OpenAPISpecController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OpenAPISpecController;
```

### <a name="get_organization_openapi_spec"></a>![Method: ](https://apidocs.io/img/method.png ".OpenAPISpecController.getOrganizationOpenapiSpec") getOrganizationOpenapiSpec

> Return the OpenAPI Specification of the organization's API documentation in JSON
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/openapiSpec'
> ```


```javascript
function getOrganizationOpenapiSpec(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationOpenapiSpec(organizationId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organization_alert_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationAlertSettingsController") OrganizationAlertSettingsController

### Get singleton instance

The singleton instance of the ``` OrganizationAlertSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationAlertSettingsController;
```

### <a name="get_organization_alert_settings"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationAlertSettingsController.getOrganizationAlertSettings") getOrganizationAlertSettings

> Return the alert configuration for this organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/alertSettings'
> ```


```javascript
function getOrganizationAlertSettings(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationAlertSettings(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_alert_settings"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationAlertSettingsController.updateOrganizationAlertSettings") updateOrganizationAlertSettings

> Update the alert configuration for this organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"defaultDestinations":{"emails":["miles@meraki.com"],"allAdmins":true},"alerts":[{"type":"insightAppOutage","enabled":true,"alertDestinations":{"emails":["miles@meraki.com"],"allAdmins":false},"filters":{"alertOnAllApps":true}}]}' 'https://api.meraki.com/api/v0/organizations/[organizationId]/alertSettings'
> ```


```javascript
function updateOrganizationAlertSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationAlertSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['updateOrganizationAlertSettings'] = new UpdateOrganizationAlertSettingsModel({"key":"value"});

    controller.updateOrganizationAlertSettings(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="organizations_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationsController") OrganizationsController

### Get singleton instance

The singleton instance of the ``` OrganizationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationsController;
```

### <a name="create_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizations") createOrganizations

> Create a new organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My organization"}' 'https://api.meraki.com/api/v0/organizations'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My organization"}' 'https://api.meraki.com/api/v0/organizations/[id]'
> ```


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



### <a name="create_clone_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createCloneOrganization") createCloneOrganization

> Create a new organization by cloning the addressed organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My organization"}' 'https://api.meraki.com/api/v0/organizations/[id]/clone'
> ```


```javascript
function createCloneOrganization(input, callback)
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

    controller.createCloneOrganization(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_license_state"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLicenseState") getOrganizationLicenseState

> Return the license state for an organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]/licenseState'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]/inventory'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]/deviceStatuses'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]/snmp'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"v2cEnabled":false,"v3Enabled":false}' 'https://api.meraki.com/api/v0/organizations/[id]/snmp'
> ```


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



### <a name="get_organization_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationThirdPartyVPNPeers") getOrganizationThirdPartyVPNPeers

> Return the third party VPN peers for an organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[id]/thirdPartyVPNPeers'
> ```


```javascript
function getOrganizationThirdPartyVPNPeers(id, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var id = 'id';

    controller.getOrganizationThirdPartyVPNPeers(id, function(error, response, context) {

    
    });
```



### <a name="update_organization_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationThirdPartyVPNPeers") updateOrganizationThirdPartyVPNPeers

> Update the third party VPN peers for an organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '[[{"name":"My peer 1","publicIp":"123.123.123.1","privateSubnets":["192.168.1.0/24","192.168.128.0/24"],"secret":"asdf1234","ipsecPolicies":{"ikeCipherAlgo":["tripledes"],"ikeAuthAlgo":["sha1"],"ikeDiffieHellmanGroup":["group2"],"ikeLifetime":"28800","childCipherAlgo":["aes128"],"childAuthAlgo":["sha1"],"childPfsGroup":["disabled"],"childLifetime":"28800"}},{"name":"My peer 2","publicIp":"123.123.123.2","privateSubnets":["192.168.2.0/24","192.168.129.0/24"],"secret":"asdf56785678567856785678","ipsecPoliciesPreset":"default"}]]' 'https://api.meraki.com/api/v0/organizations/[id]/thirdPartyVPNPeers'
> ```


```javascript
function updateOrganizationThirdPartyVPNPeers(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationThirdPartyVPNPeers |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['id'] = 'id';
        input['updateOrganizationThirdPartyVPNPeers'] = new UpdateOrganizationThirdPartyVPNPeersModel({"key":"value"});

    controller.updateOrganizationThirdPartyVPNPeers(input, function(error, response, context) {

    
    });
```



### <a name="create_claim_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createClaimOrganization") createClaimOrganization

> Claim a device, license key, or order into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory. These three types of claims are mutually exclusive and cannot be performed in one request.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"order":"4CXXXXXXX"}' 'https://api.meraki.com/api/v0/organizations/{organizationId}/claim'
> ```


```javascript
function createClaimOrganization(input, callback)
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

    controller.createClaimOrganization(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_uplinks_loss_and_latency"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationUplinksLossAndLatency") getOrganizationUplinksLossAndLatency

> Return the uplink loss and latency for every MX in the organization from 2 - 7 minutes ago
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/{organizationId}/uplinksLossAndLatency'
> ```


```javascript
function getOrganizationUplinksLossAndLatency(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| uplink |  ``` Optional ```  | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2. Default will return all uplinks. |
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



### <a name="get_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizations") getOrganizations

> List the organizations that the user has privileges on
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations'
> ```


```javascript
function getOrganizations(callback)
```

#### Example Usage

```javascript


    controller.getOrganizations(function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_announcements_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneAnnouncementsController") PhoneAnnouncementsController

### Get singleton instance

The singleton instance of the ``` PhoneAnnouncementsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneAnnouncementsController;
```

### <a name="get_network_phone_announcements"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAnnouncementsController.getNetworkPhoneAnnouncements") getNetworkPhoneAnnouncements

> List all announcement groups in a network.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAnnouncements'
> ```


```javascript
function getNetworkPhoneAnnouncements(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneAnnouncements(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_phone_announcements"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAnnouncementsController.createNetworkPhoneAnnouncements") createNetworkPhoneAnnouncements

> Add an announcement group.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My announcement group"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAnnouncements'
> ```


```javascript
function createNetworkPhoneAnnouncements(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPhoneAnnouncements |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkPhoneAnnouncements'] = new CreateNetworkPhoneAnnouncementsModel({"key":"value"});

    controller.createNetworkPhoneAnnouncements(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_phone_announcement"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAnnouncementsController.deleteNetworkPhoneAnnouncement") deleteNetworkPhoneAnnouncement

> Delete an announcement group.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAnnouncements/[id]'
> ```


```javascript
function deleteNetworkPhoneAnnouncement(input, callback)
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

    controller.deleteNetworkPhoneAnnouncement(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_assignments_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneAssignmentsController") PhoneAssignmentsController

### Get singleton instance

The singleton instance of the ``` PhoneAssignmentsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneAssignmentsController;
```

### <a name="get_network_phone_assignments"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAssignmentsController.getNetworkPhoneAssignments") getNetworkPhoneAssignments

> List all phones in a network and their contact assignment
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAssignments'
> ```


```javascript
function getNetworkPhoneAssignments(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneAssignments(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_phone_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAssignmentsController.getNetworkPhoneAssignment") getNetworkPhoneAssignment

> Return a phone's contact assignment
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAssignments/[serial]'
> ```


```javascript
function getNetworkPhoneAssignment(input, callback)
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

    controller.getNetworkPhoneAssignment(input, function(error, response, context) {

    
    });
```



### <a name="update_network_phone_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAssignmentsController.updateNetworkPhoneAssignment") updateNetworkPhoneAssignment

> Assign a contact and number(s) to a phone
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"contactId":"823","contactType":"Google","publicNumber":["+15555555555"],"ext":"1234"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAssignments/[serial]'
> ```


```javascript
function updateNetworkPhoneAssignment(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkPhoneAssignment |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['updateNetworkPhoneAssignment'] = new UpdateNetworkPhoneAssignmentModel({"key":"value"});

    controller.updateNetworkPhoneAssignment(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_phone_assignment"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneAssignmentsController.deleteNetworkPhoneAssignment") deleteNetworkPhoneAssignment

> Remove a phone assignment (unprovision a phone)
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/phoneAssignments/[serial]'
> ```


```javascript
function deleteNetworkPhoneAssignment(input, callback)
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

    controller.deleteNetworkPhoneAssignment(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_callgroups_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneCallgroupsController") PhoneCallgroupsController

### Get singleton instance

The singleton instance of the ``` PhoneCallgroupsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneCallgroupsController;
```

### <a name="get_network_phone_callgroups"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneCallgroupsController.getNetworkPhoneCallgroups") getNetworkPhoneCallgroups

> List all call groups in a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneCallgroups'
> ```


```javascript
function getNetworkPhoneCallgroups(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneCallgroups(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_phone_callgroups"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneCallgroupsController.createNetworkPhoneCallgroups") createNetworkPhoneCallgroups

> Create a new call group.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Sales Group","ext":"1234","publicNumber":"+15555555555","ringStrategy":"ring-all","scope":"some","tags":["sales","support"],"noAnswerAction":"transfer-to-ext","transferExtension":"1003"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneCallgroups'
> ```


```javascript
function createNetworkPhoneCallgroups(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPhoneCallgroups |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkPhoneCallgroups'] = new CreateNetworkPhoneCallgroupsModel({"key":"value"});

    controller.createNetworkPhoneCallgroups(input, function(error, response, context) {

    
    });
```



### <a name="get_network_phone_callgroup"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneCallgroupsController.getNetworkPhoneCallgroup") getNetworkPhoneCallgroup

> Show a call group's details
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneCallgroups/[id]'
> ```


```javascript
function getNetworkPhoneCallgroup(input, callback)
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

    controller.getNetworkPhoneCallgroup(input, function(error, response, context) {

    
    });
```



### <a name="update_network_phone_callgroup"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneCallgroupsController.updateNetworkPhoneCallgroup") updateNetworkPhoneCallgroup

> Update a call group's details. Only submit parameters you would like to update. Omitting any parameters will leave them as-is.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"ext":"1234","publicNumber":"+15555555555","ringStrategy":"ring-all","scope":"some","tags":["sales","support"],"noAnswerAction":"transfer-to-ext","transferExtension":"1003"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneCallgroups/[id]'
> ```


```javascript
function updateNetworkPhoneCallgroup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkPhoneCallgroup |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';
        input['updateNetworkPhoneCallgroup'] = new UpdateNetworkPhoneCallgroupModel({"key":"value"});

    controller.updateNetworkPhoneCallgroup(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_phone_callgroup"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneCallgroupsController.deleteNetworkPhoneCallgroup") deleteNetworkPhoneCallgroup

> Delete a call group
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/phoneCallgroups/[id]'
> ```


```javascript
function deleteNetworkPhoneCallgroup(input, callback)
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

    controller.deleteNetworkPhoneCallgroup(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_conference_rooms_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneConferenceRoomsController") PhoneConferenceRoomsController

### Get singleton instance

The singleton instance of the ``` PhoneConferenceRoomsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneConferenceRoomsController;
```

### <a name="get_network_phone_conference_rooms"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneConferenceRoomsController.getNetworkPhoneConferenceRooms") getNetworkPhoneConferenceRooms

> List all the phone conference rooms in a network.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneConferenceRooms'
> ```


```javascript
function getNetworkPhoneConferenceRooms(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneConferenceRooms(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_phone_conference_rooms"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneConferenceRoomsController.createNetworkPhoneConferenceRooms") createNetworkPhoneConferenceRooms

> Add a conference room.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Meraki Conference Room"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneConferenceRooms'
> ```


```javascript
function createNetworkPhoneConferenceRooms(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPhoneConferenceRooms |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkPhoneConferenceRooms'] = new CreateNetworkPhoneConferenceRoomsModel({"key":"value"});

    controller.createNetworkPhoneConferenceRooms(input, function(error, response, context) {

    
    });
```



### <a name="get_network_phone_conference_room"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneConferenceRoomsController.getNetworkPhoneConferenceRoom") getNetworkPhoneConferenceRoom

> Show a conference room's details.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneConferenceRooms/[id]'
> ```


```javascript
function getNetworkPhoneConferenceRoom(input, callback)
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

    controller.getNetworkPhoneConferenceRoom(input, function(error, response, context) {

    
    });
```



### <a name="update_network_phone_conference_room"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneConferenceRoomsController.updateNetworkPhoneConferenceRoom") updateNetworkPhoneConferenceRoom

> Update a conference room's. Only submit parameters you would like to update. Omitting any parameters will leave them as-is.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"Meraki Conference Room"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneConferenceRooms/[id]'
> ```


```javascript
function updateNetworkPhoneConferenceRoom(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkPhoneConferenceRoom |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['id'] = 'id';
        input['updateNetworkPhoneConferenceRoom'] = new UpdateNetworkPhoneConferenceRoomModel({"key":"value"});

    controller.updateNetworkPhoneConferenceRoom(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_phone_conference_room"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneConferenceRoomsController.deleteNetworkPhoneConferenceRoom") deleteNetworkPhoneConferenceRoom

> Delete a conference room.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/phoneConferenceRooms/[id]'
> ```


```javascript
function deleteNetworkPhoneConferenceRoom(input, callback)
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

    controller.deleteNetworkPhoneConferenceRoom(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_contacts_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneContactsController") PhoneContactsController

### Get singleton instance

The singleton instance of the ``` PhoneContactsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneContactsController;
```

### <a name="get_network_phone_contacts"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneContactsController.getNetworkPhoneContacts") getNetworkPhoneContacts

> List the phone contacts in a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneContacts'
> ```


```javascript
function getNetworkPhoneContacts(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneContacts(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_phone_contacts"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneContactsController.createNetworkPhoneContacts") createNetworkPhoneContacts

> Add a contact
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Miles Meraki"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneContacts'
> ```


```javascript
function createNetworkPhoneContacts(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPhoneContacts |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkPhoneContacts'] = new CreateNetworkPhoneContactsModel({"key":"value"});

    controller.createNetworkPhoneContacts(input, function(error, response, context) {

    
    });
```



### <a name="update_network_phone_contact"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneContactsController.updateNetworkPhoneContact") updateNetworkPhoneContact

> Update a phone contact. Google Directory contacts cannot be modified.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"Miles Meraki"}' 'https://api.meraki.com/api/v0/networks/[networkId]/phoneContacts/[contactId]'
> ```


```javascript
function updateNetworkPhoneContact(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| contactId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkPhoneContact |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['contactId'] = 'contactId';
        input['updateNetworkPhoneContact'] = new UpdateNetworkPhoneContactModel({"key":"value"});

    controller.updateNetworkPhoneContact(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_phone_contact"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneContactsController.deleteNetworkPhoneContact") deleteNetworkPhoneContact

> Delete a phone contact. Google Directory contacts cannot be removed.
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/phoneContacts/[contactId]'
> ```


```javascript
function deleteNetworkPhoneContact(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| contactId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['contactId'] = 'contactId';

    controller.deleteNetworkPhoneContact(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="phone_numbers_controller"></a>![Class: ](https://apidocs.io/img/class.png ".PhoneNumbersController") PhoneNumbersController

### Get singleton instance

The singleton instance of the ``` PhoneNumbersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.PhoneNumbersController;
```

### <a name="get_network_phone_numbers"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumbersController.getNetworkPhoneNumbers") getNetworkPhoneNumbers

> List all the phone numbers in a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneNumbers'
> ```


```javascript
function getNetworkPhoneNumbers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneNumbers(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_phone_numbers_available"></a>![Method: ](https://apidocs.io/img/method.png ".PhoneNumbersController.getNetworkPhoneNumbersAvailable") getNetworkPhoneNumbersAvailable

> List the available phone numbers in a network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/phoneNumbers/available'
> ```


```javascript
function getNetworkPhoneNumbersAvailable(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPhoneNumbersAvailable(networkId, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/pii/piiKeys'
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/pii/smDevicesForKey'
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/pii/smOwnersForKey'
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/pii/requests'
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -X POST -H 'Content-Type: application/json' --data-binary '{"type":"delete", "datasets":"["usage","events"]", "mac":"00:77:00:77:00:77"}' 'https://api.meraki.com/api/v0/networks/[networkId]/pii/requests'
> 
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/pii/requests/[id]'
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/pii/requests/[id]'
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

## <a name="radio_settings_controller"></a>![Class: ](https://apidocs.io/img/class.png ".RadioSettingsController") RadioSettingsController

### Get singleton instance

The singleton instance of the ``` RadioSettingsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.RadioSettingsController;
```

### <a name="get_network_device_wireless_radio_settings"></a>![Method: ](https://apidocs.io/img/method.png ".RadioSettingsController.getNetworkDeviceWirelessRadioSettings") getNetworkDeviceWirelessRadioSettings

> Return the radio settings of a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/wireless/radioSettings'
> ```


```javascript
function getNetworkDeviceWirelessRadioSettings(input, callback)
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

    controller.getNetworkDeviceWirelessRadioSettings(input, function(error, response, context) {

    
    });
```



### <a name="update_network_device_wireless_radio_settings"></a>![Method: ](https://apidocs.io/img/method.png ".RadioSettingsController.updateNetworkDeviceWirelessRadioSettings") updateNetworkDeviceWirelessRadioSettings

> Update the radio settings of a device
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"rfProfileId":"1234"}' 'https://api.meraki.com/api/v0/networks/{networkId}/devices/{serial}/wireless/radioSettings'
> ```


```javascript
function updateNetworkDeviceWirelessRadioSettings(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkDeviceWirelessRadioSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['serial'] = 'serial';
        input['updateNetworkDeviceWirelessRadioSettings'] = new UpdateNetworkDeviceWirelessRadioSettingsModel({"key":"value"});

    controller.updateNetworkDeviceWirelessRadioSettings(input, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_rf_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".RadioSettingsController.getNetworkWirelessRfProfiles") getNetworkWirelessRfProfiles

> List the non-basic RF profiles for this network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/network/{networkId}/wireless/rfProfiles'
> ```


```javascript
function getNetworkWirelessRfProfiles(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| includeTemplateProfiles |  ``` Optional ```  | If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template
      should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['includeTemplateProfiles'] = true;

    controller.getNetworkWirelessRfProfiles(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/samlRoles'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/organizations/[organizationId]/samlRoles'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/samlRoles/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT 'https://api.meraki.com/api/v0/organizations/[organizationId]/samlRoles/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/organizations/[organizationId]/samlRoles/[id]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/{networkId}/clients/{clientId}/securityEvents'
> ```


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
        input['perPage'] = 131;
        input['t0'] = 't0';
        input['t1'] = 't1';
        input['timespan'] = 131;
        input['startingAfter'] = 'startingAfter';
        input['endingBefore'] = 'endingBefore';

    controller.getNetworkClientSecurityEvents(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="geofence_regions_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GeofenceRegionsController") GeofenceRegionsController

### Get singleton instance

The singleton instance of the ``` GeofenceRegionsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GeofenceRegionsController;
```

### <a name="get_network_sm_geofence_regions"></a>![Method: ](https://apidocs.io/img/method.png ".GeofenceRegionsController.getNetworkSmGeofenceRegions") getNetworkSmGeofenceRegions

> List the geofence's regions associated with the specified geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]/regions'
> ```


```javascript
function getNetworkSmGeofenceRegions(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';

    controller.getNetworkSmGeofenceRegions(input, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_geofence_regions"></a>![Method: ](https://apidocs.io/img/method.png ".GeofenceRegionsController.createNetworkSmGeofenceRegions") createNetworkSmGeofenceRegions

> Add a new geofence region to the specified geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"description":"This is a sample geofence region","type":"circle","lat":10,"lon":10,"radius":10}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]/regions'
> ```


```javascript
function createNetworkSmGeofenceRegions(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmGeofenceRegions |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';
        input['createNetworkSmGeofenceRegions'] = new CreateNetworkSmGeofenceRegionsModel({"key":"value"});

    controller.createNetworkSmGeofenceRegions(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_geofence_region"></a>![Method: ](https://apidocs.io/img/method.png ".GeofenceRegionsController.getNetworkSmGeofenceRegion") getNetworkSmGeofenceRegion

> Show the specified geofence region
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]/regions/[regionId]'
> ```


```javascript
function getNetworkSmGeofenceRegion(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |
| regionId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';
        input['regionId'] = 'regionId';

    controller.getNetworkSmGeofenceRegion(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_geofence_region"></a>![Method: ](https://apidocs.io/img/method.png ".GeofenceRegionsController.updateNetworkSmGeofenceRegion") updateNetworkSmGeofenceRegion

> Update a specified geofence region
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"description":"This is a sample geofence region","type":"circle","lat":10,"lon":10,"radius":10}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]/regions/[regionId]'
> ```


```javascript
function updateNetworkSmGeofenceRegion(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |
| regionId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmGeofenceRegion |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';
        input['regionId'] = 'regionId';
        input['updateNetworkSmGeofenceRegion'] = new UpdateNetworkSmGeofenceRegionModel({"key":"value"});

    controller.updateNetworkSmGeofenceRegion(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_geofence_region"></a>![Method: ](https://apidocs.io/img/method.png ".GeofenceRegionsController.deleteNetworkSmGeofenceRegion") deleteNetworkSmGeofenceRegion

> Delete a geofence region attached to the specified geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]/regions/[regionId]'
> ```


```javascript
function deleteNetworkSmGeofenceRegion(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |
| regionId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';
        input['regionId'] = 'regionId';

    controller.deleteNetworkSmGeofenceRegion(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="geofences_controller"></a>![Class: ](https://apidocs.io/img/class.png ".GeofencesController") GeofencesController

### Get singleton instance

The singleton instance of the ``` GeofencesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.GeofencesController;
```

### <a name="get_network_sm_geofences"></a>![Method: ](https://apidocs.io/img/method.png ".GeofencesController.getNetworkSmGeofences") getNetworkSmGeofences

> List the geofences in this network
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences'
> ```


```javascript
function getNetworkSmGeofences(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSmGeofences(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_geofences"></a>![Method: ](https://apidocs.io/img/method.png ".GeofencesController.createNetworkSmGeofences") createNetworkSmGeofences

> Add a new geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My Geofence","description":"This is a sample geofence","maxTimeOutside":5}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences'
> ```


```javascript
function createNetworkSmGeofences(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmGeofences |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['createNetworkSmGeofences'] = new CreateNetworkSmGeofencesModel({"key":"value"});

    controller.createNetworkSmGeofences(input, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_geofence"></a>![Method: ](https://apidocs.io/img/method.png ".GeofencesController.getNetworkSmGeofence") getNetworkSmGeofence

> Returns a specific geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]'
> ```


```javascript
function getNetworkSmGeofence(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';

    controller.getNetworkSmGeofence(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_geofence"></a>![Method: ](https://apidocs.io/img/method.png ".GeofencesController.updateNetworkSmGeofence") updateNetworkSmGeofence

> Update a geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My Geofence","description":"This is a sample geofence","maxTimeOutside":5}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofenceId]'
> ```


```javascript
function updateNetworkSmGeofence(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmGeofence |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = 'geofenceId';
        input['updateNetworkSmGeofence'] = new UpdateNetworkSmGeofenceModel({"key":"value"});

    controller.updateNetworkSmGeofence(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_geofence"></a>![Method: ](https://apidocs.io/img/method.png ".GeofencesController.deleteNetworkSmGeofence") deleteNetworkSmGeofence

> Delete a geofence
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/sm/geofences/[geofence_id]'
> ```


```javascript
function deleteNetworkSmGeofence(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| geofenceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['geofenceId'] = geofence_id;

    controller.deleteNetworkSmGeofence(input, function(error, response, context) {

    
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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/targetGroups'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"My target group","scope":"none","tags":"[]","type":"devices"}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/targetGroups'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/targetGroups/[targetGroupId]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"My target group","scope":"none","tags":"[]","type":"devices"}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/targetGroups/[targetGroupId]'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/sm/targetGroups/[targetGroupId]'
> ```


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

## <a name="tags_controller"></a>![Class: ](https://apidocs.io/img/class.png ".TagsController") TagsController

### Get singleton instance

The singleton instance of the ``` TagsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.TagsController;
```

### <a name="get_network_sm_tags"></a>![Method: ](https://apidocs.io/img/method.png ".TagsController.getNetworkSmTags") getNetworkSmTags

> List the tags on this node group
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/tags'
> ```


```javascript
function getNetworkSmTags(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSmTags(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_tag"></a>![Method: ](https://apidocs.io/img/method.png ".TagsController.getNetworkSmTag") getNetworkSmTag

> Show a specific tag
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/sm/tags/[tagId]'
> ```


```javascript
function getNetworkSmTag(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| tagId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['tagId'] = 'tagId';

    controller.getNetworkSmTag(input, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_tag"></a>![Method: ](https://apidocs.io/img/method.png ".TagsController.updateNetworkSmTag") updateNetworkSmTag

> Update a tag
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"Geofence Tag","type":"geofence","scope":"withAll","tags":["tag","test"]}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/tags/[tagId]'
> ```


```javascript
function updateNetworkSmTag(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| tagId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmTag |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['tagId'] = 'tagId';
        input['updateNetworkSmTag'] = new UpdateNetworkSmTagModel({"key":"value"});

    controller.updateNetworkSmTag(input, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_tag"></a>![Method: ](https://apidocs.io/img/method.png ".TagsController.createNetworkSmTag") createNetworkSmTag

> Add a new tag
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Geofence Tag","type":"geofence","scope":"withAll","tags":["tag","test"]}' 'https://api.meraki.com/api/v0/networks/[networkId]/sm/tags/[tagId]'
> ```


```javascript
function createNetworkSmTag(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| tagId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmTag |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['tagId'] = 'tagId';
        input['createNetworkSmTag'] = new CreateNetworkSmTagModel({"key":"value"});

    controller.createNetworkSmTag(input, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_tag"></a>![Method: ](https://apidocs.io/img/method.png ".TagsController.deleteNetworkSmTag") deleteNetworkSmTag

> Delete a tag
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/networks/[networkId]/sm/tags/[tagId]'
> ```


```javascript
function deleteNetworkSmTag(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| tagId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['networkId'] = 'networkId';
        input['tagId'] = 'tagId';

    controller.deleteNetworkSmTag(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="action_batches_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ActionBatchesController") ActionBatchesController

### Get singleton instance

The singleton instance of the ``` ActionBatchesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ActionBatchesController;
```

### <a name="create_organization_action_batches"></a>![Method: ](https://apidocs.io/img/method.png ".ActionBatchesController.createOrganizationActionBatches") createOrganizationActionBatches

> Create an action batch
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST 'https://api.meraki.com/api/v0/organizations/[organizationId]/actionBatches'
> ```


```javascript
function createOrganizationActionBatches(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationActionBatches |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['createOrganizationActionBatches'] = new CreateOrganizationActionBatchesModel({"key":"value"});

    controller.createOrganizationActionBatches(input, function(error, response, context) {

    
    });
```



### <a name="get_organization_action_batches"></a>![Method: ](https://apidocs.io/img/method.png ".ActionBatchesController.getOrganizationActionBatches") getOrganizationActionBatches

> Return the list of action batches in the organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/actionBatches'
> ```


```javascript
function getOrganizationActionBatches(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationActionBatches(organizationId, function(error, response, context) {

    
    });
```



### <a name="get_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".ActionBatchesController.getOrganizationActionBatch") getOrganizationActionBatch

> Return an action batch
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/[organizationId]/actionBatches/[id]'
> ```


```javascript
function getOrganizationActionBatch(input, callback)
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

    controller.getOrganizationActionBatch(input, function(error, response, context) {

    
    });
```



### <a name="delete_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".ActionBatchesController.deleteOrganizationActionBatch") deleteOrganizationActionBatch

> Delete an action batch
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/organizations/[organizationId]/actionBatches/[id]'
> ```


```javascript
function deleteOrganizationActionBatch(input, callback)
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

    controller.deleteOrganizationActionBatch(input, function(error, response, context) {

    
    });
```



### <a name="update_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".ActionBatchesController.updateOrganizationActionBatch") updateOrganizationActionBatch

> Update an action batch
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT 'https://api.meraki.com/api/v0/organizations/[organizationId]/actionBatches/[id]'
> ```


```javascript
function updateOrganizationActionBatch(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| id |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationActionBatch |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var input = [];
        input['organizationId'] = 'organizationId';
        input['id'] = 'id';
        input['updateOrganizationActionBatch'] = new UpdateOrganizationActionBatchModel({"key":"value"});

    controller.updateOrganizationActionBatch(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="admins_controller"></a>![Class: ](https://apidocs.io/img/class.png ".AdminsController") AdminsController

### Get singleton instance

The singleton instance of the ``` AdminsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.AdminsController;
```

### <a name="get_organization_admins"></a>![Method: ](https://apidocs.io/img/method.png ".AdminsController.getOrganizationAdmins") getOrganizationAdmins

> List the dashboard administrators in this organization
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/organizations/{organizationId}/admins'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X POST --data-binary '{"name":"Miles Meraki","email":"miles@meraki.com","orgAccess":"none","tags":[{"tag":"west","access":"read-only"}]}' 'https://api.meraki.com/api/v0/organizations/{organizationId}/admins'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"name":"Miles Meraki","email":"miles@meraki.com","orgAccess":"none","tags":[{"tag":"west","access":"read-only"}]}' 'https://api.meraki.com/api/v0/organizations/{organizationId}/admins/{id}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X DELETE 'https://api.meraki.com/api/v0/organizations/{organizationId}/admins/{id}'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X GET 'https://api.meraki.com/api/v0/networks/[networkId]/alertSettings'
> ```


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
> 
> ## SAMPLE REQUEST
> 
> ```
> curl -L -H 'X-Cisco-Meraki-API-Key: <key>' -H 'Content-Type: application/json' -X PUT --data-binary '{"defaultDestinations":{"emails":["miles@meraki.com"],"allAdmins":true,"snmp":true},"alerts":[{"type":"gatewayDown","enabled":true,"alertDestinations":{"emails":["miles@meraki.com"],"allAdmins":false,"snmp":false},"filters":{"timeout":60}}]}' 'https://api.meraki.com/api/v0/networks/[networkId]/alertSettings'
> ```


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



