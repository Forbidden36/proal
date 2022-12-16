import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Prozor } from '../prozor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BazaService } from '../baza.service';
import { IzracunavanjaService } from '../izracunavanja.service';
import { IzracunavanjaAlService } from '../izracunavanja-al.service';

@Component({
  selector: 'app-al',
  templateUrl: './al.component.html',
  styleUrls: ['./al.component.css']
})
export class ALComponent implements OnInit {
  kakoSeOtvara = 'kombinovano'
  tipUneseneMere = 'falcnaMera'
  posAL!: Prozor;
  pozicijeAL: any[] = []
  okovAL: any = []
  maliPrihvatnik = {}
  velikiPrihvatnik ={}
  public isCollapsed = false;
  collapseButtonName = 'Sakrij'

  pozicijaAL = new UntypedFormGroup ({
    nacinOtvaranja: new UntypedFormControl('kombinovano'),
    tipMere: new UntypedFormControl('falcnaMera'),
    tipStoka: new UntypedFormControl(36, [Validators.required]),
    sirina: new UntypedFormControl('', [Validators.required]),
    visina: new UntypedFormControl('', Validators.required),
    brojKrila: new UntypedFormControl(1,  {nonNullable: true}),
    otvaranje: new UntypedFormControl ('levo', {nonNullable:true}),
    kolicina: new UntypedFormControl('', Validators.required),
    boja: new UntypedFormControl('belo', {nonNullable:true}),
    sigurnosniKip: new UntypedFormControl(false, {nonNullable: true}),
    centralnaRingla: new UntypedFormControl(false, {nonNullable: true}),
    sigurnosnaRucica: new UntypedFormControl(false, {nonNullable: true})
  })

  onSubmit(){
    console.log(this.pozicijaAL.value)
    let falcnaVisinaAL = 0;
    let falcnaSirinaAL = 0;
    if (this.pozicijaAL.value.tipMere === 'nazivnaMera'){
      falcnaVisinaAL = this.pozicijaAL.value.visina - (2*this.pozicijaAL.value.tipStoka)-28;
      if (this.pozicijaAL.value.brojKrila === 1){
        falcnaSirinaAL = this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka) - 28;
      } else if (this.pozicijaAL.value.brojKrila === 2){
        falcnaSirinaAL = Math.round((this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka))/2 - 37)
      } else {
        falcnaSirinaAL = Math.round((this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka))/3 - 47)
      }
    }else {
      falcnaSirinaAL = this.pozicijaAL.value.sirina;
      falcnaVisinaAL = this.pozicijaAL.value.visina;
    }

    if (this.pozicijaAL.value.brojKrila == 3) {
      if(this.pozicijaAL.value.otvaranje == 'levo'){
        this.posAL = {
          nacinOtvaranja: this.pozicijaAL.value.nacinOtvaranja,
          sirina: falcnaSirinaAL,
          visina: falcnaVisinaAL,
          brojKrila: 1,
          otvaranje: 'levo',
          kolicina: this.pozicijaAL.value.kolicina,  
          boja: this.pozicijaAL.value.boja,
          sigurnosniKip: this.pozicijaAL.value.sigurnosniKip,
          centralnaRingla: this.pozicijaAL.value.centralnaRingla,
          sigurnosnaRucica: this.pozicijaAL.value.sigurnosnaRucica,
          opis: "Jednokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicijeAL.push(this.posAL)

        this.posAL = {
          nacinOtvaranja: this.pozicijaAL.value.nacinOtvaranja,
          sirina: falcnaSirinaAL,
          visina: falcnaVisinaAL,
          brojKrila: 2,
          otvaranje: 'desno',
          kolicina: this.pozicijaAL.value.kolicina,  
          boja: this.pozicijaAL.value.boja,
          sigurnosniKip: this.pozicijaAL.value.sigurnosniKip,
          centralnaRingla: this.pozicijaAL.value.centralnaRingla,
          sigurnosnaRucica: this.pozicijaAL.value.sigurnosnaRucica,
          opis: "Dvokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicijeAL.push(this.posAL)
      } 
      // drugi slucaj trokrilnog
      if(this.pozicijaAL.value.otvaranje == 'desno'){
        this.posAL = {
          nacinOtvaranja: this.pozicijaAL.value.nacinOtvaranja,
          sirina: falcnaSirinaAL,
          visina: falcnaVisinaAL,
          brojKrila: 1,
          otvaranje: 'desno',
          kolicina: this.pozicijaAL.value.kolicina,  
          boja: this.pozicijaAL.value.boja,
          sigurnosniKip: this.pozicijaAL.value.sigurnosniKip,
          centralnaRingla: this.pozicijaAL.value.centralnaRingla,
          sigurnosnaRucica: this.pozicijaAL.value.sigurnosnaRucica,
          opis: "Jednokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicijeAL.push(this.posAL)

        this.posAL = {
          nacinOtvaranja: this.pozicijaAL.value.nacinOtvaranja,
          sirina: falcnaSirinaAL,
          visina: falcnaVisinaAL,
          brojKrila: 2,
          otvaranje: 'levo',
          kolicina: this.pozicijaAL.value.kolicina,  
          boja: this.pozicijaAL.value.boja,
          sigurnosniKip: this.pozicijaAL.value.sigurnosniKip,
          centralnaRingla: this.pozicijaAL.value.centralnaRingla,
          sigurnosnaRucica: this.pozicijaAL.value.sigurnosnaRucica,
          opis: "Dvokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicijeAL.push(this.posAL)
      }  
    } else {
    this.posAL = {
          nacinOtvaranja: this.pozicijaAL.value.nacinOtvaranja,
          sirina: falcnaSirinaAL,
          visina: falcnaVisinaAL,
          brojKrila: this.pozicijaAL.value.brojKrila,
          otvaranje: this.pozicijaAL.value.otvaranje,
          kolicina: this.pozicijaAL.value.kolicina,  
          boja: this.pozicijaAL.value.boja,
          sigurnosniKip: this.pozicijaAL.value.sigurnosniKip,
          centralnaRingla: this.pozicijaAL.value.centralnaRingla,
          sigurnosnaRucica: this.pozicijaAL.value.sigurnosnaRucica
        }
        // console.log(this.pos)
        this.pozicijeAL.push(this.posAL)
        
      }
      console.log(this.pozicijeAL)
        //on submit clears mostly variable fields
        this.pozicijaAL.controls['sirina'].reset()
        this.pozicijaAL.controls['visina'].reset()
        this.pozicijaAL.controls['kolicina'].reset()
  }
  izracunajAL(){
    let prihvGetribe = 0
    let prihvMakaze = 0;
    let prihvZadnjeg = 0;
    let prihvatnikSigurnosnog = 0;
    let prihvatnikUgaonika = 0;
    for (let i=0; i<this.pozicijeAL.length; i++){
      if(this.pozicijeAL[i].nacinOtvaranja == "kombinovano"){
        if(this.pozicijeAL[i].brojKrila == 1){
          this.okovAL[i]={...this.serviceRacunanjaAL.jednokrilni,
                          ...this.serviceRacunanja.izaberiGetribu(this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip),
                          ...this.serviceRacunanjaAL.izaberiMakazuAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].otvaranje),
                          ...this.serviceRacunanja.izaberiUgaonik(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip),
                          ...this.serviceRacunanja.izaberiZadnjiZatv(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip),
                          ...this.serviceRacunanjaAL.izaberiKipAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip, this.pozicijeAL[i].otvaranje, this.pozicijeAL[i].brojKrila),
                          ...this.serviceRacunanjaAL.izborMaskicaAL(this.pozicijeAL[i].brojKrila, this.pozicijeAL[i].otvaranje, this.pozicijeAL[i].boja),
                          ...this.serviceRacunanjaAL.izaberiRucicuAL(this.pozicijeAL[i].sigurnosnaRucica, this.pozicijeAL[i].boja)               
          }
          if (this.okovAL[i].hasOwnProperty('prihvGetribe')){
            prihvGetribe = this.okovAL[i].prihvGetribe;
            delete this.okovAL[i].prihvGetribe;
          } else prihvGetribe = 0;

          if (this.okovAL[i].hasOwnProperty('prihvMakaze')){
            prihvMakaze = this.okovAL[i].prihvMakaze;
            delete this.okovAL[i].prihvMakaze;
          } else prihvMakaze = 0;

          if (this.okovAL[i].hasOwnProperty('prihvZadnjeg')){
            prihvZadnjeg = this.okovAL[i].prihvZadnjeg;
            delete this.okovAL[i].prihvZadnjeg;
          } else prihvZadnjeg = 0;

          if (this.okovAL[i].hasOwnProperty('prihvSig')){
            prihvatnikSigurnosnog = this.okovAL[i].prihvSig;
            delete this.okovAL[i].prihvSig;
          } else prihvatnikSigurnosnog = 0;

          this.maliPrihvatnik = {1097952: prihvGetribe + prihvMakaze + prihvZadnjeg + prihvatnikSigurnosnog + 1};

          this.okovAL[i] = {...this.okovAL[i], ...this.maliPrihvatnik}
        } else {
          this.okovAL[i] = {...this.serviceRacunanjaAL.dvokrilni,
                            ...this.serviceRacunanja.izaberiGetribu(this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip),
                            ...this.serviceRacunanjaAL.izaberiMakazuDvokrilnogAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].otvaranje),
                            ...this.serviceRacunanja.izaberiZadnjiZatv(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip),
                            ...this.serviceRacunanjaAL.izaberiUgaonikDvokrilnogAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip, this.pozicijeAL[i].centralnaRingla),
                            ...this.serviceRacunanja.izaberiRingle(this.pozicijeAL[i].visina, this.pozicijeAL[i].centralnaRingla), 
          }
        }
        console.log(this.okovAL)
      }
    }
  }
  partialClear(){
    this.pozicijaAL.controls['sirina'].reset()
    this.pozicijaAL.controls['visina'].reset()
    this.pozicijaAL.controls['kolicina'].reset()
    this.pozicijaAL.controls['brojKrila'].reset()
    this.pozicijaAL.controls['otvaranje'].reset()
    this.pozicijaAL.controls['sigurnosniKip'].reset()
    this.pozicijaAL.controls['centralnaRingla'].reset()
  }
  otvRadio(e: any){
    this.kakoSeOtvara = e.target.value
    // console.log(this.kakoSeOtvara)
    if(this.kakoSeOtvara == 'kombinovano'){
      this.partialClear()
      this.pozicijaAL.enable()
    } if (this.kakoSeOtvara == 'okretno'){
      this.partialClear()
      this.pozicijaAL.enable()
      this.pozicijaAL.controls['sigurnosniKip'].disable();
      this.pozicijaAL.controls['centralnaRingla'].disable();
    } if (this.kakoSeOtvara == 'nagibno'){
      this.partialClear()
      this.pozicijaAL.enable()
      this.pozicijaAL.controls['brojKrila'].disable();
      this.pozicijaAL.controls['otvaranje'].disable();
      this.pozicijaAL.controls['sigurnosniKip'].disable();
      this.pozicijaAL.controls['centralnaRingla'].disable();
    }
  }
  tipMereRadio(e: any){
    this.tipUneseneMere = e.target.value
    console.log(this.tipUneseneMere)
    if (this.tipUneseneMere === 'nazivnaMera'){
      this.pozicijaAL.enable()
    } else {
      this.pozicijaAL.controls['tipStoka'].disable()
      
    }
  }
  trackByFn(index: any){
    return index
  }
  deleteRow(i:number){
    // this.cena = 'Izracunaj cenu'
    this.pozicijeAL.splice(i, 1)
  }
  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }
  changeColBtnName(){
    if(this.collapseButtonName === 'Sakrij'){
      this.collapseButtonName = 'Prikazi'
    } else {
      this.collapseButtonName = 'Sakrij'
    }
  }
  constructor(public dataService: BazaService, private serviceRacunanja: IzracunavanjaService,
     private serviceRacunanjaAL: IzracunavanjaAlService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pozicijaAL.controls['tipStoka'].disable()
  }

}
