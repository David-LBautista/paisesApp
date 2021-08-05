import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {
  termino:string = '';
  regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';

  paises:Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  activarRegion(region:string){
    this.regionActiva = region;
    console.log(this.regionActiva)
  }

  porRegion(){
    this.paisService.buscarRegion(this.regionActiva)
          .subscribe( paises => {
            this.paises = paises;
          });
  }

}
