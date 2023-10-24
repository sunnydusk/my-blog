---
title: 高等数学
mathjax: true
date: 2023-09-22 10:45:00
---
## 一.函数、极限与连续
### 函数
#### 函数三要素：
自变量（x），因变量（y），对应法则；
##### 定义域及值域
:::warning
自然定义域：
:::
自然定义域y=x；y=sinx；y=cosx——>R(定义域)
y={% katex %}\frac{1}{x}{% endkatex %}——>(-∞，0)∪(0,+∞)
y=$\sqrt{x}$——>[0,+∞)
y=$log_ax$——>(0,+∞)
y=$tanx$——>{$x|x\neq\frac{\pi}{2}+k\pi,k∈Z$}
y=$\arcsin x$——>[-1,1]
y=$\arccos x$——>[-1,1]
:::warning
*判断两个函数是否为同一个函数
:::
定义域相同(化简前)/运算法则相同(化简后)**二者同时满足**<——(充要条件)——>两函数为同一函数
例题：1.判断$y_1=\sqrt{x^2}$和$y_2=|x|$是否为同一个函数。
解：化简前看定义域
D(f1):$x^2\geq0=>x∈R$
D(f2):$x∈R$
化简后看运算法则
$y_1=\sqrt{x^2}=\begin{cases} x,x\geq0\\\\-x,x<0 \end{cases}$
$y_2=|x|=\begin{cases}x,x\geq0 \\\\-x,x<0\end{cases}$
二者同时满足，**是**同一函数
2.下列各组函数中相同的是( D  ).
A.$f(x)=x+1$——R,$g(x)=\frac{x^2-1}{x-1}$——$x$
B.$f(x)=\sin x$——R(f)+-都存在,$g(x)=\sqrt{\frac{1-\cos 2x}{2}}$—— $R(f)\$
C.$f(x)=\frac{1}{x}$——$x$,$g(x)=\frac{1}{[\sqrt{x}]^2}$——
D.$f(x)=x+1$,$g(t)=t+1$

#####  特殊函数
特殊函数分类
##### 1.分段函数
##### 在定义域内不同区间上用不同解析式表示的函数
##### 2.隐函数
##### ![隐函数](https://raw.githubusercontent.com/sunnydusk/my-blog-images/main/202310242106917.png)
##### 3.参数方程式函数
##### ![参数方程式.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695267241016-6b210724-bc6d-4f18-b959-2f2d851cd774.png#averageHue=%233581a3&clientId=u592527bd-b7a3-4&from=ui&id=u53862312&originHeight=367&originWidth=631&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=243984&status=done&style=none&taskId=u396fd0a3-b996-4449-a8af-c665f4cd2ec&title=)
##### 4.抽象函数
##### ![抽象函数.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695267159041-30f92754-03df-4258-85c1-7e37bd9cda7e.png#averageHue=%23417ca1&clientId=u592527bd-b7a3-4&from=ui&id=u42affec7&originHeight=282&originWidth=627&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=184887&status=done&style=none&taskId=u2b0e01d1-a5ce-4c28-a478-666a9046213&title=)
##### *4.1求抽象函数的定义域
##### ![解题.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695279326488-bc219d31-1f54-48e1-bcb1-a6184aa8deb4.png#averageHue=%234e6392&clientId=ufa678b2b-766f-4&from=ui&height=195&id=uda05f8a5&originHeight=263&originWidth=187&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=80326&status=done&style=none&taskId=u8bd43aa1-c6fc-4f40-886a-2ca5b9997c2&title=&width=139)
##### 例题：已知函数$y=f(x)$的定义域为[-1,1),那么函数$y=f(x-2)$的定义域是   [1,3)
##### 解：$\because f(x)$的定义域为[-1,1)
##### $\therefore-1\leq x<1$
##### $\therefore -1 \leq x<1$
##### 即$1 \leq x<3$
##### 例题：已知函数$y=f(2x+3)$的定义域为(-2,2],那么函数$y=f(\frac{1}{2}x-5)$的定义域是   (8,24]
##### 解：$\because f(x)$的定义域为(-2,2]
##### 即$-2<x\leq 2$
##### $\therefore-1< 2x+3 \leq7$
##### $\therefore -1 < \frac{1}{2}x-5\leq7$
##### 即$8 < x\leq24$
##### *4.2求抽象函数的表达式
##### 例题：已知函数$f(x)=x^2+2x$,那么函数$f(\frac{x}{2}+1)$的表达式是   $f(\frac{x}{2}+1)=\frac{x^2}{4}+2x+3$
##### 使用**直接代入法**
##### 解：$\because f(x)=x^2+2x$
##### 当x=t时，有
##### $f(t)=t^2+2t$
##### $\therefore  f(\frac{x}{2}+1)=(\frac{x}{2}+1)^2+2(\frac{x}{2}+1)$
##### $\therefore f(\frac{x}{2}+1)=\frac{x^2}{4}+2x+3$
##### 例题：已知函数$f(\frac{x}{2}+1)=x^2+2x$,那么函数$f(x)$的表达式是   $f(x)=4x^2-4x$
##### 使用**换元法**
##### 解：令$\frac{x}{2}+1=t$
##### 有$x=2t-2$
##### $\therefore f(t)=(2t-2)^2+2(t-2)$
##### $\therefore f(t)=4t^2-4t$
##### 即$f(x)=4x^2-4x$
##### 例题：已知函数$f(\frac{x}{2}+1)=x^2+2x$,那么函数$f(2x-1)$的表达式是   $f(2x-1)=16x^2-16x+8$
##### 解：令$\frac{x}{2}+1=t$
##### 有$x=2t-2$
##### $\therefore f(t)=(2t-2)^2+2(t-2)$
##### $\therefore f(t)=4t^2-4t$
##### 即$f(x)=4x^2-4x$
##### $\therefore f(2x-1)=4(2x-1)^2-4(2x-1)$
##### 即$f(2x-1)=16x^2-16x+8$
#### 函数的基本特性
#####  有界性
函数在$f(x)$的定义域内**恒**≥某数$K_1$,则称在定义域内**有下界**，$K_1$称为函数$f(x)$的定义域内的一个下界。
函数在$f(x)$的定义域内**恒**≤某数$K_2$,则称在定义域内**有上界**，$K_2$称为函数$f(x)$的定义域内的一个上界。
如果**上界下界同时存在**，则称函数$f(x)$在定义域内**有界**，有$|f(x)|\leq M(M>0)$,称M为函数$f(x)$的一个界。
求自然定义域（值域）有界无界#### $y=x^2$——>$[0,+\infty)$ 有下无上（×）
#### $y=\sin x$——> [-1,1] (√)
#### $y=\cos x$——> [-1,1] (√)
#### $y=\tan x$——>$(-\infty,+\infty)$ (×)
#####  单调性
设函数$f(x)$在区间（a,b）内有定义，对于任意$x_1,x_2∈(a,b)$时：
如果恒有$f(x_1)$<$f(x_2)$,则称函数$f(x)$在（a，b）内单调增加；
如果恒有$f(x_1)$>$f(x_2)$,则称函数$f(x)$在（a，b）内单调减少；
![单增单减.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695283342135-804431dd-63db-4602-9a6d-ce16a0aaa14a.png#averageHue=%234c5d80&clientId=u6b2fbcfd-8ce8-4&from=ui&height=190&id=u6da15210&originHeight=221&originWidth=613&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=85864&status=done&style=none&taskId=ub3871499-7bb1-4107-9a39-4350050e0a8&title=&width=527.4000244140625)
例题：#### 论证函数$y=\frac{x}{1-x}$在指定区间$(-\infty,1)$上的单调性。
#### 解：在$(-\infty,1)$上$\forall$$x_1,x_2$$x_1<x_2$
#### $f(x_1)-f(x_2)=\frac{x_1}{1-x_1}-\frac{x_2}{1-x_2}$
#### 即$f(x_1)-f(x_2)=\frac{x_1-x_2}{(1-x_1)(1-x_2)}$
#### $\because$函数在指定区间$(-\infty,1)$上
#### $\therefore$$(1-x_1)(1-x_2)>0$且$x_1-x_2<0$
#### $\therefore$$f(x_1)-f(x_2)<0$
#### $\therefore f(x_1)<f(x_2)$
#### $\because f(x_1)恒<f(x_2)$
#### $\therefore$函数在区间$(-\infty,1)$单调增加
#####  奇偶性
设函数$y=f(x)$的定义域D关于原点对称，对于任一$x∈D$：
如果恒有$f(-x)=f(x)$,则称函数$f(x)$为偶函数；
如果恒有$f(-x)=-f(x)$,则称函数$f(x)$为奇函数；
偶函数关于$y$**轴**对称，奇函数关于**原点**对称。
*总结：#### 奇函数+奇函数=奇函数
#### 偶函数+偶函数=偶函数
#### 奇函数+偶函数=非奇非偶函数
#### 奇函数$\times$奇函数=偶函数
#### 偶函数$\times$偶函数=偶函数
#### 奇函数$\times$偶函数=奇函数
#### 规律：
#### 1.如果一个函数是奇函数或者偶函数，首先应该满足的条件是其定义域关于原点对称，如果定义域关于原点不对称，那么该函数肯定既不是奇函数也不是偶函数
#### 2.如果一个**奇函数**在$x=0$处有定义，那么$f(0)=0$
##### 周期性
设函数$y=f(x)$的定义域为D，若存在一个正数$T>0$，使得对于任意$x∈D$有$x\pm T∈D$，且$f(x\pm T)=f(x)$恒成立，则称$f(x)$为**周期函数**。
其中T称为$f(x)$的周期，周期函数的周期通常是指它的**最小正周期**。

| #### 函数
 | #### 图像或表达式
 | #### 周期
 | #### 最小正周期
 |
| --- | --- | --- | --- |
| #### $y=\sin x$
 | #### ![1.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695285974882-e0aa2559-dd00-45f6-8dc4-a79d78fd83b5.png#averageHue=%23337d9e&clientId=u6b2fbcfd-8ce8-4&from=ui&height=39&id=u5dee2874&originHeight=73&originWidth=263&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=21581&status=done&style=none&taskId=u125138f8-a158-4b0c-8c33-506a5c07278&title=&width=139.6500015258789)
 | #### $2k\pi,k∈z$
 | #### $2\pi$
 |
| #### $y=|\cos x|$
 | #### ![2.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695286011436-83c8025e-5f58-410f-be5f-86cff26b9ff0.png#averageHue=%23347c9c&clientId=u6b2fbcfd-8ce8-4&from=ui&id=u54e4c571&originHeight=77&originWidth=261&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=26009&status=done&style=none&taskId=u3dbe2002-786b-4b13-b686-1a367e3a50c&title=)
 | #### $k\pi,k∈z$
 | #### $\pi$
 |
| #### 常值函数$y=c$
 | #### ![3.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695286017830-67cd263e-874d-4f99-a805-7c1a126aa73a.png#averageHue=%232c7798&clientId=u6b2fbcfd-8ce8-4&from=ui&id=u10e09343&originHeight=72&originWidth=265&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=12638&status=done&style=none&taskId=u0383b12b-f795-442a-93ae-57315e63544&title=)
 | #### 任何正有理数
 | #### 不存在
 |
| #### 狄利克雷函数
 | #### $y=\begin{cases} 1, x∈Q \\\\0,x∈Q^c\end{cases}$
 | #### 任何正有理数
 | #### 不存在
 |

#### 反函数与复合函数
把原函数$y=f(x)$的自变量和因变量对调，定义域和值域对调，运算法则逆转，就得到了它的反函数$x=f^-(y)$
例如：$y=2x,x∈(0,1)$——反函数——>$x=\frac{1}{2}y,y∈(0,2)$—可写为—>$y=\frac{1}{2}x,x∈(0,2)$
注意：只有在连续定义域内单调的函数才有反函数，否则没有！
例如：$y=x^2$和 $y=sinx$在$x∈R$范围内没有反函数！
##### 反函数的性质
反函数和原函数的图像关于直线$y=x$对称。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695448655684-8483efa0-411d-45cb-b3c3-0895db40d7db.png#averageHue=%234f5d82&clientId=uf2d7e53e-b303-4&from=paste&height=215&id=u03ad0cb7&originHeight=338&originWidth=422&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=67694&status=done&style=none&taskId=u70e94419-8c6d-4bfa-9f83-1ec41c62d53&title=&width=268.6000061035156)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695448692217-4540b0eb-fd1e-40a7-88c8-9c6f810961b0.png#averageHue=%234f5d82&clientId=uf2d7e53e-b303-4&from=paste&height=209&id=u53df1bfc&originHeight=335&originWidth=427&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=68983&status=done&style=none&taskId=u2e10b165-35f2-42be-a178-4025d679038&title=&width=266.6000061035156)
##### 反函数和原函数单调性相同。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695448799973-9b178296-46cc-4331-b862-de0e7673e915.png#averageHue=%23515e83&clientId=uf2d7e53e-b303-4&from=paste&height=204&id=u5d7c9c75&originHeight=329&originWidth=424&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=69952&status=done&style=none&taskId=u6cddcf24-3372-4e1d-844a-1d6b0bfe1d4&title=&width=263.20001220703125)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695448850691-d99ea675-9f75-4491-b1ff-014ff0a2ae4d.png#averageHue=%23515e83&clientId=uf2d7e53e-b303-4&from=paste&height=209&id=u4c749896&originHeight=335&originWidth=415&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=62562&status=done&style=none&taskId=uf5aa72d9-b889-4dfd-8127-072b7931b42&title=&width=259)
反函数和原函数的奇偶性相同。（奇函数的反函数还是奇函数，非奇非偶函数的反函数还是非奇非偶函数，偶函数不存在反函数）
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695449008250-c2a5252d-8351-40c3-a32d-df3616837729.png#averageHue=%23505e83&clientId=uf2d7e53e-b303-4&from=paste&height=200&id=u03546bc8&originHeight=331&originWidth=427&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=69157&status=done&style=none&taskId=u7aa74735-7625-4909-9df1-469a8ac4361&title=&width=258.6000061035156)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695449050071-471bcced-4abc-4aa0-80ec-a4bd5d85296b.png#averageHue=%23505d83&clientId=uf2d7e53e-b303-4&from=paste&height=209&id=u1613cd23&originHeight=335&originWidth=418&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=64641&status=done&style=none&taskId=uc3d12a4d-3352-48bb-bc04-8bdce5dcf11&title=&width=261.3999938964844)
##### 复合函数
自变量$x$——$u=g(x)$——>中间变量$u$——$y=f(u)$——>因变量$y$
由函数$y=f(u)$及$u=g(x)$构成的函数$y=f[g(x)]$称为复合函数。
注意：

1. 注意复合的先后次序，$y=f[g(x)]$和$y=g[f(x)]$是两个不同的函数；
2. 内层函数$u=g(x)$的值域一定要在外层函数$y=f(u)$的定义域内。
#### 基本初等函数（五类）
幂函数、指数函数、对数函数、三角函数、反三角函数通称基本初等函数。
##### 幂函数：$y=x^\mu$（$\mu∈R$是常数）
定义域和值域随$\mu$而异，但其在（$0,+\infty$）上总有意义，且图像总经过点（1，1）。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695450453780-609761b3-eddb-47fd-8304-95abcf11fa61.png#averageHue=%23407ca3&clientId=uf2d7e53e-b303-4&from=paste&height=257&id=Piftq&originHeight=321&originWidth=283&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=110804&status=done&style=none&taskId=u04fe9728-0af8-4699-b5e1-550a24431d3&title=&width=226.4)
##### 指数函数：$y=a^x$（$a>0,a\ne1$）
特别当$a=e$时，有$y=e^x$($e\approx2.718$)(考点).
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695450925321-2621e900-f25a-4309-b736-6dd895d2f2c2.png#averageHue=%2335759c&clientId=uf2d7e53e-b303-4&from=paste&height=230&id=u50d965ae&originHeight=288&originWidth=296&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=65367&status=done&style=none&taskId=ua49cd032-a885-44a1-82cb-2c3154db8ef&title=&width=236.8)
##### 对数函数：$y=log_ax$($a>0,a\ne1$)
特别当$a=e$时，有$y=lnx$.(考点)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695451444774-b23f7632-c546-43db-9c6b-3dd19acdc5ea.png#averageHue=%2336779d&clientId=uf2d7e53e-b303-4&from=paste&height=261&id=ubd88a71a&originHeight=326&originWidth=293&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=85114&status=done&style=none&taskId=uf2a02808-8c2d-4f6a-8d8f-7723ba32dfe&title=&width=234.4)
##### 三角函数
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695452361442-82b23947-cc22-4304-86be-b24c9ad08e4c.png#averageHue=%23347199&clientId=uf2d7e53e-b303-4&from=paste&height=247&id=uae89d8c8&originHeight=374&originWidth=753&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=216119&status=done&style=none&taskId=ud8f80dc0-90a3-4202-9922-68a885a79a6&title=&width=496.4000244140625)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695452679249-89f2cf43-749c-49f5-8173-854cf47152bc.png#averageHue=%23386997&clientId=uf2d7e53e-b303-4&from=paste&height=333&id=u8d909d30&originHeight=314&originWidth=234&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=56004&status=done&style=none&taskId=uf3f0b218-a74e-476d-aa05-83f231ec241&title=&width=248.1999969482422)![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695452761662-d79064be-78ff-4c0f-8e77-5fe97ad38ca9.png#averageHue=%233e5487&clientId=uf2d7e53e-b303-4&from=paste&height=367&id=u3bd358af&originHeight=505&originWidth=352&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=178096&status=done&style=none&taskId=ud3103a8b-e73b-40af-af7f-8b17dabe074&title=&width=255.60000610351562)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695452825691-bb7e2327-030f-42b0-9024-b2bf1b539cea.png#averageHue=%233479a3&clientId=uf2d7e53e-b303-4&from=paste&height=318&id=uef0bbaf2&originHeight=397&originWidth=449&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=107352&status=done&style=none&taskId=u84afd72b-dcb2-462a-8235-bbff57764b8&title=&width=359.2)
##### 反三角函数
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1695453155090-ae3b365f-eed3-481c-90b5-29065ecce428.png#averageHue=%23347099&clientId=uf2d7e53e-b303-4&from=paste&height=282&id=ud83b7075&originHeight=386&originWidth=670&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=172354&status=done&style=none&taskId=u9d7160d3-1e1b-4d0b-b4cd-337a6a90b9f&title=&width=490)
### 极限
#### 数列
##### 数列的概念
一列有规律的数，对每个$n\in N_+$，对应着一个确定的实数，这样的一个序列叫数列。简记{$x_n$}.
**数列一定是有无穷多项**
##### 数列极限的概念
对于数列{$x_n$},$\forall \varepsilon>0$,总是$\exists$正整数$N$,当$n>N$时，有$|x_n-a|< \varepsilon$ ,那么就称常数$a$是数列{$x_n$}的极限，或者称数列{$x_n$}收敛于$a$.记为$\lim_{n\rightarrow+\infty}{x_n}=a$
##### 收敛数列->有极限的数列的性质

1. 收敛数列必有极限，且极限唯一；
2. 收敛数列一定有界；
3. 有界数列不一定收敛（例{$（-1）^n$}）,单调且有界的数列一定收敛，即单调有界数列必有极限。
##### 夹逼准则  *
对于三个数列{$y_n$}、{$x_n$}、{$z_n$}，如果满足以下两个条件：
1.从某项起，有$y_n<x_n<z_n$
2.$\lim_{n\rightarrow\infty}{y_n}=a$，且$\lim_{n\rightarrow\infty}{z_n}=a$，
则有：$\lim_{n\rightarrow\infty}{x_n}=a$
例题：
求极限：$\lim_{n\rightarrow\infty}{(\frac{1}{n^2+1}+\frac{1}{n^2+2}+···+\frac{1}{n^2+n})}$.
解析：1.夹逼准则一般用于求$n$项和形式的数列的极限；
   2.对$x_n$适当的放缩，找到$y_n$、$z_n$是关键；
   3.一般方法：分子不变，分母都取最大的那一项即得到$y_n$，分母都取最小的那一项即得到$z_n$.
解：$y_n=(\frac{1}{n^2+n}+\frac{1}{n^2+n}+···+\frac{1}{n^2+n})=\frac{n}{n^2+n}=\frac{1}{n+1}$
$z_n=(\frac{1}{n^2+1}+\frac{1}{n^2+1}+···+\frac{1}{n^2+1})=\frac{n}{n^2+1}$
$\lim_{n\rightarrow\infty}y_n=\lim_{n\rightarrow\infty}{\frac{1}{n+1}}=0$
$\lim_{n\rightarrow\infty}z_n=\lim_{n\rightarrow\infty}{\frac{n}{n^2+n}}=0$

求极限：$\lim_{n\rightarrow\infty}{(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+2}+···+\frac{n}{n^2+n+n})}$.
解：$y_n=(\frac{1}{n^2+n+n}+\frac{2}{n^2+n+n}+···+\frac{n}{n^2+n+n})=\frac{\frac{1}{2}(n+1)}{n^2+n+n}=\frac{n^2+n}{2n^2+4n}$
$z_n=(\frac{1}{n^2+n+1}+\frac{2}{n^2+n+1}+···+\frac{n}{n^2+n+1})=\frac{\frac{1}{2}n(n^2+1)}{n^2+n+1}=\frac{1+\frac{1}{n}}{2+\frac{1}{n}+\frac{1}{n}}$
$\lim_{n\rightarrow\infty}{y_n}=\frac{n^2+n}{2n^2+4n}=\frac{1}{2}$
$\lim_{n\rightarrow\infty}{z_n}=\frac{1+\frac{1}{n}}{2+\frac{1}{n}+\frac{1}{n}}=\frac{1}{2}$

课后练习：
求极限：$\lim_{n\rightarrow\infty}{(\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+2}}+\cdots+\frac{1}{\sqrt{n^2+n}})}$
解：$y_n=(\frac{1}{\sqrt{n^2+n}}+\frac{1}{\sqrt{n^2+n}}+\cdots+\frac{1}{\sqrt{n^2+n}})=\frac{n}{\sqrt{n^2+n}}=\frac{1}{\sqrt{\frac{1}{n}+1}}$
$z_n=(\frac{1}{\sqrt{n^2+1}}+\frac{1}{\sqrt{n^2+1}}+\cdots+\frac{1}{\sqrt{n^2+1}})=\frac{n}{\sqrt{n^2+1}}=\frac{1}{\sqrt{\frac{1}{n^2}+1}}$
$\lim_{n\rightarrow\infty}{y_n}=\frac{1}{\sqrt{\frac{1}{n}+1}}=1$
$\lim_{n\rightarrow\infty}{z_n}=\frac{1}{\sqrt{\frac{1}{n^2}+1}}=1$
即：极限为1
#### 函数
##### 函数的极限$x\to\infty$
设函数$f(x)$在$|x|$大于某一正数时有定义，$\forall \varepsilon>0$，总是$\exists$正数$X$，当$|x|>X$时，有
$|f(x)-A|<\varepsilon$
那么就称常数$A$是函数$f(x)$当$x\to\infty$时的极限，记为
$\lim_{n\rightarrow\infty}f(x)=A$

对于函数$f(x）$在点$x_0$的某去心邻域内有定义$\forall \varepsilon >0$，总是$\exists$正数$\delta$，当$0<|x-x_0|<\delta$时，有
$|f(x)-A|<\varepsilon$
那么就称常数$A$是函数$f(x)$当$x \to x_0$时的极限，记为
$\lim_{x \to x_0} f(x)=A$
函数极限于数列极限的区别和联系：
1. 数列极限只有$n \to \infty$,而函数极限有$x \to \infty$和$x \to x_0$;
2. 数列极限可以称为收敛，而函数极限不提收敛的概念；
3. 函数极限$x \to \infty$可分为$x \to -\infty$和$x \to +\infty$，二者可以不相等；
4. 函数极限$x \to x_0$可分为$x \to x_0^-$和$x \to x_0^+$，称为左极限和右极限，二者也可以不相等；
5. 函数极限和数列极限都具有唯一性。

例：$f(x)=\frac{1}{x}$
$\lim_{x \to \infty} \frac{1}{x}=0$
$\lim_{x \to 0} \frac{1}{x}=\infty$
例：$f(x)=e^x$
$\lim_{x \to \infty}{e^x}=\begin{cases} \lim_{x \to +\infty} {e^x}=+\infty\\\\ \lim_{x \to -\infty}{e^x}=0\end{cases}$$\to$不存在
$\lim_{x \to 0}{e^x}=\begin{cases} \lim_{x \to 0^+} {e^x}=1\\\\ \lim_{x \to 0^-}{e^x}=1\end{cases}$$\to$1
注意：
1. $\lim_{x \to -\infty}{f(x)=\lim_{x \to +\infty}{f(x)=A}}$$\to$$\lim_{x \to \infty}{f(x)=A}$，若有一方不等或者不存在都不行。
2. $\lim_{x \to x_0^-}{f(x)=\lim_{x \to x_0^+}{f(x)=A}}$$\to$$\lim_{x \to x_0}{f(x)=A}$，若有一方不等或者不存在都不行，即函数在某点处有极限的条件是左极限和右极限同时存在且相等。
##### 函数极限的四则运算
如果$\lim{f(x)=A}$，$\lim{g(x)=B}$，那么：

1. $\lim{\left [ f(x) \pm g(x) \right ] }=\lim{f(x)} \pm \lim{g(x)}=A \pm B$
2. $\lim{\left [ f(x) \cdot g(x) \right ] }=\lim{f(x)} \cdot \lim{g(x)}=A \cdot B$
3. 若又$B\ne0$，则有$\lim{\frac{f(x)}{g(x)}}=\frac{\lim{f(x)}}{\lim{g(x)}}=\frac{A}{B}$
4. $\lim{\left [ c \cdot f(x) \right ] }=c \cdot \lim{f(x)}=c \cdot A$($c$为常数)
5. $\lim{\left [ f(x) \right ]^n }=\left [ \lim{f(x)} \right ]^n=A^n$($n$是正整数)

说明：运算法则对于趋向于$x_0$、$x_0^+$、$x_0^-$、$\infty$、$+\infty$、$-\infty$都适用，但是二者趋向必须一致。
###### 复合函数极限运算法则
设函数$y=f \left [ g(x) \right ]$是由函数$y=f(u)$与函数$u=g(x)$复合而成，若有
$\lim_{x \to x_0}{g(x)}=u_0$，且$\lim_{u \to u_0}{f(x)}=A$
则有：$\lim_{x \to x_0}{f \left [ g(x) \right ] }=\lim_{u \to u_0}{f(x)}=A$
###### 因式分解消零因子法求极限*
例：$\lim_{x \to 3}{\frac{x-3}{x^2-9}}$
解：将$x \to 3$带入
$\frac{3-3}{9-9}=\frac{0}{0}$
$\because \frac{0}{0}$分母为0，即为未定式
$\therefore \lim_{x \to 3}{\frac{x-3}{x^2-9}}=\lim_{x \to 3}{\frac{x-3}{(x-3)(x+3)}}=\frac{1}{x+3}=\frac{1}{6}$
公式
##### $x^n-1=(x-1)(1+x+x^2+ \cdots +x^{n-1})$
##### $a^n-b^n=(a-b)(a^{n-1}+a^{n-2}b+ \cdots +ab^{n-2}+b^{n-1})$
结论：当直接代入为$\frac{0}{0}$未定式时，化简带入
###### 根式有理化消零因子法求极限*
例：求$\lim_{x \to 3}{\frac{\sqrt{1-x}-2 }{x-3}}$
解：原式=
直接带入分母为0未定式；
$\therefore$分子分母同乘$\sqrt{1-x}+2$
即$\lim_{x \to 3}{\frac{(\sqrt{1-x}-2)(\sqrt{1-x}+2) }{(x-3)(\sqrt{1-x}+2)}}$
$=\lim_{x \to 3}{\frac{1+x-4}{(x-3)(\sqrt{1-x}+2)}}$
$=\lim_{x \to 3}{\frac{x-3}{(x-3)(\sqrt{1-x}+2)}}$
$=\lim_{x \to 3}{\frac{1}{\sqrt{1-x}+2}}$
$=\frac{1}{4}$
###### 抓大头法求极限* 
例：求$\lim_{x \to \infty} {\frac{2x+1}{x^2+3}}$
解：原式=
同除以$x^2$
$=\lim_{x \to \infty} {\frac{\frac{2}{x}+\frac{1}{x^2}}{1+\frac{3}{x^2} }}$
$=\frac{0}{1}$
$=0$
例：求$\lim_{x \to \infty} {\frac{2x^3+x}{x^2+3}}$
解：原式=
同除以$x^3$
$=\lim_{x \to \infty} {\frac{2+\frac{1}{x^2}}{\frac{1}{x}+\frac{3}{x^3} }}$
$=\frac{2+0}{0+0}$
$=\infty$
结论：当直接带入为$\frac{\infty}{\infty}$时，使用抓大头方法，最高次幂在分子上结果为$\infty$，最高次幂在分母上结果为$0$（上大无穷下大零）；分子分母最大次幂相同的话结果为系数比（次数相同系数比）。
###### 课后习题

1. 求极限$\lim_{x \to 2}{\frac{x^2-x-2}{x^2-5x+6}}$

解：原式=
转换表达式
即$=\lim_{x \to 2}{\frac{x^2-x-2}{x^2-2x-3x+6}}$
$=\lim_{x \to 2}{\frac{x^2+x-2x-2}{x^2-2x-3x+6}}$
$=\lim_{x \to 2}{\frac{x(x+1)-2(x+1)}{x(x-2)-3(x-2)}}$
分子提取公因式$(x+1)$，分母提取公因式$(x-2)$
$=\lim_{x \to 2}{\frac{(x+1)(x-2)}{(x-2)(x-3)}}$
$=\lim_{x \to 2}{\frac{x+1}{x-3}}$
$=\lim_{x \to 2}{\frac{3}{-1}}$
$=-3$

2. 求极限$\lim_{x \to 1}{\frac{x^4-1}{x^5-1}}$

解：原式=
1.$=\lim_{x \to 1} {\frac{(x-1)(x^3+x^2+x+1)}{(x-1)(x^4+x^3+x^2+x+1)} }$
$=\frac{4}{5}$

2.使用洛必达法则
$=\lim_{x \to 1}{\frac{\frac{\mathrm{d} }{\mathrm{d} x} (x^4-1)}{\frac{\mathrm{d}}{\mathrm{d} x} (x^5-1)}}$
$=\lim_{x \to 1}{\frac{4x^3}{5x^4}}$
$=\lim_{x \to 1}{\frac{4}{5x}}$
$=\frac{4}{5}$

3. 求极限$\lim_{x \to 3}{\frac{\sqrt{x+2}-\sqrt{5} }{x-3}}$

解：原式=
分子分母同乘以$\sqrt{x+2}+\sqrt{5}$
$=\frac{x+2-5}{(x-3)(\sqrt{x+2}+\sqrt{5})}$
$=\frac{x-3}{(x-3)(\sqrt{x+2}+\sqrt{5})}$
$=\frac{1}{\sqrt{x+2}+\sqrt{5}}$
$=\frac{\sqrt{5}}{10}$

4. 求极限$\lim_{x \to \infty}{\frac{x^2-x-2}{x^2-5x+6}}$

解：原式=
直接使用抓大头，分子分母次幂相同结果为系数比
$\therefore =1$
####  两个重要极限
##### 第一重要极限
$\lim_{x \to 0} {\frac{\sin x}{x} }=1$
函数夹逼准则：
对于三个函数$g(x)、f(x)、h(x)$，如果满足以下两个条件：

1. $g(x)\le f(x) \le h(x)$;
2. $\lim{g(x)}=A$，且$\lim{h(x)}=A$;

则有：$\lim{f(x)}=A$
例：$\lim_{x \to 0} {\frac{\sin x}{x^2} }$
解：原式=
$=\lim_{x \to 0} {\frac{\sin x}{x} \times \frac{1}{x} }$
$=\lim_{x \to 0} {\frac{\sin x}{x} } \times \lim_{x \to 0}{\frac{1}{x}}$
$=1 \times \infty$
$=\infty$
例：$\lim_{x \to 0} {\frac{\tan x}{x} }$
解：原式=
$=\lim_{x \to 0} {\frac{\sin x}{x} \times \frac{1}{\cos x} }$
$=\lim_{x \to 0} {\frac{\sin x}{x} } \times \lim_{x \to 0}{\frac{1}{\cos x}}$
$=1 \times 1$
$=1$
例：$\lim_{x \to 0} {\frac{\arcsin x}{x} }$
解：原式=
令$x=\sin t$
$\arcsin x=t$
$=\lim_{t \to 0} {\frac{t}{\sin t}}$
$=1$
结论：$\frac{0}{0}$极限趋近于0且含有$\sin x$,将原式拆解为第一重要极限和另一个能直接带入求极限的乘积。
##### 第二重要极限
$\lim_{x \to \infty} ({1+\frac{1}{x})^2 }=e$
例：求极限$\lim_{x \to 0} ({1+x)^\frac{1}{x} }$
令$x=\frac{1}{t}$
$=\lim_{t \to \infty} ({1+\frac{1}{t})^t }$
$=e$
第二重要极限变式：
$\lim_{x \to 0} ({1+x)^\frac{1}{x} }=e$
第二重要极限通式：
$\lim_{f(x) \to 0 \ g(x) \to \infty }[1+f(x)]^{g(x)}=e^{\lim [f(x)\cdot g(x)]}$

例：求极限$\lim_{x \to 0} {(1-6x)^{\frac{3}{\sin x} }}$
解：原式=
$=e^{\lim_{x \to 0} {(-6x\cdot \frac{3}{\sin x}) }}$
$=e^{\lim_{x \to 0} {(\frac{-18x}{\sin x}) }}$
$\because \frac{x}{\sin x}=1$
$\therefore =e^{-18}$
结论：$1^\infty$使用第二重要极限通式。

#### 无穷小与无穷大
##### 概念
如果$\lim_{x \to x_0\setminus x \to \infty}{f(x)}=0$，则称函数$f(x)$为当$x \to x_0$或$x \to \infty$时无穷小；
如果$\lim_{x \to x_0\setminus x \to \infty}{f(x)}=\infty$，则称函数$f(x)$为当$x \to x_0$或$x \to \infty$时无穷大；
无穷小与无穷大都是一个函数，不能与很小的数或者很大的数混为一谈，无穷小是一个趋近于0（可以为0）的过程。
##### 无穷小的性质

1. 在自变量的同一变化过程$x \to x_0$或$x \to \infty$中，函数$f(x)$具有极限$A$的充分必要条件是$f(x)=A+\alpha$,其中$\alpha$是无穷小。
2. $\frac{1}{无穷小}=无穷大$，$\frac{1}{无穷大}=无穷小$。
3. 有限个无穷小的和是无穷小。
4. 有界函数与无穷小的乘积是无穷小。

例如：$\lim_{x \to \infty}{\frac{\sin x}{x} }= \lim_{x \to \infty} {\sin x}\cdot \lim_{x \to \infty} {\frac{1}{x} } =0$
易错点
   1. $\lim_{x \to 0} {\frac{\sin x}{x} }=1$(第一重要极限)
   2. $\lim_{x \to \infty } {\frac{\sin x}{x} }=0$(0×有界=0)
   3. $\lim_{x \to 0 } {x \cdot \sin \frac{1}{x}  }=0$(0×有界=0)
   4. $\lim_{x \to \infty } {x \cdot \sin \frac{1}{x}  }=1$(第一重要极限)
   5. $\lim_{x \to 0 } {\frac{1}{x} \cdot \sin \frac{1}{x}  }=无极限$($\infty$×有界=不确定)
   6. $\lim_{x \to \infty } {\frac{1}{x} \cdot \sin \frac{1}{x}  }=0$(0×0=0)

推论：

- 常数与无穷小的乘积是无穷小；
- 有限个无穷小的乘积是无穷小。

结论：$0 \cdot 有界 = 0$
##### 无穷小的比较
定义：设$\alpha$和$\beta$是同一个自变量趋近过程中的无穷小，且$\beta \ne 0$，
$\lim  \frac{\alpha }{\beta } =0$$\Rightarrow$$\alpha$是$\beta$ 的高阶无穷小，可记作$\alpha=o(\beta )$；
$\lim  \frac{\alpha }{\beta } =\infty$$\Rightarrow$$\alpha$是$\beta$ 的低阶无穷小；
$\lim  \frac{\alpha }{\beta } =c \ne 0$$\Rightarrow$$\alpha$是$\beta$ 的同阶无穷小；
$\lim  \frac{\alpha }{\beta ^k} =c \ne 0$$\Rightarrow$$\alpha$是$\beta$ 的$k$阶无穷小$(k>0 )$；
$\lim  \frac{\alpha }{\beta } =1$$\Rightarrow$$\alpha$是$\beta$ 的等价无穷小，记作$\alpha \sim \beta$；
注意：
- 一般为分子是分母的~阶无穷小；
- 越高阶趋近于0的速度越快；
- c可以是正数可以为负数，k可以是整数也可以是分数。
##### 等价无穷小的性质

1. 自反性：$\alpha \sim \alpha$；
2. 对称性：若$\alpha \sim \beta$，则$\beta  \sim \alpha$；
3. 传递性：若$\alpha \sim \beta$，$\beta  \sim \gamma$，则$\alpha \sim \gamma$；
4. 可替换性：若$\alpha \sim \gamma$，$\beta  \sim \theta$，则$\lim  \frac{\alpha }{\beta } =\lim \frac{\gamma }{\theta}$。

结论：$\frac{0}{0}$、$\frac{\infty}{\infty}$、$0 \cdot \infty$类型时使用等价无穷小替换。
##### 常用的等价无穷小替换*
当 $x\longrightarrow 0$时，有：

1. $x\sim \sin x\sim \tan x\sim \arcsin x\sim \arctan x$
2. $1-\cos x\sim \frac{1}{2} x^2$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696749056665-b4fb58ce-7964-467d-8a95-aaa4b2a77779.png#averageHue=%23317fa1&clientId=u2f3de26d-3f26-4&from=paste&height=197&id=ue4e83af1&originHeight=379&originWidth=327&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=92083&status=done&style=none&taskId=u97ec8931-3f03-4cb0-83a2-874ee266d2d&title=&width=169.60000610351562)

3. $ln(1+x)x\sim x$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696749089846-d788ff4e-1d97-4d05-a9ad-454e407bf87e.png#averageHue=%233080a3&clientId=u2f3de26d-3f26-4&from=paste&height=150&id=uae5679f0&originHeight=276&originWidth=351&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=65033&status=done&style=none&taskId=u49d4406b-80fd-46c2-837d-cc0a7c36763&title=&width=190.80001831054688)

4. $e^x-1 \sim x$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696748648566-f160320b-c567-4d5d-8155-bb968a328880.png#averageHue=%23307fa2&clientId=u2f3de26d-3f26-4&from=paste&height=139&id=u87428f0a&originHeight=251&originWidth=398&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=65227&status=done&style=none&taskId=ua322cc66-ab46-4558-bdbc-1e9bce7740f&title=&width=220.40000915527344)

5. $(1+x)^\mu-1 \sim  \mu \cdot x$   $\sqrt[n]{1+x}-1 \sim \frac{1}{n} \cdot x$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696748981934-e05d5cd1-97d5-40eb-b626-7817299fdd37.png#averageHue=%232e7b9e&clientId=u2f3de26d-3f26-4&from=paste&height=153&id=u85e7542f&originHeight=316&originWidth=474&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=93813&status=done&style=none&taskId=ub42d3aa4-b617-406a-8b6e-e806b49c234&title=&width=230.20001220703125)
提示：可以将上述x替换成任意$\Box$
二倍角公式：$\cos 2 \alpha =\cos ^2\alpha - \ sin ^2 \alpha  = 2\cos ^2 \alpha -1 = 1-2\sin ^2 \alpha$
#####  利用等价无穷小替换求极限
例：求极限$\lim_{x \to 0} \frac{ln \cos x}{x \tan [\sin (\sin x)]}$
解：原式=$\lim_{x \to 0 }{\frac{\frac{1}{2}x^2}{x^2}}=-\frac{1}{2}$
分子：$ln \cos x = ln(\cos x -1 +1) \sim - \frac{1}{2}x^2$
分母：$\sin x \sim x \sim \tan x =x^2$
#### 总结+习题
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696750494219-c6f572cd-9928-4f30-a919-bda3d0b311f4.png#averageHue=%233e7da4&clientId=u2f3de26d-3f26-4&from=paste&height=197&id=u8814931e&originHeight=458&originWidth=852&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=427018&status=done&style=none&taskId=ueef68151-5b74-4077-89ad-931081315ee&title=&width=367.3999938964844)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696750513852-0b874360-1e29-4aae-9202-bb971bacc1e8.png#averageHue=%23387ba2&clientId=u2f3de26d-3f26-4&from=paste&height=196&id=u6bdeeec2&originHeight=452&originWidth=850&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=332117&status=done&style=none&taskId=u94a28f00-4b7b-40f4-a40c-9d619613df2&title=&width=369.4000244140625)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696750723444-07e18b05-702e-4650-884c-99ae3510f302.png#averageHue=%233a7ba4&clientId=u2f3de26d-3f26-4&from=paste&height=227&id=ua5743645&originHeight=455&originWidth=746&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=345388&status=done&style=none&taskId=u3b5c05e0-128b-4ff1-8513-0c45f9e930b&title=&width=372.4000244140625)
例题1：$\lim_{x \to \infty} (\sin \frac{3}{x} +1)^{2x}$
解：原式=
利用第二重要极限
$=e^{\lim_{x \to \infty} (\sin \frac{3}{x} \cdot 2x)}$
利用等价无穷小替换
$\sin \frac{3}{x} \sim \frac{3}{x}$
$=e^{\lim_{x \to \infty} (\frac{3}{x} \cdot 2x)}$
$=e^6$
例题2：$\lim_{x \to \infty} (\frac{3x+1}{3x-1} )^{2x+3}$
解：原式=
$\frac{3x+1}{3x-1}=\frac{3x-1+2}{3x-1}=1+\frac{2}{3x-1}$
利用第二重要极限
$=e^{\lim_{x \to \infty} [\frac{2}{3x-1} \cdot (2x+3)]}$
$=e^{\lim_{x \to \infty} (\frac{4x+6}{3x-1})}$
抓大头
$=e^{\frac{4}{3}}$
例题3：$\lim_{x \to \infty} (x \sin \frac{1}{x}+\frac{1}{x} \sin x  )$
解：原式=
$=\lim_{x \to \infty} x \cdot \sin \frac{1}{x}+\lim_{x \to \infty} \frac{1}{x}\sin x$
$=1+0=1$
 例题4：设$\lim_{x \to \infty} (\frac{x-1}{2x^2+5}+ax+b )=3$，求常数a，b;
解：原式=
$=\lim_{x \to \infty} \frac{x-1}{2x^2+5}+\lim_{x \to \infty} ax+\lim_{x \to \infty} b=3$
$=0+\left\{\begin{matrix}a\ne 0\Rightarrow \infty 
 \\
a=0\Rightarrow 0
\end{matrix}\right.+b=3$
$\Rightarrow a=0$符合条件
$\therefore b=3$
 例题5：设$\lim_{x \to \infty} (\frac{2x^2+5}{x-1}+ax+b )=3$，求常数a，b;
解：原式=
$=\lim_{x \to \infty} \frac{2x^2+5+ax^2-ax}{x-1}+b=3$
使用抓大头方法
即使分子消掉$x^2$
即$a=-2$
$=\lim_{x \to \infty}\frac{2x+5}{x-1}+b=3$
使用抓大头方法
$=2+b=3$
$\therefore b=1$
例题6：已知$\lim_{x \to 1}f(x)$存在，且$f(x)=2x^3+3 \lim_{x\to 1}f(x)$，求$f(x)$。
解：设$\lim_{x \to 1}f(x)=A$
即$\lim_{x \to 1}f(x)=\lim_{x\to 1}2x^3+3A$
$\because \lim_{x\to 1}f(x)=A$
$\therefore A=2+3A$
$\therefore A=-1$
$\therefore f(x)=2x^3-3$
例题7：已知$\lim_{x \to 0}\frac{ln(1+\frac{f(x)}{x})}{e^{2x}-1}=5$，且当$x \to 0$时，$\frac{f(x)}{x}$，求$\lim_{x \to 0} \frac{f(x)}{x^2}$。
解：原式=
利用无穷小等价替换
$=\lim_{x\to 0}\frac{\frac{f(x)}{x}}{2x}$
即$=\lim_{x\to 0}\frac{f(x)}{2x^2}$
$\because \lim_{x\to 0}\frac{f(x)}{2x^2}=5$
$\therefore f(x)\sim10x^2$
$\therefore\lim_{x \to 0} \frac{f(x)}{x^2}=\frac{10x^2}{x^2}=10$

### 连续
#### 函数的连续性
##### 连续的概念
设函数$y=f(x)$在点$x_0$的某一邻域内有定义，如果$\lim_{x \to x_0}f(x)=f(x_0)$，那么就称函数$f(x)$在点$x_0$连续。
或表述为：如果$\lim_{\Delta x \to 0} \Delta y=\lim_{\Delta x \to 0} [f(x_0+\Delta x)-f(x_0)]=0$，那么就称函数$f(x)$在点$x_0$连续。
如果在区间上每一点都连续的函数，叫做该区间上的连续函数，或者说函数在该区间上连续。

1. **左连续的概念：**

如果$\lim_{x \to x_0^-}f(x)$存在且等于$f(x_0)$，那么就称函数$f(x)$在点$x_0$左连续，其左极限可简记为$f(x_0^-)$.
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696756726277-0839e30f-1b04-4792-a186-d57d3c0c33c0.png#averageHue=%232d7ea1&clientId=u824adc69-8787-4&from=paste&height=126&id=u0ef54ca9&originHeight=157&originWidth=244&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=21169&status=done&style=none&taskId=u11869b05-2590-4951-b78a-abd0fcb64a2&title=&width=195.2)

2. **右连续的概念：**

如果$\lim_{x \to x_0^+}f(x)$存在且等于$f(x_0)$，那么就称函数$f(x)$在点$x_0$右连续，其右极限可简记为$f(x_0^+)$.
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696756741006-34de0c6a-0c58-47a4-99c1-6a12cb58c7d0.png#averageHue=%232b7c9f&clientId=u824adc69-8787-4&from=paste&height=130&id=u585d0498&originHeight=162&originWidth=256&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=23063&status=done&style=none&taskId=ufd882709-2a8a-4c6b-b811-1d7c956694e&title=&width=204.8)
函数$f(x)$在点$x_0$处连续的充分必要条件为：$f(x_0^-)=f(x_0^+)=f(x_0)$
##### 间断点
如果函数$f(x)$在点$x_0$处不连续，那么点$x_0$就称为函数$f(x)$的间断点。
函数不连续有三种情形：
1. 在$x=x_0$处没有定义；

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757137321-150891b0-0c21-41e9-83bd-e82f4f2fdf00.png#averageHue=%233080a3&clientId=u824adc69-8787-4&from=paste&height=87&id=u8ad3a0e9&originHeight=137&originWidth=386&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=39033&status=done&style=none&taskId=ub8db5b06-be81-4597-899b-b9e26076ba1&title=&width=244.80001831054688)![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757153551-af4f3ce8-3cd4-43c1-ac67-c7ce194a1a9c.png#averageHue=%232d7ea0&clientId=u824adc69-8787-4&from=paste&height=45&id=hQ0kA&originHeight=130&originWidth=390&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=35043&status=done&style=none&taskId=u1700b57b-22bd-4f4d-8e1b-e583cc1c85b&title=&width=134)

2. 虽有定义，但$\lim_{x \to x_0}f(x)$不存在 ；

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757153551-af4f3ce8-3cd4-43c1-ac67-c7ce194a1a9c.png#averageHue=%232d7ea0&clientId=u824adc69-8787-4&from=paste&height=35&id=u98451d23&originHeight=130&originWidth=390&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=35043&status=done&style=none&taskId=u1700b57b-22bd-4f4d-8e1b-e583cc1c85b&title=&width=104)![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757172759-994ecc5d-fd90-4c0e-b0af-17358eb53568.png#averageHue=%232c7797&clientId=u824adc69-8787-4&from=paste&height=40&id=YMnrJ&originHeight=122&originWidth=379&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=36082&status=done&style=none&taskId=u6ee82f47-9336-42d1-938e-6f9b47aea77&title=&width=123)

3. 虽有定义，且$\lim_{x \to x_0}f(x)$存在，但$\lim_{x \to x_0}f(x) \ne f(x_0)$ ；

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757172759-994ecc5d-fd90-4c0e-b0af-17358eb53568.png#averageHue=%232c7797&clientId=u824adc69-8787-4&from=paste&height=36&id=lieHX&originHeight=122&originWidth=379&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=36082&status=done&style=none&taskId=u6ee82f47-9336-42d1-938e-6f9b47aea77&title=&width=112)
##### 间断点-间断点分类
如果$x_0$是函数$f(x)$的间断点，但左极限$f(x_0^-)$和右极限$f(x_0^+)$都存在，那么$x_0$称为函数$f(x)$的第一类间断点；
表示第一类间断点的任何间断点，称为第二类间断点。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696757482286-19cf62a2-5ff4-4f9d-8f8c-8734d174b939.png#averageHue=%23377ca2&clientId=u824adc69-8787-4&from=paste&height=232&id=uc66fde79&originHeight=382&originWidth=687&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=207494&status=done&style=none&taskId=u949192f2-51b7-4a90-9670-77dcff61397&title=&width=418)

1. 第一类：可去间断点

如果左极限和右极限都存在，且$f(x_0^-)=f(x_0^+)$，那么称$x_0$为函数$f(x)$的可去间断点。
例如：函数$y=\frac{x^2-1}{x-1}，x=1$是可取间断点
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696832212369-5c497c12-d75e-4539-bd62-38b83213a5bc.png#averageHue=%23525e83&clientId=u1dac168c-377d-4&from=paste&height=132&id=PJtvs&originHeight=213&originWidth=300&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=30667&status=done&style=none&taskId=u1ccfe058-0399-4552-8602-93e315b5db9&title=&width=186)
函数$y=\left\{\begin{matrix}x,x\ne 1 \\ \frac{1}{2},x=1 \end{matrix}\right.,x=1$是可去间断点
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696832466480-c3f11b0e-63c2-4061-9f4b-5c6de036d3c8.png#averageHue=%234f5c7f&clientId=u1dac168c-377d-4&from=paste&height=130&id=u1bf6bd4f&originHeight=215&originWidth=301&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=32878&status=done&style=none&taskId=u2cedff12-dca2-40c6-a7cf-797b8cc396d&title=&width=181.8000030517578)

2. 第一类：跳跃间断点

如果左极限$f(x_0^-)$和右极限$f(x_0^+)$都存在，且$f(x_0^-)\ne f(x_0^+)$，那么称$x_0$为函数$f(x)$的跳跃间断点。
例如：函数$y=\left\{\begin{matrix}x-1,x<0 \\0,x=0  \\x+1,x>0 \end{matrix}\right.,x=0$是跳跃间断点  
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696832920028-1d831341-b640-4d8e-8c85-902ba7e8fbfe.png#averageHue=%23525e84&clientId=u1dac168c-377d-4&from=paste&height=134&id=u78060470&originHeight=198&originWidth=275&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=28154&status=done&style=none&taskId=u174241df-9627-4138-9620-1f45dabc226&title=&width=186)

3. 第二类：无穷间断点

如果左极限$f(x_0^-)$和右极限$f(x_0^+)$至少有一个不存在，且其中至少有一个是$\infty$，那么称$x_0$为函数$f(x)$的无穷间断点。
例如：函数$y=\tan x,x=\frac{\pi}{2}$是该函数的无穷间断点
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696833186437-b530851c-6a5c-44a4-9d4c-fbdebb8766a7.png#averageHue=%23515f84&clientId=u1dac168c-377d-4&from=paste&height=151&id=ue8a82613&originHeight=223&originWidth=274&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=37946&status=done&style=none&taskId=u939d9ab3-39ae-495d-8413-997ee50febc&title=&width=185.1999969482422)

4. 第二类：振荡间断点

如果左极限$f(x_0^-)$和右极限$f(x_0^+)$至少有一个不存在，且其中至少有一个是振荡，那么称$x_0$为函数$f(x)$的振荡间断点。
例如：函数$y=\sin \frac{1}{x},x=0$是该函数的振荡间断点
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696833444471-6d3787df-b53e-4718-a23f-7b1c4ed26fb7.png#averageHue=%23525d83&clientId=u1dac168c-377d-4&from=paste&height=131&id=ua3383c9a&originHeight=229&originWidth=321&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=41295&status=done&style=none&taskId=u4ffdb596-65c2-4362-8367-d1e2db51163&title=&width=183.80001831054688)
注意：间断点类型与该点的函数值无关
##### 初等函数的连续性

1. 一切初等函数在其定义区间内都是连续的。
2. 若两个函数都连续，则它们的和、差、积、商都连续。
3. 若两个函数都连续，则由它们构成的复合函数也连续。
4. 若一个函数连续且有反函数，则它的反函数也连续。
##### 闭区间上连续函数的性质

1. 【有界性与最大值最小值定理】在闭区间上连续的函数在该区间上有界，且一定能取得它的最大值和最小值。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696834018358-21aab300-588d-4635-bf89-574dfdf15793.png#averageHue=%23525f84&clientId=u1dac168c-377d-4&from=paste&height=143&id=u1744a3f4&originHeight=272&originWidth=414&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=49887&status=done&style=none&taskId=ua631f045-b684-406a-ad94-a69edda5eef&title=&width=217.20001220703125)

2. 【零点定理】若函数$f(x)$在闭区间$[a,b]$上连续，且$f(a)$与$f(b)$异号（即$f(a)\cdot f(b)<0$），则至少存在一点$\xi \in (a,b)$，使得$f(\xi)=0$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696834307321-13329923-0b45-4825-b8cd-9513ddb5e1af.png#averageHue=%23546087&clientId=u1dac168c-377d-4&from=paste&height=151&id=u3fd67924&originHeight=217&originWidth=320&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=38414&status=done&style=none&taskId=u6390ca16-35e0-4caf-9106-a3ca76e7bd2&title=&width=223)

3. 【介值定理】设函数$f(x)$在闭区间$[a,b]$上连续，且在这区间的端点取不同的函数值$f(a)=A$及$f(b)=B$，则对于$A$与$B$之间的任意一个数$C$，在开区间$(a,b)$内至少有一点$\xi$，使得$f(\xi)=C$。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696834604530-828375bb-9bdf-45a6-ae23-fcae8cc1b055.png#averageHue=%23546086&clientId=u1dac168c-377d-4&from=paste&height=157&id=u88564bcb&originHeight=221&originWidth=313&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=43753&status=done&style=none&taskId=u934c3b32-48ad-40e6-85aa-429dc6f895f&title=&width=222.40000915527344)
##### 连续考点
###### 判断函数在某点的连续性
**例题：**判断函数$f(x)=\left\{\begin{matrix}x+\frac{1}{2},x<0 \\ \frac{1}{2},x=0 \\ \frac{ln(1+x)}{2x},x>0 \end{matrix}\right.$，在点$x=0$处的连续性
解：判断$f(x)$在点$x_0$处连续的充分必要条件为$f(x_0^-)=f(x_0^+)=f(x_0)$ 	$f(0^-)=\lim_{x \to 0^-}x+\frac{1}{2}=\frac{1}{2}$
$f(0^+)=\lim_{x \to 0^+}\frac{ln(1+x)}{2x}=\lim_{x \to 0^+}\frac{x}{2x}=\frac{1}{2}$
$\therefore f(0^-)=f(0^+)=f(0)=\frac{1}{2}$.
$\therefore$函数是连续的
###### 已知函数在某点连续求系数
**例题：**设函数$f(x)=\left\{\begin{matrix}x \sin \frac{1}{x},x<0 \\a+xx^2,x\ge 0\end{matrix}\right.$在点$x=0$处连续，则$a=$____0___.
解：由$f(x_0^-)=f(x_0^+)=f(x_0)$
$f(0)=a+0^2=a$
$f(0^-)=\lim_{x \to 0^-}x \cdot \sin \frac{1}{x}$
带入$0^-$
$\sin \frac{1}{0^-}:\frac{1}{0^-}=-\infty$
即：有界，
$0^- \cdot 有界 = 0$
$\therefore  a=0$
$\frac{1}{0^-}=-\infty$
$\frac{1}{0^+}=+\infty$
###### 判断间断点个数
**例题：**函数$f(x)=\frac{\sin x}{x}+\frac{1}{x-1}e^{\frac{1}{x} }$的间断点个数是( C  )
A.0		B.1		C.2		D.3
解题：找出不满足定义域的点即为间断点，一般为使分母为0时$x$的取值
解：题中有三个分数，$\frac{\sin x}{x}$、$\frac{1}{x-1}$、$\frac{1}{x}$
即$x\ne0$和$x-1\ne0$
$\therefore x\ne0或x\ne1$
即个数为2
###### 判断间断点类型
**例题：**设函数$f(x)=\left\{\begin{matrix}\frac{\cos x+1}{x},x\ne 0 \\0,x=0\end{matrix}\right.$则$x=0$是其( C  )
A.可去间断点		B.跳跃间断点		C.第二类间断点			D.连续点
解题：判断左右极限是否都存在（左极限\右极限分开求）
解：$f(0^-)=\frac{\cos x}{x}=\frac{1+1}{0^-}=-\infty$
$f(0^+)=+\infty$
$\therefore$两个都为无穷，即为无穷间断点（第二类间断点）。
###### 已知间断类型求系数
**例题：**已知点$x=1$为函数$f(x)=\frac{x-a}{x^2-4x+3}$的可去间断点，则$a=$( A ).
A.1			B.2			C.0			D.-1
解题：可去间断点$f(x_0^-)=f(x_0^+)$
解：$\lim_{x \to 1}\frac{x-a}{x^2-4x+3}$
将1带入
$\frac{\Box }{0} =A$
即$\frac{0}{0}=A$
$\therefore  x-a=0，即1-a=0，a=1$
###### 证明方程在某区间内至少有一个实根——零点定理
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696838510161-348b8199-998b-4cd0-ada2-9cc794f96a05.png#averageHue=%23475a8a&clientId=uc33c2f37-a271-4&from=paste&height=58&id=u002310e6&originHeight=99&originWidth=616&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=76593&status=done&style=none&taskId=u136bb54b-cee1-400c-b896-bd34b8ac1b3&title=&width=362.8000183105469)
**例题：**证明方程$x^3+3x^2=1$在区间$(0,1)$内至少有一个实根。
解：有原式=
$x^3+3x^2-1=0$即$f(x)=x^3+3x^2-1$
$f(x)$在$[0,1]$上连续
$f(0)=0^3+3 \cdot 0^2-1=-1$
$f(1)=1^3+3 \cdot 1^2 -1=3$
$\because f(0)\cdot f(1)<0$ 
$\therefore$根据零点定理
至少有一点$\xi \in (0,1)$，使得$f(\xi)=0$
即方程$x^3+3x^2=1$在区间$(0,1)$内至少有一个实根。

**例题：**证明方程$e^x=3x$在区间$(0,1)$内至少有一个实根。
解：有原式=
$e^x-3x=0$即$f(x)=e^x-3x$
$f(x)$在$[0,1]$上显然连续
$f(0)=e^0+3 \cdot 0=1$
$f(1)=e-3<0$($e \approx 2.718$)
$\because f(0)\cdot f(1)<0$ 
$\therefore$根据零点定理
至少有一点$\xi \in (0,1)$，使得$f(\xi)=0$
即方程$e^x=3x$在区间$(0,1)$内至少有一个实根。

###### 课后习题
![QZHS~N1U5SF`%X)33H){08S.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696843792855-97e462cf-a4b0-4ef7-8732-b59a8546d4c4.png#averageHue=%23347da2&clientId=ud03b4b1b-5e1b-4&from=paste&height=82&id=u6fef6209&originHeight=102&originWidth=672&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=47646&status=done&style=none&taskId=u4df5dfc7-88fd-4d68-bbf5-9dd3a94ce36&title=&width=537.6)
![6YNGZZ`_Z$KS(Q~LV59L)A8.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1696843804011-24f0f52f-d0eb-4a6b-bbc0-9f3dc397b740.png#averageHue=%233f86a9&clientId=ud03b4b1b-5e1b-4&from=paste&height=231&id=udaac4909&originHeight=279&originWidth=646&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=174066&status=done&style=none&taskId=u891bc09d-850f-47cb-9991-afacf3489e4&title=&width=535.7999877929688)
![B40E15697D72DCF34CC37D251B4E7192.jpg](https://cdn.nlark.com/yuque/0/2023/jpeg/39050477/1696843817039-b2e3a817-4844-4f9d-a66e-53c95a981eea.jpeg#averageHue=%23bfbbb1&clientId=ud03b4b1b-5e1b-4&from=paste&height=763&id=u980276ef&originHeight=1920&originWidth=1347&originalType=binary&ratio=1.25&rotation=90&showTitle=false&size=182616&status=done&style=none&taskId=u19bbd62d-de80-442c-9b62-38aad274895&title=&width=535)
## 二.一元函数微分学***
### 导数
#### 导数的定义
设函数$y=f(x)$在点$x_0$在某个邻域内有定义，当自变量$x$在$x_0$处取得增量$\Delta x$（点$x_0+\Delta x$仍在该邻域内）时，相应的因变量$y$取得增量$\Delta y=f(x_0+\Delta x)-f(x_0)$。
如果$\frac{\Delta y}{\Delta x}$当$\Delta x \to 0$时的极限存在，那么称函数$y=f(x)$在点$x_0$处求导，并称此极限为函数$y=f(x)$在点$x_0$处的导数，记作：
$f'(x_0)=\lim_{\Delta x \to 0}{\frac{\Delta y}{\Delta x} }=\lim_{\Delta x \to 0} \frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$
也可记作$y'|_{x=x_{0'}},\frac{dy}{dx}|_{x=x_{0'}},\frac{df(x)}{dx}|_{x=x_0}$
导数定义的几种等价形式：
1. $f'(x_0)=\lim_{\Delta  \to 0}\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}$
2. $f'(x_0)=\lim_{x \to x_0}\frac{f(x)-f(x_0)}{x-x_0}$
3. $f'(x_0)=\lim_{h \to 0}\frac{f(x_0+h)-f(x_0)}{h}$

![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697959283973-55d3c13b-4f0e-41f3-9059-e524498ee9b2.png#averageHue=%23316990&clientId=u37280cb5-0754-4&from=paste&height=234&id=u4fcd2730&originHeight=352&originWidth=301&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=100817&status=done&style=none&taskId=u8dca70c7-6c11-4a23-8d59-1332b82d6c5&title=&width=199.8000030517578)![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697959355077-8a2cf775-5747-4e5a-8c83-e7b5f93c468a.png#averageHue=%23304572&clientId=u37280cb5-0754-4&from=paste&height=127&id=u3c837971&originHeight=176&originWidth=353&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=74125&status=done&style=none&taskId=u7d1dd824-fb14-47fc-a50b-10e635de7de&title=&width=255.39999389648438)
例题：
若$f'(x_0)=1,f(x_0)=0$，则$\lim_{h \to \infty} hf(x_0-\frac{1}{h})$=______-1____.
解：令$\Delta x=\frac{1}{h}$
原式=$\lim_{\Delta x \to 0} \frac{f(x_0-\Delta x)-f(x_0)}{\Delta x}=-f'(x_0)=-1$
##### 导函数的定义
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697960937907-6b1979cb-b021-4096-bd3c-d16279bc8a2c.png#averageHue=%23334770&clientId=u37280cb5-0754-4&from=paste&height=136&id=u0b75a79f&originHeight=170&originWidth=339&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=69564&status=done&style=none&taskId=uad4ca84b-5aca-4fc4-8dd5-e5779d9f225&title=&width=271.2)
##### 结论
##### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697961282896-c1a5c0bb-15d5-4a48-98d3-7d1c46beed78.png#averageHue=%232e648c&clientId=u37280cb5-0754-4&from=paste&height=128&id=u8e684ece&originHeight=165&originWidth=532&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=74405&status=done&style=none&taskId=ud189dd23-64d3-457a-a8d5-9994f65091d&title=&width=412.6000061035156)
##### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697961323481-3b7ed6b6-fa7b-4321-8c4a-9dd03a561ed0.png#averageHue=%23336990&clientId=u37280cb5-0754-4&from=paste&height=60&id=u159be006&originHeight=118&originWidth=817&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=110816&status=done&style=none&taskId=ud0139b75-55ad-4abf-ac82-56fd5f0e2cc&title=&width=413.3999938964844)
##### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697961293206-157cabde-cb77-47c0-95a4-5ecc34c7e23b.png#averageHue=%2332668d&clientId=u37280cb5-0754-4&from=paste&height=105&id=uba176f7e&originHeight=120&originWidth=476&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=59692&status=done&style=none&taskId=u6a944623-422b-4cd9-bbd6-d3964ffeb04&title=&width=415.8000183105469)
#### 导数的定义
函数$f(x)$在某点$x_0$的导数：

- 定义式：$\lim_{x \to x_0} \frac{f(x)-f(x_0)}{x-x_0} =f'(x_0)$;

引入：$x-x_0=\Delta x$

- 增量式：$\lim_{\Delta x \to 0}{\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x} }=f'(x_0)$ ;

注意：

   1. $\Delta x$可以换成其余字母；
   2. 整体思想：$\Delta x \to \Box$;
   3. $\Delta x \to 0$，谁趋于0 ，谁就是$\Delta x$;
- 引申公式：$\lim_{\Delta x \to 0}\frac{f(x_0+a\Delta x)-f(x_0+b\Delta x)}{c \Delta  x}=\frac{a-b}{c}\cdot f'(x_0)$

No face：f不要，直接作差，谁消失了乘上谁的导数；
$\lim_{\Delta x \to 0}\frac{f(x_0+a\Delta x)-f(x_0+b\Delta x)}{c \Delta  x}$=$\frac{(x_0+a \Delta x )-(x_0+b \Delta x)}{c \Delta x}=\frac{(a-b)\Delta x}{c\Delta x}\cdot f'(x_0)$
例题：

   - 已知$f(x)$在$x=x_0$可导，则$\lim_{h \to 0}]\frac{f(x_0+h)-f(x_0)}{h}=$___$f'(x_0)$____;

解：原式=$h \to 0;\therefore h=\Delta x$
=$\lim_{\Delta x \to 0}]\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}=f'(x_0)$

   - 设$f(x)$在$x=a$处可导，则$\lim_{\Delta x \to 0}\frac{f(a+\Delta x)-f(a-\Delta x)}{\Delta x}=$___$2f'(a)$_____;

解：原式=$\frac{1-(-1)}{1} \cdot f(a)=2f'(a)$
No face： $\frac{(a+\Delta x)-(a-\Delta x)}{\Delta x}\cdot f'(a)=\frac{2\Delta x}{\Delta x}=2f'(a)$

   - 设$f'(0)=a$，则$\lim_{\Delta x \to 0}\frac{f(-\Delta x)-f(0)}{\Delta x}=$_____$-a$____;

解：原式=$\frac{-\Delta x-0}{\Delta x} \cdot f'(0)=-f'(0)=-a$

   - 设$f'(x_0)=-1$，则$\lim_{x \to 0}\frac{x}{f(x_0-2x)-f(x_0-x)}=$____1___;

解：原式=$\lim_{\Delta x \to 0}\frac{\Delta x}{f(x_0-2\Delta x)-f(x_0-\Delta  x)}$
=$\lim_{\Delta x \to 0}\frac{1}{\frac{f(x_0-2\Delta x)-f(x_0-\Delta x)}{\Delta x}}$
=$\lim_{\Delta x \to 0}\frac{1}{\frac{-2-(-1)}{1}\cdot f'(x_0)}=1$
##### 导数定义，求函数$f(x)$在某点的导数
特点：此时的$f(x)$为复杂的多项式，乘积形式；
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697522704899-59560827-06ae-441b-b965-97efcffb52eb.png#averageHue=%23f5d992&clientId=u6ed23bd6-eebe-4&from=paste&height=197&id=u50f5af6b&originHeight=246&originWidth=882&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=313257&status=done&style=none&taskId=u6778596d-0550-4d80-a34a-f7bf06a640d&title=&width=705.6)
##### 已知$f(x)$某点导数，求相关极限
解法：根据导数定义，凑出相关极限
例题：
设$f(x)$在$R$上连续，且$f(0)=0$,$f'(0)=2$求$\lim_{x \to 0}\frac{f(e^x-1)}{x}$
解：原式= $\because f(0)=\lim_{x \to 0} \frac{f(x)-f(0)}{x-0}=\lim_{x \to 0} \frac{f(x)}{x}=2$
$\therefore \lim_{x \to 0} \frac{f(e^x)-1}{x}=\lim_{x \to 0} \frac{f(e^x)-f(0)}{(e^x-1)-0} \cdot \frac{e^x-1}{x}=\lim_{x \to 0} 2\cdot \frac{e^x-1}{x}=2$
已知$f(x)$在$x=0$处连续，且$f(0)=0$，$f'(0)=2$，求$\lim_{x \to 0}\frac{f()1-\cos x}{\tan x^2}$
解：原式=$\because \lim_{x \to 0} \frac{f(x)}{x}=2$
$\therefore \lim_{x \to 0} \frac{f(1-\cos x)}{\tan x^2}=\lim_{x \to 0} \frac{1-\cos x}{x^2} =\lim_{x \to 0} \frac{f(1-\cos x) }{x-\cos x } \cdot \frac{1-\cos x}{x^2} =\lim_{x \to 0} 2 \cdot \frac{\frac{1}{2}x^2 }{x^2} =1$
##### 已知函数极限，求相关导数
已知$f(x)$在$x=a$处连续，且$\lim_{x \to a}\frac{f(x)}{x-a}=2$，求$f'(a)$及$f(a)$.
解：原式=$\because \lim_{x \to 0} \frac{f(x)}{x-a} =2$
极限存在，分子趋于0，分母趋于0
$\therefore \lim_{x \to 0} f(x)=f(a)=0$
又$f'(a)=\lim_{x \to a} \frac{f(x)-f(a)}{x-a}=\lim_{x \to a}  \frac{f(x)}{x-a}=2$
### 左导数与右导数
#### 左、右导数定义
左导数和右导数统称单侧函数
$f_-'(x)=\lim_{x \to x_0^-}\frac{f(x)-f(x_0)}{x-x_0}$（左导数）
$f_+'(x)=\lim_{x \to x_0^+}\frac{f(x)-f(x_0)}{x-x_0}$（右导数）

1. 函数在某点$x_0$的可导条件：$f_-'(x_0)=f_+'(x_0)$;（左导=右导）。
2. 可导的必要条件：可导函数必连续；

题型：

1. 告知$f(x)$可导，求参数。
2. 可导$\to$连续$\to$极限；

例题：
设$f(x)=\left\{\begin{matrix}e^x.x>0 \\ \sin ax+b.x\le 0 \end{matrix}\right.$ ，在$x=0$可导，求$a,b$
1.解：$\because f(x)$在$x=0$可导，则$f(x)$在$x=0$处连续
$x=o,f(0)=b$
$\lim_{x \to 0^-}f(x)=\lim_{x \to 0^-}(\sin ax+b)=b$
$\lim_{x \to 0^+}f(x)=\lim_{x \to 0^+}e^x =1$$\to$$b=1$
2.又$f_-'(0)=f_+'(0)$
即：$f_-'(0)=\lim_{x \to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^-}\frac{\sin ax+1-1}{x}=a$
$f_+'(0)=\lim_{x \to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^+}\frac{e^x-1}{x}=1$$\to$$a=1$
综上：$a=1,b=1$
例题：
若$f(x)=\left\{\begin{matrix} \frac{ln(1+x^2)}{x},x>0  \\ ax+b, x\le 0 \end{matrix}\right.$在$x=0$可导，求$a,b$
解：1.$\because f(x)$在$x=0$可导，则$f(x)$在$x=0$处连续
$x=0,f(0)=b$
$\lim_{x \to 0^-}f(x)=\lim_{x \to 0^-}(\sin ax+b)=b$
$\lim_{x \to 0^+}f(x)=\lim_{x \to 0^+}\frac{ln(1+x^2)}{x} =\lim_{x \to 0^+}\frac{x^2}{x}=\lim_{x \to 0^+}x=0$$\to$$b=0$
2.又$f_-'(0)=f_+'(0)$
即：$f_-'(0)=\lim_{x \to 0^-}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^-}\frac{\sin ax}{x}=a$
$f_+'(0)=\lim_{x \to 0^+}\frac{f(x)-f(0)}{x-0}=\lim_{x \to 0^+}\frac{ln(1+x^2)}{x^2}=\lim_{x \to 0^+}\frac{x^2}{x^2}=1$$\to$$a=1$
综上：$a=1,b=0$
#### 可导与连续的关系
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697963593409-9894aec0-0ee0-40fd-921e-97edfb189012.png#averageHue=%232e5881&clientId=u37280cb5-0754-4&from=paste&height=279&id=u8f76c43d&originHeight=531&originWidth=943&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=497613&status=done&style=none&taskId=ub7cddd9f-b056-4ae1-baf4-0418f8437f5&title=&width=495.3999938964844)
#### 基本导数公式和四则运算求导法则
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697963838047-b9986f8f-b1e7-4eed-accb-6500b7dfe000.png#averageHue=%232f4575&clientId=u37280cb5-0754-4&from=paste&height=146&id=ubf195d1d&originHeight=182&originWidth=470&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=71435&status=done&style=none&taskId=u6db0efc8-54cc-4fb6-b534-ed1085059a4&title=&width=376)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/39050477/1697963856229-e955f545-777d-4ca9-80d2-5e703e48428e.png#averageHue=%234260a5&clientId=u37280cb5-0754-4&from=paste&height=269&id=u337f62f6&originHeight=405&originWidth=570&originalType=binary&ratio=1.25&rotation=0&showTitle=false&size=189659&status=done&style=none&taskId=u26873b97-20b5-4434-9054-1e256677123&title=&width=378)
#### 函数的求导方法
 
### 微分中值定理
### 洛必达法则
$\frac{0}{0}$或$\frac{\infty}{\infty}$型
$lim{\frac{f(x)}{g(x)}}=lim{\frac{f'(x)}{g'(x)}}=lim{\frac{f''(x)}{g''(x)}}=……=A$
注意：

1. 分子分母各自同时求导；
2. 洛必达法则一般配合等价使用；

！！万事不对洛必达
### 导数在研究函数中的应用
