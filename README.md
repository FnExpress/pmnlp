# 语言与信息研究中心

实验室主页 建设中 👴🔨

## 使用

```bash
# 安装依赖
$ yarn install

# 启动服务
$ yarn dev  # visit http://localhost:3000

# 构建
$ yarn build
```

## 目录
```
pmnlp
├── README.md
├── config.yaml       # 配置项
├── index.html        # 入口
├── package.json
├── preprocess.js
├── public
│   ├── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── custom.css
│   ├── layout
│   ├── main.js
│   ├── pages
│   ├── router.js
│   └── typo.css
├── vite.config.js    # Vite配置
└── yarn.lock
```

## 配置说明

## 修改说明

基于[Vite](https://vitejs.cn/)构建， 配置文件： **vite.config.js**

[Vue路由](https://next.router.vuejs.org/zh/)，配置文件：**src/router.js**

UI用的[Bootstrap5](https://v5.bootcss.com/)

入口文件 **src/main.js**

部分组件在index.html用CDN引入的

按图索骥吧