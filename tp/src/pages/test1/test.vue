<template>
  <div class="view">
    <div style="margin: auto;width: 980px;height: auto;">
      <quill-editor
      class="ql-editor"
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @change="onEditorChange($event)"
    />
    </div>


   
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      content: ``, //双向数据绑定数据
      // 富文本编辑器配置
      editorOption: {
        placeholder: '请输入正文',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'], // 加粗 斜体 下划线 删除线
            ['blockquote', 'code-block'], // 引用  代码块
            [{ header: 1 }, { header: 2 }], // 1、2 级标题 标题，键值对的形式；1、2表示字体大小
            [{ list: 'ordered' }, { list: 'bullet' }], // 有序、无序列表
            [{ script: 'sub' }, { script: 'super' }], // 上标/下标
            [{ indent: '-1' }, { indent: '+1' }], // 缩进
            // [{ direction: 'rtl' }], // 文本方向
            [{ size: ['12px', false, '16px', '18px', '20px', '30px'] }], // 字体大小
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
            [{ color: [] }, { background: [] }], // 字体颜色、字体背景颜色
            [
              { font: [false, 'SimSun', 'SimHei', 'Microsoft-YaHei', 'KaiTi', 'FangSong', 'Arial'] }
            ], // 字体种类
            [{ align: [] }], // 对齐方式
            ['clean'], // 清除文本格式
            ['link', 'image', 'video'] // 链接、图片、视频
          ]
        }
      },
      currentLnegth: 0,
      limitLength: 500
    };
  },
  methods: {
    // 失去焦点事件
    onEditorBlur(quill) {
      console.log('editor blur!', quill);
    },
    // 获得焦点事件
    onEditorFocus(quill) {
      console.log('editor focus!', quill);
    },
    // 准备富文本编辑器
    onEditorReady(quill) {
      console.log('editor ready!', quill);
    },
    // 内容改变事件
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text);
 
      quill.deleteText(this.limitLength, 1);
      this.currentLnegth = quill.getLength() - 1;
    }
  }
};
</script>
 
<style>
.quill-editor /deep/ .ql-container {
  min-height: 500px;
  width: 100%;
}
 
.ql-container {
  min-height: 500px;
  width: 100%;
}
</style>