import { Component, OnInit, Input } from '@angular/core';
import { HackernewsApiService } from '../hackernews-api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private _hackernewsApiService: HackernewsApiService) { }

  ngOnInit() {
    this._hackernewsApiService.fetchItem(this.itemID)
              .subscribe(
                data => this.item = data,
                error => console.log(`Cound not load item ${this.itemID}!`)
              );
  }

}
