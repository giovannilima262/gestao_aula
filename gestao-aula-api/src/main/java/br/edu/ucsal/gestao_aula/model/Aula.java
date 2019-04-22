package br.edu.ucsal.gestao_aula.model;

import com.fasterxml.jackson.annotation.JsonFormat;

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

	@Column(name = "DATA")
	private Timestamp data;

	@Column(name = "HORARIO_INICIO")
	private String horarioInicio;

	@Column(name = "HORARIO_FIM")
	private String horarioFim;

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

	public Timestamp getData() {
		return data;
	}

	public void setData(Timestamp data) {
		this.data = data;
	}

	public Imprevisto getImprevisto() {
		return imprevisto;
	}

	public void setImprevisto(Imprevisto imprevisto) {
		this.imprevisto = imprevisto;
	}

	public String getHorarioInicio() {
		return horarioInicio;
	}

	public void setHorarioInicio(String horarioInicio) {
		this.horarioInicio = horarioInicio;
	}

	public String getHorarioFim() {
		return horarioFim;
	}

	public void setHorarioFim(String horarioFim) {
		this.horarioFim= horarioFim;
	}

}
