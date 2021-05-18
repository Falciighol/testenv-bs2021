function InitFunctionCtrl($scope, $http) {
    
    let init = function() {
        $scope.properties.callback($http)
    }
    
    init()
    
}