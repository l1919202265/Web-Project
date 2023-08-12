//Axios接口请求
axios.get('http://www.chenfuguo.cn:5600/getIndexHead', {}).then(res => {
    var indexData = res.data.indexData.data;
    showIndexData(indexData);
})

function showIndexData(indexData) {
    var ul = document.getElementsByClassName('indexData')[0];
    var str = ''
    for (var i = 0; i < indexData.length; i++) {
        str += `<li><a class="aNav" href="${indexData[i].goUrl}">${indexData[i].txt}</a></li>`;
    }
    ul.innerHTML = str;
}

//页面滚动后导航栏效果
window.addEventListener('scroll', function () {
    var nav = document.getElementsByTagName('nav')[0];
    var a = document.getElementsByClassName('aNav');
    var logo = document.getElementsByClassName('logo')[0].children[0];
    var Y = document.documentElement.scrollTop;
    if (Y == 0) {
        nav.style.backgroundColor = '';
        for (var i = 0; i < a.length; i++) {
            a[i].style.color = 'white'
            logo.src = './images/logo.png';
        }
    } else {
        nav.style.backgroundColor = 'white';
        for (var i = 0; i < a.length; i++) {
            a[i].style.color = 'black';
            logo.src = './images/logo1.77137f01.png';
        }
    }
})


//悬浮到图片触发效果
var imgTitle = document.getElementsByClassName('imgTitle');
var imgShow = document.getElementsByClassName('imgShow');
var imgHidden = document.getElementsByClassName('imgHidden');
for (var i = 0; i < imgShow.length; i++) {
    imgShow[i].setAttribute('index', i);
    imgHidden[i].setAttribute('index', i);
    imgHidden[i].style.display = 'none';

    imgShow[i].addEventListener('mouseenter', function () {
        var imgIndex = this.getAttribute('index');

        imgShow[imgIndex].style.display = 'none';
        imgHidden[imgIndex].style.display = 'inline-block';
        imgTitle[imgIndex].style.color = '#197bfe';
    })

    imgHidden[i].addEventListener('mouseleave', function () {
        var imgIndex = this.getAttribute('index')

        imgShow[imgIndex].style.display = 'inline-block';
        imgHidden[imgIndex].style.display = 'none'
        imgTitle[imgIndex].style.color = '';

    })
}
//联系我们  交互
var phoneTop = document.getElementsByClassName('phoneTop')[0];
var phoneDown = document.getElementsByClassName('phoneDown')[0];
var btnphone = document.getElementsByClassName('btnphone')[0];
phoneDown.addEventListener('mouseenter', function () {
    phoneTop.style.display = 'block';
})
phoneTop.addEventListener('mouseenter', function () {
    phoneTop.style.display = 'block';
})
phoneTop.addEventListener('mouseleave', function () {
    phoneTop.style.display = 'none';
})
phoneDown.addEventListener('mouseleave', function () {
    phoneTop.style.display = 'none';
})
btnphone.addEventListener('click', function () {
    document.documentElement.scrollTop = 0;
})


//点击logo有惊喜
var logo = document.getElementsByClassName('logo')[0];
var num = 0;
logo.onclick = function () {
    // 随机添加背景颜色
    num++
    var body = document.getElementsByTagName('body')[0];
    var elements = body.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var str = '#';
        for (var j = 0; j < 8; j++) {
            str += (parseInt(Math.random() * 16).toString(16));
        }
        elements[i].style.backgroundColor = str
        if (num % 2 == 0) {
            elements[i].style.backgroundColor = '';
        }
    }
}

