import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  barLength = 6000
  //pieceLength = [2100, 2100,3000, 2000, 2000,1200,1600,850,750, 3100,2600]
  pieceLength = [2100, 2100,3000, 2000, 2000,1200,1600,850,750, 3100,2600]
  pieceCount = 1

 
  
  cuttingOptimization(barLength: number, pieceLengths: number[]) {
    // Sort the piece lengths in descending order
    pieceLengths.sort((a, b) => b - a);
  
    // Initialize an empty array to store the cuts for each bar
    const barCuts: {remainingLength: number, cuts: {start: number, length: number}[]}[] = [];
  
    // Loop through each piece and try to fit it onto a bar
    for (let i = 0; i < pieceLengths.length; i++) {
      const pieceLength = pieceLengths[i];
  
      // Try to fit the piece onto an existing bar
      let barIndex = -1;
      for (let j = 0; j < barCuts.length; j++) {
        const currentBarLength = barCuts[j].remainingLength;
        if (currentBarLength >= pieceLength) {
          barIndex = j;
          break;
        }
      }
  
      // If the piece cannot be added to an existing bar, create a new bar
      if (barIndex === -1) {
        barCuts.push({remainingLength: barLength - pieceLength, cuts: [{start: 0, length: pieceLength}]});
      } else {
        // Add the piece to the existing bar
        const barCutsWithPiece = barCuts[barIndex];
        barCutsWithPiece.cuts.push({start: barLength - barCutsWithPiece.remainingLength, length: pieceLength});
        barCutsWithPiece.remainingLength -= pieceLength;
      }
    }
  
    // Log the number of bars needed
    console.log(`Number of bars needed: ${barCuts.length}`);
  
    // Loop through each bar and log the cutting report
    for (let i = 0; i < barCuts.length; i++) {
      const barCut = barCuts[i];
      console.log(`Bar ${i + 1}:`);
      console.log(`Remaining length: ${barCut.remainingLength}`);
      console.log("Cuts: ");
      for (let j = 0; j < barCut.cuts.length; j++) {
        const cut = barCut.cuts[j];
        console.log(`- Start: ${cut.start}, Length: ${cut.length}`);
      }
    }
  
    // Return the number of bars needed and the cuts for each bar
    return {barsNeeded: barCuts.length, barCuts: barCuts};
  }

  
  izracunaj(){
    this.cuttingOptimization(this.barLength, this.pieceLength)
  }
  

 
  constructor() { }

  ngOnInit(): void {

  }

}
