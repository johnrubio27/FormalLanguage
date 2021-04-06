import { FuncionesCompartidas } from '../../model/funciones-compartidas.interface';
export class Palabra implements FuncionesCompartidas{
    constructor(public palabra: string) {}

    cardinalidad(): number {
        return this.palabra.length;
    }

    inversaPalabra(): string{

        let nuevaCadena = '';
        for (let x = this.palabra.length - 1; x >= 0; x--) {
            nuevaCadena += this.palabra[x];
        }
        return nuevaCadena;
    }
}
