
<template>
  <div class="createClass">
    <mt-header title="创建班课"  fixed class="toubu">
        <mt-button icon="back" @click.native="$router.back(-1)" slot="left"></mt-button>
    </mt-header>
  <br><br><br><br>
    <div class="banke">
      <div class="t">
        <span style="font-size:13px">班级</span>
        <input  type="text" placeholder="请输入班级" v-model="banJi" style=" padding:35px 0 0 25px">
      </div>
      <div class="t">
        <span style="font-size:13px">课程</span>
        <input type="text"  placeholder="请输入课程" v-model="keCheng" style=" padding:35px 0 0 25px">
      </div>
      <div class="t">
        <span style="font-size:13px">学校</span>
        <!-- <input type="text"  placeholder="请输入学校" v-model="xueYuan" style=" padding:35px 0 0 25px"> -->
        <el-select v-model="xueXiao" placeholder="全部学院" style=" padding:35px 0 0 25px">
                        <el-option key="1" label="福州大学" value="福州大学"></el-option>
                        <el-option key="2" label="福建师范大学" value="福建师范大学"></el-option>
        </el-select>
      </div>
      <div class="t">
        <span style="font-size:13px">院系</span>
        <!-- <input type="text"  placeholder="请输入院系" v-model="xueYuan" style=" padding:35px 0 0 25px"> -->
        <el-select v-model="xueYuan" placeholder="全部学院" style=" padding:35px 0 0 25px">
                        <el-option key="3" label="数学与计算机科学学院" value="数学与计算机科学学院"></el-option>
                        <el-option key="4" label="材料与化学学院" value="材料与化学学院"></el-option>
        </el-select> 
      </div>
      <div class="t">
        <span style="font-size:13px">所属学期</span>
        <input type="text"  placeholder="2021-2022-1" value="2021-2022-1" v-model="xueQi" style=" padding:35px 0 0 25px">
      </div>
      <div class="t">
        <span style="font-size:13px">课程周数</span>
        <input type="text"  placeholder="请输入课程周数" v-model="CourseWeek" style=" padding:35px 0 0 25px">
      </div>
      <!-- <div class="t">
        <span style="font-size:13px">上课地点</span>
        <input  type="text" placeholder="请输入上课地点" v-model="place" style=" padding:35px 0 0 25px">
      </div>-->
      <div class="t"> 
        <span style="font-size:13px">授课教师</span>
        <input  type="text" placeholder="请输入授课教师" v-model="teacherName" style=" padding:35px 0 0 25px">
      </div>
      <!-- <div class="t">
        <span style="font-size:13px">学习要求</span>
        <input type="text"  placeholder="请输入学习要求" v-model="xueXiYaoQiu" style=" padding:35px 0 0 25px">
      </div> -->
      <div class="t">
        <span style="font-size:13px">教学进度</span>
        <input type="text"  placeholder="请输入教学进度" v-model="JiaoXueJinDu" style=" padding:35px 0 0 25px">
      </div>
      <div class="t">
        <span style="font-size:13px">考试安排</span>
        <input type="text"  placeholder="请输入考试安排" v-model="kaoShiAnPai" style=" padding:35px 0 0 25px">
      </div>
      
    <div id="qrcode" ref="qrcode"></div>
    </div>
    <br> <br> <br>
    <mt-button @click.native="handleClick"  type="primary" style="margin: 20px auto; display: block; width: 90%;" class="button">创建</mt-button>
    <!-- <vue-qr :logoSrc="imageUrl" text="/api/classCourse/ClassNoClassCourse" :size="200"> </vue-qr>  -->
    
  </div>
</template>
<script>
import vueQr from 'vue-qr'
import QRCode from 'qrcodejs2'
  export default {
    name: 'createClass',
    created() {
      this.telphone=this.$store.getters.getStorage('info').telphone
    },
    data() {
      return {
        telphone:'',
        banJi:'',
        place:'',
        teacherName:'',
        keCheng:'',
        xueXiao:'',
        xueYuan:'',
        xueQi:'',
        CourseWeek:'',
        xueXiYaoQiu:'',
        JiaoXueJinDu:'',
        kaoShiAnPai:'',
        banKeCode:'',
        imageUrl: '',
      }
    },
    components: {
      vueQr
    },
    methods: {
      handleClick () {
        console.log("创建班课");
        this.createCode();
        this.$ajax({
          method:'post',
          url:'/api/classCourse/createClassCourse',
          data:{
            telphone:this.telphone,
            banJi:this.banJi,
            place:this.place,
            teacherName:this.teacherName,
            keCheng:this.keCheng,
            xueYuan:this.xueXiao+this.xueYuan,
            xueQi:this.xueQi,
            CourseWeek:this.CourseWeek,
            xueXiYaoQiu:this.xueXiYaoQiu,
            JiaoXueJinDu:this.JiaoXueJinDu,
            kaoShiAnPai:this.kaoShiAnPai,
            banKeCode:this.banKeCode,
          }
        }).then(response=>{
         // console.log(response);
          if(response.status == 204){
            console.log('//班课号重复，再生成一次');
            this.handleClick ()
          }
          if(response.status == 201){
            this.$toast({
              message: '创建班课成功，班课号为'+this.banKeCode+',请使用班课号加入班课',
              // imageUrl: require("../assets/logo.png"),
              // components: {
              //   vueQr
              // },
              duration: 10000
            });
            this.qrcode(this.banKeCode);
            // this.$router.push('/home_teacher');
          }
        }).catch(function (err) {
          console.log(err);
        });
      },
      qrcode (aaa) {
      let qrcode = new QRCode('qrcode',{
      width: 200, // 设置宽度，单位像素
      height: 200, // 设置高度，单位像素
      text: aaa // 设置二维码内容或跳转地址
      })
      },
      createCode(){
        var code = "";
        var codeLength = 4;//验证码的长度
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');//随机数
        for(var i = 0; i < codeLength; i++) {
          //循环操作
          var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
          code += random[index];//根据索引取得随机数加到code上
        }
      //  console.log(code);
        this.banKeCode = code;//把code值赋给验证码
      },
    }
  }
</script>
<style scoped lang='scss'>
  .createClass{
    padding: 5px 20px;
    .mt-header-title{
        color: #FFFFFF;
        font-size: 100px;
    }
    .toubu{
      height: 55px;
      background-color: #096dd9;
    }
    .button{
      background-color: #096dd9;
    }
    .banke{
      .t{
        border-bottom: 1px solid #999;
        display: inline-block ;
        width:100%;
      }
    }
  }
  .content{
    display: flex;
    border-bottom: 1px solid #999;
    justify-content: space-between;
    padding: 10px 20px 20px 0;
    span{
      color: #000000;
      font-size: 20px;
    }
    span:nth-child(2){
      color: #000000;
      font-size: 25px;

    }
  }
</style>
