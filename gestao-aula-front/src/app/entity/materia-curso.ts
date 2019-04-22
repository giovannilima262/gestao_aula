import { Curso } from 'src/app/entity/curso';
import { Materia } from 'src/app/entity/materia';
export class MateriaCurso {
    id: Number;
    materia: Materia;
    curso: Curso;
}