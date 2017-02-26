(function () {
    angular.module('qmaticBank', ['ui.router', 'qmaticBank.bankAgent']);


    angular
        .module('qmaticBank')
        .config(configuration);

    /**
     *
     * @param $stateProvider
     * @param $urlRouterProvider
     */
    function configuration($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/bankProfile');

        $stateProvider
            .state('bankProfile', {
                url: '/bankProfile',
                controller: 'AgentCtrl',
                controllerAs: 'vm',
                templateUrl: 'bank-agent/bankProfile.html'
            });

        $stateProvider
            .state('aboutUs', {
                url: '/aboutUs',
                templateUrl: 'about-us/aboutUs.html'
            });
    }
})();