import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title="the jungle!";

  constructor() {}

  dadosPost: object = [{
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
    status_spoiler:false,
  },
  {
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
    status_spoiler:true,
  },
  {
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
    status_spoiler:true,
  },
  {
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
    status_spoiler:false,
  }]

  newLike(post){
    if(!post.status_dislike){
      if(post.status_like){
        post.qtd_likes--;
      }
      else{
        post.qtd_likes++;
      }
      post.status_like=!post.status_like;
    }
    else{
      post.status_dislike=!post.status_dislike;
      post.qtd_dislikes--;
      if(post.status_like){
        post.qtd_likes--;
      }
      else{
        post.qtd_likes++;
      }
      post.status_like=!post.status_like;
    }
}

  newDislike(post){
    if(!post.status_like){
      if(post.status_dislike){
        post.qtd_dislikes--;
      }
      else{
        post.qtd_dislikes++;
      }
      post.status_dislike=!post.status_dislike;
    }
    else{
      post.status_like=!post.status_like;
      post.qtd_likes--;
      if(post.status_dislike){
        post.qtd_dislikes--;
      }
      else{
        post.qtd_dislikes++;
      }
      post.status_dislike=!post.status_dislike;
    }
  }
}
