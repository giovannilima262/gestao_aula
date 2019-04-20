package br.edu.ucsal.gestao_aula.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import br.edu.ucsal.gestao_aula.enums.TipoPessoaEnum;

@Entity
@Table(name = "PESSOA")
public class Pessoa {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "NOME", length = 100)
	private String nome;

	@Column(name = "MATRICULA", length = 20)
	private String matricula;

	@Column(name = "CPF", length = 11)
	private String cpf;

	@Enumerated(EnumType.STRING)
	@Column(name="TIPO_PESSOA")
	private TipoPessoaEnum tipo;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getMatricula() {
		return matricula;
	}

	public void setMatricula(String matricula) {
		this.matricula = matricula;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public TipoPessoaEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoPessoaEnum tipo) {
		this.tipo = tipo;
	}

}
