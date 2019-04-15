package br.edu.ucsal.gestao_aula.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import br.edu.ucsal.gestao_aula.enums.StatusAulaEnum;

@Entity
@Table(name = "IMPREVISTO")
public class Imprevisto {

	@Id
	@GeneratedValue
	private Long id;

	@Enumerated(EnumType.STRING)
	@Column(name = "STATUS_AUlA")
	private StatusAulaEnum statusAulaEnum;

	@Column(name = "DESCRICAO", length = 100)
	private String descricao;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public StatusAulaEnum getStatusAulaEnum() {
		return statusAulaEnum;
	}

	public void setStatusAulaEnum(StatusAulaEnum statusAulaEnum) {
		this.statusAulaEnum = statusAulaEnum;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
