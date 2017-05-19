# weex-dingtalk-todo

dingtalk To Do List Project, ignore todo-server.

## How Run？

```bash
$ cd todo-server
$ npm install

$ cd todo-client
$ npm install

// start todo server at http://${ip}:3000

$ npm run serve

// start todo client for web

$ npm run dev:web

// start todo client for weex

$ npm run dev:weex

// build for production with minification

$ npm run build
```

## How debug？

just `run watch`, whit:

```bash
$ npm run dev:watch
```

如果你没有安装过 `weex-toolkit`，那么还需要安装一下。当你安装完成之后，可以输入`weex debug`命令到`dist`目录下的任意weex bundle文件即可。
