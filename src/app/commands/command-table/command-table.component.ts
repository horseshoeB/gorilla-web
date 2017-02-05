import { Component, Input, OnInit } from '@angular/core';

import { CommandItem } from '../../models/command-item';

@Component({
  selector: 'app-command-table',
  templateUrl: './command-table.component.html',
  styleUrls: ['./command-table.component.css']
})
export class CommandTableComponent implements OnInit {

  @Input() commandItems: CommandItem[] = [];

  columns: {
    title: string,
    name: string,
    sort?: string | boolean,
    className?: string,
    filtering?: {
      filterString: string,
      placeholder: string
    }
  }[] = [
    { title: 'Command', name: 'command', sort: true },
    { title: 'Overview', name: 'overview', sort: false }
  ];

  config: {
    paging: boolean,
    sorting: { columns: any },
    filtering?: {
      filterString: string
    },
    className: string[]
  } = {
    paging: false,
    sorting: { columns: this.columns },
    className: ['table-striped', 'table-bordered', 'table-column__base']
  }

  constructor() { }

  ngOnInit() {
  }

  onChangeTable(config: any): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    // let filteredData = this.changeFilter(this.data, this.config);
    // let sortedData = this.changeSort(filteredData, this.config);
    // this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    // this.length = sortedData.length;
  }

  onCellClick(data: any): any {
    console.log(data.row);
  }

}
