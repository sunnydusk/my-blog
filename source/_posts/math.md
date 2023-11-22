---
title: 高等数学
hexo-math: true
type: "categories"
categories: 
  - 专升本
tags:
  - 学习资料
  - math
date: 2023-09-20 14:36:00
---
## 一.函数、极限与连续
### 函数

---
#### 函数三要素：
自变量（x），因变量（y），对应法则；
##### 定义域及值域
自然定义域：
y = x;
y = {% katex %}sinx;{% endkatex %}
y = {% katex %}cosx \to R(定义域);{% endkatex %}
y = {% katex %}\frac{1}{x} \to (-\infty, 0) \cup (0, +\infty);{% endkatex %}  
y = {% katex %}\sqrt {x} \to [0, +\infty);{% endkatex %}  
y={% katex %}log_ax \to [0, +\infty){% endkatex %}  
y={% katex %}tan x \to{x|x\neq\frac{\pi}{2}+k\pi,k∈Z}{% endkatex %}
y={% katex %}\arcsin x \to [-1,1]{% endkatex %}
y={% katex %}\arccos x \to [-1,1]{% endkatex %}

*判断两个函数是否为同一个函数
定义域相同(化简前)/运算法则相同(化简后)*二者同时满足*<——(充要条件)——>两函数为同一函数
例题：1.判断{% katex %}y_1=\sqrt{x^2}{% endkatex %}和{% katex %}y_2=|x|{% endkatex %}是否为同一个函数。
解：化简前看定义域
D(f1):{% katex %}x^2\geq0=>x∈R{% endkatex %}
D(f2):{% katex %}x∈R{% endkatex %}
化简后看运算法则
{% katex %}y_1=\sqrt{x^2}=\begin{cases} x,x\geq0\\\\-x,x<0 \end{cases}{% endkatex %}
{% katex %}y_2=|x|=\begin{cases}x,x\geq0 \\\\-x,x<0\end{cases}{% endkatex %}
二者同时满足，*是*同一函数
2.下列各组函数中相同的是( D  ).
A.{% katex %}f(x)=x+1{% endkatex %}——R,{% katex %}g(x)=\frac{x^2-1}{x-1}{% endkatex %}——{% katex %}x{% endkatex %}
B.{% katex %}f(x)=\sin x——R(f)+-都存在,g(x)=\sqrt{\frac{1-\cos 2x}{2}}—— R(f){% endkatex %}
C.{% katex %}f(x)=\frac{1}{x}{% endkatex %}——{% katex %}x{% endkatex %},{% katex %}g(x)=\frac{1}{[\sqrt{x}]^2}{% endkatex %}
D.{% katex %}f(x)=x+1{% endkatex %},{% katex %}g(t)=t+1{% endkatex %}

#####  特殊函数

---
1.分段函数
在定义域内不同区间上用不同解析式表示的函数
2.隐函数
![隐函数](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242144794.png)
3.参数方程式函数 
![参数方程式](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242226795.png)
4.抽象函数
![抽象函数](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242229860.png)
 *4.1求抽象函数的定义域
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242231679.png)
例题：已知函数{% katex %}y=f(x){% endkatex %}的定义域为[-1,1),那么函数{% katex %}y=f(x-2){% endkatex %}的定义域是   [1,3)
 解：{% katex %}\because f(x){% endkatex %}的定义域为[-1,1)
    {% katex %}\therefore-1\leq x<1{% endkatex %}
    {% katex %}\therefore -1 \leq x<1{% endkatex %}
    即{% katex %}1 \leq x<3{% endkatex %}

例题：已知函数{% katex %}y=f(2x+3){% endkatex %}的定义域为(-2,2],那么函数{% katex %}y=f(\frac{1}{2}x-5){% endkatex %}的定义域是   (8,24]
 解：{% katex %}\because f(x){% endkatex %}的定义域为(-2,2]
   即{% katex %}-2<x\leq 2{% endkatex %}
     {% katex %}\therefore-1< 2x+3 \leq7{% endkatex %}
    {% katex %}\therefore -1 < \frac{1}{2}x-5\leq7{% endkatex %}
   即{% katex %}8 < x\leq24{% endkatex %}
  *4.2求抽象函数的表达式
例题：已知函数{% katex %}f(x)=x^2+2x{% endkatex %},那么函数{% katex %}f(\frac{x}{2}+1){% endkatex %}的表达式是   {% katex %}f(\frac{x}{2}+1)=\frac{x^2}{4}+2x+3{% endkatex %}
使用*直接代入法*
 解：{% katex %}\because f(x)=x^2+2x{% endkatex %}
    当x=t时，有
    {% katex %}f(t)=t^2+2t{% endkatex %}
    {% katex %}\therefore  f(\frac{x}{2}+1)=(\frac{x}{2}+1)^2+2(\frac{x}{2}+1){% endkatex %}
    {% katex %}\therefore f(\frac{x}{2}+1)=\frac{x^2}{4}+2x+3{% endkatex %}
例题：已知函数{% katex %}f(\frac{x}{2}+1)=x^2+2x{% endkatex %},那么函数{% katex %}f(x){% endkatex %}的表达式是   {% katex %}f(x)=4x^2-4x{% endkatex %}
使用*换元法*
 解：令{% katex %}\frac{x}{2}+1=t{% endkatex %}
    有{% katex %}x=2t-2{% endkatex %}
    {% katex %}\therefore f(t)=(2t-2)^2+2(t-2){% endkatex %}
    {% katex %}\therefore f(t)=4t^2-4t{% endkatex %}
    即{% katex %}f(x)=4x^2-4x{% endkatex %}
例题：已知函数{% katex %}f(\frac{x}{2}+1)=x^2+2x{% endkatex %},那么函数{% katex %}f(2x-1){% endkatex %}的表达式是   {% katex %}f(2x-1)=16x^2-16x+8{% endkatex %}
 解：令{% katex %}\frac{x}{2}+1=t{% endkatex %}
    有{% katex %}x=2t-2{% endkatex %}
    {% katex %}\therefore f(t)=(2t-2)^2+2(t-2){% endkatex %}
    {% katex %}\therefore f(t)=4t^2-4t{% endkatex %}
    即{% katex %}f(x)=4x^2-4x{% endkatex %}
    {% katex %}\therefore f(2x-1)=4(2x-1)^2-4(2x-1){% endkatex %}
    即{% katex %}f(2x-1)=16x^2-16x+8{% endkatex %}

---
#### 函数的基本特性
#####  有界性
函数在{% katex %}f(x){% endkatex %}的定义域内*恒*≥某数{% katex %}K_1{% endkatex %},则称在定义域内*有下界*，{% katex %}K_1{% endkatex %}称为函数{% katex %}f(x){% endkatex %}的定义域内的一个下界。
函数在{% katex %}f(x){% endkatex %}的定义域内*恒*≤某数{% katex %}K_2{% endkatex %},则称在定义域内*有上界*，{% katex %}K_2{% endkatex %}称为函数{% katex %}f(x){% endkatex %}的定义域内的一个上界。
如果*上界下界同时存在*，则称函数{% katex %}f(x){% endkatex %}在定义域内*有界*，有{% katex %}|f(x)|\leq M(M>0){% endkatex %},称M为函数{% katex %}f(x){% endkatex %}的一个界。
求自然定义域（值域）有界无界 
{% katex %}y=x^2{% endkatex %}——>{% katex %}[0,+\infty){% endkatex %} 有下无上（×）
{% katex %}y=\sin x \to [-1,1]{% endkatex %}(√)
{% katex %}y=\cos x \to [-1,1]{% endkatex %}(√)
{% katex %}y=\tan x \to (-\infty,+\infty){% endkatex %}(×)
#####  单调性
设函数{% katex %}f(x){% endkatex %}在区间（a,b）内有定义，对于任意{% katex %}x_1,x_2∈(a,b){% endkatex %}时：
如果恒有{% katex %}f(x_1){% endkatex %}<{% katex %}f(x_2){% endkatex %},则称函数{% katex %}f(x){% endkatex %}在（a，b）内单调增加；
如果恒有{% katex %}f(x_1){% endkatex %}>{% katex %}f(x_2){% endkatex %},则称函数{% katex %}f(x){% endkatex %}在（a，b）内单调减少；
![单增单减](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242232359.png)
例题：论证函数{% katex %}y=\frac{x}{1-x}{% endkatex %}在指定区间{% katex %}(-\infty,1){% endkatex %}上的单调性。
 解：在{% katex %}(-\infty,1){% endkatex %}上{% katex %}\forall{% endkatex %}{% katex %}x_1,x_2{% endkatex %}{% katex %}x_1<x_2{% endkatex %}
    {% katex %}f(x_1)-f(x_2)=\frac{x_1}{1-x_1}-\frac{x_2}{1-x_2}{% endkatex %}
    即{% katex %}f(x_1)-f(x_2)=\frac{x_1-x_2}{(1-x_1)(1-x_2)}{% endkatex %}
    {% katex %}\because{% endkatex %}函数在指定区间{% katex %}(-\infty,1){% endkatex %}上
    {% katex %}\therefore{% endkatex %}{% katex %}(1-x_1)(1-x_2)>0{% endkatex %}且{% katex %}x_1-x_2<0{% endkatex %}
    {% katex %}\therefore{% endkatex %}{% katex %}f(x_1)-f(x_2)<0{% endkatex %}
    {% katex %}\therefore f(x_1)<f(x_2){% endkatex %}
    {% katex %}\because f(x_1){% endkatex %}恒{% katex %}<f(x_2){% endkatex %}
    {% katex %}\therefore{% endkatex %}函数在区间{% katex %}(-\infty,1){% endkatex %}单调增加
#####  奇偶性
设函数{% katex %}y=f(x){% endkatex %}的定义域D关于原点对称，对于任一{% katex %}x∈D{% endkatex %}：
如果恒有{% katex %}f(-x)=f(x){% endkatex %},则称函数{% katex %}f(x){% endkatex %}为偶函数；
如果恒有{% katex %}f(-x)=-f(x){% endkatex %},则称函数{% katex %}f(x){% endkatex %}为奇函数；
偶函数关于{% katex %}y{% endkatex %}*轴*对称，奇函数关于*原点*对称。
总结：*奇函数+奇函数=奇函数*
 *偶函数+偶函数=偶函数*
 *奇函数+偶函数=非奇非偶函数*
 *奇函数{% katex %}\times{% endkatex %}奇函数=偶函数*
 *偶函数{% katex %}\times{% endkatex %}偶函数=偶函数*
 *奇函数{% katex %}\times{% endkatex %}偶函数=奇函数*
#### 规律：
1.如果一个函数是奇函数或者偶函数，首先应该满足的条件是其定义域关于原点对称，如果定义域关于原点不对称，那么该函数肯定既不是奇函数也不是偶函数
2.如果一个*奇函数*在{% katex %}x=0{% endkatex %}处有定义，那么{% katex %}f(0)=0{% endkatex %}
##### 周期性
设函数{% katex %}y=f(x){% endkatex %}的定义域为D，若存在一个正数{% katex %}T>0{% endkatex %}，使得对于任意{% katex %}x∈D{% endkatex %}有{% katex %}x\pm T∈D{% endkatex %}，且{% katex %}f(x\pm T)=f(x){% endkatex %} 恒成立，则称{% katex %}f(x){% endkatex %}为*周期函数*。
其中T称为{% katex %}f(x){% endkatex %}的周期，周期函数的周期通常是指它的*最小正周期*。

| 函数 | 图像表达式 |    周期     | 最小正周期 |
|----| --- |------------------------------------| --- |
|  {% katex %}y=\sin x{% endkatex %} | ![sinx](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242252146.png) | {% katex %}2k\pi,k∈z{% endkatex %} | {% katex %}2\pi{% endkatex %} |
| {% katex %}y=|\cos x| {% endkatex %}                     | ![cosx](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242253740.png) | {% katex %}k\pi,k∈z{% endkatex %} | {% katex %}\pi{% endkatex %} |
| 常值函数{% katex %}y=c{% endkatex %} | ![常值函数](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242254168.png) | 任何正有理数                             | 不存在 |
| 狄利克雷函数 | {% katex %}y=\begin{cases} 1, x∈Q \\\\0,x∈Q^c\end{cases}{% endkatex %} | 任何正有理数                             | 不存在 |

#### 反函数与复合函数
把原函数{% katex %}y=f(x){% endkatex %}的自变量和因变量对调，定义域和值域对调，运算法则逆转，就得到了它的反函数{% katex %}x=f^-(y){% endkatex %}
例如：{% katex %}y=2x,x∈(0,1){% endkatex %}——反函数——>{% katex %}x=\frac{1}{2}y,y∈(0,2){% endkatex %}—可写为—>{% katex %}y=\frac{1}{2}x,x∈(0,2){% endkatex %}
注意：只有在连续定义域内单调的函数才有反函数，否则没有！
例如：{% katex %}y=x^2{% endkatex %}和 {% katex %}y=sinx{% endkatex %}在{% katex %}x∈R{% endkatex %}范围内没有反函数！
##### 反函数的性质
反函数和原函数的图像关于直线{% katex %}y=x{% endkatex %}对称。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242254203.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242255908.png)
##### 反函数和原函数单调性相同。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242257542.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242257392.png)
反函数和原函数的奇偶性相同。（奇函数的反函数还是奇函数，非奇非偶函数的反函数还是非奇非偶函数，偶函数不存在反函数）
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242258560.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242258960.png)
##### 复合函数
自变量{% katex %}x{% endkatex %}——{% katex %}u=g(x){% endkatex %}——>中间变量{% katex %}u{% endkatex %}——{% katex %}y=f(u){% endkatex %}——>因变量{% katex %}y{% endkatex %}
由函数{% katex %}y=f(u){% endkatex %}及{% katex %}u=g(x){% endkatex %}构成的函数{% katex %}y=f[g(x)]{% endkatex %}称为复合函数。
注意：
1. 注意复合的先后次序，{% katex %}y=f[g(x)]{% endkatex %}和{% katex %}y=g[f(x)]{% endkatex %}是两个不同的函数；
2. 内层函数{% katex %}u=g(x){% endkatex %}的值域一定要在外层函数{% katex %}y=f(u){% endkatex %}的定义域内。
#### 基本初等函数（五类）
幂函数、指数函数、对数函数、三角函数、反三角函数通称基本初等函数。
##### 幂函数：{% katex %}y=x^\mu{% endkatex %}（{% katex %}\mu∈R{% endkatex %}是常数）
定义域和值域随{% katex %}\mu{% endkatex %}而异，但其在（{% katex %}0,+\infty{% endkatex %}）上总有意义，且图像总经过点（1，1）。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242258307.png)
##### 指数函数：{% katex %}y=a^x{% endkatex %}（{% katex %}a>0,a\ne1{% endkatex %}）
特别当{% katex %}a=e{% endkatex %}时，有{% katex %}y=e^x{% endkatex %}({% katex %}e\approx2.718{% endkatex %})(考点).
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242259157.png)
##### 对数函数：{% katex %}y=log_ax{% endkatex %}({% katex %}a>0,a\ne1{% endkatex %})
特别当{% katex %}a=e{% endkatex %}时，有{% katex %}y=lnx{% endkatex %}.(考点)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242301918.png)
##### 三角函数
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242302642.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242302346.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242302725.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242303346.png)
##### 反三角函数
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242303393.png)

---
### 极限
#### 数列
##### 数列的概念
一列有规律的数，对每个{% katex %}n\in N_+{% endkatex %}，对应着一个确定的实数，这样的一个序列叫数列。简记{% katex %}{x_n}{% endkatex %}
*数列一定是有无穷多项*
##### 数列极限的概念
对于数列{% katex %}{x_n}{% endkatex %},{% katex %}\forall \varepsilon>0{% endkatex %},总是{% katex %}\exists{% endkatex %}正整数{% katex %}N{% endkatex %},当{% katex %}n>N{% endkatex %}时，有{% katex %}|x_n-a|< \varepsilon{% endkatex %},那么就称常数{% katex %}a{% endkatex %}是数列{% katex %} {x_n} {% endkatex %}的极限，或者称数列{% katex %} {x_n} {% endkatex %}收敛于{% katex %}a{% endkatex %}.记为{% katex %}\lim_{n\rightarrow+\infty}{x_n}=a{% endkatex %}
##### 收敛数列->有极限的数列的性质
1. 收敛数列必有极限，且极限唯一；
2. 收敛数列一定有界；
3. 有界数列不一定收敛{% katex %}（例{（-1）^n}）{% endkatex %},单调且有界的数列一定收敛，即单调有界数列必有极限。

---
##### 夹逼准则  *
对于三个数列{% katex %}{y_n}、{x_n}、{z_n}{% endkatex %}，如果满足以下两个条件:
1.从某项起，有{% katex %} y_n<x_n<z_n {% endkatex %}  
2.{% katex %}\lim_{n\rightarrow\infty}{y_n}=a，且\lim_{n\rightarrow\infty}{z_n}=a {% endkatex %}，  
则有：{% katex %}\lim_{n\rightarrow\infty}{x_n}=a{% endkatex %}  
例题：
求极限：{% katex %}\lim_{n\rightarrow\infty}{(\frac{1}{n^2+1}+\frac{1}{n^2+2}+···+\frac{1}{n^2+n})}{% endkatex %}.  
解析：1.夹逼准则一般用于求{% katex %}n{% endkatex %}项和形式的数列的极限；
     2.对{% katex %}x_n{% endkatex %}适当的放缩，找到{% katex %}y_n{% endkatex %}、{% katex %}z_n{% endkatex %}是关键；
     3.一般方法：分子不变，分母都取最大的那一项即得到{% katex %}y_n{% endkatex %}，分母都取最小的那一项即得到{% katex %}z_n{% endkatex %}.
 解：{% katex %}y_n=(\frac{1}{n^2+n}+\frac{1}{n^2+n}+···+\frac{1}{n^2+n})=\frac{n}{n^2+n}=\frac{1}{n+1}{% endkatex %}
    {% katex %}z_n=(\frac{1}{n^2+1}+\frac{1}{n^2+1}+···+\frac{1}{n^2+1})=\frac{n}{n^2+1}{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}y_n=\lim_{n\rightarrow\infty}{\frac{1}{n+1}}=0{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}z_n=\lim_{n\rightarrow\infty}{\frac{n}{n^2+n}}=0{% endkatex %}

求极限：{% katex %}\lim_{n\rightarrow\infty}{(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+2}+···+\frac{n}{n^2+n+n})}{% endkatex %}.  
 解：{% katex %}y_n=(\frac{1}{n^2+n+n}+\frac{2}{n^2+n+n}+···+\frac{n}{n^2+n+n})=\frac{\frac{1}{2}(n+1)}{n^2+n+n}=\frac{n^2+n}{2n^2+4n}{% endkatex %}
    {% katex %}z_n=(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+1}+···+\frac{n}{n^2+n+1})=\frac{\frac{1}{2}n(n^2+1)}{n^2+n+1}=\frac{1+\frac{1}{n}}{2+\frac{1}{n}+\frac{1}{n}}{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}{y_n}=\frac{n^2+n}{2n^2+4n}=\frac{1}{2}{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}{z_n}=\frac{1+\frac{1}{n}}{2+\frac{1}{n}+\frac{1}{n}}=\frac{1}{2}{% endkatex %}

课后练习：
求极限：{% katex %}\lim_{n\rightarrow\infty}{(\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+2}}+\cdots+\frac{1}{\sqrt{n^2+n}})}{% endkatex %}
 解：{% katex %}y_n=(\frac{1}{\sqrt{n^2+n}}+\frac{1}{\sqrt{n^2+n}}+\cdots+\frac{1}{\sqrt{n^2+n}})=\frac{n}{\sqrt{n^2+n}}=\frac{1}{\sqrt{\frac{1}{n}+1}}{% endkatex %}
    {% katex %}z_n=(\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+1}}+\cdots+\frac{1}{\sqrt{n^2+1}})=\frac{n}{\sqrt{n^2+1}}=\frac{1}{\sqrt{\frac{1}{n^2}+1}}{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}{y_n}=\frac{1}{\sqrt{\frac{1}{n}+1}}=1{% endkatex %}
    {% katex %}\lim_{n\rightarrow\infty}{z_n}=\frac{1}{\sqrt{\frac{1}{n^2}+1}}=1{% endkatex %}
    即：极限为1

---
#### 函数
函数的极限{% katex %}x\to\infty{% endkatex %}
 设函数{% katex %}f(x){% endkatex %}在{% katex %}|x|{% endkatex %}大于某一正数时有定义，{% katex %}\forall \varepsilon>0{% endkatex %}，总是{% katex %}\exists{% endkatex %}正数{% katex %}X{% endkatex %}，当{% katex %}|x|>X{% endkatex %}时，有
 {% katex %}|f(x)-A|<\varepsilon{% endkatex %}
 那么就称常数{% katex %}A{% endkatex %}是函数{% katex %}f(x){% endkatex %}当{% katex %}x\to\infty{% endkatex %}时的极限，记为
 {% katex %}\lim_{n\rightarrow\infty}f(x)=A{% endkatex %}

 对于函数{% katex %}f(x）{% endkatex %}在点{% katex %}x_0{% endkatex %}的某去心邻域内有定义{% katex %}\forall \varepsilon >0{% endkatex %}，总是{% katex %}\exists{% endkatex %}正数{% katex %}\delta{% endkatex %}，当{% katex %}0<|x-x_0|<\delta{% endkatex %}时，有
 {% katex %}|f(x)-A|<\varepsilon{% endkatex %}
 那么就称常数{% katex %}A{% endkatex %}是函数{% katex %}f(x){% endkatex %}当{% katex %}x \to x_0{% endkatex %}时的极限，记为
 {% katex %}\lim_{x \to x_0} f(x)=A{% endkatex %}
函数极限于数列极限的区别和联系：
1. 数列极限只有{% katex %}n \to \infty{% endkatex %},而函数极限有{% katex %}x \to \infty{% endkatex %}和{% katex %}x \to x_0{% endkatex %};
2. 数列极限可以称为收敛，而函数极限不提收敛的概念；
3. 函数极限{% katex %}x \to \infty可分为x \to -\infty和x \to +\infty{% endkatex %}，二者可以不相等；
4. 函数极限{% katex %}x \to x_0可分为x \to x_0^-和x \to x_0^+{% endkatex %}，称为左极限和右极限，二者也可以不相等；
5. 函数极限和数列极限都具有唯一性。

---
例：{% katex %}f(x)=\frac{1}{x}{% endkatex %}
   {% katex %}\lim_{x \to \infty} \frac{1}{x}=0{% endkatex %}
   {% katex %}\lim_{x \to 0} \frac{1}{x}=\infty{% endkatex %}
例：{% katex %}f(x)=e^x{% endkatex %}
   {% katex %}\lim_{x \to \infty}{e^x}=\begin{cases} \lim_{x \to +\infty} {e^x}=+\infty\\\\ \lim_{x \to -\infty}{e^x}=0\end{cases}\to{% endkatex %}不存在
   {% katex %}\lim_{x \to 0}{e^x}=\begin{cases} \lim_{x \to 0^+} {e^x}=1\\\\ \lim_{x \to 0^-}{e^x}=1\end{cases}\to1{% endkatex %}
注意：
1. {% katex %}\lim_{x \to -\infty}{f(x)=\lim_{x \to +\infty}{f(x)=A}}\to\lim_{x \to \infty}{f(x)=A}{% endkatex %}，若有一方不等或者不存在都不行。
2. {% katex %}\lim_{x \to x_0^-}{f(x)=\lim_{x \to x_0^+}{f(x)=A}}\to \lim_{x \to x_0}{f(x)=A}{% endkatex %}，若有一方不等或者不存在都不行，即函数在某点处有极限的条件是左极限和右极限同时存在且相等。

---
##### 函数极限的四则运算
如果{% katex %}\lim{f(x)=A}，\lim{g(x)=B}{% endkatex %}，那么：
1. {% katex %}\lim{\left [ f(x) \pm g(x) \right ] }=\lim{f(x)} \pm \lim{g(x)}=A \pm B{% endkatex %}
2. {% katex %}\lim{\left [ f(x) \cdot g(x) \right ] }=\lim{f(x)} \cdot \lim{g(x)}=A \cdot B{% endkatex %}
3. 若又{% katex %}B \ne 0，则有\lim{\frac{f(x)}{g(x)}}=\frac{\lim{f(x)}}{\lim{g(x)}}=\frac{A}{B}{% endkatex %}
4. {% katex %}\lim{\left [ c \cdot f(x) \right ] }=c \cdot \lim{f(x)}=c \cdot A(c为常数){% endkatex %}
5. {% katex %}\lim{\left [ f(x) \right ]^n }=\left [ \lim{f(x)} \right ]^n=A^n(n是正整数){% endkatex %}
说明：运算法则对于趋向于{% katex %}x_0、x_0^+、x_0^-、\infty、+\infty、-\infty{% endkatex %}都适用，但是二者趋向必须一致。
###### 复合函数极限运算法则
 设函数{% katex %}y=f \left [ g(x) \right ]是由函数y=f(u)与函数u=g(x){% endkatex %}复合而成，若有
 {% katex %}\lim_{x \to x_0}{g(x)}=u_0，且\lim_{u \to u_0}{f(x)}=A{% endkatex %}
 则有：{% katex %}\lim_{x \to x_0}{f \left [ g(x) \right ] }=\lim_{u \to u_0}{f(x)}=A{% endkatex %}
###### 因式分解消零因子法求极限*
例：{% katex %}\lim_{x \to 3}{\frac{x-3}{x^2-9}}{% endkatex %}
 解：将{% katex %}x \to 3{% endkatex %}带入
    {% katex %}\frac{3-3}{9-9}=\frac{0}{0}{% endkatex %}
    {% katex %}\because \frac{0}{0}{% endkatex %}分母为0，即为未定式
    {% katex %}\therefore \lim_{x \to 3}{\frac{x-3}{x^2-9}}=\lim_{x \to 3}{\frac{x-3}{(x-3)(x+3)}}=\frac{1}{x+3}=\frac{1}{6}{% endkatex %}
公式
*{% katex %}x^n-1=(x-1)(1+x+x^2+ \cdots +x^{n-1}){% endkatex %}*
*{% katex %}a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+ \cdots +ab^{n-2}+b^{n-1}){% endkatex %}*
结论：当直接代入为{% katex %}\frac{0}{0}{% endkatex %}未定式时，化简带入
###### 根式有理化消零因子法求极限*
例：求{% katex %}\lim_{x \to 3}{\frac{\sqrt{1-x}-2 }{x-3}}{% endkatex %}
 解：原式=
    直接带入分母为0未定式；
    {% katex %}\therefore分子分母同乘\sqrt{1-x}+2{% endkatex %}
    即{% katex %}\lim_{x \to 3}{\frac{(\sqrt{1-x}-2)(\sqrt{1-x}+2) }{(x-3)(\sqrt{1-x}+2)}}{% endkatex %}
    {% katex %}=\lim_{x \to 3}{\frac{1+x-4}{(x-3)(\sqrt{1-x}+2)}}{% endkatex %}
    {% katex %}=\lim_{x \to 3}{\frac{x-3}{(x-3)(\sqrt{1-x}+2)}}{% endkatex %}
    {% katex %}=\lim_{x \to 3}{\frac{1}{\sqrt{1-x}+2}}{% endkatex %}
    {% katex %}=\frac{1}{4}{% endkatex %}
###### 抓大头法求极限* 
例：求{% katex %}\lim_{x \to \infty} {\frac{2x+1}{x^2+3}}{% endkatex %}
 解：原式=
    同除以{% katex %}x^2{% endkatex %}
    {% katex %}=\lim_{x \to \infty} {\frac{\frac{2}{x}+\frac{1}{x^2}}{1+\frac{3}{x^2} }}{% endkatex %}
    {% katex %}=\frac{0}{1}{% endkatex %}
    {% katex %}=0{% endkatex %}
例：求{% katex %}\lim_{x \to \infty} {\frac{2x^3+x}{x^2+3}}{% endkatex %}
 解：原式=
    同除以{% katex %}x^3{% endkatex %}
    {% katex %}=\lim_{x \to \infty} {\frac{2+\frac{1}{x^2}}{\frac{1}{x}+\frac{3}{x^3} }}{% endkatex %}
    {% katex %}=\frac{2+0}{0+0}{% endkatex %}
    {% katex %}=\infty{% endkatex %}
结论：当直接带入为{% katex %}\frac{\infty}{\infty}{% endkatex %}时，使用抓大头方法，最高次幂在分子上结果为{% katex %}\infty{% endkatex %}，最高次幂在分母上结果为{% katex %}0{% endkatex %}（上大无穷下大零）；分子分母最大次幂相同的话结果为系数比（次数相同系数比）。

---
###### 课后习题
1. 求极限{% katex %}\lim_{x \to 2}{\frac{x^2-x-2}{x^2-5x+6}}{% endkatex %}
 解：原式=
    转换表达式
    即{% katex %}=\lim_{x \to 2}{\frac{x^2-x-2}{x^2-2x-3x+6}}{% endkatex %}
    {% katex %}=\lim_{x \to 2}{\frac{x^2+x-2x-2}{x^2-2x-3x+6}}{% endkatex %}
    {% katex %}=\lim_{x \to 2}{\frac{x(x+1)-2(x+1)}{x(x-2)-3(x-2)}}{% endkatex %}
    分子提取公因式{% katex %}(x+1)，分母提取公因式(x-2){% endkatex %}
    {% katex %}=\lim_{x \to 2}{\frac{(x+1)(x-2)}{(x-2)(x-3)}}{% endkatex %}
    {% katex %}=\lim_{x \to 2}{\frac{x+1}{x-3}}{% endkatex %}
    {% katex %}=\lim_{x \to 2}{\frac{3}{-1}}{% endkatex %}
    {% katex %}=-3{% endkatex %}

2. 求极限{% katex %}\lim_{x \to 1}{\frac{x^4-1}{x^5-1}}{% endkatex %}
 解：原式=
 1.{% katex %}=\lim_{x \to 1} {\frac{(x-1)(x^3+x^2+x+1)}{(x-1)(x^4+x^3+x^2+x+1)} }{% endkatex %}
 {% katex %}=\frac{4}{5}{% endkatex %}
 2.使用洛必达法则
 {% katex %}=\lim_{x \to 1}{\frac{\frac{\mathrm{d} }{\mathrm{d} x} (x^4-1)}{\frac{\mathrm{d}}{\mathrm{d} x} (x^5-1)}}{% endkatex %}
 {% katex %}=\lim_{x \to 1}{\frac{4x^3}{5x^4}}{% endkatex %}
 {% katex %}=\lim_{x \to 1}{\frac{4}{5x}}{% endkatex %}
 {% katex %}=\frac{4}{5}{% endkatex %}

3. 求极限{% katex %}\lim_{x \to 3}{\frac{\sqrt{x+2}-\sqrt{5} }{x-3}}{% endkatex %}
 解：原式=
    分子分母同乘以{% katex %}\sqrt{x+2}+\sqrt{5}{% endkatex %}
    {% katex %}=\frac{x+2-5}{(x-3)(\sqrt{x+2}+\sqrt{5})}{% endkatex %}
    {% katex %}=\frac{x-3}{(x-3)(\sqrt{x+2}+\sqrt{5})}{% endkatex %}
    {% katex %}=\frac{1}{\sqrt{x+2}+\sqrt{5}}{% endkatex %}
    {% katex %}=\frac{\sqrt{5}}{10}{% endkatex %}
4. 求极限{% katex %}\lim_{x \to \infty}{\frac{x^2-x-2}{x^2-5x+6}}{% endkatex %}
 解：原式=
    直接使用抓大头，分子分母次幂相同结果为系数比
    {% katex %}\therefore =1{% endkatex %}

---
####  两个重要极限
##### 第一重要极限
{% katex %}\lim_{x \to 0} {\frac{\sin x}{x} }=1{% endkatex %}
函数夹逼准则：
对于三个函数{% katex %}g(x)、f(x)、h(x){% endkatex %}，如果满足以下两个条件：
1. {% katex %}g(x)\le f(x) \le h(x){% endkatex %};
2. {% katex %}\lim{g(x)}=A，且\lim{h(x)}=A{% endkatex %};
则有：{% katex %}\lim{f(x)}=A{% endkatex %}
例：{% katex %}\lim_{x \to 0} {\frac{\sin x}{x^2} }{% endkatex %}
 解：原式=
    {% katex %}=\lim_{x \to 0} {\frac{\sin x}{x} \times \frac{1}{x} }{% endkatex %}
    {% katex %}=\lim_{x \to 0} {\frac{\sin x}{x} } \times \lim_{x \to 0}{\frac{1}{x}}{% endkatex %}
    {% katex %}=1 \times \infty{% endkatex %}
    {% katex %}=\infty{% endkatex %}
例：{% katex %}\lim_{x \to 0} {\frac{\tan x}{x} }{% endkatex %}
 解：原式=
    {% katex %}=\lim_{x \to 0} {\frac{\sin x}{x} \times \frac{1}{\cos x} }{% endkatex %}
    {% katex %}=\lim_{x \to 0} {\frac{\sin x}{x} } \times \lim_{x \to 0}{\frac{1}{\cos x}}{% endkatex %}
    {% katex %}=1 \times 1{% endkatex %}
    {% katex %}=1{% endkatex %}
例：{% katex %}\lim_{x \to 0} {\frac{\arcsin x}{x} }{% endkatex %}
 解：原式=
    令{% katex %}x=\sin t{% endkatex %}
    {% katex %}\arcsin x=t{% endkatex %}
    {% katex %}=\lim_{t \to 0} {\frac{t}{\sin t}}{% endkatex %}
    {% katex %}=1{% endkatex %}
结论：{% katex %}\frac{0}{0}极限趋近于0且含有\sin x{% endkatex %},将原式拆解为第一重要极限和另一个能直接带入求极限的乘积。

---
##### 第二重要极限
{% katex %}\lim_{x \to \infty} ({1+\frac{1}{x})^2 }=e{% endkatex %}
例：求极限{% katex %}\lim_{x \to 0} ({1+x)^\frac{1}{x} }{% endkatex %}
   令{% katex %}x=\frac{1}{t}{% endkatex %}
   {% katex %}=\lim_{t \to \infty} ({1+\frac{1}{t})^t }{% endkatex %}
   {% katex %}=e{% endkatex %}
第二重要极限变式：
*{% katex %}\lim_{x \to 0} ({1+x)^\frac{1}{x} }=e{% endkatex %}*
第二重要极限通式：
*{% katex %}\lim_{f(x) \to 0 \ g(x) \to \infty }[1+f(x)]^{g(x)}=e^{\lim [f(x)\cdot g(x)]}{% endkatex %}*
例：求极限{% katex %}\lim_{x \to 0} {(1-6x)^{\frac{3}{\sin x} }}{% endkatex %}
 解：原式=
    {% katex %}=e^{\lim_{x \to 0} {(-6x\cdot \frac{3}{\sin x}) }}{% endkatex %}
    {% katex %}=e^{\lim_{x \to 0} {(\frac{-18x}{\sin x}) }}{% endkatex %}
    {% katex %}\because \frac{x}{\sin x}=1{% endkatex %}
    {% katex %}\therefore =e^{-18}{% endkatex %}
结论：{% katex %}1^\infty{% endkatex %}使用第二重要极限通式。

---
#### 无穷小与无穷大
##### 概念
{% katex %}如果\lim_{x \to x_0\setminus x \to \infty}{f(x)}=0，则称函数f(x)为当x \to x_0或x \to \infty时无穷小；{% endkatex %}
{% katex %}如果\lim_{x \to x_0\setminus x \to \infty}{f(x)}=\infty，则称函数f(x)为当x \to x_0或x \to \infty时无穷大；{% endkatex %}
无穷小与无穷大都是一个函数，不能与很小的数或者很大的数混为一谈，无穷小是一个趋近于0（可以为0）的过程。
##### 无穷小的性质
1. 在自变量的同一变化过程{% katex %}x \to x_0{% endkatex %}或{% katex %}x \to \infty{% endkatex %}中，函数{% katex %}f(x){% endkatex %}具有极限{% katex %}A{% endkatex %}的充分必要条件是{% katex %}f(x)=A+\alpha{% endkatex %},其中{% katex %}\alpha{% endkatex %}是无穷小。
2. {% katex %}\frac{1}{无穷小}=无穷大{% endkatex %}，{% katex %}\frac{1}{无穷大}=无穷小{% endkatex %}。
3. 有限个无穷小的和是无穷小。
4. 有界函数与无穷小的乘积是无穷小。
例如：{% katex %}\lim_{x \to \infty}{\frac{\sin x}{x} }= \lim_{x \to \infty} {\sin x}\cdot \lim_{x \to \infty} {\frac{1}{x} } =0{% endkatex %}
易错点
   1. {% katex %}\lim_{x \to 0} {\frac{\sin x}{x} }=1{% endkatex %}(第一重要极限)
   2. {% katex %}\lim_{x \to \infty } {\frac{\sin x}{x} }=0{% endkatex %}(0×有界=0)
   3. {% katex %}\lim_{x \to 0 } {x \cdot \sin \frac{1}{x}  }=0{% endkatex %}(0×有界=0)
   4. {% katex %}\lim_{x \to \infty } {x \cdot \sin \frac{1}{x}  }=1{% endkatex %}(第一重要极限)
   5. {% katex %}\lim_{x \to 0 } {\frac{1}{x} \cdot \sin \frac{1}{x}  }=无极限{% endkatex %}({% katex %}\infty{% endkatex %}×有界=不确定)
   6. {% katex %}\lim_{x \to \infty } {\frac{1}{x} \cdot \sin \frac{1}{x}  }=0{% endkatex %}(0×0=0)
推论：
- 常数与无穷小的乘积是无穷小；
- 有限个无穷小的乘积是无穷小。
结论：{% katex %}0 \cdot 有界 = 0{% endkatex %}
##### 无穷小的比较
定义：设{% katex %}\alpha{% endkatex %}和{% katex %}\beta{% endkatex %}是同一个自变量趋近过程中的无穷小，且{% katex %}\beta \ne 0{% endkatex %}，
{% katex %}\lim  \frac{\alpha }{\beta } =0{% endkatex %}{% katex %}\Rightarrow{% endkatex %}{% katex %}\alpha{% endkatex %}是{% katex %}\beta{% endkatex %} 的高阶无穷小，可记作{% katex %}\alpha=o(\beta ){% endkatex %}；
{% katex %}\lim  \frac{\alpha }{\beta } =\infty{% endkatex %}{% katex %}\Rightarrow{% endkatex %}{% katex %}\alpha{% endkatex %}是{% katex %}\beta{% endkatex %} 的低阶无穷小；
{% katex %}\lim  \frac{\alpha }{\beta } =c \ne 0{% endkatex %}{% katex %}\Rightarrow{% endkatex %}{% katex %}\alpha{% endkatex %}是{% katex %}\beta{% endkatex %} 的同阶无穷小；
{% katex %}\lim  \frac{\alpha }{\beta ^k} =c \ne 0{% endkatex %}{% katex %}\Rightarrow{% endkatex %}{% katex %}\alpha{% endkatex %}是{% katex %}\beta{% endkatex %} 的{% katex %}k{% endkatex %}阶无穷小{% katex %}(k>0 ){% endkatex %}；
{% katex %}\lim  \frac{\alpha }{\beta } =1{% endkatex %}{% katex %}\Rightarrow{% endkatex %}{% katex %}\alpha{% endkatex %}是{% katex %}\beta{% endkatex %} 的等价无穷小，记作{% katex %}\alpha \sim \beta{% endkatex %}；
注意：
- 一般为分子是分母的~阶无穷小；
- 越高阶趋近于0的速度越快；
- c可以是正数可以为负数，k可以是整数也可以是分数。

---
##### 等价无穷小的性质
1. 自反性：{% katex %}\alpha \sim \alpha{% endkatex %}；
2. 对称性：若{% katex %}\alpha \sim \beta{% endkatex %}，则{% katex %}\beta  \sim \alpha{% endkatex %}；
3. 传递性：若{% katex %}\alpha \sim \beta{% endkatex %}，{% katex %}\beta  \sim \gamma{% endkatex %}，则{% katex %}\alpha \sim \gamma{% endkatex %}；
4. 可替换性：若{% katex %}\alpha \sim \gamma{% endkatex %}，{% katex %}\beta  \sim \theta{% endkatex %}，则{% katex %}\lim  \frac{\alpha }{\beta } =\lim \frac{\gamma }{\theta}{% endkatex %}。
结论：{% katex %}\frac{0}{0}{% endkatex %}、{% katex %}\frac{\infty}{\infty}{% endkatex %}、{% katex %}0 \cdot \infty{% endkatex %}类型时使用等价无穷小替换。

---
##### 常用的等价无穷小替换*
当 {% katex %}x\longrightarrow 0{% endkatex %}时，有：
1. {% katex %}x\sim \sin x\sim \tan x\sim \arcsin x\sim \arctan x{% endkatex %}
2. {% katex %}1-\cos x\sim \frac{1}{2} x^2{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242304328.png)
3. {% katex %}ln(1+x)x\sim x{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242305587.png)
4. {% katex %}e^x-1 \sim x{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242305245.png)
5. {% katex %}(1+x)^\mu-1 \sim  \mu \cdot x{% endkatex %}   {% katex %}\sqrt[n]{1+x}-1 \sim \frac{1}{n} \cdot x{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242306905.png)
提示：可以将上述x替换成任意{% katex %}\Box{% endkatex %}
二倍角公式：{% katex %}\cos 2 \alpha =\cos ^2\alpha - \ sin ^2 \alpha  = 2\cos ^2 \alpha -1 = 1-2\sin ^2 \alpha{% endkatex %}
#####  利用等价无穷小替换求极限
例：求极限{% katex %}\lim_{x \to 0} \frac{ln \cos x}{x \tan [\sin (\sin x)]}{% endkatex %}
解：原式={% katex %}\lim_{x \to 0 }{\frac{\frac{1}{2}x^2}{x^2}}=-\frac{1}{2}{% endkatex %}
分子：{% katex %}ln \cos x = ln(\cos x -1 +1) \sim - \frac{1}{2}x^2{% endkatex %}
分母：{% katex %}\sin x \sim x \sim \tan x =x^2{% endkatex %}
#### 总结+习题
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242306054.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242306586.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242307410.png)
例题1：{% katex %}\lim_{x \to \infty} (\sin \frac{3}{x} +1)^{2x}{% endkatex %}
 解：原式=
    利用第二重要极限
    {% katex %}=e^{\lim_{x \to \infty} (\sin \frac{3}{x} \cdot 2x)}{% endkatex %}
    利用等价无穷小替换
    {% katex %}\sin \frac{3}{x} \sim \frac{3}{x}{% endkatex %}
    {% katex %}=e^{\lim_{x \to \infty} (\frac{3}{x} \cdot 2x)}{% endkatex %}
    {% katex %}=e^6{% endkatex %}
例题2：{% katex %}\lim_{x \to \infty} (\frac{3x+1}{3x-1} )^{2x+3}{% endkatex %}
 解：原式=
    {% katex %}\frac{3x+1}{3x-1}=\frac{3x-1+2}{3x-1}=1+\frac{2}{3x-1}{% endkatex %}
    利用第二重要极限
    {% katex %}=e^{\lim_{x \to \infty} [\frac{2}{3x-1} \cdot (2x+3)]}{% endkatex %}
    {% katex %}=e^{\lim_{x \to \infty} (\frac{4x+6}{3x-1})}{% endkatex %}
    抓大头
    {% katex %}=e^{\frac{4}{3}}{% endkatex %}
例题3：{% katex %}\lim_{x \to \infty} (x \sin \frac{1}{x}+\frac{1}{x} \sin x  ){% endkatex %}
 解：原式=
    {% katex %}=\lim_{x \to \infty} x \cdot \sin \frac{1}{x}+\lim_{x \to \infty} \frac{1}{x}\sin x{% endkatex %}
    {% katex %}=1+0=1{% endkatex %}
例题4：设{% katex %}\lim_{x \to \infty} (\frac{x-1}{2x^2+5}+ax+b )=3{% endkatex %}，求常数a，b;
 解：原式=
    {% katex %}=\lim_{x \to \infty} \frac{x-1}{2x^2+5}+\lim_{x \to \infty} ax+\lim_{x \to \infty} b=3{% endkatex %}
    {% katex %}=0+\left\{\begin{matrix}a\ne 0\Rightarrow \infty 
 \\
a=0\Rightarrow 0
\end{matrix}\right.+b=3
{% endkatex %}
    {% katex %}\Rightarrow a=0{% endkatex %}符合条件
    {% katex %}\therefore b=3{% endkatex %}
例题5：设{% katex %}\lim_{x \to \infty} (\frac{2x^2+5}{x-1}+ax+b )=3{% endkatex %}，求常数a，b;
 解：原式=
    {% katex %}=\lim_{x \to \infty} \frac{2x^2+5+ax^2-ax}{x-1}+b=3{% endkatex %}
    使用抓大头方法
    即使分子消掉{% katex %}x^2{% endkatex %}
    即{% katex %}a=-2{% endkatex %}
    {% katex %}=\lim_{x \to \infty}\frac{2x+5}{x-1}+b=3{% endkatex %}
    使用抓大头方法
    {% katex %}=2+b=3{% endkatex %}
    {% katex %}\therefore b=1{% endkatex %}
例题6：已知{% katex %}\lim_{x \to 1}f(x){% endkatex %}存在，且{% katex %}f(x)=2x^3+3 \lim_{x\to 1}f(x){% endkatex %}，求{% katex %}f(x){% endkatex %}。
 解：设{% katex %}\lim_{x \to 1}f(x)=A{% endkatex %}
    即{% katex %}\lim_{x \to 1}f(x)=\lim_{x\to 1}2x^3+3A{% endkatex %}
    {% katex %}\because \lim_{x\to 1}f(x)=A{% endkatex %}
    {% katex %}\therefore A=2+3A{% endkatex %}
    {% katex %}\therefore A=-1{% endkatex %}
    {% katex %}\therefore f(x)=2x^3-3{% endkatex %}
例题7：已知{% katex %}\lim_{x \to 0}\frac{ln(1+\frac{f(x)}{x})}{e^{2x}-1}=5{% endkatex %}，且当{% katex %}x \to 0{% endkatex %}时，{% katex %}\frac{f(x)}{x}{% endkatex %}，求{% katex %}\lim_{x \to 0} \frac{f(x)}{x^2}{% endkatex %}。
 解：原式=
    利用无穷小等价替换
    {% katex %}=\lim_{x\to 0}\frac{\frac{f(x)}{x}}{2x}{% endkatex %}  
    即{% katex %}=\lim_{x\to 0}\frac{f(x)}{2x^2}{% endkatex %}  
    {% katex %}\because \lim_{x\to 0}\frac{f(x)}{2x^2}=5{% endkatex %}  
    {% katex %}\therefore f(x)\sim10x^2{% endkatex %}  
    {% katex %}\therefore\lim_{x \to 0} \frac{f(x)}{x^2}=\frac{10x^2}{x^2}=10{% endkatex %}

---
### 连续
#### 函数的连续性
##### 连续的概念
设函数{% katex %}y=f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}的某一邻域内有定义，如果{% katex %}\lim_{x \to x_0}f(x)=f(x_0){% endkatex %}，那么就称函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}连续。
或表述为：如果{% katex %}\lim_{\Delta x \to 0} \Delta y=\lim_{\Delta x \to 0} [f(x_0+\Delta x)-f(x_0)]=0{% endkatex %}，那么就称函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}连续。
如果在区间上每一点都连续的函数，叫做该区间上的连续函数，或者说函数在该区间上连续。
1. *左连续的概念：*
如果{% katex %}\lim_{x \to x_0^-}f(x){% endkatex %}存在且等于{% katex %}f(x_0){% endkatex %}，那么就称函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}左连续，其左极限可简记为{% katex %}f(x_0^-){% endkatex %}.
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242307510.png)
2. *右连续的概念：*
如果{% katex %}\lim_{x \to x_0^+}f(x){% endkatex %}存在且等于{% katex %}f(x_0){% endkatex %}，那么就称函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}右连续，其右极限可简记为{% katex %}f(x_0^+){% endkatex %}.
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242308828.png)
3. 函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处连续的充分必要条件为：{% katex %}f(x_0^-)=f(x_0^+)=f(x_0){% endkatex %}

---
##### 间断点
如果函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处不连续，那么点{% katex %}x_0{% endkatex %}就称为函数{% katex %}f(x){% endkatex %}的间断点。
函数不连续有三种情形：
1. 在{% katex %}x=x_0{% endkatex %}处没有定义；
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242308543.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242309190.png)
2. 虽有定义，但{% katex %}\lim_{x \to x_0}f(x){% endkatex %}不存在 ；
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242309052.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242309469.png)
3. 虽有定义，且{% katex %}\lim_{x \to x_0}f(x){% endkatex %}存在，但{% katex %}\lim_{x \to x_0}f(x) \ne f(x_0){% endkatex %} ；
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242310573.png)
##### 间断点-间断点分类
如果{% katex %}x_0{% endkatex %}是函数{% katex %}f(x){% endkatex %}的间断点，但左极限{% katex %}f(x_0^-){% endkatex %}和右极限{% katex %}f(x_0^+){% endkatex %}都存在，那么{% katex %}x_0{% endkatex %}称为函数{% katex %}f(x){% endkatex %}的第一类间断点；
表示第一类间断点的任何间断点，称为第二类间断点。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242310665.png)
1. 第一类：可去间断点
如果左极限和右极限都存在，且{% katex %}f(x_0^-)=f(x_0^+){% endkatex %}，那么称{% katex %}x_0{% endkatex %}为函数{% katex %}f(x){% endkatex %}的可去间断点。
例如：函数{% katex %}y=\frac{x^2-1}{x-1}，x=1{% endkatex %}是可取间断点
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242310908.png)
     函数{% katex %}y=\left\{\begin{matrix}x,x\ne 1 \\ \frac{1}{2},x=1 \end{matrix}\right.,x=1{% endkatex %}是可去间断点
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242311949.png)
2. 第一类：跳跃间断点
如果左极限{% katex %}f(x_0^-){% endkatex %}和右极限{% katex %}f(x_0^+){% endkatex %}都存在，且{% katex %}f(x_0^-)\ne f(x_0^+){% endkatex %}，那么称{% katex %}x_0{% endkatex %}为函数{% katex %}f(x){% endkatex %}的跳跃间断点。
例如：函数{% katex %}y=\left\{\begin{matrix}x-1,x<0 \\0,x=0  \\x+1,x>0 \end{matrix}\right.,x=0{% endkatex %}是跳跃间断点 
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242311540.png)
3. 第二类：无穷间断点
如果左极限{% katex %}f(x_0^-){% endkatex %}和右极限{% katex %}f(x_0^+){% endkatex %}至少有一个不存在，且其中至少有一个是{% katex %}\infty{% endkatex %}，那么称{% katex %}x_0{% endkatex %}为函数{% katex %}f(x){% endkatex %}的无穷间断点。
例如：函数{% katex %}y=\tan x,x=\frac{\pi}{2}{% endkatex %}是该函数的无穷间断点
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242311962.png)
4. 第二类：振荡间断点
如果左极限{% katex %}f(x_0^-){% endkatex %}和右极限{% katex %}f(x_0^+){% endkatex %}至少有一个不存在，且其中至少有一个是振荡，那么称{% katex %}x_0{% endkatex %}为函数{% katex %}f(x){% endkatex %}的振荡间断点。
例如：函数{% katex %}y=\sin \frac{1}{x},x=0{% endkatex %}是该函数的振荡间断点
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242312133.png)
注意：间断点类型与该点的函数值无关

---
##### 初等函数的连续性
1. 一切初等函数在其定义区间内都是连续的。
2. 若两个函数都连续，则它们的和、差、积、商都连续。
3. 若两个函数都连续，则由它们构成的复合函数也连续。
4. 若一个函数连续且有反函数，则它的反函数也连续。

---
##### 闭区间上连续函数的性质
1. 【有界性与最大值最小值定理】在闭区间上连续的函数在该区间上有界，且一定能取得它的最大值和最小值。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242312767.png)
2. 【零点定理】若函数{% katex %}f(x){% endkatex %}在闭区间{% katex %}[a,b]{% endkatex %}上连续，且{% katex %}f(a){% endkatex %}与{% katex %}f(b){% endkatex %}异号（即{% katex %}f(a)\cdot f(b)<0{% endkatex %}），则至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}f(\xi)=0{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242313989.png)
3. 【介值定理】设函数{% katex %}f(x){% endkatex %}在闭区间{% katex %}[a,b]{% endkatex %}上连续，且在这区间的端点取不同的函数值{% katex %}f(a)=A{% endkatex %}及{% katex %}f(b)=B{% endkatex %}，则对于{% katex %}A{% endkatex %}与{% katex %}B{% endkatex %}之间的任意一个数{% katex %}C{% endkatex %}，在开区间{% katex %}(a,b){% endkatex %}内至少有一点{% katex %}\xi{% endkatex %}，使得{% katex %}f(\xi)=C{% endkatex %}。
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310242313198.png)
##### 连续考点
###### 判断函数在某点的连续性
例题：判断函数{% katex %}f(x)=\left\{\begin{matrix}x+\frac{1}{2},x<0 \\ \frac{1}{2},x=0 \\ \frac{ln(1+x)}{2x},x>0 \end{matrix}\right.{% endkatex %}，在点{% katex %}x=0{% endkatex %}处的连续性
 解：判断{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处连续的充分必要条件为{% katex %}f(x_0^-)=f(x_0^+)=f(x_0){% endkatex %} 	{% katex %}f(0^-)=\lim_{x \to 0^-}x+\frac{1}{2}=\frac{1}{2}{% endkatex %}
    {% katex %}f(0^+)=\lim_{x \to 0^+}\frac{ln(1+x)}{2x}=\lim_{x \to 0^+}\frac{x}{2x}=\frac{1}{2}{% endkatex %}
    {% katex %}\therefore f(0^-)=f(0^+)=f(0)=\frac{1}{2}{% endkatex %}.
    {% katex %}\therefore{% endkatex %}函数是连续的  

###### 已知函数在某点连续求系数
例题：设函数{% katex %}f(x)=\left\{\begin{matrix}x \sin \frac{1}{x},x<0 \\a+xx^2,x\ge 0\end{matrix}\right.{% endkatex %}在点{% katex %}x=0{% endkatex %}处连续，则{% katex %}a={% endkatex %}____0___.
 解：由{% katex %}f(x_0^-)=f(x_0^+)=f(x_0){% endkatex %}
    {% katex %}f(0)=a+0^2=a{% endkatex %}
    {% katex %}f(0^-)=\lim_{x \to 0^-}x \cdot \sin \frac{1}{x}{% endkatex %}
    带入{% katex %}0^-{% endkatex %}
    {% katex %}\sin \frac{1}{0^-}:\frac{1}{0^-}=-\infty{% endkatex %}
    即：有界，
    {% katex %}0^- \cdot 有界 = 0{% endkatex %}
    {% katex %}\therefore  a=0{% endkatex %}
    {% katex %}\frac{1}{0^-}=-\infty{% endkatex %}
    {% katex %}\frac{1}{0^+}=+\infty{% endkatex %}
###### 判断间断点个数
例题：函数{% katex %}f(x)=\frac{\sin x}{x}+\frac{1}{x-1}e^{\frac{1}{x} }{% endkatex %}的间断点个数是( C  )
A.0		B.1		C.2		D.3
 解题：找出不满足定义域的点即为间断点，一般为使分母为0时{% katex %}x{% endkatex %}的取值
  解：题中有三个分数，{% katex %}\frac{\sin x}{x}{% endkatex %}、{% katex %}\frac{1}{x-1}{% endkatex %}、{% katex %}\frac{1}{x}{% endkatex %}
     即{% katex %}x\ne0{% endkatex %}和{% katex %}x-1\ne0{% endkatex %}
     {% katex %}\therefore x\ne0或x\ne1{% endkatex %}
     即个数为2
###### 判断间断点类型
例题：设函数{% katex %}f(x)=\left\{\begin{matrix}\frac{\cos x+1}{x},x\ne 0 \\0,x=0\end{matrix}\right.{% endkatex %}则{% katex %}x=0{% endkatex %}是其( C  )
A.可去间断点		B.跳跃间断点		C.第二类间断点			D.连续点
解题：判断左右极限是否都存在（左极限\右极限分开求）
 解：{% katex %}f(0^-)=\frac{\cos x}{x}=\frac{1+1}{0^-}=-\infty{% endkatex %}
    {% katex %}f(0^+)=+\infty{% endkatex %}
    {% katex %}\therefore{% endkatex %}两个都为无穷，即为无穷间断点（第二类间断点）。
###### 已知间断类型求系数
例题：已知点{% katex %}x=1{% endkatex %}为函数{% katex %}f(x)=\frac{x-a}{x^2-4x+3}{% endkatex %}的可去间断点，则{% katex %}a={% endkatex %}( A ).
A.1			B.2			C.0			D.-1
解题：可去间断点{% katex %}f(x_0^-)=f(x_0^+){% endkatex %}
 解：{% katex %}\lim_{x \to 1}\frac{x-a}{x^2-4x+3}{% endkatex %}
    将1带入
    {% katex %}\frac{\Box }{0} =A{% endkatex %}
    即{% katex %}\frac{0}{0}=A{% endkatex %}
    {% katex %}\therefore  x-a=0，即1-a=0，a=1{% endkatex %}
###### 证明方程在某区间内至少有一个实根——零点定理
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251013292.png)
例题：证明方程{% katex %}x^3+3x^2=1{% endkatex %}在区间{% katex %}(0,1){% endkatex %}内至少有一个实根。
 解：有原式=
    {% katex %}x^3+3x^2-1=0{% endkatex %}即{% katex %}f(x)=x^3+3x^2-1{% endkatex %}
    {% katex %}f(x){% endkatex %}在{% katex %}[0,1]{% endkatex %}上连续
    {% katex %}f(0)=0^3+3 \cdot 0^2-1=-1{% endkatex %}
    {% katex %}f(1)=1^3+3 \cdot 1^2 -1=3{% endkatex %}
    {% katex %}\because f(0)\cdot f(1)<0{% endkatex %} 
    {% katex %}\therefore{% endkatex %}根据零点定理
    至少有一点{% katex %}\xi \in (0,1){% endkatex %}，使得{% katex %}f(\xi)=0{% endkatex %}
    即方程{% katex %}x^3+3x^2=1{% endkatex %}在区间{% katex %}(0,1){% endkatex %}内至少有一个实根。
例题：证明方程{% katex %}e^x=3x{% endkatex %}在区间{% katex %}(0,1){% endkatex %}内至少有一个实根。
 解：有原式=
    {% katex %}e^x-3x=0{% endkatex %}即{% katex %}f(x)=e^x-3x{% endkatex %}
    {% katex %}f(x){% endkatex %}在{% katex %}[0,1]{% endkatex %}上显然连续
    {% katex %}f(0)=e^0+3 \cdot 0=1{% endkatex %}
    {% katex %}f(1)=e-3<0{% endkatex %}({% katex %}e \approx 2.718{% endkatex %})
    {% katex %}\because f(0)\cdot f(1)<0{% endkatex %} 
    {% katex %}\therefore{% endkatex %}根据零点定理
    至少有一点{% katex %}\xi \in (0,1){% endkatex %}，使得{% katex %}f(\xi)=0{% endkatex %}
    即方程{% katex %}e^x=3x{% endkatex %}在区间{% katex %}(0,1){% endkatex %}内至少有一个实根。

---
###### 课后习题
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251014781.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251014449.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251959527.png)

---
## 二.一元函数微分学**
### 导数
#### 导数的定义
设函数{% katex %}y=f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}在某个邻域内有定义，当自变量{% katex %}x{% endkatex %}在{% katex %}x_0{% endkatex %}处取得增量{% katex %}\Delta x{% endkatex %}（点{% katex %}x_0+\Delta x{% endkatex %}仍在该邻域内）时，相应的因变量{% katex %}y{% endkatex %}取得增量{% katex %}\Delta y=f(x_0+\Delta x)-f(x_0){% endkatex %}。
如果{% katex %}\frac{\Delta y}{\Delta x}{% endkatex %}当{% katex %}\Delta x \to 0{% endkatex %}时的极限存在，那么称函数{% katex %}y=f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处求导，并称此极限为函数{% katex %}y=f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处的导数，记作：
{% katex %}f'(x_0)=\lim_{\Delta x \to 0}{\frac{\Delta y}{\Delta x} }=\lim_{\Delta x \to 0} \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}{% endkatex %}
也可记作{% katex %}y'|_{x=x_{0'}},\frac{dy}{dx}|_{x=x_{0'}},\frac{df(x)}{dx}|_{x=x_0}{% endkatex %}
导数定义的几种等价形式：
1. {% katex %}f'(x_0)=\lim_{\Delta  \to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}{% endkatex %}
2. {% katex %}f'(x_0)=\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}{% endkatex %}
3. {% katex %}f'(x_0)=\lim_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}{% endkatex %}
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251015134.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251015912.png)
例题：
若{% katex %}f'(x_0)=1,f(x_0)=0{% endkatex %}，则{% katex %}\lim_{h \to \infty} hf(x_0-\frac{1}{h}){% endkatex %}=______-1____.
 解：令{% katex %}\Delta x=\frac{1}{h}{% endkatex %}
 原式={% katex %}\lim_{\Delta x \to 0} \frac{f(x_0-\Delta x)-f(x_0)}{\Delta x}=-f'(x_0)=-1{% endkatex %}
##### 导函数的定义
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251016093.png)
##### 结论
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251016677.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251016233.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251017515.png)
#### 导数的定义
函数{% katex %}f(x){% endkatex %}在某点{% katex %}x_0{% endkatex %}的导数：
- 定义式：{% katex %}\lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0} =f'(x_0){% endkatex %};
引入：{% katex %}x-x_0=\Delta x{% endkatex %}
- 增量式：{% katex %}\lim_{\Delta x \to 0}{\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x} }=f'(x_0){% endkatex %} ;
注意：
   1. {% katex %}\Delta x{% endkatex %}可以换成其余字母；
   2. 整体思想：{% katex %}\Delta x \to \Box{% endkatex %};
   3. {% katex %}\Delta x \to 0{% endkatex %}，谁趋于0 ，谁就是{% katex %}\Delta x{% endkatex %};
- 引申公式：{% katex %}\lim_{\Delta x \to 0}\frac{f(x_0+a\Delta x)-f(x_0+b\Delta x)}{c \Delta  x}=\frac{a-b}{c}\cdot f'(x_0){% endkatex %}
No face：f不要，直接作差，谁消失了乘上谁的导数；
{% katex %}\lim_{\Delta x \to 0}\frac{f(x_0+a\Delta x)-f(x_0+b\Delta x)}{c \Delta  x}{% endkatex %}={% katex %}\frac{(x_0+a \Delta x )-(x_0+b \Delta x)}{c \Delta x}=\frac{(a-b)\Delta x}{c\Delta x}\cdot f'(x_0){% endkatex %}
例题：
   - 已知{% katex %}f(x){% endkatex %}在{% katex %}x=x_0{% endkatex %}可导，则{% katex %}\lim_{h \to 0}]\frac{f(x_0+h)-f(x_0)}{h}={% endkatex %}___{% katex %}f'(x_0){% endkatex %}____;
 解：原式={% katex %}h \to 0;\therefore h=\Delta x{% endkatex %}
         ={% katex %}\lim_{\Delta x \to 0}]\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=f'(x_0){% endkatex %}
     - 设{% katex %}f(x){% endkatex %}在{% katex %}x=a{% endkatex %}处可导，则{% katex %}\lim_{\Delta x \to 0}\frac{f(a+\Delta x)-f(a-\Delta x)}{\Delta x}={% endkatex %}___{% katex %}2f'(a){% endkatex %}_____;
 解：原式={% katex %}\frac{1-(-1)}{1} \cdot f(a)=2f'(a){% endkatex %}
No face： {% katex %}\frac{(a+\Delta x)-(a-\Delta x)}{\Delta x}\cdot f'(a)=\frac{2\Delta x}{\Delta x}=2f'(a){% endkatex %}
     - 设{% katex %}f'(0)=a{% endkatex %}，则{% katex %}\lim_{\Delta x \to 0}\frac{f(-\Delta x)-f(0)}{\Delta x}={% endkatex %}_____{% katex %}-a{% endkatex %}____;
 解：原式={% katex %}\frac{-\Delta x-0}{\Delta x} \cdot f'(0)=-f'(0)=-a{% endkatex %}
     - 设{% katex %}f'(x_0)=-1{% endkatex %}，则{% katex %}\lim_{x \to 0}\frac{x}{f(x_0-2x)-f(x_0-x)}={% endkatex %}  1;
解：原式={% katex %}\lim_{\Delta x \to 0}\frac{\Delta x}{f(x_0-2\Delta x)-f(x_0-\Delta  x)}{% endkatex %}
     ={% katex %}\lim_{\Delta x \to 0}\frac{1}{\frac{f(x_0-2\Delta x)-f(x_0-\Delta x)}{\Delta x}}{% endkatex %}
      ={% katex %}\lim_{\Delta x \to 0}\frac{1}{\frac{-2-(-1)}{1}\cdot f'(x_0)}=1{% endkatex %}
##### 导数定义，求函数{% katex %}f(x){% endkatex %}在某点的导数
特点：此时的{% katex %}f(x){% endkatex %}为复杂的多项式，乘积形式；
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251017456.png)
##### 已知{% katex %}f(x){% endkatex %}某点导数，求相关极限
解法：根据导数定义，凑出相关极限
例题：
 设{% katex %}f(x){% endkatex %}在{% katex %}R{% endkatex %}上连续，且{% katex %}f(0)=0{% endkatex %},{% katex %}f'(0)=2{% endkatex %}求{% katex %}\lim_{x \to 0}\frac{f(e^x-1)}{x}{% endkatex %}
 解：原式= {% katex %}\because f(0)=\lim_{x \to 0} \frac{f(x)-f(0)}{x-0}=\lim_{x \to 0} \frac{f(x)}{x}=2{% endkatex %}
     {% katex %}\therefore \lim_{x \to 0} \frac{f(e^x)-1}{x}=\lim_{x \to 0} \frac{f(e^x)-f(0)}{(e^x-1)-0} \cdot \frac{e^x-1}{x}=\lim_{x \to 0} 2\cdot \frac{e^x-1}{x}=2{% endkatex %}
已知{% katex %}f(x){% endkatex %}在{% katex %}x=0{% endkatex %}处连续，且{% katex %}f(0)=0{% endkatex %}，{% katex %}f'(0)=2{% endkatex %}，求{% katex %}\lim_{x \to 0}\frac{f()1-\cos x}{\tan x^2}{% endkatex %}
 解：原式={% katex %}\because \lim_{x \to 0} \frac{f(x)}{x}=2{% endkatex %}
   {% katex %}\therefore \lim_{x \to 0} \frac{f(1-\cos x)}{\tan x^2}=\lim_{x \to 0} \frac{1-\cos x}{x^2} =\lim_{x \to 0} \frac{f(1-\cos x) }{x-\cos x } \cdot \frac{1-\cos x}{x^2} =\lim_{x \to 0} 2 \cdot \frac{\frac{1}{2}x^2 }{x^2} =1{% endkatex %}
##### 已知函数极限，求相关导数
已知{% katex %}f(x){% endkatex %}在{% katex %}x=a{% endkatex %}处连续，且{% katex %}\lim_{x \to a}\frac{f(x)}{x-a}=2{% endkatex %}，求{% katex %}f'(a){% endkatex %}及{% katex %}f(a){% endkatex %}.
 解：原式={% katex %}\because \lim_{x \to 0} \frac{f(x)}{x-a} =2{% endkatex %}
    极限存在，分子趋于0，分母趋于0
    {% katex %}\therefore \lim_{x \to 0} f(x)=f(a)=0{% endkatex %}
    又{% katex %}f'(a)=\lim_{x \to a} \frac{f(x)-f(a)}{x-a}=\lim_{x \to a}  \frac{f(x)}{x-a}=2{% endkatex %}

---
#### 左导数与右导数
##### 左、右导数定义
左导数和右导数统称单侧函数
{% katex %}f_-'(x)=\lim_{x \to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}{% endkatex %}（左导数）
{% katex %}f_+'(x)=\lim_{x \to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}{% endkatex %}（右导数）
1. 函数在某点{% katex %}x_0{% endkatex %}的可导条件：{% katex %}f_-'(x_0)=f_+'(x_0){% endkatex %};（左导=右导）。
2. 可导的必要条件：可导函数必连续；

题型：
1. 告知{% katex %}f(x){% endkatex %}可导，求参数。
2. 可导{% katex %}\to{% endkatex %}连续{% katex %}\to{% endkatex %}极限；
例题：
设{% katex %}f(x)=\left\{\begin{matrix}e^x.x>0 \\ \sin ax+b.x\le 0 \end{matrix}\right.{% endkatex %} ，在{% katex %}x=0{% endkatex %}可导，求{% katex %}a,b{% endkatex %}
 解：{% katex %}\because f(x){% endkatex %}在{% katex %}x=0{% endkatex %}可导，则{% katex %}f(x){% endkatex %}在{% katex %}x=0{% endkatex %}处连续
{% katex %}x=o,f(0)=b{% endkatex %}
{% katex %}\lim_{x \to 0^-}f(x)=\lim_{x \to 0^-}(\sin ax+b)=b{% endkatex %}
{% katex %}\lim_{x \to 0^+}f(x)=\lim_{x \to 0^+}e^x =1{% endkatex %}{% katex %}\to{% endkatex %}{% katex %}b=1{% endkatex %}
2.又{% katex %}f_-'(0)=f_+'(0){% endkatex %}
 即：{% katex %}f_-'(0)=\lim_{x \to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^-}\frac{\sin ax+1-1}{x}=a{% endkatex %}
    {% katex %}f_+'(0)=\lim_{x \to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^+}\frac{e^x-1}{x}=1{% endkatex %}{% katex %}\to{% endkatex %}{% katex %}a=1{% endkatex %}
综上：{% katex %}a=1,b=1{% endkatex %}
例题：
若{% katex %}f(x)=\left\{\begin{matrix} \frac{ln(1+x^2)}{x},x>0  \\ ax+b, x\le 0 \end{matrix}\right.{% endkatex %}在{% katex %}x=0{% endkatex %}可导，求{% katex %}a,b{% endkatex %}
 解：1.{% katex %}\because f(x){% endkatex %}在{% katex %}x=0{% endkatex %}可导，则{% katex %}f(x){% endkatex %}在{% katex %}x=0{% endkatex %}处连续
    {% katex %}x=0,f(0)=b{% endkatex %}
    {% katex %}\lim_{x \to 0^-}f(x)=\lim_{x \to 0^-}(\sin ax+b)=b{% endkatex %}
    {% katex %}\lim_{x \to 0^+}f(x)=\lim_{x \to 0^+}\frac{ln(1+x^2)}{x} =\lim_{x \to 0^+}\frac{x^2}{x}=\lim_{x \to 0^+}x=0{% endkatex %}{% katex %}\to{% endkatex %}{% katex %}b=0{% endkatex %}
   2.又{% katex %}f_-'(0)=f_+'(0){% endkatex %}
    即：{% katex %}f_-'(0)=\lim_{x \to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^-}\frac{\sin ax}{x}=a{% endkatex %}
    {% katex %}f_+'(0)=\lim_{x \to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^+}\frac{ln(1+x^2)}{x^2}=\lim_{x \to 0^+}\frac{x^2}{x^2}=1{% endkatex %}{% katex %}\to{% endkatex %}{% katex %}a=1{% endkatex %}  
综上：{% katex %}a=1,b=0{% endkatex %}

---
#### 可导与连续的关系
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251018054.png)

#### 基本导数公式和四则运算求导法则
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251018535.png)
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310251018295.png)

---
#### 函数的求导方法
1.复合函数求导
求导法则：*外层求导，再乘以内层求导。*
例题：
设{% katex %}y=ln \cos x， 求y'{% endkatex %}。
   解：原式={% katex %}y'=\frac{1}{\cos x}\cdot (- \sin x){% endkatex %}
         ={% katex %}- \tan x{% endkatex %}
若函数{% katex %}f(x){% endkatex %}可导，求函数{% katex %}y=f(\frac{1}{x^3}){% endkatex %}的导数。
   解：原式={% katex %}f'(\frac{1}{x^3}) \cdot (-3 \frac{1}{x^4}){% endkatex %}
         ={% katex %}\frac{-3f'(\frac{1}{x^3})}{x^4}{% endkatex %}
2.分段函数求导
求导方法：*分段点两边分别求，中间分段点单独求*
中间分段函数求导：
   1.用导数的定义式求
   2.导入左边导数得“左导数”，带入右边导数得“右导数”，若二者相等且分段函数连续，则值为分段点的导数值，若导数不相等或分段函数连续，则分段点导数值不存在；
3.隐函数求导*
求导方法：*方程两边分别求导，注意方程中{% katex %}y是x{% endkatex %}的复合函数*
例题1：求由方程{% katex %}e^y+xy-e=0{% endkatex %}所确定的隐函数的导数{% katex %}y'{% endkatex %}。
   解：原式={% katex %}y=f(x){% endkatex %}  
         ={% katex %}e^yy'+y+xy'-0=0{% endkatex %}    
         ={% katex %}y'=\frac{-y}{e^y+x}{% endkatex %}  
例题2：求由方程{% katex %}3xy+lny=1{% endkatex %}所确定的隐函数在{% katex %}x=0{% endkatex %}处的导数{% katex %}\frac{dy}{dx}|_{x=0}{% endkatex %}.
   解：原式={% katex %}3y+3x \cdot y'+\frac{y'}{y}=0{% endkatex %}
         ={% katex %}y'=\frac{-3y}{3x+\frac{1}{y}}=\frac{-3y^2}{3xy+1}{% endkatex %}  
         当{% katex %}x=0时，y=e{% endkatex %}  
         ={% katex %}\frac{dy}{dx}|_{x=0}=\frac{-3e^2}{0+1}=-3e^2{% endkatex %}  
例题3： 设{% katex %}y=f(x){% endkatex %}是由方程{% katex %}\arcsin y=e^x{% endkatex %}确定的函数，求{% katex %}y'{% endkatex %}.
   解：原式={% katex %}\arcsin x= \frac{1}{ \sqrt{1-x^2} }{% endkatex %}  
         ={% katex %} \frac{1}{ \sqrt{1-y^2} } y'=e^x {% endkatex %}
         ={% katex %}y'=e^x\sqrt{1-y^2} {% endkatex %}  
4.由参数方程确定的函数求导
求导方法：*y对t的导数除以x对t的导数*
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310281515928.png)
例题1：设函数{% katex %}y=y(x){% endkatex %}由参数发方程
{% katex %}
\left\{\begin{matrix}x=3t^2-1
 \\
y=e^{2t}+1
\end{matrix}\right. {% endkatex %}确定，求{% katex %}\frac{dy}{dx}{% endkatex %}
   解：原式={% katex %}\frac{dy}{dt}=2e^{2t}{% endkatex %}
         ={% katex %}\frac{dx}{dt}=6t{% endkatex %}  
         ={% katex %}\frac{dy}{dx}=\frac{2e^{2t} }{6t}=\frac{ e^{2t} }{3t}{% endkatex %}  
例题2：已知参数方程 {% katex %}\left\{\begin{matrix}
x=t-\frac{1}{t} 
 \\
y=\frac{1}{2}t^2+lnt
\end{matrix}\right.{% endkatex %},求{% katex %}\frac{dy}{dx}|_{t=1}{% endkatex %}。
   解：原式={% katex %}\frac{dy}{dt}=t+\frac{1}{t}{% endkatex %}  
         ={% katex %}\frac{dx}{dt}=1+\frac{1}{t^2}{% endkatex %} 
         ={% katex %}\frac{dy}{dx}=\frac{t+\frac{1}{t} }{1+\frac{1}{t^2} }{% endkatex %} 
         =t=1
5.幂指函数求导
求导方法：*对数求导法*
例题1：求{% katex %}y=x^x(x>0){% endkatex %}的导数。
   解：原式={% katex %}lny=lnx^x=xlnx{% endkatex %}
         隐函数求导
         ={% katex %}\frac{y'}{y}=lnx+x \cdot \frac{1}{x}{% endkatex %}     
         ={% katex %}y'=y(lnx+1){% endkatex %}
         ={% katex %}x^x(lnx+1){% endkatex %}   
例题2：求{% katex %}y=x^{\sin x}(x>0) {% endkatex %}的导数。  
   解：原式={% katex %}lny=\sin x \cdot lnx{% endkatex %} 
         ={% katex %}\frac{y'}{y}=\cos x \cdot lnx+\sin x \cdot \frac{1}{x} {% endkatex %}  
         ={% katex %}y'=x^{\sin x}(\cos x \cdot lnx+\frac{\sin x}{x}) {% endkatex %}   
例题3：求{% katex %}y=(1+2x)^{\cos x}(x>-\frac{1}{2}){% endkatex %}的导数。  
   解：原式={% katex %}lny=\cos x \cdot ln(1+2x){% endkatex %}   
         ={% katex %}\frac{y'}{y}=-\sin x \cdot ln(1+2x)+\cos x \cdot \frac{2}{1+2x} {% endkatex %}   
         ={% katex %}y'=(1+2x)^{\cos x}(\frac{2 \cdot \cos x}{1+2x}-\sin x \cdot ln(1+2x) ) {% endkatex %}   
6.多因子积商乘方构成的函数求导  
求导方法：*对数求导法*
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310281604406.png)
例题1：求{% katex %}\sqrt{\frac{(x-1)(x-2)}{(x-3)(x-4)} } {% endkatex %}的导数。  
解：原式={% katex %}lny=ln(\frac{(x-1)(x-2)}{(x-3)(x-4)} )^\frac{1}{2}=\frac{1}{2} ln\frac{(x-1)(x-2)}{(x-3)(x-4)}  {% endkatex %}  
      ={% katex %}\frac{1}{2}(ln(x-1)+ln(x-2)-ln(x-3)-ln(x-4) ) {% endkatex %}
      ={% katex %}2\frac{y'}{y}=\frac{1}{x-1}+\frac{1}{x-2}-\frac{1}{x-3}-\frac{1}{x-4}{% endkatex %}
      ={% katex %}y'=\frac{y}{2}(\frac{1}{x-1}+\frac{1}{x-2}-\frac{1}{x-3}-\frac{1}{x-4}) {% endkatex %}
![例题2](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310291425147.png)
7.课堂总结
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310291427077.png)

---
#### 高阶导数
1.定义  
对函数{% katex %}y=f(x){% endkatex %}求导得到的{% katex %}y'{% endkatex %}称为一阶导数；对{% katex %}y'{% endkatex %}继续求导得到二阶导数{% katex %}y''{% endkatex %}……;  
从四阶导数开始，写法为{% katex %}y^{(4)} {% endkatex %};  
对{% katex %}y^{(n-1)}{% endkatex %}求导得到n阶导数{% katex %}y^{(n)} {% endkatex %},或记作{% katex %}f^{(n)}(x),\frac{d^ny}{dx^n},\frac{d^nf(x)}{dx^n}{% endkatex %};二阶及其以上统称高阶导数。
2.求高阶导数的方法
(1).求二阶导数  
一阶导数——>二阶导数
例题1：求函数{% katex %}y=2x^4-x^2+e^x{% endkatex %}的三阶导数。
   解：原式={% katex %}y'=8x^3-2x+e^x{% endkatex %}  
         ={% katex %}y''=24x^2-2+e^x{% endkatex %}  
         ={% katex %}y'''=48x+e^x{% endkatex %}
例题2：求函数{% katex %}y=ln(\sin x){% endkatex %}的二阶导数。
   解原式{% katex %}=\frac{1}{\sin x}\cdot \cos x=\cot x
            =y''=-\csc^2x
   {% endkatex %}
例题3：求函数{% katex %}x^2+y^2=1{% endkatex %}的二阶导数。
   解原式{% katex %}=2x+2y \cdot y'=0
            =y'=-\frac{x}{y}
            =y''=-\frac{y-y'x}{y^2}=-\frac{y+\frac{x}{y} \cdot x }{y^2}
            =-\frac{1}{y^3}
   {% endkatex %}
(2).求三阶以上的导数
使用常用的高阶求导公式  
![常用高阶求导公式](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310291505621.png)
例题4：设函数{% katex %}y=x^{2000}+e^x+\cos x{% endkatex %}，则{% katex %}y^{(2025)}=e^x-\sin x{% endkatex %}
(3).由参数方程确定的函数二阶导数
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310291519838.png)
![求导方法](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202310291519312.png)
例题5：求函数{% katex %}y=y(x){% endkatex %}由参数方程{% katex %}\left\{\begin{matrix}
x=\frac{1}{2}t^2-1 
 \\
y=x^t+1
\end{matrix}\right.{% endkatex %}确定，求{% katex %}\frac{d^2y}{dx^2}{% endkatex %}。
   解:原式{% katex %}=\frac{dy}{dt}=e^t
            =\frac{dx}{dt}=t
            =\frac{dy}{dx}=\frac{e^t}{t}
            =\frac{dy'}{dt}=(\frac{e^t}{t})'=\frac{e^t \cdot t-e^t}{t^2}  
            =\frac{d^2y}{dx^2}=\frac{e^t \cdot t-e^t}{t^3}
   {% endkatex %}
例题6：已知函数方程{% katex %}\left\{\begin{matrix}
x=t-\frac{1}{t}
\\
y=\frac{1}{2}t^2+lnt
\end{matrix}\right.{% endkatex %}，求{% katex %}\frac{d^2y}{dx^2}{% endkatex %}。
    解:原式{% katex %}=\frac{dy}{dt}=t+\frac{1}{t}
        =\frac{dx}{dt}=1+\frac{1}{t^2}
        =y'=\frac{dy}{dx}=\frac{t+\frac{1}{t} }{1+\frac{1}{t^2} }=t
        =\frac{dy'}{dt}=1    
        =\frac{d^2y}{dx^2}=\frac{t^2}{t^2+1}
{% endkatex %}

---
#### 导数的习题
1. 设{% katex %}f'(x_0){% endkatex %}存在，则{% katex %}\lim_{\Delta x \to 0} \frac{f(x_0-\frac{1}{2}\Delta x )-f(x_0)}{-\Delta x}=-\frac{1}{2} {\div} -1=\frac{1}{2}f'(x_0)  {% endkatex %}  
2. 求函数{% katex %}y=f(\cos 2x){% endkatex %}的导数。  
   解：原式={% katex %}y'=f'(\cos 2x) \cdot (-\sin 2x) \cdot 2
        =-2 \sin 2x f'(\cos 2x)  
{% endkatex %}  
3. 求函数{% katex %}y=\frac{\sqrt{x+1}-\sqrt{x-1} }{\sqrt{x+1}+\sqrt{x-1} }{% endkatex %}的导数。  
    解：原式={% katex %}y=\frac{(\sqrt{x+1}-\sqrt{x-1} )^2}{(\sqrt{x+1}+\sqrt{x-1})(\sqrt{x+1}-\sqrt{x-1} ) }    
          =\frac{2x-2\sqrt{x^2-1} }{2}=x-\sqrt{x^2-1}  
          =y'=1-\frac{1}{2}(x^2-1)^{-\frac{1}{2}} \cdot 2x  
          =1-\frac{x}{\sqrt{x^2-1} }  
{% endkatex %}   
4. 求由方程{% katex %}xy=e^{x+y} {% endkatex %}确定的隐函数的导数。  
    解：原式={% katex %}y+xy'=e^{x+y}(1+y')  
          =y+xy'=e^{x+y}+e^{x+y}y'  
          =y'=\frac{e^{x+y}-y}{x-e^{x+y} }   
{% endkatex %}  
5. 已知{% katex %}\left\{\begin{matrix}
   x=e^t \sin t
   \\
   y=e^t \cos t
   \end{matrix}\right.{% endkatex %}，求当{% katex %}t=\frac{\pi}{3}时\frac{dy}{dx}的值{% endkatex %} 。  
    解：原式={% katex %}\frac{dy}{dt}=(\cos t-\sin t)e^t
          =\frac{dx}{dt}=e^t(\cos t+\sin t)  
          =\frac{dy}{dx}=\frac{\cos t-\sin t}{\cos t+\sin t}  
          =\frac{dy}{dx}|_{t=\frac{\pi}{3}}=\frac{\frac{1}{2}-\frac{\sqrt{3} }{2} }{\frac{1}{2}+\frac{\sqrt{3} }{2} }=\sqrt{3}-2  
{% endkatex %}  

---
### 微分
**导数**：{% katex %}f'(x)=\lim_{\Delta x \to 0} \frac{\Delta y}{\Delta x}=\frac{dy}{dx}  \frac{函数的增量}{自变量增量}{% endkatex %}代表斜率、变化率、即微商。  
**微分**：{% katex %}dy=f'(x)dx{% endkatex %}   代表函数的增量（导数的乘积形式）。  
![证明](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041628652.png)
1. *微分的定义*：如果函数的增量{% katex %}\Delta y=f(x_0+\Delta x)-f(x_0){% endkatex %}可以表示为 
{% katex %}\Delta y=A \cdot \Delta x+o(\Delta x){% endkatex %}  
其中A是不依赖与{% katex %}\Delta x{% endkatex %}的常数，那么称函数{% katex %}y=f(x)在点x_0{% endkatex %}是**可微**的，而{% katex %}A \cdot \Delta x{% endkatex %}即为函数在该点的微分，记作：  
{% katex %}dy=A \cdot \Delta x{% endkatex %}  
或{% katex %}dy=A \cdot \Delta x{% endkatex %}(其中{% katex %}dx{% endkatex %}是自变量的微分)  
{% katex %}函数可导\longleftarrow等价 \longrightarrow 函数可微{% endkatex %}  
2. 基本微分公式及微分运算法则  
   ![基本公式](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041648546.png)
   ![运算法则](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041649949.png)

---
### 微分中值定理  
#### 罗尔中值定理
如果函数{% katex %}f(x){% endkatex %}满足以下条件 **（缺一不可）**：  
1. 在闭区间{% katex %}[a,b]{% endkatex %}上连续；  
2. 在开区间{% katex %}(a,b){% endkatex %}上可导；  
3. {% katex %}f(a)=f(b){% endkatex %}；  
则在开区间{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}f'(\xi)=0{% endkatex %}  
   ![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041700161.png)  
   ![生活实例](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041704450.png)
**不要和零点定理搞混！！！**
例题1：下列函数在给定区间内满足罗尔中值定理的是（   ）。  
{% katex %}A、f(x)=\left\{\begin{matrix}
   x+1,x<5
   \\
   1,   x\ge 5
   \end{matrix}\right.
   [0,5]
{% endkatex %}  
{% katex %}B、f(x)=\sqrt[3]{(x-1)^2}  [0,2]{% endkatex %}  
{% katex %}C、f(x)= x^2-3x+2 [1,2]{% endkatex %}   
{% katex %}D、f(x)=|x-1| [0,2]{% endkatex %}  
解析：
A:分段点x=5，带入，不连续。  
B:导函数定义域不能取值1，不可导。  
C:没有不满足定义域的点，连续；求导可导，左右导数相等0，满足条件。  
D:x=1,绝对值，连续不可导  
A、B、D不满足条件3，C满足条件1、2、3，故选C。  
例题2：证明方程 {% katex %}3a_1x^2-2a_2x=a_1-a_2{% endkatex %}在{% katex %}(0,1){% endkatex %}上至少有一个实根。  
解析：证明方程在开区间内有实根。首先用零点定理，其次使用罗尔中值定理。
证明：{% katex %}f(x)=3a_1x^2-2a_2x-a_1+a_2{% endkatex %}  
    {% katex %}f(0)=-a_1+a_2{% endkatex %}  
    {% katex %}f(1)=2a_1-a_2{% endkatex %}  
    零点定理无用。  
    {% katex %}f'(x)=3a_1x^2-2a_2x-a_1+a_2{% endkatex %}  
    反推：  
    {% katex %}f(x)=a_1x^3-a_2x^2-a_1x+a_2x{% endkatex %}  
   ![答案](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041744507.png)
   ![标准解题](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311041742778.png)
例题3-1：已知函数{% katex %}f(x){% endkatex %}在{% katex %}x \in R{% endkatex %}范围内连续且可导，{% katex %}f(a)=f(b)=0{% endkatex %}，证明至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}f'(\xi)+f(\xi)=0{% endkatex %}  
解析：证明含有{% katex %}f'(\xi){% endkatex %}的等式，使用罗尔中值定理。
    证明：构造函数{% katex %}F(x)=f(x) \cdot e^x{% endkatex %}  
    显然{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导  
   {% katex %}F(a)=0,F(b)=0{% endkatex %},且{% katex %}F'(x)=f'(x)e^x+f(x)e^x{% endkatex %}  
    所以{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足罗尔中值定理的条件，故在{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}F'(\xi)=0{% endkatex %}  
    即{% katex %}f'(\xi)e^{\xi}+f(\xi)e^{\xi}=0{% endkatex %}，化简得{% katex %}f'(\xi)+f(\xi)=0。{% endkatex %}  

例题3-2：已知函数{% katex %}f(x){% endkatex %}在{% katex %}x \in R{% endkatex %}范围内连续且可导，{% katex %}f(a)=f(b)=0{% endkatex %}，证明至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}f'(\xi)+2f(\xi)=0{% endkatex %}
解析：{% katex %}f'(x)\Box +2f(x)\Box =0{% endkatex %},{% katex %}使用(uv)'=u'v+uv'{% endkatex %}    
{% katex %}\therefore \Box =e^{2x}{% endkatex %}  
    证明：构造函数{% katex %}F(x)=f(x) \cdot e^{2x}{% endkatex %}  
    显然{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导    
    {% katex %}F(a)=0,F(b)=0{% endkatex %}  
    且{% katex %}F'(x)=f'(x)e^{2x}+2f(x)e^{2x }{% endkatex %}  
    所以{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足罗尔中值定理的条件，故在{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}F'(\xi)=0{% endkatex %}  
    即{% katex %}f'(\xi)+2f(\xi)=0。{% endkatex %}    

例题3-3：已知函数{% katex %}f(x){% endkatex %}在{% katex %}x \in R{% endkatex %}范围内连续且可导，{% katex %}f(a)=f(b)=0{% endkatex %}，证明至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}f'(\xi)+2\xi f(\xi)=0{% endkatex %}
解析：{% katex %}f'(x)\Box +2xf(x)\Box =0{% endkatex %},{% katex %}使用(uv)'=u'v+uv'{% endkatex %}  
{% katex %}\therefore \Box =e^{x^2}{% endkatex %}
    证明：构造函数{% katex %}F(x)=f(x) \cdot e^{x^2}{% endkatex %}    
    显然{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导  
    {% katex %}F(a)=0,F(b)=0{% endkatex %},且{% katex %}F'(x)=f'(x)e^{x^2}+2f(x)e^{x^2}{% endkatex %}  
    所以{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足罗尔中值定理的条件，  
    故在{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}F'(\xi)=0{% endkatex %}    
    即{% katex %}f'(\xi)+2\xi f(\xi)=0。{% endkatex %}     

例题3-4：已知函数{% katex %}f(x){% endkatex %}在{% katex %}x \in R{% endkatex %}范围内连续且可导，{% katex %}f(a)=f(b)=0{% endkatex %}，证明至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}\frac{\xi}{n}f'(\xi)+f(\xi)=0，n{% endkatex %}为正整数。    
解析：{% katex %}f'(x)\frac{x}{n} \Box +f(x)\Box =0{% endkatex %},{% katex %}使用(uv)'=u'v+uv'{% endkatex %}  
{% katex %}\therefore \Box =x^n {% endkatex %}
    证明：构造函数{% katex %}F(x)=f(x) \cdot x^n{% endkatex %}    
    显然{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导  
    {% katex %}F(a)=0,F(b)=0{% endkatex %},且{% katex %}F'(x)=f'(x) \cdot x^n+f(x) \cdot \frac{n}{x}\cdot x^n {% endkatex %}  
    所以{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足罗尔中值定理的条件，  
    故在{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}F'(\xi)=0{% endkatex %}    
    即{% katex %}f'(\xi) \cdot \xi ^n+f(\xi) \cdot \frac{n}{\xi} \cdot \xi ^n=0。{% endkatex %}，化简得{% katex %}\frac{\xi }{n} f'(\xi)+f(\xi)=0。{% endkatex %}  
例题3总结
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311051543530.png)
例题4-1：已知函数{% katex %}f(x){% endkatex %}在{% katex %}x \in R{% endkatex %}范围内连续且可导，{% katex %}f(a)=f(b)=0{% endkatex %}，证明至少存在一点{% katex %}\xi \in (a,b){% endkatex %}，使得{% katex %}f'(\xi)-f(\xi)=0{% endkatex %}。    
解析：{% katex %}f'(x) \Box -f(x)\Box =0{% endkatex %},{% katex %}使用(\frac{u}{v})'=\frac{u'v-uv'}{v^2} {% endkatex %}  
{% katex %}\therefore \Box =e^x {% endkatex %}
    证明：构造函数{% katex %}F(x)=\frac{f(x)}{e^x} {% endkatex %}    
    显然{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导  
    {% katex %}F(a)=0,F(b)=0{% endkatex %},且{% katex %}F'(x)=\frac{f'(x)\cdot e^x-f(x)\cdot e^x}{(e^x)^2} {% endkatex %}  
    所以{% katex %}F(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足罗尔中值定理的条件，  
    故在{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}F'(\xi)=0{% endkatex %}    
    即{% katex %}\frac{f'(\xi)\cdot e^\xi-f(\xi) \cdot e^\xi}{(e^\xi)^2}=0{% endkatex %}，化简得{% katex %}f'(\xi)-f(\xi)=0{% endkatex %}。  
例题4总结
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311051555408.png)

例题：若{% katex %}f(x){% endkatex %}在{% katex %}[1,e]{% endkatex %}连续，{% katex %}(1,e){% endkatex %}可导，且{% katex %}f(1)=0，f(e)=1{% endkatex %}，证明：存在一点{% katex %}\xi \in (1,e){% endkatex %}，使{% katex %}\xi \cdot f'(\xi )=1{% endkatex %}
证明：构造函数{% katex %}F(x)=f(x) \cdot \ln x{% endkatex %}  
{% katex %}F'(x)=f'(x)-\frac{1}{2}{% endkatex %}  
{% katex %}F(1)=0,F(e)=1{% endkatex %}  
{% katex %}F'(1)=f'(1)-\ln 1=0{% endkatex %}  
{% katex %}F'(e)=f(e)-\ln e=0{% endkatex %}  
{% katex %}f'(1)=f'(e)=0{% endkatex %}  
有罗尔中值定理，存在一点{% katex %}\xi \in (1,e){% endkatex %}  
{% katex %}F'(\xi)=0{% endkatex %}  
即{% katex %}f'(\xi)-\frac{1}{\xi}=0{% endkatex %}  
即{% katex %}f'(\xi)=\frac{1}{\xi}{% endkatex %}  
即{% katex %}\xi f'(\xi)=1{% endkatex %}  


---
#### 拉格朗日中值定理
如果函数{% katex %}y=f(x){% endkatex %}满足以下条件(两端点函数差/两端点差)**（缺一不可）**：  
1. 在闭区间{% katex %}[a,b]{% endkatex %}上连续；  
2. 在开区间{% katex %}(a,b){% endkatex %}上可导；  
则在开区间{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}f'(\xi)=\frac{f(b)-f(a)}{b-a} {% endkatex %}  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311051607939.png)
例题1：在下列区间上，函数{% katex %}f(x)=e^x-3x^{\frac{1}{3} } {% endkatex %}不满足拉格朗日中值定理的条件的是（ C ）。 
A.{% katex %}[-1,0]{% endkatex %}  
B.{% katex %}[0,1]{% endkatex %}  
C.{% katex %}[-1,1]{% endkatex %}  
D.{% katex %}[1,e]{% endkatex %}  
解析：闭区间内连续—>看{% katex %}f(x){% endkatex %}的定义域，找间断点（定义域R，无间断点）；
     开区间内可导—>求{% katex %}f'(x),看f'(x){% endkatex %}的定义域，找间断点。
{% katex %}f'(x)=e^x-\frac{1}{\sqrt[3]{x^2} }(x \ne 0){% endkatex %}  
只有C的开区间含0，所以选C。  

例题2：函数{% katex %}f(x)=\frac{1}{2}x^2-x{% endkatex %}在区间{% katex %}[1,2]{% endkatex %}上满足拉格朗日中值定理条件的{% katex %}\xi=（ \frac{3}{2} ）{% endkatex %}。
    解：{% katex %}f'(x)=x-1{% endkatex %}  
    {% katex %}f(1)=\frac{1}{2} \cdot 1^2-1=-\frac{1}{2}{% endkatex %}  
    {% katex %}f(2)=\frac{1}{2} \cdot 2^2-2=0{% endkatex %}  
    {% katex %}\therefore \frac{f(2)-f(1)}{2-1}=\frac{1}{2}{% endkatex %}  
    {% katex %}\therefore \xi=1+\frac{1}{2}=\frac{3}{2}{% endkatex %}

例题3-1：设{% katex %}0<b<c{% endkatex %}，求证{% katex %}\frac{b-a}{1+b^2}<\arctan b-\arctan a<\frac{b-a}{1+a^2}{% endkatex %}  
    证明：构造函数{% katex %}f(x)=\arctan x{% endkatex %}  
    显然{% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上连续，在{% katex %}(a,b){% endkatex %}上可导  
    所以{% katex %}f(x){% endkatex %}在{% katex %}[a,b]{% endkatex %}上满足拉格朗日中值定理的条件，且在{% katex %}(a,b){% endkatex %}内至少存在一点  
    {% katex %}\xi{% endkatex %}使得{% katex %}f'(\xi)=\frac{\arctan b-\arctan a}{b-a}{% endkatex %}  
    {% katex %}f'(\xi)=\frac{1}{1+\xi^2},\arctan b-\arctan a=\frac{b-a}{1+\xi^2}{% endkatex %}  
    因为{% katex %}a<\xi<b{% endkatex %}，所以{% katex %}\frac{b-a}{1+b^2}<\frac{b-a}{1+\xi^2}<\frac{b-a}{1+a^2} {% endkatex %}  
    所以{% katex %}\frac{b-a}{1+b^2}<\arctan b-\arctan a<\frac{b-a}{1+a^2}{% endkatex %}  

例题3-2：设{% katex %}x>0{% endkatex %}，求证{% katex %}\frac{x}{1+x}<ln(1+x)<x{% endkatex %}。  
    证明：构造函数{% katex %}f(x)=ln(x){% endkatex %}  
    显然{% katex %}f(x){% endkatex %}在{% katex %}[1,1+x]{% endkatex %}上连续，在{% katex %}(1,1+x){% endkatex %}上可导  
    所以{% katex %}f(x){% endkatex %}在{% katex %}[1,1+x]{% endkatex %}上满足拉格朗日中值定理的条件，且在{% katex %}(1,1+x){% endkatex %}内至少存在一点  
    {% katex %}\xi{% endkatex %}，使得{% katex %}f'(\xi)=\frac{ln(1+x)-ln1}{1+x-1}=\frac{ln(1+x)}{x}{% endkatex %}  
    {% katex %}f'(\xi)=\frac{1}{\xi}，ln(1+x)-ln1=x \cdot \frac{1}{\xi}=\frac{x}{\xi}{% endkatex %}
    因为{% katex %}1<\xi<1+x{% endkatex %}，所以{% katex %}\frac{x}{1+x}<\frac{x}{\xi}<x{% endkatex %}  
    所以{% katex %}\frac{x}{1+x}<ln(1+x)<x{% endkatex %}  

例题3-3：设{% katex %}x \in (0,\frac{\pi}{2}){% endkatex %}，求证{% katex %}x<\tan x<\frac{x}{\cos ^2x}{% endkatex %}   
    证明：构造函数{% katex %}f(x)=\tan x{% endkatex %}  
    显然{% katex %}f(x){% endkatex %}在{% katex %}[0,x]{% endkatex %}上连续，在{% katex %}(0,x){% endkatex %}上可导  
    所以{% katex %}f(x){% endkatex %}在{% katex %}[0,x]{% endkatex %}上满足拉格朗日中值定理的条件，且在{% katex %}(0,x){% endkatex %}内至少存在一点  
    {% katex %}\xi{% endkatex %}，使得{% katex %}f'(\xi)=\frac{\tan x-\tan 0}{x-0}=\frac{\tan x}{x}{% endkatex %}  
    {% katex %}f'(\xi)=\frac{1}{\cos ^2\xi}，\tan x-\tan 0=x \cdot \frac{1}{\cos ^2\xi}=\frac{x}{\cos ^2\xi}{% endkatex %}
    因为{% katex %}0<\xi<x{% endkatex %}，所以{% katex %}x<\frac{x}{\cos ^2\xi}<\frac{x}{\cos ^2x}{% endkatex %}
    所以{% katex %}x<\tan x<\frac{x}{\cos ^2x}{% endkatex %}

例题3总结：
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311051707546.png)  

---
#### 柯西中值定理


---
### 洛必达法则
{% katex %}\lim_{x \to x_0/x \to \infty }\frac{f(x)}{g(x)}=  \lim_{x \to x_0/x \to \infty }\frac{f'(x) } {g'(x)} {% endkatex %}   
两函数之商求极限等于两函数导数之商的极限。  
使用洛必达法则的两个前提：  

1. {% katex %}f(x),g(x){% endkatex %}同时趋近于0或同时趋近于{% katex %}\infty{% endkatex %}极限为{% katex %} \frac{0}{0} {% endkatex %} 或 {% katex %} \frac{ \infty }{ \infty } {% endkatex %} 的未定式；
2. {% katex %} \lim_{x \to x_0/x \to \infty }\frac{f'(x)}{g'(x)}{% endkatex %}存在或为{% katex %}\infty{% endkatex %}  
   ![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311051756929.png)
洛必达注意事项：  
**同一道题中洛必达可以和等价无穷小可以交替使用，但是同一步骤中绝对不能混用**  
不要盲目使用洛必达法则，能化简先化简。  
使用洛必达法则前，如果存在`非0非无穷因子`可先带入，可简化计算。（条件：整体的极限式子可看作是非0非无穷因子和，另外一个式子的乘积的形式，局部加减的非0非无穷式子不能先行带入！）
如果洛必达之后极限不存在，那么洛必达法则失效，应采用其他方法计算。  
如果洛必达之后陷入了死循环，那么洛必达法则失效，应采用其他方法计算。  

例题1：求{% katex %}\lim_{x \to +\infty}\frac{x^{100} }{e^x}{% endkatex %}
    解：原式={% katex %}\lim_{x \to +\infty}\frac{100x^{99} }{e^x}  
        =\lim_{x \to +\infty}\frac{9900x^{98} }{e^x}  
        =\lim_{x \to +\infty}\frac{980100x^{97} }{e^x}  
        =\lim_{x \to +\infty}\frac{97029900x^{96} }{e^x}  
        ……  
        =\lim_{x \to +\infty}\frac{100!x^0}{e^x}  
        =0{% endkatex %}  
例题2：求{% katex %}\lim_{x \to 0}\frac{s-\sin x}{x^2 \sin x}{% endkatex %}
解：原式{% katex %}=\lim_{x \to 0}\frac{x-\sin x}{x3}
=\lim_{x \to 0}\frac{1-\cos x}{3x^2}
=\lim_{x \to 0}\frac{\sin x}{6x}
=\lim_{x \to 0}\frac{x}{6x}
=\frac{1}{6}{% endkatex %}
<br />
{% katex %}{\color{Red} x \to 0 时，(x-\sin x)~\frac{1}{6}x^3} {% endkatex %}
<br />
例题3：求{% katex %}\lim_{x \to 0}\frac{\tan x-x}{x-\sin x}{% endkatex %}
解：原式{% katex %}=\lim_{x \to 0}\frac{\frac{1}{\cos ^2x}-1}{1-\cos x}
=\lim_{x \to 0}\frac{1+\cos x}{\cos ^2x}
=\lim_{x \to 0}\frac{1+1}{1}
=2{% endkatex %}
<br />
{% katex %}{\color{Red} x \to 0 时，(\tan x-x)~\frac{1}{3}x^3} {% endkatex %}
<br />
例题4：求{% katex %}\lim_{x \to \frac{\pi}{2} }\frac{e^x \cdot \cos x}{\frac{\pi}{2}-x}{% endkatex %}
使用非0非无穷因子先行带入
解：原式{% katex %}=e^{\frac{\pi}{2} } \lim_{x \to \frac{\pi}{2} }\frac{\cos x}{\frac{\pi}{2}-x}
=e^{\frac{\pi}{2} } \lim_{x \to \frac{\pi}{2} }\frac{-\sin x}{-1}
=e^{\frac{\pi}{2} } \lim_{x \to \frac{\pi}{2} }\frac{-1}{-1}
=e^{\frac{\pi}{2} }{% endkatex %}
例题5：求{% katex %}\lim_{x \to \infty}\frac{\sin x-x \cos x}{x^3 \cos x}{% endkatex %}  
解：原式{% katex %}=\frac{1}{\cos 0} \cdot \lim_{x \to \infty}\frac{\sin x- x \cdot \cos x}{x^3}
=1 \cdot \lim_{x \to \infty}\frac{\cos x- (\cos x -x \cdot \sin x) }{3x^2}
=\lim_{x \to \infty}\frac{x \cdot \sin x}{3x^2}
=\lim_{x \to \infty}\frac{\sin x}{3x}
=\frac{1}{3}{% endkatex %}  
<br />
注意事项：洛完无极限，洛必达法则失效，应采用其他方法计算。  
例题6：求{% katex %}\lim_{x \to \infty}\frac{\sin x+x}{x}{% endkatex %}  
解：原式{% katex %}=\lim_{x \to \infty}\frac{\sin x}{x}+1
=0+1
=1{% endkatex %}  
<br />
注意事项：洛完陷入死循环，洛必达法则失效，应采用其他方法计算。
例题7：求{% katex %}\lim_{x \to \infty}\frac{e^x-e{-x} }{e^+e{-x} }{% endkatex %}  
解：原式{% katex %}上下同除以e^x
=\lim_{x \to \infty}\frac{1+\frac{1}{(e^x)^2} }{1-\frac{1}{(e^x)^2} }
=\frac{1+0}{1-0}
=1{% endkatex %}  
<br />
#### 总结
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311071515278.png)

---
 {% katex %}\frac{0}{0}{% endkatex %}或{% katex %}\frac{\infty}{\infty}{% endkatex %} 型
 {% katex %}lim{\frac{f(x)}{g(x)}}=lim{\frac{f'(x)}{g'(x)}}=lim{\frac{f''(x)}{g''(x)}}=……=A{% endkatex %}
注意：
1. 分子分母各自同时求导；
2. 洛必达法则一般配合等价使用；
！！万事不对洛必达

---
### 导数在研究函数中的应用
#### 切线方程与法线方程
函数在某一点处的导数的几何意义即在该点处切线的**斜率**。  
**法线和切线垂直**，如果两条直线垂直，那么**斜率之积=-1**。  
确定直线方程：如果只给了一个点{% katex %}(x_0,y_0){% endkatex %}，只要确定了斜率{% katex %}k{% endkatex %}，那么直线方程为（点斜式）{% katex %}y-y_0=k(x-x_0){% endkatex %}  
{% katex %} k_切=f'(x_0), K_法=-\frac{1}{f'(x_0) }{% endkatex %}  
求切线方程和法线方程的解题步骤：
    (1). 求{% katex %}y_0{% endkatex %}；  
    (2). 求{% katex %}f'(x_0){% endkatex %}；  
        a. 先求{% katex %}f'(x){% endkatex %}，再将{% katex %}x_0{% endkatex %}代入；  
        b. 用导数定义式直接求。  
    (3). 带入点斜式直线方程；  
        a. 切线方程{% katex %}y-y_0=f'(x_0)(x-x_0){% endkatex %}；  
        b. 法线方程{% katex %}y-y_0=-\frac{1}{f'(x_0) } (x-x_0){% endkatex %}；  
例题1：求函数{% katex %}f(x)=x^2-3x+1{% endkatex %}在点{% katex %}(1,-1) {% endkatex %}处的切线方程和法线方程。  
解：
{% katex %}f'(x)=2x-3{% endkatex %}  
当{% katex %}x=1{% endkatex %}时，{% katex %}f'(x)=2 \cdot 1-3=-1{% endkatex %}  
切线方程{% katex %}y-(-1)=-1(x-1){% endkatex %}  
{% katex %}y=-x{% endkatex %}  
法线方程{% katex %}y-(-1)=-\frac{1}{-1}(x-1){% endkatex %}  
{% katex %}y=x-2{% endkatex %}  
例题2：求函数{% katex %}y=2e^x{% endkatex %}在{% katex %}x=0{% endkatex %}处的切线方程和法线方程。   
解：
**如果题目只告诉了x，那这个x带入原方程求y**  
{% katex %}y=2e^0=2{% endkatex %}
{% katex %}f'(x)=2e^x{% endkatex %}
当{% katex %}x=0{% endkatex %}时，{% katex %}f'(x_0)=2e^0=2{% endkatex %}
切线方程{% katex %}y-2=2(x-0){% endkatex %}  
{% katex %}y=2x+2{% endkatex %}  
法线方程{% katex %}y-2=-\frac{1}{2}(x-0){% endkatex %}  
{% katex %}y=-\frac{1}{2}x+2{% endkatex %}  
例题3：若函数{% katex %}f(x)=1-x^3{% endkatex %}与函数{% katex %}g(x)=lnx{% endkatex %}在{% katex %}y=a{% endkatex %}处的切线互相垂直，则({% katex %}a=\frac{1}{3}{% endkatex %})。  
解：
{% katex %}K_f \cdot K_g=-1{% endkatex %}  
{% katex %}f'(a)=-3a^2{% endkatex %}  
{% katex %}g'(a)=\frac{1}{a}{% endkatex %}  
{% katex %}f'(a) \cdot g'(a)=-3a^2 \cdot \frac{1}{a}=-3a=-1{% endkatex %}  
{% katex %}a=\frac{1}{3}{% endkatex %}

---
#### 函数的单调性
|   导数    | 函数单调性 |
|:-------:|:-----:|
| f'(x)>0 | 单调增加  |
| f'(x)<0 | 单调减少  |

当{% katex %}f'(x)=0{% endkatex %}或{% katex %}f'(x){% endkatex %}不存在时，单调性？  
当{% katex %}f'(x)=0{% endkatex %}时称为驻点，驻点两侧单调性可能相同也可能不同；  
当{% katex %}f'(x){% endkatex %}不存在时，两侧单调性可能相同也可能不同。  
<br />
求函数单调区间的步骤：  
(1). 求函数{% katex %}f(x){% endkatex %}的定义域，并得到间断点；  
(2). 求导函数{% katex %}f'(x){% endkatex %}；    
(3). 求驻点和不可导点，用驻点，不可导点，间断点把定义域分成若干区间；  
(4). 列表讨论每个区间内{% katex %}f'(x){% endkatex %}的正负，写出单调区间；  
例题1：求函数{% katex %}f(x)=x+\frac{1}{x}{% endkatex %}的单调区间。  
解：
函数的定义域为{% katex %}(-\infty,0)\cup (0,+\infty){% endkatex %}  
间断点为{% katex %}x=0{% endkatex %}  
{% katex %}f'(x)=1-\frac{1}{x^2}{% endkatex %}  
{% katex %}f'(x)=0{% endkatex %}时，{% katex %}x=1{% endkatex %}或{% katex %}x=-1{% endkatex %}以及不可导点{% katex %}x=0{% endkatex %}    

|       | (-∞,-1) | -1 | (-1,0) | 0 | (0,1) | 1 | (1,+∞) |
|:-----:|:-------:|:--:|:------:|:-:|:-----:|:-:|:------:|
| f'(x) |    +    | 0  |   -    | × |   -   | 0 |   +    |
| f(x)  |   单增    |    |   单减   |   |  单减   |   |   单增   |
由上表可知，单增{% katex %}(-\infty,-1){% endkatex %}和{% katex %}(1,+\infty){% endkatex %}；  
单减{% katex %}(-1,0){% endkatex %}和{% katex %}(0,1){% endkatex %}； 
<br />
利用单调性证明不等式：  
解题步骤：
(1). 构造函数{% katex %}F(x)=左边-右边{% endkatex %}；  
(2). 求导函数{% katex %}F'(x){% endkatex %}，并判断正负；  
(3). 根据{% katex %}F'(x){% endkatex %}的正负判定{% katex %}F(x){% endkatex %}的单调性；  
(4). 解出区间端点函数值（通常为0），根据单调性即得{% katex %}F(x)>0{% endkatex %}或{% katex %}F(x)<0{% endkatex %}；  
例题2：证明{% katex %}x>0{% endkatex %}时，{% katex %}\ln (1+x)<x{% endkatex %}。  
证明：构造函数{% katex %}F(x)=\ln (1+x)-x{% endkatex %}  
{% katex %}F'(x)=\frac{1}{1+x}-1=\frac{1-(1+x)}{1+x}{% endkatex %}  
当{% katex %}F'(x)>0{% endkatex %}时，{% katex %}F(x)<0{% endkatex %}  
{% katex %}\therefore F(0)=0{% endkatex %}在{% katex %}[0,+\infty){% endkatex %}上单调减少。    
{% katex %}F(x)>0{% endkatex %}时，{% katex %}F(x)<F(0)=\ln (1+0)-0=0{% endkatex %}  
即{% katex %}\ln (1+x)-x<0{% endkatex %}
即{% katex %}\ln (1+x)<x{% endkatex %}
例题3：证明{% katex %}x>\sin x{% endkatex %}，{% katex %}x\in (0,\pi){% endkatex %}。  
证明：构造函数{% katex %}F(x)=x-\sin x{% endkatex %}  
{% katex %}F'(x)=1-\cos x{% endkatex %}  
当{% katex %}x \in (0, \pi),F'(x)>0{% endkatex %}  
{% katex %}\therefore F(x){% endkatex %}在{% katex %}[0,\pi){% endkatex %}上单调增加。  
当{% katex %}x \in (0,\pi){% endkatex %}时，{% katex %}F(x)>F(0)=0-\sin 0=0{% endkatex %}  
即{% katex %}x-\sin x>0{% endkatex %}  
即{% katex %}x>\sin x{% endkatex %}  

--- 
#### 函数曲线的凹凸性
![图像的凹凸性](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311091646637.png)

连续曲线凹与凸的分界点称为曲线的拐点。  
凸区间上斜率逐渐减少—>{% katex %}f(x)'{% endkatex %}单调减少—>{% katex %}f(x)''<0{% endkatex %}  
凹区间上曲线的斜率逐渐增加—>{% katex %}f(x)'{% endkatex %}单调增加—>{% katex %}f(x)''>0{% endkatex %}  

|               二阶导数                | 凹凸性 |
|:---------------------------------:|:---:|
| {% katex %}f''(x)>0{% endkatex %} |  凹  |
| {% katex %}f''(x)<0{% endkatex %} |  凸  |

不要和函数单调性搞混淆！！！  
口诀：  
一阶导，大增小减；  
二阶导，大凹小凸；  

求函数凹凸区间和拐点的步骤（对比单调区间四步骤）：  
(1). 求函数{% katex %}f(x){% endkatex %}的定义域，并得到间断点；  
(2). 求导函数{% katex %}f'(x){% endkatex %}；  
(3). 求二阶导函数{% katex %}f''(x){% endkatex %}；  
(4). 求{% katex %}f''(x)=0{% endkatex %}的点和{% katex %}f''(x){% endkatex %}不存在的点，用这个点把定义域分成若干区间；  
(5). 列表讨论每个区间内{% katex %}f''(x){% endkatex %}的正负，写出凹凸区间；  
注意：**拐点是曲线上的点，拐点两侧{% katex %}f(x)''{% endkatex %}必定异号**  

例题1：求函数{% katex %}f(x)=x^4-2x^3+3{% endkatex %}的凹凸区间和拐点。  
解：定义域为{% katex %}(-\infty,+\infty){% endkatex %}  
{% katex %}f'(x)=4x^3-6x^2{% endkatex %}  
{% katex %}f''(x)=12x^2-12x{% endkatex %}  
{% katex %}f''(x)=0{% endkatex %}时，{% katex %}x=0{% endkatex %}或{% katex %}x=1{% endkatex %}  

|        | (-∞,0) | 0 | (0,1) | 1 | (1,+∞) |
|:------:|:------:|:-:|:-----:|:-:|:------:|
| f'‘(x) |   +    | 0 |   -   | 0 |   +    |
|   曲线   |   凹    |   |   凸   |   |   凹    |
由上表可知，凹区间为{% katex %}(-\infty,0){% endkatex %}和{% katex %}(0,1){% endkatex %}；  
凸区间为{% katex %}(0,1){% endkatex %}和{% katex %}(1,+\infty){% endkatex %}；  
拐点：当{% katex %}x=0{% endkatex %}时，{% katex %}f(0)=3{% endkatex %}；  
当{% katex %}x=1{% endkatex %}时，{% katex %}f(1)=2{% endkatex %}；
拐点为：{% katex %}(0,3){% endkatex %}和{% katex %}(1,2){% endkatex %}。  
例题2：求函数{% katex %}f(x)=\sqrt[3]{x}{% endkatex %}的凹凸区间和拐点。  
解：定义域为{% katex %}[-\infty,+\infty){% endkatex %}  
{% katex %}f'(x)=\frac{1}{3}x^{-\frac{2}{3} }{% endkatex %}  
{% katex %}f''(x)=-\frac{2}{9}x^{-\frac{5}{3} }{% endkatex %}  
{% katex %}f''(x)=0{% endkatex %}时，{% katex %}x=0{% endkatex %}  
令{% katex %}f''(x)=0{% endkatex %}，无解；  
{% katex %}f''(x)不存在的点为x=0{% endkatex %}  

|        | (-∞,0) |  0  | (0,+∞) |
|:------:|:------:|:---:|:------:|
| f'‘(x) |   +    | 不存在 |   -    |
|   曲线   |   凹    |     |   凸    |
由上表可知，凹区间为{% katex %}(-\infty,0){% endkatex %}；  
凸区间为{% katex %}(0,+\infty){% endkatex %}；  
当{% katex %}x=0{% endkatex %}时，{% katex %}f(0)=0{% endkatex %}；  
其拐点为{% katex %}(0,0){% endkatex %}。  

例题3：函数{% katex %}f(x)=x^4{% endkatex %}上的拐点有（D）。   
A、1个 B、2个 C、3个 D、0个   
解：{% katex %}f'(x)=4x^3{% endkatex %}  
{% katex %}f''(x)=12x^2{% endkatex %}  
{% katex %}f''(x)=0{% endkatex %}时，{% katex %}x=0{% endkatex %}  

|        | (-∞,0) |  0  | (0,+∞) |
|:------:|:------:|:---:|:------:|
| f'‘(x) |   +    | 不存在 |   +    |
|   曲线   |   凹    |     |   凹    |
由上表得：该函数无拐点。  

例题4：函数{% katex %}f(x)=\frac{1}{x}{% endkatex %}的拐点有（D）。  
A、1个 B、2个 C、3个 D、0个  
解：{% katex %}f'(x)=-\frac{1}{x^2}{% endkatex %}  
{% katex %}f''(x)=\frac{2}{x^3}{% endkatex %}  
{% katex %}f''(x)=0{% endkatex %}时，不存在；  
该函数无拐点。  
注意：**拐点一定是{% katex %}f'(x)=0{% endkatex %}或者{% katex %}(x)''{% endkatex %}不存在的点，。但{% katex %}f(x)''{% endkatex %}不存在的点不一定是拐点**  

---
#### 函数的极值和最值问题
一个区域内，**最值**只有`1个`，**极值**可以有`多个`；  
极值是*局部区域内的最值*；  
极值*不可在端点处取得*，只能在*区域内部*取得。  
1. 极值定理  
   (1). 必要条件定理  
若函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处取得极值且在此处可导，则{% katex %}f'(x_0)=0{% endkatex %}(**极值+可导—>驻点**)。  
   (2). 第一充分条件定理  
设函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处连续且在{% katex %}x_0{% endkatex %}的邻域内可导，  
若{% katex %}x_0{% endkatex %}左侧{% katex %}f'(x)>0{% endkatex %}，右侧{% katex %}f'(x)<0{% endkatex %}，则函数{% katex %}f(x){% endkatex %}在{% katex %}x_0{% endkatex %}处取得极大值(**左增右减—>极大值**)；  
若{% katex %}x_0{% endkatex %}左侧{% katex %}f'(x)<0{% endkatex %}，右侧{% katex %}f'(x)>0{% endkatex %}，则函数{% katex %}f(x){% endkatex %}在{% katex %}x_0{% endkatex %}处取得极小值(**左减右增—>极小值**)；  
若{% katex %}x_0{% endkatex %}左右两侧{% katex %}f'(x){% endkatex %}同号，则函数{% katex %}f(x){% endkatex %}在{% katex %}x_0{% endkatex %}处无极值(**左增右增/左减右减—>无极值**)。  
   (3). 第二充分条件定理  
设函数{% katex %}f(x){% endkatex %}在点{% katex %}x_0{% endkatex %}处{% katex %}f'(x_0)=0,f''(x_0)\ne 0{% endkatex %}，  
若{% katex %}f''(x_0)<0{% endkatex %}，则函数{% katex %}f(x){% endkatex %}在{% katex %}x_0{% endkatex %}处取得极大值(**驻点+凸—>极大值**)；  
若{% katex %}f''(x_0)>0{% endkatex %}，则函数{% katex %}f(x){% endkatex %}在{% katex %}x_0{% endkatex %}处取得极小值(**驻点+凹—>极小值**)；  
**因为极值也可能在不可导点处取得，所以只能正推不能反推，即不是充要条件。**  
求函数极值的步骤：  
   (1). 求函数{% katex %}f(x){% endkatex %}的定义域；  
   (2). 求一阶导{% katex %}f'(x){% endkatex %};  
   (3). 求{% katex %}f'(x)=0{% endkatex %}的点和{% katex %}f'(x){% endkatex %}不存在的点；  
   (4). 判断是否是极值，以及是极大值还是极小值：
a. {% katex %}f'(x){% endkatex %}不存在的点只能使用第一充分条件定理判断(列表看{% katex %}f'(x){% endkatex %}正负)；  
b. {% katex %}f'(x)=0{% endkatex %}的点可以使用第一或第二充分条件定理判断(带入{% katex %}f''(x){% endkatex %}看正负)；  
例题1： 求函数{% katex %}f(x)=2x^3-6x^2-18x-7{% endkatex %}的极值。  
解：定义域为{% katex %}(-\infty,+\infty){% endkatex %}  
{% katex %}f'(x)=6x^2-12x-18{% endkatex %}  
令{% katex %}f'(x)=0{% endkatex %}，得{% katex %}x_1=-1,x_2=3{% endkatex %}  
使用第二充分条件  
{% katex %}f''(x)=12x-12{% endkatex %}  
当{% katex %}x=-1{% endkatex %}时，{% katex %}f''(-1)=-24<0{% endkatex %}，故{% katex %}x=-1{% endkatex %}为极大值点；  
极大值为{% katex %}f(-1)=2 \cdot (-1)^3-6 \cdot (-1)^2-18 \cdot(-1) -7=3{% endkatex %}   
当{% katex %}x=3{% endkatex %}时，{% katex %}f''(x)24>0{% endkatex %}，故{% katex %}x=3{% endkatex %}为极小值点；
极小值为{% katex %}f(3)=2 \cdot 3^3-6 \cdot 3^2-18 \cdot 3-7=54-54-54-7=-61{% endkatex %}  
例题2：求函数{% katex %}f(x)=x-\frac{3}{2}x^{\frac{2}{3} }+\frac{1}{2}{% endkatex %}  
解：定义域为{% katex %}(-\infty,+\infty){% endkatex %}  
{% katex %}f'(x)=1-x^{-\frac{1}{3} }{% endkatex %}  
令{% katex %}f'(x)=0{% endkatex %}，得{% katex %}x=1{% endkatex %}且得到不可导点{% katex %}x=0{% endkatex %}  
解{% katex %}1-\frac{1}{\sqrt[3]{x} }{% endkatex %}  

|       |               (-∞,0)               | 0  |               (0,1)                | 1  |               (1,+∞)               |
|:-----:|:----------------------------------:|:--:|:----------------------------------:|:--:|:----------------------------------:|
| f'(x) |                 +                  | ×  |                 -                  | 0  |                 +                  |
| f(x)  | {% katex %}\nearrow {% endkatex %} | 极大 | {% katex %}\searrow {% endkatex %} | 极小 | {% katex %}\nearrow {% endkatex %} |
由上表可知，当{% katex %}x=0 {% endkatex %}时取得极大值，即{% katex %}f(0)=\frac{1}{2} {% endkatex %}；  
当{% katex %}x=1 {% endkatex %}时取得极小值，即{% katex %}f(1)=0 {% endkatex %}；
<br />
1. 最值
求闭区间内函数的最值：  
   (1). 求一阶导{% katex %}f'(x){% endkatex %}；  
   (2). 求所有{% katex %}f'(x)=0{% endkatex %}的点和{% katex %}f'(x){% endkatex %}不存在的点以及端点的函数值；  
   (3). 比较这些函数值的大小，最大的就是最大值，反之。  
例题1：求函数{% katex %}f(x)=x-\frac{3}{2}x^{\frac{2}{3} }+\frac{1}{2}{% endkatex %}在[-1,8]上的最值。  
解：{% katex %}f'(x)=1-x^{-\frac{1}{3} }{% endkatex %}  
令{% katex %}f'(x)=0{% endkatex %}，得{% katex %}x=1{% endkatex %}且得到不可导点{% katex %}x=0{% endkatex %}  
{% katex %}f(1)=0,f(0)=\frac{1}{2},f(-1)=-2,f(8)=\frac{5}{2} {% endkatex %}  
比较得：最大值为{% katex %}f(8)=\frac{5}{2} {% endkatex %}，最小值为{% katex %}f(-1)=-2 {% endkatex %}  
<br />
求实际问题的最值：
   (1). 要谁最大(小)为{% katex %}y{% endkatex %}，要调整的为{% katex %}x{% endkatex %}，建立目标函数，确定自变量取值范围；  
   (2). 求目标函数驻点，若驻点唯一，则根据实际问题最值一定存在确定此驻点即为极值点。   

例题1：如图：在半径为{% katex %}r{% endkatex %}的半圆内做一个内接矩形，矩形的长和宽为多少时能使矩形面积最大？
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311101646682.png)
解：设面积为{% katex %}y{% endkatex %}，长为{% katex %}x{% endkatex %}，则宽为{% katex %}\sqrt{r^2-(\frac{x}{2})^2 }{% endkatex %}  
建立目标函数{% katex %}y=x \cdot \sqrt{r^2-(\frac{x}{2})^2 }{% endkatex %}  
{% katex %}y=\sqrt{r^2\cdot x^2-\frac{1}{4}x^4 }{% endkatex %}  
{% katex %}y'=\frac{1}{4}\cdot \frac{zr^2x-x^3}{\sqrt{r^2x^2-\frac{1}{4}x^4 } }{% endkatex %}时，{% katex %}x=\frac{2}{\sqrt{3} }r{% endkatex %}  
令{% katex %}y'=0{% endkatex %}，故{% katex %}x=\sqrt{2}r{% endkatex %}  
{% katex %} \therefore {% endkatex %}当矩形长为{% katex %}x=\sqrt{2}r{% endkatex %}，宽为{% katex %}\frac{\sqrt{2} }{2}r{% endkatex %}时，矩形面积最大。  

例题2：如图，需要造圆柱形油罐，体积为{% katex %}V{% endkatex %}，问底半径{% katex %}r{% endkatex %}和高{% katex %}h{% endkatex %}各为多少时，才能使表面积 最小？这时底直径与高之比是多少？
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311101704201.png)
解：设表面积为{% katex %}y{% endkatex %}，底半径为{% katex %}r{% endkatex %}，则高为{% katex %}\frac{V}{\pi r^2}{% endkatex %}  
建立目标函数{% katex %}y=2\pi r^2+\frac{2V}{r}{% endkatex %}  
{% katex %}y'=4\pi r-\frac{2V}{r^2}{% endkatex %}
令{% katex %}y'=0{% endkatex %}，故{% katex %}r=\sqrt[3]{\frac{V}{2\pi } }{% endkatex %}  
{% katex %}r^3=\frac{V}{2 \pi} = V=r^3 \cdot 2\pi{% endkatex %}  
{% katex %}h=\frac{V}{\pi r^2}=\frac{r^3 \cdot 2\pi}{\pi r^2}=2r=2\sqrt[3]{\frac{V}{2\pi}}{% endkatex %}  
{% katex %}\because {% endkatex %}驻点唯一，且为实际应用题  
{% katex %}\therefore {% endkatex %}当{% katex %}r=\sqrt[3]{\frac{V}{2\pi} },h=2\sqrt[3]{\frac{V}{2\pi}} {% endkatex %}时表面积为最小值。  
直径与高的比是{% katex %}\frac{2r}{h}=\frac{1}{1}{% endkatex %}  
答：……  

---
#### 函数曲线的渐近线
曲线上的一动点，沿着曲线**趋近于无穷远**时，该点与某直线的**距离趋近于零**，则称此直线为曲线的渐近线。  
水平渐近线：如果渐近线是水平的，称为水平渐近线。  
垂直渐近线(铅锤渐近线)：如果渐近线是垂直的，称为垂直渐近线。  
*斜渐近线：如果渐近线是斜的，称为斜渐近线。*   
<br />
渐近线的求法：  
1. 水平渐近线  
实质=求趋于无穷时的极限；
方法：求{% katex %}x \to \infty{% endkatex %}或{% katex %}x \to +\infty{% endkatex %}或{% katex %}x \to -\infty{% endkatex %}时函数的极限，若极限存在（假设等于A），则直线{% katex %}"y=A"{% endkatex %}即为水平渐近线；  
2. 垂直渐近线  
实质=找到无穷间断点；  
方法：找出不满足定义域的点{% katex %}x_0{% endkatex %}，求{% katex %}x \to x_0{% endkatex %}或{% katex %}x \to x_0^+{% endkatex %}或{% katex %}x \to x_0^-{% endkatex %}时函数的极限，若极限为{% katex %}\infty{% endkatex %}，则直线{% katex %}"x=x_0"{% endkatex %}即为垂直渐近线；  
3. 斜渐近线
实质=；
注意：**曲线的渐近线可能有多条，也可能不存在**。  
例题1：求曲线{% katex %}y=\frac{3x^2+1}{x^2+2x-3}{% endkatex %}的水平渐近线和垂直渐近线。  
解：{% katex %}\lim_{x \to \infty} \frac{3x^2+1}{x^2+2x-3} =3{% endkatex %}
即函数的水平渐近线为{% katex %}y=3{% endkatex %}  
{% katex %}\because x^2+2x-3 \ne 0{% endkatex %}  
{% katex %}\therefore {% endkatex %}函数间断点{% katex %}x=-3,x=1{% endkatex %}  
{% katex %}\because \lim_{x \to -3} \frac{3x^2+1}{x^2+2x-3}=\infty {% endkatex %}  
{% katex %}\because \lim_{x \to 1} \frac{3x^2+1}{x^2+2x-3}=\infty {% endkatex %}  
{% katex %}\therefore {% endkatex %}函数的垂直渐近线为{% katex %}x=-3,x=1{% endkatex %}  
例题2：曲线{% katex %}y=\frac{e^x-1}{x}{% endkatex %}（A ）。  
A. 仅有水平渐近线  
B. 仅有垂直渐近线  
C. 既有水平渐近线又有垂直渐近线  
D. 既无水平渐近线也无垂直渐近线  
解：水平渐近线：{% katex %}\lim_{x \to -\infty} \frac{e^x-1}{x}=\frac{-1}{-\infty}=0{% endkatex %}，即水平渐近线为{% katex %}y=0{% endkatex %}  
水平渐近线：{% katex %}\lim_{x \to +\infty} \frac{e^x-1}{x}=+\infty{% endkatex %}，无极限。    
垂直渐近线：{% katex %}\frac{e^x-1}{x}{% endkatex %}，有{% katex %}x \ne 0{% endkatex %}；  
{% katex %}\lim_{x \to 0} \frac{e^x-1}{x}=1{% endkatex %}，即无垂直渐近线。  

---
#### 导数习题
例题1. 曲线{% katex %}xy+e^{y^2}-x=0{% endkatex %}在点{% katex %}(1,0){% endkatex %}处的切线方程为（{% katex %}y=x-1{% endkatex %}）。  
解：{% katex %}y+xy'+e^{y^2} \cdot 2y \cdot y'-1=0{% endkatex %}  
{% katex %}y'=-\frac{1-y}{x+e^{y^2}\cdot 2y}{% endkatex %}  
{% katex %}y'|(1,0)=\frac{1-0}{1+0}=1{% endkatex %}  
切线方程为{% katex %}y-0=1(x-1){% endkatex %}，即{% katex %}y=x-1{% endkatex %}  
例题2. 函数{% katex %}f(x)=e^{x^2}{% endkatex %}的单调区间和极值。 
解：函数的定义域为{% katex %}(-\infty,+\infty){% endkatex %}  
{% katex %}f'(x)=2xe^{x^2}{% endkatex %}
令{% katex %}f'(x)=0{% endkatex %}得{% katex %}x=0{% endkatex %}  
{% katex %}f''(x)=2e^{x^2}+4x^2e^{x^2}{% endkatex %}  

|       |               (-∞,0)                | 0  |               (0,+∞)               |
|:-----:|:-----------------------------------:|:--:|:----------------------------------:|
| f'(x) |                  -                  | 0  |                 +                  |
| f(x)  | {% katex %}\searrow  {% endkatex %} | 极小 | {% katex %}\nearrow {% endkatex %} |
由上表可知，函数在{% katex %}(-\infty,0){% endkatex %}上单调增加，在{% katex %}(0,+\infty){% endkatex %}上单调减少；  
极值为{% katex %}x=0{% endkatex %}，即{% katex %}f(x)=e^0=1{% endkatex %}  

例题3. 证明{% katex %}x>0{% endkatex %}时，{% katex %}1+\frac{1}{2}x>\sqrt{1+x}{% endkatex %}。  
证明：构造函数{% katex %}F(x)=1+\frac{1}{2}x-\sqrt{1+x}{% endkatex %}  
{% katex %}F'(x)=\frac{1}{2}-\frac{1}{2\sqrt{1+x} }=\frac{\sqrt{1+x}-1 }{2\sqrt{1+x} }{% endkatex %}   
当{% katex %}x>0{% endkatex %}时，{% katex %}F'(x)>0{% endkatex %}  
{% katex %}\because F(x){% endkatex %}在{% katex %}[0,+\infty){% endkatex %}上单调增加。  
{% katex %}\therefore {% endkatex %}当{% katex %}x>0{% endkatex %}时，{% katex %}F(x)>F(0)=0{% endkatex %}  
{% katex %}1+\frac{1}{2}x-\sqrt{1+x}>0{% endkatex %}，即{% katex %}1+\frac{1}{2}x>\sqrt{1+x}{% endkatex %}  
例题4. 函数{% katex %}f(x)=ln1+x^2{% endkatex %}的凹区间为（A ）。  
A. {% katex %}(-\infty,-1){% endkatex %}  
B. {% katex %}(-1,1){% endkatex %}  
C. {% katex %}(1,+\infty){% endkatex %}  
D. {% katex %}(-\infty,-1)，(1,+\infty){% endkatex %}  
解：定义域为{% katex %}(-\infty,+\infty){% endkatex %}，  
{% katex %}f'(x)=\frac{2x}{1+x^2}{% endkatex %}，  
{% katex %}f''(x)=\frac{2\cdot (1+x^2)-2x\cdot 2x}{(1+x^2)^2}=\frac{2-2x^2}{(1+x^2)^2}{% endkatex %}  
令{% katex %}f''(x)=0{% endkatex %}，得{% katex %}x=-1{% endkatex %}或{% katex %}x=1{% endkatex %}  

|       | (-∞,-1) | -1 | (-1,1) | 1 | (1,+∞) |
|:-----:|:-------:|:--:|:------:|:-:|:------:|
| f'(x) |    -    | 0  |   +    | 0 |   -    |
|  曲线   |    凸    |    |   凹    |   |   凸    |

例题5. 某地区防空洞的截面拟建成矩形加半圆，截面的面积为{% katex %}5m^2{% endkatex %}，问底和宽{% katex %}x{% endkatex %}为多少时才能使截面的周长最小？从而使建造的材料最省。  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311111452726.png)  
解：设截面周长为{% katex %}L{% endkatex %}，  
则构造函数{% katex %}L=x+2y+\frac{\pi x}{2}{% endkatex %}  
由题可知，界面面积{% katex %}5m^2{% endkatex %}，  
所以{% katex %}5=xy+\frac{1}{8}\pi x^2{% endkatex %}  
得{% katex %}y=\frac{5-\frac{1}{8}\pi x^2}{x}=\frac{5}{x}-\frac{\pi x}{8}{% endkatex %}  
即{% katex %}L=x+2(\frac{5}{x}-\frac{\pi x}{8})+\frac{\pi x}{2}=x+\frac{\pi }{4}x+\frac{10}{x}{% endkatex %}    
{% katex %}L'=1+\frac{\pi }{4}-\frac{10}{x^2}{% endkatex %}  
令{% katex %}L'=0{% endkatex %}，得{% katex %}x=\sqrt{\frac{40}{4+\pi } }{% endkatex %}  
{% katex %}\because {% endkatex %}驻点唯一，且为实际问题；  
{% katex %}\therefore {% endkatex %}当{% katex %}x=\sqrt{\frac{40}{4+\pi } }{% endkatex %}时，{% katex %}L{% endkatex %}取得最小值。  
{% katex %}\therefore {% endkatex %}当{% katex %}x=\sqrt{\frac{40}{4+\pi } }{% endkatex %}时，截面周长最小。  
{% katex %}\therefore {% endkatex %}当{% katex %}x=\sqrt{\frac{40}{4+\pi } }{% endkatex %}时，建造的材料最省。  

---
## 三、一元函数积分学  
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
(a). {% katex %}{\color{Purple} \cos 2x=\cos^2x-\sin^2x=2\cos^2x-1=1-2\sin^2x} {% endkatex %}  
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
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311201410350.png)

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
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311211806135.png)  
选择x型图  
{% katex %}S=\int_{1}^{2}(x^2-\frac{1}{x})dx{% endkatex %}  
{% katex %}=\frac{1}{3}x^3-\ln x|\begin{matrix}2\\1\end{matrix}{% endkatex %}  
{% katex %}=(\frac{8}{3}-\ln 2)-(\frac{1}{3}-\ln 1){% endkatex %}  
{% katex %}=\frac{7}{3}-\ln 2{% endkatex %}    
例题2：求由曲线{% katex %}y=x^2{% endkatex %}与{% katex %}y=\sqrt{x}{% endkatex %}所围成的图形面积。  
解：  
联立两个方程{% katex %}\left\{\begin{matrix}y=x^2\\y=\sqrt{x} \end{matrix}\right.{% endkatex %}  
联立{% katex %}x^2=\sqrt{x}{% endkatex %}，得交点{% katex %}(0,0),(1,1){% endkatex %}   
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311211819074.png)  
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
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311221416806.png)   
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
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311221448562.png)
公式：{% katex %}V=2\pi \int_{a}^{b}x\cdot f(x)dy{% endkatex %}   
例题1：求由函数{% katex %}y=\sin x，0\le x\le \pi {% endkatex %}与{% katex %}x{% endkatex %}轴所围成的图形绕y轴旋转一周所得旋转体积。   
解：  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311221512865.png)  
{% katex %}V=2\pi \int_{a}^{b}x \cdot f(x)dx{% endkatex %}  
{% katex %}=2\pi \int_{0}^{\pi}x\cdot \sin xdx{% endkatex %}  
{% katex %}=-2\pi \int_{0}^{\pi}x d\cos x{% endkatex %}  
{% katex %}=-2\pi (x\cdot \cos x|\begin{matrix}\pi\\0\end{matrix}-\int_{0}^{\pi}\cos xdx){% endkatex %}  
{% katex %}=-2\pi (\pi \cdot \pi-\sin x|\begin{matrix}\pi\\0\end{matrix}){% endkatex %}  
{% katex %}=-2\pi (\pi \cdot (-1)-0{% endkatex %}  
{% katex %}=2\pi ^2{% endkatex %}  
例题2：求由函数{% katex %}y=\sqrt{x}{% endkatex %}与{% katex %}x=4{% endkatex %}及x轴所围成的面积和绕y轴旋转一周所得旋转体积。  
解：  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311221528323.png)
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