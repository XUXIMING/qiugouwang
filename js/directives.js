var qiuGouDirectives = angular.module('qiuGouDirectives', []);

qiuGouDirectives.directive('myOrder',function(){
	return {
		restrict:'E',
		scope: {              // 设置指令对于的scope 
			order:'=item'
      }, 
      templateUrl:'tpls/directivesTpls/order.html',
      replace:true
  }
});
