import Vue from "vue";
import App from "./App.vue";
import Create from "@/utils/create.js";

//对于开发版本，会默认向控制台打印,设置false，不输出信息
Vue.config.productionTip = false;

//配置是否允许vue-devtools检查代码
Vue.config.devtools = true;

function boardcast(eventName, data) {
  this.$children.forEach(child => {
    child.$emit(eventName, data);
    if (child.$children.length > 0) {
      boardcast.call(child, eventName, data);
    }
  });
}

class Bus {
  constructor() {
    this.cbs = {};
  }
  $on(name, fn) {
    this.cbs[name] = this.cbs[name] || [];
    this.cbs[name].push(fn);
  }
  $emit(name, args) {
    if (this.cbs[name]) {
      this.cbs[name].forEach(cb => cb(args));
    }
  }
}

Vue.prototype = Object.assign(Vue.prototype, {
  $dispatch: function(eventName, data) {
    let parent = this.$parent;
    while (parent) {
      if (parent) {
        parent.$emit(eventName, data);
        parent = parent.$parent;
      } else {
        break;
      }
    }
  },
  $broadcast: function(eventName, data) {
    boardcast.call(this, eventName, data);
  },
  $bus: new Bus(),
  $create: Create
});

//实例化Vue，渲染App组件，将返回的vdom挂载在id为app的DOM树上替换掉原来占位的dom节点
new Vue({
  render: h => h(App)
}).$mount("#app");
