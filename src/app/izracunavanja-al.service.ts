import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzracunavanjaAlService {

  jednokrilni = {1083242: 1, 1083250: 1}
  dvokrilni = {1101239: 1, 1101241:1, 1083242: 2, 1083250: 2}

  constructor() { }
}
