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
                    "title": "????????????",
                    "link": "http://info.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://learn.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "?????????",
                    "link": "http://auth4.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "http://zhjwxk.cic.tsinghua.edu.cn/xklogin.do",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://mails.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://cloud.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "?????????",
                    "link": "http://lib.tsinghua.edu.cn/dra/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "http://reserves.lib.tsinghua.edu.cn/",
                    "icon": ""
                },
                {
                    "title": "?????????",
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
                    "title": "????????????",
                    "link": "https://www.cnki.net/",
                    "icon": ""
                },
                {
                    "title": "??????",
                    "link": "https://www.duxiu.com/",
                    "icon": ""
                },
                {
                    "title": "Desmos",
                    "link": "https://www.desmos.com/?lang=zh-CN",
                    "icon": ""
                },
                {
                    "title": "?????????",
                    "link": "https://www.wjx.cn/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://fanyi.baidu.com/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://shimo.im/",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "https://www.aliyundrive.com/drive",
                    "icon": ""
                },
                {
                    "title": "????????????",
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
                },
                {
                    "title": "BiliBili",
                    "link": "https://www.bilibili.com",
                    "icon": ""
                },
                {
                    "title": "Geogebra",
                    "link": "https://www.geogebra.org",
                    "icon": ""
                },
                {
                    "title": "Musicbed",
                    "link": "https://www.musicbed.com",
                    "icon": ""
                }
            ]
        },
        {
            "category": "learning",
            "elements": [
                {
                    "title": "Numpy??????",
                    "link": "https://www.osgeo.cn/numpy",
                    "icon": ""
                },
                {
                    "title": "????????????",
                    "link": "http://dataminingguide.books.yourtion.com/",
                    "icon": ""
                },
                {
                    "title": "?????????",
                    "link": "https://www.bilibili.com/video/BV1X7411F744",
                    "icon": ""
                },
                {
                    "title": "Docker??????",
                    "link": "https://vuepress.mirror.docker-practice.com",
                    "icon": ""
                }
            ]
        }
    ]
}

function createBookmarkTable(tableColumnNumber)
{
    var target = document.getElementById("bookmark-collection")
    target.innerHTML = ""
    var table = document.createElement("table")
    target.appendChild(table)
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
}

var tableColumnNumber = 1
if (document.body.offsetWidth >= 1200)
{
    tableColumnNumber = 3
}
else if (document.body.offsetWidth >= 800)
{
    tableColumnNumber = 2
}

createBookmarkTable(tableColumnNumber)

window.onresize = function(){
    var columnNumber = 1
    if (document.body.offsetWidth >= 1200)
    {
        columnNumber = 3
    }
    else if (document.body.offsetWidth >= 800)
    {
        columnNumber = 2
    }
    if (columnNumber != tableColumnNumber)
    {
        tableColumnNumber = columnNumber
        createBookmarkTable(tableColumnNumber)
    }
}