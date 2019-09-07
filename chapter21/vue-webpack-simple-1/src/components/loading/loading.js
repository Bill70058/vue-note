import LoadingComponent from './loading.vue'
import LoadingComponent2 from './loading2.vue'

//此处创建的 Loading 就是import时的组件名
const Loading = {
    //下载真正的组件代码
    install:function(vue){
        //下载名称，下载文件路径
        vue.component('Loading',LoadingComponent);
        vue.component('Loading2',LoadingComponent2);
    }
};

//输出 Loading 
export default Loading;