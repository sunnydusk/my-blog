---
title: 高等数学-微分
top: 19
hexo-math: true
type: "categories"
categories: 
  - 专升本
tags:
  - 学习资料
  - math
date: 2023-10-20 09:36:00
---
## 一元函数微分学**
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251015134.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251015912.png)
例题：
若{% katex %}f'(x_0)=1,f(x_0)=0{% endkatex %}，则{% katex %}\lim_{h \to \infty} hf(x_0-\frac{1}{h}){% endkatex %}=______-1____.
解：令{% katex %}\Delta x=\frac{1}{h}{% endkatex %}
原式={% katex %}\lim_{\Delta x \to 0} \frac{f(x_0-\Delta x)-f(x_0)}{\Delta x}=-f'(x_0)=-1{% endkatex %}
##### 导函数的定义
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251016093.png)

---
##### 结论
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251016677.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251016233.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251017515.png)

---
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
---
##### 导数定义，求函数{% katex %}f(x){% endkatex %}在某点的导数
特点：此时的{% katex %}f(x){% endkatex %}为复杂的多项式，乘积形式；
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251017456.png)

---
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251018054.png)

#### 基本导数公式和四则运算求导法则
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251018535.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310251018295.png)

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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310281515928.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310281604406.png)
例题1：求{% katex %}\sqrt{\frac{(x-1)(x-2)}{(x-3)(x-4)} } {% endkatex %}的导数。  
解：原式={% katex %}lny=ln(\frac{(x-1)(x-2)}{(x-3)(x-4)} )^\frac{1}{2}=\frac{1}{2} ln\frac{(x-1)(x-2)}{(x-3)(x-4)}  {% endkatex %}  
={% katex %}\frac{1}{2}(ln(x-1)+ln(x-2)-ln(x-3)-ln(x-4) ) {% endkatex %}
={% katex %}2\frac{y'}{y}=\frac{1}{x-1}+\frac{1}{x-2}-\frac{1}{x-3}-\frac{1}{x-4}{% endkatex %}
={% katex %}y'=\frac{y}{2}(\frac{1}{x-1}+\frac{1}{x-2}-\frac{1}{x-3}-\frac{1}{x-4}) {% endkatex %}
![例题2](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310291425147.png)
7.课堂总结
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310291427077.png)

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
![常用高阶求导公式](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310291505621.png)
例题4：设函数{% katex %}y=x^{2000}+e^x+\cos x{% endkatex %}，则{% katex %}y^{(2025)}=e^x-\sin x{% endkatex %}
(3).由参数方程确定的函数二阶导数
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310291519838.png)
![求导方法](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202310291519312.png)
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
![证明](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041628652.png)
1. *微分的定义*：如果函数的增量{% katex %}\Delta y=f(x_0+\Delta x)-f(x_0){% endkatex %}可以表示为
   {% katex %}\Delta y=A \cdot \Delta x+o(\Delta x){% endkatex %}  
   其中A是不依赖与{% katex %}\Delta x{% endkatex %}的常数，那么称函数{% katex %}y=f(x)在点x_0{% endkatex %}是**可微**的，而{% katex %}A \cdot \Delta x{% endkatex %}即为函数在该点的微分，记作：  
   {% katex %}dy=A \cdot \Delta x{% endkatex %}  
   或{% katex %}dy=A \cdot \Delta x{% endkatex %}(其中{% katex %}dx{% endkatex %}是自变量的微分)  
   {% katex %}函数可导\longleftarrow等价 \longrightarrow 函数可微{% endkatex %}
2. 基本微分公式及微分运算法则  
   ![基本公式](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041648546.png)
   ![运算法则](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041649949.png)

---
### 微分中值定理
#### 罗尔中值定理
如果函数{% katex %}f(x){% endkatex %}满足以下条件 **（缺一不可）**：
1. 在闭区间{% katex %}[a,b]{% endkatex %}上连续；
2. 在开区间{% katex %}(a,b){% endkatex %}上可导；
3. {% katex %}f(a)=f(b){% endkatex %}；  
   则在开区间{% katex %}(a,b){% endkatex %}上至少存在一点{% katex %}\xi{% endkatex %}，使得{% katex %}f'(\xi)=0{% endkatex %}  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041700161.png)  
   ![生活实例](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041704450.png)
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
   ![答案](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041744507.png)
   ![标准解题](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311041742778.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311051543530.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311051555408.png)

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
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311051607939.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311051707546.png)

---
#### 柯西中值定理


---
### 洛必达法则
{% katex %}\lim_{x \to x_0/x \to \infty }\frac{f(x)}{g(x)}=  \lim_{x \to x_0/x \to \infty }\frac{f'(x) } {g'(x)} {% endkatex %}   
两函数之商求极限等于两函数导数之商的极限。  
使用洛必达法则的两个前提：

1. {% katex %}f(x),g(x){% endkatex %}同时趋近于0或同时趋近于{% katex %}\infty{% endkatex %}极限为{% katex %} \frac{0}{0} {% endkatex %} 或 {% katex %} \frac{ \infty }{ \infty } {% endkatex %} 的未定式；
2. {% katex %} \lim_{x \to x_0/x \to \infty }\frac{f'(x)}{g'(x)}{% endkatex %}存在或为{% katex %}\infty{% endkatex %}  
   ![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311051756929.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311071515278.png)

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
![图像的凹凸性](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311091646637.png)

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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311101646682.png)
解：设面积为{% katex %}y{% endkatex %}，长为{% katex %}x{% endkatex %}，则宽为{% katex %}\sqrt{r^2-(\frac{x}{2})^2 }{% endkatex %}  
建立目标函数{% katex %}y=x \cdot \sqrt{r^2-(\frac{x}{2})^2 }{% endkatex %}  
{% katex %}y=\sqrt{r^2\cdot x^2-\frac{1}{4}x^4 }{% endkatex %}  
{% katex %}y'=\frac{1}{4}\cdot \frac{zr^2x-x^3}{\sqrt{r^2x^2-\frac{1}{4}x^4 } }{% endkatex %}时，{% katex %}x=\frac{2}{\sqrt{3} }r{% endkatex %}  
令{% katex %}y'=0{% endkatex %}，故{% katex %}x=\sqrt{2}r{% endkatex %}  
{% katex %} \therefore {% endkatex %}当矩形长为{% katex %}x=\sqrt{2}r{% endkatex %}，宽为{% katex %}\frac{\sqrt{2} }{2}r{% endkatex %}时，矩形面积最大。

例题2：如图，需要造圆柱形油罐，体积为{% katex %}V{% endkatex %}，问底半径{% katex %}r{% endkatex %}和高{% katex %}h{% endkatex %}各为多少时，才能使表面积 最小？这时底直径与高之比是多少？
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311101704201.png)
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
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202311111452726.png)  
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
