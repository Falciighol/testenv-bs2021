function HandsontableCtrl($scope) {
    
    let vm = this;
    
    $scope.test = null;
    
    let updateTest = (e) => {
        //console.log("Update test")
        $scope.test = `${e}`;
    }
    
    // Get selected cell
    $scope.selectedIndex = null;
    vm.selectedValue = null;
    
    $scope.$watch("test", function(newValue, oldValue){
        // console.log("TEST CHANGE")
        $scope.properties.test = newValue;
    }, true);
    
    // Actions
    let add = document.getElementById('add');
    let remove = document.getElementById('remove');
    let load = document.getElementById('load');
    
	$scope.updateSelected = function() {
	    vm.selectedValue = hot.getValue();
        console.log("Selected -> ", vm.selectedValue)
	    //$scope.properties.dataset = hot.getData()
	}
    
    Handsontable.dom.addEvent(add, 'click', function () {
        hot.alter('insert_row', $scope.properties.dataset.length);
    });
    
    Handsontable.dom.addEvent(load, 'click', function () {
        hot.loadData($scope.properties.settings.data);
    });
    
    Handsontable.dom.addEvent(remove, 'click', function () {
        hot.alter('remove_row', $scope.properties.dataset.length-1);
    });
    
    $scope.removeSelected = function() {
        if($scope.selectedIndex) {
            hot.alter('remove_row', $scope.selectedIndex)
        }
    }
    
    $scope.export = function() {
        console.log("Exporting...")
        // access to exportFile plugin instance
        const exportPlugin = hot.getPlugin('exportFile');
        
        // export as a string
        exportPlugin.exportAsString('csv');
        
        // export as a blob object
        exportPlugin.exportAsBlob('csv');
        
        // export to downloadable file (named: MyFile.csv)
        exportPlugin.downloadFile('csv', {filename: 'MyFile'});
    }
    
    let container = document.getElementById('handsontable');
    
    let hot = new Handsontable(container, {
        ...$scope.properties.settings,
        colHeaders: $scope.properties.colHeaders,
        columns: $scope.properties.columns,
        licenseKey: 'non-commercial-and-evaluation',
        afterSelection: (row, column, row2, column2, preventScrolling, selectionLayerLevel) => {
            // setting if prevent scrolling after selection
            $scope.selectedIndex = row;
            $scope.updateSelected();
            updateTest(row);
        }
    });
    	
}