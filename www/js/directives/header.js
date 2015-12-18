app.directive('header', function()
{
    return {
      restrict: 'E',
      scope: {
          info: '='
      },
    templateUrl: 'views/header.html'
    };
});
            