// Declaramos la clase Alfabetos y método que sirven para los lenguajes también.
export class Alfabetos {
    constructor(
        public alfabeto1: string[],
        public alfabeto2: string[]
    ) {
    }

    private limpiarRepetidos(myArr: string[]): string[] {
        return myArr.filter((repetido, index) => myArr.indexOf(repetido) === index);
    }

    unionAlfabeto(): string[] {
        if ( this.alfabeto1.length > 0 && this.alfabeto2.length > 0 ) {
                const union: string[] = this.limpiarRepetidos(this.alfabeto1.concat(this.alfabeto2));
                return union;
        } else if ( this.alfabeto1.length === 0 && this.alfabeto2.length > 0 ){
            return this.alfabeto2;
        } else if ( this.alfabeto2.length === 0 && this.alfabeto1.length > 0 ){
            return this.alfabeto1;
        }else{
            return [];
        }
    }

    diferenciaAlfabetoAB(): string[]{
        return this.alfabeto1.filter(caracter => !this.alfabeto2.includes(caracter));
    }

    diferenciaAlfabetoBA(): string[] {
        return this.alfabeto2.filter(caracter => !this.alfabeto1.includes(caracter));
    }

    intersecion(): string[] {
        return this.alfabeto1.filter(caracter => this.alfabeto2.includes(caracter));
    }

}
