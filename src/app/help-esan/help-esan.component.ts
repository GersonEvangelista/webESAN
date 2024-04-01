import { Component } from '@angular/core';

@Component({
  selector: 'app-help-esan',
  templateUrl: './help-esan.component.html',
  styleUrls: ['./help-esan.component.css','./help-esanMobile.component.css']
})
export class HelpEsanComponent {

  public courses = [
    { materia: 'Calculo I'},
    { materia: 'Calculo II'},
    { materia: 'Fisica I'},
    { materia: 'Estadistica Inferencial'},

  ];

  public courseSearch: string = '';

  public coursesFiltrados: any[] | undefined;

  public buscarCourse() {
    this.coursesFiltrados = this.courses.filter(courses =>
      courses.materia.toLowerCase().includes(this.courseSearch.toLowerCase())
    );
  }

}
