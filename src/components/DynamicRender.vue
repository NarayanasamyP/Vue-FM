<template>
  <div>
      <label> Dynamic Dialog rendering </label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button  v-bind:key="e" v-bind:class="['e-dialog', { active: currentdialog === e}]" v-on:click="currentdialog = e" id='dlgbtn'>{{e}}</button>

        <ejs-dialog :buttons='dlgButtons' v-bind:is="currentdialogComponent" class="tab" ref="dialogObj" :header='header' :position='position' :animationSettings='animationSettings' :content='content' showCloseIcon=true :target='target' width='330px'>
        </ejs-dialog>
    </div>
  </div>
</template>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

    #dlgbtn2{
        margin-top: 15px;
        margin-left: 35%;
    }
	#defaultDialog {
	    left:23%;
	}
    .control-section {
        height: 100%;
        min-height: 350px;
    }
    .e-btn-hide {
	    display: none;
	}
    #dlgbtn {
        margin-top: 15px;
    }
    #target {
        height: 100%;
        min-height: 350px;
    }
    @media screen and (min-width: 150px) and (max-width: 480px) {
        .control-section {
            margin-bottom: 30px;
        }
        .control-wrapper {
            margin-bottom: 0px;
        }
    }
</style>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(DialogPlugin);

new Vue({
    name: 'dynamicrender',
    data: function() {
        return {
            target: '.control-section',
            header: 'Dialog Testing',
            content: '<p> This content is rendered from content property </p>',
            animationSettings: { effect: 'None' },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } }, {click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'CANCEL' } }],
        }
    },
     computed: {
    currentdialogComponent: function () {
      return 'e-' + this.currentdialog;
    }},
    methods: {
        BtnClick : function() {
            this.$refs.dialogObj.show();
        },
        BtnClick1 : function() {
            this.$refs.dialogObj2.show();
        },
        dlgBtnClick: function() {
            this.$refs.dialogObj.hide();
        },
    }
});
</script>