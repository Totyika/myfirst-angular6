import {Directive, HostBinding, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appStockColor]'
})
export class StockDirective implements OnInit {
  @Input() stockStatus: string;
  @HostBinding('style.color') color: string;

  constructor() { }

  ngOnInit(){
    this.color = (this.stockStatus === 'In stock') ? "#00ca00" : (this.stockStatus === 'La comanda') ? "#ffb300" : "red";
  }
}
