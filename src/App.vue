<template>
  <div id="app">
   <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	  <div style="padding-left:0px;" class="collapse navbar-collapse" id="skeleton-navigation-navbar-collapse"> 
      <ul class="nav navbar-nav" >
        <li data-toggle="collapse" ><router-link to="/dialog/Sebastian">Feature Matrix for Dialog</router-link></li>
        <li data-toggle="collapse" ><router-link to="/contenttemplate/Sebastian">Content Template</router-link></li>
        <li data-toggle="collapse" ><router-link to="/tagdirective/Sebastian">Dialog Tag Directive</router-link></li>
        <li data-toggle="collapse" ><router-link to="/dynamicrender/Sebastian">Dynamic Dialog Rendering</router-link></li>              
        <li data-toggle="collapse" ><router-link to="/uploader/Sebastian">Feature Matrix for Uplaoder</router-link></li>
        <li data-toggle="collapse" ><router-link to="/uploadtagdirective/Sebastian">Uploader Tag Directive</router-link></li>
      </ul>
    </div>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style>
</style>