// SVG文件声明
declare module '*.svg' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

// Vue文件声明
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}