import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key: string, value: string){
    localStorage.setItem(key, value);
    return true;
  }

  get(key: string){
    return localStorage.getItem(key);
  }

  remove(key: string){
    localStorage.removeItem(key);
    return true;
  }

  clear(){
    localStorage.clear();
    return true;
  }
}
