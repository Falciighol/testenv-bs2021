function ($scope, $http, $location, $log, $window, modalService) {
    this.action = function() {
        $scope.properties.javascript($http);
        closeModal($scope.properties.closeModalOnSuccess)
    }

    function closeModal(shouldClose) {
        if(shouldClose)
            modalService.close();
    }
}