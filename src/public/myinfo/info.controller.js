(function() {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['ApiPath', 'MenuService', 'MyInfoService'];
    function MyInfoController(ApiPath, MenuService, MyInfoService) {
        var self = this;

        var selections = MyInfoService.getSelections();
        self.selections = angular.equals(selections, {}) ? undefined : selections;

        self.menuImage = self.selections === undefined
            ? undefined : ApiPath + '/images/' + self.selections.favorite.short_name + '.jpg';
    }
})();
