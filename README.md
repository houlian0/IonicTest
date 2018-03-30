# IonicTest
cordova+AngularJS+ionic+arcgis for js 4.6（离线） 结合的移动端跨平台示例程序

1、进入项目路径，然后 

    ```
    npm install
        ```

2、添加cordova的支持，详见：https://ionicframework.com/docs/cli/cordova/platform/
    ```
    ionic cordova platform add <android|ios|... 根据情况选择>
    例子：
    $ ionic cordova platform 
    $ ionic cordova platform add ios
    $ ionic cordova platform add android
    $ ionic cordova platform rm ios
   ```

3、下载arcgis for js离线lib包，并拷贝到下图路径中
  ![arcgis for js离线lib包](https://github.com/houlian0/IonicTest/blob/master/esri-lib.png)
  
4、运行
  ```
  ionic serve
  可以通过cordova运行到Android|IOS等移动设备上，详见cordova官网
  ```
  
  

5、页面效果

  ![页面效果](https://github.com/houlian0/IonicTest/blob/master/ionic-esri.gif)
  
  
