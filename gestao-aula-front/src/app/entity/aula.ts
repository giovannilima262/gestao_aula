import { Imprevisto } from './imprevisto';
import { Sala } from 'src/app/entity/sala';
import { MateriaCurso } from './materia-curso';
export class Aula {
    id: Number;
    materiaCurso: MateriaCurso;
    sala: Sala;
    imprevisto: Imprevisto;
    data: Date;
    horarioInicio: String;
    horarioFim: String;
}