var userInfo = (function() {
    var getUser = function() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    var saveUser = function(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    return {
        getUser: getUser,
        saveUser: saveUser
    }
})();
