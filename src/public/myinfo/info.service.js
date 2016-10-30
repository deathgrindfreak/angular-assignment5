(function() {
    'use strict';

    angular.module('public')
        .service('MyInfoService', MyInfoService);

    function MyInfoService() {
        var self = this;

        self.selections = {};

        self.setSelections = function(selections) {
            self.selections = selections;
        };

        self.getSelections = function() {
            return self.selections;
        };
    }
})();
