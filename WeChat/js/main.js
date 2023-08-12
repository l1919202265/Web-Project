(function () {
    var friend = document.getElementsByClassName('friend')[0];
    var friendContainer = document.getElementsByClassName('friendContainer');
    var friendMessage = document.getElementsByClassName('friendMessage')[0];

    var myself = document.getElementsByClassName('myself')[0];
    var myselfContainer = document.getElementsByClassName('myselfContainer');
    var myselfMessage = document.getElementsByClassName('myselfMessage')[0];

    var WeChatcontainer = document.getElementsByClassName('WeChatcontainer')[0];
    var sendBtn = document.getElementById('sendBtn');
    var message = document.getElementById('message');
    var messageList = document.getElementsByClassName('messageList')[0];
    message.addEventListener('input', () => {


    });

    sendBtn.onclick = function auto() {
        console.log(message.value);
        myselfMessage.innerHTML = message.value;
        friendMessage.innerHTML = message.value;
        var cloneMyselfContainer = myselfContainer[0].cloneNode(true);
        var cloneFriendContainer = friendContainer[0].cloneNode(true);
        messageList.appendChild(cloneMyselfContainer)
        messageList.appendChild(cloneFriendContainer);
        var l = friendContainer[0].getAttribute('hidden');
        for (var i = 1; i < friendContainer.length; i++) {
            myselfContainer[i].style.display = 'block';
            friendContainer[i].style.display = 'block';
        }
        message.value = '';
    };
    window.addEventListener('keyup', function (e) {
        e = e || window.Event;
        if (e.key == 'Enter') {
            console.log('Enter');
            sendBtn.onclick()
        }
    })
})();






//判断设备类型
window.addEventListener('load', () => {
    function changeCssPath() {
        var userAgent = navigator.userAgent.toLowerCase();
        var cssPath = '';
        if (userAgent.indexOf('android') !== -1) {
            cssPath = './css/Phone.css';
        } else if (userAgent.indexOf('windows') !== -1) {
            cssPath = './css/PC.css';
        } else if ((userAgent.indexOf('iphone') !== -1) || (userAgent.indexOf('ipad') !== -1)) {
            cssPath = './css/Phone.css';
        } else if ((userAgent.indexOf('macintosh') !== -1) || (userAgent.indexOf('macbook') !== -1)) {
            cssPath = './css/PC.css';
        } else {
            cssPath = 'underfined.css';
        }
        // 修改CSS路径
        var linkElement = document.getElementById('linkPath');
        linkElement.href = cssPath;
    }
    // 调用函数
    changeCssPath();






    // var userAgent = navigator.userAgent;

    // // 判断是否为安卓设备
    // if (/Android/i.test(userAgent)) {
    //     // 安卓设备
    //     console.log('安卓设备');
    // }

    // // 判断是否为 Windows 设备
    // if (/Win/i.test(userAgent)) {
    //     // Windows 设备
    //     console.log('Windows 设备');
    // }

    // // 判断是否为 iPhone 或 iPad 设备
    // if (/iPad|iPhone|iPod/i.test(userAgent)) {
    //     // iPhone 或 iPad 设备
    //     console.log('iPhone 或 iPad 设备');
    // }

    // // 判断是否为 Mac 设备
    // if (/Mac/i.test(userAgent)) {
    //     // Mac 设备
    //     console.log('Mac 设备');
    // }


})
