/**
 * Created by hasanka78 on 02/27/2017.
 */

 (function () {
    angular
    .module('qmaticBank.bankAgent')
    .controller('AgentCtrl', AgentCtrl);

    function AgentCtrl(AgentService) {
        var vm = this;
        vm.formSubmit = formSubmit;
        vm.reset = reset;
        vm.showForm = showForm;
        vm.agentData = AgentService.getAgentData();
        vm.appointmentData = {
            username: '',
            contact: '',
            email: '',
            date: '',
            comment: '',
            isUrgent: ''
        };
        vm.originalAppoinmentData = {} ;
        
        function formSubmit(isValid, form) {
            if (isValid) {
                vm.showTheForm = false;
                AgentService.submitCustomerData(vm.appointmentData);
                resetToDefault(form);
            } else {
                vm.showTheForm = true;
                console.log('Form is not valid');

            }
        }
        
        function resetToDefault(form) {
            form.$setPristine();
            form.$setUntouched();
            vm.appointmentData = {
                username: '',
                contact: '',
                email: '',
                date: '',
                comment: '',
                isUrgent: ''
            };
        }

        function reset(form) {
            resetToDefault(form);
            vm.showTheForm = false;
        }

        function showForm(form) {
            resetToDefault(form)
            vm.showTheForm = true;
        }
        
        
    }

})();