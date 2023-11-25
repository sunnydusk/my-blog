---
title: 高等数学-多元函数微分学及二重积分
top: 16
hexo-math: true
type: "categories"
categories: 
  - 专升本
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
条件：{% katex %}\Delta y-\Delta y_切=\Delta y-f'(x_0)\cdot \Deltax \Longrightarrow 趋于0且为\Delta x的高阶无穷小量{% endkatex %}     
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
{% katex %}z=f(x,y)的两个混合偏导\frac{\partial^2 z}{\partial x \partial y}，\frac{\partial^2 z}{\partial y \partial x}在闭区间D内连续，则\frac{\partial^2 z}{\partial x \partial y}=\frac{\partial^2 z}{\partial y \partial x}{% endkatex %}     
例题1：设{% katex %}z=x^3y^2{% endkatex %}，求{% katex %}\frac{\partial^2 z}{\partial x^2},\frac{\partial^2 z}{\partial x \partial y},\frac{\partial^2 z}{\partial y \partial x}{% endkatex %}。   
解：{% katex %}\frac{\partial z}{\partial x}=3x^2y^2{% endkatex %}   
则{% katex %}\frac{\partial^2 z}{\partial x^2=6xy^2,\frac{\partial^2 z}{\partial x \partial y}=6x^2y{% endkatex %}   
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
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311251621609.png)  
1. 题型一：具体多元函数求导（直接带入法）  
例题1：设{% katex %}z=xy+3\ln x,其中x=2u+v ,y=u-2v{% endkatex %}，求{% katex %}\frac{\partial z}{\partial u},\frac{\partial z}{\partial v}{% endkatex %}。   
解：由题可知：{% katex %}z=(2u+v)\cdot (u-2v)+3\ln (2u+v){% endkatex %}   
{% katex %}\frac{\partial z}{\partial u}=2(u-2v)+(2u+v)+3\cdot \frac{1}{2u+v}\cdot 2=4u-3v+\frac{6}{2u+v}{% endkatex %}   
{% katex %}\frac{\partial z}{\partial v}=(u-2v)+(2u+v)\cdot (-2)+3\cdot \frac{1}{2u+v}=-3u-4v+\frac{1}{2u+v}{% endkatex %}   
2. 题型二：抽象的复合函数求导
