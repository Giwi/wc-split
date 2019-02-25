import {Component, Prop} from '@stencil/core';
import Split from 'split.js'

@Component({
  tag: 'wc-split',
  styleUrl: 'wc-split.scss',
  shadow: true
})
export class WcSplit {

  @Prop() items: { name: string, size: number }[] | string;
  @Prop() direction: string = 'vertical';

  private _items: { name: string, size: number }[] = [];
  private slots: HTMLElement[] = [];

  componentWillLoad() {
    if (typeof this.items === 'string') {
      this._items = JSON.parse(this.items);
    } else {
      this._items = this.items;
    }
    console.log(this._items)
  }

  componentDidLoad() {
    if (this._items && this._items.length > 0) {
      const sizes: number[] = [];
      this._items.forEach((item: { name: string, size: number }) => {
        sizes.push(item.size || 100);
      });
      Split(this.slots, {
        sizes: sizes,
        //  expandToMin: false,
        direction: this.direction
      });
    }
  }

  render() {
    return <div class={'wrapper ' + this.direction}>
      {this._items.map((item) =>
        <div ref={(el) => this.slots.push(el as HTMLElement)}>
          <slot name={item.name}/>
        </div>
      )}
    </div>;
  }
}
