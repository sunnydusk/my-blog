---
title: 计算机基础
mathjax: true
date: 2023-09-22 10:45:00
---
## 一、计算机基础
### 计算机的发展
1946年2月，第一台计算机诞生于**美国的宾夕法尼亚大学**，取名为**ENIAC（埃尼阿克）**。<br />根据CPU发展分为四个阶段：

|  存储器分类 | 发展阶段 | 电子器件 | 软件 | 应用领域 | 速度 |
| --- | --- | --- | --- | --- | --- |
| 磁鼓磁芯 | 第一代（1946~1957） | 电子管 | 机器语言、汇编语言 | 军事与科研 | 毫秒（ms） |
| 磁芯为主，磁鼓为辅 | 第二代（1958~1964） | 晶体管 | 高级语言，操作系统 | 数据处理和事务处理 | 微秒（us） |
| 半导体 | 第三代（1965~1970） | 中、小规模集成电路 | 多种高级语言、完善的操作系统 | 科学计算、数据处理及过程控制 | 纳秒（ns） |
| 半导体 | 第四代（1971年以后） | 大规模、超大规模集成电路 | 数据库管理系统、网络操作系统等 | 人工智能、数据通信及社会的各领域 | 皮秒（ps） |

20世纪80年代，开始研制**第五代计算机**。将使用**超大规模集成电路、人工智能、软件工程等**的综合产物。
计算机的发展
1. 微型化
2. 巨型化
3. 网络化
4. 智能化
___
### 计算机的应用
计算机的应用
1. 数值计算（科学计算）
2. 数据处理（信息处理）
3. 过程控制（实时自动控制）
4. 计算机辅助系统
   1. 计算机辅助设计（CAD）
   2. 计算机辅助教学（CAI）
   3. 计算机辅助测试（CAT）
   4. 计算机辅助制造（CAM）
   5. 计算机辅助管理（CAM）
   6. 计算机辅助检测（CAE）
   7. CAD和CAM集成的计算称为计算机集成制造系统（CIMS）
   8. 计算机辅助工艺规划技术（CAPP）
   9. 计算机辅助分析（CAA）
5. 人工智能
6. 多媒体应用
7. 网络技术
8. 云计算
___
### 计算机的特点
计算机的特点
1. 运算速度快
2. 计算精度高
3. 存储容量大
4. 具有记忆和逻辑判断能力
5. 具有自动运行能力（高度自动化）
___
### 计算机的分类
计算机的分类
1. 按性能分：
   1. 巨型机
   2. 大型机
   3. 中型机
   4. 小型机
   5. 微型机
   6. 工作站
2. 按用途分：
   1. 专用计算机
   2. 通用计算机
3. 在网络中的作用分：
   1. 服务器
   2. 工作站
4. 按计算机内部处理信号（计算机工作原理）可分为：
   1. 电子数字计算机（数字信号D）
   2. 电子模拟计算机（模拟信号A）
   3. 数模混合计算机（数字信号和模拟信号）
5. 按计算机性能、功能、规模可分为：
   1. 四大类
      1. 巨型机
      2. 微型机
      3. 服务器
      4. 工作站
   2. 五大类
      1. 巨型机
      2. 微型机
      3. 小型机
      4. 小型服务器
      5. 大型机
      6. 大型服务器工作站
6. 按计算机构成器件分类可分为：
   1. 电子计算机
   2. 量子计算机
   3. 光子计算机
   4. 生物计算机
   5. 医学计算机
___
### 计算机系统的组成
通常由**硬件系统**和**软件系统**组成
计算机系统组成
1. 硬件系统
   1. 主机
      1. 中央处理器（CPU）
         1. 运算器
         2. 控制器
      2. 内存储器
         1. ROM （只读存储器）——在BIOS
         2. RAM （随机存储器）——在COMS
   2. 外设
      1. 输入设备（鼠标，键盘，扫描仪等，磁盘，触摸屏）
      2. 输出设备（显示器，打印机，绘图仪等，磁盘，触摸屏）
      3. 外存储器（磁盘，光盘，U盘）
2. 软件系统
   1. 系统软件
      1. 操作系统（计算机和用户的接口）
      2. 程序设计语言
      3. 诊断程序、各种开发工具
      4. 驱动程序
      5. 数据库管理系统
   2. 应用软件
      1. 用户自行设计的程序
      2. 各种软件包
      3. 数据库应用系统
---
#### 硬件系统
由**运算器、控制器、存储器、输入设备、输出设备**组成。其中**运算器和控制器**合称**中央处理器（CPU）**，是整个硬件系统的核心部件  。<br />五大部件通过总线连接在一起<br />总线一般分三类：

- 控制总线（Control Bus）
发送CPU命令信号到存储器或者I/O设备，是**双向传输**

- 地址总线（Address Bus）
由CPU向存储器传送地址，是**单向总线**

- 数据总线（Data Bus）
用于CPU、存储器和I/O设备之间的数据传输通道，是双向总线<br />传输数据的方式：

- 串行
- 并行
---
#### 软件系统
软件系统通常分为**系统软件**和**应用软件**。

1. 系统软件
包括操作系统、语言处理程序、数据库管理系统和常用服务程序等。
   1. 操作系统（OS）
图形化工作界面（GUI）
   2. 计算机语言
计算机语言分为：
   - 低级语言
      - 机器语言
优点：执行速度快、占用存储空间少等<br />缺点：编写程序可读性和移植性差
      - 汇编语言
优点：比机器语言易读，易改<br />缺点：通用性和可移植性较差
   - 高级语言
常见的有BASIC，FORTRAN（最早的高级语言），PASCAL以及面向对象的程序设计语言JAVA及Visual系列。<br />优点：易学、易用和可移植性好等
   3. 语言处理程序
由各种程序设计语言的语言处理程序（即翻译程序）组成。<br />可分为：

   - 汇编程序
   - 解释程序
   - 编译程序
2. 应用软件
---
### 计算机工作原理
#### 冯·诺依曼思想

1. 采用**二进制**表示数据信息，二进制简单便于实现，有利于简化逻辑线路。
2. 采用存储程序及程序控制工作机制。
3. 由控制器、运算器，存储器，输入设备和输出设备五大部件组成。

冯·诺依曼机的工作原理可以概况为

- 存储程序
- 程序控制

计算机的工作过程实际上是周而复始地读取指令，分析指令、执行指令的过程。

---
### 微型计算机硬件的功能及性能指标
#### 主机
一般由机箱、主板、CPU（中央处理器）、内存（RAM）、硬盘驱动器以及有关功能卡组成。
##### 机箱
从机型上看，常见的有**立式和卧式机箱。**<br />从结构上分，可分为**AT机箱和ATX机箱**。
##### 主板
又称系统板或者母板。
##### 中央处理器（CPU）
是微机的核心元件，反映它性能的重要重要指标是**字长和主频**；字长是指计算机能同时处理数据的长度；主频则是表明计算机工作速度，主频越高，系统工作速度越快；通常讲CPU的型号作为微机型号。
##### 内存储器
简称内存，又称主存；按功能分，可分为**只读存储器（Read Only Memory，简称ROM）和随机存储器（Random Access Memory，简称RAM）**。RAM在计算机工作中，既可读出信息，也可随时写入信息，但一旦断电信息则丢失；ROM在计算机工作中，只能读出信息，不能写入信息，它存储的信息不受断电影响，具有永久保存信息的特点。(内存一般指RAM)。<br />**SRAM：高速缓存**
##### 其他功能卡
1. 声卡
2. 显卡
GPU(NVIDIA/AMD)<br />目前，显卡使用的接口是**PCI-E**，即**PCI Express**，主要优势是**数据传输速率高**。
3. 网卡（网络适配器）——接口（RJ-45）

基本功能是：进行数据转换、网络存取控制、数据缓存和生成网络信号等。
#### 外存储器
外存中：软盘<光盘<U盘<硬盘<br />存储读写速度比较：外存<RAM(内存)<Cache(高速缓存)<CPU
##### 固态硬盘（SSD）
固态硬盘由**控制单元和存储单元（FLASH芯片、DRAM芯片）**组成。<br />固态硬盘的存储介质一般分为两种：

- 闪存（FLASH芯片）作为存储介质
- DRAM作为存储介质
##### 硬盘（Hard Disk或HD）
主要性能指标：**容量、读写速度、转速、数据缓存、平均存取时间**。<br />转速：常见的有（5400/7200/10000转）<br />常见的接口类型：**IDE、SCSI、SATA（常用SATA3）和USB（移动硬盘）**。<br />新的硬盘需要经过低级格式化、分区和高级格式化三步操作之后才可使用。<br />快速格式化只能针对已格式化过的硬盘。
##### 光盘和光盘驱动器
光盘可分：CD光盘、DVD光盘和蓝光光盘（BD）。<br />CD光盘理论存储容量**700MB**，实际存储容量约为**650MB**。<br />DVD光盘理论存储容量**4.7GB**，实际存储容量约为**4.3GB**。<br />蓝光光盘存储容量超**20GB**。<br />CD光盘可分为：
- 可擦除性光盘（CD-RW）——可多次读写
- 可读光盘（CD-ROM）——不可写入（大容量只读外部存储器）

DVD光盘可分为：
- 只读光盘（DVD-ROM）
- 可擦写光盘（DVD-RW）
- 可反复擦写光盘（DVD-RAW）
##### U盘
U盘支持热插拔，可最多连接127个设备 。<br />U盘类型：

- 基本型
- 增强型
- 加密型

优点：携带方便，操作简单<br />通过USB接口与电脑连接，实现**即插即用**。<br />U盘也需要驱动，才能识别。<br />U盘的标准：

- 1.0 —— 12Mbps
- 2.0 —— 480Mbps
- 3.5 —— 5Gbps
- 3.1 —— 大约10Gbps~20Gbps
#### 输入设备
1. 键盘（Keyboard，简称KB）
是计算机最基本的输入设备，一般有5芯的圆形插口电缆与PS/2接口相连（不支持热插拔），现在常见的有101键的标准键盘和104键的Microsoft键盘。
2. 鼠标（Mouse）
有机械式鼠标和光电式鼠标，一般用6芯PS/2接口或USB接口与主机相连。<br />鼠标的主要技术指标是分辨率（用dpi表示），分辨率越高，鼠标性能也就越高。<br />鼠标滚动默认3行，最大支持100行。
#### 输出设备
##### 显示器
显示器是计算机最基本的输出设备，由监视器和显示适配器（显卡）两部分组成。<br />显示器可分为：

- 单色显示器
- 彩色显示器

根据工作原理可分为：

- 阴极射线管（CRT）显示器
- 液晶（LCD）显示器

根据扫描方式可分为：

- 逐行扫描
- 隔行扫描

显示器的主要性能指标是**分辨率、屏幕大小、点间距、刷新频率和色彩数等。**显示器一般连接到显卡的VGA接口上，显卡还提供**DVI或HDMI接口**。
##### 打印机
打印机根据打印方式可分为：
- 击打式打印机
- 非击打式打印机
根据打印原理分为：
- 针式打印机
缺点：
      1. 打印速度慢
      2. 噪声较大
      3. 打印质量不高
优点
      1. 打印成本较低
通常用于打印复印式票据。
- 喷墨打印机
缺点：
      1. 打印成本高
优点：
      1. 价格低
      2. 体积小
      3. 重量轻
      4. 噪声低
打印质量明显高于针式打印机。
- 激光打印机（页式打印机）
缺点：
      1. 价格较高
优点：
      1. 打印速度快
      2. 质量高
      3. 无噪声
针式打印机又称击打式打印机；喷墨打印机和激光打印机都是非击打式打印机。通常连接到USB接口。<br />打印机的主要性能指标有**分辨率、打印速度、噪音等**。
##### 音箱
播放声音的设备。<br />根据是否有放大电路可分为：

- 有源音箱（接入U盘可用）
- 无源音箱（必须接入主机——3.5mm）
---
### 计算机常见的I/O接口
#### USB接口
USB（通用串行总线）接口是PC的标准接口，USB3.0的最大传输带宽可达5.0Gbps。<br />其优点有：

1. 可以热插拔
2. 携带方便
3. 标准统一
4. 可以连接多个设备（最多可连接127个）
#### 串口（COM）
串行接口即所谓的COM口，可以连接**9针鼠标、外置的调制解调器、老式摄像头和手写板等。一个串行接口接一个外部设备。数据传输速率一般在115~230kbps之间，速度慢，但传输距离较长，所以长距离的通信一般使用串行接口。
#### 并口（LPT）
并行接口主要作为打印机端口（LPT），也可连接绘仪。<br />数据传输速率大大提高，可达到16Mbps，但传输距离收到限制，因此长度增加，干扰就会增加，容易出错。
#### VGA接口
又称D—SUB接口，是15针的D形接口，是显卡连接的标准接口。
#### IEEE1394接口
是苹果公司开发的串行标准，俗称“火线接口”。<br />优点：

- 支持热插拔
- 能连接多个不同的设备
- 支持同步数据传输
- 可通过800Mbps或更高的传输速度
#### HDMI接口
高清晰度多媒体接口，是一种数字化视频/音频接口技术，适合影像传输的专用型数字化接口，可以同时传输音频和影像信号。<br />最高传输速率为5Gbps。<br />无需在信号传输前进行数/模或模/数转换。
#### PS/2接口
是鼠标和键盘上使用的接口，是一种6针的圆形接口，不支持热插拔。<br />鼠标接口为绿色，键盘接口为紫色。<br />PS/2鼠标采样率默认为60次/秒。
### BIOS和CMOS
BIOS是（Basic Input Output System，基本输入输出系统），在开机时按Delete/F~键可以进入BIOS，BIOS是一组固化到计算机内主板上一个ROM芯片上的程序。CMOS（Complementary Metal Oxide Semiconductor，互补金属氧化物半导体），是主板上一块可读写的RAM芯片，是用来保存BIOS的硬件配置和用户对某些参数的设定。<br />**用户通过BIOS设置程序对CMOS参数进行设置。**

---
### 计算机数据的表示和数制转换
#### 进制
主要有**二进制，八进制，十进制，十六进制**。<br />把数用圆括号（（））括起来，右下角写基数，表示进制。<br />在数字后面加上字母表示所用进制，二进制用B，八进制用O（为防止与0混淆，也可用Q），十进制用D（可省略），十六进制用H。<br />每一种进位计数制包括：
- 数码：用不同符号表示数制的数值，这些数字式符合称为数码。
- 基数：数制所使用的数码称为基数（X进制的基数是X，即“逢X进1”）。
- 位权：该数制每一位所具有的值称为位权（X进制的位权是{% katex %}X^{n-1}{% endkatex %}）。
#### 进制转换
1. 将非十进制数转换为十进制数
采用“按权展开并求和”。例：
{% katex %} (11011001)_2=2^7+2^6+2^4+2^3+2^0=128+64+16+8+1=217 {% endkatex %}
<br />
{% katex %} (37)_8=3 \times 8^1+7 \times 8^0=24+7=31 {% endkatex %}
<br />
{% katex %} (A7)_{16}=10 \times 16^1+7 \times 16^0=160+7=167 {% endkatex %}
2. 十进制数转换为二进制数
   1. 整数部分：除2取余，逆序排序
将要转换的十进制数连续除以2，直到商为0，然后将每次的余数倒序排序。
   2. 小数部分：乘2取整，顺序排序
将要转换的十进制的纯小数反复乘以2，直到小数部分为0或到达指定位数为止，然后将乘积的整数部分顺序排序。
3. 十进制数转换为八/十六进制数
同上十转二相似。
4. 二进制数与十六进制数

每位十六进制数用4位二进制数表示。要将二进制数转换为十六进制数，可以将要转换的二进制数以小数点为界向左、向右每四位分成一组，然后根据对应的十六进制数来书写，若不足4位，整数部分左边补0，小数部分右边补0来凑足4位。<br />
例：将 {% katex %} (4AF8B)_{16} {% endkatex %} 转换为二进制数<br />
解：4 = 0100<br />A =1010<br />F = 1111<br />8 = 1000<br />B = 1011<br />
即：{% katex %} (4AF8B)_{16}=(1001010111110001011)_2 {% endkatex %}

___
### 计算机的存储单位及字符的表示方式
#### 数据存储单位

1. 数据存储单位
   1. 位（bit）
位是计算机最小的信息表示单位。{% katex %} N {% endkatex %}位二进制可以表示{% katex %} 2^N {% endkatex %}种状态。
   2. 字节（Byte）
通常将8位二进制数称为一个字节（简称B，1B=8bit），字节是计算机中最小（最基本）的存储单位，常见的还有KB（千字节），MB（兆字节），GB（吉字节）和TB（太字节）。
   3. 字（Word）
字是计算机一次存取，加工，运算和传送的整体，一个字通常由一个或者若干个字节组成；字长越长，其精度和速度越高。目前计算机字长有：8位，16位，32位，64位。
2. 字符的表示方法和字符ASCII码
国际通用的信息交换标准代码是美国标准信息交换码，缩写为ASCII码。其一般用7位二进制表示一个字符的字符编码，一个字符占一个字节；<br />ASCII码使用指定的7位或者8位二进制组合来表示128或256种可能的字符，标准ASCII码也叫基础ASCII码，使用7位二进制数表示所有的大写和小写字母，数字0\~9，标点符号以及美式英语中使用的特殊控制字符。<br />常见的ASCII码的大小规则：0\~9<A\~Z<a\~z。其中32\~126是字符（32表示空格），并且48\~57表示0\~9，65\~90表示A\~Z，97\~122表示a\~z；其余是标点符号或者运算符等
3. 汉字编码
汉字输入、输出、存储和处理的不同过程中所使用的汉字编码不相同，常见的汉字编码有：汉字输入码、汉字交换码、汉字内码和汉字字形码等；
   1. 汉字输入码
又称**外码**，常见的有区位码（无重码）、字音编码、字形编码和音形结合编码等。
   2. 汉字交换码
又称**国标码（GB）**，1981年，国家标准局颁布了《信息交换用汉字编码字符集—基本集》，代号GB2312-80.其中字符集包括**3755个一级常用汉字**（按照拼音字母排序），**3008个次常用二级汉字**（按照部首笔画顺序排列）和**682个各种符号**，共计**7445个字符**；国标码采用两个字节表示一个汉字，每个字节只使用低七位，最高位为0。
   3. 汉字内码
指在计算机内部进行存储、传递运算的统一机内代码，又称内码；使用最广泛的是一种变形国标码，该类型是将国标码每字节最高位分别置1.<br />{% katex %} 机内码=国标码+8080H {% endkatex %}<br />{% katex %} 国标码=区位码+2020H {% endkatex %}
   4. 汉字字形码
指在汉字打印或者显示时使用的代码，通过点阵式产生；每个点的信息需要一位二进制数表示，一个{% katex %} 16 \times 16 {% endkatex %}点阵汉字需要占据32个字节的存储空间（{% katex %} 点阵汉字存储空间=横向像素点 \times 纵向像素点/8 {% endkatex %}）；点阵密度越大，汉字输出的质量越好，相应的存储器占用量也越多。

___
### 计算机病毒
#### 定义 
指在计算机程序中插入破坏计算机功能或者破坏数据，影响计算机使用并且能够自我复制的一组计算机指令或者程序代码。
#### 计算机病毒的主要特征
主要特征
- 传染性
- 破坏性
- 针对性
- 隐蔽性
- 潜伏性
- 激发性
- 不可预见性
#### 病毒的分类
按照寄生方式可分：
- 系统引导性病毒
- 文件性病毒
- 复合型病毒
按照产生后果可分为：
- 良性病毒
- 恶性病毒
#### 计算机病毒的感染途径和危害
主要通过磁盘，光盘和网络进行传播，其危害是多种多样的；
主要表现为：
1. 破坏磁盘的文件分配表，造成用户磁盘上的信息丢失；
2. 改变内存分配，减少可用空间；
3. 修改CMOS中的数据，使系统无法正常启动和工作；
4. 修改内容，使系统瘫痪；
5. 破坏磁盘文件，造成程序无法运行，数据丢失破坏。

第二代病毒是通过**网页传播**的。
#### 计算机病毒的防治
主要以**“预防为主，清除为辅”**，要定期进行**备份**。

---
### 知识产权
指“权利人对其所创作的智力劳动成果所享有的专有权利”，一般只在**有限时期内有效**。

---
### 平板电脑和触控屏技术
触控屏——>既是输入也是输出，由触摸检测部件和触摸屏控制器组成。
触摸屏技术可分为：
- 声学脉冲识别（APR）技术
- 表面声波（SAW）
- 电容式触摸屏技术
- 电阻式触摸屏技术
- 红外/光学式技术

---
### 人工智能技术
#### 定义
指人创造的能够获取和应用知识技能的能力的程序、机械或者设备。
#### 图灵测试
由**艾伦·麦席森·图灵**发明，指测试者和被测试者（一个人和一台机器）隔开的情况下，通过一些装置（键盘等）向被测试者提问；如有超过30%的测试者不能确定出被测试者是人还是机器，就被认定为具有人类智能。
#### 人工智能的分类
1. 强人工智能
观点认为有可能制造真正能推理和解决问题的智能机器
   1. 类人的人工智能
即机器的思考和推理像人的思维一样
   2. 非类人的人工智能
即机器产生和人完全不一样的知觉和意识，使用和人完全不一样的推理方式
2. 弱人工智能
观点认为不可能制造出真正的推理和解决问题的智能机器
#### 人工智能简史

---
### 云计算
#### 概念
按量付费的模式，提供可用的、便捷的、按需的网络访问，进入可配置的计算资源共享池（资源包括网络、服务器、存储、应用软件、服务），这些资源能被快速提供，只需投入很少的管理工作，或与服务供应商进行很少的交互。
#### 云计算技术的应用

1. 云存储
2. 云服务
3. 云物联
两层意思
1. 物联网的核心和基础仍然是互联网，是在联网的基础上延伸和扩展的网络。
2. 其用户端延伸和扩展了任何物品与物品之间，进行信息交换和通信。

---
## 二、Windows7的基本操作
### 操作系统的概念及作用
#### 操作系统的概念
操作系统（OS）是软件系统中最主要、最基本的系统软件，是**直接控制**和管理计算机硬件、软件资源，合理组织计算机工作流程；它是计算机系统的核心，是**人与计算机交互的界面（用户和计算机的接口）**。**（驱动程序是硬件接口）**
#### 操作系统的功能
功能
1. 处理器管理
2. 存储管理
3. 设备管理
4. 作业管理
5. 文件管理
---
#### 常见的操作系统
常见的操作系统
1. DOS操作系统，又称磁盘操作系统，常见的有**MS DOS、PC DOS**等。
2. Windows操作系统，又称视窗操作系统。
3. 网络操作系统，简称NOS，常见的有Linux（多用户，多任务窗口）、Unix（单用户，多任务窗口）、Netware、Windows NT等。
---
### Windows7操作系统的版本
Windows7中常见6个版本
1. Windows7 Starter（初级版）
2. Windows7 Home Basic（家庭普通版）
3. Windows7 Home Premium（家庭高级版）
4. Windows7 Professional（专业版）
5. Windows7 Enterprise（企业版）
6. Windows7 Ultimate（旗舰版）

---
### Windows7操作系统的特点
1. 图形操作界面，更易用。
2. 功能全面的管理工具和应用程序，更简单。
3. 多任务处理能力，更安全。
4. 与Internet的完美结合，更低的成本。
---
### Windows7的安装、启动和退出
1. Windows7安装对硬件的基本要求
   1. CPU：时钟频率1GHz或者更高的32位（X32）或64位（X64）处理器
   2. 内存：1GB物理内存（基于32位）或2GB物理内存（基于64位）
   3. 硬盘：16GB可用硬盘空间
   4. 显卡：支持DirectX，128MB显存及以上
   5. 监视器：分辨率在1024×768像素及以上
   6. 硬盘分区格式：NTFS
2. Windows7的启动

打开电源，计算机进行自检，自检结束时，按住Delete键或F2键，可以进入BIOS设置。<br />如果在系统启动时按下F8键，可以进入Windows高级选项菜单，使用光标“{% katex %} \uparrow {% endkatex %}”或“{% katex %} \downarrow {% endkatex %}”可以选择安全模式；<br />安全模式的主要功能：

   - 修复系统故障
   - 恢复系统设置
   - 删除顽固文件
   - 彻底查杀病毒
3. Windows7的退出

关机！！！

---
### Windows7的相关概念
1. 桌面
启动windows7后显示的整个屏幕称为桌面（背景、任务栏、图标）<br />桌面的实质是一个文件夹：“C:\Users\当前用户名\Desktop”.
2. 图标
刚安装完成的电脑桌面只有“回收站”图标，一般都包括“计算机、回收站、用户的文件、控制面板、网络等”图标，这些属于系统图标，可以通过“右键——个性化——更改桌面图标”进行勾选。*控制面板没有属性。
3. 菜单
是用户与应用程序交互的主要方式，包含了窗口操作的全部命令；<br />有“开始菜单、快捷菜单、下拉菜单”三种类型
4. 任务栏
一般位于桌面底部，可以更改；主要用来窗口的切换；<br />从左到右依次：开始菜单按钮、快速启动区、语言栏、通知区域、系统时间、显示桌面按钮；<br />Jump List是Windows7的一个新功能，鼠标右击一个任务栏图标，可以打开跳转列表，方便用户查找。
5. 库
一个专用的文件管理集合，可以将硬盘中不同位置的文件和文件夹添加到库中，默认包括视频、文档、图片、音乐4个库；可以添加新的库，可以删除默认库，也可以恢复库。
6. 域、工作组和家庭组的区别
7. 操作中心
是一个查看警报和执行操作的中心位置，可以帮助保持Windows7稳定运行；<br />开始——控制面板——系统和安全——查看你的计算机状态=操作中心。
8. 窗口
最主要的工作界面；<br />具有智能缩放功能，拖到显示器边缘可最大化或平行排列；<br />拖动并晃动窗口，可以隐藏不活动的窗口。
9. 对话框
Windows7系统和用户进行交流的重要界面，是一种特殊窗口，包含按钮和命令，没有最大化和最小化按钮，不能调整形状和大小；<br />主要用于用户信息输入和设置或者显示系统信息。<br />对话框和窗口最大的区别就是：窗口即可移动也可改变大小，对话框只能移动不能改变大小。
11. 快捷方式

是一个指向特定资源的指针，可以快速打开文件、文件夹或启动应用程序；<br />减少用户操作步骤，提高工作效率。
   1. 程序、文档或文件夹的原始图标代表其实际的文件，快捷方式是对原始图标的一个小的超级链接；
   2. 快捷方式实际是一个小文件，它提供对某个大文件的链接，扩展名为：“.lnk”。
11. Windows Aero特效
12. 桌面小工具
13. 分辨率
14. 个性化
---
### 窗口的组成及操作

1. 窗口的分类
分为程序窗口和文档窗口，文档窗口是程序窗口的子窗口（CTRL+W或ALT+F4可以关闭窗口）；<br />程序窗口和文档窗口最大的区别：文档窗口没有自己的菜单栏，它使用的是应用程序窗口的菜单栏。

2. 窗口的组成
由：标题栏、地址栏、搜索栏、工具栏、导航窗格、窗口工作区、细节窗格组成；

3. 窗口的操作
   1. 打开窗口
任何启动程序或打开文件的方法，都能打开窗口程序。当窗口被打开时，其相应的窗口按钮会出现在任务栏上。
   2. 移动窗口
想要移动窗口，窗口必须处于还原状态下，鼠标按住标题栏，可以拖动到合适位置松开鼠标，或者使用控制菜单，选择“移动命令”，再移动光标。
   3. 改变窗口大小
想要改变窗口大小窗口必须处于还原状态下，，鼠标指向窗口边框或边框拐角处，当鼠标形状变成双向箭头，拖动鼠标可以改变窗口大小；或者使用“控制菜单——移动命令——移动光标”；
   4. 最大化、最小化和恢复窗口
使用窗口右上角的“最大化”按钮，窗口铺满整个桌面，同时，“最大化”按钮变为“还原”按钮，点击“还原”按钮，窗口恢复原始大小；单击“最小化”按钮，窗口最小化至任务栏上的窗口；单击任务栏上图标，窗口恢复原始大小；<br />窗口最小化后，程序依旧处于打开（挂起）状态，并没有被关闭；<br />“最大化”和“还原”按钮不会同时出现在标题栏，双击标题栏可以实现窗口最大化和还原间的切换。
   5. 窗口的切换
Windows7允许同时打开多个窗口，当前操作的为活动窗口（当前窗口），标题栏呈深蓝色，任务栏中当前窗口的按钮呈凹向深色显示；<br />可以单击其他窗口或者任务栏上图标进行活动窗口的切换；也可以使用快捷键：Alt+Esc或Alt+Tab切换；也可以使用Win+Tab进行3D切换（同一时刻只能有一个活动窗口，Win+Tab实现轮流切换）。
   6. 窗口的层叠与堆叠
在任务栏空白处单击鼠标右键，弹出的快捷菜单中可以选择：“层叠窗口”、“堆叠显示窗口”、“并排显示窗口”、“显示桌面”可以完成所以打开的非最小化窗口的层叠与平铺。
   7. 关闭窗口
可以单击窗口右上角的“关闭”按钮；<br />可以双击控制图标；<br />可以使用快捷键：“Alt+F4”
---
### 菜单的操作

1. 菜单的分类
一般三类菜单
   1. 开始菜单
   2. 菜单栏菜单（下拉菜单）
   3. 快捷菜单
2. 菜单命令的分类
   1. 直接运行的命令
   2. 对话框命令
   3. 子菜单命令
3. 菜单项的约定
   1. 暗淡的菜单项：该菜单项当前不可用；
   2. 菜单项前有“√”：该菜单项已被选中且有效，单击，可实现选中与未选中状态的切换；
   3. 菜单项前有“·”：该菜单项当前一组单选项中被选中的项，一组单选项中有且仅有一项能被选中；
   4. 菜单项中有“►”：该菜单项还有一个子菜单；
   5. 菜单项中有“…”：该菜单项可以打开一个对话框；
   6. 菜单项后的组合键：表示该菜单项的快捷键。
4. 菜单的操作
   1. 打开菜单
      1. 打开控制菜单：单击窗口控制图标、右击窗口标题栏空白处、快捷键“Alt+Space”；
      2. 打开菜单栏菜单：单击菜单名、按住Alt和菜单名旁带下划线的字母、按F10激活菜单再按菜单名旁带下划线的字母；
      3. 打开快捷菜单：右击某对象、按键盘上的快捷菜单键、Shift+F10。
说明：快捷菜单与操作对象以及操作对象所处的当前状态有关，即不同的对象在不同的状态下，快捷菜单的内容是不同的。
   2. 选择菜单命令
      1. 单击菜单命令项；
      2. 按菜单命令项中带下划线的字母；
      3. 用光标移动键“{% katex %} \uparrow {% endkatex %}”和“{% katex %} \downarrow {% endkatex %}”，移动光标到所需的菜单命令项，按回车键；
      4. 快捷键（已打开菜单后，快捷键就不起作用）
   3. 关闭菜单
      1. 执行某一项菜单命令后，打开的菜单立即关闭；如果不想选择任一菜单命令，则在该菜单外的任意处单击鼠标左键或按ESC键或Alt键或F10。
---
### 工具栏的操作
不同的位置选择不同的对象，工具栏会出现相应的操作项，其右边都有“更改视图”、“显示预览窗格”、“帮助”按钮。

---
### 任务栏的组成和基本操作
1. 任务栏的组成
由：开始菜单按钮、快速启动区、正在运行的程序、语言栏、通知区域、系统时间和显示桌面图标组成。
2. 任务栏的操作
   1. 定制任务栏
右击任务栏空白区域，在弹出的快捷菜单的“工具栏”命令的级联菜单中选择显示或隐藏工具栏。“工具栏”菜单选项卡中，可以勾选各种工具栏，使勾选的工具栏在任务栏上显示；<br />Tablet PC输入版：勾选后可以通过鼠标输入或有触摸板功能进行手写输入；
   2. 切换任务
Windows7支持多任务操作，窗口切换方法有：
      - ALT+TAB
      - ALT+ESC
      - WIN+TAB
      - 鼠标指向图标再单击相应的窗口
   3. 改变任务栏位置和大小
可根据需求更改位置大小，但必须解除锁定；
   4. 设置任务栏
      1. 开始菜单
其中存放了操作系统或系统设置的绝大多数命令；可以使用系统中安装的所有程序。<br />由：程序列表框、链接栏、搜索框、关机按钮组成；
      2. 订书钉功能
开始菜单的程序列表框的下拉列表框中，指向选择后就会出现一个订书钉按钮，单击可将此菜单固定到列表顶部。<br />“开始”按钮选项卡中，可以自定义“开始”菜单的外观和行为，设置电源按钮的作用、设置隐私内容等。<br />右击“开始”按钮或“任务栏”——“属性”菜单——“任务栏的开始菜单属性”对话框；<br />“任务栏”选项卡可以进行的设置：
         - 锁定任务栏
         - 自动隐藏任务栏
         - 使用小图标
         - 任务栏在桌面上的显示位置
         - 任务栏按钮的显示方式
         - 自定义通知区域图标
         - 使用Aero Peek预览桌面
---
### 对话框的组成及操作
1. 对话框的组成
不同的对话框，其组成部分也不相同；<br />主要由：标题栏、选项卡、文本输入框、列表框、下列列表框、单选框、复选框、数字增量框、滑动块、命令按钮、问号按钮和关闭按钮等元素组成；
2. 对话框的操作
   1. 对话框的移动
鼠标拖动对话框标题栏，可改变对话框的位置；<br />注：对话框的大小不能随意改变
   2. 选项卡
单击某一选项卡标题就可以打开该选项卡；用Ctrl+Tab可以实现选项卡之间的切换；单击对话框中某一部件，可以选中该部件；按Tab键或SHIFT+TAB键，可以分别选择上一个或下一个部件；名称后有一个带下划线的字母，使用ALT+该字母可以直接选中；对话框中当前被选中的操作部件，其部件一般会带一个虚线框。
   3. 文本框
用于接收用户输入的信息；
   4. 普通列表框、下拉列表框和组合列表框
普通列表框一般显示一组选项，可以单击选择所需的选项；或者按“{% katex %}\uparrow{% endkatex %}”键和“{% katex %}\downarrow{% endkatex %}”键，移动光标到所需项，按Enter键。<br />下拉列表框只显示一个选项，但右边有一个向下的实心三角，单击可以打开相应的下拉列表，操作同列表框。<br />组合列表框由一个文本框和一个下拉列表框组成，可在文本框中输入，也可在下拉列表框中选择。
   5. 复选框和单选按钮
复选框包含一组不排斥选项，可以选择多项。用鼠标单击所需选项前的小方框或按空格键，小方框中显示“√”表示已被选中；<br />单选框包含一组相互排斥的选项，只能选择一项，可以单击选项前的“○”，或者按“{% katex %} \uparrow {% endkatex %}”或“{% katex %} \downarrow {% endkatex %}”选择，选中之后将显示“☉”。
   6. 命令按钮
直接单击所需命令按钮，或者选中命令按钮后按回车键，可以执行对应命令；
   7. 对话框的关闭
确认本次在对话框中的输入设置，单击“确认”按钮，关闭对话框后使操作生效；如果确认本次操作但不关闭对话框，可以使用“应用”按钮；如果放弃本次设置，按“取消”按钮或右上角“关闭”按钮，或者“ESC”键。

---
### 中英文输入法的选择和切换方法
1. 输入法的选择和启动、
Windows7系统预置了“英语（美国）”、“中文（简体、中国）微软拼音”，需要其他的另行安装；
   1. 单击任务栏上的语言栏图标——输入法菜单——选择需要的输入法；
   2. CTRL+SHIFT组合切换输入法，反复按CTRL+空格键启动和关闭输入法。
2. 汉字输入状态的切换
选定输入法后出现输入法状态条，可以切换输入法各种状态；
   1. 中英文切换
      - 单击中“英文切换”按钮
      - 单击任务栏上输入法指示器
      - 按“SHIFT”键
   2. 输入法显示框
      - 提示当前使用的输入法
      - CTRL+SHIFT键可以切换已安装的所有输入法
   3. 全角/半角切换
全角（占两个字节）、半角（占一个字节）<br />按SHIFT+空格键切换全角/半角
   4. 软键盘
当要输入一些特殊符号时，单击“软键盘”按钮，会弹出软键盘；
   5. 中英文标点切换、
按CTRL+句号键切换
3. 输入法的设置
右击“语言栏”——“设置…”——文字服务和输入语言；<br />可以根据需要添加或删除输入法及对输入法的属性进行设置。

---
### 获得Windows7帮助信息的方法
Windows系统提供了“帮助与支持”菜单，用户在操作过程中遇到困难或需要了解特定信息时，可利用Windows7提供的以下方式获取帮助信息：
   1. “开始”菜单——“帮助和支持”命令——即打开“Windows帮助支持”窗口；
   2. 打开的应用程序窗口中，选择“帮助和支持”菜单中的命令；
   3. 打开应用程序——F1键——进入联机帮助系统；
   4. 使用窗口或对话框中提供的帮助按钮“？”；
   5. 工具提示，将鼠标指向某一对象，会出现一段文字信息，是最简单的帮助；
   6. 右击对象——属性/这是什么——可获得该对象的帮助信息；
---
### 常用的DOS命令的使用
1. 启动与关闭“命令提示符”窗口
“开始”菜单——“运行”命令——弹出对话框输入“CMD”——“确定”——打开“命令提示符”窗口（ALT+F4不能关闭该窗口）；<br />“命令提示符”窗口右上角“关闭”按钮或者在命令提示符里面输入命令“EXIT”后按回车键，都可以关闭“命令提示符”窗口；
2. 常用的DOS命令
| 命令 | 作用 | 类型 | 使用格式 | 举例 | 意义 |
| --- | --- | --- | --- | --- | --- |
| DIR | 显示目录格式 | 内部命令 | DIR 盘符：文件名/P/W | C:\\>DIR | 显示当前目录下所有文件和目录 |
| COPY | 复制文件 | 内部命令 | COPY 源文件名 目标文件名 | C:\\COPY C:\\MYSUB\\A.DOC D:\\ZQH\\B.DOC | 将C盘下A.DOC文件复制到D盘，并命名为B.DOC |
| DEL | 删除文件 | 内部命令 | DEL 文件名 | C:\\DEL A.DOC | 删除当前目录下的A.DOC文件 |
| MOVE | 将一个或者多个文件移动到指定目录 | 内部命令 | MOVE 盘符：源文件名 盘符：目标文件名 | MOVE D:\\bb\\*_._*D:\\aa | 将D盘bb文件夹下所有文件移动到D盘aa文件夹下 |
| CD | 改变当前文件夹 | 内部命令 | CD 目标文件夹名 | C:\\>CD MYSUB | 显示当前目录MYSUB |
| FORMAT | 格式化磁盘 | 外部命令 | FORMAT 盘符：/S/Q | C:\\>FORMAT D:/Q | 快速格式化D盘 |


## 三、文件和文件夹管理

---
### 磁盘、文件和文件夹的概念及命名原则
1. 磁盘、文件和文件夹的基本概念
   1. 磁盘：计算机硬盘上划分出来的分区，用来存放计算机的各种资源，每一个分区都有自己的分区名和盘符，盘符是每一个分区的根目录，用于区分不同的磁盘；
   2. 文件：又称文档，是具有既定名字的存储在外存上的一组相关信息的集合。任何程序和数据都是以文件的形式存放在计算机的外存储器上；文件是数据组织的基本单位。
   3. 文件夹：在Windows7中，文件夹用于管理文件和系统设备，用户可以把文件分类存放到文件夹内，并且文件夹内也可以再次创建子文件夹；Windows7采用树型结构对文件和文件夹进行组织和管理
磁盘、文件和文件夹存在包含和被包含的关系。
2. 文件名的命名规则
计算机实行“按名存取”的操作方式，文件名由主文件名和扩展名组成，中间用点隔开，主文件名用来标识文件，扩展名表示文件的类型；<br />Windows7文件的命名规则应当遵循以下规则：
   1. 文件名中的英文字母不区分大小写，文件名可以使用汉字、允许出现空格和间隔号，但文件名开头不能为空格； 
   2. 可以使用长文件名，文件名最多可有255个西文字符，127个中文字符；
   3. 一般文件名由三个字符的文件扩展名，用以标识文件的类型和创建该文件的程序；也可隐藏文件扩展名，通过文件图标区分不同类型文件；
   4. 文件名不能出现：\、/、：、“、<、>、|、*、?；
   5. 同一文件夹下不允许出现文件名完全相同的两个文件或文件夹， 对于不同文件夹中的文件，其文件名可以相同，也可以不同相同。在不同级的文件夹下允许有与之同名的子级文件夹；
---
### 常用的文件类型
常见的文件类型：
   1. SYS：系统文件
   2. TXT：文本文件
   3. INI：配置文件
   4. DOCX：Word2010
   5. TMP：临时文件
   6. XLSX：Excel2010工作簿
   7. HTM：网页文件
   8. BMP：位图文件
   9. BAT：批处理文件
   10. JPG：图像文件
   11. RAR：压缩文件
   12. EXE：（双击）可执行文件
   13. DLL：；动态链接文件
   14. COM：命令程序文件
   15. HLP：帮助文件
   16. WAV：声音文件
   17. BAK：备份文件
   18. ico：图标文件
---
### 计算机和资源管理器
1. 计算机
用于浏览和管理计算机资源，可以执行文件管理、备份、格式化磁盘、映射网络驱动器、系统属性、打开控制面板等操作。
   1. 打开计算机
双击“计算机”；<br />右键“计算机”——“打开”；<br />Win+E。
   2. 改变内容的显示格式
利用“查看”菜单或单击工具栏的“更改您的视图”按钮或窗口空白处右击选择“查看”菜单；
      1. 图标：以图标显示文件和文件夹，有：超大图标、大图标、中等图标、小图标等形式，文件名显示在图标的右边或下边，不显示分类信息，可分组显示文件和文件夹；
      2. 平铺：以图标显示文件和文件夹，文件名显示在图标右方；
      3. 列表：以文件或文件夹列表显示文件夹，图标较小，名称在图标右方。可分类显示文件和文件夹；
      4. 详细信息：显示文件名、大小、类型及最后修改日期等信息；
      5. 内容：直观地以图标方式显示文件和文件夹的名称；
   3. 改变文件和文件夹排列顺序
计算机中的文件和文件夹的排列顺序通常以字母顺序在当前窗口中列出当前文件夹中所有文件和文件夹；改变排序：“查看 ”——“排序方式”——选择排列方法
      1. 名称：以名称的字母顺序排列；
      2. 类型：以文件扩展名为标志；
      3. 大小：文件从小到大顺序排列；
      4. 修改日期：最后修改日期的文件排在最后面；
      5. 递增、递减：选择了一种排序方式后，可选择按这种排序方式进行递增、递减排列；
      6. 更多：Windows7提供了其他的排序方式，单击“更多”——“选择详细信息”
   4. 分组依据
计算机中的文件和文件夹可按名称、类型、大小、修改时间进行分组。
2. 资源管理器
是一个文件管理的实用程序，能迅速提供关于磁盘中文件的信息，并可将文件分类，清晰地显示文件夹结构及内容；资源管理器可以打开、复制、移动、删除、重命名、创建快捷方式或者重新组织文件和文件夹。<br />“资源管理器”的启动方式：
   1. “开始”按钮——“开始”菜单——“所有程序”——“附件”——“Windows资源管理器”——“库”窗口；
   2. “快速启动栏”——“Windows资源管理器”；
   3. 右击“开始”按钮——“Windows资源管理器”；
---
### 查看磁盘、文件夹和文件
Windows7 系统一般用“计算机”或“资源管理器”窗口来查看磁盘、文件或文件夹等中的资源；用户主要通过窗口工作区、地址栏和导航窗格三种方式查看；
1. 通过窗口工作区查看
是窗口最主要的部分，通过窗口工作区查看计算机中的资源是最直观常用的方法；<br />双击“计算机”图标；<br />“开始”——“计算机”；
2. 通过地址栏查看
用“按钮”的形式取代了传统的纯文本方式，只有“前进”和“后退”按钮，地址栏只能显示磁盘和文件夹目录，不能显示文件。
3. 通过导航窗格查看
有：“计算机”、“库”、“收藏夹”、“网络”等 以树状分层的形式显示文件夹列表，在计算机的地址栏单击计算机后的实心三角形按钮，会有弹出的下拉列表。其中实心三角形表示已打开呈—号，空心三角形表示没打开，呈+号  ；不能直接查看文件；
---
### 文件和文件夹的基本操作
1. 选择文件和文件夹
处理某个文件或文件夹时，必须先选择它；当选择了一个文件或文件夹之后，细节窗格会显示出该文件夹和文件的相关信息；<br />选择文件和文件夹的方法：
   1. 单击文件和文件夹；
   2. 选择连续多个文件时，先单击选择的第一个文件，再按住Shift键单击要选择的最后的文件，可选中两个文件之间的所有文件；
   3. 选择不连续多个文件时，先按住CTRL键，再依次单击要选择的文件；若选择文件过多，可以先选择不选的，再“编辑”——“反向选择”；
   4. 选定一组文件或文件夹通过拖动完成；
   5. 全选通过：“编辑”——“全选”；快捷键：“CTRL+A”；
   6. 选择某一区域的文件或文件夹，按住鼠标左键框选；
取消选择：空白区域单击鼠标左键；
2. 新建文件和文件夹
可以再任意驱动器，文件夹中建立新文件夹和文件；具体操作是：
   1. 打开新建文件夹所在的文件夹（父文件夹）；
   2. 右击右窗格空白区——“新建”——“文件夹”/“新建文件类型”；“文件”菜单——“新建”；
   3. 新建的文件或文件夹的名称框呈现可编辑状态，直接输入文件夹名或文件名按“回车键”或“单击确认”；
   4. 单击“工具栏”——“新建文件夹”；
3. 文件或文件夹的重命名
   1. 单击要重命名的文件或文件夹，选择“文件”/“组织”菜单——“重命名”，输入新名称后按回车键；
   2. 右击要重命名的文件或文件夹，选择快捷菜单“重命名”，输入新名称后按回车键；
   3. 不连续单击两次重命名的文件或文件夹名，输入新名称后按回车键；
   4. 按F2，输入新名称后按回车键；
   5. 选择多个对象，命名后按回车键，可以批量重命名， 批量重名时会在文件名后自动加以（1）（2）……区分  ；
   6. 使用DOS命令，rename；
4. 复制
文件和文件夹的的复制是为了将重要的文件和文件夹加以备份；<br />复制文件或文件夹的方法有：
   1. 单击“编辑”或“组织”菜单——“复制”命令——选择目标文件夹——单击“编辑”或“组织”菜单——“粘贴”命令；
   2. 使用快捷菜单；
   3. 使用文件夹中的“发送到”命令；
   4. 使用拖放操作，同一驱动器按CTRL，不同驱动器直接拖动；
   5. 使用鼠标右键拖动；
   6. 使用快捷键：“Ctrl+C”及“Ctrl+V”组合键；
   7. 使用“编辑”菜单；
   8. DOS命令：copy；
5. 移动文件或文件夹
移动文件或文件夹的方法有：
   1. 单击“编辑”或“组织”菜单——“剪切”命令——选择目标文件夹——单击“编辑”或“组织”菜单——“粘贴”命令；
   2. 使用快捷菜单；
   3. 使用拖放操作，不同驱动器按SHITFT键，同一驱动器直接拖动；
   4. 用鼠标右键拖动；
   5. 使用快捷键：“Ctrl+X”和“Ctrl+V”组合键；
   6. 使用“编辑”菜单；
   7. 使用DOS命令，move；
6. 删除文件或文件夹
删除选定的文件或文件夹的方法：
   1. 选择文件或文件夹之后按DELETE键；
   2. 选择“文件”或“组织”菜单——“删除”命令；
   3. 用鼠标右键单击文件或文件夹，在快捷菜单中选择“删除”命令；
   4. 将它们直接拖入回收站；
   5. DOS命令：Del（删除文件）；rd（删除文件夹）；
说明：对软盘上的文件或文件夹进行删除操作时，文件或文件夹不会进入回收站，而是直接删除；对硬盘上的文件或文件夹进行删除操作时，按住shift执行删除操作时，文件或文件夹也不会进入回收站；<br />通过“组织”菜单中的“删除属性”命令时，可以进行文件的相关属性的删除；
7. 隐藏文件和文件夹
   1. 设置隐藏属性：“文件”——“属性”、“组织”——“属性”或鼠标右键要隐藏的文件——“属性”——将文件夹属性设置为“隐藏”；
   2. 显示或隐藏文件：“工具”菜单——“文件夹选项”——“查看”选项卡——“隐藏文件和文件夹”——“不显示隐藏的文件、文件夹和驱动器/显示隐藏文件、文件夹和驱动器”——“确定”；或单击“组织”——“文件夹和搜索选项”；
8. 创建快捷方式
创建文件或文件夹的快捷方式的方法：
   1. “文件”菜单——“新建”——“快捷方式”；
   2. 右击窗口空白处——“新建”——“快捷方式”；
   3. 选中文件后——“文件”菜单——“创建快捷方式”；
   4. 按住Ctrl+Shift+拖动文件；
   5. 右键拖动——“在当前位置创建快捷方式”；
   6. 按住Alt+拖动文件；
9. 设置文件或文件夹属性
文件和文件夹常见的属性有：“只读”、“隐藏”、“存档”、“加密”、“压缩”等 。<br />打开属性的方法：选中文件按Alt+Enter。默认存档，设置成只读后，依旧可以查找，删除文件，但不能修改文件；设置成隐藏后，在查找时查找不到，删除也不行，只有显现出来才可以。<br />压缩文件夹名为蓝色；加密文件夹名为绿色；<br />“加密”方式采用的方法是EFS加密（加密文件系统）。
10. 搜索文件和文件夹
Windows7的“开始”菜单和“库”窗口中提供了“搜索栏”，直接输入即可搜索；
11. 压缩文件和文件夹
新建压缩文件夹：Windows7的窗口处右击——“新建”——“压缩文件夹”——输入名称——确认；<br />解压压缩文件夹：在压缩文件夹上右击——“全部提取”——“浏览”——更改提取路径——“提取”；<br />Windows7支持三类压缩：
   1. 基于NTFS特性的磁盘压缩，该压缩对用户安全透明，仅需要在NTFS格式的磁盘分区上启用磁盘压缩；
   2. Windows自带的压缩ZIP压缩文件，文件压缩率较低，文件扩展名为.zip。
   3. 基于第三方压缩文件：常用的有WinRAR工具，该工具压缩率高、通用性强，支持多种类型的压缩文件，默认文件扩展名为.rar;
12. 共享文件和文件夹
   1. 共享磁盘
磁盘图标右键——“共享”——“高级共享”，在对话框中设置；<br />打开要共享的磁盘——“工具栏”——“共享”——“高级共享”，在对话框中设置；
   2. 共享文件和文件夹
在文件或者文件夹图标上右键——“共享”——“不共享”、“家庭组（读取）”、“家庭组（读取/写入）”及选择“特定用户”，打开对话框设置；
---
### Windows7 的回收站
回收站是硬盘中的一块储存区域，用于暂时存放硬盘上被删除的文件，对误删除起保护作用。回收站中的文件仍然要占用磁盘空间，直到被删除；<br /> 回收站的文件可以做还原，剪切，删除，查看文件属性（双击文件），但不能复制。还原文件自动放回原本删除的位置
1. 回收站的作用：Windows7的回收站是系统默认存放删除文件和文件夹的场所，删除文件或文件夹时，都会先将文件或文件夹放入回收站，防止误删除；
2. 文件的清空还原：打开回收站——空白处右击——“清空回收站”或右击回收站图标——“清空回收站”；点击进入回收站——右击要还原的文件——“还原”；
3. 回收站的设置：右击回收站图标——“属性”——可以设置每个磁盘回收站大小等；
4. 删除U盘，存储卡、软盘及网络共享资源时，不会放入回收站，会被永久删除。
5. 当删除文件大于回收站的容量时，该文件会直接被永久删除，不会经过回收站；当删除文件大于回收站剩余空间时，之前删除的文件会被永久删除；右击“回收站”图标，没有删除命令。
---
### 剪贴板
是Windows7中从一个地方复制或移动并打算在其他地方使用的信息的临时存储区域；其作用是暂时存放用户指定的信息，剪贴板可以存放文本，图形，图标等；剪贴板一次只能处理一条信息，是内存中的一块区域，一旦退出系统，其中的内容便会丢失；<br />当多个内容复制或剪切到剪贴板时，只执行最后一次送入剪贴板的内容。在Word中，剪贴板的容量为24条，超过会自动覆盖前面的内容。断电后，剪贴板内容消失；
1. 剪贴板的使用
   1. 将选定信息送到剪贴板
一般采用两种方法：
      1. 剪切（只能粘贴一次）和复制（可以粘贴多次）命令；
      2. 按Alt+Print Screen组合键将当前窗口内容送到剪贴板；按Print Screen键将整个屏幕送到剪贴板；
   2. 将剪贴板信息粘贴到目标处：
（步骤）
      1. 切换待接收信息粘贴的文档窗口或应用程序；
      2. 将光标定位于待粘贴信息的位置处；
      3. 单击“编辑”菜单——“粘贴”命令；“快捷菜单”——“粘贴”；“Ctrl+V”；
剪贴板将内容粘贴到目标位置后，会出现两种情况：
      - 如果是复制的是文件或文件夹，剪贴板的内容依旧存在，可以进行多次粘贴；
      - 如果是剪切的文件或文件夹，粘贴后剪贴板为空，只能进行一次粘贴；
不管复制或剪切的文件中的内容，在没有新的信息送到剪贴板时，其中的内容依然存在，可以进行多次粘贴；<br />快捷键：
      - 剪切：Ctrl+X
      - 复制：Ctrl+C
      - 粘贴：Ctrl+V
   3. 剪切的重要作用
在程序和窗口之间传递数据；

## 四、Windows7常用附件
---
### 多媒体的概念，常见多媒体文件的格式及其特点
1. 多媒体
将影像、声音、图形、图像、文字、文本、动画等多种媒体结合在一起，形成一个有机的整体，能实现一定的功能，称为多媒体；
2. 常见多媒体文件的格式
   1. 常见的图像文件格式
      1. BMP：位图文件格式，显示和存储屏幕图像技术，每一个点都对应于缓冲中某一单元或单元中某几位；BMP是Windows系统下的标准位图格式，使用普遍。其结构简单，未经压缩，一般文件会比较大；最大的好处：大多数软件接受，是通用格式；
      2. GIF：图形交换格式，支持256色，分为静态GIF和动态GIF两种，支持透明背景图像，适用多种操作系统；动画GIF是将多幅图像保存成一个图像文件，从而形成动画，实质依旧是图片文件格式；
      3. JPG：图片格式，采用特殊的有损压缩算法（将人眼不易察觉的图像颜色删除，达到较大的压缩比），与分辨率有关；
      4. PSD：图像处理软件“PhotoShop”的专用格式，图像文件一般较大；
      5. PNG：图片格式，与JPG类似，压缩比高于GIF，支持图像透明；
   2. 常见的音频文件格式
声音文件和MIDI文件；
      1. 声音文件
数字音频同CD音乐一样，将真实的数字信号保存起来，通过声卡将信号恢复成声音，大多数声音文件采用了不同的音频压缩算法，在基本保持声音质量不变的情况下尽可能获得更小的文件；<br />Wav文件：用于Windows平台的音频信息资源，被Windows平台及其应用程序所广泛支持。文件尺寸较大，多用于存储简短的声音片段；<br />MPEG音频文件：MP1~4：MPEG是运动图像专家组，代表MPEG运动图像压缩标准，这里的音频文件格式指MPEG标准中的音频部分，即MPEG音频层；MPEG音频文件的压缩是一种有损压缩，根据压缩质量和编码复杂程度不同可分为三层（MPEG Audio Layer 1/2/3），分别对应MP1/MP2/MP3三种声音格式，常用的是MP3；<br />RealAudio文件：RA/RM/RAM:是RealNetworks公司开发的一种新型流式音频文件格式，包含在RealNetworks公司制定的音频，视频压缩规范RealMedia中；主要用于低速率的广域网上实时传输音频信息；网络连接速率不同，客户端所获得的声音质量也不同；
      2. MIDI文件：MID/RMI，MIDI是乐器数字接口的英文缩写，是数字音乐/电子合成乐器的统一国际标准，定义了计算机音乐程序、合成器及其它电子设备交换音乐信号的方式；相对于保存真实采样数据的声音文件，MIDI文件更加紧凑，文件大小通常比声音文件小。
   3. 常见的视频文件格式
广义的视频文件分类：动画文件和影像文件；动画文件是由相互关联的若干帧静止图像所组成的图像序列，将这些图像连续播放形成动画，一般完成简单的动态过程演示；影像文件主指包含了实时的音频、视频信息的多媒体文件，其多媒体信息通常来源于视频输入设备，因为包含大量视频、音频信息，所以文件尺寸较大。
      1. 动画文件
GIF文件——目前Internet上常用的彩色动画文件为动画GIF文件，在FLash中可以将设计输出为GIF格式。
      2. 影像文件
         1. AVI文件：音频视频交错，是一种数字音频与视频文件格式，主要应用在多媒体光盘上，用来保存电影、电视等各种影像信息。
         2. QuickTime文件：是Apple公司开发的音频、视频文件格式，保存音频和视频信息，具有先进的视频和音频功能。
         3. MPEG文件：是运动图像压缩算法的国际标准，采用有损压缩方法减少运动图像的冗余信息，保证每秒30帧的图像动态刷新率，平均压缩比50：1，最高达200：1，压缩率非常高，图像和音响质量好，兼容性很好。
         4. RealVideo文件（流媒体）：主要用来在低速率的广域网上实时传输活动视频影像，可根据不同的网络数据传输速率采用不同的压缩比率，从而实现影像数据实时传送和实时播放；在数据传输过程中边下载边播放视频影像。
         5. 主流影视RMVB格式：是由RM视频格式升级延伸出的新视频格式，它的先进之处在于RMVB视频格式打破原来的RM格式的平均压缩方式，保证平均压缩比的基础上合理利用比特率资源，保证静止画面质量前提下，大幅提高运动图像的画面质量。
RM以及RMVB都是网络流行的压缩格式，压缩的电影或音乐都很小，便于网络中传播；RM压缩比率较大，所以压缩出来的电影或音乐质量都不是很好；
         6. 3gp影片格式：移动装置的储存媒体，使用MPEG-4或H.263两种影片的编码方式，以及AMR-NB或AAC-LC两种声音存储方式，可以将更经济的方式储存在手机或者其他移动装置里，最大的优点是文件体积小。
---
### 记事本
1. 编辑功能
只有最基本的编辑功能，常用于查看或编辑文本文件。通常由.txt文件扩展名标识的文件类型；同其他高级文档编辑器基本功能一样，可以移动光标、插入行等。
2. 在编辑的内容中插入时间和日期
把光标移动到目标位置，菜单——“编辑”——“时间/日期”
3. 设置字体
4. 自动换行功能
5. 其他功能
6. 在记事本（单文档文件）中，只能撤销最后一次操作的内容。
### 写字板
### 计算器
### 录音机
### Windows Media Player
