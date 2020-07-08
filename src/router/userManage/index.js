export default {
    path: "/usermanage",
    component: _ => import("@pages/user-manage"),
    name: "usermanage",
    children: [
        {
            path: "userlist",
            name: "userlist",
            component: _ => import("@pages/user-manage/user-list"),
            meta: {
                breadcrumb:[
                    {
                        path:"/usermanage",
                        text:"用户管理"
                    },
                    {
                        path:"/usermanage/userlist",
                        text:"用户列表"
                    }
                ]
            }
        }
    ]
}