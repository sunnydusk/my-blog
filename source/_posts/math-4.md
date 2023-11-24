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
### 向量代数  
#### 向量的概念
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
#### 空间直角坐标系及其单位向量
1. {% katex %}\vec{i},\vec{j},\vec{k}{% endkatex %}分别为x,y,z轴上的单位向量，称为空间直角坐标系的基向量。   
2. 注意：若{% katex %}2\vec{i}+3\vec{j}-2\vec{k} {% endkatex %},则为(2,3,-2)  

---
#### 向量的运算法则  
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
#####  向量点乘的几何运算
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
##### 向量叉乘的运算
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
##### {% katex %}\vec{a}\times \vec{b} {% endkatex %}的几何意义
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
##### 向量间位置关系
设{% katex %}\vec{a}=(x_1,y_1,z_1),\vec{b}=(x_2,y_2,z_2){% endkatex %}  
{% katex %}\vec{a}\perp \vec{b} \Leftrightarrow \vec{a}\cdot \vec{b}{% endkatex %}    
{% katex %}\vec{a}\parallel \vec{b} \Leftrightarrow \frac{x_1}{x_2}=\frac{y_1}{y_2}=\frac{z_1}{z_2}{% endkatex %}对应坐标比值相等    
例题1：设{% katex %}\vec{a}=(5,x,-2),\vec{b}=(y,6,4){% endkatex %}两向量平行，则{% katex %}x=(),y=() {% endkatex %}   
解：因为{% katex %}\vec{a}\parallel \vec{b}{% endkatex %}   
则{% katex %}\frac{5}{y}=\frac{x}{6}=\frac{-2}{4}{% endkatex %}  
解得：{% katex %}x=-3,y=-10{% endkatex %}  

---
##### 空间平面方程  
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
##### 空间平面位置关系
设有两个平面：{% katex %}\pi _1:A_1x+B_1y+C_1z+D_1=0{% endkatex %}，{% katex %}\pi _2:A_2x+B_2y+C_2z+D_2=0{% endkatex %}  
则{% katex %}\vec{n_1}=(A_1,B_1,C_1);\vec{n_2}=(A_2,B_2,C_2){% endkatex %}   
法向量，看x,y,z的系数    
1. 平行：{% katex %}\pi _1 \parallel \pi _2 \Leftrightarrow \vec{n_1} \parallel \vec{n_2} \Leftrightarrow \frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}{% endkatex %}对应坐标比值相等    
2. 垂直：{% katex %}\pi _1 \perp \pi _2 \Leftrightarrow \vec{n_1} \perp \vec{n_2} \Leftrightarrow \vec{n_1} \cdot \vec{n_2}=0 \Leftrightarrow A_1\cdot A_2+B_1\cdot B_2+C_1\cdot C_2=0{% endkatex %}    
3. 相交：{% katex %}\frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}{% endkatex %}不成立。  
4. 重合：{% katex %}\begin{Bmatrix}平行\\有交点\end{Bmatrix}\Longrightarrow \frac{A_1}{A_2}=\frac{B_1}{B_2}=\frac{C_1}{C_2}=\frac{D_1}{D_2}{% endkatex %}     
注：找向量{% katex %}\vec{n_1},\vec{n_2}{% endkatex %}。   
位置关系与向量位置关系一致。   
 