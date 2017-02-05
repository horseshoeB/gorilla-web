import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CommandItem } from '../models/command-item';

@Injectable()
export class CommandsService {

  constructor() { }

  getCommandItems(symbol: string) {
    // TODO replace api
    return COMMAND_ITEMS;
  }

}
const COMMAND_ITEMS: Observable<CommandItem[]> = Observable.of<CommandItem[]>([
  { command: 'alias', overview: 'コマンドの別名を登録' },
  { command: 'basename', overview: 'パス名からファイル名を取り出す' }
]);