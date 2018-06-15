/**
 * 几种情况
 * 1. 未选择任何内容 - 此时应该取title内容
 * 2. 选择文字 - 此时拼接内容 + url
 * 3. 选择链接 - 此时调整url链接的格式
 * 4. 选择图片 - 调整url链接为图片格式
 */


var userSelection, text;
userSelection = window.getSelection();
if (!(text = userSelection.text)) {
    text = userSelection;
}
console.log("userSelection:", userSelection);
console.log("indexOf http:", userSelection.toString(), userSelection.toString().indexOf('http'));
// var testStr = "[" + text.anchorNode.data.slice(text.anchorOffset, text.focusOffset) +  "](" + window.location.href + ")";
var testFinal;

var selectCont = userSelection.toString().trim();
console.log("selectCont:", selectCont, selectCont.length);

/**
 * 3 - text
 * 1 - href
 */
console.log(userSelection.anchorNode.nodeType);
if(userSelection.anchorNode.nodeType === 3){
    if(selectCont.length == 0 ){
        testFinal = '[' + document.title.trim() + '](' + window.location.href +')';
    }
    else if (selectCont.indexOf('http')>=0 || selectCont.indexOf('ftp')>=0) {
        testFinal = '[请替换此处链接文本](' + selectCont + ')';
    }
    else {
        testFinal = "[" + userSelection +  "](" + window.location.href + ")"
    }
}
else if (userSelection.anchorNode.nodeType === 1) {
    var range = userSelection.getRangeAt(0)
    var fragment = range.cloneContents()
    var imgs = fragment.querySelectorAll('img')
    var imgAry = Array.from(imgs);
    testFinal = '';
    imgAry.map((item) => {
        testFinal += '![' + item.getAttribute('alt') + ']' + '(' + item.getAttribute('src') +')\n';
        console.log("img:", testFinal)
    })
}


// 类数组转化为数组，mapFn为回调函数
// Array.from(arrayLike, mapFn, thisArg)



console.log("testFinal:", testFinal);




var inputHidden
if(!document.querySelector('#inputHidden')) {
    const el = document.createElement('textarea');
    el.setAttribute("id", 'inputHidden');
    // el.setAttribute("style", "display:none; border: 1px solid blue;")
    document.body.appendChild(el);
}
inputHidden = document.querySelector('#inputHidden')



inputHidden.value = testFinal;
inputHidden.select();
if (document.execCommand('copy')) {
    console.log('copyed')
// alert('成功复制到剪贴板,请粘贴查看,' + );
} else {
// alert('复制失败,换个浏览器试试');
}