<template>
  <div style='height:100%;'>
    <!-- 海报html元素 -->
    <div id="posterHtml" class="test"  v-show="false">
      <img :src="posterHtmlBg" alt="" class="img-bg">
      <div class="desc">{{posterContent}}</div>
      <img class="avatar" src="../../assets/logo.png" style="width:30px;" alt="">
      <!-- 二维码 -->
      <div class="qrcode"><div id="qrcodeImg"></div></div>
    </div>
    <img :src="posterImg" alt="" style="width:80%;height:80%;">
  </div>
  
</template>

<script>
    import QRCode from 'qrcodejs2'
  import html2canvas from 'html2canvas'
  export default {
    data() {
      return {
        posterContent: '我来邀请你', // 文案内容
        posterHtmlBg: require('../../assets/test.png'), // 背景图
        posterImg: '', // 最终生成的海报图片
      }
    },
   async mounted(){
    await  this.createQrcode('https://localhost:8989')
    await  this.createPoster()
    },
    methods: {
    createQrcode(text) {
      // 生成二维码
      const qrcodeImgEl = document.getElementById('qrcodeImg')
      qrcodeImgEl.innerHTML = ''
      let qrcode = new QRCode(qrcodeImgEl, {
        width: 50,
        height: 50,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
      qrcode.makeCode(text)
    },
    createPoster() {
      // 生成海报
      const vm = this
      const domObj = document.getElementById('posterHtml')
      html2canvas(domObj, {
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        onclone(doc) {
          let e = doc.querySelector('#posterHtml')
          e.style.display = 'block'
        }
      }).then(function(canvas) {
        // 在微信里,可长按保存或转发
        vm.posterImg = canvas.toDataURL('image/png')
      })
    }
}
  }
</script>

<style >
.test{
   background-size:100% 100% !important;
    bottom: 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
}
.img-bg{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;

}
.desc{
  position: absolute;
  left:10px;
  top:20px;
}
.wrapper{
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.qrcode{
  position: absolute;
  right:10%;
  bottom: 10%;
}
.avatar{
  position: absolute;
  top:20%;
  left:5%;
}
.okok,.xoxo{
height: 100px;
width: 100px;
}
</style>