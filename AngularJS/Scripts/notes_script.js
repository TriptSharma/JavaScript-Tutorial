var module = angular
            .module("employee",[])
            .controller("employeeController", function($scope){
                var ceos = [
                    {
                        name:"Jeff Bezos",
                        company:"Amazon",
                        likes:0,
                        dislikes:0
                    },
                    {
                        name:"Elon Musk",
                        company:"SpaceX",
                        likes:0,
                        dislikes:0
                    }
                ]
                $scope.ceos = ceos;

                $scope.increaseLikes = function(ceo){
                    ceo.likes++;
                }

                $scope.increaseDislikes = function(ceo){
                    ceo.dislikes++;
                }
            })