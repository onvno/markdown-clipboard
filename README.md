# Markdown Clipboard

[中文文档](./READMECN.md)

Chrome Extension : Markdown Clipboard. 
Copy Text & Img from Web Page , Easy Convert to Markdown syntax.



#### install

Chrome Market Search Markdown Clipboard ： [markdown clipboard](https://chrome.google.com/webstore/detail/markdown-clipboard/kiieboeeejffbjnfejfjphoigfdiiadh?hl=zh-CN)


#### Use

* Select the content you need to paste: Text, Link , Img, event select nothing
* use the default short cut: `Alt + C`,
* then you can paste the format markdown link to where you want

Of course,  after you select your content, click the extension icon also work.

#### Support
the clipboard returned info:

* *Select Nothing*: [Document Title](Page Url)
* *Select Link Text*: [Link Text](Link Url)
* *Select Http Text*: [Default Text to Replace](Link Url)
* *Select Img*: ![img Alt Name](img link)

#### Different
* select text inclues some text with link, return [select text](some text link)
* select `http` link not complete, dont worry, return the whole url
