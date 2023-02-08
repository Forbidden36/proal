import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Prozor } from '../prozor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BazaService } from '../baza.service';
import { IzracunavanjaService } from '../izracunavanja.service';
import { IzracunavanjaAlService } from '../izracunavanja-al.service';
import { ValidationService } from '../validation.service';

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
  temp: any
  konacanOkovAL: any =[]
  today: number = Date.now()
  cena:any = 'Izracunaj cenu'
  sporniBr: number = 0

  pozicijaAL = new UntypedFormGroup ({
    nacinOtvaranja: new UntypedFormControl('kombinovano'),
    tipMere: new UntypedFormControl('falcnaMera'),
    tipStoka: new UntypedFormControl({value:36, disabled:true}, [Validators.required]),
    sirina: new UntypedFormControl('', [Validators.required]),
    visina: new UntypedFormControl('', Validators.required),
    brojKrila: new UntypedFormControl(1,  {nonNullable: true}),
    otvaranje: new UntypedFormControl ('levo', {nonNullable:true}),
    kolicina: new UntypedFormControl('', [Validators.required, Validators.min(1)]),
    boja: new UntypedFormControl('belo', {nonNullable:true}),
    sigurnosniKip: new UntypedFormControl(false, {nonNullable: true}),
    centralnaRingla: new UntypedFormControl(false, {nonNullable: true}),
    sigurnosnaRucica: new UntypedFormControl(false, {nonNullable: true})
  },{validators: [this.serviceValidacije.ValidateSirina(), this.serviceValidacije.validateVisina(), this.serviceValidacije.validateOdnosSirineIVisine()]})

  get tipMere() {return this.pozicijaAL.get('tipMere')}
  get sirina() { return this.pozicijaAL.get('sirina'); }
  get visina() { return this.pozicijaAL.get('visina'); }
  get brojKrila() { return this.pozicijaAL.get('brojKrila'); }
  get otvaranje() { return this.pozicijaAL.get('otvaranje'); }
  get kolicina() { return this.pozicijaAL.get('kolicina'); }

  onSubmit(){
    let falcnaVisinaAL = 0;
    let falcnaSirinaAL = 0;
    if (this.pozicijaAL.value.tipMere === 'nazivnaMera'){
      falcnaVisinaAL = this.pozicijaAL.value.visina - (2*this.pozicijaAL.value.tipStoka)-28;
      if (this.pozicijaAL.value.brojKrila === 1){
        falcnaSirinaAL = this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka) - 28;
      } else if (this.pozicijaAL.value.brojKrila === 2){
        falcnaSirinaAL = Math.round((this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka))/2 - 37)
      } else if (this.pozicijaAL.value.brojKrila === 3){
        falcnaSirinaAL = Math.round((this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka))/3 - 47)
      } else {
        falcnaSirinaAL = this.pozicijaAL.value.sirina - (2*this.pozicijaAL.value.tipStoka) - 28;
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
          unesenaSirina: this.pozicijaAL.value.sirina,
          unesenaVisina: this.pozicijaAL.value.visina,
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
          unesenaSirina: this.pozicijaAL.value.sirina,
          unesenaVisina: this.pozicijaAL.value.visina,
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
          unesenaSirina: this.pozicijaAL.value.sirina,
          unesenaVisina: this.pozicijaAL.value.visina,
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
          unesenaSirina: this.pozicijaAL.value.sirina,
          unesenaVisina: this.pozicijaAL.value.visina,
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
          unesenaSirina: this.pozicijaAL.value.sirina,
          unesenaVisina: this.pozicijaAL.value.visina,
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
        //on submit clears mostly variable fields
        this.pozicijaAL.controls['sirina'].reset()
        this.pozicijaAL.controls['visina'].reset()
        this.pozicijaAL.controls['kolicina'].reset()
  }
  izracunajAL(){
    this.obrisiListuAL()
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
                            ...this.serviceRacunanjaAL.izaberiRingle(this.pozicijeAL[i].visina, this.pozicijeAL[i].centralnaRingla), 
                            ...this.serviceRacunanjaAL.izaberiKipAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].visina, this.pozicijeAL[i].sigurnosniKip, this.pozicijeAL[i].otvaranje, this.pozicijeAL[i].brojKrila),
                            ...this.serviceRacunanjaAL.izborMaskicaAL(this.pozicijeAL[i].brojKrila, this.pozicijeAL[i].ptvaranje, this.pozicijeAL[i].boja),
                            ...this.serviceRacunanjaAL.izaberiRucicuAL(this.pozicijeAL[i].sigurnosnaRucica, this.pozicijeAL[i].boja)               
          }
          if (this.okovAL[i].hasOwnProperty('prihvGetribe')){
            prihvGetribe = this.okovAL[i].prihvGetribe
            delete this.okovAL[i].prihvGetribe
          } else prihvGetribe = 0
  
          if (this.okovAL[i].hasOwnProperty('prihvMakaze')){
            prihvMakaze = this.okovAL[i].prihvMakaze
            delete this.okovAL[i].prihvMakaze
          } else prihvMakaze = 0
  
          if (this.okovAL[i].hasOwnProperty('prihvZadnjeg')){
            prihvZadnjeg = this.okovAL[i].prihvZadnjeg
            delete this.okovAL[i].prihvZadnjeg
          } else prihvZadnjeg = 0
  
          if (this.okovAL[i].hasOwnProperty('prihvSig')){
            prihvatnikSigurnosnog = this.okovAL[i].prihvSig
            delete this.okovAL[i].prihvSig
          } else prihvatnikSigurnosnog = 0
  
          if (this.okovAL[i].hasOwnProperty('prihUgaonika')){
            prihvatnikUgaonika = this.okovAL[i].prihUgaonika;
            delete this.okovAL[i].prihUgaonika
          } else prihvatnikUgaonika = 0
  
          if (prihvatnikSigurnosnog + prihvZadnjeg + prihvMakaze + prihvatnikUgaonika == 0){
          } else 
          this.maliPrihvatnik = {'1097952': prihvMakaze + 
          prihvZadnjeg + prihvatnikSigurnosnog + prihvatnikUgaonika}
  
          if (prihvGetribe == 0 || this.pozicijeAL[i].centralnaRingla === true){
          }else this.velikiPrihvatnik = {'1083207': prihvGetribe}
          
  
          this.okovAL[i] = {...this.okovAL[i], ...this.maliPrihvatnik, ...this.velikiPrihvatnik} 
          if (this.pozicijeAL[i].visina > 1000){
            this.okovAL[i]= {...this.okovAL[i], ...{1083296:1, 1097954:1}}
            }
        }
      } //okretni
        if(this.pozicijeAL[i].nacinOtvaranja == 'okretno'){
          if(this.pozicijeAL[i].brojKrila == 1){
            this.okovAL[i] = {...this.serviceRacunanjaAL.zaJednokrilniOkretniAL(this.pozicijeAL[i].visina, this.pozicijeAL[i].otvaranje),
                              ...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicijeAL[i].visina),
                              ...this.serviceRacunanjaAL.izaberiMaskeOkretnogAL(this.pozicijeAL[i].visina, this.pozicijeAL[i].boja, this.pozicijeAL[i].brojKrila, this.pozicijeAL[i].otvaranje),
                              ...this.serviceRacunanjaAL.izaberiRucicuAL(this.pozicijeAL[i].sigurnosnaRucica, this.pozicijeAL[i].boja)
                            }
              if(this.okovAL[i].hasOwnProperty('prihvGetribe')){
                prihvGetribe = this.okovAL[i].prihvGetribe
                delete this.okovAL[i].prihvGetribe
              } else prihvGetribe = 0

              this.maliPrihvatnik = {1097952: prihvGetribe}

              this.okovAL[i] = {...this.okovAL[i], ...this.maliPrihvatnik}
          } else if (this.pozicijeAL[i].brojKrila == 2){
              this.okovAL[i] = {...this.serviceRacunanjaAL.zaDvokrilniOkretni(this.pozicijeAL[i].visina),
                                ...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicijeAL[i].visina),
                                ...this.serviceRacunanjaAL.izaberiMaskeOkretnogAL(this.pozicijeAL[i].visina, this.pozicijeAL[i].boja, this.pozicijeAL[i].brojKrila, this.pozicijeAL[i].otvaranje),
                                ...this.serviceRacunanjaAL.izaberiRucicuAL(this.pozicijeAL[i].sigurnosnaRucica, this.pozicijeAL[i].boja)
                              }
              if(this.okovAL[i].hasOwnProperty('prihvGetribe')){
                prihvGetribe = this.okovAL[i].prihvGetribe
                delete this.okovAL[i].prihvGetribe
              } else prihvGetribe = 0

                this.velikiPrihvatnik = {1083207: prihvGetribe}
                this.okovAL[i] = {...this.okovAL[i], ...this.velikiPrihvatnik}
          }
        } //Nagibno
          if (this.pozicijeAL[i].nacinOtvaranja == 'nagibno'){
              this.okovAL[i] = {...this.serviceRacunanjaAL.zaNagibnoAL(this.pozicijeAL[i].sirina, this.pozicijeAL[i].boja),
                                ...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicijeAL[i].sirina),
                                ...this.serviceRacunanjaAL.izaberiRucicuAL(this.pozicijeAL[i].sigurnosnaRucica, this.pozicijeAL[i].boja)
                              }
              if(this.okovAL[i].hasOwnProperty('prihvGetribe')){
                prihvGetribe = this.okovAL[i].prihvGetribe
                delete this.okovAL[i].prihvGetribe
              } else prihvGetribe = 0

              this.maliPrihvatnik = {1097952: prihvGetribe}
              this.okovAL[i] = {...this.okovAL[i], ...this.maliPrihvatnik}
          }

      for (let y  in this.okovAL[i]){
        if (typeof this.okovAL[i][y] == 'number') {      
          this.okovAL[i][y] *= this.pozicijeAL[i].kolicina;
        }}
    } 
    this.sumArray(this.okovAL)
  }
  sumArray (arr: any) {
    let res: any = {}
    for(let i = 0; i < arr.length; i++){
       Object.keys(arr[i]).forEach(key => {
          res[key] = (res[key] || 0) + arr[i][key];
       });
    };
    for(let key in res){
      this.temp = this.dataService.JOVAN.find(o => o.id == key)
        if(typeof this.temp === 'undefined'){
          console.log(key)
        } else {
          this.temp.kolicina=res[key]
          this.konacanOkovAL.push(this.temp)
        }
    }
  }
  izracunajStampajAL(){
    this.izracunajAL()
    setTimeout(window.print)
  }
  obrisiListuAL(){
    this.okovAL=[]
    this.konacanOkovAL=[]
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
    if(this.kakoSeOtvara == 'kombinovano'){
      this.partialClear()
      this.partialEnabling()
    } if (this.kakoSeOtvara == 'okretno'){
      this.partialClear()
      this.partialEnabling()
      this.pozicijaAL.controls['sigurnosniKip'].disable();
      this.pozicijaAL.controls['centralnaRingla'].disable();
    } if (this.kakoSeOtvara == 'nagibno'){
      this.partialClear()
      this.pozicijaAL.controls['brojKrila'].disable();
      this.pozicijaAL.controls['otvaranje'].disable();
      this.pozicijaAL.controls['sigurnosniKip'].disable();
      this.pozicijaAL.controls['centralnaRingla'].disable();
    }
  }
  partialEnabling(){
    this.pozicijaAL.controls['brojKrila'].enable();
    this.pozicijaAL.controls['otvaranje'].enable();
    this.pozicijaAL.controls['sigurnosniKip'].enable();
    this.pozicijaAL.controls['centralnaRingla'].enable();
  }
  tipMereRadio(e: any){
    this.tipUneseneMere = e.target.value
    if (this.tipUneseneMere === 'nazivnaMera'){
      this.pozicijaAL.controls['tipStoka'].enable()
    } else {
      this.pozicijaAL.controls['tipStoka'].disable()
    }
  }
  trackByFn(index: any){
    return index
  }
  deleteRow(i:number){
    this.cena = 'Izracunaj cenu'
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
  izracunajCenu(){
    let tempCena = 0
    this.izracunajAL()
    if (this.konacanOkovAL.length === 0){
      console.log('konacanOkov list is empty')
    }else {
      for (let i = 0; i < this.konacanOkovAL.length; i++){
        if (this.konacanOkovAL[i].kolicina === undefined){
          console.log(this.konacanOkovAL[i].kolicina)
        } else {
          tempCena += this.konacanOkovAL[i].kolicina * this.konacanOkovAL[i].cena;
          tempCena = Math.round(tempCena * 100)/100
        }
      }
      this.cena = tempCena + " eur"
    }
  }
  dodajElement = new UntypedFormGroup({
    element: new FormControl('', [Validators.required, this.validateUnos()]),
    kolicina: new FormControl('', [Validators.required, Validators.min(1)])
  })
  validateUnos(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const item = control.value
      if(!item){
        return null;
      }
      if (this.konacanOkovAL.length > 0){
        for (let i = 0; i<this.konacanOkovAL.length; i++){
          if (this.konacanOkovAL[i].id == item){
            this.sporniBr = i+1
            return {itemPostoji: true}
          }
        } 
      }
        return null
    }
  }
  dodajItemSubmit(){
      let itemNO: any
      itemNO = this.dataService.JOVAN.find(o=>o.id == this.dodajElement.value.element)
      itemNO.kolicina = this.dodajElement.value.kolicina;
  
            this.konacanOkovAL.push(itemNO)
            this.dodajElement.reset()

  }
  resetujDodajFormu (){
    this.dodajElement.reset()
  }
  deleteItem(i: number){
    this.konacanOkovAL.splice(i, 1)
  }
  openFullscreen(content: any) {
    this.izracunajAL()
    this.modalService.open(content, { fullscreen: true });
  }
  stampajIzmenjenOkov(){
    setTimeout(window.print, 200)
  }
  constructor(public dataService: BazaService, private serviceRacunanja: IzracunavanjaService,
     private serviceRacunanjaAL: IzracunavanjaAlService, private modalService: NgbModal, private serviceValidacije: ValidationService) { }

  ngOnInit(): void {

  }

}
