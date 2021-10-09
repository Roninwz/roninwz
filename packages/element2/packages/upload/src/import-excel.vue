<template>
  <el-upload
    class="upload-excel"
    :action="importTagUrl"
    :show-file-list="false"
    :before-upload="beforeUploadExcel"
    :on-success="onSuccess"
    :on-error="uploadExcelError"
    accept=".xls,.xlsx"
  >
    <el-button
      type="primary"
    >
      导入
    </el-button>
  </el-upload>
</template>

<script>
import { importExcelUrl } from '@/api/common';

export default {
  components: {

  },
  data() {
    return {
      importExcelUrl,
    };
  },
  methods: {
    beforeUploadExcel(file) {
      const fileExtension = this.getFileExtension(file.name);
      if (fileExtension !== 'xls' && fileExtension !== 'xlsx') {
        this.$message.error('上传文件必须为xls或者xlsx类型!');
        return false;
      }
      const isLt2M = file.size / 1024 / 1024 < 20;
      if (!isLt2M) {
        this.$message.error('上传文件大小不能超过 20MB!');
        return false;
      }
      return true;
    },
    onSuccess(res) {
      console.log('my console res : ', res);
      if (res.code === 200) {
        this.$message({
          message: '导入成功',
          type: 'success',
        });
      } else {
        this.$message({
          message: res.message || res,
          type: 'success',
        });
      }
    },
    uploadExcelError(err) {
      this.$message({
        message: err.message || err,
        type: 'success',
      });
    },
    getFileExtension(fileName) {
      return fileName.substring(fileName.lastIndexOf('.') + 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.upload-excel {
  display: inline-block;
  margin: 0 10px;
}
</style>
