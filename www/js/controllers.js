angular.module('starter.controllers', [])
.controller('btnCtrl', function($scope) {
    $scope.world = function()
    {
        alert("hello world");
    }
})
.controller('MainCtrl', function($scope, $http){
    //Get Server Text
    var on_response = function(response)
    {
      var header_texts = response.data;
        for(var key in header_texts )
            {
                $scope.header_text = header_texts[key]["ad"];
                console.log(key);
                setTimeout(2000);
            }
    };
    var server_text_url = "http://104.131.22.246/dev/smartdsefiles/header_text.txt";
    $http.get(server_text_url).then(on_response);
});