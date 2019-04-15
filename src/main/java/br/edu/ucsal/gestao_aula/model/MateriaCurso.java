package br.edu.ucsal.gestao_aula.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="MATERIA_CURSO")
public class MateriaCurso {

	@Id
	@GeneratedValue
	private Long id;

	@ManyToOne
	@JoinColumn
	private Materia materia;

	@ManyToOne
	@JoinColumn
	private Curso curso;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Materia getMateria() {
		return materia;
	}

	public void setMateria(Materia materia) {
		this.materia = materia;
	}

	public Curso getCurso() {
		return curso;
	}

	public void setCurso(Curso curso) {
		this.curso = curso;
	}

}
