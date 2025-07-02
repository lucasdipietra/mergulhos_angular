import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina6',
    standalone: false,
  templateUrl: './pagina6.component.html',
  styleUrls: ['./pagina6.component.css']
})
export class Pagina6Component {
  titulo: string = 'Bem vindo à Ilhabela!';
  texto: string = 'Clique nos botões abaixo para conhecer mais sobre Naufrágios.';
  imagem: string = 'assets/backgr.jpg'; // Caminho relativo à pasta /src/assets/

  mudarConteudo(novoTitulo: string, novoTexto: string, novaImagem: string) {
    this.titulo = novoTitulo;
    this.texto = novoTexto;
    this.imagem = novaImagem;
  }
}




// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-pagina6',
//   standalone: false,
//   templateUrl: './pagina6.component.html'
// })
// export class Pagina6Component {
//   videoUrl: string = '';
//   showVideo: boolean = false;

//   constructor(private http: HttpClient) {}

//   carregarVideo6() {
//     this.http.get<{ url: string }>('http://localhost:3000/api/video/video3')
//       .subscribe(response => {
//         this.videoUrl = response.url;
//         this.showVideo = true;
//       });
//   }}
