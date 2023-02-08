import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeBazaSsiPozicijaService {

  SSIpozicije = [
    {naziv: 'JednosinskiSaJednimKrilom', imgSource: "assets/images/1Sina_1Krilo.jpg", kriloV: 1, kriloH: 0, tipSine: 'Jedna sina',  
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/2)-2; let falcVisina:number = b-94; return { falcSirina, falcVisina}}}},
  
    {naziv: 'JednosinskiSaDvaKrila', imgSource: "assets/images/1Sina_2Krila.jpg", kriloV: 1, kriloH: 1, tipSine: 'Jedna sina', 
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/4)+23; let falcVisina:number = b-94; return { falcSirina, falcVisina}}}},

    {naziv: 'dvosinskiSaJednimKrilom', imgSource: "assets/images/dvosinac sa jednim krilom.png", kriloV: 1, kriloH: 0, tipSine: 'Dve sine', stoper: 1,
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/2)+4; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},

    {naziv:'dvosinskiSaDvaKrila', imgSource:"assets/images/dvosinac sa dva krila.png", kriloV:2, kriloH: 0, tipSine: 'Dve sine', 
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/2)+4; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},

    {naziv: 'dvosinskiSaTriKrila', imgSource: "assets/images/dvosinac sa tri krila.png", kriloV: 0, kriloH: 1, tipSine: 'Dve sine', 
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/3)+32; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},

    {naziv:'dvosinskiSaCetiriKrila', imgSource: "assets/images/dvosinac sa cetiri krila.png", kriloV: 1, kriloH: 1, tipSine: 'Dve sine', 
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/4)+23; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},

    {naziv: 'trosinskiSaTriKrila', imgSource: "assets/images/Trosinac sa tri krila.png", kriloV: 1, kriloH: 1, tipSine:'Tri sine',
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/3)+32; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},

    {naziv: 'trosinskiSaSestKrila', imgSource: "assets/images/Trosinac sa sest krila.png", kriloV: 1, kriloH: 3, tipSine: 'Tri sine',
    meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/6)+45; let falcVisina:number = b-80; return { falcSirina, falcVisina}}}},
  ]
  // JednosinskiSaJednimKrilom = {imgSource: "assets/images/1Sina_1Krilo.jpg", kriloV: 1, kriloH: 0, tipSine: 'Jedna sina', opisPozicije: 'jednaSinaJednoKrilo', 
  // meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/2)-2; let falcVisina:number = b-94; return { falcSirina, falcVisina}}} }

  // JednosinskiSaDvaKrila = {imgSource: "assets/images/1Sina_2Krila.jpg", kriloV: 1, kriloH: 1, tipSine: 'Jedna sina', meraKrila: {izracunajKrila(a: number, b: number) {let falcSirina:number = (a/4)+23; let falcVisina:number = b-94; return { falcSirina, falcVisina}}}};
  // dvosinskiSaJednimKrilom = {imgSource: "assets/images/dvosinac sa jednim krilom.png", kriloV: 1, kriloH: 0, tipSine: 'Dve sine'};
  // dvosinskiSaDvaKrila = {imgSource:"assets/images/dvosinac sa dva krila.png", kriloV:2, kriloH: 0, tipSine: 'Dve sine'}
  // dvosinskiSaTriKrila = {imgSource: "assets/images/dvosinac sa tri krila.png", kriloV: 0, kriloH: 1, tipSine: 'Dve sine'}
  // dvosinskiSaCetiriKrila = {imgSource: "assets/images/dvosinac sa cetiri krila.png", kriloV: 1, kriloH: 1, tipSine: 'Dve sine'}
  // trosinskiSaTriKrila = {imgSource: "assets/images/Trosinac sa tri krila.png", kriloV: 1, kriloH: 1, tipSine:'Tri sine'};
  // trosinskiSaSestKrila = {imgSource: "assets/images/Trosinac sa sest krila.png", kriloV: 1, kriloH: 3, tipSine: 'Tri sine'};

  hauTau = [
    {id: '302311', opis: 'HS330 OSNOVNA GARNITURA',kolicina: null, cena: 59.000},
    {id: '188636', opis: 'HS300 DODATNI DEO OSNOVNE GARNITURE',kolicina: null, cena: 6.000},
    {id: '184307', opis: 'HS 300 POG.MEH.GR 180 EV1',kolicina: null, cena: 65.000},
    {id: '184313', opis: 'HS300 POG.MEH.GR.210 EV1 37,5mm',kolicina: null, cena: 68.200},
    {id: '184319', opis: 'HS300 POG.MEH.GR.240 EV1 37,5mm',kolicina: null, cena: 73.200},
    {id: '184325', opis: 'HS300 POG.MEH.GR.270 EV 37,5mm',kolicina: null, cena: 79.200},
    {id: '184581', opis: 'HS300 VEZNA LETVA GR.200',kolicina: null, cena: 7.200},
    {id: '184584', opis: 'HS300 VEZNA LETVA GR.250',kolicina: null, cena: 10.600},
    {id: '184587', opis: 'HS300 VEZNA LETVA GR.323',kolicina: null, cena: 17.000},
    {id: '184578', opis: 'HS300 VEZNA LETVA GR.150',kolicina: null, cena: 5.400},
    {id: '189038', opis: 'HS330 PODLOŠKA',kolicina: null, cena: 9.900},
    {id: '187480', opis: 'HS300 STOPER KRILA BELI',kolicina: null, cena: 8.400},
    {id: '187477', opis: 'HS300 STOPER KRILA CRNI',kolicina: null, cena: 8.400},
    {id: '239855', opis: 'HS300 STOPER KRILA SIVI',kolicina: null, cena: 8.400},
    {id: '184809', opis: 'HS300 PRIHVATNIK 11,5mm',kolicina: null, cena: 8.000},
    {id: '184749', opis: 'HS300 PRIHVATNI CEP',kolicina: null, cena: 8.000},
    {id: '186934', opis: 'HS300 BLOKADA POGONA  SHEMA C',kolicina: null, cena: 2.000},
    {id: '198105', opis: 'HS300 VIJAK',kolicina: null, cena: 10.500},
    {id: 'ST1114.00B', opis: 'ST RUCICA ZA KLIZNI SISTEM BELA 1114.00.310',kolicina: null, cena: 16.700},
    {id: 'ST1115B', opis: 'ST POVUKA BELA 1115.00.310',kolicina: null, cena: 2.500},
    {id: 'ST1114.00C', opis: 'ST RUCICA ZA KLIZNI SISTEM CRNA 1114.00.313',kolicina: null, cena: 16.700},
    {id: 'ST1114.00E6', opis: 'ST RUCICA ZA KLIZNI SISTEM SIVA 1114.00.315',kolicina: null, cena: 16.700},
    {id: 'ST1115C', opis: 'ST POVUKA CRNA 1115.00.313',kolicina: null, cena: 2.500},
    {id: 'ST1115E6', opis: 'ST POVUKA E6 1115.00.315',kolicina: null, cena: 2.500},
  ]

  constructor() { }
}
