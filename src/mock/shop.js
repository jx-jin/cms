import Mock from "mockjs"

let shopData = Mock.mock({
    "data|40": [
        {
            "id|+1": 1001,
            "shopName": "@csentence(3, 5)",
            "shopAddress": "@county(true)",
            "shopTel": /^1(3|5|7|8)\d{9}$/,
            "shopDesc": "@csentence",
            "tag": () => {
                var arr = [
                    {
                        text: "西红柿炒鸡蛋",
                        type: "success"
                    },
                    {
                        text: "小龙虾",
                        type: "info"
                    },
                    {
                        text: "麻辣烫",
                        type: "danger"
                    },
                    {
                        text: "北京烤鸭",
                        type: "warning"
                    },
                    {
                        text: "水煮鱼",
                        type: "info"
                    },
                    {
                        text: "过桥米线",
                        type: "warning"
                    }
                ];
                var n = parseInt(2 + Math.random() * arr.length - 1);
                return arr.slice(0, n)
            }
        }
    ]
})
Mock.mock(/\/shopmanage\/shoplist/, "get", (options) => {
    let { limit, page } = JSON.parse(options.body);
    var arr = [];
    for (var i = limit * (page - 1); i < (limit * page); i++) {
        arr.push(shopData.data[i])
    }
    return {
        datalist:arr,
        total:shopData.data.length
    }
})