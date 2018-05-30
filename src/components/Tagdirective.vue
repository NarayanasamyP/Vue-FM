<template>
  <div>
      <label>Dialog Tag directive</label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button id='dlgbtn' v-on:click="BtnClick" class="e-btn close-btn">Open</button>

        <ejs-dialog ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='contents' :showCloseIcon='true' :target='target' width='330px' :open="dialogOpen"
            :close="dialogClose">
            <e-buttons>
                <e-dialogbutton :buttonModel='buttonmodel1' :click='dlgBtnClick'></e-dialogbutton>
                <e-dialogbutton :buttonModel='buttonmodel2' :click='dlgBtnClick'></e-dialogbutton>
            </e-buttons>
        </ejs-dialog>
    </div> 
  </div>
</template>

<script>
import Vue from "vue";
import { DialogPlugin } from '@syncfusion/ej2-vue-popups';

Vue.use(DialogPlugin);

export default {
    data: function() {
        return {
            target: '.control-section',
            buttonmodel1: { content: 'Ok', isPrimary: 'true'},
            buttonmodel2: { content: 'Canel'},
            header: 'Dialog Testing',
            contents: '<p> This is a simple dialog rendering</p>',
            animationSettings: { effect: 'None' },
            Ok: 'OK',
            Cancel: 'Cancel'
        }
    },
    methods: {
        BtnClick : function() {
            this.$refs.dialogObj.show();
        },
        dialogClose: function() {
            document.getElementById('dlgbtn').style.display = '';
        },
        dialogOpen: function() {
            document.getElementById('dlgbtn').style.display = 'none';
        },
        dlgBtnClick: function() {
            this.$refs.dialogObj.hide();
        }
    }
};
</script>

<style>
@import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    
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
