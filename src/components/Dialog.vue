<template>
  <div>
      <label> Dialog rendering </label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button id='dlgbtn' v-on:click="BtnClick" class="e-btn close-btn">Open</button>
        <button ejs-button id='dlgbtn2' v-on:click="BtnClick1" class="e-btn close-btn">Open</button>

        <ejs-dialog :buttons='dlgButtons' ref="dialogObj" :header='header' :position='position' :animationSettings='animationSettings' :content='content' showCloseIcon=true :target='target' width='330px'>
        </ejs-dialog>
        <ejs-dialog :buttons='dlgButtons1' ref="dialogObj2" :header='header1' :position='position1' :animationSettings='animationSettings1' showCloseIcon=true :target='target' width='460px'>
        <h4> This content is not rendered from content property  </h4>

        <h5> This content is not rendered from content property  </h5>
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

export default Vue.extend({
    data: function() {
        return {
            target: '.control-section',
            header: 'Dialog Testing',
            content: '<p> This content is rendered from content property </p>',
            animationSettings: { effect: 'None' },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } }, {click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'CANCEL' } }],
            position: { X:"Left",Y: "center"},
            target1: '.control-section',
            header1: 'Dialog Testing',
            animationSettings1: { effect: 'None' },
            dlgButtons1: [{ click: this.dlgBtnClick2, buttonModel: { isPrimary:'true', content: 'OK' } }, {click: this.dlgBtnClick2, buttonModel: { isPrimary:'true', content: 'CANCEL' } }],
            position1: { X:"center",Y: "center"}
        }
    },
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
        dlgBtnClick2: function() {
            this.$refs.dialogObj2.hide();
        }
    }
});
</script>