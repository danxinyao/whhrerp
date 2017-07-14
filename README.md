# 威海鸿荣家装后台管理系统
 
 ## 常用指令
 * npm install 初次启动时,需要运行npm install 安装所有开发依赖
 * npm run mb mac打包指令
 * npm run wb windows 打包指令
 * npm run dev localhost启动,端口8080
 * npm run port localhost指定端口启动
 * npm run hot 热更新
 * npm run ip 指定ip端口启动
 
 ## 版本提交
 只需要提交src文件夹里面的内容,其他的文件夹或文件不需要提交
 
 ## 开发页面流程
 1. 在routes的map下新建路由模块,配置路由对象及tab和auth属性(tab和auth属性选填,tab表示当前路由页面是否在头部tab栏显示,auth表示是否需要登录才能查看)
 2. 如果配置了tab,需要在configs的tabs中进行想关配置,配置说明见tabs.js的注释
 3. 在data的nav.js中将旧的path替换成新建路由的path(此步骤上线后省略,协同后端修改即可)
 4. 根据nav.js中对应path的权限,配置configs中的powers,配置说明见powers.js中的注释
 5. 配置configs的tips.js中对应的页面提示
 6. 新建对应的views services vuex开始开发
 
 # 打包说明
 1、先检查views/log/login中是否设置了自动登录，如果设置了自动登录，请去掉，并把form还原成以下：
form: {
    username: '',
    password: '',
    grant_type: 'password',
    scope: 'admin'
}

 2、services/fetch/config中rootPath选择以下，另外一个注释：
 export const rootPath = 'http://api.sdhongrong.com/api';

 3、services/modules/login中login接口path选择以下，另外一个注释：
 path: 'http://api.sdhongrong.com'

 4、终端定位到项目根目录，运行npm run wb

 5、终端代码生成完毕后，把项目根文件夹中的dist文件夹与index.html压缩成一个文件，即可