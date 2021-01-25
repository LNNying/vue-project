/**
 * functional 定义是否为函数式组件
 * h 参数1 为标签名
 *   参数2 为传递属性或方法  props  listeners
 *   参数3 为slot 也就是自定义组件中嵌套的标签内容
 *
 */

let select = {
  name: 'select',
  props: {
    list: Array,
  },
  render() {

  }
};
export default {
  name: 'my-button',
  functional: true,
  props: {
    name: String
  },
  render(h, context) {
    function print() {
      console.log(this);
      console.log(context);
      return 'Select';
    }
    return h(print(), context.data, context.children)
  }
}
