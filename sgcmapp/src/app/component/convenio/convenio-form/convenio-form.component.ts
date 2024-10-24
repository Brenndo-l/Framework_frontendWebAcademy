import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Convenio } from '../../../model/convenio';
import { environment } from '../../../../environments/environment';
import { ICrudService } from '../../../service/i-crud-service';
import { ICrudForm } from '../../i-crud-form';
import { ConvenioService } from '../../../service/convenio.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConvenioFormComponent implements ICrudForm<Convenio> {
  registro: Convenio = <Convenio>{};
  constructor(
    private servico: ConvenioService,
    private router: Router
  ){}
  save(): void {
    this.servico.save(this.registro).subscribe({
      complete:() => {
        alert("Operação realizada com sucesso!");
        this.router.navigate(['/agenda-list']);
      }
    });
  }

}