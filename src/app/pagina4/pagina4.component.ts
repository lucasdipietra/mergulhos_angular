import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina4',
  standalone: false,
  templateUrl: './pagina4.component.html',
  styleUrls: ['./pagina4.component.css']
})
export class Pagina4Component {
  videoUrl: string = '';
  showVideo: boolean = false;

  constructor(private http: HttpClient) {}

  carregarVideo4() {

     if (this.showVideo) {
    // Se já está mostrando, oculta o vídeo
    this.showVideo = false;
    this.videoUrl = '';
  } else {

    this.http.get<{ url: string }>('http://localhost:3000/api/video/video4')
      .subscribe(response => {
        this.videoUrl = response.url;
        this.showVideo = true;
      });
  }
  }

}
