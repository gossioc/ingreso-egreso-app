import { IngresoEgresoComponent } from '../ingreso-egreso/ingreso-egreso.component';


export class IngresoEgreso {

    constructor (
        public descripcion: string,
        public monto: number,
        public tipo: string,
        public uid?: string,
    ) {}

}