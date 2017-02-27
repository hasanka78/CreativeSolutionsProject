/**
 * Created by hasanka78 on 02/27/2017.
 */

(function () {
angular
.module('qmaticBank.bankAgent')
.factory('AgentService', AgentService);

var bankCustomerDataArray = [];

function AgentService() {
    var service = {
        submitCustomerData: submitCustomerData,
        getAgentData: getAgentData
    };
    return service;
}

function submitCustomerData(data) {
    bankCustomerDataArray.push(data);
    console.log(data);
    
}

function getCustommerData() {
    return bankCustomerDataArray;
}

function getAgentData() {
    var agentData = {
        name: "Jane Doe",
        age: 32,
        role: "Senior Banker",
        experience: 7,
        branch : "New York",
        specializedIn : "Loan",
        description : "Jane Doe is a Senior Banker in Parker Bank Internation and has over 7 years of specializing in loan and cooperate banking. She has worked as a team leader on major departments and handles much of the tactical execution of campaigns. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        qualifications: ["B.Sc. (Hons) in Finance", "CIMA Passed Finalist", "ACCA", "Diploma in Computer Literacy"]
    };
    return agentData;
}

})();