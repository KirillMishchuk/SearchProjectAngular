import { FormFocusDirective } from './directives/form-focus.directive';
import { HoverDirective } from './directives/hover.directive';
import { MyConfirmDirective } from './directives/my-confirm.directive';
import { RedTextDirective } from './directives/red-text.directive';

import { IList, ListItem } from './model/list-item';

import { SafePipe } from './pipes/safe.pipe';
import { SearchPipe } from './pipes/search.pipe';

import { ListService } from './services/list.service';
import { StorageService } from './services/storage.service';

const SHARED_PIPES: any[] = [
  SafePipe,
  SearchPipe
];

const SHARED_PROVIDERS: any[] = [
  ListService,
  StorageService
];

export {
  FormFocusDirective,
  HoverDirective,
  MyConfirmDirective,
  RedTextDirective,

  IList, ListItem,

  SafePipe,
  SearchPipe,
  SHARED_PIPES,

  ListService,
  StorageService,
  SHARED_PROVIDERS
};
