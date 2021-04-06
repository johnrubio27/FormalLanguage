import { Alfabetos } from '../../alfabeto/models/alfabeto.model';
import { FuncionesCompartidas } from '../../model/funciones-compartidas.interface';

export class Lenguajes extends Alfabetos implements FuncionesCompartidas{
    constructor(public lenguaje1: string[], public lenguaje2: string[]) {
        super(lenguaje1, lenguaje2);
    }

    private concatenacionEspecialAlfabetos = (lenguaje1: string[], lenguaje2: string[]) => {
        const x = lenguaje1.length;
        const y = lenguaje2.length;
        const concatenacionLenguaje = [];
        for (let i = 0; i < x; i++){
            for (let j = 0; j < y; j++){
                    concatenacionLenguaje.push(lenguaje1[i] + lenguaje2[j]);
            }
        }
        return concatenacionLenguaje;
    }

    potenciaLenguajeRecursiva = (alfabeto: string[], potencia: number) => {
        const alf = alfabeto;
        let resultadoParcial = [];
        resultadoParcial = alfabeto;
        if  (potencia === 1) {
            resultadoParcial = alfabeto;
        }
        else{
            resultadoParcial = this.concatenacionEspecialAlfabetos(this.potenciaLenguajeRecursiva(resultadoParcial, potencia - 1), alf);
        }
        return resultadoParcial;
    }

    inversa(lenguajes: string[]): string[]{
        const lenguajeInvertido: string[] = [];
        for (const lenguaje of lenguajes){
            lenguajeInvertido.push(this.inversaPalabra(lenguaje));
        }
        console.log(lenguajeInvertido);
        return lenguajeInvertido;
    }

    inversaPalabra(palabra: string): string{

        let nuevaCadena = '';
        for (let x = palabra.length - 1; x >= 0; x--) {
            nuevaCadena += palabra[x];
        }
        return nuevaCadena;
    }

    cardinalidad(lenguaje: string[]): number{
        return lenguaje.length;
    }

    concatenar(): string[]{
        const concatenado = [];
        for( let i = 0; i < this.lenguaje1.length; i++){
            for(let j= 0; j < this.lenguaje2.length; j++){
                concatenado.push((this.lenguaje1[i] + this.lenguaje2[j]));
            }
        }
        return concatenado;
    }


}
