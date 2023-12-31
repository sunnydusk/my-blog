---
title: 高等数学-线性代数
top: 14
hexo-math: true
type: "categories"
categories: 
  - 升学
tags:
  - 学习资料
  - math
date: 2023-11-24 16:26:00
---

# 线性代数
## 行列式
行列式书写形式{% katex %}D_3=\begin{vmatrix}a_{11}&a_{12} &a_{13} \\a_{21}&a_{22} &a_{23} \\a_{31} &a_{32} &a_{33}\end{vmatrix}{% endkatex %}    
用“||”符号表达；
行列数相同；    
aij构成行列式的元素，i为行，j为列；    
横行r，纵列c；
除了D还可以用det()或者|A|表示；    
行列式的本质：是一个数(函数)；    

## 行列式的计算
本质上的计算：     
{% katex %}D_n=\begin{vmatrix}a_{11} &… & a_{1n}\\··· & ··· &··· \\a_{n1} &··· &a_{nn}\end{vmatrix}{% endkatex %}    
即取自不同行，不同列元素乘积的代数和；
### 对角线法则   
**仅适用于二阶到三阶的行列式计算**    
1. 二阶行列式     
{% katex %}D_2=\begin{vmatrix}a &b \\c &d\end{vmatrix}=ad-cb{% endkatex %}      
2. 三阶行列式    
{% katex %}D_3=\begin{vmatrix}a_{11} &a_{12} &a_{13} \\a_{21} &a_{22} &a_{23} \\a_{31} &a_{32} &a_{33}\end{vmatrix}=a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{13}a_{22}a_{31}-a_{12}a_{21}a_{33}-a_{11}a_{23}a_{32}{% endkatex %}     
例题1：求三阶行列式{% katex %}\begin{vmatrix}1&1&-5\\-2&2&2\\1&-1&0\end{vmatrix}{% endkatex %}       
解：{% katex %}\begin{vmatrix}1&1&-5\\-2&2&2\\1&-1&0\end{vmatrix}{\color{Red} \begin{matrix}1&1\\-2&2\\1&-1\end{matrix}} {% endkatex %}     
即：{% katex %}1*2*0+1*2*1+(-5)*(-2)*(-1)-(-5)*2*1-1*2*(-1)-1*(-2)*0{% endkatex %}       
即：{% katex %}=0+2-10+10+2-0=4{% endkatex %}        
例题2：求三阶行列式{% katex %}\begin{vmatrix}1&1&1\\1&2&x\\1&4&x^2\end{vmatrix}=0{% endkatex %}的解。      
解：{% katex %}\begin{vmatrix}1&1&1\\1&2&x\\1&4&x^2\end{vmatrix}{\color{Red} \begin{matrix}1&1\\1&2\\1&4\end{matrix}} {% endkatex %}       
即：{% katex %}1*2*x+1*x*1+1*1*4-(4*x*1+x^2*1*1)=0{% endkatex %}    
即：{% katex %}x^2-3x+2=0{% endkatex %}    
即：{% katex %}(x-1)(x-2)=0{% endkatex %}      
即：{% katex %}x_1=1,x_2=2{% endkatex %}     

---
### 化三角形行列式
主对角类型：   
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312191639294.png)
{% katex %}D_n=\begin{vmatrix}a_{11} &0 &0 \\0 &a_{22} &0 \\0 &0 &a_{33}\end{vmatrix}=a_{11}a_{22}a_{33}{% endkatex %}      
副对角线型：    
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312191640557.png)
{% katex %}D_n=\begin{vmatrix}0 &0 &a_{13} \\0 &a_{22} &0 \\a_{31} &0 &0\end{vmatrix}=(-1^{\frac{n(n-1)}{2} })a_{13}a_{22}a_{31}{% endkatex %}    
例题1：求三阶行列式{% katex %}\begin{vmatrix}1&2&3\\0&2&1\\0&0&3\end{vmatrix}{% endkatex %}的值。   
解：由原式得{% katex %}1*2*3=6{% endkatex %}      
例题2：求三阶行列式{% katex %}\lim_{n \to \infty}\begin{vmatrix}\frac{1}{2}&-1&2\\0&\frac{1}{3} &1\\0&0&-\frac{1}{4} \end{vmatrix}^n{% endkatex %}        
解：由原式得{% katex %}\lim_{n \to \infty}(\frac{1}{2}*\frac{1}{3}*(-\frac{1}{4}) )^n{% endkatex %}
{% katex %}\lim_{n \to \infty}(-\frac{1}{24})^n{% endkatex %}      
{% katex %}\lim_{n \to \infty}\frac{-1^n}{24^n}{% endkatex %}      
{% katex %}\lim_{n \to \infty}\frac{1}{\infty}=0{% endkatex %}      

---
### 求解行（列）和相等行列式  
每一行或者每一列加起来的和相等的行列式；   
解法：化为三角形行列式；    
(1). 将所有行（列）全部加到第一行（列）      
(2). 提取第一行（列）的公因子    
(3). 构造三角形行列式求解     
注：**构造三角形行列式的技巧**：a. 先找"1" ； b. 按列用“1”化0；    
例题1：求行列式{% katex %}\begin{vmatrix}1+a&1&1&1\\2&2+a&2&2\\3&3&3+a&3\\4&4&4&4+a\end{vmatrix}{% endkatex %}的值。     
解：原式列和相等；    
{% katex %}D=\frac{r_1+r_i}{i=2,3,4}=\begin{matrix}10+a&10+a&10+a&10+a\\2&2+a&2&2\\3&3&3+a&3\\4&4&4&4+a\end{matrix} {% endkatex %}   
{% katex %}D=\frac{r_1+r_i}{i=2,3,4}=(10+a)\begin{matrix}1&1&1&1\\2&2+a&2&2\\3&3&3+a&3\\4&4&4&4+a\end{matrix} {% endkatex %}   
{% katex %}=\frac{r_2+2r_i}{r_3-3r_1,r_4+4r_1}=(10+a)\begin{matrix}1&1&1&1\\0&a&0&0\\0&0&a&0\\0&0&0&a\end{matrix} {% endkatex %}   
{% katex %}=(10+a)(1\cdot a \cdot a\cdot a )=(10+a)\cdot a^3{% endkatex %}   

---
### 爪形行列式的计算  
形如除一行和一列以及主对角线外都为0的行列式为爪形行列式；     
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202312191713573.png)
解法：一般从“爪尖”出发，逐步消掉第一列为0，化为三角形行列式计算；   
例题1：求行列式{% katex %}\begin{vmatrix}1&1&1&1\\1&2&0&0\\1&0&3&0\\1&0&0&4\end{vmatrix}{% endkatex %}       
解：原式为爪形行列式；    
{% katex %}D=\frac{c_1-\frac{1}{4}c_4 }{}=\begin{matrix}1-\frac{1}{4}&1&1&1\\1&2&0&0\\1&0&3&0\\0&0&0&4\end{matrix} {% endkatex %}      
{% katex %}D=\frac{c_1-\frac{1}{3}c_3 }{}=\begin{matrix}1-\frac{1}{4}-\frac{1}{3}&1&1&1\\0&2&0&0\\0&0&3&0\\0&0&0&4\end{matrix} {% endkatex %}      
{% katex %}D=\frac{c_1-\frac{1}{2}c_2 }{}=\begin{matrix}1-\frac{1}{4}-\frac{1}{3}-\frac{1}{2}&1&1&1\\0&2&0&0\\1&0&3&0\\0&0&0&4\end{matrix} {% endkatex %}      
{% katex %}=(1-\frac{1}{4}-\frac{1}{3}-\frac{1}{2})\cdot 24=-2 {% endkatex %}      

---
### 行列式的展开定理（降阶法）
1. 余子式   
去掉aij所在的行与列的全部元素，剩余元素所构成的新行列式，叫元素aij的余子式，记为mij；   
2. 代数余子式    
aij的余子式乘以(-1)^(i+j)Mij，记为Aij；即Aij=(-1)^(i+j)Mij；   
例题1：求三阶行列式{% katex %}\begin{vmatrix}3&1&4\\8&9&5\\1&1&1\end{vmatrix}{% endkatex %}中元素{% katex %}a_{32}=1{% endkatex %}代数余子式为(D)。    
A.1     B.8     C.15     D.17      
解：元素{% katex %}a_{32}{% endkatex %}的代数余子式为{% katex %}A_{32}=(-1)^{3+2}\cdot M_{32}=-M_{32}{% endkatex %}      
{% katex %}=-\begin{vmatrix}3&4\\8&5\end{vmatrix}=-(15-32){% endkatex %}      
{% katex %}A_{32}=17{% endkatex %}        
例题：已知行列式{% katex %}D=\begin{vmatrix}1&0&2\\x&3&1\\4&x&5\end{vmatrix}{% endkatex %}的代数余子式{% katex %}A_{12}=-1{% endkatex %}则{% katex %}A_{21}={% endkatex %}()。     
解：{% katex %}A_{12}=(-1)^{1+2}\cdot M_{12}=-M_{12}{% endkatex %}      
{% katex %}=-\begin{vmatrix}x&1\\4&5\end{vmatrix}=-5x+4{% endkatex %}      
{% katex %}A_{12}=-5x+4=-1{% endkatex %}      
{% katex %}x=1{% endkatex %}      
{% katex %}A_{21}=(-1)^{2+1}\cdot M_{21}=-M_{21}{% endkatex %}      
{% katex %}=-\begin{vmatrix}0&2\\x&1\end{vmatrix}=-2x{% endkatex %}      
{% katex %}A_{21}=(-1)\cdot (-2x)=2\cdot 1=2{% endkatex %}