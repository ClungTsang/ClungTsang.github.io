---
title: 联络我们
---

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref()
const formModel = reactive({
  name: '',
  company: '',
  email: '',
  phone: '',
  type: '商务咨询',
  message: ''
})

const submitting = ref(false)

const rules = {
  name: [{ required: true, message: '请填写称呼', trigger: 'blur' }],
  email: [{ required: true, message: '请填写邮箱', trigger: 'blur' }],
  message: [{ required: true, message: '请简单描述需求', trigger: 'blur' }]
}

const handleSubmit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (!valid) return
    submitting.value = true
    try {
      const subject = encodeURIComponent('网站表单：商务合作咨询')
      const body = encodeURIComponent(
        `称呼：${formModel.name}\n公司：${formModel.company}\n邮箱：${formModel.email}\n电话：${formModel.phone}\n类型：${formModel.type}\n\n需求描述：\n${formModel.message}`
      )
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:shawn1440982358@gmail.com?subject=${subject}&body=${body}`
      }
      ElMessage.success('已打开邮件客户端，请确认后发送')
    } catch (e) {
      ElMessage.error('提交时出现异常，请稍后再试或直接通过邮箱联系')
    } finally {
      submitting.value = false
    }
  })
}

</script>

# 联络我们

如果你希望了解更多关于 IT 服务或 RPA 自动化导入的细节，欢迎透过以下方式与智恩创科科技（深圳）有限公司联系。

[[toc]]

## 商务合作 📩
<ClientOnly>
  <el-form
    ref="formRef"
    :model="formModel"
    :rules="rules"
    label-width="auto"
    label-position="top"
    label-suffix="："
    class="contact-business-form"
  >
    <el-form-item label="称呼" prop="name">
      <el-input v-model="formModel.name" placeholder="如何称呼您" />
    </el-form-item>
    <el-form-item label="公司" prop="company">
      <el-input v-model="formModel.company" placeholder="公司或团队名称" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="formModel.email" placeholder="用于接收回复的邮箱" />
    </el-form-item>
    <el-form-item label="电话">
      <el-input v-model="formModel.phone" placeholder="可选，便于快速联系" />
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="formModel.type" placeholder="请选择需求类型">
        <el-option label="商务咨询" value="商务咨询" />
        <el-option label="技术合作" value="技术合作" />
        <el-option label="RPA 项目" value="RPA 项目" />
        <el-option label="其他" value="其他" />
      </el-select>
    </el-form-item>
    <el-form-item label="需求说明" prop="message">
      <el-input
        v-model="formModel.message"
        type="textarea"
        :rows="4"
        placeholder="请简单描述您的业务场景、目标或当前遇到的问题"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="submitting" @click="handleSubmit">
        提交信息
      </el-button>
    </el-form-item>
  </el-form>
</ClientOnly>

## 技术与售后支持 🛠️

- 现有专案的运维与功能优化
- RPA 机器人调整与异常排查
- 内部团队培训与顾问服务

> [!NOTE]
> 若你已是合作客户，建议在邮件标题中附上公司名称与专案名称，以便我们更快定位背景资讯。

## 人才与合作 🤝

如果你是对 IT 服务或 RPA 自动化有热情的工程师、顾问或合伙人，也非常欢迎透过联络方式与我们取得联系，一同为大湾区企业提供更好的数位服务。

::: info 合作方向示例
- RPA 产品与平台合作
- 行业顾问与方案共创
- 技术社群与分享活动
:::
