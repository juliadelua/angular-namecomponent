import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuliaDisciplinasService } from '../julia-disciplinas.service';

@Component({
  selector: 'app-julia-detalhes',
  templateUrl: './julia-detalhes.component.html',
  styleUrls: ['./julia-detalhes.component.css'],
})
export class JuliaDetalhesComponent implements OnInit {
  disciplina;
  constructor(
    private route: ActivatedRoute,
    public jdisc: JuliaDisciplinasService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.disciplina = this.jdisc.getLista()[params.get('index')];
    });
  }
}
