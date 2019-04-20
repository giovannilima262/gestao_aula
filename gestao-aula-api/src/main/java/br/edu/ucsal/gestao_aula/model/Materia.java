package br.edu.ucsal.gestao_aula.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "MATERIA")
public class Materia {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "NOME", length = 100, nullable = false)
	private String nome;

	@OneToMany(mappedBy = "materia")
	private List<MateriaCurso> materiaCursoList;

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

	public List<MateriaCurso> getMateriaCursoList() {
		return materiaCursoList;
	}

	public void setMateriaCursoList(List<MateriaCurso> materiaCursoList) {
		this.materiaCursoList = materiaCursoList;
	}

}
