'use strict';

angular.module('myApp.view3', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/view3', {
        templateUrl: 'view3/view3.html',
        controller: 'View3Ctrl',
      });
    }])

    .controller('View3Ctrl', ['$scope', 'BookList', function ($scope, BookList) {
      $scope.msg = 'こんにちは、AngularJS!';
      $scope.myName = '佐藤';
      $scope.books = BookList();
    }])

    .value('BookList', function () {
      return [
        {
          isbn: '978-4-7741-7078-7',
          title: 'サーブレット6JSPポケットリファレンス',
          price: '2680',
          publish: '技術評論社',
          published: new Date(2015, 0, 8)
        },
        {
          isbn: '978-4-7741-6127-3',
          title: 'iPhone/iPad開発ポケットリファレンス',
          price: '2780',
          publish: '技術評論社',
          published: new Date(2013, 10, 23)
        }
      ];
    });
