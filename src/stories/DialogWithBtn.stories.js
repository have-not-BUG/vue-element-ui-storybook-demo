import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from "vue";
Vue.use(ElementUI)
import MyDialogWithBtn from './DialogWithBtn.vue';

export default {
  title: 'Example/DialogWithBtn',
  component: MyDialogWithBtn,
  argTypes: {
    visible: { control: { type: 'boolean'},description:'控制是否可见' },
    title:{ control: { type: 'text'},description:'设置对话框顶部标题' },
    onCancelEvent:{description:'点击取消后的回调事件'},
    onSureEvent:{description:'点击确定后的回调事件',action: 'clicked'},
    'update:visible':{description:'同步visible数值（该参数不涉及修改，可忽略）'},
    default:{description:'底部按钮之前的默认插槽（该参数不涉及修改，可忽略）'},
    footer:{description:'底部按钮footer具名插槽（该参数不涉及修改，可忽略）'},
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyDialogWithBtn },
  template: '<div><el-button @click="onShowDialog">点我显示对话框</el-button> <my-dialog-with-btn @onSureEvent="onSureEvent" @onCancelEvent="onCancelEvent" :visible.sync="visible" :title="title">对话框啊</my-dialog-with-btn></div>',
  methods:{
    onShowDialog(){
      this.visible=true
      console.log('展示了')
    },
  }
});

export const dialogWithBtn = Template.bind({});
dialogWithBtn.args = {
  title: '对话框1',
};

// export const dialogWithBtn2 = Template.bind({});
// dialogWithBtn2.args = {
//   title: '对话框2',
// };

