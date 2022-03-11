import { Context, PersistentVector } from "near-sdk-as";

export enum Estado {
    abierta,
    cerrada,
  }


@nearBindgen
export class FormatoLicitación {
    id:u64
    título: string;
    razón_social: string;
    descripción: string;
    presupuesto_max: i32;
    anticipo: i32;
    fecha_cierre: string;
    Estado: Estado;

  constructor(
      id:u64,
      título: string,
      razón_social: string,
      descripción: string,
      presupuesto_max: i32,
      anticipo: i32,
      fecha_cierre: string
      ) {
    this.id = id; 
    this.título = título;
    this.razón_social = razón_social;
    this.descripción = descripción;
    this.presupuesto_max = presupuesto_max;
    this.anticipo = anticipo;
    this.fecha_cierre = fecha_cierre;
    this.Estado = Estado.abierta;
  }
}


export class FormatoCotización {
  id:u64
  razón_social: string;
  licitación_destino: i32;
  precio_ofertado: i32;
  anticipo: i32;

constructor(
    id:u64,
    razón_social: string,
    licitación_destino: i32,
    precio_ofertado: i32,
    anticipo: i32,
    ) {
  this.id = id; 
  this.razón_social = razón_social;
  this.licitación_destino = licitación_destino;
  this.precio_ofertado = precio_ofertado;
  this.anticipo = anticipo;
}
}

/* STORAGE */
export let licitaciones = new PersistentVector<FormatoLicitación>("licitación")
export let cotizaciones = new PersistentVector<FormatoCotización>("cotización")