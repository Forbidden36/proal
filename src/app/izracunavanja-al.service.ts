import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzracunavanjaAlService {

  jednokrilni = {1083247: 1, 1083250: 1}
  dvokrilni = {1101239: 1, 1101241:1, 1083247: 2, 1083250: 2}

  izaberiKipAL(a: number, b:number, sigurnosniKip: boolean, otvaranje: string, brojKrila: number){
    let kipElementi = {} 
    if (sigurnosniKip === true){
      if(a < 1000){
        if(otvaranje == 'levo'){
          kipElementi = {1100983: 1, '1078264': 1}
        }
        if(otvaranje == 'desno'){
          kipElementi = {1100983: 1, '1078265': 1}
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

  izaberiRingle(b: number, centralnaRingla:boolean){
    let ringle = {}
    if (centralnaRingla === false) {
      ringle = {1083252: 1, 1083253: 1, 1097953:2}
    } else if (centralnaRingla === true){
      if (b > 380 && b < 621){
        ringle = {1098116: 1}
      }
      if (b > 620 && b < 1001){
        ringle = {1098120: 1}
      }
      if(b > 1000 && b < 1401){
        ringle = {1098122: 1 }
      }
      if (b > 1400 && b < 1801){
        ringle = {1098123: 1}
      }
      if (b > 1800 && b < 2001){
        ringle = {1098124: 1}
      }
      if (b > 2000){
        ringle = {1098125:1}
      }
    }
    return ringle
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
            if(otvaranje === 'levo'){
              maske = {1134365: 1, 1134358: 1, 1134359: 1, 1134361: 1, 1134364: 1, 1101239:1}
            } else {
              maske = {1134366: 1, 1134358: 1, 1134359: 1, 1134361: 1, 1134364: 1, 1101241:1}
              }
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
          maske = {1134365: 1, 1134366: 1, 1134358: 2, 1134359: 2, 1134361: 2, 1134364: 2}
        }
      } 
    return maske
  }
  //Okretni
  zaJednokrilniOkretniAL(b: number, otvaranje: string){
    let jednokrilniOkretni ={}
    if(b < 1601){
      if (otvaranje === 'levo'){
        jednokrilniOkretni = {1083247: 1, 1101239: 1, 1083250: 1, 1083265: 1}
      }
      if (otvaranje === 'desno'){
        jednokrilniOkretni = {1083247: 1, 1101241: 1, 1083250: 1, 1083264: 1}
      } 
    } else {
      if (otvaranje === 'levo'){
        jednokrilniOkretni = {1083247: 1, 1101239: 1, 1083250: 2, 1083269: 1, 1083265: 1}
      }
      if (otvaranje === 'desno'){
        jednokrilniOkretni = {1083247: 1, 1101241: 1, 1083250: 2, 1083269: 1, 1083264: 1}
      } 
    }
    return jednokrilniOkretni
  }
  zaDvokrilniOkretni(b: number){
    let dvokrilniOkretni ={}
    if (b < 1601) {
      dvokrilniOkretni = {1083247: 2, 1101239: 1, 1101241: 1, 1083250: 2, 1083265: 1, 1083264: 1, 1083252: 1, 1083253: 1, 1097953: 2}
    } else {
      dvokrilniOkretni = {1083247: 2, 1101239: 1, 1101241: 1, 1083250: 4, 1083269: 2, 1083265: 1, 1083264: 1, 1083252: 1, 1083253: 1, 1097953: 2}
    }
    return dvokrilniOkretni
  }
  izaberiMaskeOkretnogAL(b:number, boja: string, brKr: number, otvaranje: string){
    let okretneMaskiceAL = {}
    if(brKr == 1){
      if(boja == 'belo'){ //Belo
        if(b < 1601){
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105332: 1, 1083275: 1, 1083273: 1, 1083279: 1, 1083277: 1}
          } else {
            okretneMaskiceAL = {1105333: 1, 1083275: 1, 1083273: 1, 1083279: 1, 1083277: 1}
          }
        } else {
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105332: 1, 1083275: 1, 1083273: 1, 1083279: 2, 1083277: 2}
          } else {
            okretneMaskiceAL = {1105333: 1, 1083275: 1, 1083273: 1, 1083279: 2, 1083277: 2}
          }
        }
      } else if(boja == 'sivo'){ //Sivo
        if(b < 1601){
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105446: 1, 1093923: 1, 1093922: 1, 1093926: 1, 1093928: 1}
          } else {
            okretneMaskiceAL = {1105447: 1, 1093923: 1, 1093922: 1, 1093926: 1, 1093928: 1}
          }
        } else {
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105446: 1, 1093923: 1, 1093922: 1, 1093926: 2, 1093928: 2}
          } else {
            okretneMaskiceAL = {1105447: 1, 1093923: 1, 1093922: 1, 1093926: 2, 1093928: 2}
          }
        }
      } else if(boja == 'braon'){ //Braon
        if(b < 1601){
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105442: 1, 1083276: 1, 1083274: 1, 1083278: 1, 1083280: 1}
          } else {
            okretneMaskiceAL = {1105443: 1, 1083276: 1, 1083274: 1, 1083278: 1, 1083280: 1}
          }
        } else {
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105442: 1, 1083276: 1, 1083274: 1, 1083278: 2, 1083280: 2}
          } else {
            okretneMaskiceAL = {1105443: 1, 1083276: 1, 1083274: 1, 1083278: 2, 1083280: 2}
          }
        }
      } else if(boja == 'antracit'){ //Antracit
        if(b < 1601){
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1134365: 1, 1134358: 1, 1134357: 1, 1134361: 1, 1134364: 1}
          } else {
            okretneMaskiceAL = {1134366: 1, 1134358: 1, 1134357: 1, 1134361: 1, 1134364: 1}
          }
        } else {
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1134365: 1, 1134358: 1, 1134357: 1, 1134361: 2, 1134364: 2}
          } else {
            okretneMaskiceAL = {1134366: 1, 1134358: 1, 1134357: 1, 1134361: 2, 1134364: 2}
          }
        }
      } else if(boja == 'crno'){ //Crno
        if(b < 1601){
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105444: 1, 1087794: 1, 1087793: 1, 1087796: 1, 1087797: 1}
          } else {
            okretneMaskiceAL = {1105445: 1, 1087794: 1, 1087793: 1, 1087796: 1, 1087797: 1}
          }
        } else {
          if(otvaranje == 'levo'){
            okretneMaskiceAL = {1105444: 1, 1087794: 1, 1087793: 1, 1087796: 2, 1087797: 2}
          } else {
            okretneMaskiceAL = {1105445: 1, 1087794: 1, 1087793: 1, 1087796: 2, 1087797: 2}
          }
        }
      }
    } else {
        if(boja == 'belo'){
          if(b < 1601){
            okretneMaskiceAL = {1105332: 1, 1105333: 1, 1083275: 2, 1083273: 2, 1083279: 2, 1083277: 2}
          } else {
            okretneMaskiceAL = {1105332: 1, 1105333: 1, 1083275: 2, 1083273: 2, 1083279: 4, 1083277: 4}
          }
        } else if(boja == 'sivo'){
          if(b < 1601){
            okretneMaskiceAL = {1105446: 1, 1105447: 1,  1093923: 2, 1093922: 2, 1093926: 2, 1093928: 2}
          } else {
            okretneMaskiceAL = {1105446: 1, 1105447: 1,  1093923: 2, 1093922: 2, 1093926: 4, 1093928: 4}
          }
        } else if(boja == 'braon'){
          if(b < 1601){
            okretneMaskiceAL = {1105442: 1, 1105443: 1,  1083276: 2, 1083274: 2, 1083278: 2, 1083280: 2}
          } else {
            okretneMaskiceAL = {1105442: 1, 1105443: 1,  1083276: 2, 1083274: 2, 1083278: 4, 1083280: 4}
          }
        } else if(boja == 'antracit'){
          if(b < 1601){
            okretneMaskiceAL = {1134365: 1, 1134366: 1, 1134358: 2, 1134357: 2, 1134361: 2, 1134364: 2}
          } else {
            okretneMaskiceAL = {1134365: 1, 1134366: 1, 1134358: 2, 1134357: 2, 1134361: 4, 1134364: 4}
          }
        } else if(boja == 'crno'){
          if(b < 1601){
            okretneMaskiceAL = {1105444: 1, 1105445: 1, 1087794: 2, 1087793: 2, 1087796: 2, 1087797: 2}
          } else {
            okretneMaskiceAL = {1105444: 1, 1105445: 1, 1087794: 2, 1087793: 2, 1087796: 4, 1087797: 4}
          }
        }
    }
        return okretneMaskiceAL
  }
  zaNagibnoAL(a:number, boja: string){
    let nagibniAL = {}
    if(a < 801){
      if(boja == 'belo'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 1, 1083279: 2, 1083277: 2}
      } else if(boja == 'sivo'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 1, 1093926: 2, 1093928: 2}
      } else if(boja == 'braon'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 1, 1083278: 2, 1083280: 2}
      } else if(boja == 'antracit'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 1, 1134361: 2, 1134364: 2}
      } else if(boja == 'crno'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 1, 1087797: 2, 1087796: 2}
      }
    } else if(a > 800 && a < 1601){
      if(boja == 'belo'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 2, 1083279: 2, 1083277: 2}
      } else if(boja == 'sivo'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 2, 1093926: 2, 1093928: 2}
      } else if(boja == 'braon'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 2, 1083278: 2, 1083280: 2}
      } else if(boja == 'antracit'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 2, 1134361: 2, 1134364: 2}
      } else if(boja == 'crno'){
        nagibniAL = {1083250: 2, 1083269: 2, 1099152: 2, 1087797: 2, 1087796: 2}
      }
    } else {
      if(boja == 'belo'){
        nagibniAL = {1083250: 3, 1083269: 3, 1099152: 2, 1083279: 3, 1083277: 3}
      } else if(boja == 'sivo'){
        nagibniAL = {1083250: 3, 1083269: 3, 1099152: 2, 1093926: 3, 1093928: 3}
      } else if(boja == 'braon'){
        nagibniAL = {1083250: 3, 1083269: 3, 1099152: 2, 1083278: 3, 1083280: 3}
      } else if(boja == 'antracit'){
        nagibniAL = {1083250: 3, 1083269: 3, 1099152: 2, 1134361: 3, 1134364: 3}
      } else if(boja == 'crno'){
        nagibniAL = {1083250: 3, 1083269: 3, 1099152: 2, 1087797: 3, 1087796: 3}
      }
    }
    return nagibniAL
  }

  izaberiRucicuAL(sigRucica: boolean, boja: string){
    let rucicaAL = {}
    if(sigRucica === false){
      if(boja === 'belo'){
        rucicaAL = {'HOPE340B': 1}
      } else if (boja === 'braon'){
        rucicaAL = {'HOPE340-8017': 1}
      } else if (boja === 'sivo'){
        rucicaAL = {'HOPE340E6': 1}
      } else if (boja === 'antracit'){
        console.log('U pripremi')
      } else if (boja === 'crno'){
        rucicaAL = {'ITAL340CSIG': 1}
      }
    } else {
        if(boja === 'belo'){
        rucicaAL = {'ITAL340B-SIG': 1}
      } else if (boja === 'braon'){
        rucicaAL = {'ITAL340CSIG': 1}
      } else if (boja === 'sivo'){
        rucicaAL = {'ITAL340E6-SIG': 1}
      } else if (boja === 'antracit'){
        console.log('U pripremi')
      } else if (boja === 'crno'){
        rucicaAL = {'ITAL340CSIG': 1}
      }
    }
    return rucicaAL
  }

  constructor() { }
}
