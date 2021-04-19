const id = '1efdc6b59ca6d9f'; // 填入 App 的 Client ID
const token = 'bfc1d843cc07fce2a4519733a2a024a7e2af8386'; // 填入 token
 
 
//- upload
const upload = new Vue({
  el: '#uplaod-wrap',
  data: {
    file: null, // 準備拿 input type="file" 的值
    fs: {
      name: '', // input的圖檔名稱
      thumbnail: null, // input的圖片縮圖
      size: null // input的圖片大小
    },
    title: '', // 圖片標題
    des: '' // 圖片描述
  },
  methods: {
    showFile(e) {
      this.file = e.target.files[0]; // input type="file" 的值
      this.fs.name = this.file.name; // input的圖檔名稱
      this.fs.size = Math.floor(this.file .size * 0.001) + 'KB'; // input的圖片大小
      this.fs.thumbnail = window.URL.createObjectURL(this.file); // input的圖片縮圖
      this.title = this.fs.name; // 預設 input 的圖檔名稱為圖片上傳時的圖片標題
    },
    submit() {
      let settings = {
        async: true,
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'POST',
        url: 'https://api.imgur.com/3/image',
        headers: {
          Authorization: 'Bearer ' + token
        },
        mimeType: 'multipart/form-data'
      };
 
      let form = new FormData();
      form.append('image', this.file);
      form.append('title', this.title);
      form.append('description', this.des);
 
      settings.data = form;
 
      $.ajax(settings).done(function(res) {
        console.log(res); // 可以看見上傳成功後回的值
        var str=res;
        var str1=str.indexOf('link');
        var str2=str.indexOf('success');
        console.log(str1);
        console.log(str2);
        console.log(str1+7);
        console.log(res.substr(str1+7,str2-str1-7-4));
        alert('上傳完成，稍待一會兒就可以在底部的列表上看見了。')
      });
    }
  }
});