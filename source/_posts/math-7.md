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

---
### 行列式的计算
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
### 克拉默法则计算方程组
例如：{% katex %}\left\{\begin{matrix}3x_1-2x_2=12 \\2x_1+x_2=1\end{matrix}\right.{% endkatex %}       
利用法则可求出{% katex %}x_1,x_2{% endkatex %}        
{% katex %}D=\begin{vmatrix}3&-2\\2&1\end{vmatrix}{% endkatex %}       
{% katex %}x_1=\frac{\begin{vmatrix}12&-2\\1&1\end{vmatrix}}{D}=2 {% endkatex %}     
{% katex %}x_2=\frac{\begin{vmatrix}12&3\\1&2\end{vmatrix}}{D}=-3 {% endkatex %}     
所以，要求哪一个的值那么就对结果和另一个值的系数构成行列式进行求解；       

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
### 转置行列式
对行列式中的行与列进行转换      、
{% katex %}D=\begin{vmatrix}1&3&5\\2&4&8\\7&6&9\end{vmatrix}\Rightarrow D^T=\begin{vmatrix}1&2&7\\3&4&6\\5&8&9\end{vmatrix}{% endkatex %}       

---
### 行列式的性质     
1. 行列式和它的转置行列式相等；即{% katex %}D^T=D{% endkatex %}       
2. **(互换)**：交换行列式某两行(列)，行列式变号；         
3. **(倍乘)**：行列式的某行(列)的所以元素的公因子都可以提到行列式符号的外面；       
4. **(倍加)**：将行列式的某一行(列)各元素的{% katex %}k{% endkatex %}倍加到另外一行(列)的对应元素上去，行列式值不变；          
推论1. 如果行列式两行(列)完全相同，则行列式的值为0；       
推论2. 行列式中有一行(列)元素全为0，则行列式的值为0；     
推论3. 行列式中有两行(列)元素对应成比例，则行列式的值为0；     
5. 若行列式某一行(列)的元素是两个数之和，则行列式等于两个行列式之和；      

---
### 求解行（列）和相 等行列式  
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

---
### 拉普拉斯展开
某一行列式：对行列式任一行(列)的各元素与对应的代数余子式乘积之和；     
即{% katex %}D=a_{i1}A_{i1}+a_{i2}A_{i2}+……+a_{in}A_{in}(i=1,2……n){% endkatex %}        
或{% katex %}D=a_{1j}A_{1j}+a_{2j}A_{2j}+……+a_{nj}A_{nj}(j=1,2……n){% endkatex %}         
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091541149.png)

--- 
### 展开的逆用
求行列式的某行(列)代数余子式相加时，则将原行列式对应行(列)换成要求代数余子式前的系数；      

---
### 范德蒙行列式 
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091622421.png)
![](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091623024.png)
注意：第一行为1，以下每一行为上一个的次方；         

---
## 矩阵
### 矩阵的基本概念   
1. 定义：由{% katex %}m \times n{% endkatex %}个元素组成的{% katex %}m{% endkatex %}行{% katex %}n{% endkatex %}列的数表 **(行数和列数可以不相等)** 称为{% katex %}m{% endkatex %}行{% katex %}n{% endkatex %}列矩阵，记作{% katex %}A，A_{m \times n}{% endkatex %}或{% katex %}A=(a_{ij})_{m \times n}{% endkatex %}        
   (1). 行矩阵指只有一行的矩阵{% katex %}A=(a_1,a_2,……a_n){% endkatex %}       
   (2). 列矩阵只有一列的矩阵称为列矩阵；     
![列矩阵](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091918653.png)
   (3). 零矩阵指元素全为零的矩阵为零矩阵，记为{% katex %}O{% endkatex %}(*不同行或列的零矩阵不同*)      
   (4). 单位矩阵指主对角线上元素全为1，其余元素全为零的n阶方阵(**行列数相同**)，记为{% katex %}E、I{% endkatex %}        
![单位矩阵](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091921196.png)
   (5). 对角矩阵指除了从左上角到右下角的对角线以外的元素都是0；       
   (6). 三角形矩阵：主对角线的左下方的元素全为0是*上三角矩阵*，下三角矩阵反之；       
![三角形矩阵](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091923790.png)
注意：对角矩阵可以看作上三角矩阵，也可以看作下三角矩阵；      
   (7). 对称矩阵和反称矩阵：设{% katex %}A=(a_{ij}){% endkatex %}为{% katex %}n{% endkatex %}阶方阵，如果{% katex %}A^T=A{% endkatex %}，则为对称矩阵；若{% katex %}A^T=-A{% endkatex %}，则为反称矩阵。      
2. 性质       
   (1). 若{% katex %}A,B{% endkatex %}都是对称矩阵，则{% katex %}A+B，\lambda A{% endkatex %}也是对称矩阵(其中{% katex %}\lambda {% endkatex %}为任意常数)        
   (2). 若{% katex %}A,B{% endkatex %}都是对称矩阵，则{% katex %}AB{% endkatex %}为对称矩阵的充要条件{% katex %}AB=BA{% endkatex %}         

---
### 矩阵的运算
1. 加减运算：对应元素相加减     
设{% katex %}A=(a_{ij})_{m \times n}{% endkatex %}和{% katex %}B=(b_{ij})_{m \times n}{% endkatex %}均为{% katex %}m \times n{% endkatex %}矩阵，则{% katex %}A \pm B =(a_{ij }\pm b_{ij})_{m \times n}{% endkatex %}              
注意：**只能是同类型矩阵才可以进行加减运算且必须满足加法运算规律**
2. 矩阵的数乘：对矩阵所有元素进行数乘        
![矩阵的数乘](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403091942043.png)    
3. 矩阵的乘法        
设{% katex %}A{% endkatex %}是一个{% katex %}m \times s {% endkatex %}矩阵，{% katex %}B{% endkatex %}是一个{% katex %}s \times n{% endkatex %}，即{% katex %}A=(a_{ij})_{m  \times s},B=(b_{ij})_{s \times n}{% endkatex %}，则{% katex %}A,B{% endkatex %}矩阵的乘积为{% katex %}A_{m \times s} \cdot B_{s \times n}=C_{m \times n}{% endkatex %}或者为{% katex %}AB=C{% endkatex %}           
其中{% katex %}C_{ij}=\sum_{k=1}^{s}a_{ik}b_{kj}(i=1……m,j=1……n){% endkatex %}      
注意：**第一个矩阵的列数和第二个矩阵的行数相同才可以乘；矩阵乘法不满足乘法交换律，但满足结合律和分配律**        
   (1). {% katex %}(AB)C=A(BC){% endkatex %}       
   (2). {% katex %}k(AB)=(kA)B=A(kB){% endkatex %}，其中k为数；           
   (3). 左分配律：{% katex %}A(B+C)=AB+AC{% endkatex %};右分配律：{% katex %}(B+C)A=BA+CA{% endkatex %}        
4. 矩阵的转置      
矩阵{% katex %}A{% endkatex %}的行列式互换后的矩阵称为{% katex %}A{% endkatex %}的转置矩阵，记为{% katex %}A^T{% endkatex %}       
**转置矩阵的运算规律：**       
   (1). {% katex %}(A^T)^T=A{% endkatex %}           
   (2). {% katex %}(A+B)^T=A^T+B^T{% endkatex %}            
   (3). {% katex %}(\lambda A)^T=\lambda A^T{% endkatex %}            
   (4). {% katex %}(AB)^T=B^T A^T{% endkatex %}            
5. 方阵的行列式         
如果{% katex %}A{% endkatex %}是谁一个已知方阵，以{% katex %}A{% endkatex %}的元素按原次序所构成的行列式，叫{% katex %}A{% endkatex %}的行列式，记作{% katex %}|A|{% endkatex %}         
**性质1：{% katex %}|A^T|=|A|{% endkatex %}          
性质2：{% katex %}|kA|=k^n|A|{% endkatex %},其中{% katex %}k{% endkatex %}为常数          
性质1：{% katex %}|AB|=|A||B|{% endkatex %}**          

---
### 矩阵的逆   
1. 定义      
对于{% katex %}n{% endkatex %}阶矩阵{% katex %}A{% endkatex %}，如果有一个{% katex %}n{% endkatex %}阶矩阵{% katex %}B{% endkatex %}，使{% katex %}AB=BA=E{% endkatex %}则矩阵{% katex %}A{% endkatex %}是可逆的，并把矩阵{% katex %}B{% endkatex %}称为{% katex %}A{% endkatex %}的逆矩阵，简称逆阵；         
注意：
a. {% katex %}A{% endkatex %}的逆矩阵记作{% katex %}A^{-1}{% endkatex %}即若有{% katex %}AB=BA=E{% endkatex %}，则有{% katex %}B=A^{-1}{% endkatex %}        
b. 若{% katex %}A{% endkatex %}可逆则{% katex %}A{% endkatex %}的逆矩阵存在且唯一；         
2. 定理1       
若矩阵{% katex %}A{% endkatex %}可逆，则{% katex %}|A|\ne 0{% endkatex %}        
3. 定理2         
若{% katex %}|A|\ne 0{% endkatex %},则{% katex %}A{% endkatex %}可逆，且满足{% katex %}A^{-1}=\frac{A^*}{|A|}{% endkatex %}，{% katex %}A^*{% endkatex %}为{% katex %}A{% endkatex %}的伴随矩阵          
![伴随矩阵](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403101338493.png)       
其中{% katex %}A_{ij}{% endkatex %}是元素{% katex %}a_{ij}{% endkatex %}在行列式{% katex %}|A|{% endkatex %}中的代数余子式。              
**二阶伴随矩阵规律：主对角线元素互换，副对角线元素添加负号。**        
4. 定理3       
**{% katex %}AA^*=A^* \cdot A=|A|E{% endkatex %}**         

---
### 逆矩阵的性质   
1. 若{% katex %}A{% endkatex %}可逆，则{% katex %}A^{-1}{% endkatex %}也可逆，且{% katex %}(A^{-1})^{-1}=A{% endkatex %};          
2. 若{% katex %}A{% endkatex %}可逆，则{% katex %}kA{% endkatex %}也可逆，且{% katex %}(kA)^{-1}=\frac{1}{k}A^{-1}{% endkatex %}({% katex %}k{% endkatex %}为非零常数)         
3. 若同阶方阵{% katex %}A.B{% endkatex %}可逆，则{% katex %}AB{% endkatex %}可逆，且{% katex %}(AB)^{-1}=B^{-1}A^{-1}{% endkatex %}        
![例题](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403101418793.png)

---
### 矩阵的初等变换
1. 初等变换         
   (1). 互换：对调两行(对调{% katex %}i,j{% endkatex %}两行，记作{% katex %}r_i\longleftrightarrow r_j{% endkatex %});         
   (2). 倍乘：以数{% katex %}k \ne 0{% endkatex %}乘以某一行中的所有元素({% katex %}r_i \times r_j{% endkatex %})；         
   (3). 倍加：把某一行所有元素的{% katex %}k{% endkatex %}倍加到另一行对应的元素上去(r_i + r_j)；          
2. 定义1：行的阶梯型矩阵          
可化阶梯线，阶梯线以下为，且每个台阶只有一行；           
![阶梯型矩阵](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403101432917.png)
定义2：行的最简形矩阵          
a. 为行的阶梯型矩阵      
b. 非零行的第一个非零元素为1；     
c. 首非零元素所在列的其他元素都为0；         
矩阵的秩         
设有矩阵{% katex %}A{% endkatex %}，则矩阵{% katex %}A{% endkatex %}的秩记作{% katex %}r(A)、R(A){% endkatex %}          
计算矩阵的秩方法：     
将矩阵做初等行变化成行的阶梯型，数一数非零行数即为矩阵的秩；        
3. 用初等变换求矩阵的逆      
{% katex %}(A|E)>初等行变换>(E|A^{-1}){% endkatex %}         
![例题](https://jsdelivr.030706.xyz/gh/sunnydusk/my-blog-images@main/202403101518277.png)  

---
## 向量空间