export interface SSI {
    naziv: string;
    sirinaKrila: number;
    visinaKrila: number;
    unesenaSirina: number;
    unesenaVisina: number;
    kriloV: number;
    kriloH: number;
    tipSine: string;
    img: string;
    kolicina: number;
    boja: string;
    //profiliZaOpt: {  
                //profili:{[key: string]: {duzinaSipke: number, duzineZaOpt: number[]}},
                //gume: {[key:string]:number}[],
                //prateci: {[key:string]: number}[],
                // stok?: {sifra: string, sirina: number, visina: number}, 
                // krilo:{sirina: number, visina:number}, 
                // T?: number,
                // LTS?:{krilo: {sirina: number, visina:number}, fiks?:{sirina: number, visina: number}},
                // poklKrila?: number,
                // nosCetkice?: number,
                // poklStoka?: {sirina: number, visina: number},
                // poklT?: number,
                // inox?: number
            //}
}
