---
title: 高等数学-积分
hexo-math: true
type: "categories"
cover: "https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311302244730.png"
categories: 
  - 升学
tags:
  - 学习资料
  - math
date: 2023-11-15 12:04:00
---

## 一元函数积分学
### 不定积分
#### 原函数与不定积分的概念及性质
积分是求导的*逆运算*，不定积分的本质就是已知导数（微分）求原函数的过程。
1. 原函数  
   如果{% katex %}F'(x)=f(x){% endkatex %}或者{% katex %}dF(x)=f(x)dx{% endkatex %}，则称函数{% katex %}F(x){% endkatex %}为函数{% katex %}f(x){% endkatex %}的**一个原函数**。  
   **原函数存在定理**：如果函数在某区间内**连续**，则其在该区间内必有原函数；  
   **原函数性质**：如果函数{% katex %}f(x){% endkatex %}有一个原函数{% katex %}F(x){% endkatex %}，那么它一定有无数个原函数；  
   原函数之间相差一个常数；{% katex %}f(x){% endkatex %}的全体原函数可以表示为{% katex %}F(x)+C{\color{Red} } {% endkatex %}，其中{% katex %}C{% endkatex %}为任意常数。
2. 不定积分  
   函数{% katex %}f(x){% endkatex %}的全体原函数即称为{% katex %}f(x){% endkatex %}的**不定积分**，记为{% katex %}\int f(x)dx{% endkatex %}；  
   其中{% katex %}\int {% endkatex %}为积分号，{% katex %}f(x){% endkatex %}为被积函数，{% katex %}f(x)dx{% endkatex %}为被积表达式，{% katex %}x{% endkatex %}为积分变量。  
   若函数{% katex %}f(x){% endkatex %}为{% katex %}f(x){% endkatex %}的一个原函数，则有：{% katex %}\int f(x)dx=F(x)+C{% endkatex %}。  
   练习：
   (1). 求{% katex %}\int x^3dx{% endkatex %}  
   解：{% katex %}=\frac{x^4}{4}+C{% endkatex %}  
   (2). 求{% katex %}\int e^xdx{% endkatex %}  
   解：{% katex %}e^x+C{% endkatex %}  
   (3). 求{% katex %}\int \frac{1}{1+x^2}dx{% endkatex %}  
   解：{% katex %}\arctan x +C{% endkatex %}  
   (4). 求{% katex %}\int \frac{1}{x}dx{% endkatex %}  
   解：{% katex %}\ln|x|+C{\color{Orange} } {% endkatex %}
3. **基本积分公式**：  
   (1). {% katex %}\int kdx=kx+C{% endkatex %}  
   (2). {% katex %}\int x^\mu dx=\frac{x^{\mu +1} }{\mu +1} +C{% endkatex %}  
   (3). {% katex %}\int \frac{1}{x} dx=\ln |x|+C{% endkatex %}  
   (4). {% katex %}\int e^x dx=e^x+C{% endkatex %}  
   (5). {% katex %}\int \frac{1}{1+x^2} dx=\arctan x+C{% endkatex %}  
   (6). {% katex %}\int \frac{1}{\sqrt{1-x^2} } dx=\arcsin x+C{% endkatex %}  
   (7). {% katex %}\int \cos x dx=\sin x+C{% endkatex %}  
   (8). {% katex %}\int \sin x dx=-\cos x+C{% endkatex %}  
   (9). {% katex %}\int \frac{1}{\cos^2x} dx=\int \sec^2 xdx=\tan x+C{% endkatex %}  
   (10). {% katex %}\int \frac{1}{\sin^2x} dx=\int \csc^2 xdx=-\cot x+C{% endkatex %}  
   (11). {% katex %}\int \sec x \tan x dx=\sec x+C{% endkatex %}  
   (12). {% katex %}\int \csc x \cot x dx=-\cot x+C{% endkatex %}
4. 不定积分的性质  
   (1). 设函数{% katex %}f(x){% endkatex %}及{% katex %}g(x){% endkatex %}的原函数存在，则{% katex %}\int [f(x) \pm g(x)]dx=\int f(x)dx \pm \int g(x)dx{% endkatex %}。  
   (2). 设函数{% katex %}f(x){% endkatex %}的原函数存在，{% katex %}k{% endkatex %}为非零常数，则{% katex %}\int kf(x)dx=k \int f(x)dx{% endkatex %}。  
   (3). 设函数{% katex %}f(x){% endkatex %}的原函数存在，则{% katex %}[\int f(x)dx]'=f(x);d[\int f(x)dx]=f(x)dx{% endkatex %}。  
   (4). 设函数{% katex %}f(x){% endkatex %}可导，则{% katex %}\int f'(x)dx=f(x)+C;\int df(x)=f(x)+C{% endkatex %}。  
   **规律1**：先积后导=本身；先积后微=本身{% katex %}dx{% endkatex %}；先导/微后积=本身+{% katex %}C{% endkatex %}。  
   **规律2**：最外层是{% katex %}d{% endkatex %}则有{% katex %}dx{% endkatex %}，最外层是{% katex %}\int {% endkatex %}则有{% katex %}C{% endkatex %}，最外层是{% katex %}'{% endkatex %}则没{% katex %}dx{% endkatex %}也没{% katex %}C{% endkatex %}。  
   <br />
   例题1：设{% katex %}f(x){% endkatex %}可导，则下列等式正确的是（ D ）；
   A. {% katex %}\int f'(x)dx=f(x){% endkatex %}  
   B. {% katex %}d[\int f(x) dx]=f(x){% endkatex %}  
   C. {% katex %}[\int f(x) dx]'=f(x)+C{% endkatex %}  
   D. {% katex %}\frac{d}{dx} [\int f(x) dx]=f(x){% endkatex %}  
   解析：有两个规律，A最外层为{% katex %}\int {% endkatex %}最后没有{% katex %}C{% endkatex %}，错误；   
   B最外层为d，最后没有{% katex %}dx{% endkatex %}，错误；
   C最外层导数，最后没有有{% katex %}dx{% endkatex %}，正确；
   例题2：设{% katex %}e^{-x}{% endkatex %}是函数{% katex %}f(x){% endkatex %}的一个原函数，则下列等式正确的是（ D ）；  
   A. {% katex %}\int f'(x)dx=e^{-x}{% endkatex %}  
   B. {% katex %}\int f(x)dx=e^{-x}{% endkatex %}  
   C. {% katex %}d[\int f'(x) dx]'=e^{-x}dx{% endkatex %}  
   D. {% katex %}d [\int f(x) dx]=-e^{-x}dx{% endkatex %}  
   解析：A、B最外层为{% katex %}\int {% endkatex %}，最后没有{% katex %}C{% endkatex %}，错误；  
   例题3：若{% katex %}f(x){% endkatex %}的一个原函数是{% katex %}\cos x{% endkatex %}，则{% katex %}f'(x)={% endkatex %}();  
   A. {% katex %}\sin x{% endkatex %}  
   B. {% katex %}-\sin x{% endkatex %}  
   C. {% katex %}-\cos x{% endkatex %}  
   D.  {% katex %}\cos x{% endkatex %}  
   解析：{% katex %}\cos x \to -\sin x \to -\cos x{% endkatex %}  
   例题4：设{% katex %}F(x){% endkatex %}为{% katex %}\ln \cos x{% endkatex %}的一个原函数，则{% katex %}dF(x)={% endkatex %}({% katex %}\ln \cos x dx{\color{Red} } {% endkatex %});
   例题5：设{% katex %}f(x){% endkatex %}可导，则{% katex %}d[\int f(2x)dx]={% endkatex %}(C);  
   A. {% katex %}f(2x){% endkatex %}   B. {% katex %}f(2x)+C{% endkatex %}    C. {% katex %}f(2x)dx{% endkatex %}    D. {% katex %}f'(2x)dx{% endkatex %}
   解析：A,B最外层为{% katex %}d{% endkatex %}，最后没有{% katex %}dx{% endkatex %}，错误；

---
#### 直接积分法
根据基本积分公式以及第一第二基本性质；  
例题1：求{% katex %}\int (e^x-3\cos x)dx{% endkatex %}  
解：原式{% katex %}=\int e^xdx-3\int \cos x dx{% endkatex %}  
{% katex %}=e^x-3\sin x+C{% endkatex %}  
例题2：求{% katex %}\int \sqrt{x}(x^2-5)dx{% endkatex %}  
解：原式{% katex %}=\int (x^{\frac{5}{2}}-5x^{\frac{1}{2} })dx{% endkatex %}  
{% katex %}\int x^{\frac{5}{2} }dx-5\int x^{\frac{1}{2} }{% endkatex %}
{% katex %}=\frac{2}{7}x^{\frac{7}{2} }-\frac{10}{3}x^{\frac{3}{2} }+C{% endkatex %}  
{% katex %}=\frac{2}{7}x^{\frac{7}{2} }-\frac{10}{3}\sqrt{x}+C{% endkatex %}  
例题3：求{% katex %}\int \frac{dx}{x^3}{% endkatex %}  
解：原式{% katex %}=\int \frac{1}{x^{3} }dx{% endkatex %}  
{% katex %}=-\frac{x-2}{2}+C{% endkatex %}  
{% katex %}=-\frac{1}{2x^2}+C{% endkatex %}  
例题4：求{% katex %}\int \frac{dx}{x^3\sqrt[3]{x} }dx{% endkatex %}  
解：原式{% katex %}=\int x^{-\frac{4}{3} }dx{% endkatex %}  
{% katex %}=\frac{x^{-\frac{1}{3} } }{-\frac{1}{3} }+C{% endkatex %}  
{% katex %}=-\frac{3}{\sqrt[3]{x} }+C{% endkatex %}  
例题5：求{% katex %}\int (\frac{2}{1+x^2}-\frac{1}{2\sqrt{1-x^2} }+\frac{3}{x} )dx{% endkatex %}  
解：原式{% katex %}=2\int \frac{1}{1+x^2}dx-\frac{1}{2}\int \frac{1}{\sqrt{1-x^2} }dx+3\int \frac{1}{x}dx{% endkatex %}   
{% katex %}=2\arctan x-\frac{1}{2} \arcsin x+3\ln |x|+C {% endkatex %}  
<br />
利用平方差、立方差、完全平方、三角恒等式、二倍角公式等对被积函数进行恒等变形，拆分成可以直接积分的和或差的形式。  
例题6：求{% katex %}\int (\sqrt{x}-\sqrt[3]{x} )^2dx{% endkatex %}  
解：原式{% katex %}=\int ((\sqrt{x} )^2+(\sqrt[3]{x})^2-2\sqrt{x} \cdot \sqrt[3]{x} )dx{% endkatex %}  
{% katex %}=\int (x +x^{\frac{2}{3} } -2x^{\frac{5}{6} }dx{% endkatex %}  
{% katex %}=\frac{1}{2}x^2+\frac{x^{\frac{5}{3} } }{\frac{5}{3} }-2\frac{x^{\frac{11}{6} } }{\frac{11}{6} }+C{% endkatex %}  
{% katex %}=\frac{1}{2}x^2+\frac{3}{5}x^{\frac{5}{3} }-\frac{12}{11}x^{\frac{11}{6} }+C{% endkatex %}
例题7：求{% katex %}\int \frac{(x-1)^3}{x^2}dx{% endkatex %}  
二项式定理  
解：原式{% katex %}=\int \frac{x^3-3x^2+3x-1}{x^2}dx {% endkatex %}  
{% katex %}=\int (x-3+\frac{3}{x}-\frac{1}{x^2} )dx {% endkatex %}  
{% katex %}=\frac{1}{2}x^2-3x+3\ln |x|+\frac{1}{x}+C {% endkatex %}  
例题8：求{% katex %}\int \frac{2+3x^2}{1+x^2}dx{% endkatex %}  
解：原式{% katex %}=\int \frac{3+3x^2-1}{1+x^2}dx{% endkatex %}  
{% katex %}=\int (3+\frac{1}{1+x^2} )dx{% endkatex %}  
{% katex %}=3x-\arctan x+C{% endkatex %}  
例题9：求{% katex %}\int \frac{1}{x^2-5x+6}dx{% endkatex %}  
解：原式{% katex %}=\int \frac{1}{(x-3)(x-2)}dx{% endkatex %}  
解析{% katex %}{\color{Violet} \frac{1}{(x-2)(z-3)} \longrightarrow \frac{a}{x-2}-\frac{b}{x-3 } }{% endkatex %}  
求出{% katex %}a,b{% endkatex %}，得{% katex %}a=b=-1{% endkatex %}  
{% katex %}=\int (\frac{1}{x-3}-\frac{1}{x-2} )dx{% endkatex %}  
{% katex %}=\ln |x-3|-\ln |x-2|+C{% endkatex %}  
{% katex %}=\ln |\frac{x-3}{x-2} |+C{% endkatex %}  
例题10：求{% katex %}\int \frac{\cos 2x}{\cos^2x \sin^2x}dx{% endkatex %}  
二倍角公式：{% katex %}{\color{Red} \cos 2x=\cos^2x-\sin^2x}=2\cos^2x-1=1-2\sin^2x {% endkatex %}  
使用公式：{% katex %}{\color{Blue} \int \frac{1}{\cos^2x}dx=\int \sec^2xdx=\tan x+C } {% endkatex %}   
{% katex %}{\color{Blue} \int \frac{1}{\sin^2x}dx=\int \csc^2xdx=-\cot x+C } {% endkatex %}
{% katex %}=\int (\frac{1}{\sin^2x}-\frac{1}{\cos^2x} )dx{% endkatex %}  
解：原式 {% katex %}=\int \frac{\cos^2x-\sin^2x}{\cos^2x \sin^2x}dx{% endkatex %}  
{% katex %}=\int (\frac{1}{\sin^2x}-\frac{1}{\cos^2x} )dx{% endkatex %}  
{% katex %}=-\cot x-\tan x+C{% endkatex %}  
例题11：求{% katex %}\int \sin^2\frac{x}{2}dx{% endkatex %}  
有二倍角公式{% katex %}\cos 2x=1-2\sin^2x{% endkatex %}  
令{% katex %}x=\frac{x}{2}{% endkatex %}  
有{% katex %}\cos x=1-2\sin^2\frac{x}{2}{% endkatex %}  
{% katex %}\sin^2\frac{x}{2}=\frac{1-\cos x}{2}{% endkatex %}  
解：原式{% katex %}=\int (\frac{1}{2}-\frac{1}{2}\cos x)dx{% endkatex %}  
{% katex %}=\frac{1}{2}x-\frac{1}{2}\sin x+C{% endkatex %}  
例题12：求{% katex %}\int \tan^2xdx{% endkatex %}  
有公式{% katex %}\tan^2x=\sec^2x-1{% endkatex %}  
{% katex %}\int \sec^2xdx=\tan x+C{% endkatex %}  
解：原式{% katex %}=\int (\sec^2x-1)dx=\tan x-x+C{% endkatex %}  
**基本代数式，可做恒等变形**：  
(1). {% katex %}{\color{Red} (a+b)^2=a^2+2ab+b^2} {% endkatex %}  
(2). {% katex %}{\color{Red} (a-b)^2=a^2-2ab+b^2} {% endkatex %}  
(3). {% katex %}{\color{Red} (a+b)^3=a^3+3a^2b+3ab^2+b^3} {% endkatex %}  
(4). {% katex %}{\color{Red} (a-b)^3=a^3-3a^2b+3ab^2-b^3} {% endkatex %}  
(5). {% katex %}{\color{Red} a^2-b^2=(a+b)(a-b)} {% endkatex %}  
(6). {% katex %}{\color{Red} a^3-b^3=(a-b)(a^2+ab+b^2)} {% endkatex %}  
(7). {% katex %}{\color{Red} a^3+b^3=(a+b)(a^2-ab+b^2)} {% endkatex %}  
<br />
(a).{% katex %}{\color{Purple} \cos 2x=\cos^2x-\sin^2x=2\cos^2x-1=1-2\sin^2x}{% endkatex %}  
(b). {% katex %}{\color{Purple} \sin 2x=2\sin x \cos x} {% endkatex %}  
(c). {% katex %}{\color{Purple} \sin x^2+\cos x^2 =1} {% endkatex %}  
(d). {% katex %}{\color{Purple} \tan x^2+1=\sec x^2} {% endkatex %}  
(e). {% katex %}{\color{Purple} 1-\cot x^2=\csc x^2} {% endkatex %}

---
#### 第一类换元法（凑微分法）
积分式较为复杂，不能直接套用基本积分公式，整体结构为{% katex %}\int u'f(u)dx{% endkatex %};  
我们需要将{% katex %}u'f(u)dx{% endkatex %}变为{% katex %}du{% endkatex %}的形式，将积分式转化为可以使用的基本积分公式{% katex %}\int f(u)du{% endkatex %}，利用基本积分公式解决问题，即凑微分法。   
例题1：求{% katex %}\int \cos^2x\sin xdx{% endkatex %}  
解：原式{% katex %}=-\int \cos^2x \cdot (-\sin x)dx{% endkatex %}  
{% katex %}=-\int \cos^2xd\sin x{% endkatex %}  
{% katex %}=-\frac{1}{3}\cos^3x+C{% endkatex %}  
例题2：求{% katex %}\int 2\cos 2xdx{% endkatex %}
解：原式{% katex %}=\int \cos 2x \cdot 2dx {% endkatex %}  
{% katex %}=\int \cos 2xd 2x{% endkatex %}  
{% katex %}=\sin 2x+C{% endkatex %}  
例题3：求{% katex %}\int 2xe^{x^2}dx{% endkatex %}  
解：原式{% katex %}=\int e^{x^2}\cdot 2xdx{% endkatex %}  
{% katex %}=e^{x^2}dx^2 {% endkatex %}  
{% katex %}=e^{x^2}+C{% endkatex %}  
例题4：求{% katex %}\int \frac{1}{2x+3}dx{% endkatex %}  
解：原式{% katex %}=\frac{1}{2}\int \frac{1}{2x+3}2dx{% endkatex %}  
{% katex %}=\frac{1}{2}\int \frac{1}{2x+3}2dxd(2x+3){% endkatex %}  
{% katex %}=\frac{1}{2}\ln |2x+3|+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \frac{1}{ax+b}dx=\frac{1}{a}ln|ax+b|+C (a \ne 0) }{% endkatex %}  
<br />
例题5：求{% katex %}\int \frac{1}{4+x^2}dx{% endkatex %}  
解析：公式{% katex %}\int \frac{1}{1+x^2}dx=\arctan x+C\Longrightarrow \int \frac{1}{1+\Box ^2} d\Box =\arctan \Box +C{% endkatex %}  
解：原式{% katex %}=\frac{1}{4}\cdot \frac{1}{1+(\frac{x}{2})^2}dx {% endkatex %}  
{% katex %}=\frac{1}{2} \int \frac{1}{1+(\frac{x}{2})^2}\cdot \frac{1}{2}dx{% endkatex %}  
{% katex %}=\frac{1}{2} \int \frac{1}{1+x^2}d\frac{x}{2}{% endkatex %}  
{% katex %}=\frac{1}{2} \arctan x+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \frac{1}{a^2+x^2}dx=\frac{1}{a}\arctan \frac{x}{a}+C (a \ne 0) }{% endkatex %}  
<br />
例题6：求{% katex %}\int \frac{1}{x^2-1}dx{% endkatex %}  
解析：同上章例题9；  
解：原式{% katex %}=\frac{1}{2}\int (\frac{1}{(x-1)}-\frac{1}{x+1})dx{% endkatex %}  
{% katex %}=\int (\frac{1}{2(x-1)}-\frac{1}{2(x+1)} )dx{% endkatex %}  
{% katex %}=\frac{1}{2}\int \frac{1}{x-1}-\frac{1}{2}dx \int \frac{1}{x+1}dx{% endkatex %}  
{% katex %}=\frac{1}{2}\int \frac{1}{x-1}d(x-1)-\frac{1}{2}\int \frac{1}{x+1}d(x+1){% endkatex %}  
{% katex %}=\frac{1}{2}\ln |x-1|-\frac{1}{2}\ln |x+1|+C{% endkatex %}  
{% katex %}=\frac{1}{2}\ln |\frac{x-1}{x+1} |+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \frac{1}{x^2-a^2}dx=\frac{1}{2a}\ln |\frac{x-a}{x+a}|+C (a \ne 0) }{% endkatex %}  
<br />
例题7：求{% katex %}\int \frac{1}{\sqrt{4-x^2} }dx{% endkatex %}  
解析：公式{% katex %}\int \frac{1}{\sqrt(1-x^2)}dx=\arcsin x+C\Longrightarrow \int \frac{1}{1-\Box ^2} d\Box =\arcsin \Box +C{% endkatex %}  
解：原式{% katex %}=\int \frac{1}{\sqrt{4-x^2} }dx{% endkatex %}  
{% katex %}=\int \frac{1}{\sqrt{1-\frac{x^2}{4}\cdot 4} } dx{% endkatex %}  
{% katex %}=\int \frac{1}{2\cdot \sqrt{1-(\frac{x}{2})^2} }dx{% endkatex %}  
{% katex %}=\int \frac{1}{\sqrt{1-(\frac{x}{2})^2} }\cdot \frac{1}{2}dx{% endkatex %}  
{% katex %}=\int \frac{1}{\sqrt{1-(\frac{x}{2})^2} }d(\frac{x}{2}){% endkatex %}  
{% katex %}=\arcsin \frac{x}{2}+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \frac{1}{\sqrt{a^2-x^2} }dx=\arcsin \frac{x}{a}|+C (a > 0) }{% endkatex %}  
<br />
例题8：求{% katex %}\int \frac{e^{\sqrt{x} } }{\sqrt{x} }dx{% endkatex %}  
解：原式{% katex %}=\int e^{\sqrt{x} } \cdot \frac{1}{\sqrt{x} }\cdot \frac{1}{2} \cdot 2dx{% endkatex %}  
{% katex %}=2\int e^{2\sqrt{x} }dx{% endkatex %}  
{% katex %}=2\int e^{\sqrt{x} }d\sqrt{x} {% endkatex %}   
{% katex %}=2e^{\sqrt{x} }+C{% endkatex %}  
例题9：求{% katex %}\int \tan xdx{% endkatex %}  
解：原式{% katex %}=\int \frac{\sin x}{\cos x}dx{% endkatex %}  
{% katex %}=-\int \frac{1}{\cos x}d\cos x{% endkatex %}  
{% katex %}=-\ln |\cos x|+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \tan xdx=-\ln | \cos x|+C } {% endkatex %}  
<br />  
例题10：求{% katex %}\int \sec xdx{% endkatex %}  
解析：{% katex %}\int \frac{1}{\cos^2x}dx=\int \sec^2xdx=\tan x+C{% endkatex %}  
{% katex %}\int \sec x\tan xdx=\sec x+C{% endkatex %}  
解：原式{% katex %}=\int \frac{\sec x \cdot (\sec x+\tan x)}{\sec x+\tan x}dx{% endkatex %}  
{% katex %}=\int \frac{\sec^2x+\sec x\cdot \tan x)}{\sec x+\tan x}dx{% endkatex %}  
{% katex %}=\int \frac{1}{\sec x+\tan x}d(\sec x+\tan x){% endkatex %}  
{% katex %}=\ln |\sec x+\tan x|+C{% endkatex %}  
<br />
**总结公式**：{% katex %}{\color{Red} \int \sec xdx=\ln |\sec x+\tan x|+C } {% endkatex %}  
<br />
例题11：求{% katex %}\int \sin^3xdx{% endkatex %}  
解：原式{% katex %}=\int \sin x\cdot \sin^2xdx{% endkatex %}  
{% katex %}=\int (1-\cos^2x)\cdot (-\sin x)dx{% endkatex %}  
{% katex %}=\int (\cos^2x-1)d(\cos x){% endkatex %}  
{% katex %}=\int \cos^2xd(\cos x)-\int 1d(\cos x){% endkatex %}  
{% katex %}=\frac{1}{3}\cos^3x-\cos x+C{% endkatex %}  
例题12：求{% katex %}\int \frac{x^2}{(x+1)^3}dx{% endkatex %}  
解：令{% katex %}x+1=t,x=t-1,dx=d(t-1)=dt{% endkatex %}  
原式{% katex %}=\int \frac{(t-1)^2}{t^3}dt{% endkatex %}  
{% katex %}=\int \frac{t^2-2t+1}{t^3}dt{% endkatex %}  
{% katex %}=\int (\frac{1}{t}-\frac{2}{t^2}+\frac{1}{t^3} )dt{% endkatex %}  
{% katex %}=\ln |t|+\frac{2}{t}-\frac{1}{2t^2}+C{% endkatex %}  
{% katex %}=\ln |x+1|+\frac{2}{x+1}-\frac{1}{2(x+1)^2}+C{% endkatex %}  
例题13：求{% katex %}\int \frac{(x+2)^3}{(x+3)}dx{% endkatex %}  
解：令{% katex %}x+3=t,x=t-3,dx=d(t-3)=dt{% endkatex %}  
原式{% katex %}= \int \frac{(t-1)^3}{t}dt{% endkatex %}  
{% katex %}=\int (\frac{t^3-3t^2+3t-1}{t^2} )dt{% endkatex %}  
{% katex %}=\int (t-3+\frac{3}{t}-\frac{1}{t^2} )dt{% endkatex %}  
{% katex %}=\frac{t^2}{2}-3t+3\ln |t|+\frac{1}{t}+C{% endkatex %}  
{% katex %}=\frac{1}{2}(x+3)^2-3(x+3)+3\ln |x+3|+\frac{1}{x+3}+C{% endkatex %}

---
#### 第二类换元法（根式代换法）
例题1：求{% katex %}\int \frac{1}{1+\sqrt{2x+3} }dx{% endkatex %}  
解：令{% katex %}2x+3=t^2,x=\frac{t^2-3}{2},dx=tdt{% endkatex %}  
原式{% katex %}= \int \frac{1}{1+t}tdt{% endkatex %}  
{% katex %}=\int \frac{t+1-1}{1+t}dt{% endkatex %}  
{% katex %}=(1-\frac{1}{1+t}){% endkatex %}  
{% katex %}=t-\ln|1+t|+C{% endkatex %}  
{% katex %}=\sqrt{2x+3}-\ln |\sqrt{2x+3}+1|+C{% endkatex %}  
“1型”根式代换：式子中含有{% katex %}\sqrt[n]{ax+b} {% endkatex %}
例题2：求{% katex %}\int \frac{2}{x+\sqrt[3]{x} }dx{% endkatex %}  
解：令{% katex %}x=t^3,x^{\frac{1}{3} }=t,dx=3t^2dt{% endkatex %}  
原式{% katex %}=\int \frac{2}{t^3+t}3t^2dt{% endkatex %}  
{% katex %}=\int \frac{6t}{t^2+1}dt{% endkatex %}  
{% katex %}=3\int \frac{1}{t^2+1}d(t^2+1){% endkatex %}  
{% katex %}=3\ln |t^2+1|+C{% endkatex %}  
{% katex %}=3\ln x^{\frac{2}{3} +1}+C{% endkatex %}  
例题3：求{% katex %}\int x\sqrt[3]{3x+1}dx{% endkatex %}  
解：令{% katex %}\sqrt[3]{3x+1}=t,x=\frac{1}{3}t^3-\frac{1}{3},dx=d(\frac{1}{3t^3-\frac{1}{3} })=t^2dt{% endkatex %}  
原式{% katex %}=\int (\frac{1}{3}t^3-\frac{1}{3} )t\cdot t^2dt{% endkatex %}  
{% katex %}=\int (\frac{1}{3}t^6-\frac{1}{3}t^3)dt{% endkatex %}  
{% katex %}=\frac{1}{21}t^7-\frac{1}{12}t^4+C{% endkatex %}  
{% katex %}=\frac{1}{21}(3x+1)^{\frac{7}{3} }-\frac{1}{12}(3x+1)^{\frac{4}{3} }+C{% endkatex %}  
“2型”根式代换：式子中同时含有{% katex %}\sqrt[m]{x} {% endkatex %}和{% katex %}\sqrt[n]{x}{% endkatex %}
令{% katex %}t=\sqrt[m,n]{x},[m,n]{% endkatex %}代表{% katex %}m{% endkatex %}和{% katex %}n{% endkatex %}的**最小公倍数**。  
例题4：求{% katex %}\int \frac{1}{\sqrt{x}+\sqrt[4]{x} }dx{% endkatex %}  
解：令{% katex %}\sqrt[4]{x}=t,x=t^4,dx=dt^4=4t^3dt{% endkatex %}  
原式{% katex %}=\int \frac{1}{t^2+t}4t^3dt{% endkatex %}  
{% katex %}=4\frac{t^2}{t+1}dt{% endkatex %}  
令{% katex %}t+1=u,t=u-1,dt=d(u-1)=du {% endkatex %}  
原式{% katex %}4\int \frac{(u-1)^2}{u}du{% endkatex %}  
{% katex %}=4\int \frac{u^2-2u+1}{u}du{% endkatex %}  
{% katex %}=4\int (u-2+\frac{1}{u})dx{% endkatex %}  
{% katex %}=2(u)-8u+4\ln |u|+C{% endkatex %}  
{% katex %}=2(\sqrt[4]{x}+1)^2-8(\sqrt[3]{x}+1)+4\ln (\sqrt[4]{x}+1)+C{% endkatex %}  
例题5：求{% katex %}\int x\frac{\sqrt[3]{3} }{\sqrt{x}+\sqrt[3]{x} }dx{% endkatex %}  
解：令{% katex %}\sqrt[6]{x}=t,x=t^6,dx=dt^6=6t^5dt{% endkatex %}
原式{% katex %}=\int \frac{t^2}{t^6 \cdot (t^3-t^2) }\cdot 6t^5 dt {% endkatex %}
{% katex %}6\int\frac{1}{t^2+t}dt{% endkatex %}  
{% katex %}=6\int \frac{1}{t}-\frac{1}{(t+1)}dt{% endkatex %}  
{% katex %}=6\ln t-6\ln |t+1|+C{% endkatex %}  
{% katex %}=6\ln |\frac{t}{t+1}|+C{% endkatex %}  
{% katex %}=6\ln \frac{(\sqrt[6]{x}) }{6\sqrt[6]{x}+1}+C{% endkatex %}
一般当被积函数含有：  
(1). {% katex %}\sqrt{a^2-x^2} {% endkatex %}，可以代换{% katex %}x=a\sin u{% endkatex %}  
(2). {% katex %}\sqrt{x^2+a^2} {% endkatex %}，可以代换{% katex %}x=a\tan u{% endkatex %}  
(3). {% katex %}\sqrt{x^2-a^2} {% endkatex %}，可以代换{% katex %}x=a\sec u{% endkatex %}  
通常称以上代换为三角代换，当被积函数含有以上二次根式，积分时是否一定使用三角代换。  
例题6：计算{% katex %}\int \frac{x+\arcsin x}{\sqrt{1-x^2} }dx{% endkatex %}  
解：原式{% katex %}=\int \frac{x}{\sqrt{1-x^2} }dx+\int \frac{\arcsin x}{\sqrt{1-x^2} }dx{% endkatex %}  
{% katex %}=\int x \cdot \frac{1}{\sqrt{1-x^2} }dx+\int \arcsin x \cdot \frac{1}{\sqrt{1-x^2} }dx{% endkatex %}  
{% katex %}=\frac{1}{2} \int \frac{1}{\sqrt{1-x^2} }dx^2+\int \arcsin x d (\arcsin x ){% endkatex %}  
{% katex %}=\frac{1}{2} \int \frac{1}{\sqrt{1-x^2} }d(1-x^2)+\frac{1}{2}\arcsin x{% endkatex %}  
{% katex %}=\frac{1}{2} -\frac{1}{2}\cdot \sqrt{1-x^2}+\frac{1}{2} \arcsin^2x+C{% endkatex %}  
{% katex %}=\frac{1}{2} -\sqrt{1-x^2}+\frac{1}{2}\arcsin^2x+C{% endkatex %}  
第二类换元法常见类型：  
(1). {% katex %}\int f(x,\sqrt[n]{ax+b})dx{% endkatex %}，令{% katex %}t=\sqrt[n]{ax+b}{% endkatex %}  
(2). {% katex %}\int f(x,\sqrt[n]{\frac{ax+b}{cx+d} })dx{% endkatex %}，令{% katex %}t=\sqrt[n]{\frac{ax+b}{cx+d} }{% endkatex %}  
(3). {% katex %}\int f(x,\sqrt{a^2-x^2})dx{% endkatex %}，令{% katex %}x=a\sin / x=a\cos t{% endkatex %}  
(4). {% katex %}\int f(x,\sqrt{a^2+x^2})dx{% endkatex %}，令{% katex %}x=a\tan t{% endkatex %}  
(5). {% katex %}\int f(x,\sqrt{x^2-a^2})dx{% endkatex %}，令{% katex %}x=a\sec t{% endkatex %}  
(6). {% katex %}\int f(a^x)dx{% endkatex %}，令{% katex %}t=a^x{% endkatex %}  
分母中因子次数较高时，可以使用倒代换。  
常用基本积分公式：  
{% katex %}\int \tan xdx=-\ln|\cos x|+C{% endkatex %}  
{% katex %}\int \cot xdx=\ln |\sin x |+C{% endkatex %}  
{% katex %}\int \sec xdx=\ln |\sec x+\tan x |+C{% endkatex %}  
{% katex %}\int \csc xdx=\ln |\csc x-\cot x |+C{% endkatex %}  
{% katex %}\int \frac{1}{a^2+x^2 }dx=\frac{1}{a} \arctan \frac{x}{a}+C{% endkatex %}

--- 
#### 分部积分法
公式：{% katex %}\int uv' dx=\int udv=uv-\int u'v dx=uv-\int vdu {% endkatex %}  
**反对幂指三**  
例题1：求{% katex %}\int x\arctan xdx{% endkatex %}  
解：原式{% katex %}=\int \arctan x \cdot xd(\frac{1}{2}x^2){% endkatex %}  
{% katex %}\frac{1}{2}\int \arctan xdx^2{% endkatex %}  
{% katex %}=\frac{1}{2}(x^2\arctan x-\int x^2d(\arctan x)){% endkatex %}  
{% katex %}=\frac{1}{2}(x^2\arctan x-\int x^2\cdot \frac{1}{1+x^2}dx){% endkatex %}  
{% katex %}=\frac{1}{2}(x^2\arctan x-\int \frac{x^2+1-1}{1+x^2}dx){% endkatex %}  
{% katex %}=\frac{1}{2}(x^2\arctan x-\int 1-\frac{1}{1+x^2}dx){% endkatex %}  
{% katex %}=\frac{1}{2}(x^2\arctan x-x+\arctan x)+C{% endkatex %}  
例题2：求{% katex %}\int \arctan xdx{% endkatex %}  
解：原式{% katex %}=x\arctan x-\int xd(\arctan x){% endkatex %}  
{% katex %}=x\arctan x-\int x\cdot \frac{1}{1+x^2}dx{% endkatex %}  
{% katex %}=x\arctan x-\frac{1}{2}\int \frac{1}{1+x^2}dx^2{% endkatex %}  
{% katex %}=x\arctan x-\frac{1}{2}\ln (1+x^2){% endkatex %}
总结：{\color{Red} \int udv=uv-\int vdu}  
例题3：求{% katex %}\int x^3\ln xdx{% endkatex %}  
解：原式{% katex %}=\int \ln x \cdot xd(\frac{1}{4}x^4){% endkatex %}  
{% katex %}=\frac{1}{4}\int \ln xdx^4{% endkatex %}  
{% katex %}=\frac{1}{4}(x^4\ln x-\int x^4d(\ln x)){% endkatex %}  
{% katex %}=\frac{1}{4}(x^4\ln x-\int x^4\cdot \frac{1}{x}dx){% endkatex %}  
{% katex %}=\frac{1}{4}(x^4\ln x-\int x^3dx){% endkatex %}  
{% katex %}=\frac{1}{4}x^4\ln x-\frac{1}{16}x^4+C{% endkatex %}  
例题4：求{% katex %}\int e^x\sin xdx{% endkatex %}   
解：原式{% katex %}=\int e^xd(-\cos x){% endkatex %}  
{% katex %}=-\int e^xd(\cos x){% endkatex %}  
{% katex %}=-(e^x \cdot \cos x-\int \cos xd(e^x)){% endkatex %}  
{% katex %}=-(\cos x \cdot e^x-\int \cos x\cdot e^x dx){% endkatex %}  
{% katex %}=-\cos x \cdot e^x+\int e^x d\sin x{% endkatex %}  
{% katex %}=-\cos x \cdot e^x+\sin x \cdot e^x-\int \sin xde^x{% endkatex %}  
{% katex %}=-\cos x \cdot e^x+\sin x \cdot e^x-\int e^x\cdot \sin xdx{% endkatex %}  
{% katex %}\int e^x\sin xdx=-\cos x \cdot e^x+\sin x \cdot e^x-\int e^x\cdot \sin xdx{% endkatex %}  
{% katex %}2\int e^x\sin xdx=-\cos x \cdot e^x-\sin x \cdot e^x{% endkatex %}  
{% katex %}\int e^x\sin xdx =\frac{-\cos x \cdot e^x+e^x \cdot \sin x }{2}+C{% endkatex %}

---
### 定积分
#### 定积分的概念
1. 概念   
   指用来求曲边图形面积的工具，记为{% katex %}\int_a^b f(x)dx{% endkatex %}，其中{% katex %}a,b{% endkatex %}为积分上下限，{% katex %}f(x){% endkatex %}为被积函数。
2. 定积分的几何意义
   {% katex %}\int_a^b f(x)dx{% endkatex %}表示曲线{% katex %}y=f(x){% endkatex %}与{% katex %}x{% endkatex %}轴以及直线{% katex %}x=a,x=b{% endkatex %}所围成的各部分的面积的代数和。    
   {% katex %}f(x)>0,\int_a^b f(x)dx>0 {% endkatex %}  
   {% katex %}f(x)<0,\int_a^b f(x)dx < 0 {% endkatex %}
3. 定积分比较大小  
   {% katex %}f(x)\geq g(x){% endkatex %}，则{% katex %}\int_a^b f(x)dx\geq \int_a^b g(x)dx{% endkatex %}  
   例题1：比较{% katex %}\int_0^{\frac{\pi}{2} } xdx{% endkatex %}与{% katex %}\int_0^{\frac{\pi}{2} } \sin xdx{% endkatex %}的大小.  
   解：{% katex %}f(x)=x,g(x)=\sin x{% endkatex %}  
   {% katex %}f(x)\geq g(x){% endkatex %}  
   {% katex %}\int_0^{\frac{\pi}{2} } xdx > \int_0^{\frac{\pi}{2} } \sin xdx{% endkatex %}  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311201410350.png)

例题2：比较{% katex %}\int_0^1 e^xdx{% endkatex %}与{% katex %}\int_0^1 e^{x^2} dx{% endkatex %}的大小.   
解：从{% katex %}x \in (0,1){% endkatex %}比较{% katex %}x,x^2{% endkatex %}，取一特殊值比较大小。  
即{% katex %}\int_0^1 e^xdx > \int_0^1 e^{x^2} dx{% endkatex %}
4. 定积分的性质   
   (1). {% katex %}\int_a^b f(x)\pm g(x)dx=\int_a^b f(x)dx+\int_a^b g(x)dx{% endkatex %}  
   (2). {% katex %}\int_a^b k\cdot f(x)dx=k\int_a^b f(x)dx(k与x无关){% endkatex %}  
   (3). {% katex %}\int_a^b f(x)dx=\int_a^c f(x)dx+\int_c^b f(x)dx{% endkatex %}  
   (4). {% katex %}\int_a^b f(x)dx=-\int_b^a {% endkatex %}（上下限调换，添负号）  
   (5). {% katex %}\int_a^b 1dx+\int_a^b dx=b-a{% endkatex %}  
   例题3：设{% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，下列不正确的是()    
   A. {% katex %}\int_0^x f(t)dt{% endkatex %}是{% katex %}f(x){% endkatex %}的一个原函数  
   B. {% katex %}\int_x^b f(t)dt{% endkatex %}是{% katex %}-f(x){% endkatex %}的一个原函数  
   C. {% katex %}\int_a^b f(t)dt{% endkatex %}是{% katex %}f(x){% endkatex %}的一个原函数  
   D. {% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上可积  
   解析：{% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，{% katex %}\int_0^x f(t)dt{% endkatex %}是{% katex %}(\int_0^x f(t)dt)'=f(x){% endkatex %}的一个原函数，{% katex %}\int_x^b f(t)dt{% endkatex %}是{% katex %}(\int_x^b f(t)dt)'=0-f(x){% endkatex %}的一个原函数，{% katex %}\int_a^b f(t)dt{% endkatex %}不是{% katex %}f(x){% endkatex %}的一个原函数{% katex %}定积分是一个数字，所以f(x)=0{% endkatex %}，{% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上可积，故选C.

---
#### 定积分的计算
##### 定积分两个公式
牛顿-莱布尼茨公式：{% katex %}\int_a^b f(x)dx=F(x)|\begin{matrix}b\\a\end{matrix}=F(b)-F(a){% endkatex %}  
分部积分公式：{% katex %}\int_a^b uv' dx=\int_a^b udv=uv|\begin{matrix}b\\a\end{matrix}-\int_a^b vu' dx{% endkatex %}  
例题1：求{% katex %}\int_0^1 (x^2+x+2)dx{% endkatex %}  
解：原式{% katex %}=(\frac{1}{3}x^3+\frac{1}{2}x^2+2x)|\begin{matrix}1\\0\end{matrix}{% endkatex %}  
{% katex %}=\frac{1}{3}+\frac{1}{2}+2-0=\frac{17}{6}{% endkatex %}  
例题2：求{% katex %}\int_0^{\frac{\pi}{2}} \frac{\cos 2x}{\cos x-\sin x}dx{% endkatex %}  
解：原式{% katex %}=\int_0^{\frac{\pi}{2}} \frac{(\cos x-\sin x)\cdot (\sin x+\cos x )}{\cos x-\sin x}dx{% endkatex %}  
{% katex %}=\int_0^{\frac{\pi}{2}} \sin x+\cos x dx{% endkatex %}  
{% katex %}=(-\cos x+\sin x)|\begin{matrix}\frac{\pi}{2}\\0\end{matrix}{% endkatex %}  
{% katex %}=(0+1)-(-1+0){% endkatex %}  
{% katex %}=2{% endkatex %}  
例题3：求{% katex %}\int_1^2 e^{\frac{1}{x} }\cdot \frac{1}{x^2}dx{% endkatex %}  
解：原式{% katex %}=\int_1^2 e^{\frac{1}{x} }\cdot (-\frac{1}{x})'dx{% endkatex %}  
{% katex %}=-\int_1^2 e^{\frac{1}{x} }d(\frac{1}{x}){% endkatex %}  
{% katex %}=-e^{\frac{1}{x} }|\begin{matrix}2\\1\end{matrix}{% endkatex %}  
{% katex %}=-e^{\frac{1}{2} }+e{% endkatex %}  
例题4：求{% katex %}\int_0^1 x\cdot e^{-x}dx{% endkatex %}  
解：原式{% katex %}=\int_0^1 x d(-e^{-x}){% endkatex %}  
{% katex %}=-(x\cdot e^{-x}|\begin{matrix}1\\0\end{matrix}-\int_0^1e^{-x}dx){% endkatex %}  
{% katex %}=-(xe^{-x}|\begin{matrix}1\\0\end{matrix}+e^{-x}|\begin{matrix}1\\0\end{matrix}){% endkatex %}  
{% katex %}=-(e^{-1}+e^{-1}-1{% endkatex %}   
{% katex %}=-2e^{-1}+1=1-\frac{2}{e}{% endkatex %}

---
##### 定积分四个运算技巧
1. 定积分偶倍奇零（**条件：区间对称**）  
   {% katex %}\int_{-a}^{a} f(x)dx=\left\{\begin{matrix}2\int_{0}^{a} f(x)dx,f(x)为偶函数\\0，f(x)为奇函数\end{matrix}\right. {% endkatex %}  
   {% katex %}\left\{\begin{matrix}常见偶函数：C,x^{偶数},|x|,\cos x,f(x)+f(-x) \\常见奇函数：x^{奇数},\sin x,\arctan x,f(x)-f(-x)\end{matrix}\right.{% endkatex %}  
   使用技巧：加减运算，分开独立判断奇偶性；  
   例题1：求{% katex %}\int_{-1}^{1} (x^3\cos x+1)dx=(D){% endkatex %}  
   {% katex %}A. 0 B. \frac{1}{2} C. 1 D. 2{% endkatex %}  
   解析：{% katex %}x^3\cos x{% endkatex %}为奇函数，1为偶函数，故原式为{% katex %}2\int_0^1 1dx=2{% endkatex %}  
   例题2：设{% katex %}f(x){% endkatex %}在{% katex %}[-l,l]{% endkatex %}上连续，则{% katex %}\int_{-l}^{l} f(x)-f(-x)dx=(0){% endkatex %}  
   解析：{% katex %}f(x)-f(-x){% endkatex %}为奇函数，故原式为{% katex %}0{% endkatex %}    
   例题3：{% katex %}\int_{-1}^{1} \frac{2+\sin x}{1+x^2}dx{% endkatex %}  
   解：原式{% katex %}=\int_{-1}^{1} \frac{2}{1+x^2}dx+\int_{-1}^{1}\frac{\sin x}{1+x^2}{% endkatex %}  
   函数{% katex %}\frac{2}{1+x^2}{% endkatex %}为偶函数，{% katex %}\frac{\sin x}{1+x^2}{% endkatex %}为奇函数  
   故原式为{% katex %}2\cdot 2\int_0^1 \frac{1}{1+x^2}dx+0=4\arctan x|\begin{matrix}1\\0\end{matrix}=4(\arctan 1-\arctan 0)=\pi{% endkatex %}  
   例题4：求定积分{% katex %}\int_{-\pi}^{\pi} (\sqrt{1+\cos x}+|x|\cdot x)dx{% endkatex %}  
   {% katex %}\sqrt{1+\cos x}{% endkatex %}为偶函数，{% katex %}|x|\cdot x{% endkatex %}为奇函数  
   解：原式{% katex %}=2\int_{0}^{\pi} \sqrt{1+\cos x}dx{% endkatex %}  
   {% katex %}=2\int_{0}^{\pi} \sqrt{2}\cdot \cos \frac{x}{2}dx{% endkatex %}  
   {% katex %}=2\cdot 2\sqrt{2} \int_{0}^{\pi} \cos \frac{x}{2}d(\frac{x}{2}){% endkatex %}  
   {% katex %}=4\sqrt{2}\int_{0}^{\pi} \cos \frac{x}{2} d(\frac{x}{2}){% endkatex %}  
   {% katex %}=4\sqrt{2} \sin \frac{x}{2}|\begin{matrix}\pi\\0\end{matrix}{% endkatex %}  
   {% katex %}=4\sqrt{2}\cdot(\sin \frac{\pi}{2}-\sin 0){% endkatex %}  
   {% katex %}=4\sqrt{2}{% endkatex %}
2. 定积分点火公式（华里氏公式）  
   条件：积分区间为{% katex %}(0,\frac{\pi}{2}){% endkatex %}  
   公式：{% katex %}\int_{0}^{\frac{\pi }{2} }\sin ^nxdx=\int_{0}^{\frac{\pi }{2} }\cos ^nxdx=\left\{\begin{matrix}\frac{n-1}{n}\cdot \frac{n-3}{n-2}\dots \frac{1}{2}\cdot \frac{\pi }{2} ，n为偶数   \\\frac{n-1}{n}\cdot \frac{n-3}{n-2}\dots \frac{2}{3}\cdot 1 ，n为奇数 \end{matrix}\right.  {% endkatex %}  
   注意：{% katex %}{\color{Red} \int_{0}^{\pi }\sin ^n xdx=2\int_{0}^{\frac{\pi }{2} } \sin ^n xdx } {% endkatex %}  
   例题5： 求{% katex %}\int_{0}^{\frac{\pi }{2} }\cos ^6xdx{% endkatex %}  
   解：原式{% katex %}=\frac{5}{6}\cdot \frac{3}{4}\cdot \frac{1}{2}\cdot \frac{\pi }{2}=\frac{5\pi }{64}{% endkatex %}  
   例题6：求{% katex %}\int_{0}^{\frac{\pi }{2} }\sin ^5xdx{% endkatex %}  
   解：原式{% katex %}=\frac{4}{5}\cdot \frac{2}{3}\cdot \frac{1}{2}\cdot 1=\frac{4}{15}{% endkatex %}  
   例题6：求{% katex %}\int_{-\frac{\pi}{2} }^{\frac{\pi }{2} }(\sin ^4\theta +\cos ^3\theta )d\theta {% endkatex %}  
   解：原式{% katex %}=2\int_0^{\frac{\pi}{2} }(\sin ^4\theta +\cos ^3\theta )d\theta {% endkatex %}  
   {% katex %}=2(\frac{3}{4}\cdot \frac{1}{2}\cdot \frac{\pi}{2} +\frac{2}{3}\cdot 1){% endkatex %}  
   {% katex %}=\frac{3\pi}{8}+\frac{4}{3}{% endkatex %}
3. 定积分求1/4圆面积  
   公式：{% katex %}\int_{0}^{a} \sqrt{a^2-x^2}dx=\frac{1}{4}\pi a^2{% endkatex %}  
   例题7：{% katex %}\int_{0}^{2} \sqrt{4-x^2}dx=\int_{0}^{2}\sqrt{2^2-x^2}dx=\frac{1}{4}\pi \cdot 4=\pi{% endkatex %}   
   例题8：求{% katex %}\int_{-a}^{a} (b+x)\sqrt{a^2-x^2}dx{% endkatex %}  
   解：原式{% katex %}=\int_{-a}^{a} b\sqrt{a^2-x^2}+x\sqrt{a^2-x^2}dx{% endkatex %}   
   {% katex %}=\int_{-a}^{a} b\sqrt{a^2-x^2}dx{% endkatex %}  
   {% katex %}=2b\int_{0}^{a}\sqrt{a^2-x^2}dx{% endkatex %}  
   {% katex %}=2b\cdot \frac{1}{4}\pi a^2=\frac{1}{2}\pi a^2{% endkatex %}    
   例题9：设{% katex %}f(x)=3x-\sqrt{1-x^2}-\int_{0}^{1} f(x)dx，求f(x){% endkatex %}  
   解：令{% katex %}\int_{0}^{1} f(x)dx=A{% endkatex %}则{% katex %}f(x)=3x-\sqrt{1-x^2}-A{% endkatex %}  
   {% katex %}\int_{0}^{1}f(x)dx=\int_{0}^{1} 3xdx\int_{0}^{1} \sqrt{1-x^2}dx-\int_{0}^{1}Adx{% endkatex %}  
   {% katex %}A=3\frac{1}{2}|\begin{matrix}1\\0\end{matrix} -\frac{\pi}{4} -Ax|\begin{matrix}1\\0\end{matrix}{% endkatex %}  
   {% katex %}A=3\cdot \frac{1}{2}-\frac{1}{4}\pi -A{% endkatex %}  
   {% katex %}2A=\frac{3}{2}-\frac{1}{4}\pi {% endkatex %}  
   {% katex %}A=\frac{3}{4}-\frac{1}{8}\pi {% endkatex %}   
   故{% katex %}f(x)=3x-\sqrt{1-x^2}-\frac{3}{4}+\frac{1}{8}\pi {% endkatex %}
4. 定积分换元法  
   {% katex %}换元类型\left\{\begin{matrix}1).无理根式代换\\2).三角代换\end{matrix}\right.{% endkatex %}  
   注:**定积分换元换限**  
   例题10：求{% katex %}\int_{1}^{4} \frac{1}{x(1+\sqrt{x}) }dx{% endkatex %}  
   解：令{% katex %}\sqrt{x}=t,x=t^2,dx=2tdt{% endkatex %}  
   上限换元：{% katex %}x=4,t=2{% endkatex %}，下限换元：{% katex %}x=1,t=1{% endkatex %}  
   故：原式{% katex %}=\int_{1}^{2} \frac{1}{t^2(1+t)}2tdt{% endkatex %}  
   {% katex %}=2\int_{1}^{2} \frac{1}{t(1+t)}dt{% endkatex %}  
   {% katex %}=2\int_{1}^{2} \frac{1}{t}-\frac{1}{1+t}dt{% endkatex %}  
   {% katex %}=2(\ln t-\ln |1+t|)|\begin{matrix}2\\1\end{matrix}{% endkatex %}  
   {% katex %}=2\ln \frac{2}{3}-2\ln \frac{1}{2}{% endkatex %}   
   {% katex %}=2\ln \frac{4}{3}{% endkatex %}   
   例题11：求{% katex %}\int_{0}^{1} x^2 \cdot \sqrt{1-x^2}dx{% endkatex %}  
   解：令{% katex %}x=\sin t，dx=\cos tdt{% endkatex %}  
   上限换元：{% katex %}x=1,t=\frac{\pi}{2}{% endkatex %}，下限换元：{% katex %}x=0,t=0{% endkatex %}  
   原式{% katex %}=\int_{0}^{\frac{\pi}{2} } \sin ^2t\cdot \sqrt{1-sin^2t} \cdot \cos tdt{% endkatex %}  
   {% katex %}=\int_{0}^{\frac{\pi}{2} } \sin ^2t\cdot \cos ^2tdt{% endkatex %}  
   {% katex %}=\int_{0}^{\frac{\pi}{2} } (1-\cos ^2t)\cdot \cos ^2tdt{% endkatex %}  
   {% katex %}=\int_{0}^{\frac{\pi}{2} } \cos ^2t-\cos ^4tdt{% endkatex %}
   {% katex %}=\frac{1}{2}\cdot \frac{\pi}{2}-\frac{3}{4}\cdot \frac{1}{2}\cdot \frac{\pi}{2}{% endkatex %}   
   {% katex %}=\frac{\pi}{16}{% endkatex %}

---
##### 分段函数定积分
{% katex %}\int_{a}^{b}f(x)dx=\int_{a}^{x_0}f(x)dx+\int_{b}^{x_0}f(x)dx{% endkatex%}  
注：遇到分段函数定积分，从分段点分开单独求左侧和右侧的积分，再相加。  
例题1：{% katex %}f(x)=\left\{\begin{matrix}e^x,x\le 1\\\ln x,x>1\end{matrix}\right.求\int_{0}^{e}f(x)dx {% endkatex %}  
解：{% katex %}\int_{0}^{e}f(x)dx{% endkatex %}  
{% katex %}=\int_{0}^{1}e^xdx+\int_{1}^{e}\ln xdx{% endkatex %}  
{% katex %}=e^x|\begin{matrix}1\\0\end{matrix}+(x \cdot \ln x)|\begin{matrix}e\\1\end{matrix}-\int_{1}^{e}x \cdot \frac{1}{x}dx {% endkatex %}  
{% katex %}=e-1+e-0-x|\begin{matrix}e\\1\end{matrix}{% endkatex %}  
{% katex %}=e{% endkatex %}  
例题2：{% katex %}f(x)=\left\{\begin{matrix}1+x^2,x<1\\e^x,x\ge 1\end{matrix}\right.求\int_{\frac{1}{2} }^{2}f(1-x)dx {% endkatex %}  
解：**换元**，令{% katex %}1-x=t,x=1-t,dx=-dt{% endkatex %}  
换上下限，{% katex %}x=\frac{1}{2} ,t=\frac{1}{2} {% endkatex %}，{% katex %}x=2,t=-1{% endkatex %}  
原式{% katex %}=-\int_{\frac{1}{2} }^{-1}f(t)dt{% endkatex %}  
{% katex %}=\int_{-1}^{\frac{1}{2} }f(t)dt{% endkatex %}  
{% katex %}=-\int_{-1}^{0}f(t)dt+\int_{0}^{\frac{1}{2} }f(t)dt{% endkatex %}  
{% katex %}=\int_{-1}^{0}(1+t^2)dt+\int_{0}^{\frac{1}{2} }e^tdt{% endkatex %}   
{% katex %}=(t+\frac{1}{3}t^3)|\begin{matrix}0\\-1\end{matrix}+e^t|\begin{matrix}\frac{1}{2}\\0\end{matrix}{% endkatex %}  
{% katex %}=0-(-1-\frac{1}{3})+e^{\frac{1}{2} }-e^0{% endkatex %}  
{% katex %}=\frac{1}{3}+e^{\frac{1}{2} }-1{% endkatex %}

---
##### 定积分等式证明
积分区间再现公式：{% katex %}\int_{a}^{b} f(x)dx=\int_{a}^{b} f(a+b-x)dx{% endkatex %}  
证明再现公式：换元，令{% katex %}a+b-x=t,x=a+b-t,dx=-dt{% endkatex %}  
换上下限，{% katex %}x=a,t=b{% endkatex %}，{% katex %}x=b,t=a{% endkatex %}  
故{% katex %}\int_{a}^{b} f(a+b-x)dx=-\int_{b}^{a} f(t)dt=\int_{a}^{b}f(t)dt{% endkatex %}  
使用条件：等式两侧积分区间一样  
例题1：证明：{% katex %}\int_{0}^{1} x^m(1-x)^ndx=\int_{0}^{1} x^n(1-x)^mdx{% endkatex %}  
证明：{% katex %}\because \int_{a}^{b}f(x)dx=\int_{a}^{b}f(a+b-x)dx{% endkatex %}  
故{% katex %}\int_{0}^{1} x^m(1-x)^ndx=\int_{0}^{1} (1+0-x)^n[1-(1+0-x)]^mdx{% endkatex %}  
得{% katex %}\int_{0}^{1} x^m(1-x)^ndx=\int_{0}^{1} (1-x)^m\cdot x^ndx{% endkatex %}    
故原式成立。  
例题2：证明：{% katex %}\int_{0}^{\frac{\pi }{2} } f(\sin x)dx=\int_{0}^{\frac{\pi }{2} }f(\cos x){% endkatex %}  
证明：{% katex %}\because \int_{a}^{b}f(x)dx=\int_{a}^{b}f(a+b-x)dx{% endkatex %}  
故{% katex %}\int_{0}^{\frac{\pi }{2} } f(\sin x)dx=\int_{0}^{\frac{\pi }{2} }f[\sin (\frac{\pi }{2}-x)] {% endkatex %}  
得{% katex %}\int_{0}^{\frac{\pi }{2} } f(\sin x)dx=\int_{0}^{\frac{\pi }{2} }f(\cos x){% endkatex %}  
**奇变偶不变，符号看象限**公式。  
例题3：证明：{% katex %}\int_{0}^{\pi} f(\sin x)dx=\frac{\pi }{2} \int_{0}^{\pi }f(\sin x){% endkatex %}  
证明：{% katex %}\because \int_{a}^{b}f(x)dx=\int_{a}^{b}f(a+b-x)dx{% endkatex %}  
故{% katex %}\int_{0}^{\pi} x \cdot f(\sin x)dx=\int_{0}^{\pi} (\pi-x)\cdot f[\sin (\pi-x)]dx{% endkatex %}  
{% katex %}=\int_{0}^{\pi} (\pi-x)\cdot f(\sin x)dx{% endkatex %}  
{% katex %}=\int_{0}^{\pi}\pi \cdot f(\sin x)dx-\int_{0}^{\pi}x \cdot f(\sin x)dx{% endkatex %}  
{% katex %}\Longrightarrow 2\int_{0}^{\pi} x\cdot f(\sin x)dx=\pi \int_{0}^{\pi}f(\sin x)dx{% endkatex %}  
{% katex %}\Longrightarrow \int_{0}^{\pi} x\cdot f(\sin x)dx=\frac{\pi}{2} \int_{0}^{\pi}f(\sin x)dx{% endkatex %}  
故原式成立。  
例题4：证明：{% katex %}\int_{0}^{\frac{\pi}{2} } \frac{\sin ^3x}{\sin x+\cos x}dx=\int_{0}^{\frac{\pi}{2} } \frac{\cos ^3x}{\sin x+\cos x}dx{% endkatex %}，并利用证明结果求{% katex %}\int_{0}^{\frac{\pi}{2} } \frac{\sin ^3x}{\sin x+\cos x}dx{% endkatex %}    
解：{% katex %}\because \int_{0}^{\frac{\pi }{2} }\frac{\sin ^3x}{\sin x+\cos x}dx{% endkatex %}  
{% katex %}=\int_{0}^{\frac{\pi }{2} }\frac{\sin ^3(\frac{\pi }{2}-x)}{\sin (\frac{\pi }{2}-x)+\cos (\frac{\pi }{2}-x)}dx{% endkatex %}  
{% katex %}=\int_{0}^{\frac{\pi }{2} }\frac{\cos ^3x}{\sin x+\cos x}dx{% endkatex %}  
故原式得证；   
又{% katex %}\int_{0}^{\frac{\pi }{2} }\frac{\sin ^3x}{\sin x+\cos x}dx+\int_{0}^{\frac{\pi }{2} }\frac{\cos ^3x}{\sin x+\cos x}dx{% endkatex %}  
{% katex %}=2\int_{0}^{\frac{\pi }{2} }\frac{\sin ^3x}{\sin x+\cos x}dx{% endkatex %}    
{% katex %}\int_{0}^{\frac{\pi }{2} }\frac{\sin ^3x}{\sin x+\cos x}=\frac{1}{2}\cdot [\int_{0}^{\frac{\pi }{2} }\frac{\sin ^3x+\cos ^3x}{\sin x+\cos x}dx]{% endkatex %}  
{% katex %}=\frac{1}{2}\int_{0}^{\frac{\pi }{2} }\frac{(\sin x+\cos x)\cdot (\sin ^2x-\sin x\cos x+\cos ^2)}{\sin x+\cos x}dx{% endkatex %}  
{% katex %}=\frac{1}{2}\int_{0}^{\frac{\pi }{2} } 1-\sin x \cos xdx{% endkatex %}  
{% katex %}=\frac{1}{2}\int_{0}^{\frac{\pi }{2} } 1dx-\frac{1}{2}\int_{0}^{\frac{\pi }{2} }\sin x \cos xdx{% endkatex %}  
{% katex %}=\frac{1}{2}\cdot x|\begin{matrix}\frac{\pi }{2}\\0\end{matrix}-\frac{1}{2}\int_{0}^{\frac{\pi }{2} }\sin x\sin x{% endkatex %}  
{% katex %}=\frac{1}{2}\cdot \frac{\pi }{2}-\frac{1}{2} \cdot \frac{1}{2}(\sin x)^2|\begin{matrix}\frac{\pi }{2}\\0\end{matrix}{% endkatex %}    
{% katex %}=\frac{\pi }{4}-\frac{1}{4}=\frac{\pi -1}{4}{% endkatex %}  
例题5：证明：{% katex %}F(x)=\int_{0}^{\pi }\ln(x^2+2x\cos t +1)dt{% endkatex %}为偶函数。  
证明：因为求证函数为偶函数，所以{% katex %}F(x)=F(-x){% endkatex %}  
{% katex %}F(-x)=\int_{0}^{\pi }\ln(x^2-2x\cos t +1)dt{% endkatex %}  
又{% katex %}\int_{0}^{\pi }\ln(x^2-2x\cos t +1)dt=\int_{0}^{\pi }\ln(x^2+2x\cos (\pi -t) +1)dt{% endkatex %}  
{% katex %}=\int_{0}^{\pi }\ln(x^2+2x\cos t +1)dt=F(x){% endkatex %}    
故{% katex %}F(x)=F(-x){% endkatex %}，即{% katex %}F(x){% endkatex %}为偶函数。

---
##### 定积分的几何应用
1. x型图：由上下两个函数围成的面积（分上下观看）   
   公式：{% katex %}S=\int_{a}^{b}f_上(x)-f_下(x)dx{% endkatex %}
2. y型图：由左右两个函数围成的面积（分左右观看）  
   公式：{% katex %}S=\int_{c}^{d}f_右(y)-f_左(y)dx{% endkatex %}  
   注意：**选用y型图，改写为x=f(y)**  
   解题思路：  
   (1). 画图，确定积分区间（联立函数，找曲线交点）  
   (2). 确定积分类型    
   (3). 套公式  
   例题1：求由曲线{% katex %}y=x^2{% endkatex %}与{% katex %}y=\frac{1}{x}{% endkatex %}与{% katex %}x=2{% endkatex %}所围成的图形面积。  
   解：
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311211806135.png)  
   选择x型图  
   {% katex %}S=\int_{1}^{2}(x^2-\frac{1}{x})dx{% endkatex %}  
   {% katex %}=\frac{1}{3}x^3-\ln x|\begin{matrix}2\\1\end{matrix}{% endkatex %}  
   {% katex %}=(\frac{8}{3}-\ln 2)-(\frac{1}{3}-\ln 1){% endkatex %}  
   {% katex %}=\frac{7}{3}-\ln 2{% endkatex %}    
   例题2：求由曲线{% katex %}y=x^2{% endkatex %}与{% katex %}y=\sqrt{x}{% endkatex %}所围成的图形面积。  
   解：  
   联立两个方程{% katex %}\left\{\begin{matrix}y=x^2\\y=\sqrt{x} \end{matrix}\right.{% endkatex %}  
   联立{% katex %}x^2=\sqrt{x}{% endkatex %}，得交点{% katex %}(0,0),(1,1){% endkatex %}   
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311211819074.png)  
   选择x型图  
   {% katex %}S=\int_{0}^{1}(\sqrt{x}-x^2)dx{% endkatex %}    
   {% katex %}\int_{0}^{1}(x^{\frac{1}{2} }-x^2)dx{% endkatex %}  
   {% katex %}=\frac{2}{3}x^{\frac{3}{2}}-\frac{1}{3}x^3|\begin{matrix}1\\0\end{matrix}{% endkatex %}  
   {% katex %}=\frac{2}{3}-\frac{1}{3}=1{% endkatex %}  
   选择y型图  
   {% katex %}S=\int_{0}^{1}(\sqrt{y}-y^2)dy{% endkatex %}  
   {% katex %}=\frac{2}{3}y^{\frac{3}{2}}-\frac{1}{3}y^3|\begin{matrix}1\\0\end{matrix}{% endkatex %}  
   {% katex %}=\frac{2}{3}-\frac{1}{3}=\frac{1}{3}{% endkatex %}    
   例题3：求由曲线{% katex %}y=\frac{1}{x}{% endkatex %}、{% katex %}y=x{% endkatex %}、{% katex %}x=2{% endkatex %}及{% katex %}x{% endkatex %}轴所围成的图形面积。  
   解：  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311221416806.png)   
   选择x型图  
   {% katex %}S=S_1+S_2{% endkatex %}  
   {% katex %}S_1=\int_{0}^{1}xdx=\frac{1}{2}|\begin{matrix}1\\0\end{matrix}=\frac{1}{2}{% endkatex %}  
   {% katex %}S_2=\int_{1}^{2}\frac{1}{x}dx=\ln |x| |\begin{matrix}2\\1\end{matrix}=\ln 2{% endkatex %}  
   即{% katex %}S=S_1+S_2=\ln 2+\frac{1}{2}{% endkatex %}

---
##### 定积分求旋转体积
1. x型图绕x轴旋转  
   公式：{% katex %}V_x=\pi \int_{a}^{b}f^2(x)dx{% endkatex %}  
   若是两个函数，{% katex %}f_上(x),f_下(x){% endkatex %}间的体积，{% katex %}V_x=\pi \int_{a}^{b}f_上^2(x)-f_下^2(x)dx{% endkatex %}
2. y型图绕y轴旋转  
   公式：{% katex %}V_y=\pi \int_{c}^{d}f^2(y)dy{% endkatex %}    
   若是两个函数，{% katex %}f_左(y),f_右(y){% endkatex %}间的体积，{% katex %}V_y=\pi \int_{a}^{b}f_右^2(y)-f_左^2(y)dy{% endkatex %}
3. x型图绕y轴旋转  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311221448562.png)
   公式：{% katex %}V=2\pi \int_{a}^{b}x\cdot f(x)dy{% endkatex %}   
   例题1：求由函数{% katex %}y=\sin x，0\le x\le \pi {% endkatex %}与{% katex %}x{% endkatex %}轴所围成的图形绕y轴旋转一周所得旋转体积。   
   解：  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311221512865.png)  
   {% katex %}V=2\pi \int_{a}^{b}x \cdot f(x)dx{% endkatex %}  
   {% katex %}=2\pi \int_{0}^{\pi}x\cdot \sin xdx{% endkatex %}  
   {% katex %}=-2\pi \int_{0}^{\pi}x d\cos x{% endkatex %}  
   {% katex %}=-2\pi (x\cdot \cos x|\begin{matrix}\pi\\0\end{matrix}-\int_{0}^{\pi}\cos xdx){% endkatex %}  
   {% katex %}=-2\pi (\pi \cdot \pi-\sin x|\begin{matrix}\pi\\0\end{matrix}){% endkatex %}  
   {% katex %}=-2\pi (\pi \cdot (-1)-0{% endkatex %}  
   {% katex %}=2\pi ^2{% endkatex %}  
   例题2：求由函数{% katex %}y=\sqrt{x}{% endkatex %}与{% katex %}x=4{% endkatex %}及x轴所围成的面积和绕y轴旋转一周所得旋转体积。  
   解：  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311221528323.png)
   {% katex %}S=\int_{0}^{4}\sqrt{x}dx{% endkatex %}  
   {% katex %}=\int_{0}^{4}x^{\frac{1}{2} }dx{% endkatex %}  
   {% katex %}=\frac{2}{3}\cdot x^{\frac{3}{2} }|\begin{matrix}4\\0\end{matrix}{% endkatex %}  
   {% katex %}=\frac{2}{3}\cdot (4)^{\frac{3}{2} }{% endkatex %}  
   {% katex %}=\frac{16}{3}{% endkatex %}  
   {% katex %}V=\pi \int_{c}^{d}f_右^2(y)-f_左^2(y)dy{% endkatex %}  
   {% katex %}=\pi \int_{0}^{2}(4^2-y^4)dy{% endkatex %}  
   {% katex %}=\pi \int_{0}^{2}16-y^4dy{% endkatex %}  
   {% katex %}=\pi \cdot 1(6y-\frac{1}{5}x^5|\begin{matrix}2\\0\end{matrix}{% endkatex %}  
   {% katex %}=\pi \cdot (32-\frac{32}{5}){% endkatex %}  
   {% katex %}=\frac{128}{5}\pi {% endkatex %}    
   或{% katex %}V=2\pi \int_{a}^{b}x \cdot f(x)dx{% endkatex %}  
   {% katex %}=2\pi \int_{0}^{4}x\cdot \sqrt{x}dx{% endkatex %}  
   {% katex %}=2\pi \int_{0}^{4}x^{\frac{3}{2} }dx{% endkatex %}  
   {% katex %}=2\pi \frac{2}{5}x^{\frac{5}{2} }|\begin{matrix}4\\0\end{matrix}{% endkatex %}  
   {% katex %}=\frac{4\pi }{5} 4^{\frac{2}{5} }{% endkatex %}  
   {% katex %}=\frac{128}{5}\pi {% endkatex %}    