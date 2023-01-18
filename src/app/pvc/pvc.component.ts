import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BazaService } from '../baza.service';
import { IzracunavanjaService } from '../izracunavanja.service';
import { Prozor } from '../prozor';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-pvc',
  templateUrl: './pvc.component.html',
  styleUrls: ['./pvc.component.css']
})
export class PVCComponent implements OnInit {
  pos!: Prozor;
  pozicije: any[] = []
  okov: any = []
  prihvGetribe = 0
  prihvMakaze = 0
  prihvZadnjeg = 0
  maliPrihvatnik = {}
  velikiPrihvatnik = {}
  konacanOkov:any = []
  kakoSeOtvara = 'kombinovano'
  nalogZaOdvajanje = false
  temp: any
  today: number = Date.now()
  cena:any = 'Izracunaj cenu'
  public isCollapsed = false;
  collapseButtonName = 'Sakrij'

  pozicija = new UntypedFormGroup ({
    nacinOtvaranja: new UntypedFormControl('kombinovano'),
    tipMere: new UntypedFormControl('falcnaMera'),
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

  get tipMere() {return this.pozicija.get('tipMere')}
  get sirina() { return this.pozicija.get('sirina'); }
  get visina() { return this.pozicija.get('visina'); }
  get brojKrila() { return this.pozicija.get('brojKrila'); }
  get otvaranje() { return this.pozicija.get('otvaranje'); }
  get kolicina() { return this.pozicija.get('kolicina'); }
  

  onSubmit(){
    this.cena = 'Izracunaj cenu'
    let falcnaSirina: number = 0
    let falcnaVisina: number = 0
    if (this.pozicija.value.tipMere === 'nazivnaMera'){
      falcnaVisina = this.pozicija.value.visina -114
      if(this.pozicija.value.brojKrila == 1){
        falcnaSirina = this.pozicija.value.sirina - 114
      } else if (this.pozicija.value.brojKrila == 2) {
        falcnaSirina = Math.round(this.pozicija.value.sirina / 2 - 80)
      } else if (this.pozicija.value.brojKrila == 3) {
        falcnaSirina = Math.round(this.pozicija.value.sirina / 3 -75) 
      } else {
        falcnaSirina = this.pozicija.value.sirina - 114
      }
    } else {
      falcnaSirina = this.pozicija.value.sirina
      falcnaVisina = this.pozicija.value.visina
    }
    if (this.pozicija.value.brojKrila == 3) {
      if(this.pozicija.value.otvaranje == 'levo'){
        this.pos = {
          nacinOtvaranja: this.pozicija.value.nacinOtvaranja,
          sirina: falcnaSirina,
          visina: falcnaVisina,
          unesenaSirina: this.pozicija.value.sirina,
          unesenaVisina: this.pozicija.value.visina,
          brojKrila: 1,
          otvaranje: 'levo',
          kolicina: this.pozicija.value.kolicina,  
          boja: this.pozicija.value.boja,
          sigurnosniKip: this.pozicija.value.sigurnosniKip,
          centralnaRingla: this.pozicija.value.centralnaRingla,
          sigurnosnaRucica: this.pozicija.value.sigurnosnaRucica,
          opis: "Jednokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicije.push(this.pos)

        this.pos = {
          nacinOtvaranja: this.pozicija.value.nacinOtvaranja,
          sirina: falcnaSirina,
          visina: falcnaVisina,
          unesenaSirina: this.pozicija.value.sirina,
          unesenaVisina: this.pozicija.value.visina,
          brojKrila: 2,
          otvaranje: 'desno',
          kolicina: this.pozicija.value.kolicina,  
          boja: this.pozicija.value.boja,
          sigurnosniKip: this.pozicija.value.sigurnosniKip,
          centralnaRingla: this.pozicija.value.centralnaRingla,
          sigurnosnaRucica: this.pozicija.value.sigurnosnaRucica,
          opis: "Dvokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicije.push(this.pos)
      } 
      // drugi slucaj trokrilnog
      if(this.pozicija.value.otvaranje == 'desno'){
        this.pos = {
          nacinOtvaranja: this.pozicija.value.nacinOtvaranja,
          sirina: falcnaSirina,
          visina: falcnaVisina,
          unesenaSirina: this.pozicija.value.sirina,
          unesenaVisina: this.pozicija.value.visina,
          brojKrila: 1,
          otvaranje: 'desno',
          kolicina: this.pozicija.value.kolicina,  
          boja: this.pozicija.value.boja,
          sigurnosniKip: this.pozicija.value.sigurnosniKip,
          centralnaRingla: this.pozicija.value.centralnaRingla,
          sigurnosnaRucica: this.pozicija.value.sigurnosnaRucica,
          opis: "Jednokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicije.push(this.pos)

        this.pos = {
          nacinOtvaranja: this.pozicija.value.nacinOtvaranja,
          sirina: falcnaSirina,
          visina: falcnaVisina,
          unesenaSirina: this.pozicija.value.sirina,
          unesenaVisina: this.pozicija.value.visina,
          brojKrila: 2,
          otvaranje: 'levo',
          kolicina: this.pozicija.value.kolicina,  
          boja: this.pozicija.value.boja,
          sigurnosniKip: this.pozicija.value.sigurnosniKip,
          centralnaRingla: this.pozicija.value.centralnaRingla,
          sigurnosnaRucica: this.pozicija.value.sigurnosnaRucica,
          opis: "Dvokrilni deo trokrilnog"
        }
        // console.log(this.pos)
        this.pozicije.push(this.pos)
      }  
    } else {
    this.pos = {
          nacinOtvaranja: this.pozicija.value.nacinOtvaranja,
          sirina: falcnaSirina,
          visina: falcnaVisina,
          unesenaSirina: this.pozicija.value.sirina,
          unesenaVisina: this.pozicija.value.visina,
          brojKrila: this.pozicija.value.brojKrila,
          otvaranje: this.pozicija.value.otvaranje,
          kolicina: this.pozicija.value.kolicina,  
          boja: this.pozicija.value.boja,
          sigurnosniKip: this.pozicija.value.sigurnosniKip,
          centralnaRingla: this.pozicija.value.centralnaRingla,
          sigurnosnaRucica: this.pozicija.value.sigurnosnaRucica
        }
        console.log(this.pos)
        this.pozicije.push(this.pos)
      }
        //on submit clears mostly variable fields
        this.pozicija.controls['sirina'].reset()
        this.pozicija.controls['visina'].reset()
        this.pozicija.controls['kolicina'].reset()
  }
  izracunaj(){
    // console.log(this.pozicije)
    this.obrisiListu()
    let prihvZadnjeg = 0;
    let prihvatnikSigurnosnog = 0;
    let prihvatnikUgaonika = 0;
    for (let i=0; i<this.pozicije.length; i++){
      if(this.pozicije[i].nacinOtvaranja == "kombinovano"){
      if(this.pozicije[i].brojKrila == 1){       
        this.okov[i]={...this.serviceRacunanja.jednokrilni, 
                      ...this.serviceRacunanja.izaberiGetribu(this.pozicije[i].visina, this.pozicije[i].sigurnosniKip),
                      ...this.serviceRacunanja.izaberiMakazu(this.pozicije[i].sirina, this.pozicije[i].otvaranje),
                      ...this.serviceRacunanja.izaberiUgaonik(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip),
                      ...this.serviceRacunanja.izaberiZadnjiZatv(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip),
                      ...this.serviceRacunanja.izaberiKip(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip, this.pozicije[i].otvaranje,this.pozicije[i].brojKrila),
                      ...this.serviceRacunanja.izborMaskica(this.pozicije[i].brojKrila, this.pozicije[i].boja, this.pozicije[i].sigurnosnaRucica)
                    }
      
        if (this.okov[i].hasOwnProperty('prihvGetribe')){
          this.prihvGetribe = this.okov[i].prihvGetribe
          delete this.okov[i].prihvGetribe
        } else this.prihvGetribe = 0

        if (this.okov[i].hasOwnProperty('prihvMakaze')){
          this.prihvMakaze = this.okov[i].prihvMakaze
          delete this.okov[i].prihvMakaze
        } else this.prihvMakaze = 0

        if (this.okov[i].hasOwnProperty('prihvZadnjeg')){
          prihvZadnjeg = this.okov[i].prihvZadnjeg
          delete this.okov[i].prihvZadnjeg
        } else prihvZadnjeg = 0

        if (this.okov[i].hasOwnProperty('prihvSig')){
          prihvatnikSigurnosnog = this.okov[i].prihvSig
          delete this.okov[i].prihvSig
        } else prihvatnikSigurnosnog = 0



        this.maliPrihvatnik = {'1083202': this.prihvGetribe + this.prihvMakaze + 
                                          prihvZadnjeg + prihvatnikSigurnosnog + 1}

        this.okov[i] = {...this.okov[i], ...this.maliPrihvatnik}              
      }

      if(this.pozicije[i].brojKrila == 2){
        this.okov[i] = {...this.serviceRacunanja.dvokrilni,
                        ...this.serviceRacunanja.izaberiGetribu(this.pozicije[i].visina,this.pozicije[i].sigurnosniKip),
                        ...this.serviceRacunanja.izaberiMakazuDvokrilnog(this.pozicije[i].sirina, this.pozicije[i].otvaranje),
                        ...this.serviceRacunanja.izaberiUgaonikDvokrilnog(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip, this.pozicije[i].centralnaRingla),
                        ...this.serviceRacunanja.izaberiRingle(this.pozicije[i].visina, this.pozicije[i].centralnaRingla),
                        ...this.serviceRacunanja.izaberiZadnjiZatv(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip),
                        ...this.serviceRacunanja.izaberiKip(this.pozicije[i].sirina, this.pozicije[i].visina, this.pozicije[i].sigurnosniKip, this.pozicije[i].otvaranje,this.pozicije[i].brojKrila),
                        ...this.serviceRacunanja.izborMaskica(this.pozicije[i].brojKrila, this.pozicije[i].boja, this.pozicije[i].sigurnosnaRucica)
                      }
        if (this.okov[i].hasOwnProperty('prihvGetribe')){
          this.prihvGetribe = this.okov[i].prihvGetribe
          delete this.okov[i].prihvGetribe
        } else this.prihvGetribe = 0

        if (this.okov[i].hasOwnProperty('prihvMakaze')){
          this.prihvMakaze = this.okov[i].prihvMakaze
          delete this.okov[i].prihvMakaze
        } else this.prihvMakaze = 0

        if (this.okov[i].hasOwnProperty('prihvZadnjeg')){
          prihvZadnjeg = this.okov[i].prihvZadnjeg
          delete this.okov[i].prihvZadnjeg
        } else prihvZadnjeg = 0

        if (this.okov[i].hasOwnProperty('prihvSig')){
          prihvatnikSigurnosnog = this.okov[i].prihvSig
          delete this.okov[i].prihvSig
        } else prihvatnikSigurnosnog = 0

        if (this.okov[i].hasOwnProperty('prihUgaonika')){
          prihvatnikUgaonika = this.okov[i].prihUgaonika;
          delete this.okov[i].prihUgaonika
        } else prihvatnikUgaonika = 0

        if (prihvatnikSigurnosnog + prihvZadnjeg + this.prihvMakaze + prihvatnikUgaonika == 0){
        } else 
        this.maliPrihvatnik = {'1083202': this.prihvMakaze + 
        prihvZadnjeg + prihvatnikSigurnosnog + prihvatnikUgaonika}

        if (this.prihvGetribe == 0 || this.pozicije[i].centralnaRingla === true){
        }else this.velikiPrihvatnik = {'1083207': this.prihvGetribe}
        

        this.okov[i] = {...this.okov[i], ...this.maliPrihvatnik, ...this.velikiPrihvatnik} 
        if (this.pozicije[i].visina > 1000){
          this.okov[i]= {...this.okov[i], ...{1083296:1, 1083297:1}}
          }
      }
    }
      //okretni
      if(this.pozicije[i].nacinOtvaranja == "okretno"){
        if (this.pozicije[i].brojKrila == 1){
          this.okov[i] = {...this.serviceRacunanja.zaJednokrilniOkretni(this.pozicije[i].visina, this.pozicije[i].otvaranje),
                          ...this.serviceRacunanja.okretneMaskice(this.pozicije[i].brojKrila, this.pozicije[i].boja, this.pozicije[i].sigurnosnaRucica, this.pozicije[i].visina),
                          ...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicije[i].visina),
                        }
          if (this.okov[i].hasOwnProperty('prihvGetribe')){
            this.prihvGetribe = this.okov[i].prihvGetribe
            delete this.okov[i].prihvGetribe
          } else this.prihvGetribe = 0

          this.maliPrihvatnik = {'1083202': this.prihvGetribe}

          this.okov[i] = {...this.okov[i], ...this.maliPrihvatnik}
        }
        if (this.pozicije[i].brojKrila == 2){
          this.okov[i] = {...this.serviceRacunanja.zaDvokrilniOkretni(this.pozicije[i].visina),
                          ...this.serviceRacunanja.okretneMaskice(this.pozicije[i].brojKrila, this.pozicije[i].boja, this.pozicije[i].sigurnosnaRucica, this.pozicije[i].visina),
                          ...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicije[i].visina),
                        }
          if (this.okov[i].hasOwnProperty('prihvGetribe')){
            this.prihvGetribe = this.okov[i].prihvGetribe
            delete this.okov[i].prihvGetribe
          } else this.prihvGetribe = 0
          this.maliPrihvatnik = {'1083207': this.prihvGetribe}

          this.okov[i] = {...this.okov[i], ...this.maliPrihvatnik}
        }

      } 
      if(this.pozicije[i].nacinOtvaranja == "nagibno"){
          this.okov[i] = {...this.serviceRacunanja.izaberiOkretnuGetribu(this.pozicije[i].sirina),
                          ...this.serviceRacunanja.zaNagibni(this.pozicije[i].sirina, this.pozicije[i].boja, this.pozicije[i].sigurnosnaRucica)
                        }
                        
          if (this.okov[i].hasOwnProperty('prihvGetribe')){
            this.prihvGetribe = this.okov[i].prihvGetribe
            delete this.okov[i].prihvGetribe
          } else this.prihvGetribe = 0

          this.maliPrihvatnik = {'1083202': this.prihvGetribe}

          this.okov[i] = {...this.okov[i], ...this.maliPrihvatnik}
      } 

      for (let y  in this.okov[i]){
        if (typeof this.okov[i][y] == 'number') {      
          this.okov[i][y] *= this.pozicije[i].kolicina;
        }}
    }
    this.sumArray(this.okov)
  }
  obrisiListu(){
    this.okov=[]
    this.konacanOkov=[]
  }
  trackByFn(index: any){
   return index
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
            this.konacanOkov.push(this.temp)
          }
      }
      console.log(this.konacanOkov)
    };
    partialClear(){
      this.pozicija.controls['sirina'].reset()
      this.pozicija.controls['visina'].reset()
      this.pozicija.controls['kolicina'].reset()
      this.pozicija.controls['brojKrila'].reset()
      this.pozicija.controls['otvaranje'].reset()
      this.pozicija.controls['sigurnosniKip'].reset()
      this.pozicija.controls['centralnaRingla'].reset()
    }
    deleteRow(i:number){
      this.cena = 'Izracunaj cenu'
      this.pozicije.splice(i, 1)
    }
    deleteItem(i: number){
      this.konacanOkov.splice(i, 1)
    }
    izracunajStampaj(){
      this.izracunaj()
      setTimeout(window.print)
    }
    otvRadio(e: any){
      this.kakoSeOtvara = e.target.value
      // console.log(this.kakoSeOtvara)
      if(this.kakoSeOtvara == 'kombinovano'){
        this.partialClear()
        this.pozicija.enable()
      } if (this.kakoSeOtvara == 'okretno'){
        this.partialClear()
        this.pozicija.enable()
        this.pozicija.controls['sigurnosniKip'].disable();
        this.pozicija.controls['centralnaRingla'].disable();
      } if (this.kakoSeOtvara == 'nagibno'){
        this.partialClear()
        this.pozicija.enable()
        this.pozicija.controls['brojKrila'].disable();
        this.pozicija.controls['otvaranje'].disable();
        this.pozicija.controls['sigurnosniKip'].disable();
        this.pozicija.controls['centralnaRingla'].disable();
      }
    }
    dodajElement = new UntypedFormGroup({
      element: new FormControl('Select item'),
      kolicina: new FormControl('', Validators.required)
    })

    dodajItemSubmit(){
      let item: any
      let sporniBr: number
      item = this.dataService.JOVAN.find(o=>o.id == this.dodajElement.value.element)
      item.kolicina = this.dodajElement.value.kolicina;
      if (this.konacanOkov.length > 0){
        for (let i = 0; i<this.konacanOkov.length; i++){
          if (this.konacanOkov[i].id === item.id){
            sporniBr = i+1
            alert('Elemenat je vec upisan pod brojem ' + sporniBr)
            return
          }
        }
      }
        this.konacanOkov.push(item)
        this.dodajElement.reset()
    }
    izracunajCenu(){
      let tempCena = 0
      this.izracunaj()
      if (this.konacanOkov.length === 0){
        console.log('konacanOkov list is empty')
      }else {
        for (let i = 0; i < this.konacanOkov.length; i++){
          if (this.konacanOkov[i].kolicina === undefined){
            console.log(this.konacanOkov[i].kolicina)
          } else {
            tempCena += this.konacanOkov[i].kolicina * this.konacanOkov[i].cena;
            tempCena = Math.round(tempCena * 100)/100
          }
        }
        this.cena = tempCena + " eur"
      }
    }
    changeColBtnName(){
      if(this.collapseButtonName === 'Sakrij'){
        this.collapseButtonName = 'Prikazi'
      } else {
        this.collapseButtonName = 'Sakrij'
      }
    }
    stampajIzmenjenOkov(){
      setTimeout(window.print, 300)
    }
    openScrollableContent(longContent: any) {
      this.modalService.open(longContent, { scrollable: true });
    }
    openFullscreen(content: any) {
      this.izracunaj()
      this.modalService.open(content, { fullscreen: true });
    }


  constructor(public dataService: BazaService, private serviceRacunanja: IzracunavanjaService,
     private modalService: NgbModal, private serviceValidacije: ValidationService) { }

  ngOnInit(): void {   

  }

}

