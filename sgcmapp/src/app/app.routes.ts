import { Routes } from '@angular/router';
import { AgendaListComponent } from './component/agenda/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './component/agenda/agenda-form/agenda-form.component';
import { AtendimentoComponent } from './component/atendimento/atendimento.component';
import { ConvenioListComponent } from './component/convenio/convenio-list/convenio-list.component';
import { ConvenioFormComponent } from './component/convenio/convenio-form/convenio-form.component';

export const routes: Routes = [
    { path: 'agenda-list', component: AgendaListComponent },
    { path: 'agenda-form', component: AgendaFormComponent },
    { path: 'atendimento', component: AtendimentoComponent },
    { path: 'convenio-list', component: ConvenioListComponent},
    { path: 'convenio-form', component: ConvenioFormComponent }
];
