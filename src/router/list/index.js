import List from '@/views/list'
import Active from '@/views/list/active'
import Tjlist from '@/views/list/tjlist'
import GoodList from '@/views/list/goodlist'
export default{
    path: '/list',
    name: 'List',
    component: List,
    children: [{
        path: '/list/active/:actid',
        name: 'active',
        component: Active
    },{
        path: '/list/tjlist/:tagname',
        name: 'Tjlist',
        component: Tjlist
    },{
        path: '/list/goodlist/:parentid/:menuid',
        name: 'goodlist',
        component: GoodList
    }]
}