import Login from '@/views/login';
import zilogin from '@/views/login/zilogin';
import register from '@/views/login/register';
export default{
    path: '/login',
    name: 'Login',
    component: Login,
    redirect: {name: 'zilogin'},
    children:[
        {
            path: '/login/login',
            name: 'zilogin',
            component: zilogin
        },
        {
            path: '/login/register',
            name: 'register',
            component: register
        }
    ]    
}