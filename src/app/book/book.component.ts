import { Component } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css','./bookMobile.component.css']
})

export class BookComponent {

  titulo = "La Casa De Bachi";
  velocidad = 150; // tiempo en milisegundos entre cada letra

  ngOnInit() {
    this.escribirTitulo();
  }

  escribirTitulo() {
    const h1 = document.getElementsByTagName("h1")[0];
    const span = document.getElementById("escribiendo");
      if (span) {
        const letra = this.titulo.charAt(span.innerHTML.length);
        span.innerHTML += letra;
        h1.innerHTML = h1.innerHTML.slice(0, -1) + letra + "|"; // Agrega el cursor intermitente
          if (span.innerHTML.length < this.titulo.length) {
            setTimeout(() => this.escribirTitulo(), this.velocidad);
          } else {
            h1.innerHTML = h1.innerHTML.slice(0, -1); // Remueve el cursor intermitente
          }
     }
  }

  public books = [
    { titulo: 'Padre Rico Padre Pobre',autor:'Robert Kiyosaki, Sharon Lechter',categoria: 'Negocio-Emprendimiento', precio: 20,img: 'padreRicoPP.jpg'},
    { titulo: 'El Negocio del Siglo 21',autor:'Robert T. Kiyosaki',categoria: 'Negocio-Emprendimiento',precio: 20,img: 'negocioSiglo21.jpg' },
    { titulo: 'El Hombre Más Ricos de Babilonia',autor:'George Samuel Clason',categoria: 'Negocio-Emprendimiento',precio: 18,img: 'hombreMasRdBabilonia.jpg' },
    { titulo: 'El Espíritu Creativo',autor:'Daniel Goleman',categoria: 'Desarrollo Personal-Profesional',precio: 18,img: 'espirituCreativo.jpg' },
    { titulo: 'Retírate Joven y Rico',autor:'Robert T. Kiyosaki',categoria: 'Negocio-Emprendimiento',precio: 20,img: 'retirarJyR.jpg' },
    { titulo: 'Los Secretos de la Mente Millonaria',autor:'T. Harv Eker',categoria: 'Negocio-Emprendimiento',precio: 20,img: 'secretosDlMenteM.jpg' },
    { titulo: 'Vendedores perros',autor:'Blair Singer',categoria: 'Negocio-Emprendimiento', precio: 20,img: 'vendedoresPerros.jpg'},
    { titulo: 'Vendele a la mente no a la gente',autor:'Jurgen Klaric',categoria: 'Negocio-Emprendimiento',precio: 20,img: 'vendeleAlMentNALG.jpg' },
    { titulo: 'Neuro ventas',autor:'Jurgen Klaric',categoria: 'Negocio-Emprendimiento',precio: 20,img: 'neuroVentas.jpg' },
    { titulo: 'Tus zonas erroneas',autor:'Wayne W. Dayer',categoria: 'Desarrollo Personal-Profesional',precio: 20,img: 'tusZonasError.jpg' },
    { titulo: 'Como ganar amigos e influir sobre las personas',autor:'Dale Carnegie',categoria: 'Desarrollo Personal-Profesional',precio: 20,img: 'CGAeISobreLasPerson.jpg' },
    { titulo: 'Psicologia oscura y manipulacion mental',autor:'Daniel Cooper y Laura J. P. Goleman',categoria: 'Desarrollo Personal-Profesional', precio: 25,img: 'psicoOscurManMent.jpg'},
    { titulo: 'Inteligencia emocional',autor:'Ryan J. D. Goleman',categoria: 'Desarrollo Personal-Profesional',precio: 25,img: 'intelEmoc4e1.jpg' },
    { titulo: 'Menos miedos mas riquezas',autor:'Juan Diego Gomez Gomez',categoria: 'Negocio-Emprendimiento',precio: 18,img: 'menosMiedMasRiquez.jpg' },
    { titulo: 'Como ser un lider',autor:'Daniel Goleman',categoria: 'Desarrollo Personal-Profesional',precio: 14,img: 'comSerUnLid.jpg' },
    { titulo: 'El arte de la guerra',autor:'Sun Tzu',categoria: 'Desarrollo Personal-Profesional',precio: 20,img: 'arteDeGuerra.jpg' },
  ];

  public bookSearch: string = '';

  public librosFiltrados: any[] | undefined;

  public buscarLibros() {
    this.librosFiltrados = this.books.filter(books =>
      books.titulo.toLowerCase().includes(this.bookSearch.toLowerCase())
      ||books.precio.toString().includes(this.bookSearch.toLowerCase())
      ||books.autor.toLowerCase().includes(this.bookSearch.toLowerCase())
      ||books.categoria.toLowerCase().includes(this.bookSearch.toLowerCase())
    );
  }

}
