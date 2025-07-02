import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina5',
  standalone: false,
  templateUrl: './pagina5.component.html',
  styleUrls: ['./pagina5.component.css']
})
export class Pagina5Component {
  videoUrl: string = '';
  showVideo: boolean = false;

  constructor(private http: HttpClient) {}

  carregarVideo5() {

     if (this.showVideo) {
    // Se já está mostrando, oculta o vídeo
    this.showVideo = false;
    this.videoUrl = '';
  } else {

    this.http.get<{ url: string }>('http://localhost:3000/api/video/video5')
      .subscribe(response => {
        this.videoUrl = response.url;
        this.showVideo = true;
      });
  }
  }

}
