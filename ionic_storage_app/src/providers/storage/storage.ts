import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
  }

  save(key, value) {
    this.storage.set(key, value);
  }

}
