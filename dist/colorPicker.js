angular.module('tb-color-picker', [])
    .run(['$templateCache', function($templateCache) {
        $templateCache.put('color-picker.tpl.html', '<div class="color-picker">'+
            '<div class="color-palette-display"><div class="selected-color" ng-if="vm.color.code!=\'multicolor\'" ng-style="{\'background-color\': vm.color.code}"></div><div class="selected-color" ng-if="vm.color.code==\'multicolor\'" style="background-color: \'red\';background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet)""></div> <div class="color-palette-display-text">{{vm.color.name}}</div></div>' +
            '<div class="color-palette">'+
			'<div ng-repeat="option in vm.options" ng-click="vm.changeColor(option)">'+
                '<div class="color-palette-inside" title="{{option.name}}"'+
                'ng-if="option.code!=\'multicolor\'"'+
				'ng-style="{\'background-color\': option.code}"'+
                'ng-class="{\'palette-selected-color\': option.code == vm.color.code, \'transparent-color\': option.code == \'transparent\'}" >'+
                '</div>'+
				
				'<div class="color-palette-inside" title="{{option.name}}"'+
                'ng-if="option.code==\'multicolor\'"'+
				'style="background-color: \'red\';background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet);background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet);background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet);background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet)"'+
                'ng-class="{\'palette-selected-color\': option.code == vm.color.code, \'transparent-color\': option.code == \'transparent\'}" >'+
                '</div>'+
				'<div class="color-palette-text">'+
					'{{option.name}}'+
				'</div>'+
			'</div>'+
            '</div>'+
        '</div>');
    }])
	
	
	
	// background: red; /* For browsers that do not support gradients */
   // background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); /* For Safari 5.1 to 6.0 */
    //background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Opera 11.1 to 12.0 */
    //background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); /* For Firefox 3.6 to 15 */
   // background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); /* Standard syntax (must be last) */
	
	
	
    .directive('colorPicker', function () {
        return {
            restrict: 'E',
            templateUrl: 'color-picker.tpl.html',
            replace: true,
            controller: colorPickerDirectiveController,
            controllerAs: 'vm',
            bindToController: {
                color: '=',
				colortext: '=',
                options: '=',
                onColorChanged: '&'
            }
        };

        function colorPickerDirectiveController($scope) {
            var vm = this;
            
            vm.changeColor = function (option) {				
                if(vm.color != option) {
                    var old = vm.color;
                    vm.color = option;
					vm.colortext = option.name;
                    vm.onColorChanged({newColor: option, oldColor: old});
                }
            }

        }
    });