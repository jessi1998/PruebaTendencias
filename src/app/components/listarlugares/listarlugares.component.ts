import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugarService } from '../../servicios/lugar.service';
import { Lugar } from '../../modelos/lugar.modelos';


@Component({
  selector: 'app-listarlugares',
  templateUrl: './listarlugares.component.html',
  styleUrls: ['./listarlugares.component.scss']
})
export class ListarlugaresComponent implements OnInit {


  lugares: Lugar[];


  constructor(private lugarservice: LugarService) {}

  ngOnInit(): void {
    this.lugarservice.getAllLugar().subscribe(data=>this.lugares=data)
  }

 
}
