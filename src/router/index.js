import Vue from 'vue'
import Router from 'vue-router'
import Dialog from '@/components/Dialog'
import ContentTemplate from '@/components/ContentTemplate'
import Uploader from '@/components/Uploader'
import Tagdirective from '@/components/Tagdirective'
import Uploadtagdirective from '@/components/Uploadtagdirective'
import DynamicRender from '@/components/DynamicRender'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dialog/:name',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/contenttemplate/:name',
      name: 'ContentTemplate',
      component: ContentTemplate
    },
    {
      path: '/uploader/:name',
      name: 'Uploader',
      component: Uploader
    },
    {
      path: '/tagdirective/:name',
      name: 'Tagdirective',
      component: Tagdirective
    },
    {
      path: '/uploadtagdirective/:name',
      name: 'Uploadtagdirective',
      component: Uploadtagdirective
    },
    {
      path: '/dynamicrender/:name',
      name: 'DynamicRender',
      component: DynamicRender
    },
  ]
})
