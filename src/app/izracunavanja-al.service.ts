import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzracunavanjaAlService {

  jednokrilni = {1083247: 1, 1083250: 1}
  dvokrilni = {1101239: 1, 1101241:1, 1083242: 2, 1083250: 2}

  izaberiKipAL(a: number, b:number, sigurnosniKip: boolean, otvaranje: string, brojKrila: number){
    let kipElementi = {} 
    if (sigurnosniKip === true){
      if(a < 1000){
        if(otvaranje == 'levo'){
          kipElementi = {1100983: 1, '1078264': 1}
        }
        if(otvaranje == 'desno'){
          kipElementi = {1100983: 1, '1078265':1}
        }
      }
      if(a > 999){
        if(otvaranje == 'levo'){
          kipElementi = {1100983:1, '1078264': 1, 1083259: 1, 'prihvSig': 1}
        }
        if(otvaranje == 'desno'){
          kipElementi = {1100983:1, '1078265': 1, 1083259: 1, 'prihvSig': 1}
        }
      }
        
    } else {
      if(brojKrila == 1){

        if(b < 421)
          kipElementi = {1097951: 1}

        if (b < 1000 && b > 420)
          kipElementi = {1083255: 1, 1097951: 1}

        if (b >= 1000)
          kipElementi = {1083256: 1, 1097951: 1}
      } else {
        if (b >= 1000)
          kipElementi = {1083256: 1}

        if (b < 1000 && b >= 420)
          kipElementi = {1083255: 1}
        if (b < 420 )
          return
      }

    }
    return kipElementi
  }

  izaberiMakazuAL(b: number, otvaranje: string){
    let makaza ={}
    if(otvaranje == 'levo'){

        if (b > 319 && b < 611)
        makaza = {'1083038': 1, '1083008': 1}

        if (b > 610 && b < 811)
        makaza = {'1083039': 1, '1083010': 1 }

        if (b > 810 && b < 1011)
        makaza = {'1083040': 1, 'prihvMakaze': 1, '1083012': 1}

        if (b > 1010 && b < 1211)
        makaza = {'1083041': 1, 'prihvMakaze': 1, '1083012': 1}

        if (b > 1210 && b < 1411)
        makaza = {'1083042': 1, 'prihvMakaze': 1, '1083012': 1}
       
    }

    if(otvaranje == 'desno'){

      if (b > 319 && b < 611)
      makaza = {'1083038': 1, '1083009': 1}

      if (b > 610 && b < 811)
      makaza = {'1083039': 1, '1083011': 1 }

      if (b > 810 && b < 1011)
      makaza = {'1083040': 1, 'prihvMakaze': 1, '1083013': 1}

      if (b > 1010 && b < 1211)
      makaza = {'1083041': 1, 'prihvMakaze': 1, '1083013': 1}

      if (b > 1210 && b < 1411)
      makaza = {'1083042': 1, 'prihvMakaze': 1, '1083013': 1} 
    }
    return makaza
  }
  izaberiMakazuDvokrilnogAL(b: number, otvaranje: string){
    let makaza ={}
    if(otvaranje == 'levo'){

        if (b > 319 && b < 611)
        makaza = {'1083038': 1, '1083008': 1, '1083264': 1}

        if (b > 610 && b < 811)
        makaza = {'1083039': 1, '1083010': 1, '1083264': 1 }

        if (b > 810 && b < 1011)
        makaza = {'1083040': 1, 'prihvMakaze': 1, '1083012': 1, '1083264': 1}

        if (b > 1010 && b < 1211)
        makaza = {'1083041': 1, 'prihvMakaze': 1, '1083012': 1, '1083264': 1}

        if (b > 1210 && b < 1411)
        makaza = {'1083042': 1, 'prihvMakaze': 1, '1083012': 1, '1083264': 1}
       
    }

    if(otvaranje == 'desno'){

      if (b > 319 && b < 611)
      makaza = {'1083038': 1, '1083009': 1, '1083265': 1}

      if (b > 610 && b < 811)
      makaza = {'1083039': 1, '1083011': 1, '1083265': 1 }

      if (b > 810 && b < 1011)
      makaza = {'1083040': 1, 'prihvMakaze': 1, '1083013': 1, '1083265': 1}

      if (b > 1010 && b < 1211)
      makaza = {'1083041': 1, 'prihvMakaze': 1, '1083013': 1, '1083265': 1}

      if (b > 1210 && b < 1411)
      makaza = {'1083042': 1, 'prihvMakaze': 1, '1083013': 1, '1083265': 1} 
    }
    return makaza
  }
  izaberiUgaonikDvokrilnogAL(a: number, b:number, sigurnosniKip: boolean, centralnaRingla: boolean){
    let ugaonik ={}
    if(centralnaRingla === true){
      if (sigurnosniKip === true){
        if (b > 380 && b < 419){
          ugaonik = {1083049: 3, 'prihUgaonika': 3}
        } else if (b > 418 && b < 500){
          ugaonik = {1083044: 1, 1083049:2, 'prihUgaonika': 3}
        } else {
          ugaonik = {1083044:3, 'prihUgaonika': 3}
        }
      } else {
        if(b > 450 && b < 590){
          ugaonik = {1083049: 1, 1083044: 1, 'prihUgaonika': 2, 1102621: 1, 1097953: 1}
        } else {
          ugaonik = {1083044: 2, 'prihUgaonika': 2, 1102621: 1, 1097953: 1}
        }
      }
    } else {
      if(sigurnosniKip === true){
        if (a < 409 || b < 419) {
          ugaonik = {1083049: 1}
        } else {
          ugaonik = {1083044: 1}
        }
      } else {
        if(a < 409 || b < 320){
          ugaonik = {1083049: 1}
        }else {
          ugaonik = {1083044: 1}
        }
      }
    }
    return ugaonik
  }
  izborMaskicaAL(brKr: number, otvaranje: string, boja: string){
    let maske = {}
      if (brKr === 1){
        if(boja === 'belo'){
          if(otvaranje === 'levo'){
            maske = {1105332: 1, 1083273: 1, 1083275: 1, 1083277: 1, 1083279: 1, 1101239:1}
          } else {
            maske = {1105333: 1, 1083273: 1, 1083275: 1, 1083277: 1, 1083279: 1, 1101241:1}
            }
        } else if (boja === 'braon'){
            if(otvaranje === 'levo'){
              maske = {1105442: 1, 1083274: 1, 1083276: 1, 1083278: 1, 1083280: 1, 1101239:1}
            } else {
              maske = {1105443: 1, 1083274: 1, 1083276: 1, 1083278: 1, 1083280: 1, 1101241:1}
              }
        } else if (boja === 'sivo'){
            if(otvaranje === 'levo'){
              maske = {1105446: 1, 1093923: 1, 1093922: 1, 1093926: 1, 1093928: 1, 1101239:1}
            } else {
              maske = {1105447: 1, 1093923: 1, 1093922: 1, 1093926: 1, 1093928: 1, 1101241:1}
              } 
        } else if (boja === 'crno'){
            if(otvaranje === 'levo'){
              maske = {1105444: 1, 1087794: 1, 1087795: 1, 1087796: 1, 1087797: 1, 1101239:1}
            } else {
              maske = {1105445: 1, 1087794: 1, 1087795: 1, 1087796: 1, 1087797: 1, 1101241:1}
              } 
        } else if (boja === 'antracit'){
            console.log('U PRIPREMI')
        }
      } else {
        if (boja === 'belo'){
          maske = {1105332: 1, 1105333: 1, 1083273: 2, 1083275: 2, 1083277: 2, 1083279: 2}
        } else if (boja === 'braon'){
          maske = {1105442: 1, 1105443: 1, 1083274: 2, 1083276: 2, 1083278: 2, 1083280: 2}
        } else if (boja === 'sivo'){
          maske = {1105446: 1, 1105447: 1, 1093923: 2, 1093922: 2, 1093926: 2, 1093928: 2}
        } else if (boja === 'crno'){
          maske = {1105444: 1, 1105445: 1, 1087794: 2, 1087795: 2, 1087796: 2, 1087797: 2}
        } else if (boja === 'antracit'){
          console.log('U PRIPREMI')
        }
      } 
    return maske
  }

  izaberiRucicuAL(sigRucica: boolean, boja: string){
    let rucicaAL = {}
    if(sigRucica === false){
      if(boja === 'belo'){
        rucicaAL = {'HOPE340B': 1}
      } else if (boja === 'braon'){
        rucicaAL = {'HOPE340-8017': 1}
      } else if (boja === 'sivo'){
        console.log('U pripremi')
      } else if (boja === 'antracit'){
        console.log('U pripremi')
      } else if (boja === 'crno'){
        rucicaAL = {'ITAL340C-SIG': 1}
      }
    } else {
        if(boja === 'belo'){
        rucicaAL = {'ITAL340B-SIG': 1}
      } else if (boja === 'braon'){
        rucicaAL = {'ITAL340C-SIG': 1}
      } else if (boja === 'sivo'){
        console.log('U pripremi')
      } else if (boja === 'antracit'){
        console.log('U pripremi')
      } else if (boja === 'crno'){
        rucicaAL = {'ITAL340C-SIG': 1}
      }
    }
    return rucicaAL
  }

  constructor() { }
}
