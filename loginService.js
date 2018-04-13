app.service("loginService", loginService);
function loginService($http){
    this.authenticate= function (arg1) {
       return $http.post("http://localhost:5000/login",arg1).then(function (posRes){
           return posRes;
       }, function (errRes){
           return errRes;
       })
    }
}