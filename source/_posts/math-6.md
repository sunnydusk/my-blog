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
例题1：{% katex %}(y'')^5+2(y')^3+xy^6=0{% endkatex %}的阶数是：（2）      
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

---
#### 一阶齐次微分方程
解法：   
(1). 将方程通过移项，乘除化为{% katex %}\frac{dy}{dx}=\varphi (\frac{y}{x}){% endkatex %}的形式。  
(2). 换元，令{% katex %}\frac{y}{x}=u{% endkatex %}，则{% katex %}y=u \cdot x \Longrightarrow  y'=u'x+u{% endkatex %}，即{% katex %}\frac{dy}{dx}=\frac{dy}{dx}\cdot x+u{% endkatex %}   
(3). 将上述换元回代方程{% katex %}\frac{y}{x}=\varphi (\frac{y}{x}){% endkatex %}中。  
(4). 分离变量，积分后用{% katex %}u=\frac{y}{x}{% endkatex %}回代即得通解。  
例题1：求{% katex %}y^2+x^2\frac{dy}{dx}=xy\frac{dy}{dx}{% endkatex %}的通解。   
析：{% katex %}y^2=(xy-x^2)\frac{dy}{dx}\Longrightarrow 同除x^2 (\frac{y}{x})^2=(\frac{y}{x}-1)\frac{dy }{dx}{% endkatex %}     
解：由题可知：{% katex %}(\frac{y}{x})^2=(\frac{y}{x}-1)\frac{dy}{dx}{% endkatex %}    
令{% katex %}\frac{y}{x}=u,y=u\cdot x,\frac{dy}{dx}=\frac{du}{dx}\cdot x+u{% endkatex %}    
故原式：{% katex %}u^2=(u-1)(x\frac{du}{dx}+u){% endkatex %}   
即{% katex %}u^2=(u-1)x\frac{du}{dx}+u^2-u{% endkatex %}   
{% katex %}u=(u-1)x\frac{du}{dx}{% endkatex %}     
{% katex %}udx=(u-1)xdu{% endkatex %}       
同除{% katex %}ux,\frac{1}{x}dx=\frac{(u-1)}{u}du{% endkatex %}       
{% katex %}\frac{1}{x}dx=(1-\frac{(1)}{u})du{% endkatex %}       
积分得：{% katex %}\int \frac{1}{x}dx=\int (1-\frac{(1)}{u})du{% endkatex %}       
{% katex %}\ln |u|=u-\ln |u|+C{% endkatex %}       
得：{% katex %}\ln |x|=\frac{y}{x}-\ln |\frac{y}{x}|+C{% endkatex %}     
上述可化简：   
{% katex %}\ln |x|+\ln |\frac{y}{x}|-C=\frac{y}{x}{% endkatex %}    
{% katex %}\ln |y|-\ln |C|=\frac{y}{x}{% endkatex %}    
{% katex %}\ln |\frac{y}{C}|=\frac{y}{x}{% endkatex %}    
{% katex %}|\frac{y}{C}|=e^{\frac{y}{x} }{% endkatex %}    
{% katex %}\frac{y}{C}=\pm e^{\frac{y}{x} }{% endkatex %}    
{% katex %}y=\pm Ce^{\frac{y}{x} }{% endkatex %}    
{% katex %}y=Ce^{\frac{y}{x} }{% endkatex %}    

---
#### 一阶线性微分方程
1. 形式：{% katex %}y'+P(x)\cdot y=Q(x){% endkatex %}    
解法：{% katex %}y=e^{-\int P(x)dx}\cdot [\int Q(x)e^{\int P(x)dx}dx+C]{% endkatex %}    
2. 形式：{% katex %}x'+P(y)\cdot x=Q(y){% endkatex %}    
解法：{% katex %}x=e^{-\int P(y)dy}\cdot [\int Q(y)e^{\int P(y)dy}dy+C]{% endkatex %}    
例题1：求微分方程{% katex %}y'+y=e^{-x}{% endkatex %}的通解。   
解：{% katex %}P(x)=1,Q(x)=e^{-x}{% endkatex %}    
{% katex %}y=e^{-\int P(x)dx}[\int Q(x)e^{\int P(x)dx}dx+C]{% endkatex %}     
{% katex %}e^{-\int 1dx}[\int e^{-x}\cdot e^{\int 1dx}dx+C]{% endkatex %}     
{% katex %}e^{-x}[\int e^{-x}\cdot e^xdx+C]{% endkatex %}     
{% katex %}e^{-x}(x+C)]{% endkatex %}     
注：在一阶微分方程中，{% katex %}y{% endkatex %}和{% katex %}y'{% endkatex %}是一次，可变量分离成{% katex %}y'+Py=Q{% endkatex %}，套公式；     
例题2：求{% katex %}(x^2-1)\cdot y'+2xy-\cos x=0{% endkatex %}的通解。     
析：{% katex %}y'+\frac{2x}{x^2-1}\cdot y-\frac{\cos x}{x^2-1}=0 \Longrightarrow y'+\frac{2x}\cdot y=\frac{\cos x}{x^2-1}{x^2-1}{% endkatex %}    
解：原式为一阶线性微分方程：{% katex %}y'+\frac{2x}{x^2-1}\cdot y = \frac{\cos x}{x^2-1}{% endkatex %}     
其中{% katex %}P(x)=\frac{2x}{x^2-1},Q(x)=\frac{\cos x}{x^2-1}{% endkatex %}     
所以通解{% katex %}y=e^{-\int P(x)dx}[\int Q(x)\cdot e^{\int P(x)dx}dx+C]{% endkatex %}     
{% katex %}=e^{-\int \frac{2x}{x^2-1}dx}[\int \frac{\cos x}{x^2-1}\cdot e^{\int \frac{2x}{x^2-1}dx}dx+C]{% endkatex %}       
{% katex %}=e^{-\ln (x^2-1)}[\int \frac{\cos x}{x^2-1}\cdot e^{\ln (x^2-1)}dx+C]{% endkatex %}       
{% katex %}=e^{\ln (x^2-1)^{-1} }[\int \frac{\cos x}{x^2-1}\cdot e^{\ln (x^2-1)}dx+C]{% endkatex %}       
{% katex %}=(x^2-1)^{-1} [\int \frac{\cos x}{x^2-1}\cdot \ln (x^2-1)dx+C]{% endkatex %}       
{% katex %}=\frac{1}{x^2-1} (\int \cos xdx+C){% endkatex %}       
{% katex %}=\frac{1}{x^2-1} (\sin x+C){% endkatex %}       
公式：{% katex %}{\color{Red} e^{\ln \Box }=\Box } {% endkatex %}     

---
#### 变限积分中的微分方程
遇变限积分：(1). 求导； (2). 用{% katex %}\int_{a}^{b} f(t)dt=0\Longrightarrow {% endkatex%}求出一个初始条件；    
例题1：已知一个可导函数{% katex %}f(x){% endkatex %}满足{% katex %}f(x)=\int_{0}^{x}f(t)dt+e^x{% endkatex%}，求{% katex %}f(x){% endkatex%}。        
解：由题可知，两边同时求导得：{% katex %}f'(x)=f(x)+e^x{% endkatex %}且当{% katex %}x=0{% endkatex%}时，{% katex %}f(0)=1{% endkatex%}     
令{% katex %}f(x)=y{% endkatex %}     
即{% katex %}y'-y=e^x{% endkatex %}     
其中{% katex %}P(x)=-1,Q(x)=e^x{% endkatex %}     
{% katex %}e^{-x}f(x)=\int 1dx+C{% endkatex %}     
{% katex %}e^{-x}f(x)=x+C{% endkatex %}     
{% katex %}f(x)=e^x(x+C){% endkatex %}     
所以通解{% katex %}y=e^{-\int P(x)dx}[\int Q(x)\cdot e^{\int P(x)dx}dx+C]{% endkatex %}     
{% katex %}=e^{-\int -1dx}[\int e^x\cdot e^{\int -1dx}dx+C]{% endkatex %}     
{% katex %}=e^x[\int e^x\cdot e^{-x}dx+C]{% endkatex %}       
{% katex %}=e^x(x+C){% endkatex %}       
又{% katex %}x=0,y=1{% endkatex%}   
即{% katex %}1=e^0(0+C){% endkatex%}     
{% katex %}C=1{% endkatex%}      
所以{% katex %}y=e^x(x+1){% endkatex%}      
例题2：设{% katex %}f(x){% endkatex %}具有一阶连续函数，{% katex %}f(0)=0{% endkatex%}，且{% katex %}\int_{2}[f(x)-e^x]ydx-f(x)dy{% endkatex%}与路径无关，求{% katex %}f(x){% endkatex%}。     
解：由题可知，令{% katex %}P(x,y)=[f(x)-e^x]\cdot y,Q(x,y)=-f(x){% endkatex %}     
因为积分与路径无关，故{% katex %}\frac{P}{y}=\frac{Q}{x}{% endkatex%}      
即：{% katex %}f(x)-e^x=-f'(x){% endkatex%}     
即：{% katex %}y-e^x=-y'{% endkatex%}     
即：{% katex %}y'+y=e^x{% endkatex%}     
其中{% katex %}P(x)=1,Q(x)=e^x{% endkatex %}     
所以通解{% katex %}y=e^{-\int P(x)dx}[\int Q(x)\cdot e^{\int P(x)dx}dx+C]{% endkatex %}     
{% katex %}y=e^{-\int 1dx}[\int e^x\cdot e^{\int 1dx}dx+C]{% endkatex %}     
{% katex %}y=e^{-x}[\int e^x\cdot e^x dx+C]{% endkatex %}     
{% katex %}y=e^{-x}[\frac{1}{2}\int e^{2x}d2x+C]{% endkatex %}     
{% katex %}y=e^{-x}(\frac{1}{2}e^{2x}+C){% endkatex %}     
即{% katex %}f(x)=y=e^{-x}(\frac{1}{2}e^{2x}+C){% endkatex %}     
因为{% katex %}f(0)=0{% endkatex%}  
即{% katex %}0=e^{-0}(\frac{1}{2}e^{2\cdot 0}+C){% endkatex%}    
{% katex %}C=-\frac{1}{2}{% endkatex%}    
所以{% katex %}f(x)=y=e^{-x}(\frac{1}{2}e^{2x}-\frac{1}{2}){% endkatex%}     

---
### 二阶微分方程
#### 二阶线性微分方程   
1. 定义：称{% katex %}ay''+by'+cy=f(x){% endkatex %}为二阶微分方程     
   (1). 当{% katex %}f(x)=0{% endkatex %}时，称为二阶齐次微分方程；   
   (2). 当{% katex %}f(x)=P(x)\cdot e^{\lambda x}{% endkatex %}时，称为二阶非齐次微分方程；       
2. 二阶齐次微分方程的解法     
   (1). 标准形式：{% katex %}ay''+by'+cy=0{% endkatex %}      
   (2). 解法：
a. 写出特征方程：{% katex %}ar^2+br+c=0{% endkatex %}
b. 特征根：{% katex %}r_{1，2}=\frac{-b \pm \sqrt{b^2-4ac} }{2a}{% endkatex %}     
c. 套公式：{% katex %}\left\{\begin{matrix}1. r_1 \ne r_2,y=c_1e^{r_1x}+c_2e^{r_2x}\\2. r_1=r_1,y=(c_1+c_2x)e^{r_1x}\\3.r_{1,2}=a \pm bi,y=e^{ax}\cdot (c_1\cos bx+c_2\sin bx \end{matrix}\right.{% endkatex %}      
注意：欧拉创建：{% katex %}i^2=-1{% endkatex %}替代当根式下为负数的情况；例如：{% katex %}\sqrt{-4}=\sqrt{4i}=2i{% endkatex %}     
例题1：{% katex %}y''+5y'+6y=0{% endkatex %}的通解是()      
解：特征方程：{% katex %}r^2+5r+6=0{% endkatex %}   
特征根：{% katex %}r_1=-2,r_2=-3{% endkatex %}   
通解：{% katex %}y=c_1e^{-2x}+c_2e^{-3x}{% endkatex %}或{% katex %}y=c_1e^{-3x}+c_2xe^{-2x}{% endkatex %}    
例题2：求微分方程{% katex %}y''+6y'+9y=0{% endkatex %}的通解。    
解：特征方程：{% katex %}r^2+6r+9=0{% endkatex %}   
特征根：{% katex %}r_1=r_2=-3{% endkatex %}   
通解：{% katex %}y=(c_1+c_2x)e^{-3x}{% endkatex %}   
例题3：求微分方程{% katex %}y''-4y'+5y=0{% endkatex %}的通解。     
解：特征方程：{% katex %}r^2-4r+5=0{% endkatex %}   
特征根：{% katex %}r_{1,2}=2\pm 1i{% endkatex %}   
通解：{% katex %}y=e^{2x}(c_1\cos x+c_2\sin x){% endkatex %}       
例题4：求微分方程{% katex %}y''+6y'+9y=0{% endkatex %}满足x的条件：{% katex %}y|_{x=0}=1,y'|_{x=0}=2{% endkatex%}的特解。      
解：特征方程：{% katex %}r^2+6r+9=0{% endkatex %}   
特征根：{% katex %}r_1=r_2=3{% endkatex %}      
通解：{% katex %}y=(c_1+c_2x)e^{3x}{% endkatex %}   
因为{% katex %}y'=c_2e^{3x}+(c_1+c_2x)e^{3x}\cdot 3{% endkatex%}    
由{% katex %}y|_{x=0}=1,y'|_{x=0}=2{% endkatex%}得：{% katex %}c_1=1,c_2=-1{% endkatex%}      
已知方程通解，反求方程表达式：   
例题5：若{% katex %}c_1{% endkatex%}和{% katex %}c_2{% endkatex%}为两个独立的任意常数，则{% katex %}y=c_1e^{-x}+c_2e^{5x}{% endkatex%}是哪个二阶齐次微分方程的通解()    
解：由题可知，特根为：{% katex %}r_1=-1,r_2=5{% endkatex%}    
方程即为：{% katex %}(r+1)(r-5)=0{% endkatex%}    
解得方程为：{% katex %}r^2-4r-5=0{% endkatex%}    
即：{% katex %}y''-4y'-5y=0{% endkatex%}  

---
