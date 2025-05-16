// 导出主要组件
import { ResizableMedia, MediaOptions } from './components/resizableMedia/resizableMedia'
import { resizableMediaActions, ResizableMediaAction } from './components/resizableMedia/resizableMediaMenuUtil'

/**
 * Tiptap可调整大小的媒体扩展
 *
 * 这个扩展允许在Tiptap编辑器中添加可调整大小的图片和视频
 */
export { ResizableMedia }
export default ResizableMedia

// 导出类型定义
export type { MediaOptions, ResizableMediaAction }

// 导出常量
export { IMAGE_INPUT_REGEX, VIDEO_INPUT_REGEX } from './components/resizableMedia/resizableMedia'
export { resizableMediaActions }