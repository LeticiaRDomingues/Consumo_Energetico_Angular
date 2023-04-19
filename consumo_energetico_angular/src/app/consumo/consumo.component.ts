import { Component } from '@angular/core';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})

export class ConsumoComponent {

  qtdpessoas : number = 0;
  qtdcomodos : number = 0;
  qtdtvs : number = 0;
  qtdcomputer : number = 0;
  tarifa : number = 0;
  maquina : boolean = false;
  maqval : number = 0;
  secadora : boolean = false;
  secval : number = 0;
  soma : number = 0;
  resultado : number = 0;


  calculo(){

    //Calculos usando os inputs
    let chuveiro = (this.qtdpessoas * 54) * 30; // 5.4Kws * 10 minutos
    let televisao = (this.qtdtvs * 294) * 30; //tv 55 poplegadas ligada 3 horas ao dia = 98*3 = 294
    let computer = this.qtdcomputer * 24; // Computador com gasto de 24kWh/mês
    let comodos = this.qtdcomodos * 191.99; //Média entre o consumo de uma cozinha, escritório e quartos

    //Checkbox
    if(this.maquina == true){
      this.maqval = 1.76; // valor de 12 dias
    }
    else{
      this.maqval = 0;
    }
    if(this.secadora == true){
      this.secval = 42.0; // valor de 12 dias por uma hora
    }
    else{
      this.secval = 0;
    }

    this.soma = (chuveiro + televisao + computer + comodos) + (this.maqval + this.secval);
    this.soma = parseFloat(this.soma.toFixed(2));

    this.resultado = this.soma * this.tarifa;
    this.resultado = parseFloat(this.resultado.toFixed(2));

  }
}
