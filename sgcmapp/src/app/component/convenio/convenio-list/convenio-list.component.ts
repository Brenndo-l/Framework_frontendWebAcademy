import { Component } from '@angular/core';
import { ICrudList } from '../../i-crud-list';
import { Convenio } from '../../../model/convenio';
import { ConvenioService } from '../../../service/convenio.service';
import { BarraComandosComponent } from "../../barra-comandos/barra-comandos.component";
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-convenio-list',
  standalone: true,
  imports: [BarraComandosComponent, CommonModule, RouterLink],
  templateUrl: './convenio-list.component.html',
  styles: ``
})
export class ConvenioListComponent implements ICrudList<Convenio> {
  registros: Convenio[] = [];

  constructor (
    private servico: ConvenioService
  ){

  }


  ngOnInit(): void {
    this.get();
  }
  get(termoBusca?: string): void {
    this.servico.get(termoBusca).subscribe({
      next: (resposta: Convenio[]) => {
        this.registros = resposta;
      }
    })
  }
  delete(id: number): void {
    if(confirm("Deseja cancelar agendamento?")){
      this.servico.delete(id).subscribe({
        complete: () => {
          this.get();
        }
      })
    }
  }

}
