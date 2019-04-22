package br.edu.ucsal.gestao_aula.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import br.edu.ucsal.gestao_aula.enums.TipoSalaEnum;

@Entity
@Table(name = "SALA")
public class Sala {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "NOME", length = 100)
	private String nome;

	@Enumerated(EnumType.STRING)
	@Column(name = "TIPO_SALA")
	private TipoSalaEnum tipo;

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

	public TipoSalaEnum getTipo() {
		return tipo;
	}

	public void setTipo(TipoSalaEnum tipo) {
		this.tipo = tipo;
	}

}
