import { Component, OnInit } from '@angular/core';
import { JuliaDisciplinasService } from '../julia-disciplinas.service';

@Component({
  selector: 'app-julia-lista',
  templateUrl: './julia-lista.component.html',
  styleUrls: ['./julia-lista.component.css'],
})
export class JuliaListaComponent implements OnInit {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;

  constructor(public jdisc: JuliaDisciplinasService) {}

  ngOnInit() {}

  adicionar({ codigo, nome, diaDaSemana, horario, ementa }) {
    if (
      this.codigo &&
      this.nome &&
      this.diaDaSemana &&
      this.horario &&
      this.ementa
    ) {
      this.jdisc.include({
        codigo: this.codigo,
        nome: this.nome,
        diaDaSemana: this.diaDaSemana,
        horario: this.horario,
        ementa: this.ementa,
      });
    } else {
      console.log('items missing');
    }
  }
}
