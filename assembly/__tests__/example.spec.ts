import { CrearLicitación} from "..";
import { Context } from "near-sdk-as";
import * as contract from '..';

/*Test para la función createProject*/
describe("Crea una licitación",()=>{
  it("Guarda la clase FormatoLicitación en un vector persistente con los valores definidos por el usuario", () => {
      expect(() => {
          contract.CrearLicitación("Licitación de servidores","razón_social","descripción",5000,2500,"fecha_cierre");
      });
});
   it("debería fallar si se introduce un número en vez de un string en el título", () => {
        expect(() => {
       //contract.CrearLicitación (3,"razón_social","descripción",5000,2500,"fecha_cierre");
    }).not.toThrow();
});

 it("debería fallar si el presupuesto es 0", () => {
        expect(() => {
       contract.CrearLicitación("Licitación de servidores","razón_social","descripción",0,2500,"fecha_cierre");
    }).toThrow();
 });


})
