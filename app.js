var app = angular.module("TODO",[]);

app.controller('TODOCtrl', function($scope){

$scope.todos = [ 
'Learn Angular',
'Learn Web Service',
'Learn Spring'
];

$scope.editmode =false;

// add TODO
$scope.addTodo = function(){
$scope.todos.push($scope.newTodo);
console.log($scope.todos);
$scope.newTodo =""; // clear txt box .
}

// edit TODO

$scope.triggerEditMode = function(){
	$scope.editmode =!$scope.editmode; 
}

});
