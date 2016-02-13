var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstName = 'Haider';
    $scope.lastName = 'Malik';
    $scope.city = 'Faisalabad';
    $scope.address = 'House no 5A Block GM Abad Faisalabad';
    var songs=[{
     artist:'Tiesto',
     albumName:'Vol 1'
    },
    {
    	artist:'Hardweel',
    	albumName:'Vol 2'
    },
    {
    	artist:'Nicky Romero',
    	albumName:'Vol 3'
    }
    ];
    $scope.songs=songs;
});
