import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina2',
  standalone: false,
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  videoUrl: string = '';
  showVideo: boolean = false;

  constructor(private http: HttpClient) {}

  carregarVideo2() {

     if (this.showVideo) {
    // Se já está mostrando, oculta o vídeo
    this.showVideo = false;
    this.videoUrl = '';
  } else {

    this.http.get<{ url: string }>('http://localhost:3000/api/video/video2')
      .subscribe(response => {
        this.videoUrl = response.url;
        this.showVideo = true;
      });
  }
  }

}
