import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = null;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    const result = dataFake.find(article => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    } else {
      this.contentTitle = 'Conteúdo não encontrado';
      this.contentDescription = 'O artigo que você está tentando acessar não está disponível.';
      this.photoCover = 'assets/images/default-cover.png';
    }
  }
}
