---
title: 1+X 证书考试  
top: false
mathjax: true
categories:
   - 考试复习
tags:
   - 学习资料
   - 复习
date: 2023-11-14 10:58:20
---
## 1+X 证书考试
### 静态网页开发
根据注释填空  
### MySQL
1. MySQL的存储过程中：调用存储过程使用关键字`CALL`；存储过程的参数在定义时，有三种参数约束`IN(输入参数，默认值，该参数必须在调用存储过程时指定，在存储过程中修改该参数的值不能被返回)、OUT(输出参数，该值可在存储过程内部被改变，并可返回)、INOUT(输入输出参数，调用时改变，并且可被改变和返回)`;  
2. MySQL的字符串类型有：`TEXT、CHAR、VARCHAR、BLOB`；  

---
### PHP
1. PHP中，`$_FILES`是获取HTTP文件上传信息；`$_GET`用于收集来自`method="get"`的表单中的值；`$_POST`用于收集`method="post"`的表单中的值；超 全局变量`$GLOBALS`引用全局作用域可用的全部变量；  
2. PHP中，`mysqli_fetch_row()`函数从结果集中取得一行，并作为枚举数组返回；`mysqli_fetch_assoc()`函数从结果集中取得一行作为关联数组；`mysqli_fetch_array()`函数从结果集中取得一行作为关联数组或数字数组；`mysqli_fetch_object()`函数从结果集中取得当前行作为对象返回；  
3. PHP中，`implode()`函数把数组元素组合为字符串；`explode()`函数把字符串打散为数组；`trim()`函数移除字符串两侧的空白字符或其他预定义字符；`Strpos()`查找“PHP”在字符串中第一次出现的位置；  
4. PHP中，写入操作不需要的函数是`fread()`；  
5. PHP不支持多重继承，使用**接口**实现多重继承。  
6. PHP中，`preg_match_all()`函数用于执行一个**全局正则表达式**匹配；`preg_replace()`函数执行一个**正则表达式的搜索和替换**；`preg_split()`函数通过正则表达式**分隔字符串**；`preg_match()`函数用于执行一个正则表达式匹配。  
7. PHP魔术方法

|        魔术方法        |          说明          |
|:------------------:|:--------------------:|
|   __construct()    |        类的构造函数        |
|    __destruct()    |        类的析构函数        |
|      __call()      |  在对象中调用一个不可访问方法时调用   |
|   __callStatic()   | 在静态上下文中调用一个不可访问方法时调用 |
|      __get()       |    获得一个类的成员变量时调用     |
|      __set()       |    设置一个类的成员变量时调用     |
| 用函数的方式调用一个对象时的回应方法 |                      |
|     __clone()      |      当对象复制完成时调用      |
|         ……         |                      |
8. PHP哪些关键字限制类成员的访问权限：`private`、`protected`、`public`。  
9. PHP中日期时间相关函数有`gatdate()`、`mktime()`、`time()`、`strtotime()`、`date()`。  
10. PHP用来加载文件的语句有：`include`、`require`、`include_once`、`require_once`。  
11. PHP中，`mysqli_connect($a1,$a2,$a3,$a4)`有四个参数，分别是`$a1`为服务器地址，`$a2`为用户名，`$a3`为密码，`$a4`为数据库名。  
12. PHP中，变量以 **$** 符号开始，后面跟着变量的名称；必须以**字母或下划线字符开始**；**只能包含字母数字字符及下划线（A-z、0-9和_）**；**不能包含空格**；**区分大小写**。  
13. PHP中，`mkdir`创建目录；`readdir`读取目录；`opendir`打开目录；`closedir`关闭目录；`rmdir`删除目录。  
14. PHP的注释符：`//(单行注释)`、`#(单行注释)`、`/* */(多行注释块)`。  
15. `require`一般放在**PHP脚本的最前面**，PHP执行前会先读入`require`指定的文件，提高PHP执行效率，第二次便不会解释；`include`可以放在**PHP脚本任意位置**，PHP执行到`include`语句时才读入`include`指定的文件，当第二次遇到相同文件时，PHP还会重新解释一次。  
16. `require_once/include_once`：分别与require/include作用相同，不同的是，在执行到时会先检查目标内容是不是在之前导入过，那么便不在重复引入同样的内容。  
17. `include`在加载文件失败时，会生成一个**警告（E_WARNNG）**，在错误发生后脚本继续执行。所以include用在希望继续执行并像用户输出结果时。`require`在加载失败时会生成一个**致命错误（E_COMPILE_ERROR），在错误发生后脚本停止执行。一般用在后续代码依赖于载入的文件的时候。  

---
### Laravel 
1. Laravel中，`@extends`指令来明确的指定继承某个布局，然后使用`@section`指令将挂载中的内容挂载到布局中。挂载的内容将被挂载到布局中`@yield`部分；`include()`方法可以加载局部视图文件。  
2. 


---
### JavaScript


---
#### Bootstrap
Bootstrap对齐样式：`text-left(左)`、`text-center(居中)`、`text-right(右)`、`text-justify(超出自动换行)`、`text-nowrap(超出部分不换行)`、`text-lowercase(大写转小写)`、`text-uppercase(首字母大写)`、`text-capitalize`。  
Bootstrap媒体特性属性：`device-width(设备宽度)`、`width(渲染界面或视口的宽度)`、`orientation(横屏或竖屏)`，```(orientation:{landscape(横屏)/portrait(竖屏)})```。  

---
#### jQuery


---
#### Ajax
1. 在Ajax中，readyState属性表示XMLHttpRequest对象的当前状态，其中含有五个可能的值：`0(UNSENT)`:XMLHttpRequest对象已创建，但尚未调用open()方法、`1(OPENED)`:open()方法被调用，在这个状态下，可以设置请求的头部信息，比如设置请求的方法(GET、POST等)和URL、`2(HEADERS_RECEIVED)`:send()方法已被调用，并且服务器响应的头部信息已被接收，这个状态下，可以通过getResponseHeader()方法获取特定的响应头部信息、`3(LOADING)`:正在接收服务器的响应数据，在这个状态下，可以通过responseText或responseXML属性获取部分响应数据、`4(DONE)`:响应数据已经完全接收，在这个状态下，可以通过status和statusText属性获取完整的服务器响应信息，通过responseText或responseXML获取完整的响应数据。   
2. 

---
### 题型解答
#### 单选题  
1. JS中，alert("12">"9")返回false，若是alert(12>9)或者alert("12">"/0/1")返回true。  
2. ```<a herf="**.jpg" title="大连">新闻</a>```，获取a元素的title属性值的方法是（   ）。  
A、```$("a").attr("title").val()```
B、```$("#a").attr("title")```
C、```$("a").attr("title")```
D、```$("a").attr("title").value```  
解析：A选项在JQuery中，`attr()`用于获取属性值，`val()`用于获取表单元素的值，B选项`$("#a")`获取的是id为a的元素，所以B选项错误，C选项正确，D选项链接元素通过`attr("title")`获取，不是通过.value属性获取。  
3. 事件和功能匹配  

|    事件    |        功能        |
|:--------:|:----------------:|
| onSubmit |  用于表单元素，提交表单时触发  |
| onClick  |     点击元素时触发      |
| onChange |    元素值发生改变时触发    |
|  onExit  | 不是HTML与JS内置的标准事件 |
4. jQuery选择器有哪些：**基本选择器（指定元素、类元素、特定id元素），属性选择器，内容过滤选择器，子元素过滤选择器，表单对象属性过滤选择器，可见性过滤选择器，子元素过滤选择器，表单元素选择器**。