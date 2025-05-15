# Tiptap Media Resize

这是一个用于 [Tiptap](https://tiptap.dev/) 编辑器的扩展，支持调整图片和视频大小的功能。

## 特性

- 支持图片和视频的调整大小
- 提供拖拽句柄进行水平和垂直调整
- 支持左对齐、居中对齐、右对齐
- 支持左浮动和右浮动
- 维持原始媒体的宽高比
- 保持可用性，提供删除功能
- 优雅的UI和交互

## 安装

```bash
# 使用npm
npm install tiptap-media-resize

# 使用yarn
yarn add tiptap-media-resize

# 使用pnpm
pnpm add tiptap-media-resize
```

## 使用

### 注册扩展

```typescript
import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { ResizableMedia } from 'tiptap-media-resize'

const editor = new Editor({
  extensions: [
    StarterKit,
    ResizableMedia,
  ],
  content: '<p>Hello World!</p>',
})
```

### 添加媒体

```typescript
// 添加图片
editor.commands.setMedia({
  src: 'https://example.com/image.jpg',
  'media-type': 'img',
  alt: '描述文本',
  title: '标题',
  width: '800',
  height: '400',
})

// 添加视频
editor.commands.setMedia({
  src: 'https://example.com/video.mp4',
  'media-type': 'video',
  alt: '视频描述',
  title: '视频标题',
  width: '400',
  height: '400'
})
```

## 样式

该扩展需要一些基本样式才能正常工作。您可以根据自己的需求自定义样式，或者使用默认提供的基础样式：

```css
.media-node-view {
  position: relative;
}

.media-node-view.f-left {
  float: left;
}

.media-node-view.f-right {
  float: right;
}

.media-node-view.align-left {
  justify-content: flex-start;
}

.media-node-view.align-center {
  justify-content: center;
}

.media-node-view.align-right {
  justify-content: flex-end;
}

.horizontal-resize-handle,
.vertical-resize-handle {
  position: absolute;
  background-color: transparent;
  opacity: 0.5;
  z-index: 50;
}

.horizontal-resize-handle:hover,
.vertical-resize-handle:hover {
  background-color: rgba(59, 130, 246, 0.5);
}

.horizontal-resize-handle {
  height: 100%;
  width: 8px;
  top: 0;
  right: 0;
  cursor: col-resize;
}

.vertical-resize-handle {
  width: 100%;
  height: 8px;
  bottom: 0;
  left: 0;
  cursor: row-resize;
}
```

## 许可证

MIT
