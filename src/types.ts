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
 * 媒体操作的接口定义
 */
export interface ResizableMediaAction {
  tooltip: string;
  icon: any;
  action?: (updateAttributes: (o: Record<string, any>) => any) => void;
  isActive?: (attrs: Record<string, any>) => boolean;
  delete?: (d: () => void) => void;
}

/**
 * 用于图片输入规则的正则表达式
 */
export declare const IMAGE_INPUT_REGEX: RegExp;

/**
 * 用于视频输入规则的正则表达式
 */
export declare const VIDEO_INPUT_REGEX: RegExp;

/**
 * 媒体操作工具栏配置
 */
export declare const resizableMediaActions: ResizableMediaAction[];

/**
 * ResizableMedia Tiptap扩展
 */
export declare const ResizableMedia: Node<MediaOptions>;

export default ResizableMedia;