# ToutiaoWechat
新手入门小程序开发，模仿今天头条主界面开发学习



在去年2017年1月9日，张小龙在2017微信公开课Pro上发布的小程序正式上线 。时至今日，小程序已经有整整一年时间了 。在2017年12月28日，微信更新的 6.6.1 版本开放了小游戏，「跳一跳」小游戏在那一晚彻底火了。由于微信的流量庞大，所以很多开发者看好小程序，我也不例外 。

### **1、什么是小程序？**

先通过一段官方介绍了解一下小程序：

> 微信小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验 。
>
> 小程序是一种不需要下载安装即可使用的应用，它实现了应用“触手可及”的梦想，用户扫一扫或者搜一下即可打开应用 。

### **2、开发小程序**

了解完小程序到底是什么，接下来是本文的重点 。对于没接触过小程序编程的，可以看过来 。小编带大家入坑 。这篇文章大致说一下如何一步一步创建个简单的小程序出来 。

首先，先看一下效果图 。因为是个学习案例，所以功能非常简单，就是一个简单的页面展示功能 。后面有时间和精力，会再去完善功能的 。

![img](https://mmbiz.qpic.cn/mmbiz_gif/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcBZKWiak4epn9NT9FmgeSicgfmZuKWyboJ46u9ticJyktD57cdkl1QHviag/0?wx_fmt=gif)

搭建小程序环境

目前最新的工具是2017.12.15 更新的，版本号（1.01.1712150）

下载地址：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhceZo9AX8NC2tPUgyEjLlamgW8VOVBBpts3pdAjdETUxNYZoVR629tRQ/0?wx_fmt=png)

安装环境，是很简单的，下载完安装包直接安装即可。

后续我们的开发环境如下：

![https://image.ipaiban.com/upload-ueditor-image-20171023-1508749970727030075.jpg](https://mmbiz.qpic.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcDpcQzt7ATosfnx16BLg3ib6RrO4Op07RiaoZ08akXtt7T2DyhogSVBGw/0?wx_fmt=png)

如何创建第一个小程序

可以先不用注册小程序ID

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhc64KKYIUEd9btVhygdo0MhcThO1wGWd5xqzUx5BSAcPlYGfHYPPNWKw/0?wx_fmt=png)

点击确定，第一个小程序"Hellp World"已经建立完成了，简不简单哈

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcIDvLaR84uLWE59cp7k3SKnwmOBAZXMgickCVh0rV4ibsLbbia5s90EbBg/0?wx_fmt=png)

介绍一下项目结构

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcm0J7jd9ickLNM9KDK4YcWbUKQK081FbMOliaermZ1rSFxLC72gQP9Viaw/0?wx_fmt=png)

从上面项目结构图，可以看到一个页面构成主要有三大部分构成 index.wxml 、index.wxss 、index.js 。我刚一看，怎么跟前端的这么类似 。认真一看，这功能还真是没差别 。对于会一点前端知识的，我想，要入门小程序开发，应该是很简单的 。

一个网页主要 HTML + CSS + JS 这样的组合，其中 HTML 是用来描述当前这个页面的结构，CSS 用来描述页面的样子，JS 是用来处理这个页面和用户的交互。小程序的页面跟这个完全相同 ，不一样的就是改了个名字 。

除了以上页面的三大构成，还有项目的根目录还有一个 app.json 和 project.config.json 。

app.json 是对当前小程序的全局配置，包括了小程序的所有页面路径、界面表现、网络超时时间、底部 tab 等。

project.config.json 可以针对各自喜好做一些个性化配置，例如界面颜色、编译配置等 。

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhc4GygwS2M4PshjvTJUVaSOYibfAG54OsR8L9A6d1l4EuydOg1hrRHMicA/0?wx_fmt=png)

（附上一张官方文档截图）

配置项目的底部导航

介绍完小程序的具体目录，接下来，带大家看看如何配置项目的底部导航 。

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcxcPuomE6Dek7ibnYRiceSP8IRx6K29Zza4Eqd56JsxXYV3Xr5CticvbFw/0?wx_fmt=png)

小程序要实现这个底部导航其实很简单，我们只要在根目录下的app.json文件中配置：

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcXBE7QzaZMurzfFibuRsDzIprKQzcwJ5JCKtM2JibLsCWT7ddPialUb6eg/0?wx_fmt=png)

具体属性值可以看底下这张截图，很明确的说明了：

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcy9ZhtIibp4Aa0lBy1hbUG1yenSiabl7xHMhkza1Dh5SicfMFT8RNmBv8Q/0?wx_fmt=png)

具体官方文档：https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html

如何创建个新页面

小程序的页面创建，都是需要在配置文件中配置一下路径，不然无法访问 。配置也非常简单，只需要在app.json文件下找到一个pages的属性值 。

pages属性：接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】信息，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。

注意：文件名不需要写文件后缀 ，而且路径不能写错！

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhc6mZZM5GBBTss9x573PMvemoF8icCOs8RgjKa9aDevnlMRVqjuzAEy8w/0?wx_fmt=png)

重点：页面如何加载数据

介绍完如何创建一个新页面，下面就开始重点介绍，我们如何给一个页面加上内容 。还是以一开始的例子 ，效果图如下 。我们发现这个页面就是上面一个横向列表+底部是个纵向列表组成 。

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcGMSu7icOIc6iby9vybuZlbjKAdBoPFyIK1vl9dxzAHcROfj6rS0TltCA/0?wx_fmt=png)

要实现上图这个页面，首先你要先明白小程序开发的组件 。小程序提供了一系列基础组件，组件是视图层的基本组成单元，一个组件通常包括开始标签和结束标签，属性用来修饰这个组件，内容在两个标签之内 。这部分，肯定需要你花功夫自己去学习小程序的官方文档，这个不是简单一句两句就能讲明白的 。

官方文档：https://mp.weixin.qq.com/debug/wxadoc/dev/component/

学习完基本组件后，这还不够。因为上图的数据都是网络请求过来展示的，所以你还需要继续学习小程序提供的原生API 。比如网络如何请求数据 。

![img](https://mmbiz.qlogo.cn/mmbiz_png/IibUVnJ665Wpg5LIdMkS8gdlgN0ibINrhcGAEUzibibGL06ukbKLa3acyNia6bTBGKPlEfSHS1DicSjs8CJSW3MFQjjA/0?wx_fmt=png)

学习官方文档如何使用API：

https://mp.weixin.qq.com/debug/wxadoc/dev/api/

**欢迎关注公众号：程序IT圈**

![img](https://mmbiz.qpic.cn/mmbiz_jpg/IibUVnJ665WoZ0u4Nia6lfNkpwM9WGiab49O1cibKib6QLHW2iaF6oXTSIdPCaMjJWDbzfrcTlQeBXiaC0BBRqrEjMVjA/0?wx_fmt=jpeg)
