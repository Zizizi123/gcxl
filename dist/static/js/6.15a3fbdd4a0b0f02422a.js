webpackJsonp([6],{"8C4o":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={data:()=>({url:"/ms/table/list",tableData:[],curPage:1,multipleSelection:[],selectProvince:"",selectKeyWord:"",delList:[],isSearch:!1,isAdd:!1,editVisible:!1,delVisible:!1,form:{name:"",age:"",address:"",email:""},rowId:-1}),created(){this.getData()},computed:{data(){return this.tableData.filter(e=>{let t=!1;for(let l=0;l<this.delList.length;l++)if(e.name===this.delList[l].name){t=!0;break}if(!t&&e.address.indexOf(this.selectProvince)>-1&&(e.name.indexOf(this.selectKeyWord)>-1||e.address.indexOf(this.selectKeyWord)>-1))return e})}},methods:{handleCurrentChange(e){this.curPage=e,this.getData()},getData(){this.$axios.get(this.url,{page:this.curPage}).then(e=>{this.tableData=e.data.list})},search(){this.isSearch=!0},formatter:(e,t)=>e.address,handleEdit(e,t){this.rowId=e;const l=this.tableData[e];this.form={name:l.name,age:l.age,address:l.address,email:l.email},this.editVisible=!0},handleDelete(e,t){this.rowId=e,this.delVisible=!0},delAll(){const e=this.multipleSelection.length;let t="";if(this.delList=this.delList.concat(this.multipleSelection),e){for(let l=0;l<e;l++)t+=this.multipleSelection[l].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]}else this.$message.error("请先勾选要删除的数据！")},handleSelectionChange(e){this.multipleSelection=e},saveEdit(){this.$set(this.tableData,this.rowId,this.form),this.editVisible=!1,this.isAdd?this.$message.success("数据添加成功"):this.$message.success(`修改第 ${this.rowId+1} 行成功`)},deleteRow(){this.tableData.splice(this.rowId,1),this.$message.success("删除成功"),this.delVisible=!1},addUser(){this.isAdd=!0,this.editVisible=!0,this.tableData.shift({name:this.form.name,age:this.form.age,address:this.form.address,email:this.form.email})}}},s={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-tickets"}),e._v(" 基础表格")])],1)],1),e._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"请选择省份"},model:{value:e.selectProvince,callback:function(t){e.selectProvince=t},expression:"selectProvince"}},[l("el-option",{key:"1",attrs:{label:"广东省",value:"广东省"}}),e._v(" "),l("el-option",{key:"2",attrs:{label:"湖南省",value:"湖南省"}})],1),e._v(" "),l("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.selectKeyWord,callback:function(t){e.selectKeyWord=t},expression:"selectKeyWord"}}),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.addUser}},[e._v("添加")])],1),e._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:"",width:"150"}}),e._v(" "),l("el-table-column",{attrs:{prop:"age",label:"年龄",sortable:"",width:"150"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"地址",formatter:e.formatter}}),e._v(" "),l("el-table-column",{attrs:{prop:"email",label:"邮箱",width:"200"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"delAll"},[l("el-button",{staticClass:"handle-del",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")])],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:this.isAdd?"新增":"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{attrs:{type:"name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"年龄"}},[l("el-input",{model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"地址"}},[l("el-input",{model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"邮箱"}},[l("el-input",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"400px"},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=l("VU/8")(a,s,!1,function(e){l("L1el")},"data-v-af03c36c",null);t.default=i.exports},L1el:function(e,t){}});