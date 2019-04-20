package br.edu.ucsal.gestao_aula.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "AULA")
public class Aula {

	@Id
	@GeneratedValue
	private Long id;

	@OneToOne
	private Sala sala;

	@OneToOne
	private MateriaCurso materiaCurso;

	@Column(name = "DATA_INICIO")
	private Timestamp dataInicio;

	@Column(name = "DATA_FIM")
	private Timestamp dataFim;

	@OneToOne
	private Imprevisto imprevisto;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Sala getSala() {
		return sala;
	}

	public void setSala(Sala sala) {
		this.sala = sala;
	}

	public MateriaCurso getMateriaCurso() {
		return materiaCurso;
	}

	public void setMateriaCurso(MateriaCurso materiaCurso) {
		this.materiaCurso = materiaCurso;
	}

	public Timestamp getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Timestamp dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Timestamp getDataFim() {
		return dataFim;
	}

	public void setDataFim(Timestamp dataFim) {
		this.dataFim = dataFim;
	}

	public Imprevisto getImprevisto() {
		return imprevisto;
	}

	public void setImprevisto(Imprevisto imprevisto) {
		this.imprevisto = imprevisto;
	}

}
