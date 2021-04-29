
## **移动端地址选择器**

1、地址新，定期更新

2、动画平顺，操作更加移动化

3、兼容各大移动浏览器

4、使用简单

5、基本兼容所有使用场景

6、原生js编写，兼容所有框架

7、爬虫代码已附上，可以随时更新
### 安装

##### Vue
`
npm install pingansec-address-select
`

##### 其他

`dist/address.min.js  你懂的
`


### 用法

```javascript
//非vue 省略这行
import PinganAddressSelect from "pingansec-address-select";

var address =  new PinganAddressSelect({
        'onSelected':function (info) {
 		   console.log(info.province +' '+info.city + ' '+info.region);
 	   }
    });

//设置预地址
address.setProvince('江苏省');
address.setCity('宿迁市');
address.setRegion('宿城区');

//弹出地址选择器
address.show();
```


### GitHub


https://github.com/suxianbaozi/address-select
