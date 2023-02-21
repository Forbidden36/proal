import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControl, FormControl, UntypedFormControl, UntypedFormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FakeBazaSsiPozicijaService } from '../fake-baza-ssi-pozicija.service';
import { SSI } from '../ssi';
import { IzracunavanjaSSIService } from '../izracunavanja-ssi.service';

@Component({
  selector: 'app-podizno-klizni',
  templateUrl: './podizno-klizni.component.html',
  styleUrls: ['./podizno-klizni.component.css']
})
export class PodiznoKlizniComponent implements OnInit {
  slika:string = ''
  bluePrintSSI: any = this.SSIpos.SSIpozicije
  jednaSina: any = []
  dveSine: any = []
  triSine: any = []
  detaljiPozicije: any 
  detaljiSine: string =''
  posSSI!: SSI
  pozicijeSSI: SSI [] = []
  okov: any =[]
  konacanOkov: any = [] 
  cena:any = 'Izracunaj cenu'
  today: number = Date.now()
  sporniBr: number = 0;
  
  pozicijaSSI = new UntypedFormGroup ({
    tipMere: new UntypedFormControl('meraKrila'),
    boja: new UntypedFormControl('belo'),
    sirina: new UntypedFormControl('', [Validators.required]),
    visina: new UntypedFormControl ('', [Validators.required]),
    kolicina: new UntypedFormControl('', [Validators.required])
  },[this.ValidateSirina(), this.ValidateVisina()])

  ValidateSirina(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const meraTipa = control.get('tipMere')?.value;
      const privSirina:number = control.get('sirina')?.value;
      let sirina = privSirina
      if(meraTipa === 'meraKrila'){
        sirina = privSirina
      } else {
        sirina = this.detaljiPozicije.meraKrila.izracunajKrila(sirina, 2000).falcSirina
      }
      if(!sirina){
        return null;
      }
      if(sirina < 720){
        return {sirinaMala: true}
      } else if (sirina > 3235){
          return {sirinaVelika: true}
      }
        return null
    }
  }
  ValidateVisina(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const meraTipa = control.get('tipMere')?.value;
      const privVisina:number = control.get('visina')?.value;
      let visina = privVisina
      if(meraTipa === 'meraKrila'){
        visina = privVisina
      } else {
        visina = this.detaljiPozicije.meraKrila.izracunajKrila(5000, visina).falcVisina
      }
      if(!visina){
        return null;
      }
      if(visina < 1201){
        return {visinaMala: true}
      } else if (visina > 2700){
        return {visinaVelika: true}
      }
        return null
    }
  }

  sortirajNiz(){
    for(let i = 0; i < this.SSIpos.SSIpozicije.length; i++){
      if(this.SSIpos.SSIpozicije[i].tipSine === 'Jedna sina'){
        this.jednaSina.push(this.SSIpos.SSIpozicije[i])
      }
      if(this.SSIpos.SSIpozicije[i].tipSine === 'Dve sine'){
        this.dveSine.push(this.SSIpos.SSIpozicije[i])
      }
      if(this.SSIpos.SSIpozicije[i].tipSine === 'Tri sine'){
        this.triSine.push(this.SSIpos.SSIpozicije[i])
      }
    }
  }

  openXl(e: any) {
		this.modalService.open(e, { size: 'xl' });
	}
  srediSliku(e: any){
    this.slika = e.imgSource
    this.detaljiSine = e.tipSine
    this.detaljiPozicije = e
  }

  stampajIzmenjenOkov(){
    setTimeout(window.print, 200)
  }

  dodajElement = new UntypedFormGroup({
    element: new FormControl('', [Validators.required, this.validateUnos()]),
    kolicina: new FormControl('', [Validators.required, Validators.min(1)])
  })
  get element() {return this.dodajElement.get('element')}

  validateUnos(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      const item = control.value
      if(!item){
        return null;
      }
      if (this.konacanOkov.length > 0){
        for (let i = 0; i<this.konacanOkov.length; i++){
          if (this.konacanOkov[i].id == item){
            this.sporniBr = i+1
            return {itemPostoji: true}
          }
        } 
      }
        return null
    }
  }
  
  openFullscreen(content: any) {
    this.izracunaj()
    this.modalService.open(content, { fullscreen: true });
  }

  onSubmit(){
    let tempSirina = 0;
    let tempVisina = 0;
    console.log(this.pozicijaSSI.value)
    if (this.pozicijaSSI.value.tipMere === 'meraStoka') {
      tempSirina = this.detaljiPozicije.meraKrila.izracunajKrila(this.pozicijaSSI.value.sirina, this.pozicijaSSI.value.visina).falcSirina
      tempVisina = this.detaljiPozicije.meraKrila.izracunajKrila(this.pozicijaSSI.value.sirina, this.pozicijaSSI.value.visina).falcVisina
    } else {
      tempSirina = this.pozicijaSSI.value.sirina;
      tempVisina = this.pozicijaSSI.value.visina;
    }
    this.posSSI = {
      naziv: this.detaljiPozicije.naziv,
      sirinaKrila : tempSirina,
      visinaKrila : tempVisina,
      unesenaSirina: this.pozicijaSSI.value.sirina,
      unesenaVisina: this.pozicijaSSI.value.visina,
      kriloV: this.detaljiPozicije.kriloV,
      kriloH: this.detaljiPozicije.kriloH,
      tipSine: this.detaljiPozicije.tipSine,
      img: this.detaljiPozicije.imgSource,
      kolicina: this.pozicijaSSI.value.kolicina,
      boja: this.pozicijaSSI.value.boja
    }
    this.pozicijeSSI.push(this.posSSI)
    this.partialClear()
  }
  izracunaj(){
    this.obrisiListu()
    for(let i = 0; i < this.pozicijeSSI.length; i++){
      this.okov[i] = {...this.serviceRacunanja.vratiPos(this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH),
                      ...this.serviceRacunanja.izaberiGetribu(this.pozicijeSSI[i].visinaKrila,this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH),
                      ...this.serviceRacunanja.izaberiLetvu(this.pozicijeSSI[i].sirinaKrila,this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH),
                      ...this.serviceRacunanja.izaberiPrihvatnike(this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH).prihvatnikV,
                      ...this.serviceRacunanja.izaberiPrihvatnike(this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH).prihvatnikH,
                      ...this.serviceRacunanja.saberiRukStopere(this.pozicijeSSI[i].kriloV, this.pozicijeSSI[i].kriloH, this.pozicijeSSI[i].boja)

      }
      for (let y  in this.okov[i]){
        if (typeof this.okov[i][y] == 'number') {      
          this.okov[i][y] *= this.pozicijeSSI[i].kolicina;
        }}
    }
    this.sumArray(this.okov)
    console.log(this.konacanOkov)
  }

  sumArray (arr: any) {
    let temp: any
    let res: any = {}
    for(let i = 0; i < arr.length; i++){
       Object.keys(arr[i]).forEach(key => {
          res[key] = (res[key] || 0) + arr[i][key];
       });
    };
    for(let key in res){
      temp = this.SSIpos.hauTau.find(o => o.id == key)
        if(typeof temp === 'undefined'){
          console.log(key)
        } else {
          temp.kolicina=res[key]
          this.konacanOkov.push(temp)
        }
    }
    console.log(this.konacanOkov)
  }

  partialClear(){
    this.pozicijaSSI.controls['sirina'].reset()
    this.pozicijaSSI.controls['visina'].reset()
    this.pozicijaSSI.controls['kolicina'].reset()
  }
  izracunajStampaj(){
    this.izracunaj()
    setTimeout(window.print)
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

  dodajItemSubmit(){
    let itemNO: any
    itemNO = this.SSIpos.hauTau.find(o=>o.id == this.dodajElement.value.element)
    itemNO.kolicina = this.dodajElement.value.kolicina;

          this.konacanOkov.push(itemNO)
          this.dodajElement.reset()
  }
  resetujDodajFormu(){
    this.dodajElement.reset()
  }
  deleteItem(i: number){
    this.konacanOkov.splice(i, 1)
  }

  obrisiListu(){
    this.okov=[]
    this.konacanOkov=[]
  }

  trackByFn(index: any){
    return index
  }
  deleteRow(i:number){
    this.cena = 'Izracunaj cenu'
    this.pozicijeSSI.splice(i, 1)
  }
  constructor(private modalService: NgbModal, public SSIpos: FakeBazaSsiPozicijaService, private serviceRacunanja: IzracunavanjaSSIService) { }
  ngOnInit(): void {
    this.sortirajNiz()
  }

}

