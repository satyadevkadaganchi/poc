app.controller("contactController",contactController);
function contactController($scope, contactService) {
    $scope.obj={};

    $scope.contact_details = function () {

        contactService.registration($scope.obj).then(function(res){
           $scope.result = res;
        });
    };
}