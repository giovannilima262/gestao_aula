import { TipoPessoaEnum } from '../enums/tipo-pessoa-enum';

export class Pessoa {
    id: Number;
    nome: String;
    matricula: String;
    cpf: String;
    tipo: TipoPessoaEnum;
}