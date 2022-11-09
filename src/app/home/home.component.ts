import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  openSm(content: any) {
    this.modalService.open(content, { size: 'sm' });
  }
  closeTab(){
    window.close()
  }

  ngOnInit(): void {}

}
