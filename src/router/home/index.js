import Home from '@/views/home';
import First from '@/views/home/first';
import Type from '@/views/home/type';
import Cart from '@/views/home/cart';
import My from '@/views/home/my';
export default{
    path: '/',
    name: 'home',
    component: Home,
    redirect: {name: 'first'},
    children:[{
        path: '/home/first',
        name: 'first',
        component: First
    },{
        path: '/home/type',
        name: 'type',
        component: Type
    },{
        path: '/home/cart',
        name: 'cart',
        component: Cart
    },{
        path: '/home/my',
        name: 'my',
        component: My
    }]
}