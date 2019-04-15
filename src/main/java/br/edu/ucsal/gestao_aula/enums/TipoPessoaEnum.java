package br.edu.ucsal.gestao_aula.enums;

public enum TipoPessoaEnum {

	PROFESSOR(1, "Professor"), ALUNO(2, "Aluno");

	private Integer codigo;

	private String descricao;

	private TipoPessoaEnum(Integer codigo, String descricao) {
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
