$(document).ready(function() {
    var userObject = userInfo.getUser()

    if (userObject === null) {
        userObject = {
            userAvatar: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-128.png',
            userName: 'Username',
            userEmail: 'Email',
            userFollowInfo: 'Follow',
            userTwitter: '@twitter-handle'
        };
    };

    $('#avatar').attr('src', userObject.userAvatar);
    $('#username').text(userObject.userName)
    $('#email').text(userObject.userEmail)
    $('#follow').text(userObject.userFollowInfo)
    $('#twitter').text(userObject.userTwitter)
        //toggle `popup` / `inline` mode
    $.fn.editable.defaults.mode = 'popup';

    //make username editable
    $('#username').editable({
        type: 'text',
        title: 'Enter username',
        success: function(response, newValue) {
            userObject.userName = newValue;
            userInfo.saveUser(userObject);
        }
    });
    $('#email').editable({
        type: 'text',
        title: 'Enter email',
        success: function(response, newValue) {
            userObject.userEmail = newValue;
            userInfo.saveUser(userObject);
        }
    });
    $('#follow').editable({
        type: 'text',
        title: 'Enter follow info',
        success: function(response, newValue) {
            userObject.userFollowInfo = newValue;
            userInfo.saveUser(userObject);
        }
    });
    $('#twitter').editable({
        type: 'text',
        title: 'Enter twitter handle',
        success: function(response, newValue) {
            userObject.userTwitter = newValue;
            userInfo.saveUser(userObject);
        }
    });

});
