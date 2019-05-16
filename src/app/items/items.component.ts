import { Component, OnInit, Input} from '@angular/core';
import {ProviderService} from '../shared/provider.service';
import {IItem} from '../shared/models/models';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  shoptab = 'planet';
  shoptabDescription = ['choose your unique', 'special', 'for you'];
  public item: IItem[] = [];
  @Input() itemId: any;



  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.getItem(this.itemId).then(res => {
      console.log('aaa');
      this.item[this.itemId] = res;
    });
  }
  setShoptab(curShoptab) {
    this.shoptab = curShoptab;
    console.log(this.shoptab + 'lalala');
  }



}
