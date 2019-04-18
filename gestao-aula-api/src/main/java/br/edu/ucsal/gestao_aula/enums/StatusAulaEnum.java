package br.edu.ucsal.gestao_aula.enums;

public enum StatusAulaEnum {

	NAO_AULA(1, "Não tem aula"), TEM_AULA(2, "Tem aula");

	private Integer codigo;

	private String descricao;

	private StatusAulaEnum(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

}
