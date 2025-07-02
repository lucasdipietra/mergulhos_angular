import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina3',
  standalone: false,
  templateUrl: './pagina3.component.html',
  styleUrls: ['./pagina3.component.css']
})
export class Pagina3Component {
  videoUrl: string = '';
  showVideo: boolean = false;

  constructor(private http: HttpClient) {}

  carregarVideo3() {

     if (this.showVideo) {
    // Se já está mostrando, oculta o vídeo
    this.showVideo = false;
    this.videoUrl = '';
  } else {

    this.http.get<{ url: string }>('http://localhost:3000/api/video/video3')
      .subscribe(response => {
        this.videoUrl = response.url;
        this.showVideo = true;
      });
  }
  }

}
