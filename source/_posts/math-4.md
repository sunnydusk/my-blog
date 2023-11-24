---
title: 高等数学-向量代数与空间解析几何
top: 17
hexo-math: true
type: "categories"
categories: 
  - 专升本
tags:
  - 学习资料
  - math
date: 2023-11-22 21:04:00
---

## 向量代数与空间解析几何
### 向量的概念
1. 向量(矢量)是`有大小有方向`的量，用一个带箭头的线段来表示，线段的长度表示向量的大小，箭头的方向表示向量的方向{% katex %}\vec{a} {% endkatex %}。  
2. 标量(数量)是`只有大小没有方向`的量，用一个数字来表示。  
向量的大小用`模`来表示，向量的方向用`方向角`来表示。  
3. 向量在坐标系中的表示：
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231410632.png)  
设在空间内有两个点{% katex %}A(x_1,y_1,z_1),B(x_2,y_2,z_2){% endkatex %}，则向量AB的坐标表示为：{% katex %}\vec{AB}=(x_2-x_1,y_2-y_1,z_2-z_1) {% endkatex %}(终点坐标-起点坐标)  
4. 向量的大小(模长)：  
指向量长度，指AB距离。  
{% katex %}|\vec{AB}|=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2} {% endkatex %}(两点间距离公式)  
5. 单位向量：模长为1的向量({% katex %}\vec{e} {% endkatex %})。   
与{% katex %}\vec{AB} {% endkatex %}同方向的单位向量：{% katex %}\frac{\vec{AB}}{|\vec{AB}|} {% endkatex %}  
与{% katex %}\vec{AB} {% endkatex %}反方向的单位向量：{% katex %}-\frac{\vec{AB}}{|\vec{AB}|} {% endkatex %}  
6. 零向量：模长为0的向量(方向任意)。   
例题1：已知A(1,0,2),B(1,1,4)，求{% katex %}\vec{AB} {% endkatex %}及与{% katex %}\vec{AB}{% endkatex %}同向的单位向量。  
解：{% katex %}\vec{AB}=(1-1,1-0,4-2)=(0,1,2) {% endkatex %}  
{% katex %}|\vec{AB}|=\sqrt{0^2+1^2+2^2}=\sqrt{5} {% endkatex %}  
{% katex %}\vec{e}=\frac{\vec{AB}}{|\vec{AB}|}=\frac{(0,1,2)}{\sqrt{5}} {% endkatex %}  

---
### 空间直角坐标系及其单位向量
1. {% katex %}\vec{i},\vec{j},\vec{k}{% endkatex %}分别为x,y,z轴上的单位向量，称为空间直角坐标系的基向量。   
2. 注意：若{% katex %}2\vec{i}+3\vec{j}-2\vec{k} {% endkatex %},则为(2,3,-2)  

---
### 向量的运算法则  
设{% katex %}\vec{a}=(x_1,y_1,z_1),\vec{b}=(x_2,y_2,z_2) {% endkatex %}  
1. 向量的加减法：  
{% katex %}\vec{a}\pm \vec{b}=(x_1\pm x_2,y_1\pm y_2,z_1\pm z_2) {% endkatex %}  
2. 向量的数乘：  
{% katex %}k\vec{a}=(kx_1,ky_1,kz_1) {% endkatex %}  
3. 点乘(数量积)：  
{% katex %}\vec{a}\cdot \vec{b}=x_1\cdot x_2+y_1\cdot y_2+z_1\cdot z_2 {% endkatex %}  
对应坐标相乘再相加  
4. 叉乘(向量积)：  
{% katex %}\vec{a}\times \vec{b}=\vec{c}{% endkatex %}  
注：{% katex %}\left.\begin{matrix}\vec{c} \perp \vec{a} \\\vec{c} \perp \vec{b} \end{matrix}\right\}\vec{c} =\vec{a}\times \vec{b}{% endkatex %}  

---
###  向量点乘的几何运算
在坐标下：{% katex %}\vec{a}\cdot \vec{b}=|\vec{a}|\cdot |\vec{b}|\cdot cos\theta {% endkatex %}  
在几何下：{% katex %}\vec{a}\cdot \vec{b}=|\vec{a}|\cdot |\vec{b}|\cdot \cos \theta ,\theta {% endkatex %}指{% katex %}\vec{a},\vec{b} {% endkatex %}的夹角   
若{% katex %}\vec{a}\perp \vec{b}{% endkatex %}则{% katex %}\vec{a}\cdot \vec{b} =|\vec{a} |\cdot |\vec{b} |\cdot \cos 90°=0{% endkatex %}   
则：{% katex %}{\color{Red} \vec{a}\cdot \vec{b}=0\Leftrightarrow \vec{a}\perp \vec{b}} {% endkatex %}   
且：{% katex %}{\color{Red} (\vec{a})^2=|\vec{a}|\times |\vec{a}|\cdot \cos 0=|\vec{a}|^2 } {% endkatex %}   
例题1：设{% katex %}\vec{a}=(2,\lambda ,-1),\vec{b}=(\lambda ,2,5){% endkatex %}的数量积为0，则{% katex %}\lambda =\frac{5}{4}{% endkatex %}  
解：因为数量积为0，则{% katex %}\vec{a}\cdot \vec{b}=0{% endkatex %}  
即：{% katex %}2\lambda +2\lambda -5=0{% endkatex %}  
解得：{% katex %}\lambda =\frac{5}{4}{% endkatex %}  
例题2：设{% katex %}|\vec{a}|=3,|\vec{b}|=2{% endkatex %}，且{% katex %}\vec{a}\perp \vec{b}{% endkatex %}，则{% katex %}(3\vec{a}-\vec{b})(\vec{a}+\vec{b})=23{% endkatex %}。  
解：因为{% katex %}\vec{a}\perp \vec{b}{% endkatex %}，则{% katex %}\vec{a}\cdot \vec{b}=0{% endkatex %}  
由原式得{% katex %}3\vec{a}^2 +3\vec{a}\vec{b}-\vec{b} \cdot \vec{a}-\vec{b}^2 {% endkatex %}  
因为{% katex %}\vec{a}^2=|\vec{a}|^2{% endkatex %}  
则有{% katex %}3\cdot 3^2+3\cdot 0-0-2^2=23{% endkatex %}  

---
### 向量叉乘的运算
若{% katex %}\vec{a}=(x_1,y_1,z_1),\vec{b}=(x_2,y_2,z_2){% endkatex %}  
则{% katex %}\vec{a} \times \vec{b}=\begin{vmatrix}\vec{i} &\vec{j} &\vec{k} \\x_1 &y_1 &z_1 \\x_2 &y_2 &z_2 \\\end{vmatrix} {% endkatex %}  
{% katex %}\begin{vmatrix} y_1& z_1\\y_2&z_2\end{vmatrix}\cdot \vec{i}-\begin{vmatrix} x_1& z_1\\x_2&z_2\end{vmatrix}\cdot \vec{j}+\begin{vmatrix} x_1& y_1\\x_2&y_2\end{vmatrix}\cdot \vec{k}{% endkatex %}    
补充：  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231529147.png)  
例题1：{% katex %}\vec{a}=(1,0,-1),\vec{b}=(0,2,3){% endkatex %}，求{% katex %}\vec{a}\times \vec{b}{% endkatex %}  
解：{% katex %}\vec{a} \times \vec{b}=\begin{vmatrix}\vec{i} &\vec{j} &\vec{k} \\1 &0 &-1 \\0 &2 &3 \\\end{vmatrix} {% endkatex %}  
{% katex %}\begin{vmatrix} 0& -1\\2&3 \end{vmatrix}\cdot \vec{i}-\begin{vmatrix} 1& -1\\0 &3 \end{vmatrix}\cdot \vec{j}+\begin{vmatrix} 1& 0\\0 & 2 \end{vmatrix}\cdot \vec{k}{% endkatex %}  
{% katex %}=[0-(-2)]\vec{i}-(3-0)\vec{j}+(2-0)\vec{k}{% endkatex %}  
{% katex %}=2\vec{i}-3\vec{j}+2\vec{k}{% endkatex %}  
即{% katex %}\vec{a} \times \vec{b}=(2,-3,2){% endkatex %}  
**三阶行列式的计算方法**：  
对角线法：
{% katex %}D_3=\begin{vmatrix}1&2&0 \\0&1&0 \\1&1&2\end{vmatrix}{% endkatex %}  
将第一列和第二列往后排列，使用`主对角-副对角`,即捺-撇；  
{% katex %}=\begin{vmatrix}1&2&0 \\0&1&0 \\1&1&2\end{vmatrix}{\color{Red} \begin{matrix}1&2 \\0&1 \\1&1\end{matrix}} {% endkatex %}  
{% katex %}=(2+0+0)-(0+0+0)=2{% endkatex %}   
![某一表白公式](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231550391.png)  
![例题1使用对角线法解题](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231554410.png)  

---
### {% katex %}\vec{a}\times \vec{b} {% endkatex %}的几何意义
{% katex %}|\vec{a}\times \vec{b}|=|\vec{a}|\cdot |\vec{b}|\cdot \sin \theta {% endkatex %}    
几何意义：指由{% katex %}\vec{a},\vec{b} {% endkatex %}所构成的平行四边形的面积。  
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231604992.png)
若求三角形的面积，则{% katex %}\frac{1}{2}|\vec{a}\times \vec{b}| {% endkatex %}  
例题1：已知{% katex %}\bigtriangleup ABC{% endkatex %}上的三个顶点{% katex %}A(1,2,3),B(3,-1,2),C(1,3,2){% endkatex %}，则AB边上的高是多少，{% katex %}h=\frac{2\sqrt{21} }{7}{% endkatex %}。  
解：
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231617833.png)  
{% katex %}\vec{AB}=(3-1,-1-2,2-3)=(2,-3,-1){% endkatex %}  
{% katex %}\vec{AC}=(1-1,3-2,2-3)=(0,1,-1){% endkatex %}  
{% katex %}|\vec{AB}\times \vec{AC}|=\begin{vmatrix}\vec{i} &\vec{j} &\vec{k} \\2 &-3 &-1 \\0 &1 &-1 \\\end{vmatrix} {% endkatex %}  
{% katex %}=（3\vec{i}+0+2\vec{k}-(0-\vec{i}-2\vec{j}){% endkatex %}  
{% katex %}=4\vec{i}+2\vec{j}+2\vec{k}=(4,2,2){% endkatex %}  
{% katex %}|\vec{AB}\times \vec{AC}|=\sqrt{4^2+2^2+2^2}=\sqrt{24}=2\sqrt{6} {% endkatex %}  
{% katex %}S_\bigtriangleup =\frac{1}{2}|\vec{AB}\times \vec{AC}|=\frac{1}{2} \cdot 2\sqrt{6}=\sqrt{6} {% endkatex %}  
{% katex %}\vec{AB}=\sqrt{2^2+(-3)^2+(-1)^2}=\sqrt{14}{% endkatex %}  
{% katex %}h=\frac{S_\bigtriangleup \cdot 2}{\vec{AB}}=\frac{2\sqrt{6} }{\sqrt{14} }{% endkatex %}  
解得{% katex %}h=\frac{2\sqrt{21} }{7}{% endkatex %}  

---
### 向量间位置关系
设{% katex %}\vec{a}=(x_1,y_1,z_1),\vec{b}=(x_2,y_2,z_2){% endkatex %}  
{% katex %}\vec{a}\perp \vec{b} \Leftrightarrow \vec{a}\cdot \vec{b}{% endkatex %}    
{% katex %}\vec{a}\parallel \vec{b} \Leftrightarrow \frac{x_1}{x_2}=\frac{y_1}{y_2}=\frac{z_1}{z_2}{% endkatex %}对应坐标比值相等    
例题1：设{% katex %}\vec{a}=(5,x,-2),\vec{b}=(y,6,4){% endkatex %}两向量平行，则{% katex %}x=(),y=() {% endkatex %}   
解：因为{% katex %}\vec{a}\parallel \vec{b}{% endkatex %}   
则{% katex %}\frac{5}{y}=\frac{x}{6}=\frac{-2}{4}{% endkatex %}  
解得：{% katex %}x=-3,y=-10{% endkatex %}  

---
### 空间平面方程  
1. 点法式方程：  
{% katex %}A(x-x_0)+B(y_-y_0)+C(z-z_0)=0{% endkatex %}  
解析：       
![](https://blog.sunnyduskxi.workers.dev/gh/sunnydusk/my-blog-images@main/202311231642831.png)
   (1). 称垂直于平面的非零向量为平面法向量，记作{% katex %}\vec{n}=(A,B,C){% endkatex %}  
   (2). 在平面上找出不重合的两点{% katex %}M(x,y,z),M_0(x_0,y_0,z_0){% endkatex %}，连接{% katex %}\vec{M_0M}=(x-x_0,y-y_0,z-z_0){% endkatex %}  
   (3). 由{% katex %}\vec{n} \perp \vec{M_0M}{% endkatex %}，则{% katex %}\vec{n} \cdot \vec{M_0M}=0{% endkatex %}展开得：{% katex %}A(x-x_0)+B(y-y_0)+C(z-z_0)=0{% endkatex %}            
2. 一般式方程(点法式展开)：  
{% katex %}Ax+By+Cz+D=0{% endkatex %}D为常数   

---
### 空间平面位置关系
设有两个平面：{% katex %}\pi _1:A_1x+B_1y+C_1z+D_1=0{% endkatex %}，{% katex %}\pi _2:A_2x+B_2y+C_2z+D_2=0{% endkatex %}  
则{% katex %}\vec{n_1}=(A_1,B_1,C_1);\vec{n_2}=(A_2,B_2,C_2){% endkatex %}   
法向量，看x,y,z的系数    
1. 平行：{% katex %}\pi _1 \parallel \pi _2 \Leftrightarrow \vec{n_1} \parallel \vec{n_2} \Leftrightarrow \frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}{% endkatex %}对应坐标比值相等    
2. 垂直：{% katex %}\pi _1 \perp \pi _2 \Leftrightarrow \vec{n_1} \perp \vec{n_2} \Leftrightarrow \vec{n_1} \cdot \vec{n_2}=0 \Leftrightarrow A_1\cdot A_2+B_1\cdot B_2+C_1\cdot C_2=0{% endkatex %}    
3. 相交：{% katex %}\frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}{% endkatex %}不成立。  
4. 重合：{% katex %}\begin{Bmatrix}平行\\有交点\end{Bmatrix}\Longrightarrow \frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}=\frac{D_1}{D_2}{% endkatex %}     
注：找向量{% katex %}\vec{n_1},\vec{n_2}{% endkatex %}。   
位置关系与向量位置关系一致。   
例题1：设有三个平面：{% katex %}\pi _1:x-5y+2z=-1{% endkatex %}，{% katex %}\pi _2:3x-2y+5z+8=0{% endkatex %}，{% katex %}\pi _3:4x+2y+3z-9=0{% endkatex %}，则{% katex %}\pi _1,\pi _2,\pi _3{% endkatex %}的位置关系是：(B)   
A. {% katex %}\pi _1 \parallel \pi _2{% endkatex %}   
B. {% katex %}\pi _1 \perp \pi _3{% endkatex %}  
C. {% katex %}\pi _2 \perp \pi _3{% endkatex %}  
D. {% katex %}\pi _2 \parallel \pi _3{% endkatex %}  
解析：{% katex %}\vec{n_1}=(1,-5,2);\vec{n_2}=(3,-2,5);\vec{n_3}=(4,2,3){% endkatex %}  
{% katex %}\vec{n_1} \parallel \vec{n_2}=\frac{1}{3}\neq \frac{5}{2}\neq \frac{2}{5}{% endkatex %}所以A不平行，错误。    
{% katex %}\vec{n_1} \cdot \vec{n_3}=1\cdot 4+(-5)\cdot 2+2\cdot 3=0{% endkatex %}所以B两个互相垂直，正确。    
{% katex %}\vec{n_2} \cdot \vec{n_3}=3\cdot 4+(-2)\cdot 2+5\cdot 3\neq 0{% endkatex %}所以两个平面不垂直，错误。    
{% katex %}\vec{n_2} \parallel \vec{n_3}=\frac{3}{4}\neq \frac{-2}{2}\neq \frac{5}{3}{% endkatex %}所以D不平行，错误。    
已知条件，求平面方程（**题型**）：  
解题思路：
   (1). {% katex %}找目标条件\left\{\begin{matrix}1. 平面上一点(x_0,y_0,z_0)\\2. 平面\vec{n}(A,B,C) \end{matrix}\right.{% endkatex %}  
   (2). 代入点法式方程：{% katex %}A(x-x_0)+B(y-y_0)+C(z-z_0)=0{% endkatex %}  
例题2：求过点{% katex %}M(1,2,3){% endkatex %}且{% katex %}\vec{n}=(4,5,6){% endkatex %}的平面方程。  
解： 带入点法式公式{% katex %}A(x-x_0)+B(y-y_0)+C(z-z_0)=0{% endkatex %}  
{% katex %}4(x-1)+5(y-2)+6(z-3)=0{% endkatex %}  
{% katex %}4x+5y+6z-32=0{% endkatex %}    
例题3：求过两点{% katex %}A(1,1,1),B(0,1,-1){% endkatex %}且垂直于平面{% katex %}x+y+z=0{% endkatex %}的平面方程。   
解析：{% katex %}\vec{n_1}\perp \vec{n_2}\Longrightarrow \vec{n_1}\times \vec{n_2}=0{% endkatex %}   
且有{% katex %}\begin{matrix}\vec{c}\perp \vec{a}\\ \vec{c}\perp \vec{b}\end{matrix}\Longrightarrow \vec{c}=\vec{a}\times \vec{b} {% endkatex %}    
解：{% katex %}\vec{AB}=(-1,0,-2){% endkatex %}，设符求平面法向量为{% katex %}\vec{n_1}{% endkatex %}，故{% katex %}\vec{n_1}\perp \vec{AB}{% endkatex %}  
又平面{% katex %}x+y+z=0{% endkatex %}得{% katex %}\vec{n_2}=(1,1,1){% endkatex %}由题可知{% katex %}\vec{n_1}\perp \vec{n_2}{% endkatex %}    
由上可知{% katex %}\vec{n_1}=\vec{AB}\times \vec{n_2}{% endkatex %}  
{% katex %}\vec{n_1}=\begin{vmatrix}\vec{i} &\vec{j} &\vec{k} \\-1&0&-2\\1&1&1\end{vmatrix}{\color{Red} \begin{matrix}\vec{i} &\vec{j} \\-1&0\\1&1\end{matrix}} {% endkatex %}   
{% katex %}=(0-2\vec{j}-\vec{k})-(0-2\vec{i}+\vec{j})=(2,-1,-1){% endkatex %}    
又因为过点{% katex %}A(1,1,1){% endkatex %}，故{% katex %}1\cdot 2+1\cdot (-1)+1\cdot (-1)=0{% endkatex %}  
所以平面方程为：{% katex %}2x-y-z=0{% endkatex %}    

---
### 空间平面的夹角及点面距离公式
1. 平面间的夹角：  
两个平面夹角就是两个平面法向量的夹角。  
解法：{% katex %}\left\{\begin{matrix}1. 找\vec{n_1},\vec{n_2} \\2. 求\cos \theta =\frac{\vec{n_1}\cdot \vec{n_2} }{|\vec{n_1} |\cdot |\vec{n_2} |} \\3. 反推\theta 大小\end{matrix}\right.{% endkatex %}  
2. 点到平面的距离：  
设点{% katex %}P(x_0,y_0,z_0){% endkatex %}到平面{% katex %}\pi :Ax+By+Cz+D=0{% endkatex %}的距离为d  
则有公式：{% katex %}d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}{% endkatex %}   
例题：求点{% katex %}M(1,2,3){% endkatex %}到平面{% katex %}\pi :x+y+2z+3=0{% endkatex %}的距离。  
解：使用公式：{% katex %}d=\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}{% endkatex %}  
{% katex %}d=\frac{|1+2+2\cdot 3+3|}{\sqrt{1^2+1^2+2^2}}=\frac{12}{\sqrt{8}}=\frac{\sqrt{6} }{2}{% endkatex %}    

---
### 特殊平面方程  
平面的一般式方程：{% katex %}Ax+By+Cz+D=0{% endkatex %}    
1. {% katex %}D=0，Ax+By+Cz+D=0{% endkatex %}过原点的平面，称为原点平面。   
2. 少某个字母({% katex %}x,y,z{% endkatex %})，设少{% katex %}z,Ax+By+D=0 (z \in R){% endkatex %}则平行于z轴，少哪个字母即平行于某轴。  
3. 少了两个字母({% katex %}z,y{% endkatex %})，设少{% katex %}z,y,Ax+D=0 (z,y \in R){% endkatex %}则平行或重合于yoz平面，少两个字母即平行或重合于某平面。   
4. 少了某个字母和某个系数({% katex %}z,D{% endkatex %})，设少{% katex %}Ax+By=0{% endkatex %}则平面经过了z轴，少了哪个字母即经过了某轴。    
例题1：求经过了z轴和点{% katex %}M_0(-3,1,2){% endkatex %}的平面方程。  
解：设待求平面为{% katex %}Ax+By=0{% endkatex %}   
因为点{% katex %}M_0(-3,1,2){% endkatex %}在平面上      
所以{% katex %}A\cdot (-3)+B\cdot 1=0{% endkatex %}   
得{% katex %}A=\frac{B}{3}{% endkatex %}      
取{% katex %}B=3{% endkatex %}，得{% katex %}A=1{% endkatex %}   
即平面方程为：{% katex %}x+3y=0{% endkatex %}   

   
---
### 空间直线方程  
1. 直线的点向式方程：{% katex %}\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}{% endkatex %}   
(1). 称平行于直线的向量为方向向量，{% katex %}\vec{S}=(m,n,p){% endkatex %}  
(2). 取直线上两不重合的点{% katex %}M(x,y,z),M_0(x_0,y_0,z_0){% endkatex %}连接{% katex %}M_0M{% endkatex %}得：  
{% katex %}\vec{M_0M}=(x-x_0,y-y_0,z-z_0){% endkatex %},有{% katex %}\vec{M_0M} \parallel \vec{S}{% endkatex %}  
得：{% katex %}\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}{% endkatex %}     
注：`看分母，得{% katex %}\vec{S}=(m,n,p){% endkatex %}`  
`看分子，得点{% katex %}M(x_0,y_0,z_0){% endkatex %}`  
2. 参数方程  
若令{% katex %}\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}=t{% endkatex %}   
则有：{% katex %}\left\{\begin{matrix}x=x_0+mt\\y=y_0+nt\\z=z_0+pt\end{matrix}\right.{% endkatex %}    
一般求`交点`使用参数方程。  
3. 直线的一般式方程（交面式）    
由两平面相交而成的直线，称为交线。   
设两平面方程为：{% katex %}\left\{\begin{matrix}A_1x+B_1y+C_1z+D_1=0\\A_2x+B_2y+C_2z+D_2=0\end{matrix}\right.{% endkatex %}     

---
### 直线与直线的位置关系  
设两直线方程为：{% katex %}\left\{\begin{matrix}l_1:\frac{x-x_1}{m_1}=\frac{y-y_1}{n_1}=\frac{z-z_1}{p_1}\\l_2:\frac{x-x_2}{m_2}=\frac{y-y_2}{n_2}=\frac{z-z_2}{p_2}\end{matrix}\right.{% endkatex %}     
则有：{% katex %}\vec{S_1}=(m_1,n_1,p_1);\vec{S_2}=(m_2,n_2,p_2){% endkatex %}   
1. 平行：{% katex %}\vec{S_1} \parallel \vec{S_2}{% endkatex %}    
2. 垂直：{% katex %}\vec{S_1} \perp \vec{S_2}{% endkatex %}    
3. 重合：{% katex %}\left\{\begin{matrix}1. 平行\\2. 有交点\end{matrix}\right.{% endkatex %}   
**线和线的位置关系与向量关系一致**。  

---
### 直线与平面的位置关系  
与向量的位置关系相反。  
设平面方程为：{% katex %}\pi :Ax+By+Cz+D=0{% endkatex %}，直线方程为：{% katex %}l:\frac{x-x_0}{m}=\frac{y-y_0}{n}=\frac{z-z_0}{p}{% endkatex %}   
则有：{% katex %}\vec{n}=(A,B,C);\vec{S}=(m,n,p){% endkatex %}  
1. 平行：{% katex %}\vec{n} \perp \vec{S}{% endkatex %}    
2. 垂直：{% katex %}\vec{n} \parallel \vec{S}{% endkatex %}  
3. 重合：{% katex %}\left\{\begin{matrix}1. 平行\\2. 直线上的点(x_0,y_0,z_0)在平面上\end{matrix}\right.{% endkatex %}     

---
### 例题
1. 直线与直线的位置关系   
例题1：确定{% katex %}l_1:\frac{x+14}{3}=\frac{y}{1}=\frac{z+21}{5}{% endkatex %}与直线{% katex %}\left\{\begin{matrix}x=\frac{1}{3}-9t \\y=1-3t\\z=\frac{1}{-3}-15t \end{matrix}\right.{% endkatex %}的位置关系。    
解：{% katex %}\vec{S_1}=(3,1,5);\vec{S_2}=(-9,-3,-15){% endkatex %}   
{% katex %}\because \frac{3}{-9}=\frac{1}{-3}=\frac{5}{-15}=-\frac{1}{3}{% endkatex %}    
{% katex %}\therefore \vec{S_1} \parallel \vec{S_2}{% endkatex %}   
又因为{% katex %}l_2{% endkatex %}上点{% katex %}(\frac{1}{3},1,-\frac{1}{3}){% endkatex %}不满足{% katex %}l_1{% endkatex %}，所以两直线平行。    
2. 直线与平面的位置关系   
例题2：直线{% katex %}l:\frac{x}{2}=\frac{y-5}{5}=\frac{z-6}{3}{% endkatex %}与平面{% katex %}\pi :15x-9y+5z=-15{% endkatex %}的位置关系为(C)。   
A. 平行     B. 垂直     C. 直线在平面上     D. 相交不垂直     
解：{% katex %}\vec{n}=(15,-9,5);\vec{S}=(2,5,3){% endkatex %}   
{% katex %}\frac{2}{15}\neq \frac{5}{-9}\neq \frac{3}{5}{% endkatex %}故不成立      
{% katex %}\vec{n} \cdot \vec{S}=15\cdot 2+(-9)\cdot 5+5\cdot 3=0{% endkatex %}   
{% katex %}\therefore \vec{n} \perp \vec{S}{% endkatex %}  
故{% katex %}l \parallel \pi {% endkatex %}     
又直线l上的点{% katex %}M_0(0,5,6){% endkatex %}满足平面方程，即重合。   
3. 求平面与直线的交点坐标     
解法：直线转换为参数方程，带入平面方程，解出参数t，带入参数方程，求出交点坐标。   
例题3：求{% katex %}\frac{x-2}{3}=\frac{y}{2}=\frac{z-1}{5}{% endkatex %}与{% katex %}x+y+z+2=0{% endkatex %}的交点。   
解：令{% katex %}\frac{x-2}{3}=\frac{y}{2}=\frac{z-1}{5}=t{% endkatex %}  
则直线为：{% katex %}\left\{\begin{matrix}x=2+3t\\y=2t\\z=1+5t\end{matrix}\right.{% endkatex %}   
{% katex %}2+3t+2t+1+5t+2=0{% endkatex %}   
{% katex %}10t=-5{% endkatex %}   
{% katex %}t=-\frac{1}{2}{% endkatex %}    
故当{% katex %}t=-\frac{1}{2}{% endkatex %}时，{% katex %}x=2+3\cdot (-\frac{1}{2})=\frac{1}{2}{% endkatex %}   
{% katex %}y=2\cdot (-\frac{1}{2})=-1{% endkatex %}   
{% katex %}z=1+5\cdot (-\frac{1}{2})=-\frac{3}{2}{% endkatex %}  
所以交点为：{% katex %}M(\frac{1}{2},-1,-\frac{3}{2}){% endkatex %}   
例题4：求过点{% katex %}A(2,-1,3){% endkatex %}作平面{% katex %}x-2y-2z+11=0{% endkatex %}垂线，求垂足的坐标。    
解：设垂足为点{% katex %}B(x_0,y_0,z_0){% endkatex %}   
平面{% katex %}\vec{n}=(1,-2,-2){% endkatex %}，由题可知直线AB   
{% katex %}\vec{S}=(1,-2,-2){% endkatex %},则直线AB为：   
{% katex %}\frac{x-2}{1}=\frac{y+1}{-2}=\frac{z-3}{-2}=t{% endkatex %}   
{% katex %}\left\{\begin{matrix}x=t+2\\y=-2t-1\\z=-2t+3\end{matrix}\right.{% endkatex %}   
代入平面{% katex %}x-2y-2z+11=0{% endkatex %}   
得：{% katex %}t+2-2(-2t-1)-2(-2t+3)+11=0{% endkatex %}   
解得{% katex %}t=-1{% endkatex %}   
故{% katex %}t=1{% endkatex %}时直线AB与平面有交点
即垂足为{% katex %}(1,1,5){% endkatex %}    

--- 
### 直线与直线的夹角{% katex %}\theta {% endkatex %}  
(1). 找两个直线的方向向量{% katex %}\vec{S_1},\vec{S_2}{% endkatex %}   
(2). 求{% katex %}\cos \theta =\frac{\vec{S_1}\cdot \vec{S_2} }{|\vec{S_1} |\cdot |\vec{S_2} |}{% endkatex %}反求{% katex %}\theta {% endkatex %}的大小。  
例题：两条直线{% katex %}l_1:\frac{x-1}{1}=\frac{y-5}{-2}=\frac{z+8}{1}{% endkatex %}与{% katex %}\left\{\begin{matrix}x=t+6\\y=t\\z=-2t+3\end{matrix}\right.{% endkatex %}的夹角为(A)    
A. {% katex %}\frac{\pi }{3}{% endkatex %}    B. {% katex %}\frac{\pi }{4}{% endkatex %}    C. {% katex %}\frac{\pi }{6} {% endkatex %}    D. {% katex %}\frac{\pi }{2} {% endkatex %}  
解：{% katex %}\vec{S_1}=(1,-2,1);\vec{S_2}=(1,1,-2){% endkatex %}   
{% katex %}\cos \theta =|\frac{\vec{S_1} \cdot \vec{S_2} }{|\vec{S_1}|\cdot |\vec{S_2}|}|{% endkatex %}    
{% katex %}=|\frac{1\cdot 1+(-2)\cdot 1+1\cdot (-2)}{\sqrt{1^2+(-2)^2+1^2}\cdot \sqrt{1^2+1^2+(-2)^2}}|=\frac{3}{\sqrt{6} \cdot \sqrt{6} }=\frac{3}{6}=\frac{1}{2}{% endkatex %}   
{% katex %}\therefore \theta =\frac{\pi }{3}{% endkatex %}    