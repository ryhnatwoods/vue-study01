import Vue from "vue";

function isAlreadyCreated() {
  let noticeEle = document.querySelectorAll("#notice");
  return noticeEle.length > 0;
}
let noticeVm = null;
export default function create(vnode, props) {
  //如果页面中存在这个节点，没有必要再创建
  if (noticeVm) {
    return noticeVm.$children[0];
  }
  //实例化一个虚拟节点
  noticeVm = new Vue({
    render(h) {
      //函数创建了临时变量props，并将传递给值传递给props变量， let props = {...}
      return h(vnode, { props });
    }
  }).$mount();

  //挂载虚拟节点到真实的dom树
  document.body.appendChild(noticeVm.$el);

  const comp = noticeVm.$children[0];
  // @ts-ignore
  comp.remove = function() {
    if (isAlreadyCreated()) {
      //从dom树种移除节点
      document.body.removeChild(noticeVm.$el);
      //销毁创建的vue实例对象
      noticeVm.$destroy();
      //将这个实例对象的引用清空回收
      noticeVm = null;
    }
  };

  return comp;
}
