(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{fqca:function(e,a,n){"use strict";n.r(a),n.d(a,"LenguajeModule",function(){return j});var t=n("ofXK"),i=n("tyNb"),r=n("3Pt+"),c=n("LzS+");class b extends c.a{constructor(e,a){super(e,a),this.lenguaje1=e,this.lenguaje2=a,this.concatenacionEspecialAlfabetos=(e,a)=>{const n=e.length,t=a.length,i=[];for(let r=0;r<n;r++)for(let n=0;n<t;n++)i.push(e[r]+a[n]);return i},this.potenciaLenguajeRecursiva=(e,a)=>{const n=e;let t=[];return t=e,t=1===a?e:this.concatenacionEspecialAlfabetos(this.potenciaLenguajeRecursiva(t,a-1),n),t}}inversa(e){const a=[];for(const n of e)a.push(this.inversaPalabra(n));return console.log(a),a}inversaPalabra(e){let a="";for(let n=e.length-1;n>=0;n--)a+=e[n];return a}cardinalidad(e){return e.length}concatenar(){const e=[];for(let a=0;a<this.lenguaje1.length;a++)for(let n=0;n<this.lenguaje2.length;n++)e.push(this.lenguaje1[a]+this.lenguaje2[n]);return e}}var o=n("fXoL"),l=n("QIUk"),s=n("7kUa"),p=n("jIHw"),d=n("lUkA"),u=n("fk4S");function g(e,a){if(1&e&&(o.Pb(0,"div"),o.Pb(1,"p-divider",12),o.Pb(2,"b"),o.pc(3,"Operaciones de lenguajes formales"),o.Ob(),o.Ob(),o.Pb(4,"div",13),o.Pb(5,"div",14),o.Pb(6,"p-fieldset",15),o.pc(7),o.Ob(),o.Ob(),o.Pb(8,"div",14),o.Pb(9,"p-fieldset",16),o.Pb(10,"p"),o.pc(11),o.Ob(),o.Kb(12,"p-divider"),o.pc(13),o.Ob(),o.Ob(),o.Pb(14,"div",14),o.Pb(15,"p-fieldset",17),o.pc(16),o.Ob(),o.Ob(),o.Ob(),o.Pb(17,"p-divider",12),o.Pb(18,"b"),o.pc(19,"Operaciones de lenguajes Lenguajes"),o.Ob(),o.Ob(),o.Pb(20,"div",13),o.Pb(21,"div",14),o.Pb(22,"p-fieldset",18),o.pc(23),o.Kb(24,"p-divider"),o.pc(25),o.Ob(),o.Ob(),o.Pb(26,"div",14),o.Pb(27,"p-fieldset",19),o.pc(28),o.Kb(29,"p-divider"),o.pc(30),o.Ob(),o.Ob(),o.Pb(31,"div",20),o.Pb(32,"p-fieldset",21),o.pc(33),o.Ob(),o.Ob(),o.Pb(34,"div",22),o.Pb(35,"p-fieldset",23),o.pc(36),o.Kb(37,"p-divider"),o.pc(38),o.Ob(),o.Ob(),o.Ob(),o.Ob()),2&e){const e=o.Yb();o.yb(6),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.unionlenguaje," "),o.yb(2),o.bc("toggleable",!0),o.yb(2),o.rc("Diferencia entre A y B = ",e.diferenciaAB," "),o.yb(2),o.rc(" Diferencia entre B y A = ",e.diferenciaBA," "),o.yb(2),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.interseccion," "),o.yb(6),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.lenguajeInvA," "),o.yb(2),o.rc(" ",e.lenguajeInvB," "),o.yb(2),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.cardinalidadA," "),o.yb(2),o.rc(" ",e.cardinalidadB," "),o.yb(2),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.concatenar," "),o.yb(2),o.bc("toggleable",!0),o.yb(1),o.rc(" ",e.potenciaA," "),o.yb(2),o.rc(" ",e.potenciaB," ")}}function f(e){return e.filter((a,n)=>e.indexOf(a)===n)}const y=[{path:"",children:[{path:"",component:(()=>{class e{constructor(e){this.fb=e,this.estado=!1}ngOnInit(){this.myForm=this.fb.group({arrayA:["",[r.j.required]],arrayB:["",[r.j.required]],potencia:[1]})}capturarArrayLenguajes(){const{arrayA:e,arrayB:a,potencia:n}=this.myForm.value;this.lenguajeArrayA=f(e.trim().split(",")),this.lenguajeArrayB=f(a.trim().split(",")),this.operacionesValidas(this.lenguajeArrayA,this.lenguajeArrayB,n)}operacionesValidas(e,a,n){this.estado=!0;const t=new b(e,a);this.unionlenguaje=t.unionAlfabeto(),this.diferenciaAB=t.diferenciaAlfabetoAB(),this.diferenciaBA=t.diferenciaAlfabetoBA(),this.interseccion=t.intersecion(),this.potenciaA=t.potenciaLenguajeRecursiva(e,n),this.potenciaB=t.potenciaLenguajeRecursiva(a,n),this.lenguajeInvA=t.inversa(e),this.lenguajeInvB=t.inversa(a),this.cardinalidadA=t.cardinalidad(e),this.cardinalidadB=t.cardinalidad(a),this.concatenar=t.concatenar()}}return e.\u0275fac=function(a){return new(a||e)(o.Jb(r.b))},e.\u0275cmp=o.Db({type:e,selectors:[["app-lenguaje"]],decls:19,vars:3,consts:[[1,"p-mb-2"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-formgroup-inline"],[1,"p-field"],["for","arrayA",1,"p-sr-only"],["id","arrayA","type","text","pInputText","","placeholder","Ingrese su lenguaje","formControlName","arrayA"],["for","arrayB",1,"p-sr-only"],["id","arrayB","type","text","pInputText","","placeholder","Ingrese su lenguaje","formControlName","arrayB"],["for","potencia",1,"p-sr-only"],["id","potencia","type","number","pInputText","","placeholder","potencia","formControlName","potencia"],["pButton","","pRipple","","type","button","label","Submit",3,"disabled","click"],[4,"ngIf"],["align","center"],[1,"p-grid","p-mt-2"],[1,"p-col-6"],["legend","Uni\xf3n",3,"toggleable"],["legend","Diferencia",3,"toggleable"],["legend","Intersecci\xf3n",3,"toggleable"],["legend","Inversa",3,"toggleable"],["legend","Cardinalidad",3,"toggleable"],[1,"p-col-12"],["legend","Concatenacion",3,"toggleable"],[1,"p-col"],["legend","Potencia",3,"toggleable"]],template:function(e,a){1&e&&(o.Pb(0,"p-card",0),o.Pb(1,"h3"),o.pc(2,"Registre sus palabras de un lenguaje separando por comas"),o.Ob(),o.Pb(3,"form",1),o.Wb("ngSubmit",function(){return a.capturarArrayLenguajes()}),o.Pb(4,"div",2),o.Pb(5,"div",3),o.Pb(6,"label",4),o.pc(7,"LenguajeA"),o.Ob(),o.Kb(8,"input",5),o.Ob(),o.Pb(9,"div",3),o.Pb(10,"label",6),o.pc(11,"LenguajeB"),o.Ob(),o.Kb(12,"input",7),o.Ob(),o.Pb(13,"div",3),o.Pb(14,"label",8),o.pc(15,"Potencia"),o.Ob(),o.Kb(16,"input",9),o.Ob(),o.Pb(17,"button",10),o.Wb("click",function(){return a.capturarArrayLenguajes()}),o.Ob(),o.Ob(),o.Ob(),o.Ob(),o.nc(18,g,39,18,"div",11)),2&e&&(o.yb(3),o.bc("formGroup",a.myForm),o.yb(14),o.bc("disabled",a.myForm.invalid),o.yb(1),o.bc("ngIf",a.estado))},directives:[l.a,r.k,r.f,r.d,r.a,s.a,r.e,r.c,r.h,p.a,t.j,d.a,u.a],styles:[""]}),e})()}]}];let h=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({imports:[[i.c.forChild(y)],i.c]}),e})();var v=n("5Ovr");let j=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({imports:[[t.b,h,v.a,r.i]]}),e})()}}]);