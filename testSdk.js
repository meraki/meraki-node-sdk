"use strict";

const lib = require("./lib");
const configuration = lib.Configuration;
configuration.xCiscoMerakiAPIKey = "093b24e85df15a3e66f1fc359f4c48493eaa1b73"; // DevNet Sandbox Key
configuration.BASEURI = "https://n143.meraki.com/api/v0/";

const promise = controller.getOrganizations();
promise.then(
  response => {
    console.log("Organizations:", response);
    // this block will be executed on successful endpoint call
    // `response` will be of type 'mixed'
  },
  err => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
  }
);

/*
const controller = lib.ClientsController;



let input = [];
let networkId = "L_643451796760561416";
input["networkId"] = networkId;

let provisionNetworkClients = new lib.ProvisionNetworkClientsModel();

provisionNetworkClients.mac = "11:22:33:44:22:11";
provisionNetworkClients.name = "test";
provisionNetworkClients.devicePolicy = "Normal";
input["provisionNetworkClients"] = provisionNetworkClients;

const promise = controller.createProvisionNetworkClients(input);
promise.then(
  response => {
    console.log(response);
    // this block will be executed on successful endpoint call
    // `response` will be of type 'mixed'
  },
  err => {
    console.log(err);
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
  }
);
*/

const controller = lib.APIUsageController;

const input = { organizationId: 306267, timespan: 86400, method: "POST" };

const promise = controller.getOrganizationApiRequests(input);
promise.then(
  response => {
    console.log(response);
    // this block will be executed on successful endpoint call
    // `response` will be of type 'mixed'
  },
  err => {
    console.log(err);
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
  }
);
