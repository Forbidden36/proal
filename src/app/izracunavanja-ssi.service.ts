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
    } else if (b > 2100 && b < 2501){
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

  izaberiPrihvatnike(v: number, h: number){
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

  prilagodiNiz(e:number){
    let obj = e;

    const arr = Array.from(
      Object.entries(obj).flatMap(([key, value]) => Array.from({length: value}, () => Number(key) as number))
    );
    console.log(arr)
  }
/*
  cuttingOptimization(barLength: number, pieceLengths: number[], key:string) {

    // Sort the piece lengths in descending order
    pieceLengths.sort((a: any, b: any) => b - a);
  
    // Initialize an empty array to store the cuts for each bar
    const barCuts: { remainingLength: number, cuts: { start: number, length: number }[] }[] = [];
  
    // Loop through each piece and try to fit it onto a bar
    for (let i = 0; i < pieceLengths.length; i++) {
      const pieceLength = pieceLengths[i];
  
      // Adjust the piece length by adding the cutting saw length
      const adjustedLength = pieceLength + 6;
  
      // Try to fit the adjusted piece onto an existing bar
      let barIndex = -1;
      for (let j = 0; j < barCuts.length; j++) {
        const currentBarLength = barCuts[j].remainingLength;
        if (currentBarLength >= adjustedLength) {
          barIndex = j;
          break;
        }
      }
  
      // If the piece cannot be added to an existing bar, create a new bar
      if (barIndex === -1) {
        barCuts.push({ remainingLength: barLength - adjustedLength, cuts: [{ start: 0, length: adjustedLength }] });
      } else {
        // Add the piece to the existing bar
        const barCutsWithPiece = barCuts[barIndex];
        const start = barLength - barCutsWithPiece.remainingLength;
        barCutsWithPiece.cuts.push({ start, length: adjustedLength });
        barCutsWithPiece.remainingLength -= adjustedLength;
      }
    }
  
    // Log the number of bars needed
    console.log(`Number of bars ${key} needed: ${barCuts.length}`);
  
    // Loop through each bar and log the cutting report OVO CEMO KORISTITI ZA PRIKAZ KROJNE LISTE
    // for (let i = 0; i < barCuts.length; i++) {
    //   const barCut = barCuts[i];
    //   console.log(`Bar ${i + 1}:`);
    //   console.log(`Remaining length: ${barCut.remainingLength}`);
    //   console.log("Cuts: ");
    //   for (let j = 0; j < barCut.cuts.length; j++) {
    //     const cut = barCut.cuts[j];
    //     console.log(`- Start: ${cut.start}, Length: ${cut.length}`);
    //   }
    // }
  
    // Return the number of bars needed and the cuts for each bar
    return { barsNeeded: barCuts.length, barCuts: barCuts };
  }
  

*/

  constructor() { }
}
