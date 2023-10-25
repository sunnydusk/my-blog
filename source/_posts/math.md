---
title: 高等数学
hexo-math: true
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
### 左导数与右导数
#### 左、右导数定义
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

#### 函数的求导方法

---
### 微分中值定理
### 洛必达法则

---
 {% katex %}\frac{0}{0}{% endkatex %}或{% katex %}\frac{\infty}{\infty}{% endkatex %} 型
 {% katex %}lim{\frac{f(x)}{g(x)}}=lim{\frac{f'(x)}{g'(x)}}=lim{\frac{f''(x)}{g''(x)}}=……=A{% endkatex %}
注意：
1. 分子分母各自同时求导；
2. 洛必达法则一般配合等价使用；
！！万事不对洛必达
### 导数在研究函数中的应用
