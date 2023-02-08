import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzracunavanjaSSIService {

  vratiPos(v: number, h: number){
   let pos = {302311: v+h, 188636: v+h, 189038: v+h, 198105: v+h}
    return pos
  }

  izaberiGetribu(b: number, v: number, h: number){
    let getriba = {}
    if (b > 1200 && b < 1801){
      getriba = {184307: v+h}
    } else if (b > 1800 && b < 2101){
      getriba = {184313: v+h}
    } else if (b > 2100 && b < 2401){
      getriba = {184319: v+h}
    } else {
      getriba = {184325: v+h}
    }
      return getriba 
  }

  izaberiLetvu(a:number, v: number, h: number){
    let letva = {}
    if(a > 719 && a < 1501){
      letva = {184578: v+h}
    } else if (a > 1500 && a < 2001){
      letva = {184581: v+h}
    } else if (a > 2000 && a < 2501){
      letva = {184584: v+h}
    } else {
      letva = {184587: v+h}
    }
    return letva
  }

  izaberiPrihvatnike(v:number, h: number){
    let prihvatnikV = {}
    let prihvatnikH = {}
    if (v > 0) {
      prihvatnikV = {184809: v, 184749: v}
    }
    if (h > 0) {
      prihvatnikH = {186934: h}
    }
    return {prihvatnikV, prihvatnikH}
  }

  saberiRukStopere(v: number, h:number, boja: string){
    let sve = {}
    if (boja === 'belo'){
      sve = {'ST1114.00B': v+h, 'ST1115B': v+h, 187480: v+h}
    } else if (boja === 'sivo'){
      sve = {'ST1114.00E6': v+h, 'ST1115E6': v+h, 239855: v+h}
    } else {
      sve = {'ST1114.00C': v+h, 'ST1115C': v+h, 187477: v+h}
    }
      return sve;
  }

  constructor() { }
}
