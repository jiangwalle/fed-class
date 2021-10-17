## 作业1: 电影查询。
### 需求说明：
1. 页面有一个输入框，可以输入查询的关键词
2. 页面有一个按钮`查询`按钮，点击按钮调用后端API进行查询
3. 在页面里显示查询结果，结果包括：电影图片，名称和评分。

### 备注：
#### 查询电影的API的URL地址
URL: https://api.themoviedb.org/3/search/movie?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1&include_adult=false&query=<query_term>

例如：https://api.themoviedb.org/3/search/movie?api_key=71b734c9fe036fa5b36e3d80555e9e37&language=en-US&page=1&include_adult=false&query=%E8%AE%A9%E5%AD%90%E5%BC%B9%E9%A3%9E

#### 查询的关键词需要使用urlencoded进行转码。
可使用函数：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
