package br.edu.ucsal.gestao_aula.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "MATERIA")
public class Materia {

	@Id
	@GeneratedValue
	private Long id;

	@Column(name = "NOME", length = 100, nullable = false)
	private String nome;

	@JsonIgnore
	@OneToMany(mappedBy = "materia", fetch = FetchType.LAZY)
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
