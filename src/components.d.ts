/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WcSplit {
    'direction': string;
    'items': { name: string, size: number }[] | string;
  }
  interface WcSplitAttributes extends StencilHTMLAttributes {
    'direction'?: string;
    'items'?: { name: string, size: number }[] | string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'WcSplit': Components.WcSplit;
  }

  interface StencilIntrinsicElements {
    'wc-split': Components.WcSplitAttributes;
  }


  interface HTMLWcSplitElement extends Components.WcSplit, HTMLStencilElement {}
  var HTMLWcSplitElement: {
    prototype: HTMLWcSplitElement;
    new (): HTMLWcSplitElement;
  };

  interface HTMLElementTagNameMap {
    'wc-split': HTMLWcSplitElement
  }

  interface ElementTagNameMap {
    'wc-split': HTMLWcSplitElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}