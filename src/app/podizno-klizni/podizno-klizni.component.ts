import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-podizno-klizni',
  templateUrl: './podizno-klizni.component.html',
  styleUrls: ['./podizno-klizni.component.css']
})
export class PodiznoKlizniComponent implements OnInit {
  slika:string = ''
  JednosinskiSaJednimKrilom: string = "assets/images/JednosinskiSaJednimKrilomProba.png";
  JednosinskiSaDvaKrila: string = "assets/images/JednaSinaDvaKrilaProba.png";
  constructor(private modalService: NgbModal) { }

  openXl(e: any) {
		this.modalService.open(e, { size: 'xl' });
	}
  srediSliku(e:string){
    this.slika = e
  }

  ngOnInit(): void {
  }

}
