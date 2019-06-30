<template>
  <div id="form">
    <h3>Element Form</h3>
    <hr />
    <k-form :model="model" :rules="rules" ref="loginForm">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username" autocomplete="off" placeholder="输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" autocomplete="off" placeholder="输入用户名" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm('loginForm')">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from "./Form.vue";
import KFormItem from "./FormItem.vue";
import KInput from "./Input.vue";
import KNotice from "../notice/Notice.vue";
export default {
  name: "FormApp",
  components: {
    KForm,
    KFormItem,
    KInput
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate(valid => {
        const notice = this.$create(KNotice, {
          title: "通知",
          message: valid ? "login" : "failed",
          duration: 1000
        });
        notice.show();
      });
    }
  }
};
</script>

<style>
</style>
