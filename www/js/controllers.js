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
      var header_text_array = [];
        for(var key in header_texts )
            {
                header_text_array.push(header_texts[key]["ad"]);
               
            }
        
      var no_of_header_text = header_text_array.length;
        for(var i = 0; i < no_of_header_text; i++)
            {
                console.log(header_text_array[i]);
            }
    };
    var server_text_url = "http://104.131.22.246/dev/smartdsefiles/header_text.txt";
    $http.get(server_text_url).then(on_response);
});
;