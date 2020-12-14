<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :data="data"
      :columns="columns"
      separator="cell"
      :pagination="initPagination"
      dense
    >

      <!-- Table header -->
      <template v-slot:header='props'>
        <q-tr>
          <q-th align="center" rowspan="2">日期</q-th>
          <q-th align="center" colspan="2">有氧</q-th>
          <q-th align="center" colspan="3">推胸</q-th>
          <!-- <q-th align="center" colspan="3">高位下拉</q-th>
          <q-th align="center" colspan="3">划船</q-th>
          <q-th align="center" colspan="3">硬拉</q-th>
          <q-th align="center" colspan="3">引体向上</q-th>
          <q-th align="center" colspan="3">压腿</q-th>
          <q-th align="center" colspan="3">腿伸展</q-th> -->
        </q-tr>
        <q-tr>
          <!-- <q-th align="center">123</q-th> -->
          <q-th align="center">速度</q-th>
          <q-th align="center">时间</q-th>
          <template v-for="i in 1">
            <q-th align="center">重量</q-th>
            <q-th align="center">数量</q-th>
            <q-th align="center">组数</q-th>
          </template>
        </q-tr>
      </template>

      <!-- Table body -->
      <template v-slot:body="props">

        <q-tr :props="props">
          <template v-for="(item, index) in props.row">
            <q-td v-if="item.name=='datetime'" >{{item.val}}
              <q-popup-edit v-model="tdatetime">
                <q-date v-model="tdatetime" minimal flat>
                  <div class="row items-center justify-end">
                    <q-btn label="Cancel" color="primary" flat v-close-popup />
                    <q-btn label="OK" color="primary" flat @click="item.val = tdatetime" v-close-popup />
                  </div>
                </q-date>
              </q-popup-edit>
            </q-td>

            <q-td v-else v-for="(v, idx) in item.val" :key="item.name+'-'+idx">
              {{v}}
              <q-popup-edit v-model="props.row[index].val[idx]">
                <q-input v-model="props.row[index].val[idx]" dense autofocus counter />
              </q-popup-edit>
            </q-td>
          </template>

          <q-menu
            touch-position
            context-menu
          >
            <q-list dense style="min-width: 100px">
              <q-item clickable v-close-popup>
                <q-item-section @click="handleDelete(props.rowIndex)">Delete</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-tr>

      </template>
    </q-table>
    <div class="q-mt-sm">
      <q-btn class="q-mr-sm" color="primary" @click="handleAdd()">Add</q-btn>
      <q-btn color="primary" @click="handleUpdate()">Update</q-btn>
    </div>


    <q-dialog
      v-model="deleteDialog"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Delete?</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Delete this record.
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="取消" v-close-popup />
          <q-btn flat label="确认" @click="handleDelete" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>



  </div>

</template>

<script>
import {date} from 'quasar'
var touchTimeEvent = 0;
export default {
  data () {
    return {
      initPagination:{
        rowsPerPage: 100
      },
      deleteDialog: false,
      tdatetime:'',
      columns: [
        {name:'datetime', label:'日期'},
        {name:'youyang', label:'有氧'},
        {name:'tuixiong', label:'推胸'},
        // {name:'gaoweidown',label:'高位下拉'},
        // {name:'huachuan',label:'划船'},
        // {name:'yingla',label:'硬拉'},
        // {name:'yintiup',label:'因提向上'},
        // {name:'yatui',label:'压腿'},
        // {name:'tuiextend',label:'腿伸展'},
      ],
      data: [
        [{
          name:'datetime',
          val: '2020/10/25'
        },{
          name: 'youyang',
          val: [10,2]
        },{
          name: 'tuixiong',
          val: [10, 20, 5]
        }],
      ]
    }
  },
  methods: {

    handleDelete: function(rowIndex){
      this.data.splice(rowIndex,1);
    },
    handleAdd: function(args){
      let data = this.data;
      let newData = [{
          name:'datetime',
          val: date.formatDate(Date.now(), 'YYYY/MM/DD')
        },{
          name: 'youyang',
          val: ['','']
        },{
          name: 'tuixiong',
          val: ['', '', '']
        }]
        this.data.push(newData);
        console.log(this.data)
    },
    handleUpdate: function(){

    },

  },
  beforeCreate: function(){
    this.$axios.get('test').then(res=>{
      console.log(res)
    })
  }


}
</script>

<style scoped>

</style>