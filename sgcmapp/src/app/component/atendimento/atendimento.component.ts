import { Component } from '@angular/core';
import { ICrudList } from '../i-crud-list';
import { Atendimento } from '../../model/atendimento';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-atendimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atendimento.component.html',
  styles: ``
})
export class AtendimentoComponent implements ICrudList<Atendimento> {

  constructor(
    private http: HttpClient
  ) { }

  apiUrl: string = environment.API_URL + '/atendimento';
  registros: Atendimento[] = [];

  ngOnInit(): void {
    this.get();
  }

  get(termoBusca?: string): Observable<Atendimento[]> {
    let url = this.apiUrl + '/consultar';
    if (termoBusca) {
      url += '?termoBusca=' + termoBusca;
    }
    return this.http.get<Atendimento[]>(url);
  }

  delete(id: number): void {
    throw new Error('Method not implemented.');
  }

}
