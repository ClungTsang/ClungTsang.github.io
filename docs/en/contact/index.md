---
title: Contact Us
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
  type: 'Business inquiry',
  message: ''
})

const submitting = ref(false)

const rules = {
  name: [{ required: true, message: 'Please enter your name', trigger: 'blur' }],
  email: [{ required: true, message: 'Please enter your email', trigger: 'blur' }],
  message: [{ required: true, message: 'Please briefly describe your needs', trigger: 'blur' }]
}

const handleSubmit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (!valid) return
    submitting.value = true
    try {
      const subject = encodeURIComponent('Website Form: Business Inquiry')
      const body = encodeURIComponent(
        `Name: ${formModel.name}\nCompany: ${formModel.company}\nEmail: ${formModel.email}\nPhone: ${formModel.phone}\nType: ${formModel.type}\n\nRequest:\n${formModel.message}`
      )
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:shawn1440982358@gmail.com?subject=${subject}&body=${body}`
      }
      ElMessage.success('Your mail client has been opened, please confirm and send')
    } catch (e) {
      ElMessage.error('An error occurred while preparing the email, please try again later or contact us directly via email')
    } finally {
      submitting.value = false
    }
  })
}
</script>

# Contact Us

If you would like to learn more about our IT services or RPA automation solutions, feel free to reach out to Zhi En Chuangke Technology (Shenzhen) Co., Ltd. using the information and form below.

[[toc]]

## Business inquiries 📩

<ClientOnly>
  <el-form
    ref="formRef"
    :model="formModel"
    :rules="rules"
    label-width="auto"
    label-position="top"
    label-suffix=":"
    class="contact-business-form"
  >
    <el-form-item label="Name" prop="name">
      <el-input v-model="formModel.name" placeholder="How should we address you?" />
    </el-form-item>
    <el-form-item label="Company" prop="company">
      <el-input v-model="formModel.company" placeholder="Company or team name" />
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model="formModel.email" placeholder="Email to receive our reply" />
    </el-form-item>
    <el-form-item label="Phone">
      <el-input v-model="formModel.phone" placeholder="Optional, for quicker communication" />
    </el-form-item>
    <el-form-item label="Type">
      <el-select v-model="formModel.type" placeholder="Please choose the type of inquiry">
        <el-option label="Business inquiry" value="Business inquiry" />
        <el-option label="Technical cooperation" value="Technical cooperation" />
        <el-option label="RPA project" value="RPA project" />
        <el-option label="Other" value="Other" />
      </el-select>
    </el-form-item>
    <el-form-item label="Request details" prop="message">
      <el-input
        v-model="formModel.message"
        type="textarea"
        :rows="4"
        placeholder="Briefly describe your business scenario, goals or current challenges"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="submitting" @click="handleSubmit">
        Submit
      </el-button>
    </el-form-item>
  </el-form>
</ClientOnly>

## Technical & after-sales support 🛠️

- Operation and optimization of existing projects
- Troubleshooting and adjustment of RPA robots
- Internal team training and technical advisory

> [!NOTE]
> If you are already a client, please include your **company name and project name** in the email subject so that we can quickly understand the context.

## Talent and partnerships 🤝

If you are a developer, consultant or partner interested in IT services or RPA automation, we’d be happy to explore collaboration opportunities with you.

::: info Example collaboration directions
- RPA products and platform partnerships
- Industry consulting and co-created solutions
- Technical communities and knowledge-sharing events
:::
