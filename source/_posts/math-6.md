---
title: 高等数学-无穷级数和微分方程
top: 15
hexo-math: true
type: "categories"
categories: 
  - 升学
tags:
  - 学习资料
  - math
date: 2023-11-24 16:26:00
---

# 常微分方程和无穷级数
## 常微分方程
### 一、基本概念
1. 含有{% katex %}y{% endkatex %}及相关导数的方程叫微分方程；   
2. 微分方程的阶：指微分方程中`最高阶`导数；    
3. 微分方程的解：满足微分方程的函数{% katex %}y{% endkatex %}；     
4. 微分方程解的类型：
   (1). 通解：满足微分方程的所有解。（特点：**a. 含有独立的任意常数C；b. 且C的个数于阶数相同；**）     
   (2). 特解：满足微分方程的一个特殊解。（特点：**不含C**）    

---
#### 阶数识别
{% katex %}y^{(n)}{% endkatex %}叫n阶导；  
{% katex %}\frac{dy}{dx}=y',\frac{d^2y}{dx^2}y''{% endkatex %}  
`阶数`取决于整个方程中导数的最高阶导，而不是变量的次数。  
导数**不是**幂函数；   
例题1：{% katex %}(y''}^5+2(y')^3+xy^6=0{% endkatex %}的阶数是：（2）      
例题2：{% katex %}(y')^3+y''\cdot y^4-3xy=0{% endkatex %}的阶数是：（2）    
例题3：{% katex %}(\frac{d^2y}{dx^2})^4+y\cdot \frac{dy}{dx}=0{% endkatex %}是（2）阶      
例题4：{% katex %}(y')^3+y''\cdot y^{(4)}-3xy=0{% endkatex %}是（4）阶      

---
#### 线性微分方程识别
**称方程中的未知函数{% katex %}y{% endkatex %}及其各阶导数{% katex %}y',y''{% endkatex %}等均是一次方**    
例题1：{% katex %}xy''+2y'+x^2y=0{% endkatex %}是（B）      
A.一阶线性微分方程      B.二阶线性微分方程      C.三阶线性微分方程      D.四阶线性微分方程          
例题2：下列是线性微分方程的是：（C）     
A.{% katex %}y''+(\ln x)\cdot y'+\cos xy=0{% endkatex %}     B.{% katex %}y''+2y'+y^2=e^x{% endkatex %}     C.{% katex %}y'-xy+1=\ln x{% endkatex %}     D.{% katex %}(y'')^2-y'=3x+7{% endkatex %}     

---
#### 齐次微分方程识别
{% katex %}y{% endkatex %}及其相关导数{% katex %}=Q(x){% endkatex %}全为x的函数（自由项）{% katex %}\rightarrow \left\{\begin{matrix}(x)=0，齐次\\(x)\ne 0 ， 非齐次\end{matrix}\right.{% endkatex %}    
即与y相关在等号左边，与x相关在等号右边；   
例如：{% katex %}y''+4xy=7x{% endkatex %}，其中{% katex %}7x\ne 0{% endkatex %}所以为非齐次线性微分方程，由于最高为二阶导数，即为二阶非齐次线性微分方程。    
例题1：{% katex %}y''+4xy+7x=0{% endkatex %}是（B）   
A.二阶线性齐次方程      B.二阶线性非齐次方程     C.齐次方程      D.一阶微分方程  

---
#### 解的类型判断
1. C的个数与阶数相同{% katex %}\rightarrow {% endkatex %}通解    
2. 不含C的解{% katex %}\rightarrow {% endkatex %}特解   
3. 满足方程的解{% katex %}\rightarrow {% endkatex %}解   
例题1：{% katex %}y=Ce^x+1{% endkatex %}是{% katex %}y''-y'=0{% endkatex %}的（C）    
A.通解    B.特解     C.解     D.不是解      

---
### 微分方程的直接积分法
条件：遇{% katex %}y^{(n)}=Q(x){% endkatex %}时，例如：{% katex %}y''=x+1{% endkatex %}     
例题1：{% katex %}y''=x+1{% endkatex %}的通解是：（）    
解：{% katex %}y'=\int (x+1)dx=\frac{1}{2}x^2+x+C_1{% endkatex %}      
{% katex %}y=\int (\frac{1}{2}x^2+x+C_1)dx=\frac{1}{2}\cdot \frac{1}{3}x^3+\frac{1}{2}x^2+C_1x+C_2{% endkatex %}      
{% katex %}y=\frac{1}{6}x^3+\frac{1}{2}x^2+C_1x+C_2{% endkatex %}      

---
### 一阶微分方程求解
#### 可分离变量微分方程的求解
当方程中{% katex %}x{% endkatex %}相关的函数和{% katex %}y{% endkatex %}相关函数可分开成为{% katex %}f(x)dx=g(y)dy{% endkatex %}的形式，称为可分离变量方程。   
解法：   
(1). 通过移项，乘除，将方程变量分开{% katex %}f(x)dx=g(y)dy{% endkatex %}  
(2). 两边同时积分{% katex %}\int f(x)dx=\int g(y)dy{% endkatex %}  
(3). 整理，化简      
注：常用化简：    
a. {% katex %}C_1 \pm C_2=C{% endkatex %}    
b. {% katex %}C_1 \cdot C_2{% endkatex %}或{% katex %}\frac{C_1}{C_2}=C{% endkatex %}     
c. {% katex %}C=\ln C{% endkatex %}     
d. {% katex %}\pm e^C=C{% endkatex %}     
例题1：求{% katex %}\frac{dy}{dx}=xy{% endkatex %}的通解。    
原式得{% katex %}dy=xy dx{% endkatex %}   
则{% katex %}\frac{dy}{y}=xdx{% endkatex %}    
解：由题可知：{% katex %}\frac{1}{y}dy=xdx{% endkatex %}   
同时积分：{% katex %}\int \frac{1}{y}dy=\int xdx{% endkatex %}     
得：{% katex %}\ln |y|=\frac{1}{2}x^2+C{% endkatex %}   
故通解为：{% katex %}\ln |y|=\frac{1}{2}x^2+C{% endkatex %}   
上述可化简：  
{% katex %}\ln |y|=\frac{1}{2}x^2+\ln |C|{% endkatex %}    
{% katex %}\ln |y|-\ln |C|=\frac{1}{2}x^2{% endkatex %}    
{% katex %}\ln |\frac{y}{C}|=\frac{1}{2}x^2{% endkatex %}    
{% katex %}|\frac{y}{C}|=e^{\frac{1}{2}x^2}{% endkatex %}    
{% katex %}\frac{y}{C}=\pm e^{\frac{1}{2}x^2}{% endkatex %}    
{% katex %}y=\pm Ce^{\frac{1}{2}x^2}{% endkatex %}     
{% katex %}y=Ce^{\frac{x^2}{2}}{% endkatex %}     
例题2：求微分方程{% katex %}dx+xydy=y^2dx+ydy{% endkatex %}的通解。   
析：{% katex %}(xy-y)dy=(y^2-1)dx{% endkatex %}     
{% katex %}y(x-1)dy=(y^2-1)dx{% endkatex %}    
{% katex %}ydy=\frac{(y^2-1)}{x-1}dx{% endkatex %}    
同乘{% katex %}\frac{1}{y^2-1},\frac{y}{y^2-1}dy=\frac{1}{x-1}dx{% endkatex %}      
解：由题可知：{% katex %}\frac{y}{y^2-1}dy=\frac{1}{x-1}dx{% endkatex %}     
积分得：{% katex %}\int \frac{y}{y^2-1}dy=\int \frac{1}{x-1}dx{% endkatex %}     
{% katex %}\frac{1}{2}\int \frac{1}{y^2-1}dy^2=\int \frac{1}{x-1}dx{% endkatex %}     
{% katex %}\frac{1}{2}\ln|y^2-1|=\ln |\frac{1}{x-1}|+C{% endkatex %}     
故通解为：{% katex %}\frac{1}{2}\ln|y^2-1|=\ln |\frac{1}{x-1}|+C{% endkatex %}     
上述可化简：   
{% katex %}\frac{1}{2}\ln |y^2-1|=\ln |x-1|+\ln |C|{% endkatex %}    
{% katex %}\ln |y^2-1|^{\frac{1}{2} }=\ln |C\cdot (x-1)|{% endkatex %}    
{% katex %}(y^2-1)^{\frac{1}{2} }=C\cdot (x-1){% endkatex %}    
{% katex %}\sqrt{y^2-1}=C\cdot (x-1){% endkatex %}    
{% katex %}y^2-1=C^2\cdot (x-1)^2{% endkatex %}    
{% katex %}y^2=C^2\cdot (x-1)^2+1{% endkatex %}    
{% katex %}y^2=C\cdot (x-1)^2+1{% endkatex %}      