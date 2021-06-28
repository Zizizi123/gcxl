<template>
  <div class="scan">
  <!-- 我topTitle是封装的全局头部返回 根据自己条件进行休整 -->
    <router-link to="/home_student" slot="left">
          <mt-button icon="back">返回</mt-button>
    </router-link>
    <topTitle>扫一扫</topTitle>
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="item">...载入中...</p>
    </div>
  </div>
</template>

<script>
document.addEventListener( "plusready", onPlusReady, false );
// 扩展API加载完毕，现在可以正常调用扩展API
function onPlusReady() {
    var e = document.getElementById("scan");
    e.removeAttribute( "disabled" );
}
let scan = null;
export default {
  name : 'saoma',
  data() {
    return {
      NOClass:'',
      telphone:''
    };
  },
  created(){
      this.telphone=this.$store.getters.getStorage('info').telphone
    },
  mounted() {
    this.startRecognize();
    setTimeout(() => {
      this.startScan();
    }, 500);
  },
  methods: {
    //创建扫描控件
    startRecognize() {
      let that = this;
      if (!window.plus) return;
      //filter 扫描类型
      var filter = [
        plus.barcode.CODE128,
        plus.barcode.EAN13,
        plus.barcode.EAN8,
        plus.barcode.QR,
      ];
      scan = new plus.barcode.Barcode("bcid", filter);
      scan.onmarked = onmarked;
      function onmarked(type, result, file) {
        switch (type) {
          case plus.barcode.QR:
            type = "QR";
            break;
          case plus.barcode.EAN13:
            type = "EAN13";
            break;
          case plus.barcode.EAN8:
            type = "EAN8";
            break;
          case plus.barcode.CODE128:
            type = "EAN8";
            break;
          default:
            type = "其它" + type;
            break;
        }
        alert(result);
        this.NOClass=result
        if(this.NOClass===''){
          this.$toast({
            message: '班课号不能为空',
            duration: 1000
          });
        }
        if(this.NOClass!==''){
          alert('ajax');
          this.$ajax({
            method:'post',
            url:'/api/classCourse/inputClassNo',
            data:{
               NOClass:this.NOClass,
            }
          }).then(response=>{
            alert(response);
            console.log(response);
            if(response.status==204){
              console.log('//班课号不存在，不能加入班课');
              this.$toast({
                message: '你输入的班课号有误',
                duration: 4000
              });
            }
            if(response.status==201){
                that.destroyed();
                this.$router.push({
                  path:'/joinClass',
                  query:{
                    NOClass:this.NOClass,
                  }
                });
            }
          }).catch(function (err) {
            console.log(err); 
          });
        }
        
      }
    },
    // 关闭控件a
    closeScan() {
      if (!window.plus) return;
      scan.close();
    },
    startScan() {
      if (!window.plus) return;
      scan.start();
    },
    // 关闭扫描
    cancelScan() {
      if (!window.plus) return;
      scan.cancel();
    },
  },
  destroyed() {
    this.cancelScan();
    this.closeScan();
  },
};
</script>

<style lang="scss">
.scan {
  width: 100%;
  height: 100vh;
  background-color: #ccc;
}
#bcid {
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.226667rem;
  bottom: 0;
  text-align: center;
  color: #fff;
  background: #ccc;
}
.item {
  font-size: 0.4rem;
}
</style>