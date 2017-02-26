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
		
        function formSubmit(isValid) {
            if (isValid) {
                vm.showTheForm = false;
                AgentService.submitCustomerData(vm.appointmentData);
				
            } else {
				vm.showTheForm = true;
                console.log('Form is not valid');
				
            }
			 
            
			
        }
		
		 function reset() {
			 console.log('inside reset');
        vm.appointmentData = angular.copy(vm.originalAppoinmentData);
		vm.showTheForm = false;
    }
		 function resete() {
			 console.log('inside reseteeeee');
        vm.appointmentData = angular.copy(vm.originalAppoinmentData);
		vm.showTheForm = true;
    }
	
	
    }

})();