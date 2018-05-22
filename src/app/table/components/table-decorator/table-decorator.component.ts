import {ChangeDetectorRef, Component, ElementRef, KeyValueDiffers, OnInit, SkipSelf} from '@angular/core';
import {DatatableComponent, ScrollbarHelper} from '@swimlane/ngx-datatable';
import {DimensionsHelper} from '@swimlane/ngx-datatable/src/services/index';

@Component({
  selector: 'app-table-decorator',
  templateUrl: './table-decorator.component.html',
  styleUrls: ['./table-decorator.component.scss']
})
export class TableDecoratorComponent implements OnInit {

  ngOnInit() {
  }

}
