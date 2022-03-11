import { Context } from "near-sdk-as";
import { FormatoLicitación, licitaciones, FormatoCotización, cotizaciones, Estado } from "./models";


export function CrearLicitación(
  título: string,
    razón_social: string,
    descripción: string,
    presupuesto_max: i32,
    anticipo: i32,
    fecha_cierre: string,
): void {
assert(título.length>0,"Incluye un nombre para tu licitación")
assert(razón_social.length>0, "Incluye tu razón social")
assert(descripción.length>0, "Incluye una descripción donde especifiques todos los requisitos de tu adquisición: Tipo de equipo, modelo, marca, SKU, garantías, tiempos de entrega etc.")
assert(<i32>presupuesto_max>0, "Escribe tu presupuesto máximo para esta compra")
assert(<i32>anticipo>0, "Escribe el anticipo que ofreces como un número")
assert(fecha_cierre.length>0 && fecha_cierre.length<11, "Incluye la fecha de cierre, máximo de 11 caracteres")


licitaciones.push(
  new FormatoLicitación(licitaciones.length, título, razón_social, descripción, presupuesto_max, anticipo, fecha_cierre)
  );
}

export function MostrarLicitaciones(): Array<FormatoLicitación> {
    const resultado_licitación = new Array<FormatoLicitación>(licitaciones.length);
    for (let i = 0; i < licitaciones.length; i++) {
      resultado_licitación[i] = licitaciones[i];
    }
    return resultado_licitación;
  }

 
  export function CambiarEstado(id: i32): FormatoLicitación {
    let licitación  = licitaciones[id]
    licitación.Estado = Estado.cerrada
    licitaciones.replace(<i32>id, licitación)
    return licitación
  }

  export function BorrarLicitación(id: i32): void {
    assert(id>=0,"No hay licitaciones con id negativo")
    licitaciones.swap_remove(<i32>id)
  }


  export function PostularCotización(
      razón_social: string,
      licitación_destino: i32,
      precio_ofertado: i32,
      anticipo: i32,
  ): void {
  assert(razón_social.length>0, "Incluye tu razón social")
  assert(<i32>precio_ofertado>0, "Indica tu mejor precio para esta licitación")
  assert(<i32>anticipo>0, "Indica el anticipo mínimo que requieres")
  
  
  cotizaciones.push(
    new FormatoCotización(cotizaciones.length, razón_social, licitación_destino, precio_ofertado, anticipo)
    );
  }

  export function MostrarCotizaciones(): Array<FormatoCotización> {
    const resultado_cotización = new Array<FormatoCotización>(cotizaciones.length);
    for (let i = 0; i < cotizaciones.length; i++) {
      resultado_cotización[i] = cotizaciones[i];
    }
    return resultado_cotización;
  }  

  export function BorrarCotización(id: i32): void {
    assert(id>=0,"No hay cotizaciones con id negativo")
    cotizaciones.swap_remove(<i32>id)
  }