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