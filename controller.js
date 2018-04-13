app.controller("loginController",loginController);
    function loginController($scope,loginService){
            $scope.var_one = {};
            $scope.login = function (){
                loginService.authenticate($scope.var_one).then(function (response) {
                    console.log(response);
                });
            };

    }

