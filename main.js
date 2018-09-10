let keys = {
    0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    length: 3,
};

let hash = {
    'q': 'qq.com',
    'w': 'weibo.com',
    'e': 'ele.com',
    'r': 'renren.com',
    't': 'tianya.com',
    'y': 'yy.com',
    'u': 'uc.com',
    'i': 'iqiyi.com',
    'p': undefined,
    'o': 'opera.com',
    'a': 'acfun.com',
    's': 'sohu.com',
    length: 12,
};

let hashInLocal = JSON.parse(localStorage.getItem('zzz') || 'null');

if(hashInLocal) {
    hash = hashInLocal;
}

x = document.getElementById('x');
let index = 0;
while(index < keys.length) {
    div1 = document.createElement('div');
    x.appendChild(div1);
    let index2 = 0;
    while(index2 < keys[index].length) {
        kbd = document.createElement('kbd');
        kbd.textContent = keys[index][index2];
        button = document.createElement("button");
        button.textContent = "编辑";
        button.id = keys[index][index2];
        button.onclick = function (e) {
            console.log(e)
            key = e.target.id;
            x = prompt("请输入一个网址！");
            hash[key] = x;  //编辑hash
            localStorage.setItem('zzz', JSON.stringify(hash));
            console.log("hash,",hash)
        };
        kbd.appendChild(button);
        div1.appendChild(kbd);
        index2 = index2 + 1;
    }
    index = index +1;
}

document.onkeypress = function (e) {
    let key = e['key'];
    console.log("我发现你输入了一个字")
    let website = hash[key];
    console.log(website)
    window.open('http://' + website, '_blank')
}
