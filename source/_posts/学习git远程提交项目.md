---
title: git远程提交至华为云并实现代码审查
top: 200
date: 2023-11-29 19:59:03
tags: study
---

# 使用git提交项目至远程仓库
**使用华为云code和WebStorm示例**
## 准备阶段  
1. 需要管理员创建一个仓库，然后管理员邀请进入仓库；  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292059419.png)
需要保证自己是`开发者`，其次，需要在`设置`中`保护分支`中保证自己的身份能提交和推送，由管理员更改。   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292102973.png)
若自己的身份不能提交，后续工作也不能提交。   
2. 准备git软件  
在windows下安装：[Git下载Windows](https://git-scm.com/download/win)    
若官方Git下载太慢，可以使用淘宝镜像：[Git淘宝镜像](https://registry.npmmirror.com/binary.html?path=git-for-windows/)    
注：**Git的命令可以在cmd下运行**
3. 准备自己的 **.ssh**密钥   
以下操作在`Git Bush`下运行；  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292112031.png)    
首先，配置用户名和邮箱  
```shell
git config --global user.name "用户名"   
git config --global user.email "邮箱"   
```

执行上述命令进行配置；   
之后执行以下命令生成.ssh密钥：
```shell
ssh-keygen -t rsa -C "邮箱"
```

在C盘的user文件夹里面会有一个.ssh文件夹   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292210445.png)
在.ssh文件夹内会有几个文件，这里我们只需要公钥（记事本进入复制全部数据）。   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292215511.png)  
再次进入华为云控制台，在仓库里面，找到**设置我的SSH密钥**   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292218335.png) 
进入设置SSH密钥后页面右上会有**添加SSH密钥**按钮，进入将复制的公钥放入密钥中，标题会自动生成，然后确认；同样，页面下方会有生成SSH密钥的教程。    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292220740.png)  

---
## 开始操作
1. 对本地项目进行操作   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292225388.png)  
在需要提交的项目文件夹处右键，选择`Open Git Bash here` ，进入Git操作页    
依次输入以下命令：   
初始化本地仓库
```shell
git init
``` 

如果没有进行ssh密钥参考上述方法；  
建立本地与远程仓库的连接：
首先需要复制远程仓库SSH地址：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292232979.png)
```shell
git remote add arigin 远程仓库地址   
```

将项目所有文件加到缓存区域：   
```shell
git add .  
```

将缓冲区提到本地仓库：   
```shell
git commit -m "注释"
```

将远程仓库和本地仓库同步：  
```shell
git pull--rebase origin master  
```

将仓库文件推送至远程仓库：    
```shell
git push -u origin master  
```

上述是一个完整的git上传到远程仓库的做法。如果项目已经进行git初始化之后，可以使用WebStorm中远程连接：   
当项目初始化本地仓库之后，WebStorm中标题栏会有一个Git的工具栏：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292242163.png)
点击工具栏后在后面会有一个`管理远程…`的菜单，进入之后，将远程仓库的地址填入，确认即可。  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292247063.png)
在界面左下角点击git会看见一个本地，一个远程，远程就是设置远程仓库的地址，如果存在远程，即操作成功。   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292249390.png)     

---
## 代码审查
进行代码审查   
进入华为云仓库，进入代码托管界面，查看代码是否成功提交到仓库  
进入代码检查，点击自己的仓库名，进入`代码检查详情`：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311292255000.png)
将不需要检查的文件勾上，然后点击右上角开始检查，等待检查完成即可。   
