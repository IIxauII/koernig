import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;

  constructor(private ionicStorage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.ionicStorage.create();
    this.storage = storage;
  }

  public set(key: string, value: any) {
    return this.storage?.set(key, value);
  }

  public get(key: string) {
    return this.storage?.get(key);
  }

  public remove(key: string) {
    return this.storage?.remove(key);
  }

  /**
   * Clear the entire key value store. WARNING: HOT!
   */
  public clear() {
    return this.storage?.clear();
  }

  public length() {
    return this.storage?.length();
  }

  public keys() {
    return this.storage?.keys();
  }
}
