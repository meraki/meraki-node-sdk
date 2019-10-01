/**
 * meraki
 *
 * This file was automatically generated for meraki by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of HelpSettings1Model
 */
class HelpSettings1Model extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.helpTab = this.constructor.getValue(obj.helpTab);
        this.getHelpSubtab = this.constructor.getValue(obj.getHelpSubtab);
        this.communitySubtab = this.constructor.getValue(obj.communitySubtab);
        this.casesSubtab = this.constructor.getValue(obj.casesSubtab);
        this.dataProtectionRequestsSubtab =
          this.constructor.getValue(obj.dataProtectionRequestsSubtab);
        this.getHelpSubtabKnowledgeBaseSearch =
          this.constructor.getValue(obj.getHelpSubtabKnowledgeBaseSearch);
        this.universalSearchKnowledgeBaseSearch =
          this.constructor.getValue(obj.universalSearchKnowledgeBaseSearch);
        this.ciscoMerakiProductDocumentation =
          this.constructor.getValue(obj.ciscoMerakiProductDocumentation);
        this.supportContactInfo = this.constructor.getValue(obj.supportContactInfo);
        this.newFeaturesSubtab = this.constructor.getValue(obj.newFeaturesSubtab);
        this.firewallInfoSubtab = this.constructor.getValue(obj.firewallInfoSubtab);
        this.apiDocsSubtab = this.constructor.getValue(obj.apiDocsSubtab);
        this.hardwareReplacementsSubtab = this.constructor.getValue(obj.hardwareReplacementsSubtab);
        this.smForums = this.constructor.getValue(obj.smForums);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'helpTab', realName: 'helpTab' },
            { name: 'getHelpSubtab', realName: 'getHelpSubtab' },
            { name: 'communitySubtab', realName: 'communitySubtab' },
            { name: 'casesSubtab', realName: 'casesSubtab' },
            { name: 'dataProtectionRequestsSubtab', realName: 'dataProtectionRequestsSubtab' },
            {
                name: 'getHelpSubtabKnowledgeBaseSearch',
                realName: 'getHelpSubtabKnowledgeBaseSearch',
            },
            {
                name: 'universalSearchKnowledgeBaseSearch',
                realName: 'universalSearchKnowledgeBaseSearch',
            },
            {
                name: 'ciscoMerakiProductDocumentation',
                realName: 'ciscoMerakiProductDocumentation',
            },
            { name: 'supportContactInfo', realName: 'supportContactInfo' },
            { name: 'newFeaturesSubtab', realName: 'newFeaturesSubtab' },
            { name: 'firewallInfoSubtab', realName: 'firewallInfoSubtab' },
            { name: 'apiDocsSubtab', realName: 'apiDocsSubtab' },
            { name: 'hardwareReplacementsSubtab', realName: 'hardwareReplacementsSubtab' },
            { name: 'smForums', realName: 'smForums' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = HelpSettings1Model;
