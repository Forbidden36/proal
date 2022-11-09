import { Injectable } from '@angular/core';
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  ValidateSirina(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const otvaranjeTipa = control.get('nacinOtvaranja')?.value
      const meraTipa = control.get('tipMere')?.value;
      const privSirina:number = control.get('sirina')?.value;
      const krilaBroj = control.get('brojKrila')?.value
      let sirina = 0
      if(meraTipa === 'falcnaMera'){
        sirina = privSirina
      } else {
        if (krilaBroj === 1){
          sirina = privSirina - 118
        } else if(krilaBroj === 2){
          sirina = (privSirina / 2) - 84
        } else {
          sirina = (privSirina / 3) - 79
        }
      }
      
      if(!sirina){
        return null;
      }
      if(otvaranjeTipa === 'kombinovano'){
        if (sirina > 1400){
          return {sirinaVelikaONO: true}
        } else if(sirina < 320){
          return {sirinaMalaON : true}
        } else {
          return null
        }
      } else if (otvaranjeTipa === 'okretno'){
        if (sirina > 1400){
          return {sirinaVelikaONO: true}
        } else if (sirina < 250){
          return {sirinaMalaNO: true}
        } else {
          return null
        }
      } else if (otvaranjeTipa === 'nagibno'){
        if (sirina > 2400){
          return {sirinaVelikaN: true}
        } else if(sirina < 250){
          return {sirinaMalaNO: true}
        } else {
          return null
        }
      }
      return null
    }
  }
  validateVisina(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const otvaranjeTipa = control.get('nacinOtvaranja')?.value;
      const meraTipa = control.get('tipMere')?.value;
      let visina = 0
      const centralnaRingla = control.get('centralnaRingla')?.value;
      const sigKip = control.get('sigurnosniKip')?.value
      if(meraTipa === 'falcnaMera'){
         visina = control.get('visina')?.value;
      } else {
         visina = control.get('visina')?.value - 118;
      }

      if (!visina){
        return null
      }
      if (otvaranjeTipa === 'kombinovano'){
        if (visina > 2400){
          return {visinaVelika: true}
        }
        if(centralnaRingla === false && sigKip === false){
          return visina < 250 ? {visinaMala: true} : null
        } else if (centralnaRingla === true && sigKip === false){
          return visina < 450 ? {visinaMalaCentRing: true} : null
        } else if(centralnaRingla === true && sigKip === true){
          return visina < 380 ? {visinaMalaCentRingSigKip: true}: null
        } else if(centralnaRingla === false && sigKip === true){
          return visina < 330 ? {visinaMalaSigKip: true} : null
        }
      } else if(otvaranjeTipa === 'okretno'){
        if (visina > 2400){
          return {visinaVelika: true}
        } else if (visina < 180){
          return {visinaMalaOkretna: true}
        } else {
          return null
        }   
      } else if (otvaranjeTipa === 'nagibno'){
        if (visina < 300){
          return {visinaMalaNagibna: true}
        } else if (visina > 1200) {
          return {visinaVelikaNagibna: true}
        } else {
          return null
        }
      }

      return null
    }
  }
  validateOdnosSirineIVisine(): ValidatorFn{
    return (control: AbstractControl) : ValidationErrors | null => {

      const meraTipa = control.get('tipMere')?.value;
      const otvaranjeTipa = control.get('nacinOtvaranja')?.value;
      const krilaBroj = control.get('borjKrila')?.value;
      const privSirina = control.get('sirina')?.value;
      const privVisina = control.get('visina')?.value;
      let sirina = 0;
      let visina = 0;

      if(meraTipa === 'falcnaMera'){
        sirina = privSirina;
        visina = privVisina;
      } else {
        visina = privVisina - 118
        if (krilaBroj === 1){
          sirina = privSirina - 118
        } else if(krilaBroj === 2){
          sirina = (privSirina / 2) - 84
        } else {
          sirina = (privSirina / 3) - 79
        }
      }
      if(!sirina || !visina){
        return null;
      }
      if (otvaranjeTipa === 'kombinovano'){
        return sirina < 410 && visina < 320 ?  {nemogucOdnosSirineIVisine : true} : null
      }      

      return null
    }
  }

  constructor() { }
}
