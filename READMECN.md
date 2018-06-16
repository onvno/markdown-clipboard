# Markdown Clipboard

[English](./README.md)

Chrome 扩展 : Markdown Clipboard. 
网页拷贝文本，链接，图片等，剪切板转为Markdown语法



#### 下载

Chrome商店地址 ： [markdown clipboard](https://chrome.google.com/webstore/detail/markdown-clipboard/kiieboeeejffbjnfejfjphoigfdiiadh?hl=zh-CN)


#### 使用

* 鼠标选择需要拷贝的内容: 文本，链接，图片, 甚至可以什么都不选
* 使用默认快捷键拷贝到剪切板: `Alt + C`,
* 拷贝markdown格式到你想要拷贝的地方去

当然，鼠标选择完内容后, 不使用快捷键，点击扩展图标也能实现拷贝.

#### 支持
不同情况，剪切板返回的内容:

* *不选择任何内容*: [文档标题](页面链接)
* *选择文本链接*: [文本](文本链接)
* *选择http链接*: [默认文本自行替换](文本链接)
* *选择图片*: ![图片alt标记名称](图片链接)

#### 我们不一样
* 当选择的文本中有链接，则返回的剪切板会以[选中文本](选中文本链接)形式返回
* 当选择纯http文字链接时，如选择不完整也无需担心，会返回完整url.
