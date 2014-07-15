
angular.module('<%= modulename %>', [
  'ngRoute',
  <% if (example) { %>'<%= modulename %>.todo',
  <% } %>'<%= nameDashed %>-templates'
])<% if (example) { %>
.config(function ($routeProvider <% if (html5mode) { %>, $locationProvider <% } %> ){
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/<%= nameDashed %>/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
    <% if (html5mode) { %>
    $locationProvider.html5mode(true);
    <% } %>
})<% } %>;
