import { Node } from '@tiptap/core'

/**
 * ResizableMedia扩展的选项接口
 */
export interface MediaOptions {
  /**
   * 要应用于媒体元素的HTML属性
   */
  HTMLAttributes: Record<string, any>;
}

/**
 * 创建一个Tiptap节点扩展，用于可调整大小的媒体（图片和视频）
 * 
 * @returns Tiptap节点扩展
 */
export declare function createResizableMedia(): Node<MediaOptions>;

/**
 * 用于图片输入规则的正则表达式
 */
export declare const IMAGE_INPUT_REGEX: RegExp;

/**
 * 用于视频输入规则的正则表达式
 */
export declare const VIDEO_INPUT_REGEX: RegExp;

/**
 * ResizableMedia Tiptap扩展
 */
export declare const ResizableMedia: Node<MediaOptions>;

export default ResizableMedia;