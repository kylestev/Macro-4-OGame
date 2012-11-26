chrome.runtime.onInstalled.addListener(function(details) {
    var notification = webkitNotifications.createNotification(
        'img/planet.png',
        'Thanks for the install',
        'Thank you for installing Macro 4 OGame the only way to bot your way into the big leagues.'
    );

    notification.show();
});
