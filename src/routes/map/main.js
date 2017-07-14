const Main = resolve => require(['views/main/index.vue'], resolve) // 主页
const Merchant = resolve => require(['views/merchant/index.vue'], resolve) // 商家入驻
const Usermanagment = resolve => require(['views/user/usermanagment/index.vue'], resolve) // 用户列表
const Buslists = resolve => require(['views/user/buslists/index.vue'], resolve) // 商家列表
const Subscriblelist = resolve => require(['views/booking/subscribelist/index.vue'], resolve) // 预约列表
const Quotationlist = resolve => require(['views/booking/quotationlist/index.vue'], resolve) // 报价列表
const Article = resolve => require(['views/articlemag/article/index.vue'], resolve) // 文章列表
const Companyintrod = resolve => require(['views/articlemag/companyintrod/index.vue'], resolve) // 公司介绍
const Custompage = resolve => require(['views/pagesetup/custompage/index.vue'], resolve) // 自定义页面
const Mallhome = resolve => require(['views/pagesetup/mallhome/index.vue'], resolve) // 商城首页
const Offichome = resolve => require(['views/pagesetup/offichome/index.vue'], resolve) // offichome
const Discount = resolve => require(['views/activity/discount/index.vue'], resolve) // 限时折扣
const Fullcut = resolve => require(['views/activity/fullcut/index.vue'], resolve) // 满减/满包邮
const Stylist = resolve => require(['views/designer/stylist/index.vue'], resolve) // 设计师列表
const Despiclist = resolve => require(['views/designer/despiclist/index.vue'], resolve) // 图库列表
const Fiancial = resolve => require(['views/financial/financedetail/index.vue'], resolve) // 收支明细
const Fianreport = resolve => require(['views/datareport/financereport/index.vue'], resolve) // 财务报表
const Commodityrank = resolve => require(['views/datareport/commodityrank/index.vue'], resolve) // 商品排名
const Customreport = resolve => require(['views/datareport/customreport/index.vue'], resolve) // 客户报表
const Comment = resolve => require(['views/speech/comment/index.vue'], resolve) // 评论列表
const Feedback = resolve => require(['views/speech/feedback/index.vue'], resolve) // 意见反馈列表
const Consultation = resolve => require(['views/speech/consultation/index.vue'], resolve) // 咨询列表
const Orderlist = resolve => require(['views/ordermg/orderlist/index.vue'], resolve) // 订单列表
const Drawback = resolve => require(['views/ordermg/drawback/index.vue'], resolve) // 退款处理
const Adverthome = resolve => require(['views/advertising/adverthome/index.vue'], resolve) // 首页轮播
const Shopmall = resolve => require(['views/advertising/shopmall/index.vue'], resolve) // 商城轮播
const Essaylist = resolve => require(['views/advertising/essaylist/index.vue'], resolve) // 文章列表
const Renovation = resolve => require(['views/renovation/index.vue'], resolve) // 效果图列表
const Commoditylist = resolve => require(['views/commoditymg/commoditylist/index.vue'], resolve) // 商品列表
const Custservice = resolve => require(['views/commoditymg/custservice/index.vue'], resolve) // 售后
const Commodityclass = resolve => require(['views/commoditymg/commodityclass/index.vue'], resolve) // 商品分类
const GoodsColors = resolve => require(['views/commoditymg/goodsColors/index.vue'], resolve) // 商品颜色
const GoodsSizes = resolve => require(['views/commoditymg/goodsSizes/index.vue'], resolve) // 商品规格
const Staff = resolve => require(['views/rbac/staff/index.vue'], resolve) // 员工管理
const Rolemag = resolve => require(['views/rbac/rolemag/index.vue'], resolve) // 角色管理
const Customer = resolve => require(['views/customer/customer.vue'], resolve) // 在线客服
export default [
    {
        path: '/main',
        name: '/main',
        component: Main,
        meta: {
            title: '欢迎你',
        },
        children: [
            {
                path: '/merchant',
                name: 'merchant',
                component: Merchant,
                meta: {
                    title: '商家入驻管理'
                }
            },
            {
                path: '/usermanagment',
                name: 'usermanagment',
                component: Usermanagment,
                meta: {
                    title: '用户列表'
                }
            }, 
            {
                path: '/buslists',
                name: 'buslists',
                component: Buslists,
                meta: {
                    title: '商家列表'
                }
            },
           {
                path: '/subscribelist',
                name: 'subscribelist',
                component: Subscriblelist,
                meta: {
                    title: '预约列表'
                }
            },
            {
                path: '/quotationlist',
                name: 'quotationlist',
                component: Quotationlist,
                meta: {
                    title: '报价列表'
                }
            },
            {
                path: '/article',
                name: 'article',
                component: Article,
                meta: {
                    title: '文章列表'
                }
            },
            {
                path: '/custompage',
                name: 'custompage',
                component: Custompage,
                meta: {
                    title: '自定义页面'
                }
            },
            {
                path: '/discount',
                name: 'discount',
                component: Discount,
                meta: {
                    title: '限时折扣'
                }
            },
            {
                path: '/fullcut',
                name: 'fullcut',
                component: Fullcut,
                meta: {
                    title: '满减/满包邮'
                }
            },
            {
                path: '/stylist',
                name: 'stylist',
                component: Stylist,
                meta: {
                    title: '设计师列表'
                }
            },
            {
                path: '/financedetail',
                name: 'financedetail',
                component: Fiancial,
                meta: {
                    title: '收支明细'
                }
            },
            {
                path: '/financereport',
                name: 'financereport',
                component: Fianreport,
                meta: {
                    title: '财务报表'
                }
            },
            {
                path: '/comment',
                name: 'comment',
                component: Comment,
                meta: {
                    title: '评论列表'
                }
            },
            {
                path: '/feedback',
                name: 'feedback',
                component: Feedback,
                meta: {
                    title: '意见反馈列表'
                }
            },
            {
                path: '/orderlist',
                name: 'orderlist',
                component: Orderlist,
                meta: {
                    title: '订单列表'
                }
            },
            {
                path: '/adverthome',
                name: 'adverthome',
                component: Adverthome,
                meta: {
                    title: '首页轮播'
                }
            },
            {
                path: '/shopmall',
                name: 'shopmall',
                component: Shopmall,
                meta: {
                    title: '商城轮播'
                }
            },
            {
                path: '/essaylist',
                name: 'essaylist',
                component: Essaylist,
                meta: {
                    title: '文章列表'
                }
            },
            {
                path: '/mallhome',
                name: 'mallhome',
                component: Mallhome,
                meta: {
                    title: '商城首页'
                }
            },
            {
                path: '/offichome',
                name: 'offichome',
                component: Offichome,
                meta: {
                    title: '官网首页'
                }
            },
            {
                path: '/commodityrank',
                name: 'commodityrank',
                component: Commodityrank,
                meta: {
                    title: '商品排名'
                }
            },
            {
                path: '/customreport',
                name: 'customreport',
                component: Customreport,
                meta: {
                    title: '客户报表'
                }
            },
            {
                path: '/renovation',
                name: 'renovation',
                component: Renovation,
                meta: {
                    title: '效果图列表'
                }
            },
            {
                path: '/despiclist',
                name: 'despiclist',
                component: Despiclist,
                meta: {
                    title: '图库列表'
                }
            },
            {
                path: '/consultation',
                name: 'consultation',
                component: Consultation,
                meta: {
                    title: '咨询列表'
                }
            },
            {
                path: '/customer',
                name: 'customer',
                component: Customer,
                meta: {
                    title: '在线客服'
                }
            },
            {
                path: '/drawback',
                name: 'drawback',
                component: Drawback,
                meta: {
                    title: '退款处理'
                }
            },
            {
                path: '/commoditylist',
                name: 'commoditylist',
                component: Commoditylist,
                meta: {
                    title: '商品列表'
                }
            },
            {
                path: '/custservice',
                name: 'custservice',
                component: Custservice,
                meta: {
                    title: '售后'
                }
            },
            {
                path: '/commodityclass',
                name: 'commodityclass',
                component: Commodityclass,
                meta: {
                    title: '商品分类'
                }
            },
            {
                path: '/goodsColors',
                name: 'goodsColors',
                component: GoodsColors,
                meta: {
                    title: '商品颜色'
                }
            },
            {
                path: '/goodsSizes',
                name: 'goodsSizes',
                component: GoodsSizes,
                meta: {
                    title: '商品规格'
                }
            },
            {
                path: '/staff',
                name: 'staff',
                component: Staff,
                meta: {
                    title: '员工管理'
                }
            },
            {
                path: '/rolemag',
                name: 'rolemag',
                component: Rolemag,
                meta: {
                    title: '角色管理'
                }
            },
            {
                path: '/companyintrod',
                name: 'companyintrod',
                component: Companyintrod,
                meta: {
                    title: '公司介绍'
                }
            }
        ]
    }
]