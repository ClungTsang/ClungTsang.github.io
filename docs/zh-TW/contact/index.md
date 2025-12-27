---
title: 聯絡我們
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
  type: '商務諮詢',
  message: ''
})

const submitting = ref(false)

const rules = {
  name: [{ required: true, message: '請填寫稱呼', trigger: 'blur' }],
  email: [{ required: true, message: '請填寫郵箱', trigger: 'blur' }],
  message: [{ required: true, message: '請簡單描述需求', trigger: 'blur' }]
}

const handleSubmit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (!valid) return
    submitting.value = true
    try {
      const subject = encodeURIComponent('網站表單：商務合作諮詢')
      const body = encodeURIComponent(
        `稱呼：${formModel.name}\n公司：${formModel.company}\n郵箱：${formModel.email}\n電話：${formModel.phone}\n類型：${formModel.type}\n\n需求描述：\n${formModel.message}`
      )
      if (typeof window !== 'undefined') {
        window.location.href = `mailto:shawn1440982358@gmail.com?subject=${subject}&body=${body}`
      }
      ElMessage.success('已打開郵件客戶端，請確認後發送')
    } catch (e) {
      ElMessage.error('提交時出現異常，請稍後再試或直接通過郵箱聯繫')
    } finally {
      submitting.value = false
    }
  })
}

</script>

# 聯絡我們

如果你希望瞭解更多關於 IT 服務或 RPA 自動化導入的細節，歡迎透過以下方式與智恩創科科技（深圳）有限公司聯繫。

[[toc]]

## 商務合作 📩
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
    <el-form-item label="稱呼" prop="name">
      <el-input v-model="formModel.name" placeholder="如何稱呼您" />
    </el-form-item>
    <el-form-item label="公司" prop="company">
      <el-input v-model="formModel.company" placeholder="公司或團隊名稱" />
    </el-form-item>
    <el-form-item label="郵箱" prop="email">
      <el-input v-model="formModel.email" placeholder="用於接收回復的郵箱" />
    </el-form-item>
    <el-form-item label="電話">
      <el-input v-model="formModel.phone" placeholder="可選，便於快速聯繫" />
    </el-form-item>
    <el-form-item label="類型">
      <el-select v-model="formModel.type" placeholder="請選擇需求類型">
        <el-option label="商務諮詢" value="商務諮詢" />
        <el-option label="技術合作" value="技術合作" />
        <el-option label="RPA 項目" value="RPA 項目" />
        <el-option label="其他" value="其他" />
      </el-select>
    </el-form-item>
    <el-form-item label="需求說明" prop="message">
      <el-input
        v-model="formModel.message"
        type="textarea"
        :rows="4"
        placeholder="請簡單描述您的業務場景、目標或當前遇到的問題"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="submitting" @click="handleSubmit">
        提交信息
      </el-button>
    </el-form-item>
  </el-form>
</ClientOnly>

## 技術與售後支持 🛠️

- 現有專案的運維與功能優化
- RPA 機器人調整與異常排查
- 內部團隊培訓與顧問服務

> [!NOTE]
> 若你已是合作客戶，建議在郵件標題中附上公司名稱與專案名稱，以便我們更快定位背景資訊。

## 人才與合作 🤝

如果你是對 IT 服務或 RPA 自動化有熱情的工程師、顧問或合夥人，也非常歡迎透過聯絡方式與我們取得聯繫，一同為大灣區企業提供更好的數位服務。

::: info 合作方向示例
- RPA 產品與平臺合作
- 行業顧問與方案共創
- 技術社群與分享活動
:::
