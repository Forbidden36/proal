import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IzracunavanjaService {

  jednokrilni={1083247: 1, 1083242: 1, 1083250: 1}
  dvokrilni = {1083247: 2, 1083242: 2, 1083250: 2}
  
  izaberiGetribu(e: Number, sigurnosniKip: boolean){
    let getriba = {}
    if(sigurnosniKip === true){
     if (e >= 330 && e < 621)
      getriba = {'1083117': 1}
 
     if (e > 620 && e < 1001)
       getriba = {'1088473': 1, 'prihvGetribe': 1}
 
     if (e > 1000 && e < 1401)
       getriba = {'1088474': 1, 'prihvGetribe': 1}
 
     if (e > 1400 && e < 1701)
       getriba = {'1088475': 1, 'prihvGetribe': 1}
 
     if (e > 1700 && e < 2001)
       getriba = {'1088476': 1, 'prihvGetribe': 2}
 
     if (e > 2000 && e < 2400)
       getriba = {'1088477': 1, 'prihvGetribe': 2}

    } else {

     if(e >= 250 && e < 421)
       getriba = {1083081: 1}

     if (e > 420 && e < 621)
       getriba = {'1083117': 1}
 
     if (e > 620 && e < 1001)
       getriba = {'1088473': 1, 'prihvGetribe': 1}
 
     if (e > 1000 && e < 1401)
       getriba = {'1088474': 1, 'prihvGetribe': 1}
 
     if (e > 1400 && e < 1701)
       getriba = {'1088475': 1, 'prihvGetribe': 1}
 
     if (e > 1700 && e < 2001)
       getriba = {'1088476': 1, 'prihvGetribe': 2}
 
     if (e > 2000 && e < 2400)
       getriba = {'1088477': 1, 'prihvGetribe': 2}
    }
      return getriba
    };

    izaberiMakazu(b: number, otvaranje: string){
      let makaza ={}
      if(otvaranje == 'levo'){

          if (b > 319 && b < 611)
          makaza = {'1083038': 1, '1083016': 1}

          if (b > 610 && b < 811)
          makaza = {'1083039': 1, '1083018': 1 }

          if (b > 810 && b < 1011)
          makaza = {'1083040': 1, 'prihvMakaze': 1, '1083020': 1}

          if (b > 1010 && b < 1211)
          makaza = {'1083041': 1, 'prihvMakaze': 1, '1083020': 1}

          if (b > 1210 && b < 1411)
          makaza = {'1083042': 1, 'prihvMakaze': 1, '1083020': 1}
         
      }

      if(otvaranje == 'desno'){

        if (b > 319 && b < 611)
        makaza = {'1083038': 1, '1083017': 1}

        if (b > 610 && b < 811)
        makaza = {'1083039': 1, '1083019': 1 }

        if (b > 810 && b < 1011)
        makaza = {'1083040': 1, 'prihvMakaze': 1, '1083021': 1}

        if (b > 1010 && b < 1211)
        makaza = {'1083041': 1, 'prihvMakaze': 1, '1083021': 1}

        if (b > 1210 && b < 1411)
        makaza = {'1083042': 1, 'prihvMakaze': 1, '1083021': 1} 
      }
      return makaza
    }
    izaberiMakazuDvokrilnog(b: number, otvaranje: string){
      let makaza ={}
      if(otvaranje == 'levo'){

          if (b > 319 && b < 611)
          makaza = {'1083038': 1, '1083016': 1, '1083262': 1}

          if (b > 610 && b < 811)
          makaza = {'1083039': 1, '1083018': 1, '1083262': 1 }

          if (b > 810 && b < 1011)
          makaza = {'1083040': 1, 'prihvMakaze': 1, '1083020': 1, '1083262': 1}

          if (b > 1010 && b < 1211)
          makaza = {'1083041': 1, 'prihvMakaze': 1, '1083020': 1, '1083262': 1}

          if (b > 1210 && b < 1411)
          makaza = {'1083042': 1, 'prihvMakaze': 1, '1083020': 1, '1083262': 1}
         
      }

      if(otvaranje == 'desno'){

        if (b > 319 && b < 611)
        makaza = {'1083038': 1, '1083017': 1, '1083263': 1}

        if (b > 610 && b < 811)
        makaza = {'1083039': 1, '1083019': 1, '1083263': 1 }

        if (b > 810 && b < 1011)
        makaza = {'1083040': 1, 'prihvMakaze': 1, '1083021': 1, '1083263': 1}

        if (b > 1010 && b < 1211)
        makaza = {'1083041': 1, 'prihvMakaze': 1, '1083021': 1, '1083263': 1}

        if (b > 1210 && b < 1411)
        makaza = {'1083042': 1, 'prihvMakaze': 1, '1083021': 1, '1083263': 1} 
      }
      return makaza
    }
    //Ugaonici treba da se srede
    izaberiUgaonik(a: number, b: number, sigurnosniKip: boolean){
      let ugaonik = {}
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

      return ugaonik
    }
    izaberiUgaonikDvokrilnog(a: number, b:number, sigurnosniKip: boolean, centralnaRingla: boolean){
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
            ugaonik = {1083049: 1, 1083044: 1, 'prihUgaonika': 2, 1102621: 1, 1083224: 1}
          } else {
            ugaonik = {1083044: 2, 'prihUgaonika': 2, 1102621: 1, 1083224: 1}
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

    izaberiZadnjiZatv(a: number, b: number, sigurnosniKip: boolean){
      let zadnjiZatv = {}
      if(a > 1000 && sigurnosniKip === false){
        if (b > 1000 && b < 1201) {
          zadnjiZatv = {1083058: 2, 'prihvZadnjeg': 4}
        } else {
          zadnjiZatv = {1083058: 1, 'prihvZadnjeg': 2}
        }

      } else {
        if (b > 1000 && b < 1201) 
          zadnjiZatv = {1083058: 1, 'prihvZadnjeg': 2}
        
          if (b > 1200 && b < 1651) 
          zadnjiZatv = {1083059: 1, 'prihvZadnjeg': 2}

          if (b > 1650) 
          zadnjiZatv = {1083060: 1, 'prihvZadnjeg': 3}
      }
      return zadnjiZatv
    }
    izaberiKip(a: number, b:number, sigurnosniKip: boolean, otvaranje: string, brojKrila: number){
      let kipElementi = {} 
      if (sigurnosniKip === true){
        if(a < 1000){
          if(otvaranje == 'levo'){
            kipElementi = {1100983: 1, '1083190-L': 1}
          }
          if(otvaranje == 'desno'){
            kipElementi = {1100983: 1, '1083190-D':1}
          }
        }
        if(a > 999){
          if(otvaranje == 'levo'){
            kipElementi = {1100983:1, '1083190-L': 1, 1083259: 1, 'prihvSig': 1}
          }
          if(otvaranje == 'desno'){
            kipElementi = {1100983:1, '1083190-D': 1, 1083259: 1, 'prihvSig': 1}
          }
        }
          
      } else {
        if(brojKrila == 1){

          if(b < 421)
            kipElementi = {1083183: 1}

          if (b < 1000 && b > 420)
            kipElementi = {1083255: 1, 1083183: 1}

          if (b >= 1000)
            kipElementi = {1083256: 1, 1083183: 1}
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

    // izaberiKipDvokrilnog(a: number, b:number, sigurnosniKip: boolean){
    //   let kipElementi = {} 
    //   if (sigurnosniKip === true){
    //     if(a < 1000)
    //       kipElementi = {1100983: 1, 1083190: 1}

    //     if(a > 999)
    //       kipElementi = {1100983:1, 1083190: 1, 1083259: 1, 'prihvSig': 1}
    //   } else {

    //     if (b > 999)
    //       kipElementi = {1083256: 1}

    //     if (b < 1000)
    //       kipElementi = {1083255: 1}
    //   }
    //   return kipElementi
    // }
    izaberiRingle(b: number, centralnaRingla:boolean){
      let ringle = {}
      if (centralnaRingla === false) {
        ringle = {1083252: 1, 1083253: 1, 1083224:2}
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
    izborMaskica(brKr: number, boja: string, sigRuc: boolean){
      let maske = {}
        if (boja === 'belo'){
          if(sigRuc === false){
            maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr, 1083279: brKr, 'HOPE340B': 1}
          } else {
            maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr, 1083279: brKr, 'ITAL340BSIG': 1}
          }
        } else if(boja === 'braon') {
          if(sigRuc === false){
            maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr, 1083280: brKr, 'HOPE340-8017': 1}
          } else {
            maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr, 1083280: brKr, 'ITAL340CSIG': 1}
          }
        } else {
          if(sigRuc === false){
            maske = {1087793: brKr, 1087794: brKr, 1087795: brKr, 1087796: brKr, 1087797: brKr, 'ITAL340CSIG': 1}
          } else {
            maske = {1087793: brKr, 1087794: brKr, 1087795: brKr, 1087796: brKr, 1087797: brKr, 'ITAL340CSIG': 1}
          }
        }
      return maske
    }
    //Okretno
    izaberiOkretnuGetribu(ab:number){
      let okretnaGetriba = {}
      if(ab < 250){
        okretnaGetriba = {1083163:1, 'prihvGetribe': 1}
      }
      if (ab >= 250 && ab < 501) {
        okretnaGetriba = {1083164:1, 'prihvGetribe': 1}
      }
      if(ab > 500 && ab < 901) {
        okretnaGetriba = {1083165:1, 'prihvGetribe': 2}
      }
      if(ab > 900 && ab < 1401){
        okretnaGetriba = {1083166:1, 'prihvGetribe': 3}
      }
      if(ab > 1400 && ab < 1901){
        okretnaGetriba = {1083167:1, 'prihvGetribe': 4}
      }
      if(ab > 1900){
        okretnaGetriba = {1083168:1, 'prihvGetribe': 4}
      }
      return okretnaGetriba;
    }
    okretneMaskice(brKr: number, boja: string, sigRuc: boolean, b: number){
      let maske = {}
        if (boja === 'belo'){
          if(sigRuc === false){
            if(b < 1601){
              maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr, 1083279: brKr, 'HOPE340B': 1}
            } else {
              maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr * 2, 1083279: brKr * 2, 'HOPE340B': 1}
            }
          } else {
            if(b < 1601){
              maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr, 1083279: brKr, 'ITAL340BSIG': 1}
            } else {
              maske = {1083271: brKr, 1083273: brKr, 1083275: brKr, 1083277: brKr * 2, 1083279: brKr * 2, 'ITAL340BSIG': 1}
            }
          }
        } else if (boja === 'braon') {
          if(sigRuc === false){
            if (b < 1601){
              maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr, 1083280: brKr, 'HOPE340-8017': 1}
            } else {
              maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr*2, 1083280: brKr*2, 'HOPE340-8017': 1}
            }
          } else {
            if (b < 1601){
              maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr, 1083280: brKr, 'ITAL340CSIG': 1}
            } else {
              maske = {1083272: brKr, 1083274: brKr, 1083276: brKr, 1083278: brKr*2, 1083280: brKr*2, 'ITAL340CSIG': 1}
            }
          }
        } else if (boja === 'crno'){
            if (b < 1601){
              maske = {1087793: brKr, 1087794: brKr, 1087795: brKr, 1087796: brKr, 1087797: brKr, 'ITAL340CSIG': 1}
            } else {
              maske = {1087793: brKr, 1087794: brKr, 1087795: brKr, 1087796: brKr*2, 1087797: brKr*2, 'ITAL340CSIG': 1}
            }
        }
      return maske
    }
    zaJednokrilniOkretni(b: number, otvaranje: string){
      let jednokrilniOkretni ={}
      if(b < 1601){
        if (otvaranje === 'levo'){
          jednokrilniOkretni = {1083247: 1, 1083242: 1, 1083250: 1, 1083263: 1}
        }
        if (otvaranje === 'desno'){
          jednokrilniOkretni = {1083247: 1, 1083242: 1, 1083250: 1, 1083262: 1}
        } 
      } else {
        if (otvaranje === 'levo'){
          jednokrilniOkretni = {1083247: 1, 1083242: 1, 1083250: 2, 1083268: 1, 1083263: 1}
        }
        if (otvaranje === 'desno'){
          jednokrilniOkretni = {1083247: 1, 1083242: 1, 1083250: 2, 1083268: 1, 1083262: 1}
        } 
      }
      return jednokrilniOkretni
    }
    zaDvokrilniOkretni(b: number){
      let dvokrilniOkretni ={}
      if (b < 1601) {
        dvokrilniOkretni = {1083247: 2, 1083242: 2, 1083250: 2, 1083263: 1, 1083262: 1, 1083252: 1, 1083253: 1, 1083224: 2}
      } else {
        dvokrilniOkretni = {1083247: 2, 1083242: 2, 1083250: 4, 1083268: 2, 1083263: 1, 1083262: 1, 1083252: 1, 1083253: 1, 1083224: 2}
      }
      return dvokrilniOkretni
    }
    //Nagibno
    zaNagibni(b:number, boja: string, sigRuc: boolean){
      let nagibni = {}
      if (b < 801){
        if(boja == 'belo'){
          if(sigRuc == false){
            nagibni = {1083250: 2, 1083277: 2, 1083279: 2, 1083268: 2, 'HOPE340B': 1, 1099152: 1}
          } else {
            nagibni = {1083250: 2, 1083277: 2, 1083279: 2, 1083268: 2, 'ITAL340BSIG': 1, 1099152: 1}
          }
        } else if(boja == 'braon'){
          if(sigRuc == false) {
            nagibni = {1083250: 2, 1083278: 2, 1083280: 2, 1083268: 2, 'HOPE340-8017': 1, 1099152: 1}
          } else {
            nagibni = {1083250: 2, 1083278: 2, 1083280: 2, 1083268: 2, 'ITAL340CSIG': 1, 1099152: 1}
          }
        } else {
            //Crna ima samo sigurnosna
            nagibni = {1083250: 2, 1083296: 2, 1083297: 2, 1083268: 2, 'ITAL340CSIG': 1, 1099152: 1}
          }          
      } else if(b > 800 && b < 1601){
        if(boja == 'belo'){
          if(sigRuc == false){
            nagibni = {1083250: 2, 1083277: 2, 1083279: 2, 1083268: 2, 'HOPE340B': 1, 1099152: 2}
          } else {
            nagibni = {1083250: 2, 1083277: 2, 1083279: 2, 1083268: 2, 'ITAL340BSIG': 1, 1099152: 2}
          }
        } else if(boja == 'braon'){
          if(sigRuc == false) {
            nagibni = {1083250: 2, 1083278: 2, 1083280: 2, 1083268: 2, 'HOPE340-8017': 1, 1099152: 2}
          } else {
            nagibni = {1083250: 2, 1083278: 2, 1083280: 2, 1083268: 2, 'ITAL340CSIG': 1, 1099152: 2}
          }
        } else {
          nagibni = {1083250: 2, 1083296: 2, 1083297: 2, 1083268: 2, 'ITAL340CSIG': 1, 1099152: 2}
        }   
      } else if (b > 1600){
        if(boja == 'belo'){
          if(sigRuc == false){
            nagibni = {1083250: 3, 1083277: 3, 1083279: 3, 1083268: 3, 'HOPE340B': 1, 1099152: 2}
          } else {
            nagibni = {1083250: 3, 1083277: 3, 1083279: 3, 1083268: 3, 'ITAL340BSIG': 1, 1099152: 2}
          }
        } else if(boja == 'braon'){
          if(sigRuc == false) {
            nagibni = {1083250: 3, 1083278: 3, 1083280: 3, 1083268: 3, 'HOPE340-8017': 1, 1099152: 2}
          } else {
            nagibni = {1083250: 3, 1083278: 3, 1083280: 3, 1083268: 3, 'ITAL340CSIG': 1, 1099152: 2}
          }
        } else {
          nagibni = {1083250: 3, 1083296: 3, 1083297: 3, 1083268: 3, 'ITAL340CSIG': 1, 1099152: 3}
        } 
      }
      return nagibni
    }
  constructor() { }
}
