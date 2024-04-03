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
析：{% katex %}y^2=(xy-x^2)\frac{dy}{dx}\Longrightarrow 同除x^2 ,(\frac{y}{x})^2=(\frac{y}{x}-1)\frac{dy }{dx}{% endkatex %}     
解：由题可知：{% katex %}(\frac{y}{x})^2=(\frac{y}{x}-1)\frac{dy}{dx}{% endkatex %}    
令{% katex %}\frac{y}{x}=u,y=u\cdot x,\frac{dy}{dx}=\frac{du}{dx}\cdot x+u{% endkatex %}    
故原式：{% katex %}u^2=(u-1)(x\frac{du}{dx}+u){% endkatex %}   
即{% katex %}u^2=(u-1)x\frac{du}{dx}+u^2-u{% endkatex %}   
{% katex %}u=(u-1)x\frac{du}{dx}{% endkatex %}     
{% katex %}udx=(u-1)xdu{% endkatex %}       
同除{% katex %}ux,\frac{1}{x}dx=\frac{(u-1)}{u}du{% endkatex %}       
{% katex %}\frac{1}{x}dx=(1-\frac{(1)}{u})du{% endkatex %}       
积分得：{% katex %}\int \frac{1}{x}dx=\int (1-\frac{(1)}{u})du{% endkatex %}       
{% katex %}\ln |x|=u-\ln |u|+C{% endkatex %}       
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
析：{% katex %}y'+\frac{2x}{x^2-1}\cdot y-\frac{\cos x}{x^2-1}=0 \Longrightarrow y'+\frac{2x}{x^2+1}\cdot y=\frac{\cos x}{x^2-1}{x^2-1}{% endkatex %}    
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
c. 套公式：{% katex %}\left\{\begin{matrix}1. r_1 \ne r_2,y=c_1e^{r_1x}+c_2e^{r_2x}\\2. r_1=r_2,y=(c_1+c_2x)e^{r_1x}\\3.r_{1,2}=a \pm bi,y=e^{ax}\cdot (c_1\cos bx+c_2\sin bx) \end{matrix}\right.{% endkatex %}      
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
#### 二阶常系数非齐次线性微分方程
##### 特解的一般形式
1. 定义：{% katex %}ay''+by'+cy=f(x){% endkatex %}为二阶常系数非齐次线性微分方程；     
2. 类型：  
   (1). {% katex %}ay''+by'+cy=P(x)\cdot e^{\lambda x}{% endkatex %}     
非齐次线性方程解的结果：{% katex %}y=\bar{y}+y^* {% endkatex %}其中{% katex %}\bar{y}{% endkatex %}为齐次通解；{% katex %}y^*{% endkatex %}为非齐次特解；      
计算齐次通解：{% katex %}\bar{y}：ay''+by'+cy=0{% endkatex %}的解{% katex %}->a\bar{y}''+b\bar{y}'+c\bar{y}=0{% endkatex %}    
计算非齐次特解：{% katex %}y^*：ay''+by'+cy=P(x)\cdot e^{\lambda x}{% endkatex %}的解->{% katex %}a{y^*}''+b{y^*}'+cy^*=P(x)\cdot e^{\lambda x}{% endkatex %}    
由上述两个式子相加{% katex %}a({\bar{y} }''+{y^*}'')+b({\bar{y} }'+{y^*}')+c(\bar{y}+y^*)=P(x)\cdot e^{\lambda x}{% endkatex %}     
得{% katex %}ay''+by'+cy=P(x)\cdot e^{\lambda x}{% endkatex %}    
3. 求二阶非齐次通解：   
   (1). 特征根法求{% katex %}ay''+by'+cy=0{% endkatex %}的通解{% katex %}\bar{y}{% endkatex %}    
   (2). 设特解{% katex %}y^*{% endkatex %}的一般形式，求出{% katex %}{y^*}',{y^*}''{% endkatex %}，将{% katex %}y^*,{y^*}',{y^*}''{% endkatex %}带入原式方程{% katex %}ay''+by'+cy=P(x)\cdot e^{\lambda x}{% endkatex %}对比“左=右”,{% katex %}a{y^*}''+b{y^*}'+cy^*=P(x)\cdot e^{\lambda x}{% endkatex %}用待定系数，求出{% katex %}y^*{% endkatex %}；    
   (3). 解出非齐次线性方程的通解：{% katex %}y=\bar{y}+y^*{% endkatex %}       
注：特解{% katex %}y^*{% endkatex %}的一般形式设：看{% katex %}P(x)\cdot e^{\lambda x}{% endkatex %}    
{% katex %}y^*=Q(x)\cdot e^{\lambda x}\cdot x^k{% endkatex %},其中，{% katex %}Q(x){% endkatex %}为{% katex %}P(x){% endkatex %}的一般式；     
当{% katex %}P(x){% endkatex %}为：   
   (1). 常数：则{% katex %}A,B{% endkatex %}代替{% katex %}=Q(x){% endkatex %}      
   (2). 一次函数：则{% katex %}ax+b=Q(x){% endkatex %}       
   (3). 二次函数：则{% katex %}ax^2+bx+c=Q(x){% endkatex %}     
其中{% katex %}x^k{% endkatex %}中的{% katex %}k{% endkatex %}看{% katex %}\lambda {% endkatex %}与{% katex %}r_1,r_2{% endkatex %}的关系而定：    
当{% katex %}k=0,\lambda \ne r_1,\lambda \ne r_2{% endkatex %}两个皆不相同       
当{% katex %}k=1,\lambda {% endkatex %}与{% katex %} r_1 r_2{% endkatex %}有一个相同     
当{% katex %}k=2,\lambda = r_1,\lambda = r_2{% endkatex %}两个都相同       
例题1：求微分方程{% katex %}y''-5y'+6y=3xe^{2x}{% endkatex %}的特解可设为：()。    
析：{% katex %}P(x)=3x,Q(x)=e^{2x}{% endkatex %}即{% katex %}\lambda =2，3x{% endkatex %}为一次，即{% katex %}(ax+b){% endkatex %}     
解：设方程为{% katex %}y^*=(ax+b)e^{2x}\cdot x^k{% endkatex %}    
因为{% katex %}y''-5y'+6y=r^2-5r+6=(r-2)(r-3)=0{% endkatex %}     
解得{% katex %}r_1=2,r_2=3{% endkatex %}     
因为{% katex %}\lambda =r_1=2 \ne r_2=3{% endkatex %}        
即有一个相等，所以{% katex %}k=1{% endkatex %}     
即{% katex %}y^*=(ax+b)e^{2x}\cdot x{% endkatex %}      
解得：{% katex %}y^*=(ax^2+bx)e^{2x}{% endkatex %}     
例题2：求微分方程{% katex %}y''-5y'+6y=3xe^{2x}{% endkatex %}的特解形式为：(B)。     
A. {% katex %}(ax+b)e^{-x}{% endkatex %}     
B. {% katex %}x^2(ax+b)e^{-x}{% endkatex %}     
C. {% katex %}x(ax+b)e^{-x}{% endkatex %}     
D. {% katex %}a(x+1)e^{-x}{% endkatex %}     
析：{% katex %}P(x)=(x-1),Q(x)=e^{-x}{% endkatex %}即{% katex %}\lambda =-1，(x-1){% endkatex %}为一次，即{% katex %}(ax+b){% endkatex %}     
解:设方程为{% katex %}y^*=(ax+b)e^{-x}\cdot x^k{% endkatex %}   
因为{% katex %}y''+2y'+y=r^2+2r+1=(r+1)^2=0{% endkatex %}     
解得{% katex %}r_1=r_2=-1{% endkatex %}    
因为{% katex %}\lambda =r_1=-1 = r_2=-1{% endkatex %}   
即两个都相等，所以{% katex %}k=2{% endkatex %}   
即{% katex %}y^*=x^2(ax+b)e^{-x}{% endkatex %}     

---
##### 题型二：非齐次通解的解及其结构
例题1：设{% katex %}y_1,y_2,y_3{% endkatex %}是二阶非齐次线性微分方程组{% katex %}Ax=b{% endkatex %}的解，则(D)。      
A. {% katex %}y_1+y_2+y_3{% endkatex %}是{% katex %}Ax=b{% endkatex %}的解；        
B. {% katex %}y_1-y_2{% endkatex %}是{% katex %}Ax=b{% endkatex %}的解；        
C. {% katex %}2y_1-y_2{% endkatex %}是{% katex %}Ax=0{% endkatex %}的解；        
D. {% katex %}y_1+y_2-y_3{% endkatex %}是{% katex %}Ax=b{% endkatex %}的解；        
**结构**：{% katex %}\bar{y}+y^*{% endkatex %}    
解：由题可知：{% katex %}Ay_1=b,Ay_2=b,Ay_3=b{% endkatex %}    
即{% katex %}A(y_1+y_2+y_3)=3b{% endkatex %}故A错；      
即{% katex %}A(y_1-y_2)=0{% endkatex %}故B错；     
即{% katex %}A(2y_1-y_2)=b{% endkatex %}故C错；   
即{% katex %}A(y_1+y_2-y_3)=b{% endkatex %}故D对；     
例题2：设{% katex %}\alpha _1,\alpha _2{% endkatex %}是{% katex %}Ax=B{% endkatex %}，{% katex %}\beta {% endkatex %}是对应{% katex %}Ax=0{% endkatex %}的解，则(D)。     
A. {% katex %}2\beta +\alpha _1{% endkatex %}是{% katex %}Ax=0{% endkatex %}的解；     
B. {% katex %}\beta +\alpha _1+\alpha _2{% endkatex %}是{% katex %}Ax=0{% endkatex %}的解；     
C. {% katex %}2\alpha _1+\alpha _2{% endkatex %}是{% katex %}Ax=B{% endkatex %}的解；     
D. {% katex %}2\alpha _1-\alpha _2{% endkatex %}是{% katex %}Ax=B{% endkatex %}的解；     
解：由题可知：{% katex %}A\alpha _1=B,A\alpha _2=B,A\beta =0{% endkatex %}   
即{% katex %}A(2\beta +\alpha _1)=B{% endkatex %}故A错；     
即{% katex %}A(\beta +\alpha _1+\alpha _2)=2B{% endkatex %}故B错；    
即{% katex %}A(2\alpha _1+\alpha _2)=3B{% endkatex %}故C错；
即{% katex %}A(2\alpha _1-\alpha _2)=B{% endkatex %}故D对；      
`结构定理：`  
(1). {% katex %}ay''+by'+cy=f(x){% endkatex %}，通解{% katex %}y=\bar{y}+y^*{% endkatex %}    
(2). {% katex %}y_1,y_2{% endkatex %}为{% katex %}ay''+by'+cy=f(x){% endkatex %}两个解；   
由上述可知：{% katex %}y_1-y_2{% endkatex %}为{% katex %}ay''+by'+cy=0{% endkatex %}    
(3). {% katex %}y_1^*,y_2^*{% endkatex %}分别为{% katex %}ay''+by'+cy=f_1(x){% endkatex %}与{% katex %}ay''+by'+cy=f_2(x){% endkatex %}的特解；    
由上述可知：{% katex %}y_1^*+y_2^*{% endkatex %}为{% katex %}ay''+by'+cy=f_1(x)+f_2(x){% endkatex %}的特解；    
(4). {% katex %}y_1,y_2{% endkatex %}是独立的，{% katex %}ay''+by'+cy=f(x){% endkatex %}的两个解，则{% katex %}y_1-y_2{% endkatex %}为{% katex %}ay''+by'+cy=0{% endkatex %}的解；     
由上述可知：{% katex %}c_1y_1+c_2y_2+y_1(y_2)=>ay''+by'+cy=f(x){% endkatex %}的通解，即齐次通解+非齐次特解；    

---
##### 非齐次微分方程求通解
例题1：求微分方程{% katex %}y''-5y'+6y=xe^{2x}{% endkatex %}的通解。     
解：特征方程：{% katex %}r^2-5r+6=(r-2)(r-3)=0{% endkatex %}      
解得特征根：{% katex %}r_1=2,r_2=3{% endkatex %}    
故齐次通解为：{% katex %}y=c_1e^{2x}+c_2e^{3x}{% endkatex %}    
又因为{% katex %}\lambda =2=r_1 \ne r_1{% endkatex %}，故{% katex %}k=1{% endkatex %}   
令特解为：{% katex %}y^*=(ax+b)e^{2x}\cdot x{% endkatex %}   
即特解为：{% katex %}y^*=(ax^2+bx)e^{2x}{% endkatex %}     
将特解带入原式：{% katex %}{y^*}''-5{y^*}'+6y^*=(-2ax+2a-b)e^{2x}=xe^{2x}{% endkatex %}    
得：{% katex %}a=-\frac{1}{2},b=-1{% endkatex %}     
所以特解为：{% katex %}y^*=-\frac{1}{2}x^2e^{2x}-xe^{2x}{% endkatex %}   
所以非齐次通解为：{% katex %}y=\bar{y}+y^*=c_1e^{2x}+c_2e^{3x}+(-\frac{1}{2}x^2-x)e^{2x}{% endkatex %}     

---
##### n阶常系数微分方程求解
{% katex %}y^{(n)}+P_1y^{(n-1)}+……=0{% endkatex %}      
解法：    
(1). 写出特征方程：{% katex %}r^{(n)}+P_1r^{(n-1)}+……=0{% endkatex %}     
(2). 求特征根{% katex %}r_1,r_2,……,r_n{% endkatex %}    
(3). 套公式：
若为实数根r：
当r为单根时：{% katex %}y=ce^{rx}{% endkatex %}     
当r为k重根时：{% katex %}y=(c_1+c_2x+……+c_kx^{k-1})e^{rx}{% endkatex %}    
若为复数根{% katex %}r=a \pm bi{% endkatex %}    
当r为单根时：{% katex %}y=e^{ax}(c_1 \cos bx+c_2 \sin bx){% endkatex %}     
当r为k重根时：{% katex %}y=e^{ax}[c_1+c_2x+……+c_kx^{k-1}\cos bx+(D_1+D_2x+……+D_kx^{k-1})-\sin bx]{% endkatex %}       
例题1：{% katex %}y'''+2y''=0{% endkatex %}的通解：()     
解：特征方程：{% katex %}r^3+2r^2=r^2(r+2)=0{% endkatex %}      
解得特征根：{% katex %}r_1=r_2=0,r_3=-2{% endkatex %}    
当{% katex %}r=0{% endkatex %}时为二重根，{% katex %}y=(c_2+c_3)e^{0x}=c_2+c_3x{% endkatex %}     
当{% katex %}r=-2{% endkatex %}时为单根，{% katex %}y=c_1e^{-2x}{% endkatex %}     
所以通解为：{% katex %}y=c_1e^{-2x}+c_2+c_3x{% endkatex %}   

---
## 无穷级数
### 泰勒公式
1. 常见的泰勒公式    
当{% katex %}x \to 0{% endkatex %}:   
即有：  
   (1). {% katex %}\sin x=x-\frac{1}{6}x^3+o(x^3) {% endkatex %}    
   (2). {% katex %}\cos x=1-\frac{1}{2}x^2+\frac{1}{24}x^4+o(x^4) {% endkatex %}    
   (3). {% katex %}\tan x=x+\frac{1}{3}x^3+o(x^3) {% endkatex %}    
   (4). {% katex %}\arcsin x=x+\frac{1}{6}x^3+o(x^3) {% endkatex %}    
   (5). {% katex %}\arccos x= {% endkatex %}   
   (6). {% katex %}\arctan x=x-\frac{1}{3}x^3+o(x^3) {% endkatex %}    
   (7). {% katex %}e^x=1+x+\frac{1}{2i}x^2+\frac{1}{3i}x^3+o(x^3) {% endkatex %}    
   (8). {% katex %}\ln (1+x)=x-\frac{1}{2}x^2+\frac{1}{3}x^3+o(x^3) {% endkatex %}     
   (9). {% katex %}(1+x)^{\alpha }=x+\alpha x+\frac{\alpha (\alpha -1)}{2}x^2+o(x^2) {% endkatex %}    
对于上述第九个公式会有：   
当{% katex %}\alpha =\frac{1}{2}{% endkatex %}时，则{% katex %}\sqrt{1+x}=1+\frac{1}{2}x-\frac{1}{8}x^2+o(x^2){% endkatex %}     
当{% katex %}\alpha =\frac{1}{3}{% endkatex %}时，则{% katex %}\sqrt{1+x}=1+\frac{1}{3}x-\frac{1}{9}x^2+o(x^2){% endkatex %}     
2. 常用的公式    
当{% katex %}x \to 0{% endkatex %}:   
   (1). {% katex %}\tan x-\sin x=\frac{1}{2}x^3+o(x^3){% endkatex %}      
   (2). {% katex %}x-\sin x=\frac{1}{6}x^3+o(x^3){% endkatex %}      
   (3). {% katex %}\arcsin x -x=\frac{1}{6}x^3+o(x^3){% endkatex %}      
   (4). {% katex %}\tan x-x=\frac{1}{3}x^3+o(x^3){% endkatex %}      
   (5). {% katex %}x-\arctan x=\frac{1}{3}x^3+o(x^3){% endkatex %}      
则可以得：   
   (1). {% katex %}\tan x-\sin x~\frac{1}{2}x^3{% endkatex %}      
   (2). {% katex %}x-\sin x~\frac{1}{6}x^3{% endkatex %}      
   (3). {% katex %}\arcsin x -x~\frac{1}{6}x^3{% endkatex %}      
   (4). {% katex %}\tan x-x~\frac{1}{3}x^3{% endkatex %}      
   (5). {% katex %}x-\arctan x~\frac{1}{3}x^3{% endkatex %}   
亦可得：   
   (1). {% katex %}x-\ln (1+x)~\frac{1}{2}x^2{% endkatex %}    
   (2). {% katex %}e^x-1-x~\frac{1}{2}x^2{% endkatex %}    
   (3). {% katex %}1-\cos ^{\alpha }x~\frac{\alpha }{2}x^2{% endkatex %}    
   (4). {% katex %}f(x)^{g(x)}-1~g(x)[f(x)-1]{% endkatex %}(当{% katex %}f(x) \to 1{% endkatex %}且{% katex %}f(x)^{g(x)}\to 1{% endkatex %})    
以上公式内容均参考：[叶灵均的高数笔记](https://zhuanlan.zhihu.com/p/424480334)

---
### 无穷级数的概念
将无穷多个数进行求和：记为{% katex %}\sum_{n=1}^{\infty }u_n=u_1+u_2+…+u_n+… {% endkatex %}，其中{% katex %}u_n{% endkatex %}为通项；       
1. 收敛与发散：  
   (1). 部分和（前n项和）：{% katex %}S_n=\sum_{i=1}^{n}u_i=u_1+u_2+…+u_n{% endkatex %}    
   (2). 当{% katex %}\lim_{x \to \infty }S_n={% endkatex %}常数，称{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}收敛；     
当{% katex %}\lim_{x \to \infty }S_n=\infty{% endkatex %}(不存在)，称{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}发散；     
**常见数列求和**：
a. 等差数列求和：     
通项：{% katex %}a_n=a_1+(n-1)d{% endkatex %}     
求和：{% katex %}S_n=\frac{(a_1+a_n)\cdot n}{2}{% endkatex %}     
b. 等比数列求和：   
通项：{% katex %}a_n=s_1\cdot q^{n-1}{% endkatex %}     
求和：{% katex %}S_n=\frac{a_1(1-q^n)}{1-q}(q\ne 1){% endkatex %}    
注：{% katex %}|q|<1,n \to \infty ,q^n \to 0{% endkatex %}->{% katex %}S_n=\frac{a_1}{1-q}={% endkatex %}{% katex %}\frac{首项}{1-公比}{% endkatex %}|公比|<1;      
c. 裂项相消：    
{% katex %}\frac{1}{n(n+1)}=\frac{1}{n}-\frac{1}{n+1}{% endkatex %}      
例：{% katex %}\sum_{n=1}^{\infty }\frac{1}{n(n+1)} =\sum_{n=1}^{\infty }(\frac{1}{n}-\frac{1}{n+1}  )  {% endkatex %}    
{% katex %}=(1-\frac{1}{2} )+(\frac{1}{2}-\frac{1}{3} )+…+(\frac{1}{n}-\frac{1}{n+1}){% endkatex %}
{% katex %}=1-\frac{1}{n+1}=1{% endkatex %}     

---
### 无穷级数的性质
1. 收敛级数性质：    
   (1). {% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}收敛于A，则{% katex %}\sum_{n=1}^{\infty }ku_n=k\sum_{n=1}^{\infty }u_n{% endkatex %}也收敛，且收敛于{% katex %}kA{% endkatex %}     
   (2). {% katex %}收敛 \pm 收敛=收敛{% endkatex %}；{% katex %}收敛 \pm 发散=发散{% endkatex %}，其余不一定成立；       
注：{% katex %}发散 \pm 发散=不一定{% endkatex %}    
   (3). 在级数中减去或者加上有限项，不会改变级数敛散性；     
   (4). 若{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}收敛，对任意项加括号后构成的新级数，敛散性不变；    
级数收敛的结论：     
{% katex %}\sum_{n=1}^{\infty }u_n\rightarrow  \lim_{n \to \infty }u_n=0{% endkatex %}(**不可以反推**)       
例题1：级数{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}收敛，求{% katex %}\lim_{x \to \infty }(u_n+2)=(2){% endkatex %}。      
解析：收敛：{% katex %}u_n \to 0 \to 0+2=2{% endkatex %}    
2. 级数敛散性判别：    
   (1). 第n项判别法(逆否命题)：{% katex %}\lim_{x \to \infty }u_n \ne 0 \rightarrow \sum_{n=1}^{\infty }u_n{% endkatex %}发散；     
例题2:判断级数{% katex %}\sum_{n=1}^{\infty }\sin \frac{1}{n},\sum_{n=1}^{\infty }\cos \frac{1}{n},\sum_{n=1}^{\infty }(1+\frac{1}{n})^n,\sum_{n=1}^{\infty}\sqrt[n]{n}{% endkatex %}的敛散性。    
解：当{% katex %}n \to \infty{% endkatex %}时，{% katex %}\lim_{n \to \infty}\sin \frac{1}{n}{% endkatex %}
{% katex %}n \to \infty,\frac{1}{n} \to 0,\sin \frac{1}{n}~\frac{1}{n}{% endkatex %}
所以，原级数{% katex %}\sum_{n=1}^{\infty}\sin \frac{1}{n}=\sum_{n=1}^{\infty }\frac{1}{n}{% endkatex %}同敛散性；   
{% katex %}\sum_{n=1}^{\infty }\frac{1}{n}{% endkatex %}发散，即原级数发散；    
{% katex %}\lim_{n \to \infty }\cos \frac{1}{n}=1 \ne 0{% endkatex %}，即发散；    
{% katex %}\lim_{n \to \infty }(1+\frac{1}{n})^n=e \ne 0{% endkatex %}，即发散；    
{% katex %}\lim_{n \to \infty }\sqrt[n]{n}=\lim_{x \to \infty }n^{\frac{1}{n} }=\lim_{x \to \infty }e^{\frac{\ln x}{x} }=e^{\lim_{x \to \infty} \frac{1}{x} }=e^0=1 \ne 0{% endkatex %}，即发散；    
例题3：若{% katex %}\lim_{x \to \infty }u_n \ne 0{% endkatex%}则{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex%}发散；    
若{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex%}收敛，则{% katex %}\lim_{x \to \infty}u_n=0{% endkatex%}；    
3. 等比级数判敛方法（几何级数）：     
   (1). 标准式：{% katex %}\sum_{n=0}^{\infty }a\cdot q^n{% endkatex %}（q为公比）    
   (2). 判别方法：看{% katex %}|q|\Longrightarrow \left\{\begin{matrix}|q|<1 ,收\\|q| \ge 1,  发\end{matrix}\right.{% endkatex %}     
例题4：判断级数{% katex %}\sum_{n=1}^{\infty }3^n{% endkatex %}的敛散性。   
解：{% katex %}|q|=3 > 1{% endkatex %}，发散；   
{% katex %}\lim_{n \to \infty}3^n=\infty \ne 0{% endkatex %}，发散；    
例题5：判断级数{% katex %}\sum_{n=1}^{\infty }(-1)^n\cdot \frac{1}{3^n}{% endkatex %}的敛散性。    
解：{% katex %}\lim_{n \to \infty}(\frac{-1}{3})^n,|q|=\frac{1}{3} < 1{% endkatex %}，即收敛；         
例题6：判断级数{% katex %}\sum_{n=1}^{\infty }(\frac{1}{4})^n\cdot \frac{1}{n}{% endkatex %}的敛散性。      
解：{% katex %}\lim_{n \to \infty}(\frac{1}{4})^n,|q| =\frac{1}{4} <1{% endkatex %}，即收敛；          
例题7：判断级数{% katex %}\sum_{n=1}^{\infty }(-1)^{n-1}\cdot \frac{2^n}{3^n}{% endkatex %}的敛散性。     
解：{% katex %}-\lim_{n \to \infty}(-\frac{2}{3})^n,|q|=\frac{2}{3}<1{% endkatex %}，即收敛；   
例题8：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{2^n-1}{3^n}{% endkatex %}的敛散性。    
解：{% katex %}\sum_{n=0}^{\infty }\frac{2^n}{3^n}-\sum_{n=1}^{\infty}(\frac{1}{3})^n,|q_1|=\frac{2}{3}<1,|q_2|=\frac{1}{3}<1{% endkatex %},利于性质{% katex %}收敛\pm 收敛=收敛{% endkatex%}， 即收敛；
例题9：判断级数{% katex %}\sum_{n=1}^{\infty }(\frac{3}{2})^n{% endkatex %}的敛散性。     
解：{% katex %}\lim_{n \to \infty}(\frac{3}{2})^n,|q|=\frac{3}{2}>1{% endkatex %}，即发散；   
4. P级数判别法：   
   (1). 形式：{% katex %}\sum_{n=1}^{\infty }\frac{1}{n^P}{% endkatex %}，其中{% katex %}P>0{% endkatex %}为数字；         
   (2). 判别方法：看{% katex %}p\Longrightarrow \left\{\begin{matrix}p>1 ,收\\p \le 1, 发\end{matrix}\right.{% endkatex %}     
注：调和级数，{% katex %}\sum_{n=1}^{\infty }\frac{1}{n^1},P=1{% endkatex %}，发散；      
例题10：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{1}{\sqrt[4]{n^2} }{% endkatex %}的敛散性。    
解：{% katex %}\sum_{n=1}^{\infty }\frac{1}{\sqrt[4]{n^2} }=\sum_{n=1}^{\infty }\frac{1}{n^{\frac{1}{2} } }{% endkatex %}      
{% katex %}P=\frac{1}{2} <1{% endkatex %}，即发散；     
5. 正项级数判别法：    
   (1). 形式：{% katex %}\sum_{n=1}^{\infty }u_n(u_n > 0){% endkatex %}，即{% katex %}u_n{% endkatex %}为正数；     
   (2). 判别方法：   
a. 比值判别法（达朗贝尔判别法）自比自：    
{% katex %}\lim_{n \to \infty} \frac{u_n+1}{u_n}\Longrightarrow \left\{\begin{matrix}<1,收\\>1,发\\=1，失效\end{matrix}\right.{% endkatex %}失效只能使用其他方法；       
使用对象：{% katex %}u_n{% endkatex %}中含有{% katex %}n!,a^n,n^n{% endkatex %}优选比值判别法；      
例题11：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{2^n}{n!}{% endkatex %}的敛散性。    
解：{% katex %}u_n=\frac{2^n}{n!},u_{n+1}=\frac{2^{n+1} }{(n+1)!}{% endkatex %}       
{% katex %}\lim_{n \to \infty}\frac{u_{n+1} }{u_n}=\lim_{n \to \infty}\frac{2^{n+1} \cdot n!}{2^n \cdot (n+1)!}{% endkatex %}    
{% katex %}=\lim_{n \to \infty}2 \cdot \frac{n!}{n!\cdot  (n+1)!}{% endkatex %}    
{% katex %}=\lim_{n \to \infty}\frac{2}{(n+1)}{% endkatex %}    
{% katex %}=0<1{% endkatex %}    
由比值判别法得知，级数收敛；    
例题12：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{2^n\cdot n!}{n^n}{% endkatex %}的敛散性。     
解：{% katex %}u_n=\frac{2^n\cdot n!}{n^n},u_{n+1}=\frac{2^{n+1} \cdot (n+1)!}{(n+1)^{n+1} }{% endkatex %}       
{% katex %}\lim_{n \to \infty}\frac{u_{n+1} }{u_n}=\lim_{n \to \infty}\frac{2^{n+1} \cdot (n+1)! \cdot n!}{2^n \cdot n! \cdot (n+1)^{n+1} }{% endkatex %}    
{% katex %}=\lim_{n \to \infty}\frac{2^{n+1} }{2^n}\cdot \frac{(n+1)!}{n!}\cdot \frac{n^n}{(n+1)^{n+1}}{% endkatex %}    
{% katex %}=\lim_{n \to \infty}2(n+1)\cdot \frac{n^n}{(n+1)^{n+1}}{% endkatex %}    
{% katex %}=\lim_{n \to \infty}2\cdot (\frac{n}{(n+1)})^n{% endkatex %}    
{% katex %}=\lim_{n \to \infty}2\cdot e^{\frac{-n}{n+1}}{% endkatex %}    
{% katex %}=2 \cdot e^{-1}=\frac{2}{e}<1{% endkatex %}   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312071151868.png)
由比值判别法，级数收敛；    
b. 比较判别法 them 比 them：     
大方收敛则小方收敛，小方发散则大方发散；   
找级数{% katex %}\sum_{n=1}^{\infty }v_n{% endkatex %}的方法；     
   (1). 等价（极限的比较判别法）；
公式：{% katex %}\lim_{n \to \infty}\frac{u_n}{v_n}=A{% endkatex %}     
{% katex %}A\left\{\begin{matrix}A为常数，同敛散性\\0，大收小收\\\infty,小发大发\end{matrix}\right.{% endkatex %}     
若{% katex %}n \to \infty{% endkatex %}时{% katex %}u_n~v_n{% endkatex %}且{% katex %}u_n,v_n{% endkatex %}均有限，则{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}与{% katex %}\sum_{n=1}^{\infty }v_n{% endkatex %}同敛散；     
例题13：判断级数{% katex %}\sum_{n=0}^{\infty }\sin (\frac{1}{2^n}){% endkatex %}的敛散性。       
解：{% katex %}n \to \infty，\frac{1}{2^n}\to 0 \sin \frac{1}{2^n}~\frac{1}{2^n}{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=0}^{\infty}\sin (\frac{1}{2^n})与\sum_{n=0}^{\infty}\frac{1}{2^n}{% endkatex %}敛散性一致；     
而{% katex %}\sum_{n=0}^{\infty}\frac{1^n}{2^n}=\sum_{n=0}^{\infty}(\frac{1}{2})^n;|q|=\frac{1}{2}<1{% endkatex %}即为收敛；    
则{% katex %}\sum_{n=0}^{\infty}\sin (\frac{1}{2^n}){% endkatex %}收敛；    
例题14：判断级数{% katex %}\sum_{n=1}^{\infty }\ln (1+\frac{1}{n}){% endkatex %}的敛散性。       
解：{% katex %}n \to \infty，\frac{1}{n}\to 0 ,\ln (1+\frac{1}{n})~\frac{1}{2^n}{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n})与\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}敛散性一致；     
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}=\sum_{n=0}^{\infty}\frac{1}{n^1};P=1{% endkatex %}即为发散；    
则{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n}){% endkatex %}发散；  
例题15：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{1}{\sqrt{n} }\cdot  \ln (1+\frac{1}{n}){% endkatex %}的敛散性。       
解：{% katex %}n \to \infty，\frac{1}{n}\to 0 ,\ln (1+\frac{1}{n})~\frac{1}{2^n}{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n})与\sum_{n=1}^{\infty}\frac{1}{n\cdot \sqrt[n]{n} }{% endkatex %}敛散性一致；     
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n\cdot \sqrt[n]{n} }=\sum_{n=0}^{\infty}(\frac{1}{n^{\frac{3}{2} } };P=\frac{3}{2}{% endkatex %}即为收敛；    
则{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n}){% endkatex %}收敛；
例题16：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{1}{n \cdot \sqrt[n]{n} }{% endkatex %}的敛散性。       
解：{% katex %}n \to \infty,\sqrt[n]{n}=1,\frac{1}{n}\to 0 ,\frac{1}{n\cdot \sqrt[n]{n} } )~\frac{1}{n}{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=1}^{\infty}\frac{1}{n\cdot \sqrt[n]{n}}与\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}敛散性一致；     
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}=\sum_{n=1}^{\infty}\frac{1}{n^1};P=1{% endkatex %}即为发散；    
则{% katex %}\sum_{n=1}^{\infty}\frac{1}{n\cdot \sqrt[n]{n} }{% endkatex %}发散；    
例题17：判断级数{% katex %}\sum_{n=1}^{\infty }2^n\cdot \sin \frac{\pi}{3^n}{% endkatex %}的敛散性。    
解：{% katex %}n \to \infty，\frac{\pi }{3^n}\to 0 ,\sin \frac{\pi }{3^n}~\frac{\pi }{3^n}{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=1}^{\infty}2^n \cdot \sin \frac{\pi }{3^n}与\pi \sum_{n=1}^{\infty}2^n\cdot \frac{1}{3^n}{% endkatex %}敛散性一致；     
而{% katex %}\pi \sum_{n=1}^{\infty}\frac{2^n}{3^n}=\sum_{n=0}^{\infty}(\frac{2}{3})^n;|q|=\frac{2}{3}<1{% endkatex %}即为收敛；    
则{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n}){% endkatex %}收敛；    
例题18：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{\sqrt{n+1}-\sqrt{n-1} }{n}{% endkatex %}的敛散性。     
解析：将上面的根号进行展开化简：{% katex %}\frac{(\sqrt{n+1}-\sqrt{n-1})(\sqrt{n+1}+\sqrt{n-1}) }{n\cdot (\sqrt{n+1}+\sqrt{n-1}) }=\frac{2}{n(\sqrt{n+1}+\sqrt{n-1} ) }{% endkatex %}   
将分母根号内1同约掉，即为{% katex %}~\frac{2}{n\cdot 2\sqrt{n} }~\frac{1}{n \cdot \sqrt{n} }{% endkatex %}       
解：{% katex %}n \to \infty,\frac{\sqrt{n+1}-\sqrt{n-1} }{n}~\frac{1}{n\cdot \sqrt{n} }{% endkatex %}    
故由极限比较判别法：{% katex %}\sum_{n=1}^{\infty}\frac{\sqrt{n+1}-\sqrt{n-1} }{n}与\sum_{n=1}^{\infty}\frac{1}{n\cdot \sqrt{n} }{% endkatex %}敛散性一致；     
而{% katex %}\sum_{n=0}^{\infty}\frac{1}{n^1\cdot n^{\frac{1}{2} } }=\sum_{n=1}^{\infty}\frac{1}{n^{\frac{3}{2} } };P=\frac{3}{2}>1{% endkatex %}即为发散；    
则{% katex %}\sum_{n=1}^{\infty}\ln (1+\frac{1}{n}){% endkatex %}发散；     
注意：通过极限等价变换，可以将级数转换为其他级数，从而判断级数的敛散性(一般为P级数，等比级数)；      
{% katex %}{\color{Red} n \to \infty ,\sqrt[n]{n}=1 } {% endkatex %}      
   (2). 抓大头（分式保留最大项判别）“分母越小，值越大”；     
当级数{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}的通项{% katex %}u_n{% endkatex %}为{% katex %}n^a{% endkatex %}或{% katex %}a^n{% endkatex %}的分式，则可将分子，分母各自保留最大项所得项即为{% katex %}\sum_{n=1}^{\infty}v_n{% endkatex %}      
例题19：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{n+1}{n(n+2)}{% endkatex %}的敛散性。       
解：取{% katex %}\sum_{n=1}^{\infty}v_n=\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}      
因为{% katex %}\lim_{n \to \infty }\frac{u_n}{v_n}=\lim_{n \to \infty}\frac{(n+1)\cdot n}{n(n+2)}=1{% endkatex %}        
故{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}与原级数{% katex %}\sum_{n=1}^{\infty}\frac{n+1}{n(n+2)}{% endkatex %}同敛散性；      
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}为发散级数，即原级数发散；     
例题20：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{1}{2^n+4}{% endkatex %}的敛散性。       
解：取{% katex %}\sum_{n=1}^{\infty}v_n=\sum_{n=1}^{\infty}\frac{1}{2^n}{% endkatex %}      
因为{% katex %}\lim_{n \to \infty }\frac{u_n}{v_n}=\lim_{n \to \infty}\frac{2^n}{2^n+4}=1{% endkatex %}       
故{% katex %}\sum_{n=1}^{\infty}\frac{1}{2^n}{% endkatex %}与原级数{% katex %}\sum_{n=1}^{\infty}\frac{1}{2^n+4}{% endkatex %}同敛散性；      
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{2^n}=\sum_{n=1}^{\infty}(\frac{1}{2})^n,|q|=\frac{1}{2}<1{% endkatex %}为收敛级数，即原级数收敛；       
例题21：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{1}{\sqrt{4n^3+5} }{% endkatex %}的敛散性。       
解：取{% katex %}\sum_{n=1}^{\infty}v_n=\sum_{n=1}^{\infty}\frac{1}{2n^{\frac{3}{2} } }=\frac{1}{2}\sum_{n=1}^{\infty}\frac{1}{n^{\frac{3}{2} } }{% endkatex %}     
故{% katex %}\frac{1}{2}\sum_{n=1}^{\infty}\frac{1}{n^{\frac{3}{2} } }{% endkatex %}与原级数{% katex %}\sum_{n=1}^{\infty}\frac{1}{\sqrt{4n^3+5} }{% endkatex %}同敛散性；      
而{% katex %}\frac{1}{2}\sum_{n=1}^{\infty}\frac{1}{n^{\frac{3}{2} } },P=\frac{3}{2}>1{% endkatex %}为收敛级数，即原级数收敛；       
例题22：判断级数{% katex %}\sum_{n=1}^{\infty }(\frac{1}{\sqrt{n+1} }-\frac{1}{n \cdot \sqrt{n} } ){% endkatex %}的敛散性。       
解：{% katex %}\sum_{n=1}^{\infty}\frac{1}{\sqrt{n+1} }-\sum_{n=1}^{\infty}\frac{1}{n \cdot \sqrt{n} }{% endkatex %}     
即{% katex %}\sum_{n=1}^{\infty}\frac{1}{\sqrt{n+1} }~\sum_{n=1}^{\infty}\frac{1}{\sqrt{n} };\sum_{n=1}^{\infty}\frac{1}{n \cdot \sqrt{n} }~\sum_{n=1}^{\infty}\frac{1}{\sqrt{n^{\frac{3}{2} } } }{% endkatex %}
即{% katex %}\sum_{n=1}^{\infty}\frac{1}{n^{\frac{1}{2}} },P=\frac{1}{2}<1;\sum_{n=1}^{\infty}\frac{1}{\sqrt{n^{\frac{3}{2} } } },P=\frac{3}{2}>1{% endkatex %}     
即发散-收敛=发散；
   (3). 放缩，遇{% katex %}\sin \infty,\cos \infty,(-1)^{\infty} \le 1{% endkatex %}       
当{% katex %}n \to \infty {% endkatex %}时，看{% katex %}u_n{% endkatex %}，遇{% katex %}\sin \infty \cos \infty \le 1{% endkatex %}       
均值不等式：{% katex %}a^2+b^2 \ge 2ab; a+b \ge 2\sqrt{ab}{% endkatex %}      
例题23：判断级数{% katex %}\sum_{n=1}^{\infty }\frac{\sin nx}{n^2}{% endkatex %}的敛散性。        
解：{% katex %}n \to \infty {% endkatex %}时，{% katex %}\frac{\sin nx}{n^2} \le \frac{1}{n^2}{% endkatex %}     
因为{% katex %}\frac{\sin nx}{n^2} \le \frac{1}{n^2} {% endkatex %}     
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n^2}，P=2>1{% endkatex %}为收敛级数        
故由比较判别法，{% katex %}\sum_{n=1}^{\infty }\frac{\sin nx}{n^2}{% endkatex %}收敛；     
例题24：设{% katex %}\sum_{n=1}^{\infty }bn{% endkatex %}为正项级数，{% katex %}\sum_{n=1}^{\infty }a_n^2{% endkatex %}收敛，则{% katex %}\sum_{n=1}^{\infty}\frac{|a_+n|}{\sqrt{n^2+bn} }=(){% endkatex %}。       
解：因为{% katex %}\frac{|a_n|}{\sqrt{n^2+bn} }\le \frac{|a_n|}{n} \le \frac{1}{2}(a_n^2+\frac{1}{n^2}){% endkatex %}    
所以{% katex %}\sum_{n=1}^{\infty} \frac{1}{2}(a_n^2+\frac{1}{n^2}){% endkatex %}为收敛级数，即原级数收敛；     
c. 根值判别法：    

---
### 交错级数及敛散性判别法
定义：称{% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot u_n{% endkatex %}或{% katex %}\sum_{n=1}^{\infty}(-1)^{n-1}\cdot u_n{% endkatex %}为交错级数，其中{% katex %}u_n{% endkatex %}非负。   
判别方法：(莱布尼茨判别法)：     
若{% katex %}\sum_{n=1}^{\infty}(-1)^nu_n{% endkatex %}满足，则{% katex %}\begin{Bmatrix}\lim_{n \to \infty}u_n=0 \\u_n \ge u_{n+1}\end{Bmatrix}\to {% endkatex %}则{% katex %}\sum_{n=1}^{\infty}(-1)^n \cdot u_n{% endkatex %}收敛；      
注意事项：    
(1). 交错级数可理解为：正项，负项交替出现的级数；     
(2). 判断敛散性时，若{% katex %}\lim_{n \to \infty}u_n \ne 0{% endkatex %}，则级数发散；   
(3). {% katex %}u_n \ge u_{n+1}{% endkatex %}等同于{% katex %}u_n-u_{n+1} \ge 0;\frac{u_{n+1} }{u_n}\le 1;u_n{% endkatex %}是单减数列；     
考试易错点：
(1). 若求{% katex %}\lim_{n \to \infty}u_n=0{% endkatex %}时，出现洛必达求{% katex %}u_n{% endkatex %}极限时，**不能直接求导，需要把n改为x后再求导**；       
(2). 用导数判断单调性时，也要将n改为x后再求导；     
例题1：判断级数{% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot \frac{1}{n!}{% endkatex %}的敛散性。      
解：{% katex %}u_n=\frac{1}{n!},u_{n+1}=\frac{1}{(n+1)!}{% endkatex %}；     
{% katex %}\lim_{n \to \infty}u_n=\lim_{n \to \infty}\frac{1}{n!}=0{% endkatex %}     
{% katex %}u_n> u_{n+1}{% endkatex %}     
由莱布尼兹定理知：{% katex %}\sum_{n=1}^{\infty}(-1)^n \cdot \frac{1}{n!}{% endkatex %}收敛；      
例题2：判断级数{% katex %}\sum_{n=0}^{\infty}(-1)^n\cdot \frac{1}{n^2}{% endkatex %}的敛散性。    
解：{% katex %}u_n=\frac{1}{n^2},u_{n+1}=\frac{1}{(n+1)^2}{% endkatex %}；     
{% katex %}\lim_{n \to \infty}u_n=\lim_{n \to \infty}\frac{1}{n^2}=0{% endkatex %}     
{% katex %}u_n> u_{n+1}{% endkatex %}      
由莱布尼兹定理知：{% katex %}\sum_{n=1}^{\infty}(-1)^n \cdot \frac{1}{n^2}{% endkatex %}收敛；       
例题3：判断级数{% katex %}\sum_{n=1}^{\infty}(-1)^{n-1}\cdot \frac{n}{3^{n-1} }{% endkatex %}的敛散性。       
解：{% katex %}u_n=\frac{n}{3^{n-1} },u_{n+1}=\frac{n+1}{3^n}{% endkatex %}；     
{% katex %}\lim_{x \to \infty}u_x=\lim_{n \to \infty}\frac{x}{3^{x-1} }=\lim_{x \to \infty}\frac{1}{3^{x-1}\cdot \ln 3}=0{% endkatex %}     
令{% katex %}f(x)=\frac{x}{3^{x-1} },f'(x)=\frac{3^{x-1}-x \cdot 3^{x-1}\cdot \ln 3}{(3^{x-1})^2}{% endkatex %}     
{% katex %}=\frac{3^{x-1}(1-x \cdot \ln 3)}{(3^{x-1})^2}=\frac{1-x\ln 3}{3^{x-1} }{% endkatex %}       
故当{% katex %}x \to \infty{% endkatex %}时，{% katex %}f'(x)<0，{% endkatex %}即{% katex %}u_n{% endkatex %}为单减数列；   
故由莱布尼茨定理，级数{% katex %}\sum_{n=1}^{\infty}(-1)^{n-1}\cdot \frac{n}{3^{n-1} }{% endkatex %}收敛；   
例题4：判断级数{% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot \frac{n}{n+1}{% endkatex %}的敛散性。      
解：{% katex %}u_n=\frac{n}{n+1},u_{n+1}=\frac{n+1}{n+2}{% endkatex %}；     
{% katex %}\lim_{n \to \infty}u_n=\lim_{n \to \infty}\frac{n}{n+1}=1\ne 0{% endkatex %}       
故级数{% katex %}sum_{n=1}^{\infty}(-1)^{n-1}\cdot \frac{n}{3^{n-1} }{% endkatex %}发散；      
例题5：设{% katex %}u_n=(-1)^n\cdot \sin \frac{1}{\sqrt{n} }{% endkatex %}则{% katex %}\sum_{n=1}^{\infty }u_n{% endkatex %}与{% katex %}\sum_{n=1}^{\infty}u_n^2{% endkatex %}的敛散性分别是：()。       
解：{% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot \sin \frac{1}{\sqrt{n} }{% endkatex %}      
{% katex %}u_n=\sin \frac{1}{\sqrt{n} }u_{n+1}=\sin \frac{1}{\sqrt{n+1} }{% endkatex %}       
{% katex %}\lim_{n \to \infty}\sin \frac{1}{\sqrt{n} }=0{% endkatex %}      
{% katex %}u_n \ge u_{n+1}{% endkatex %}    
由莱布尼茨判别法，级数{% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot \sin \frac{1}{\sqrt{n} }{% endkatex %}收敛；      
{% katex %}\sum_{n=1}^{\infty}u_n^2=\sum_{n=1}^{\infty}(\sin \frac{1}{\sqrt{n} })^2{% endkatex %}      
取{% katex %}v_n=\sum_{n=1}^{\infty} \frac{1}{n}{% endkatex %}       
因为{% katex %}\lim_{n \to \infty}\frac{(\sin \frac{1}{\sqrt{n} })^2}{\frac{1}{n} }=\lim_{n \to \infty}\frac{\frac{1}{n} }{\frac{1}{n} }=1{% endkatex %}      
即{% katex %}\sum_{n=1}^{\infty}(\sin \frac{1}{\sqrt{n} })^2{% endkatex %}与{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}同敛散性     
而{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}为发散级数，故{% katex %}\sum_{n=1}^{\infty}(\sin \frac{1}{\sqrt{n} })^2{% endkatex %}发散；      

---
### 任意项级数的绝对收敛与条件收敛
称级数{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}，其中{% katex %}u_n{% endkatex %}为任意项，可为**正，负，形式随意**为任意项级数；   
解题方法：对于通项{% katex %}u_n{% endkatex %}加绝对值(变{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}为{% katex %}\sum_{n=1}^{\infty}|u_n|{% endkatex %})；   
(1). 绝对收敛：  
若级数{% katex %}\sum_{n=1}^{\infty}|u_n|{% endkatex %}收敛，称级数{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}绝对收敛；   
(2). 条件收敛：   
若级数{% katex %}\sum_{n=1}^{\infty}|u_n|{% endkatex %}发散，级数{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}收敛，称级数{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}条件收敛；    
例题1：若级数{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}条件收敛，则级数{% katex %}\sum_{n=1}^{\infty}|u_n|{% endkatex %}必定(发散)。    
解析：本身条件收敛，加绝对值为发散；
扩展：则{% katex %}\sum_{n=1}^{\infty}(|u_n|+u_n){% endkatex %}：发散；     
发散+收敛=发散；      
例题2：下列判断有误的是：(B)     
A. {% katex %}\sum_{n=1}^{\infty}\frac{(-1)^n}{n^2+n}{% endkatex %}绝对收敛        
B. {% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}收敛，则{% katex %}\sum_{n=1}^{\infty}u_n^2{% endkatex %}收敛        
C. {% katex %}\sum_{n=1}^{\infty}(-1)^n\cdot \frac{1}{n}{% endkatex %}条件收敛        
D. {% katex %}\sum_{n=1}^{\infty}u_n \ne 0{% endkatex %}，则{% katex %}\sum_{n=1}^{\infty}u_n{% endkatex %}发散        
解析：
A. 原级数加绝对值{% katex %}\sum_{n=1}^{\infty}\frac{1}{n^2+n}~\sum_{n=1}^{\infty}\frac{1}{n^2}，P=2>1{% endkatex %}即为收敛，故原级数绝对收敛；   
C. {% katex %}\lim_{x \to \infty}\frac{1}{n}=0,f(x)=\frac{1}{x},f'(x)=-\frac{1}{x^2}<0{% endkatex %}即为收敛，{% katex %}\sum_{n=1}^{\infty}\frac{1}{n}{% endkatex %}发散，即条件收敛；       
D. {% katex %}\sum_{n=1}^{\infty}u_n \ne 0{% endkatex %}，即{% katex %}\lim_{n \to \infty}u_n \ne 0{% endkatex %}，故原级数发散；      

---
### 幂级数
各项均是由幂函数构成的函数项级数{% katex %}\sum_{n=0}^{\infty}a_nx^n{% endkatex %}，其中{% katex %}a_n{% endkatex %}为常数，{% katex %}x{% endkatex %}为变量，{% katex %}x^n{% endkatex %}为幂函数；     
(1). 收敛点：当{% katex %}x=x_0{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}a_nx_0^n{% endkatex %}收敛，称{% katex %}x_0{% endkatex %}为收敛点；     
(2). 发散点：当{% katex %}x=x_0{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}a_nx_0^n{% endkatex %}发散，称{% katex %}x_0{% endkatex %}为发散点；     
(3). 收敛区间，收敛半径，收敛域：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312081636316.png)
收敛区间：级数收敛时x的取值范围{% katex %}x \in (a,b){% endkatex %}(开区间)；          
收敛半径：整个收敛区间的中心点{% katex %}x_0{% endkatex %}到收敛区间的端点{% katex %}a,b{% endkatex %}的距离{% katex %}R=\frac{b-a}{2}{% endkatex %}；       
收敛域：单独讨论{% katex %}x=a,x=b{% endkatex %}时，级数敛散性后的收敛区间；**收敛取闭区间，发散取开区间**；    
(4). 求解收敛域、收敛区间：    
使用正项级数中的比值判别法或根值判别法；   
求解过程：   
{% katex %}\sum_{x=0}^{\infty}u_n(x){% endkatex %}    
a. 定通项{% katex %}u_n,u_{n+1}{% endkatex %}     
b. 令{% katex %}\lim_{n \to \infty}|\frac{u_{n+1}}{u_n}|<1{% endkatex %}解出x的范围，即为收敛区间；    
注：{% katex %}|x|<a \longleftrightarrow -a<x<a{% endkatex %};{% katex %}x^2<1\longleftrightarrow -1<x<1{% endkatex %}      
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312081655692.png)
方法总结：   
(1). 比值判别法：令{% katex %}\lim_{n \to \infty}|\frac{u_{n+1} }{u_n}|<1{% endkatex %}解出x的范围；    
(2). 针对{% katex %}\sum_{n=0}^{\infty}a_nx^n{% endkatex %}；公式：取{% katex %}\lim_{n \to \infty}|\frac{a_{n+1} }{a_n}|=P \to x \in (-\frac{1}{\rho},\frac{1}{\rho})\to R=\frac{1}{\rho}{% endkatex %}     


---
#### 具体型幂级数求解收敛区间
例题1：求幂级数{% katex %}\sum_{n=0}^{\infty}\frac{nx^n}{3^n}{% endkatex %}的收敛半径，收敛域。    
解析：比值判别法     
解：{% katex %}u_n=\frac{nx^n}{3^n},u_{n+1}=\frac{(n+1)\cdot x^{n+1} }{3^{n+1} }{% endkatex %}     
{% katex %}\lim_{n \to \infty}|\frac{u_{n+1} }{u_n}|=\lim_{n \to \infty}|\frac{(n+1)\cdot x^{n+1} }{3^{n+1} } \cdot \frac{3^n}{nx^n}|=\lim_{n \to \infty}|\frac{(n+1)\cdot x}{3n}|=|\frac{x}{3}|<1{% endkatex %}     
所以收敛区间：{% katex %}x \in (-3,3){% endkatex %}     
收敛半径：{% katex %}R=\frac{6}{2}=3{% endkatex %}     
{% katex %}x=3,x=-3{% endkatex %}时，级数敛散性：     
{% katex %}x=3{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}\frac{nx^n}{3^n}=\sum_{n=0}^{\infty}\frac{n}{3^n}\cdot 3^n=\sum_{n=0}^{\infty}n{% endkatex %}发散；     
{% katex %}x=-3{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}\frac{nx^n}{3^n}=\sum_{n=0}^{\infty}\frac{n}{3^n}\cdot (-3)^n=\sum_{n=0}^{\infty}(-1)^n\cdot n{% endkatex %}发散；     
所以收敛域：{% katex %}x \in (-3,3){% endkatex %}；    
解析：公式法    
解：因为{% katex %}a_n=\frac{n}{3^n},a_{n+1}=\frac{n+1}{3^{n+1} }{% endkatex %}     
所以{% katex %}\lim_{n \to \infty}|\frac{a_{n+1} }{a_n}|=\lim_{n \to \infty}|\frac{n+1}{3^{n+1} } \cdot \frac{3^n}{n}|=\lim_{n \to \infty}|\frac{n+1}{3n}|=\frac{1}{3}=\rho{% endkatex %}     
所以收敛半径：{% katex %}R=\frac{1}{\rho}=3{% endkatex %}     
收敛区间为：{% katex %}(-\frac{1}{\rho},\frac{1}{\rho})\to x \in (-3,3){% endkatex %}    
{% katex %}x=3,x=-3{% endkatex %}时，级数敛散性：     
{% katex %}x=3{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}\frac{nx^n}{3^n}=\sum_{n=0}^{\infty}\frac{n}{3^n}\cdot 3^n=\sum_{n=0}^{\infty}n{% endkatex %}发散；     
{% katex %}x=-3{% endkatex %}时，{% katex %}\sum_{n=0}^{\infty}\frac{nx^n}{3^n}=\sum_{n=0}^{\infty}\frac{n}{3^n}\cdot (-3)^n=\sum_{n=0}^{\infty}(-1)^n\cdot n{% endkatex %}发散；   
收敛域为：{% katex %}x \in (-3,3){% endkatex %}；    

---
#### 抽象型幂级数求解收敛区间  
题型：求{% katex %}\sum_{n=0}^{\infty}a_nx^n,\sum_{n=0}^{\infty}a_n(x-x_0)^n{% endkatex %}的收敛区间；    
阿贝尔定理：   
(1). {% katex %}\sum_{n=0}^{\infty}a_nx^n{% endkatex %}收敛区间对称中心为{% katex %}x=0{% endkatex %}     
{% katex %}\sum_{n=0}^{\infty}a_n(x-x_0)^n{% endkatex %}收敛区间对称中心为{% katex %}x=x_0{% endkatex %}     
(2). 级数在收敛区间内部绝对收敛，外部发散，条件收敛只发生在收敛区间的端点；   
(3). {% katex %}\sum_{n=0}^{\infty}a_nx^n{% endkatex %}与{% katex %}\sum_{n=0}^{\infty}a_n(x-x_0)^n{% endkatex %}收敛半径相同，且收敛区间左右端点敛散性一样；     
例题1：设幂级数{% katex %}\sum_{n=1}^{\infty}a_n(x-1)^n{% endkatex %}收敛区间的中心点为{% katex %}x=1{% endkatex %}，且在{% katex %}x=-1{% endkatex %}处收敛，则此级数在{% katex %}x=2{% endkatex %}处：(绝对收敛)       
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312081724956.png)
(-1,1)收敛，对称性则{% katex %}(1,3){% endkatex %}收敛，{% katex %}x=2{% endkatex %}绝对收敛；     
例题2：设幂级数{% katex %}\sum_{n=1}^{\infty}a_n(x-1)^n{% endkatex %}在{% katex %}x=0{% endkatex %}处收敛，在{% katex %}x=2{% endkatex %}处发散，则{% katex %}\sum_{n=1}^{\infty}a_nx^n{% endkatex %}的收敛域为：()      
解：当{% katex %}x=1{% endkatex %}为中心点
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312081729300.png)
此时收敛域为{% katex %}[0,2){% endkatex %}       
则{% katex %}\sum_{n=1}^{\infty}a_nx^n{% endkatex %}对称中心为{% katex %}x=0{% endkatex %}    
由阿贝尔定理，有两幂级数半径应为相同敛散性应相同，则得图    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312081732034.png)
所以收敛域为{% katex %}[-1,1){% endkatex %}；
 
---
#### 幂级数的展开式    
1. 麦克劳林展开式      
常用：     
   (1). {% katex %}e^x=\sum_{n=0}^{\infty }\frac{x^n}{n!},x\in R {% endkatex %}      
   (2). {% katex %}\frac{1}{1-x}=\sum_{n=0}^{\infty }x^n,x\in (-1,1)   {% endkatex %}      
   (3). {% katex %}ln(1+x)=\sum_{n=1}^{\infty }\frac{(-1)^{n-1} }{n} x^n,x\in (-1,1]   {% endkatex %}      
   (4). {% katex %}\frac{1}{1+x}=\sum_{n=0}^{\infty }(-1)^n  x^n,x\in (-1,1)   {% endkatex %}      
不常用：     
   (1). {% katex %}\sin x=x-\frac{3^3}{3!}+\frac{x^5}{5!}-…+\frac{(-1)^nx^{2n+1}}{(2n+1)！}+o(x^{2n+1})   {% endkatex %}         
   (2). {% katex %}\cos x=1-\frac{x^2}{2!}+\frac{x^4}{4!}-…+\frac{(-1)^nx^{2n}}{(2n)！}+o(x^{2n})   {% endkatex %}       
2. 幂级数的和函数   
   (1). 使用麦克劳林展开式；`带上定义域`    
   (2). 等比级数求和    
{% katex %}\sum_{n=0}^{\infty }\frac{a}{1-a}{% endkatex %}
   (3). 和函数方法    
a. `先积后导`    
适用于{% katex %}\sum_{n=0}^{\infty }a_n \cdot x^n，a_n{% endkatex %}为分式时；     
步骤：收敛域(即和函数定义域)；求导；积分        
积分限(0,x)；若出现{% katex %}(x-x_0)^n \Rightarrow \int_{x_0}^{x}S'(t) dt{% endkatex %}      
小结：分母=指数—>求导；    
分母<指数—>提x；   
分母>指数—>配x；     
b. `先积后导`      
适用于{% katex %}\sum_{n=0}^{\infty }a_n \cdot x^n，a_n{% endkatex %}为整式时；         
步骤：收敛域(即和函数定义域)；积分；求导        