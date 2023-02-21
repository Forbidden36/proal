import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // stockLength = 6000
  // requiredLengths = [800, 800, 2300, 2300, 1200, 1200]

  //  cuttingOptimization(stockLength: number, requiredLengths: number[]) {
  //   // sort the required lengths in descending order
  //   requiredLengths.sort(function(a, b) {return b - a;});
    
  //   // initialize variables
  //   let usedStockLengths = 0;
  //   let totalCuts = 0;
  //   let remainingStock = stockLength;
    
  //   // loop through the required lengths
  //   for (let i = 0; i < requiredLengths.length; i++) {
  //     const length = requiredLengths[i];
  //     // if the required length is larger than the remaining stock, make a cut
  //     if (length > remainingStock) {
  //       totalCuts++;
  //       usedStockLengths += stockLength;
  //       remainingStock = stockLength - length;
  //     }
  //     // otherwise, subtract the required length from the remaining stock
  //     else {
  //       remainingStock -= length;
  //     }
  //   }
    
  //   // add any remaining stock to the used stock lengths
  //   usedStockLengths += remainingStock;
  //   console.log(usedStockLengths);
  //   console.log(totalCuts)
  //   // return [usedStockLengths, totalCuts];
  // }
  
  constructor() { }

  ngOnInit(): void {
    // this.cuttingOptimization(this.stockLength, this.requiredLengths)
  }

}
