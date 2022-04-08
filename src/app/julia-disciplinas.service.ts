import { Injectable } from '@angular/core';

interface Disciplina {
  codigo: string;
  nome: string;
  diaDaSemana: string;
  horario: string;
  ementa: string;
}

@Injectable()
export class JuliaDisciplinasService {
  list: Array<Disciplina> = [];

  constructor() {
    this.list = [
      {
        codigo: 'ISW014',
        nome: 'Projeto de Encontrabilidade',
        diaDaSemana: 'Segunda',
        horario: '19:00 - 22:30',
        ementa:
          'Teoria Geral. Marcação para encontrabilidade. Microformatos. Conteúdo. Rede Social. Estratégias Server-Side. Como evitar armadilhas de encontrabilidade. Pesquisas. Análises.',
      },
      {
        codigo: 'AGM004',
        nome: 'Negócios e Marketing e Eletrônicos',
        diaDaSemana: 'Quarta',
        horario: '19:00 - 22:30',
        ementa:
          'Conceitos de marketing e de marketing digital. O comportamento do consumidor on-line. Marketing de conteúdo. Marketing nas mídias sociais. E-mail marketing. Marketing viral. Publicidade on-line. Pesquisa de marketing on-line. Marketing e os negócios na Internet. Estudos de caso.',
      },
      {
        codigo: 'IDS002',
        nome: 'Desenvolvimento para Servidores II',
        diaDaSemana: 'Quinta',
        horario: '19:00 - 22:30',
        ementa:
          'Conceitos e evolução das tecnologias de programação de servidores. Recursos da linguagem escolhida para servidores na Internet. Padrões de projetos. Integração com sistemas (Google Maps API, Twitter, entre outros).',
      },
      {
        codigo: 'ITE004',
        nome: 'Tópicos Especiais em Sistemas para Internet II',
        diaDaSemana: 'Sexta',
        horario: '19:00 - 22:30',
        ementa: 'Recursos e aplicações da tecnologia escolhida.',
      },
      {
        codigo: 'ISW011',
        nome: 'Projeto de Prototipagem e Testes de Usabilidade',
        diaDaSemana: 'Sábado',
        horario: '8:00 - 11:30',
        ementa:
          'Conceitos, métodos de prototipagem e ferramentas de teste de protótipos. Conceitos de usabilidade e estratégias de design. Métodos de teste de usabilidade. Planejamento de teste de usabilidade. Recrutamento. Projeto de usabilidade. Plano de teste. Sessão de teste de usabilidade. Análise de dados. Comunicação dos resultados. Variação de técnicas.',
      },
    ];
  }

  getLista() {
    return this.list;
  }

  include({ codigo, nome, diaDaSemana, horario, ementa }) {
    this.list.push({ codigo, nome, diaDaSemana, horario, ementa });
  }

  exclude(index: number) {
    this.list.splice(index, 1);
  }
}
