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
            Name: "Hasanka Sapumal",
            Age: 28,
            experiences: ["Software Engineer", "FullStack Developer", "DevOP"]
        };
        return agentData;
    }

})();