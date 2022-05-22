'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html'),            
            new Route('games', 'games.html',true),
            new Route('pravila', 'pravila.html'),
            new Route('records', 'records.html'),
        ]);
    }
    init();
}());
