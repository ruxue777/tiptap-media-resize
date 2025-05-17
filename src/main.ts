import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'

// 已移除全局Tippy导入，改为组件级别使用

import './index.css'

const app = createApp(App)

// app.use(VueTippy, {
//   arrow: true,
//   directive: 'tippy', // => v-tippy
//   component: 'tippy', // => <tippy/>
//   componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
//   defaultProps: {
//     theme: 'dark',
//     placement: 'auto',
//     allowHTML: true,
//     delay: 100,
//     animation: 'shift-toward-subtle',
//     appendTo: () => document.querySelector('body')
//   }, // => Global default options * see all props
// })

app.mount('#app')
