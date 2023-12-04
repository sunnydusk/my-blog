---
title: 使用Copilot Chat进行一个项目的搭建和修改
top: 199
tags: 
  - 自学
categories: 
  - Git
date: 2023-12-04 18:36:26
---
# 使用Copilot Chat进行一个项目的搭建和修改
## 准备工作
本节仅使用**VS code**和插件**Copilot Chat**   
1. 进入VScode，进入扩展(Ctrl+Shift+X)界面，搜索我们所需要的插件：github copilot和github copilot chat；   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041902013.png)
在界面上让代码区域打开聊天界面；  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041904907.png)
2. 在聊天区域，可以通过"/"开始询问代码问题    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041925909.png)
其中：  
`@workspace` 可以询问当前工作空间的问题；   
`/api` 可以询问关于VS code的扩展开发；   
`/explain` 可以解释所选代码的工作原理；   
`/fix` 针对所选代码中的问题提出修复建议；   
`/new`  进行新工作区的脚手架代码；   
`/newNotebook` 可以创建一个新的Jupyter笔记本；    
`/terminal` 询问如何在终端中执行某些操作；   
`/tests` 为所选代码生成单元测试；  
`/help`  获取帮助的消息；  
`/clear` 清理工作区域；  
注：copilot chat支持中文输入；

---
## 创建项目
进入聊天界面；   
在输入框输入"/"选择"/new"；
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041938856.png)
在输入框中输入你需要创建的项目要求，越详细越好，提交等待chat回复：
这里使用Vue进行创建，其他语言同理：    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041943096.png)
然后点击按钮“Create Workspace”，跳转到“选择文件夹”界面，选择创建的项目位置，然后点击“Select as Parent Rolder”，等待chat创建好；    
项目创建之后，进入资源管理器中，就可以看到chat创建的项目了：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041949530.png)
据图可以看到，项目没有依赖，不能运行，需要自行暗转依赖：   

```shell
npm i
```

![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312041953851.png)

安装好依赖之后这个项目就可以运行啦！！！   
项目打开的效果：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042012838.png)
现在我们能发现，chat创建出来的项目只能说是半成品，所以我们还需要使用chat工具，进行进一步完善：
比如说，我们现在只有登录页面，登录页面应该能跳转到注册页面，所以我们可以这样使用：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042018316.png)
将自己的问题再次提交到chat页面，让他给出解决方法：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042019121.png)
这里他给了一个解决方案，我们尝试着加入进去；   
依照chat给的解决方案，页面拥有了我们想要的效果，也能实现界面的跳转；  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/0Q[LR8_(CBI{QKVU%36]9@3.png)
在它生成的代码块右上角，会有三个按钮，第一个是*复制*，第二个是*在光标处插入*，第三个如图所示，我们可以根据需要进行使用。   

---
## 使用其他功能
1. `/elplain`解释代码   
使用这个命令，在输入框输入你想知道的代码，可以给你代码的解释；  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042133418.png)
这里我随意复制了一段代码，然后提交上去，给我了一段解释；
2. `/fix`修复bug    
当你代码报错时，可以使用这个，将错误提示信息提交上去让chat修改；
现在，我在App.vue文件中写入一行js代码
```javascript
throw new Error()
```
它给我了一串报错：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042129616.png)   
我复制这段错误进行解析：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042130958.png)
它给我了解决方案让我删除这句代码；   
3. `/tests`测试项目    
我们可以测试整个项目，使用"/tests"然后输入测试完整项目，它会给你一些方案：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042029728.png)
先会给你一些基本测试用例；   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042030478.png)
相应的测试用例代码；   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312042109397.png)
给你一些相应的建议；   
