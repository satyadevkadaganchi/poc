app.service("contactService",contactService);
function contactService($http) {

    this.registration=function (obj){
        return $http.post("/contact",obj).then(function (posRes) {
           return posRes;
        },function (errRes) {
            return errRes;

        });
    };
};