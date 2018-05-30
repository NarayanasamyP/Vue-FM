<template>
  <div>
      <label> Content template</label>
    <div class="control-section">
        
        <!-- Render Button to open the Dialog -->
        <button ejs-button id='dlgbtn' v-on:click="BtnClick" class="e-btn close-btn">Open</button>

        <ejs-dialog :buttons='dlgButtons' ref="dialogObj" :header='header' :animationSettings='animationSettings' :content='content' showCloseIcon=true :target='target' width='330px' :open="dialogOpen"
            :close="dialogClose">
            <ejs-uploader id='defaultfileupload' name="UploadFiles" :asyncSettings= "path" :dropArea = "dropElement" ></ejs-uploader>
            <div class="e-input-group" style="padding-top: 20px;">
                    <input class="e-input" type="text" placeholder="Enter Name">
                </div>
        </ejs-dialog>
    </div> 
  </div>
</template>

<style>
    @import '../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
    @import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
    @import '../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';

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
import { UploaderPlugin } from '@syncfusion/ej2-vue-inputs';

Vue.use(DialogPlugin);
Vue.use(UploaderPlugin);

export default Vue.extend({
    name: 'contenttemplate',
    data: function() {
        return {
            target: '.control-section',
            header: 'Dialog Testing',
            content: '<p> This is a simple dialog rendering</p>',
            animationSettings: { effect: 'None' },
            dlgButtons: [{ click: this.dlgBtnClick, buttonModel: { isPrimary:'true', content: 'OK' } }],
            path:  {
            saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
            removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove'
          },
          dropElement: '.control-fluid'
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
});
</script>