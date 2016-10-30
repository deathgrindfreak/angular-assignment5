(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'categories', 'MyInfoService'];
    function SignUpController($scope, categories, MyInfoService) {
        var self = this;
        
        var items = categories.menu_items;
        var menuItems = items.map(function(c) {
            return c.short_name;
        });

        self.checkMenuItem = function() {
            var invalid = menuItems.indexOf(self.favorite) === -1;
            $scope.signUpForm.favorite.$invalid = invalid;
            $scope.signUpForm.$valid = !invalid;
        };

        self.submitForm = function(isValid) {
            if (isValid) {
                self.showSuccess = true;
                self.showError = false;
                MyInfoService.setSelections({
                    firstName : self.firstName,
                    lastName : self.lastName,
                    phone : self.phone,
                    email : self.email,
                    favorite : items[menuItems.indexOf(self.favorite)]
                });
            } else {
                self.showSuccess = false;
                self.showError = true;
            }
        };
    }
})();
