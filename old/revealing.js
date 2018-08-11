// 揭示模块模式

var myRevealingModule = function () {

    var privateName = 'Ben Cherry',
        publicVar = 'Hey there!';

    function privateFunction() {
        console.log('name: ' + privateName);
    }

    function publicSetName(strName) {
        privateName = strName;
    }

    function publicGetNmae() {
        privateFunction();
    }

    // 将暴露的公有指针指向到私有函数和属性上
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetNmae
    }
}();

myRevealingModule.getName();