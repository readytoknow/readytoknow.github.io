var info = {
    "name": "bookmarks",
    "data": [
        {
            "category": "developer",
            "elements": [
                {
                    "title": "GitHub",
                    "link": "https://github.com/",
                    "icon": ""
                },
                {
                    "title": "Unity",
                    "link": "https://unity.cn/",
                    "icon": ""
                },
                {
                    "title": "JetBrains",
                    "link": "https://www.jetbrains.com/",
                    "icon": ""
                },
                {
                    "title": "Minecraft",
                    "link": "https://www.minecraft.net/zh-hans",
                    "icon": ""
                },
                {
                    "title": "Android",
                    "link": "https://developer.android.google.cn/",
                    "icon": ""
                },
                {
                    "title": "Gitee",
                    "link": "https://gitee.com/",
                    "icon": ""
                },
                {
                    "title": "Python",
                    "link": "https://docs.python.org/zh-cn/3.8/",
                    "icon": ""
                },
                {
                    "title": "Qt",
                    "link": "https://doc.qt.io/",
                    "icon": ""
                },
                {
                    "title": "CRAN",
                    "link": "https://cran.r-project.org/manuals.html",
                    "icon": ""
                },
                {
                    "title": "Vue",
                    "link": "https://v3.cn.vuejs.org/",
                    "icon": ""
                },
                {
                    "title": "React",
                    "link": "https://zh-hans.reactjs.org/",
                    "icon": ""
                },
                {
                    "title": "Stack Overflow",
                    "link": "https://stackoverflow.com/",
                    "icon": ""
                },
                {
                    "title": "Runoob",
                    "link": "https://www.runoob.com/",
                    "icon": ""
                },
                {
                    "title": "Docker",
                    "link": "https://docs.docker.com",
                    "icon": ""
                }
            ]
        },
        {
            "category": "necessary",
            "elements": [
                {
                    "title": "信息门户",
                    "link": "http://info.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "网络学堂",
                    "link": "https://learn.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "校园网",
                    "link": "http://auth4.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "选课登陆",
                    "link": "http://zhjwxk.cic.tsinghua.edu.cn/xklogin.do",
                    "icon": ""
                },
                {
                    "title": "清华邮箱",
                    "link": "https://mails.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "清华云盘",
                    "link": "https://cloud.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "图书馆",
                    "link": "http://lib.tsinghua.edu.cn/dra/",
                    "icon": ""
                },
                {
                    "title": "教参服务",
                    "link": "http://reserves.lib.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "雨课堂",
                    "link": "https://tsinghua.yuketang.cn/pro/portal/home/",
                    "icon": ""
                },
                {
                    "title": "OJ",
                    "link": "https://dsa.cs.tsinghua.edu.cn/oj/foyer.shtml#",
                    "icon": ""
                }
            ]
        },
        {
            "category": "tools",
            "elements": [
                {
                    "title": "中国知网",
                    "link": "https://www.cnki.net/",
                    "icon": ""
                },
                {
                    "title": "读秀",
                    "link": "https://www.duxiu.com/",
                    "icon": ""
                },
                {
                    "title": "Desmos",
                    "link": "https://www.desmos.com/?lang=zh-CN",
                    "icon": ""
                },
                {
                    "title": "问卷星",
                    "link": "https://www.wjx.cn/",
                    "icon": ""
                },
                {
                    "title": "百度翻译",
                    "link": "https://fanyi.baidu.com/",
                    "icon": ""
                },
                {
                    "title": "石墨文档",
                    "link": "https://shimo.im/",
                    "icon": ""
                },
                {
                    "title": "阿里云盘",
                    "link": "https://www.aliyundrive.com/drive",
                    "icon": ""
                },
                {
                    "title": "百度地图",
                    "link": "https://map.baidu.com",
                    "icon": ""
                },
                {
                    "title": "V2Free",
                    "link": "https://w1.v2free.net/user",
                    "icon": ""
                },
                {
                    "title": "AirPortal",
                    "link": "https://airportal.cn/",
                    "icon": ""
                }
            ]
        },
        {
            "category": "learning",
            "elements": [
                {
                    "title": "Numpy教程",
                    "link": "https://www.osgeo.cn/numpy",
                    "icon": ""
                },
                {
                    "title": "数据挖掘",
                    "link": "http://dataminingguide.books.yourtion.com/",
                    "icon": ""
                },
                {
                    "title": "图形学",
                    "link": "https://www.bilibili.com/video/BV1X7411F744",
                    "icon": ""
                },
                {
                    "title": "Docker教程",
                    "link": "https://vuepress.mirror.docker-practice.com",
                    "icon": ""
                }
            ]
        }
    ]
}

var target = document.getElementById("bookmark-collection")
var table = document.createElement("table")
target.appendChild(table)

var screenWidth = document.body.offsetWidth
var tableColumnNumber = 1
if (screenWidth >= 1200)
{
    tableColumnNumber = 3
}
else if (screenWidth >= 800)
{
    tableColumnNumber = 2
}
for (var h = 0; h < tableColumnNumber; h++)
{
    var tableColumn = document.createElement("td")
    tableColumn.className = "bookmark-table-column"
    table.appendChild(tableColumn)
}
var tableColumns = table.childNodes
for (var i = 0; i < info.data.length; i++)
{
    var tableInfo = info.data[i]
    var categoryHeader = document.createElement("h2")
    categoryHeader.innerText = tableInfo.category
    categoryHeader.className = "bookmark-category"
    var elementsBlock = document.createElement("table")
    elementsBlock.className = "bookmark-block"
    for (var j = 0; j < 4; j++)
    {
        var blockColumn = document.createElement("td")
        blockColumn.className = "bookmark-block-column"
        elementsBlock.appendChild(blockColumn)
    }
    var blockColumns = elementsBlock.childNodes
    for (var k = 0; k < tableInfo.elements.length; k++)
    {
        var element = document.createElement("div")
        element.className = "bookmark-element"
        var elementLink = document.createElement("a")
        elementLink.href = tableInfo.elements[k].link
        elementLink.className = "bookmark-link"
        elementLink.innerText = tableInfo.elements[k].title
        elementLink.target = "_blank"
        element.appendChild(elementLink)
        blockColumns[k % 4].appendChild(element)
    }
    tableColumns[i % tableColumnNumber].appendChild(categoryHeader)
    tableColumns[i % tableColumnNumber].appendChild(elementsBlock)
}