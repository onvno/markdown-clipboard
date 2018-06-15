/**
 * author: https://github.com/onvno
 */

/**
 * 考虑几中情况
 * 1. 未选择任何内容 - 此时应该取title内容
 * 2. 选择文字 - 此时拼接内容 + url
 * 3. 选择链接 - 此时调整url链接的格式
 * 4. 选择图片 - 调整url链接为图片格式
 */


const handleClip = () => {
    var userSelection = window.getSelection();
    // console.log(userSelection);
    // console.log(userSelection.getRangeAt(0).cloneContents())
    // debugger

    var selectCont = userSelection.toString().trim();
    var finalCont;
    
    /**
     * 3 - handle text
     * 1 - handle img link
     */
    if(userSelection.anchorNode.nodeType === 3){
        if(selectCont.length == 0 ){
            finalCont = '[' + document.title.trim() + '](' + window.location.href +')';
        }
        else if (selectCont.indexOf('http')==0 || selectCont.indexOf('ftp')==0) {
            var httpWholeHref = 
                userSelection.anchorNode.parentNode && userSelection.anchorNode.parentNode.href ? 
                userSelection.anchorNode.parentNode.href :
                userSelection.anchorNode.nextSibling && userSelection.anchorNode.nextSibling.href ?
                userSelection.anchorNode.nextSibling.href :
                selectCont
            finalCont = '[Replace Text : MarkDown ClipBoard](' + httpWholeHref + ')';
        }
        else if (userSelection.anchorNode.parentNode && userSelection.anchorNode.parentNode.href) {
            finalCont = '[' + userSelection + '](' + userSelection.anchorNode.parentNode.href + ')';
        }
        else if (userSelection.anchorNode.nextSibling && userSelection.anchorNode.nextSibling.href) {
            finalCont = '[' + userSelection + '](' + userSelection.anchorNode.nextSibling.href + ')';
        }
        else {
            finalCont = '[' + userSelection +  '](' + window.location.href + ')'
        }
    }
    else if (userSelection.anchorNode.nodeType === 1) {
        var range = userSelection.getRangeAt(0)
        var fragment = range.cloneContents()
        var imgs = fragment.querySelectorAll('img')
        var imgAry = Array.from(imgs);
        finalCont = '';
        imgAry.map((item) => {
            finalCont += '![' + item.getAttribute('alt') + ']' + '(' + item.getAttribute('src') +')\n';
        })
    }
    
    // console.log("finalCont:", finalCont);

    /**
     * Copy Content
     */
    var hiddenDOM
    if(!document.querySelector('#markdown-clipboard-chrome-extension')) {
        const el = document.createElement('textarea');
        el.setAttribute("id", 'markdown-clipboard-chrome-extension');
        el.setAttribute("style", "visiblity:hidden; height: 0px")
        document.body.appendChild(el);
    }
    hiddenDOM = document.querySelector('#markdown-clipboard-chrome-extension')
    hiddenDOM.value = finalCont;
    hiddenDOM.select();

    if (document.execCommand('copy')) {
        console.log('Clipboard Copy Success !')
    } else {
        alert('MarkDown ClipBoard : Copy Failure, Please Update Browser Version or Contact Author!');
    }
}

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.action == 'copy') {
        handleClip()
    }
  });