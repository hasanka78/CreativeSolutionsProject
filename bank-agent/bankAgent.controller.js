(function () {
    angular
        .module('qmaticBank.bankAgent')
        .controller('AgentCtrl', AgentCtrl);

    function AgentCtrl(AgentService) {
        var vm = this;
        vm.formSubmit = formSubmit;
		vm.reset = reset;
		vm.resete = resete;
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

       function resete(form) {
            resetToDefault(form)
            vm.showTheForm = true;
        }
       
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
	
    }

})();