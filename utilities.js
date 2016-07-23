function readURL(input) {
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
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#avatar')
                .attr('src', e.target.result)
            userObject.userAvatar = e.target.result;
            userInfo.saveUser(userObject);
        };
        reader.readAsDataURL(input.files[0]);
    }
}
