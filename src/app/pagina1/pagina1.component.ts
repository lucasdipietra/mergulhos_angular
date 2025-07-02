import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina1',
  standalone: false,
  templateUrl: './pagina1.component.html',
  styleUrls: ['./pagina1.component.css']
})
export class Pagina1Component {
  videoUrl: string = '';
  showVideo: boolean = false;

  constructor(private http: HttpClient) {}

  carregarVideo1() {

     if (this.showVideo) {
    // Se já está mostrando, oculta o vídeo
    this.showVideo = false;
    this.videoUrl = '';
  } else {

    this.http.get<{ url: string }>('http://localhost:3000/api/video/video1')
      .subscribe(response => {
        this.videoUrl = response.url;
        this.showVideo = true;
      });
  }
  }

}
