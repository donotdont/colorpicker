var app = angular.module('example', ['tb-color-picker']);

app.controller('MainCtrl', function($scope) {
    $scope.options = ['transparent','#FF8A80', '#FFD180', '#FFFF8D', '#CFD8DC', '#80D8FF', '#A7FFEB', '#CCFF90'];
	$scope.fullOptions = [
							/*{name:"Transparent",code:"transparent"},
							{name:"Red",code:"#FF8A80"},
							{name:"Orenge",code:"#FFD180"},
							{name:"Yellow",code:"#FFFF8D"},
							{name:"Gray",code:"#CFD8DC"},
							{name:"Blue",code:"#80D8FF"},
							{name:"Pale Turquoise",code:"#A7FFEB"},
							{name:"Green",code:"#CCFF90*/
							
							{name:"Transparent",code:"transparent"},
							{name:"Argenté",code:"#C0C0C0"},
							{name:"Beige",code:"#f5f5dc"},
							{name:"Blanc",code:"#FFFFFF"},
							{name:"Blanc cassé",code:"#fefee2"},
							{name:"Bleu",code:"#80D8FF"},
							{name:"Camel",code:"#c19a6b"},
							{name:"Ecru",code:"#C2B280"},
							{name:"Gris",code:"#808080"},
							{name:"Jaune",code:"#FFFF8D"},
							{name:"Marron",code:"#a52a2a"},
							{name:"Multicolore",code:"multicolor"},
							{name:"Noir",code:"#000000"},
							{name:"Or",code:"#ffd700"},
							{name:"Orange",code:"#FFD180"},
							{name:"Rose",code:"#FF66CC"},
							{name:"Rouge",code:"#FF8A80"},
							{name:"Taupe",code:"#483C32"},
							{name:"Turquoise",code:"#A7FFEB"},
							{name:"Vert",code:"#CCFF90"},
							{name:"Violet",code:"#EE82EE"},
							
						];
						
	$scope.filterColor = function(name){
		return $scope.fullOptions.filter(function(obj){
			return obj.name == name;
		})[0];
	};
	
    //$scope.color = '#FF8A80';
	$scope.color = {};
    $scope.color.index = $scope.fullOptions[0];
	
	$scope.colorModel = 'Multicolore';
	
	$scope.initColor = function(colorModel,color){
		//$scope.$digest(function () {
		return color.index = $scope.filterColor(colorModel);
		//});
	};
	

    $scope.colorChanged = function(newColor, oldColor) {
        console.log('from ', oldColor, ' to ', newColor);
    }
});
