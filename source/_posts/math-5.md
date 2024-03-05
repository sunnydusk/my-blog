---
title: 高等数学-多元函数微分学及二重积分
top: 16
hexo-math: true
type: "categories"
cover: "https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311302248735.png"
categories: 
  - 升学
tags:
  - 学习资料
  - math
date: 2023-11-24 16:26:00
---

## 多元函数微分学
由多个变量确定的函数称为多元函数。    
### 多元函数的定义域
某函数z，由两个变量确定时，称{% katex %}z=f(x,y){% endkatex %}为二元函数.    
其定义域为{% katex %}x，y{% endkatex %}的取值范围。   
二元函数定义域写法{% katex %}{(x,y)|x,y需要满足的条件}{% endkatex %}。     
例题1：{% katex %}z=\sqrt{y-x^2+1}{% endkatex %}，其定义域为{% katex %}{(x,y)|y-x^2+1\leq 0}{% endkatex %}。   
例题2：{% katex %}z=\ln(x^2+y^2-4)+\sqrt{9-xf^2-y^2}{% endkatex %}，其定义域为{% katex %}{(x,y)|y-x^2+1\leq 0}{% endkatex %}。  
解：{% katex %}x^2+y^2-4> 0,9-x^2-y^2\geq 0{% endkatex %}    
{% katex %}x^2+y^2>4,x^2+y^2\le9{% endkatex %}   
{% katex %}4<x^2+y^2\le 9{% endkatex %}   
例题3：{% katex %}z=\frac{\arcsin 2x}{ln(1-x^2-y^2)}{% endkatex %}的定义域为{% katex %}{(x,y)|-\frac{1}{2}\le x\le \frac{1}{2}且0<x^2+y^2<1}{% endkatex %}。   
解：分子{% katex %}-1\le 2x \le 1{% endkatex %},即{% katex %}-\frac{1}{2}\le x \le \frac{1}{2}{% endkatex %}。  
分母{% katex %}\ln(1-x^2-y^2)\ne 0{% endkatex %}，即{% katex %}1-x^2-y^2\ne 1,x^2+y^2\ne 0{% endkatex %}。  
分母{% katex %}1-x^2-y^2 > 0{% endkatex %}，即{% katex %}x^2+y^2< 1{% endkatex %}。  
即分母定义域{% katex %} 0<x^2+y^2<1{% endkatex %}。  

---
#### 二元函数对应法则
解法：{% katex %}\left\{\begin{matrix}换元\\配凑\end{matrix}\right.{% endkatex %}  
例题1：{% katex %}f(x+y,x-y)=x^2-y^2{% endkatex %}，求{% katex %}f(x,y){% endkatex %}。   
解：{% katex %}x^2-y^2=(x+y)(x-y){% endkatex %}  
{% katex %}f(x+y,x-y)=(x+y)(x-y){% endkatex %}  
{% katex %}f(x,y)=x\cdot y{% endkatex %}    

---
#### 二元函数的极限  
若点{% katex %}P(x,y){% endkatex %}以任意方式趋于点{% katex %}P_0(x_0,y_0){% endkatex %}时，函数{% katex %}f(x,y){% endkatex %}趋于一个常数{% katex %}A{% endkatex %}，则称{% katex %}A为f(x,y){% endkatex %}的极限，记为{% katex %}\lim_{(x,y)\to (x_0,y_0)}f(x,y){% endkatex %}或{% katex %}\lim_{x\to x_0,y \to y_0}f(x,y){% endkatex %}。  
例题1：求{% katex %}\lim_{x \to 0,y \to 2}\frac{\sin xy}{x}{% endkatex %}。   
解：原式{% katex %}=\lim_{x \to 0,y \to 2}\frac{\sin xy}{x}{% endkatex %}   
{% katex %}=\lim_{x \to 0,y \to 2}\frac{xy}{x}=2{% endkatex %}。     

---
### 二元函数偏导数
当{% katex %}y_0{% endkatex %}固定而{% katex %}x{% endkatex%}在{% katex %}x_0{% endkatex%}处有增量{% katex %}\Delta x{% endkatex %}时，称{% katex %}\lim_{\Delta x \to 0} \frac{f(x_0+\Delta x,y_0)-f(x_0,y_0)}{\Delta x} {% endkatex %}为二元函数对{% katex %}x{% endkatex %}的偏导数。   
反之，称{% katex %}\lim_{\Delta y \to 0} \frac{f(x_0,y_0+\Delta x)-f(x_0,y_0)}{\Delta y} {% endkatex %}为二元函数对{% katex %}y{% endkatex %}的偏导数。   
1. 一阶偏导的写法  
设二元函数{% katex %}z=f(x,y){% endkatex %}    
记为{% katex %}\frac{\partial z}{\partial x}或\frac{\partial f}{\partial x},Z_x或f_x(x,y){% endkatex %}为对x的偏导。   
记为{% katex %}\frac{\partial z}{\partial y}或\frac{\partial f}{\partial y},Z_y或f_y(x,y){% endkatex %}为对y的偏导。   
2. 一阶偏导的计算  
{% katex %}\frac{\partial z}{\partial x}{% endkatex %}:指对x求偏导，y固定为一个常数（暂时）   
{% katex %}\frac{\partial z}{\partial y}{% endkatex %}:指对y求偏导，x固定为一个常数（暂时）   
例题1：已知{% katex %}z=x^2+3xy+y^2{% endkatex %}，求{% katex %}\frac{\partial z}{\partial y}=3x+2y{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial y}=3x+2y{% endkatex %}。  
例题2：若{% katex %}z=e^{xy}\cdot \sin 2y{% endkatex %}，求{% katex %}\frac{\partial z}{\partial y}=2e^{xy}\cdot \cos 2y+xe^{xy}\cdot \sin 2y{% endkatex %}。  
解：{% katex %}\frac{\partial z}{\partial y}=x\cdot e^{xy}\cdot \sin 2y+e^{xy}\cdot \cos 2y\cdot 2=2e^{xy}\cdot \cos 2y+xe^{xy}\cdot \sin 2y{% endkatex %}。  
例题3：若{% katex %}z=f(x^2+y){% endkatex %}，求{% katex %}\frac{\partial z}{\partial x}=2xf'(x^2+y){% endkatex %}。     
解：{% katex %}\frac{\partial z}{\partial x}=2xf'(x^2+y){% endkatex %}。  

---
### 二元函数的全微分
公式：{% katex %}dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy{% endkatex %}。    
例题1：设{% katex %}z=x^2+xy{% endkatex %}，求其在{% katex %}(1,0){% endkatex %}处的全微分。   
解：{% katex %}\frac{\partial z}{\partial x}=2x+y|_{(1,0)}=2{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=x|_{(1,0)}=1{% endkatex %}。  
{% katex %}dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy=2dx+dy{% endkatex %}。  
例题2：设{% katex %}z=f(x^2-y^2){% endkatex %}，求其在{% katex %}f{% endkatex %}处可微，求{% katex %}dz{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=f'(x^2-y^2)\cdot 2x=2xf'(x^2-y^2){% endkatex %}。    
{% katex %}\frac{\partial z}{\partial y}=f'(x^2-y^2)\cdot (-2y)=-2yf'(x^2-y^2){% endkatex %}。  
{% katex %}dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy=2xf'(x^2-y^2)dx-2yf'(x^2-y^2)dy{% endkatex %}。    
例题3：设{% katex %}z=e^{xy^2}{% endkatex %}，求{% katex %}dz{% endkatex %}     
解：{% katex %}\frac{\partial z}{\partial x}=e^{xy^2}\cdot y^2{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=e^{xy^2}\cdot 2xy{% endkatex %}。  
{% katex %}dz=e^{xy^2}\cdot y^2dx+e^{xy^2}\cdot 2xydy{% endkatex %}。  

---
### 可微与偏导的关系
{% katex %}可微\Longleftrightarrow 可导\Longrightarrow 连续\Longrightarrow 极限{% endkatex %}     
{% katex %}z=f(x,y)偏导数存在且连续\Longrightarrow f(x,y)可微{% endkatex %}   
{% katex %}z=f(x,y)可微\Longrightarrow 连续\Longrightarrow 极限{% endkatex %}   
{% katex %}z=f(x,y)可微\Longrightarrow 偏导存在{% endkatex %}   
**偏导存在，与连续无关**    
例题1：若函数{% katex %}z=f(x,y){% endkatex %}在点{% katex %}(x_0,y_0){% endkatex %}某一邻域内偏导{% katex %}\frac{\partial z}{\partial x}，\frac{\partial z}{\partial y}{% endkatex %}都存在，则{% katex %}z=f(x,y){% endkatex %}在{% katex %}(x_0,y_0){% endkatex %}可微。(×)      
解析：偏导未连续，不可微。  

---
### 可微的本质 
可微：指用{% katex %}f(x){% endkatex %}在{% katex %}(x_0,y_0){% endkatex %}处的切线上的增量{% katex %}\Delta y{% endkatex %}来替代了曲线{% katex %}f(x){% endkatex %}本身的增量{% katex %}\Delta y{% endkatex %}。    
{% katex %}\left\{\begin{matrix}\tan \theta =\frac{\Delta y}{\Delta x} \\f'(x_0)=\tan \theta \end{matrix}\right.\Longrightarrow f'(x_0)=\frac{\Delta y}{\Delta x} {% endkatex %}      
{% katex %}\Longrightarrow \Delta y_切=f'(x_0)\Delta x{% endkatex %}。     
若{% katex %}\Delta y_切=\Delta y{% endkatex %}则称`可微`！     
条件：{% katex %}\Delta y-\Delta y_切=\Delta y-f'(x_0)\cdot \Delta x \Longrightarrow 趋于0且为\Delta x的高阶无穷小量{% endkatex %}     
*具体判断方法*：    
(1). 写增量：{% katex %}\Delta y=f(x_0+\Delta x)-f(x_0){% endkatex %}   
(2). 写线性增量：{% katex %}A\Delta x=f'(x_0)\cdot \Delta x{% endkatex %}   
(3). 作极限：{% katex %}\lim_{\Delta x \to 0}\frac{\Delta y-A\Delta x}{\Delta x}=0{% endkatex %}   
(4). 判断：若极限为0，则可微。   
*在二元函数内*：{% katex %}z=f(x,y){% endkatex %}   
(1). 全增量：{% katex %}\Delta z=f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0){% endkatex %}   
(2). 线性增量：{% katex %}\Delta z=A\Delta x+B\Delta y{% endkatex %}   
(3). 作极限：{% katex %}\lim \frac{\Delta z-\Delta z_线}{\sqrt{\Delta x^2+\Delta y^2} }=0{% endkatex %}   
(4). 判断：若极限为0，则可微。    
{% katex %}\Delta z=A\Delta x+B\Delta y+0(\rho ),\rho =\sqrt{\Delta x^2+\Delta y^2},A=\frac{\partial z}{\partial x},B=\frac{\partial z}{\partial y}{% endkatex %}     
例题1：设{% katex %}f(x,y){% endkatex %}在点{% katex %}(x_0,y_0){% endkatex %}处两个偏导{% katex %}f_x(x_0,y_0),f_y(x_0,y_0){% endkatex %}都存在，则有()    
A. 存在常数{% katex %}k{% endkatex %}使得{% katex %}\lim_{x \to x_0,y\to y_0}f(x,y)=k {% endkatex %}（极限存在）     
B. {% katex %}\lim_{x \to x_0,y\to y_0}f(x,y)=f(x_0,y_0){% endkatex %}（连续）  
C. {% katex %}\lim_{y\to y_0}f(x,y)=f(x_0,y_0);\lim_{x \to x_0}f(x,y)=f(x_0,y_0){% endkatex %}    
D. 当{% katex %}(\Delta x)^2+(\Delta y)^2\to 0{% endkatex %}时，{% katex %}f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)-[f_x(x_0,y_0)\Delta x+f_y(x_0,y_0)\Delta y]=0(\sqrt{(\Delta x)^2+(\Delta y)^2}){% endkatex %}   
解析：偏导存在，没有提连续，不能判断极限存在，AB错,{% katex %}f_x(x_0,y_0)=\frac{df(x_0,y_0)}{dx}|_{x=x_0},f_y(x_0,y_0)=\frac{df(x_0,y_0)}{dy}|_{y=y_0}{% endkatex %}可判断x方向和y方向均为连续，故C正确，偏导+连续才为可微，题目未提连续，即D错误。   

---
### 二阶偏导
{% katex %}z=f(x,y){% endkatex %}的二阶偏导数：   
{% katex %}\frac{\partial^2 z}{\partial x^2}指z对x求两次偏导{% endkatex %}     
{% katex %}\frac{\partial^2 z}{\partial y^2}指z对y求两次偏导{% endkatex %}     
{% katex %}\frac{\partial^2 z}{\partial y \partial x}指z先对y后对x的二阶混合偏导{% endkatex %}     
{% katex %}\frac{\partial^2 z}{\partial x \partial y}指z先对x后对y的二阶混合偏导{% endkatex %}   
{% katex %}z=f(x,y){% endkatex %}的两个混合偏导{% katex %}\frac{\partial^2 z}{\partial x \partial y},\frac{\partial^2 z}{\partial y \partial x}{% endkatex %}在闭区间D内连续，则{% katex %}\frac{\partial^2 z}{\partial x \partial y}=\frac{\partial^2 z}{\partial y \partial x}{% endkatex %}  
例题1：设{% katex %}z=x^3y^2{% endkatex %}，求{% katex %}\frac{\partial^2 z}{\partial x^2},\frac{\partial^2 z}{\partial x \partial y},\frac{\partial^2 z}{\partial y \partial x}{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=3x^2y^2{% endkatex %}   
则{% katex %}\frac{\partial^2 z}{\partial x^2}=6xy^2,\frac{\partial^2 z}{\partial x \partial y}=6x^2y{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=2x^3y{% endkatex %}   
{% katex %}\frac{\partial^2 z}{\partial y \partial x}=6x^2y{% endkatex %}     
例题2：设{% katex %}z=y^x{% endkatex %}，则{% katex %}z_{xy}=\frac{\partial^2 z}{\partial x \partial y}=(){% endkatex %}     
解：{% katex %}\frac{\partial z}{\partial x}=y^x\cdot \ln y{% endkatex %}   
{% katex %}\frac{\partial^2 z}{\partial x \partial y}=(y^x)'\cdot \ln y+y^x\cdot (\ln y)'=x\cdot y^{x-1}\ln y+y^x\cdot \frac{1}{x}{% endkatex %}  
{% katex %}=y^{x-1}(x\ln y +1){% endkatex %}    

---
### 二元隐函数求一阶偏导  
不是{% katex %}z=f(x,y){% endkatex %}的二元函数，叫隐函数。    
用**公式法**求二元隐函数的一阶偏导  
(1). 令{% katex %}F(x,y,z){% endkatex %}  
(2). 求{% katex %}F_x,F_y,F_z{% endkatex %}  
(3). 套公式：{% katex %}\frac{\partial z}{\partial x}=-\frac{F_x}{F_z},\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}{% endkatex %}   
例题1：设{% katex %}z=z(x,y){% endkatex %}由方程{% katex %}z+e^z=xy{% endkatex %}所确定，求{% katex %}\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}{% endkatex %}。  
解：令{% katex %}F(x,y,z)=z+e^z-xy{% endkatex %}    
{% katex %}F_x=-y,F_y=-x,F_z=1+e^z{% endkatex %}   
{% katex %}\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}=\frac{y}{1+e^z},\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}=\frac{x}{1+e^z}{% endkatex %}      
例题2：由方程{% katex %}xyz+\sqrt{x^2+y^2+z^2}=\sqrt{2}{% endkatex %}所确定的函数{% katex %}z=z(x,y){% endkatex %}在点(1,0,-1)处的全微分{% katex %}dz={% endkatex %}。    
解析：全微分：{% katex %}dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy{% endkatex %}  
解：令{% katex %}F(x,y,z)=xyz+\sqrt{x^2+y^2+z^2}-\sqrt{2}{% endkatex %}  
{% katex %}F_x=yz+\frac{1}{2\sqrt{x^2+y^2+z^2} }\cdot 2x|_{(1,0,-1)}=\frac{1}{\sqrt{2} }=\frac{\sqrt{2} }{2}{% endkatex %}   
{% katex %}F_x=xz+\frac{1}{2\sqrt{x^2+y^2+z^2} }\cdot 2y|_{(1,0,-1)}=-1{% endkatex %}     
{% katex %}F_x=xy+\frac{1}{2\sqrt{x^2+y^2+z^2} }\cdot 2z|_{(1,0,-1)}=-\frac{1}{\sqrt{2} }=-\frac{\sqrt{2} }{2}{% endkatex %}  
{% katex %}\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}=-\frac{\frac{\sqrt{2} }{2} }{-\frac{\sqrt{2} }{2} }=1{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=-\frac{F_y}{F_z}=-\frac{-1}{\frac{\sqrt{2} }{2} }=-\sqrt{2}{% endkatex %}   
{% katex %}dz=\frac{\partial z}{\partial x}dx+\frac{\partial z}{\partial y}dy{% endkatex %}   
{% katex %}=dx-\sqrt{2}dy{% endkatex %}   

---
### 隐函数的二阶偏导
(1). 使用公式求一阶导；  
(2). 使用导数公式求二阶导；   
注：**求二阶导时，切记z是关于x,y的函数需要求导的**。  
例题1：设{% katex %}2x^2+y^2+z^2-4z=0{% endkatex %}其中{% katex %}z=z(x,y){% endkatex %}所确定，求{% katex %}\frac{\partial z}{\partial x}|_{(1,1,1)},\frac{\partial^2 z}{\partial x^2}|_{(1,1,1)}{% endkatex %}。     
解：令{% katex %}F(x,y,z)=2x^2+y^2+z^2{% endkatex %}   
则{% katex %}F_x=4x|_{(1,1,1)}=4,F_y=2y|_{(1,1,1)}=2,F_z=2z-4|_{(1,1,1)}=-2{% endkatex %}    
故{% katex %}\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}=\frac{-4x}{2e-4}|_{(1,1,1)}=2{% endkatex %}   
{% katex %}\frac{\partial^2 z}{\partial x^2}=\frac{\partial }{\partial x}(\frac{\partial z}{\partial x})=\frac{2\cdot (z-2)+2x \cdot (\frac{\partial z}{\partial x} )}{(z-2)^2}|_{(1,1,1)}=6{% endkatex %}  


---
### 多元复合函数求导
求导原则：从外向里，层层求导并相乘。    
**链式法则**：将每层函数关系罗列（树状图）**分线相加，连线相乘**  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311251621609.png)  
1. 题型一：具体多元函数求导（直接带入法）  
例题1：设{% katex %}z=xy+3\ln x,其中x=2u+v ,y=u-2v{% endkatex %}，求{% katex %}\frac{\partial z}{\partial u},\frac{\partial z}{\partial v}{% endkatex %}。   
解：由题可知：{% katex %}z=(2u+v)\cdot (u-2v)+3\ln (2u+v){% endkatex %}   
{% katex %}\frac{\partial z}{\partial u}=2(u-2v)+(2u+v)+3\cdot \frac{1}{2u+v}\cdot 2=4u-3v+\frac{6}{2u+v}{% endkatex %}   
{% katex %}\frac{\partial z}{\partial v}=(u-2v)+(2u+v)\cdot (-2)+3\cdot \frac{1}{2u+v}=-3u-4v+\frac{1}{2u+v}{% endkatex %}   
2. 题型二：抽象的复合函数求导  
面对含{% katex %}f(\Box ,\triangle ){% endkatex %}的复合求导。  
注：(1). 从外向里，逐层求导；  
   (2). 勿忘f要导f'；  
   (3). "{% katex %}\Box {% endkatex %}"用“1”代替，"{% katex %}\triangle {% endkatex %}"用“2”代替。  
   (4). 计算结果内容省略不写括号；  
例题1：设{% katex %}z=f(x,xy){% endkatex %}，求{% katex %}\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=f'_1{x,xy}\cdot 1+f'_2(x,xy) \cdot y=f'_1+y\cdot f'_2{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=f'_2(x,xy)\cdot x=x\cdot f'_2{% endkatex %}    
例题2：设{% katex %}z=xyf(x^+y,x-y^2){% endkatex %}，其中{% katex %}f{% endkatex %}可微，求{% katex %}\frac{\partial z}{\partial x},\frac{\partial z}{\partial y}{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=yf+xy\cdot [f'_1\cdot 2x+f'_2\cdot 1]=yf+2x^2yf'_1+xyf'_2{% endkatex %}   
{% katex %}\frac{\partial z}{\partial y}=xf+xy[f'_1\cdot 1-f'_2\cdot 2y]=xf+xyf'_1-2xy^2f'_2{% endkatex %}   
例题3：设{% katex %}z=f(xy,y){% endkatex %}，其中{% katex %}f{% endkatex %}具有二阶连续偏导，求{% katex %}\frac{\partial ^2z}{\partial x\partial y}{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=f'_1(xy,y)\cdot y=yf'_1(xy,y){% endkatex %}   
{% katex %}\frac{\partial ^2z}{\partial x\partial y}=f'_1\cdot 1+y[f''_{11} \cdot x+f''_{12}\cdot 1{% endkatex %}   
{% katex %}=f'_1+xyf''_1+f''_{11}+yf''_{12}{% endkatex %}    

--- 
### 隐函数例题 
例题1：设函数{% katex %}u=f(x,y,z)=x^3y^2z^2{% endkatex %}，其中{% katex %}z=z(x,y){% endkatex %}由方程{% katex %}x^3+y^3+z^3-3xyz=0{% endkatex %}所确定，求{% katex %}\frac{\partial u}{\partial x}{% endkatex %}。     
解：{% katex %}\frac{\partial u}{\partial x}=3x^2y^2z^2+x^3y^2\cdot 2z\cdot \frac{\partial z}{\partial x}{% endkatex %}   
令{% katex %}F(x,y,z)=x^3+y^3+z^3-3xyz{% endkatex %}   
{% katex %}F_x=3x^2-3yz,F_z=3z^2-3xy{% endkatex %}   
{% katex %}\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}=-\frac{3x^2-3yz}{3z^2-3xy}=\frac{yz-x^2}{z^2-xy}{% endkatex %}   
{% katex %}\frac{\partial u}{\partial x}=3x^2y^2z^2+2x^3y^2z\cdot (\frac{yz-x^2}{z^2-xy}){% endkatex %}    


---
### 多元函数的几何的应用
1. 求空间曲线{% katex %}\left\{\begin{matrix}x=x(t)\\y=y(t)\\z=z(t)\end{matrix}\right.{% endkatex%}的切线及法平面方程。  
{% katex %}\left\{\begin{matrix}直线：\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p},\vec{S}=(m,n,p) \\平面：A(x-x_0)+B(y-y_0)+C(z-z_0)=0,\vec{n}=(A,B,B) \end{matrix}\right.{% endkatex %}    
解法：
   (1). 求导得向量：{% katex %}\vec{S}=(x'(t),y'(t),z'(t))=(m,n,p)/\vec{n}=(x'(t),y'(t),z'(t))=(A,B,C){% endkatex %}    
   (2). 套公式得答案：**“线除面乘”**。   
{% katex %}\left\{\begin{matrix}线：\frac{x-x_0}{x'(t)}=\frac{y-y_0}{y'(t)}=\frac{z-z_0}{z'(t)}\\面：x'(t)(x-x_0)+y'(t)(y-y_0)+z'(t)(z-z_0)\end{matrix}\right.{% endkatex %}   
例题1：求螺旋线{% katex %}x=a\cos \theta,y=a\sin \theta,z=b\theta{% endkatex%}(a,b不同时为0)，上在{% katex %}\theta=\frac{\pi}{4}{% endkatex %}时的切线方程及法平面方程。    
解：令{% katex %}\theta =t{% endkatex %}，则{% katex %}\left\{\begin{matrix}x=a\cos t\\y=a\sin t\\z=bt\end{matrix}\right.{% endkatex %}   
即{% katex %}x'(t)=-a\sin t,y'(t)=a\cos t,z'(t)=b{% endkatex%}    
当{% katex %}\theta =t=\frac{\pi }{4}{% endkatex%}  
则有{% katex %}x'(t)=-\frac{\sqrt{2} a}{2},y'(t)=\frac{\sqrt{2} a}{2},z'(t)=b{% endkatex%}    
{% katex %}(x_0,y_0,z_0)=(-\frac{\sqrt{2} a}{2},\frac{\sqrt{2} a}{2},\frac{b\pi}{4}){% endkatex%}    
故切线{% katex %}\vec{S}=(-\frac{\sqrt{2} a}{2},\frac{\sqrt{2} a}{2},b){% endkatex%}   
法平面{% katex %}\vec{n}=(-\frac{\sqrt{2} a}{2},\frac{\sqrt{2} a}{2},b){% endkatex%}   
即切线方程{% katex %}\frac{x-\frac{\sqrt{2} a}{2} }{-\frac{\sqrt{2} a}{2} } =\frac{y-\frac{\sqrt{2} a}{2} }{\frac{\sqrt{2} a}{2} }=\frac{z-\frac{\pi}{4}b }{b}  {% endkatex%}     
法平面为{% katex %}-\frac{\sqrt{2} }{2}a(x+\frac{\sqrt{2} }{2}a )+\frac{\sqrt{2} }{2}a(y-\frac{\sqrt{2} }{2}a )+b(-\frac{\pi }{4}b )=0 {% endkatex%}    
例题2：求曲线{% katex %}y=\sin x,z=\frac{x}{2}{% endkatex%}在点{% katex %}(\pi ,0,\frac{\pi }{2}){% endkatex%}的法平面方程。    
解析：若不是参数方程，令其中一个变量为t，转换为参数式；   
解：令{% katex %}x=t{% endkatex%}，则{% katex %}y=\sin t,z=\frac{t}{2}{% endkatex%}   
{% katex %}x'(t)=1,y'(t)=\cos t,z'(t)=\frac{1}{2}{% endkatex%}    
因为在点{% katex %}(\pi ,0,\frac{\pi}{2}){% endkatex %}处，则{% katex %}x_0=t=\pi {% endkatex%}   
{% katex %}x'(t)=1,y'(t)=-1,z'(t)=\frac{1}{2}{% endkatex%}    
{% katex %}\vec{n}=(1,-1,\frac{1}{2}){% endkatex%}    
{% katex %}(x_0,y_0,z_0)=(\pi ,0,\frac{\pi }{2}){% endkatex%}   
带入解得法平面方程：{% katex %}1\cdot (x-\pi )-1\cdot (y-0)+\frac{1}{2}\cdot (z-\frac{\pi }{2})=0{% endkatex%}    
{% katex %}x-y+\frac{z}{2}-\frac{5\pi }{4}=0{% endkatex%}    
例题3：求曲线{% katex %}l:x=t,y=t^2,z=t^3{% endkatex%}上的一点，使得曲线在该点处的切线平行于平面{% katex %}3x+3y+z=0{% endkatex%}。   
解析：**线与面位置关系与向量关系相反**，由题，线与面平行，即线与法线垂直，即{% katex %}\vec{S} \perp \vec{n}=\vec{S}\cdot \vec{n}=0{% endkatex%}    
解：令曲线待求点{% katex %}(t_0,t_0^2,t_0^3){% endkatex %}   
故在该点处{% katex %}\vec{S}=(1,2t_0,3t_0^3){% endkatex%}    
有平面方程得{% katex %}\vec{n}=(3,3,1){% endkatex%}   
由题知：{% katex %}\vec{S}\cdot \vec{n}=0{% endkatex%}   
{% katex %}3+6t_0+3t_0^2=0{% endkatex%}  
解得{% katex %}t_0=-1{% endkatex%}   
故点为{% katex %}(-1,1,-1){% endkatex%}   
2. 空间曲面{% katex %}F(x,y,z){% endkatex%}的切平面和法线方程。   
解法：  
   (1). 求导得向量：{% katex %}\vec{n}=(A,B,C)=(F_x,F_y,F_z)/\vec{S}=(m,n,p)=(F_x,F_y,F_z){% endkatex%}    
   (2). 套公式得答案：**“线除面乘”**。   
{% katex %}\left\{\begin{matrix}线：\frac{x-x_0}{x'(t)}=\frac{y-y_0}{y'(t)}=\frac{z-z_0}{z'(t)}\\面：x'(t)(x-x_0)+y'(t)(y-y_0)+z'(t)(z-z_0)\end{matrix}\right.{% endkatex %}   
例题1：空间曲面{% katex %}2z-e^z+2xy=3{% endkatex%}在点{% katex %}(1,2,0){% endkatex%}处的法线方程。   
解：令{% katex %}F(x,y,z)=2z-e^z+2xy-3{% endkatex%}   
{% katex %}\vec{S}=(F_x,F_y,F_z)=(2y,2x,2-e^z)|_{(1,2,0)}=(4,2,1){% endkatex%}    
故法线方程：{% katex %}\frac{x-1}{4}=\frac{y-2}{2}=\frac{z}{1}{% endkatex%}   
例题2：已知曲面{% katex %}z=4-x^2-y^2{% endkatex%}在点{% katex %}P{% endkatex%}处的切平面平行于平面{% katex %}2x+2y+z-1=0{% endkatex%}，求P点坐标。   
解：设P点为{% katex %}(x_0,y_0,z_0){% endkatex %}，令{% katex %}F(x,y,z)=z-4+x^2+y^2{% endkatex%}   
所以在P点处切平面{% katex %}\vec{n_1}=(F_x,F_y,F_z)=(2x,2y,1)|_{(x_0,y_0,z_0)}=(2x_0,2y_0,1){% endkatex%}    
又平面{% katex %}2x+2y+z-1=0{% endkatex%}的法向量为{% katex %}\vec{n_2}=(2,2,1){% endkatex%}   
由题知：{% katex %}\vec{n_1} \parallel \vec{n_2}{% endkatex%}  
即{% katex %}\frac{2x_0}{2}=\frac{2y_0}{2}=1{% endkatex%}   
解得{% katex %}x_0=y_0=1{% endkatex%}  
带入得{% katex %}z_0=2{% endkatex%}  
故点为{% katex %}P=(1,1,2){% endkatex%}    


---
### 无条件极值
无条件极值：指对{% katex %}x,y{% endkatex %}取值范围无限制下，求{% katex %}z=f(x,y){% endkatex %}的极值。   
求解方法：   
(1). 求一阶偏导，令其为0，找驻点；   
{% katex %}\left\{\begin{matrix}f_x(x,y)=0\\f_y(x,y)=0\end{matrix}\right.\Longrightarrow 驻点(x_0,y_0){% endkatex %}     
(2). 解方程组，求出极值点；   
令{% katex %}A=f_{xx}(x_0,y_0);B=f_{xy}(x_0,y_0);C=f_{yy}(x_0,y_0){% endkatex %}   
(3). 判断{% katex %}AC-B^2=D{% endkatex %}。  
{% katex %}D>0{% endkatex %}，有极值{% katex %}\Longrightarrow \left\{\begin{matrix}A<0,极大值\\A>0,极小值\end{matrix}\right.{% endkatex %}   
例题1：求函数{% katex %}f(x,y)=x^2-xy+y^2-2x+y{% endkatex %}的极值。   
解：令{% katex %}\left\{\begin{matrix}f_x=2x-y-2=0\\f_y=-x+2y+1=0\end{matrix}\right.\Longrightarrow 驻点(1,0){% endkatex %}   
{% katex %}A=f_{xx}=2,B=f_{xy}=-1,C=f_{yy}=2{% endkatex %}   
{% katex %}D=AC-B^2=4-1=3>0{% endkatex %}   
且{% katex %}A=2>0{% endkatex %}   
故{% katex %}f(1,0){% endkatex %}处为极小值-1。    
例题2：求函数{% katex %}f(x,y)=x^3-4x^2+2xy-y^2{% endkatex %}的极值。  
解：令{% katex %}\left\{\begin{matrix}f_x=3x^2-8x+2y=0\\f_y=2x-2y=0\end{matrix}\right.\Longrightarrow 驻点(0,0),(2,2){% endkatex %}   
{% katex %}A=f_{xx}=6x-8,B=f_{xy}=2,C=f_{yy}=-2{% endkatex %}   
(1). 当驻点为{% katex %}(0,0){% endkatex %}时,{% katex %}A=-8,B=2,C=-2{% endkatex %}   
{% katex %}D=AC-B^2=16-4=12>0{% endkatex %}   
且{% katex %}A=-8<0{% endkatex %}  
故{% katex %}f(0,0){% endkatex %}处有极大值0。    
(2). 当驻点为{% katex %}(2,2){% endkatex %}时,{% katex %}A=4,B=2,C=-2{% endkatex %}   
{% katex %}D=AC-B^2=-8-4=-12<0{% endkatex %}
故{% katex %}f(2,2){% endkatex %}处没有极值。    

---
### 条件极值  
条件极值：指对自变量{% katex %}x,y{% endkatex %}取值范围限制下，求{% katex %}z=f(x,y){% endkatex %}的极值。     
求在条件{% katex %}\varphi (x,y)=0{% endkatex %}下，求{% katex %}z=f(x,y){% endkatex %}的极值。  
解法：   
(1). 确定目标函数{% katex %}f(x,y){% endkatex %}，及条件函数{% katex %}\varphi (x,y){% endkatex %}；  
(2). 构造拉格朗日函数；{% katex %}F(x,y,\lambda )=f(x,y)+\lambda \varphi (x,y){% endkatex %}    
(3). 令{% katex %}\left\{\begin{matrix}F_x=0\\F_y=0\\F_\lambda =0\end{matrix}\right.\Longrightarrow 得驻点(x_0,y_0){% endkatex %}    
(4). 得极值。  
例题：求函数{% katex %}z=x^2+y^2{% endkatex %}在直线{% katex %}\frac{x}{4}+\frac{y}{3}=1{% endkatex %}下的极值。  
解：目标函数{% katex %}f(x,y)=x^2+y^2{% endkatex %}，条件函数{% katex %}\varphi (x,y)=\frac{x}{4}+\frac{y}{3}-1=0{% endkatex %}    
令{% katex %}F(x,y,\lambda )=x^2+y^2+\lambda (\frac{x}{4}+\frac{y}{3}-1){% endkatex %}   
{% katex %}F_x=2x+\frac{\lambda }{4}=0,F_y=2y+\frac{\lambda }{3}=0,F_\lambda =\frac{x}{4}+\frac{y}{3}-1=0{% endkatex %}   
解得{% katex %}x_0=-\frac{36}{25},y_0=-\frac{48}{25}\Longrightarrow (\frac{36}{25}, \frac{48}{25}) {% endkatex %}为唯一驻点   
故{% katex %}z=x^2+y^2{% endkatex %}在{% katex %}(\frac{36}{25}, \frac{48}{25}{% endkatex %}处取得极值     
{% katex %}z=(\frac{36}{25})^2+(\frac{48}{25})^2=\frac{144}{25}{% endkatex %}    

---
### 条件极值例题
例题1：在椭圆{% katex %}x^2+4y^2=4{% endkatex %}上求一点，使其到直线{% katex %}2x+3y-6=0{% endkatex %}的距离最短。  
解：设点为{% katex %}(x_0,y_0){% endkatex %}，则点到直线的距离为{% katex %}d=\frac{|2x_0+3y_0-6|}{\sqrt{2^2+3^2}}=\frac{|2x_0+3y_0-6|}{\sqrt{13}}{% endkatex %}  
令目标函数为{% katex %}2x+3y-6{% endkatex %}，条件函数为{% katex %}x^2+4y^2-4=0{% endkatex %}    
令拉格朗日函数为{% katex %}F(x,y,\lambda )=2x+3y-6+\lambda (x^2+4y^2-4){% endkatex %}   
{% katex %}F_x=2+2\lambda x=0,F_y=3+8\lambda y=0,F_\lambda =x^2+4y^2-4=0{% endkatex %}    
解得{% katex %}x_0=\pm \frac{8}{5},y_0=\pm \frac{3}{5}{% endkatex %}   
故点为{% katex %}(\frac{8}{5},\frac{3}{5}),(-\frac{8}{5},-\frac{3}{5}){% endkatex %}为驻点   
(1). 当{% katex %}(x_0,y_0)=(\frac{8}{5},\frac{3}{5}){% endkatex %}时   
带入{% katex %}=\frac{|2x+3y-6|}{\sqrt{13} }=\frac{|\frac{16}{5}+\frac{9}{5}-6|}{\sqrt{13} }=\frac{|5-6|}{\sqrt{13} }=\frac{\sqrt{13 } }{13}{% endkatex %}   
(2). 当{% katex %}(x_0,y_0)=(-\frac{8}{5},-\frac{3}{5}){% endkatex %}时    
带入{% katex %}=\frac{|2x+3y-6|}{\sqrt{13} }=\frac{|-\frac{16}{5}-\frac{9}{5}-6|}{\sqrt{13} }=\frac{|-5-6|}{\sqrt{13} }=\frac{11\sqrt{13 } }{13}{% endkatex %}   
故点为{% katex %}P(\frac{8}{5},\frac{3}{5}){% endkatex %}时，到直线距离最短，最短距离为{% katex %}\frac{\sqrt{13} }{13}{% endkatex %}。    

---
### 二重积分
#### 二重积分概念与性质  
1. 定义：二重积分是用来求解曲顶柱体体积的工具，记为{% katex %}\iint f(x,y)dx,dy{% endkatex %}。  
其中{% katex %}f(x,y){% endkatex %}为被积函数(求图形体积的**h**)，{% katex %}dx dy=d\delta {% endkatex %}面积元素，D为积分区域（底面积）。    
{% katex %}V=\iint\limits_{D}f(x,y)dxdy{% endkatex %}    
2. 性质：   
   (1). {% katex %}\iint\limits_{D}f(x,y)\pm g(x,y)dxdy=\iint\limits_{D}f(x,y)dxdy\pm g(x,y)dxdy {% endkatex %}      
   (2). 可加性{% katex %}D=D_1+D_2,\iint\limits_{D}f(x,y)dxdy=\iint\limits_{D_1}f(x,y)dxdy+\iint\limits_{D_2}f(x,y)dxdy {% endkatex %}     
   (3). {% katex %}\iint\limits_{D}kf(x,y)dxdy=k\iint\limits_{D}f(x,y)dxdy {% endkatex %}     
   (4). **底面积计算公式**：{% katex %}\iint\limits_{D}1\cdot dxdy=\iint\limits_{D}dxdy=S_D {% endkatex %}     
   (5). 比较定理：设{% katex %}f(x,y)\ge g(x,y){% endkatex %}，则{% katex %}\iint\limits_{D}f(x,y)dxdy \ge \iint\limits_{D}g(x,y)dxdy {% endkatex %}**反比{% katex %}f(x,y){% endkatex %}的大小**     
   (6). 估值定理：设{% katex %}f(x,y){% endkatex %}在D上，有最大值M和最小值m，有{% katex %}m\le f(x,y)\le M{% endkatex %}     
则有{% katex %}\Longrightarrow \iint\limits_{D}mdxdy\le \iint\limits_{D}f(x,y)dxdy\le \iint\limits_{D}Mdxdy \Longrightarrow m\iint\limits_{D}dxdy\le \iint\limits_{D}f(x,y)dxdy\le M\iint\limits_{D}dxdy \Longrightarrow m\cdot S_D\le \iint\limits_{D}f(x,y)dxdy\le M\cdot S_D {% endkatex %}         

---
#### 二重积分性质考点计算 
{% katex %}\iint\limits_{D} 1 \cdot dxdy=S_D {% endkatex %}     
(1). 圆的一般表达式：{% katex %}(x-a)^2+(y-b)^2=r^2{% endkatex %}    
其中，{% katex %}(a,b){% endkatex %}为圆心，{% katex %}r{% endkatex %}为半径。   
{% katex %}S_圆=\pi \cdot r^2{% endkatex %}   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271116610.png)  
(2). 椭圆的一般表达式：{% katex %}\frac{x^2}{a^2}+\frac{y^2}{b^2}=1{% endkatex %}   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271117250.png) 
{% katex %}S_椭圆=\pi \cdot a \cdot b{% endkatex %}     
例题1：计算{% katex %}\iint\limits_{D}d\delta {% endkatex %}其中D为原点为圆心，半径为5的圆形区域。   
解：{% katex %}\iint\limits_{D}d\delta =S_D=\pi \cdot 5^2=25\pi {% endkatex %}   
例题2：计算二重积分{% katex %}\iint\limits_{x^2+y^2\le 2}dxdy {% endkatex %}     
解：由题知：{% katex %}x^2+y^2 \le 2{% endkatex %}取{% katex %}x^2+y^2=2{% endkatex %}    
因为{% katex %}x^2+y^2=2{% endkatex %}为圆的一般表达式，{% katex %}S_D=\pi \cdot r^2<2 {% endkatex %}时在圆面积内部    
{% katex %}\iint\limits_{x^2+y^2\ge 2}dxdy =S_D=\pi \cdot r^2=2\pi{% endkatex %}。     
例题3：设积分区域{% katex %}D:1 \le x^2+y^2 \le 4{% endkatex %}求二重积分{% katex %}\iint\limits_{D}dxdy {% endkatex %}   
解：由题知：{% katex %}1 \le x^2+y^2 \le 4{% endkatex %}取{% katex %}x^2+y^2=1,x^2+y^2=4{% endkatex %}   
则{% katex %}\iint\limits_{D}dx=S_D=S_{D大}-S_{D小}=4 \pi -\pi = 3\pi {% endkatex %}     
例题4：设积分区域{% katex %}D:\frac{x^2}{4}+y^2 \le 1{% endkatex %}求二重积分{% katex %}\iint\limits_{D}xdxdy {% endkatex %}   
解：由题知：{% katex %}\frac{x^2}{4}+y^2 \le 1{% endkatex %}取{% katex %}\frac{x^2}{4}+\frac{y^2}{1}=1{% endkatex %}   
因为{% katex %}\frac{x^2}{4}+\frac{y^2}{1}=1{% endkatex %}为椭圆的一般表达式，{% katex %}S_D=\pi \cdot a \cdot b<1 {% endkatex %}时在椭圆面积内部    
{% katex %}\iint\limits_{D}xdxdy =S_D=\pi \cdot a \cdot b=\pi \cdot 2 \cdot 1=2\pi{% endkatex %}。     


---
#### 二重积分性质考点比较
(1). 比较定理：设{% katex %}f(x,y)\ge g(x,y){% endkatex %}，则{% katex %}\iint\limits_{D}f(x,y)dxdy \ge \iint\limits_{D}g(x,y)dxdy {% endkatex %}    
例题1：设{% katex %}I_1=\iint\limits_{D}\cos \sqrt{x^2+y^2}dxdy,I_2=\iint\limits_{D}\cos (x^2+y^2)dxdy,I_3=\iint\limits_{D}\cos (x^2+y^2)^2dxdy{% endkatex %}其中{% katex %}D=\left \{ (x,y)|x^2+y^2\le 1 \right \} {% endkatex %}则{% katex %}I_1,I_2,I_3{% endkatex %}的大小关系是。     
解：{% katex %}x^2+y^2 \le 1{% endkatex %}时比较    
取一特殊值{% katex %}x^2+y^2=\frac{1}{4}{% endkatex %}得{% katex %}\sqrt{x^2+y^2} \ge x^2+y^2 \ge (x^2+y^2)^2{% endkatex %}  
当{% katex %}x^2+y^2\le 1{% endkatex %}时，{% katex %}1 \ge \sqrt{x^2+y^2} \ge x^2+y^2 \ge (x^2+y^2)^2\ge 0{% endkatex %}     
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271352820.png)  
由图{% katex %}I_3\ge I_2\ge I_1{% endkatex %}   

---
#### 二重积分性质考点估值
估值定理：设{% katex %}f(x,y){% endkatex %}在D上，有最大值M和最小值m，有{% katex %}m\le f(x,y)\le M{% endkatex %}，则{% katex %}m\cdot S_D \le \iint\limits_{D}f(x,y)dxdy \le M\cdot S_D{% endkatex %}    
例题1：设{% katex %}I=\iint\limits_{D}xy(x+y)dxdy{% endkatex %}其中{% katex %}0 \le x \le1,0\le y\le 2{% endkatex %}则{% katex %}()\le I\le(){% endkatex %}。    
解：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271400569.png)  
由图知：{% katex %}S_D=1 \cdot 2=2{% endkatex %}   
因为{% katex %}0 \le x \le 1,0 \le y\le 2{% endkatex %}  
则{% katex %}x=0,y=0{% endkatex %}时为最小值，{% katex %}x=1,y=2{% endkatex %}时为最大值  
即{% katex %}0 \le xy(x+y) \le 6{% endkatex %}  
{% katex %}0\cdot S_D \le \iint\limits_{D}xy(x+y)dxdy \le 6 \cdot S_D{% endkatex %}  
{% katex %}0 \le \iint\limits_{D}xy(x+y)dxdy \le 6 \cdot 2{% endkatex %}  
{% katex %}0 \le \iint\limits_{D}xy(x+y)dxdy \le 12{% endkatex %}   

---
#### 二重积分的计算
1. 直角坐标系下二重积分计算   
解法：将二重积分化为累次积分或二次积分。  
   (1). {% katex %}\iint\limits_{D}f(x,y)dxdy=\int_{a}^{b}dx\int_{c}^{d}f(x,y)dy {% endkatex %}     
   (1). {% katex %}\iint\limits_{D}f(x,y)dxdy=\int_{c}^{d}dy\int_{a}^{b}f(x,y)dx {% endkatex %}      
注：**求解顺序，先求尾部再求前面，从后往前，从右到左依次求解**    
根据积分区域图形不同，选择不同积分顺序。   
1). X型图：函数图形，由上下两函数，夹为一个图形；   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271414131.png)
公式：{% katex %}\iint\limits_{D}f(x,y)dxdy=\int_{a}^{b}dx\int_{f_{上(x)} }^{f_{下(x)} }f(x,y)dy{% endkatex %}   
2). Y型图：函数图形，由左右两函数，合为一个图形:改函数{% katex %}f(y){% endkatex %}；   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271416932.png)  
公式：{% katex %}\iint\limits_{D}f(x,y)dxdy=\int_{c}^{d}dy\int_{f_{左(y)} }^{f_{右(y)} }f(x,y)dx{% endkatex %}     
定限口诀：**后积先定限，限内画直线，先交写下限，后交写上限。**   
2. 二重积分直角坐标系下计算例题   
求解过程：
   (1). 画图，联立方程，求出曲线交点。   
   (2). 判断积分区域类型，确定积分顺序。   
   (3). 套公式{% katex %}\left\{\begin{matrix}X\Longrightarrow \int_{\Box }^{\Box }dx\int_{\Box }^{\Box }f(x,y)dy\\Y\Longrightarrow \int_{\Box }^{\Box }dy\int_{\Box }^{\Box }f(x,y)dx\end{matrix}\right. {% endkatex %}。   
例题1：计算二重积分{% katex %}\iint\limits_{D}xydxdy{% endkatex %}其中D为由直线{% katex %}y=1,x=2,y=x{% endkatex %}围成的区域。     
解：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271430804.png) 
定为X型图：{% katex %}\left\{\begin{matrix}1 \le x \le 2\\1\le y\le x\end{matrix}\right.{% endkatex %}      
原式{% katex %}=\int_{1}^{2}dx\int_{1}^{x}xydy{% endkatex %}   
{% katex %}=\int_{1}^{2}(x\cdot \frac{1}{2}y^2)|\begin{matrix}1\\x\end{matrix}dx{% endkatex %}    
{% katex %}=\frac{1}{2} \int_{1}^{2}(x^3-x)dx{% endkatex %}    
{% katex %}=\frac{1}{2}\cdot (\frac{1}{4}x^4-\frac{1}{2}x^2)|\begin{matrix}2\\1\end{matrix}{% endkatex %}    
{% katex %}=\frac{9}{8}{% endkatex %}   
定为Y型图：{% katex %}\left\{\begin{matrix}1 \le y \le 2\\y\le x\le 2\end{matrix}\right.{% endkatex %}   
原式{% katex %}=\int_{1}^{2}dy\int_{y}^{2}xydx{% endkatex %}   
{% katex %}=\frac{1}{2} \int_{1}^{2}y\cdot x^2|\begin{matrix}y\\2\end{matrix}dy{% endkatex %}    
{% katex %}=\frac{1}{2}\int_{1}^{2}(4y-y^3)dy{% endkatex %}    
{% katex %}=\frac{1}{2}\cdot (2y^2-\frac{1}{4}y^4)|\begin{matrix}2\\1\end{matrix}{% endkatex %}    
{% katex %}=\frac{9}{8}{% endkatex %}    
例题2：计算二重积分{% katex %}\iint\limits_{D}xydxdy{% endkatex %}其中D为由直线{% katex %}y^2=x,y=x-2{% endkatex %}围成的区域。   
解：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271452174.png)  
联立两个方程：{% katex %}y^2=x,y=x-2{% endkatex %}  
求得两个交点为{% katex %}(-1,1),(4,2){% endkatex %}   
定为Y型图：{% katex %}\left\{\begin{matrix}-1 \le y \le 2\\y^2 \le x\le y+2\end{matrix}\right.{% endkatex %}   
原式{% katex %}=\int_{-1}^{2}dy\int_{y^2}^{y+2}xydx{% endkatex %}   
{% katex %}=\frac{1}{2} \int_{-1}^{2}y\cdot x^2|\begin{matrix}y^2\\y+2\end{matrix}dy{% endkatex %}    
{% katex %}=\frac{1}{2}\int_{-1}^{2}(y^3+4y^2+4y-y^5)dy{% endkatex %}    
{% katex %}=\frac{1}{2}\cdot (\frac{1}{4}y^4+\frac{4}{3}y^3+2y^2-\frac{1}{6}y^6)|\begin{matrix}2\\-1\end{matrix}{% endkatex %}    
{% katex %}=\frac{45}{8}{% endkatex %}    

---
#### 超越积分顺序选择
(1). {% katex %}\frac{\sin x}{x},\frac{\cos x}{x},\sin x^2\cdot \cos x^2,e^{x^2},e^{-x^2}\Longrightarrow X{% endkatex %}型     
(2). {% katex %}\frac{\sin y}{y},\frac{\cos y}{y},\sin y^2\cdot \cos y^2,e^{y^2},e^{-y^2}\Longrightarrow Y{% endkatex %}型      
例题1：求二重积分{% katex %}\iint\limits_{D}\frac{\sin y}{y}dxdy{% endkatex %}其中D为由直线{% katex %}y=x,x=0,y=\pi {% endkatex %}围成的区域。   
解：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271536483.png)  
定为Y型图：{% katex %}\left\{\begin{matrix}0 \le y \le \pi \\0 \le x \le y\end{matrix}\right.{% endkatex %}   
原式{% katex %}=\int_{0}^{\pi }dy \int_{0}^{y}\frac{\sin y}{y}dx{% endkatex %}    
{% katex %}=\int_{0}^{\pi }\frac{\sin y}{y}\cdot x|\begin{matrix}y\\0\end{matrix}dy{% endkatex %}    
{% katex %}=\int_{x}^{\pi }\sin y dy =(-\cos y)|\begin{matrix}\pi \\0\end{matrix} =1+1=2{% endkatex %}   
例题2：求二重积分{% katex %}\iint\limits_{D}\cos y^2dxdy{% endkatex %}其中D为由直线{% katex %}y=2,x=1,y=x-1 {% endkatex %}围成的区域。    
解：  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271546882.png)  
定为Y型图：{% katex %}\left\{\begin{matrix}0 \le y \le 2 \\1 \le x \le y+1\end{matrix}\right.{% endkatex %}     
故原式{% katex %}=\int_{0}^{2}dy \int_{1}^{y+1}\cos y^2dx{% endkatex %}    
{% katex %}=\int_{0}^{2}\cos y^2\cdot x|\begin{matrix}y+1\\1\end{matrix}dy{% endkatex %}    
{% katex %}=\int_{0}^{2}[\cos y^2(y+1)-\cos y^2]dy {% endkatex %}     
{% katex %}=\frac{1}{2}\int_{0}^{2}\cos y^2ydy^2{% endkatex %}  
{% katex %}=\frac{1}{2} \sin y^2|\begin{matrix}2\\0\end{matrix} =\frac{\sin 4}{2}{% endkatex %}    

---
#### 交换积分次序 
定义：将X型与Y型积分顺序互换；  
交换次序思路：  
(1). 根据积分上下限，画出积分区域   
(2). 交换次序   
交换次序的题型：  
(1). 题目要求交换   
(2). 遇积分上下限定好的二重积分计算   
例题1：二次积分{% katex %}\int_{0}^{1}dx\int_{2x}^{2\sqrt{x} }f(x,y)dy{% endkatex %}交换积分次序。   
A. {% katex %}\int_{0}^{1}dx\int_{2y}^{\sqrt{y} }f(x,y)dy{% endkatex %}  
B. {% katex %}\int_{0}^{2}dy\int_{\frac{y^2}{4} }^{\frac{y}{2} }f(x,y)dx{% endkatex %}  
C. {% katex %}\int_{2x}^{2\sqrt{x} }f(x,y)dy\int_{0}^{1}dx{% endkatex %}  
D. {% katex %}\int_{\frac{\frac{y^2}{4} }{} }^{\frac{y}{2} }dy\int_{0}^{2}f(x,y)dx{% endkatex %}    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271642984.png)
解：由题可知：{% katex %}0 \le x \le 1,2x \le y \le 2\sqrt{x}{% endkatex %}   
有图可知：{% katex %}0 \le y \le 2,\frac{y^2}{4} \le x \le \frac{y}{2}{% endkatex %}   
故选B。  
例题2：求积分{% katex %}I=\int_{\frac{1}{4} }^{\frac{1}{2} }dy\int_{\frac{1}{2} }^{\sqrt{y} } e^{\frac{y}{x} }dx+\int_{\frac{1}{2} }^{1}dy\int_{\sqrt{y} }^{y}e^{\frac{y}{x} }dx{% endkatex %}交换积分次序。    
解析：{% katex %}\int_{\frac{1}{4} }^{\frac{1}{2} }dy\int_{\frac{1}{2} }^{\sqrt{y} } e^{\frac{y}{x} }dx{% endkatex %}可知  
{% katex %}\left\{\begin{matrix}\frac{1}{4} \le y \le \frac{1}{2} \\\frac{1}{2} \le x\le \sqrt{y}  \end{matrix}\right.{% endkatex %}   
{% katex %}\int_{\frac{1}{2} }^{1}dy\int_{\sqrt{y} }^{y}e^{\frac{y}{x} }dx{% endkatex %}可知  
{% katex %}\left\{\begin{matrix}\frac{1}{2} \le y \le 1 \\ \sqrt{y} \le x\le y  \end{matrix}\right.{% endkatex %}   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311271702887.png)  
选择X型：{% katex %}\left\{\begin{matrix}\frac{1}{2} \le x \le 1 \\x^2 \le y\le x  \end{matrix}\right.{% endkatex %}   
原式{% katex %}\int_{1}^{\frac{1}{2} }dx\int_{x^2}^{x}e^{\frac{y}{x} }dy {% endkatex %}  
{% katex %}\int_{1}^{\frac{1}{2} }x \cdot e^{\frac{y}{x} }|\begin{matrix}x\\x^2\end{matrix}dx {% endkatex %}  
{% katex %}\int_{1}^{\frac{1}{2} }x \cdot (e-e^x)dx {% endkatex %}  
{% katex %}\int_{1}^{\frac{1}{2} }xe - xe^x dx {% endkatex %}  
{% katex %}e\int_{1}^{\frac{1}{2} }x dx-\int_{\frac{1}{2} }^{1}xe^xdx {% endkatex %}    
{% katex %}e\frac{1}{2}x^2|\begin{matrix}1\\\frac{1}{2}\end{matrix}-\int_{\frac{1}{2} }^{1}xde^x {% endkatex %}    
{% katex %}e\frac{1}{2}(1-\frac{1}{4})-[(xe^x)|\begin{matrix}1\\ \frac{1}{2}\end{matrix}-\int_{\frac{1}{2} }^{1}e^xdx] {% endkatex %}    
{% katex %}\frac{3}{8}e-[e-\frac{1}{2}e^{\frac{1}{2} }-e+e^{\frac{1}{2} }] {% endkatex %}    
{% katex %}\frac{3}{8}e-\frac{\sqrt{e} }{2}{% endkatex %}   


---
### 极坐标系下的二重积分
1. 极坐标系   
极坐标系是在平面直角坐标系的基础上，引入极轴(距离)和极角(角度)的坐标系。   
由极心，极轴，极径，极角组成。  
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281458343.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281501461.png)
由图可知：{% katex %}\sin \theta =\frac{y}{r}\Longrightarrow y=r \sin \theta  {% endkatex %}     
{% katex %}\cos \theta =\frac{x}{r}\Longrightarrow x=y \cos \theta  {% endkatex %}     
小结：在极坐标下，{% katex %}x=r \cos \theta ,y=r \sin \theta ,x^2+y^2=r^2{% endkatex %}
2. 极坐标系下二重积分计算    
(1). 条件：当遇到与圆相关的积分区域（圆，半圆，扇形，弧形……）。    
(2). 考虑利用极坐标求解。  
**常见的函数**：{% katex %}\frac{y}{x},x^2+y^2{% endkatex %}   
(3). 转换：令{% katex %}x=r \cos \theta ,y=r \sin \theta ,dady=rdrd\theta{% endkatex %}    
(4). 公式：{% katex %}\iint\limits_{D} f(x,y)dxdy =(极)\int_{\theta 1}^{\theta 2}d\theta \int_{r1}^{r2}f(r\cos \theta ,r\sin \theta )\cdot rdr {% endkatex %}
3. 上下限的确定方法   
   (1). 夹角{% katex %}\theta{% endkatex %}的取值范围：
从原点出发，逆时针方向作积分区域的两条切线，取第一条触碰积分区域的切线与x正半轴的夹角为{% katex %}\theta _1{% endkatex %}。    
取第二条触碰积分区域的切线与x正半轴的夹角为{% katex %}\theta _2{% endkatex %}。      
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281537649.png)
<br />
{% katex %}\int_{\theta _1}^{\theta _2}d\theta {% endkatex %}  
   (2). 半径r的取值范围     
{% katex %}OA=r_1,OB=r_2{% endkatex %}，则{% katex %}r_1,r_2{% endkatex %}为积分区域的内外半径。     

![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281635035.png)  
<br />
r的计算方法：将{% katex %}x=r\cos \theta ,y=r\sin \theta ,x^2+y^2=r^2{% endkatex %}代入积分区域的方程，得到{% katex %}r_1,r_2{% endkatex %}的表达式。    
**注意**：{% katex %}0 \le r{% endkatex %}     
**常见积分区域（图像）**：
   (1). 圆   
一般式方程：{% katex %}x^2+y^2=R^2{% endkatex %}，其中R为半径，(a,b)为圆心。   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281643926.png)  
<br />
其中：{% katex %}0\le \theta \le 2\pi ,0\le r \le R{% endkatex %}   
   (2). 偏离原点，圆心在x轴上的圆形     
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281646302.png)  
<br />
{% katex %}(x-a)^2+y^2=a^2{% endkatex %}，其中a为半径，(a,0)为圆心。  
由图：{% katex %}-\frac{\pi }{2}\le \theta \le \frac{\pi }{2},0 \le r \le 2a\cos \theta{% endkatex %}    
展开方程式：{% katex %}x^2-2ax+a^2+y^2=a^2{% endkatex %}   
{% katex %}x^2+y^2=2ax{% endkatex %}   
即{% katex %}r^2=2a\cdot r\cos \theta{% endkatex %}     
{% katex %}r=2a\cos \theta {% endkatex %}   
   (3). 偏离原点，圆心在y轴上的圆形     
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281654238.png)
{% katex %}x^2+(y-b)^2=b^2{% endkatex %}，其中b为半径，(0,b)为圆心。     
由图：{% katex %}0\le \theta \le \pi,0 \le r \le 2a\sin \theta{% endkatex %}    
展开方程式：{% katex %}x^2+y^2-2ay+a^2=a^2{% endkatex %}   
{% katex %}x^2+y^2=2ay{% endkatex %}   
即{% katex %}r^2=2a\cdot r\sin \theta{% endkatex %}     
{% katex %}r=2a\sin \theta {% endkatex %}       

例题1：设积分区域为：D由{% katex %}x^2+y^2=\frac{\pi ^2}{9},x^2+y^2=\pi ^2{% endkatex %}围成，求{% katex %}\iint\limits_{D} \frac{\sin \sqrt{x^2+y^2} }{\sqrt{x^2+y^2} }dxdy{% endkatex %}      
解：令{% katex %}x=r\cos \theta ,y=r\sin \theta ,x^2+y^2=r^2{% endkatex %}    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311281716541.png)
由题可知{% katex %}r_1=\frac{\pi }{3},r_2=\pi {% endkatex %}   
可知:{% katex %}0 \le \theta \le 2\pi ,\frac{\pi }{3}\le r\le \pi {% endkatex %}  
由原式可得：{% katex %}\int_{0}^{2\pi }d \theta \int_{\frac{\pi }{3} }^{\pi }\frac{\sin \sqrt{r^2} }{\sqrt{r^2} }dxdy{% endkatex %}    
{% katex %}\int_{0}^{2\pi }d \theta \int_{\frac{\pi }{3} }^{\pi }\frac{\sin r}{r}dr{% endkatex %}    
{% katex %}\int_{0}^{2\pi }(-\cos r)|\begin{matrix}\pi \\\ \frac{\pi }{3}\end{matrix} d \theta{% endkatex %}    
{% katex %}\int_{0}^{2\pi } \frac{3}{2} d \theta{% endkatex %}    
{% katex %}\frac{3}{2} \theta|\begin{matrix}2\pi \\\ 0\end{matrix} {% endkatex %}     
{% katex %}3\pi {% endkatex %}    
例题2：求二重积分{% katex %}\iint\limits_{D} \frac{dxdy}{\sqrt{x^2+y^2} }{% endkatex %}其中{% katex %}D：x^2+y^2=1,x^2+y^=2x,y=0{% endkatex %}围成的区域在第一象限部分且{% katex %}x \ge \frac{1}{2}{% endkatex %}。    
解：由题可知：{% katex %}x^2+y^2=2x{% endkatex %}和{% katex %}x^2+y^2=1{% endkatex %}    
可得：{% katex %}x^2-2x+1-1+y^2=0,(x-1)+y^2=1{% endkatex %}    
即圆心为{% katex %}(1,0),r=1{% endkatex %}和{% katex %}(0,0),r=1{% endkatex %}      
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311291502473.png)
令{% katex %}x=r\cos \theta ,y=r\sin \theta ,x^2+y^2=r^2,dxdy=rdrd\theta{% endkatex %}     
过原点作切线{% katex %}y=ax{% endkatex %}    
将{% katex %}x=\frac{1}{2}{% endkatex %}带入{% katex %}x^2+y^2=2x{% endkatex %}得{% katex %}y=\frac{\sqrt{3} }{2}{% endkatex %}    
将{% katex %} x=\frac{1}{2},y=\frac{\sqrt{3} }{2} {% endkatex %}带入{% katex %}y=ax{% endkatex %}得{% katex %}a=\sqrt{3}{% endkatex %}   
则切线方程为{% katex %}y=\sqrt{3} x{% endkatex %}   
则{% katex %}\tan \theta =\sqrt{3} {% endkatex %}  
则{% katex %}\theta =\frac{\pi }{3}{% endkatex %}  
因为{% katex %}x^2+y^2=r^2,x^2+y^2=2x{% endkatex %}    
则有{% katex %}r_1=1,r_2=2\cos \theta {% endkatex %}   
即得{% katex %}\left\{\begin{matrix}0 \le \theta  \le \frac{\pi }{3}\\1 \le r \le 2 \cos \theta \end{matrix}\right.{% endkatex%}      
则原式{% katex %}=\int_{0}^{\frac{\pi }{3} }d \theta \int_{1}^{2\cos \theta }\frac{r}{r}dr{% endkatex %}    
{% katex %}=\int_{0}^{\frac{\pi }{3}}d \theta \int_{1}^{2\cos \theta }1 \cdot dr{% endkatex %}    
{% katex %}=\int_{0}^{\frac{\pi }{3}}(2\cos \theta -1)d \theta {% endkatex %}    
{% katex %}=2\sin \theta -\theta |\begin{matrix}\frac{\pi }{3}\\0\end{matrix} {% endkatex %}    
{% katex %}=\sqrt{3} -\frac{\pi }{3}{% endkatex %}      

---
### 二重积分的对称性
(1). 条件：{% katex %}f(-x,y)=f(x,y),\iint\limits_D f(x,y)dxdy=2\iint\limits_{D_1} f(x,y)dxdy {% endkatex %}     
(2). 条件：{% katex %}f(-x,y)=-f(x,y),\iint\limits_D f(x,y)dxdy=0{% endkatex %}     
由上条件可以看出：y不变{% katex %}f(-x)=f(x){% endkatex %}为偶函数，或{% katex %}f(-x)=-f(x){% endkatex %}为奇函数     
则二重积分的偶倍奇零。   
(1). 积分区域D关于y轴对称，看x的奇偶性；    
{% katex %}\iint\limits_{D}f(x,y)dxdy= {% endkatex %}关于x函数{% katex %}\left\{\begin{matrix}2\iint\limits_{D_1}f(x,y)dxdy 为偶函数\\0，为奇函数\end{matrix}\right.{% endkatex %}     
(2). 积分区域D关于x轴对称，看y的奇偶性；    
{% katex %}\iint\limits_{D}f(x,y)dxdy= {% endkatex %}关于y函数{% katex %}\left\{\begin{matrix}2\iint\limits_{D_1}f(x,y)dxdy 为偶函数\\0，为奇函数\end{matrix}\right.{% endkatex %}      
**注意：若D对称，首选对称性**     
例题1：设D由{% katex %}y=1-x^2{% endkatex %}及x轴围成，则{% katex %}\iint\limits_{D}(\sin x+x^3y)dxdy{% endkatex %}     
A. {% katex %}\frac{4}{3}{% endkatex %}      B. {% katex %}\frac{2}{3}{% endkatex %}      C.1      D. 0       
解：
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311291538835.png)
由图可知，函数关于y对称   
由题可知：{% katex %}\sin x{% endkatex %}为奇函数，{% katex %}x^3y{% endkatex %}为奇函数，即选D    
例题2：求{% katex %}I=\iint\limits_{D}xy(x+y)dxdy {% endkatex %}其中D:由{% katex %}y=x,x+y=0,x=1{% endkatex %}围成      
解：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312011434588.png)
由原式得：{% katex %}\iint\limits_{D}x^2y+xy^2dxdy{% endkatex %}    
由偶倍奇零和对称性得知：{% katex %}\iint\limits_{D_1}xy^2dxdy{% endkatex %}    
{% katex %}2\int_{0}^{1}dx\int_{0}^{x}xy^2dy{% endkatex %}    
{% katex %}2\int_{0}^{1}(x\cdot \frac{1}{3}y^3)|\begin{matrix}0\\x\end{matrix}dx{% endkatex %}    
{% katex %}2\int_{0}^{1}\frac{1}{3}x^4dx{% endkatex %}    
{% katex %}\frac{2}{3}\cdot \frac{1}{5} x^5|\begin{matrix}0\\1\end{matrix}{% endkatex %}    
{% katex %}\frac{2}{3}\cdot \frac{1}{5}1^5=\frac{2}{15}{% endkatex %}
