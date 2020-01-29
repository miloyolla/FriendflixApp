import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="the jungle!";

  constructor() {}

  dadosPost: object = {
    nome_user: 'Mileny',
    foto_user: 'foto',
    username: '@miloyolla',
    texto:'hello friends, esse é meu primeiro comentário sobre séries nesse novo app chamado Friendflix. <3',
    qtd_likes:0,
    qtd_dislikes:0,
    qtd_compartilhamentos:5,
    status_like:false,
    status_dislike:false,
    anexo: 'foto',
    horario:'14:02',
  }

  newLike(post){
    if(!this.dadosPost.status_dislike){
      if(this.dadosPost.status_like){
        this.dadosPost.qtd_likes--;
      }
      else{
        this.dadosPost.qtd_likes++;
      }
      this.dadosPost.status_like=!this.dadosPost.status_like;
    }
    else{
      this.dadosPost.status_dislike=!this.dadosPost.status_dislike;
      this.dadosPost.qtd_dislikes--;
      if(this.dadosPost.status_like){
        this.dadosPost.qtd_likes--;
      }
      else{
        this.dadosPost.qtd_likes++;
      }
      this.dadosPost.status_like=!this.dadosPost.status_like;
    }
}

  newDislike(post){
    if(!this.dadosPost.status_like){
      if(this.dadosPost.status_dislike){
        this.dadosPost.qtd_dislikes--;
      }
      else{
        this.dadosPost.qtd_dislikes++;
      }
      this.dadosPost.status_dislike=!this.dadosPost.status_dislike;
    }
    else{
      this.dadosPost.status_like=!this.dadosPost.status_like;
      this.dadosPost.qtd_likes--;
      if(this.dadosPost.status_dislike){
        this.dadosPost.qtd_dislikes--;
      }
      else{
        this.dadosPost.qtd_dislikes++;
      }
      this.dadosPost.status_dislike=!this.dadosPost.status_dislike;
    }
  }
}
