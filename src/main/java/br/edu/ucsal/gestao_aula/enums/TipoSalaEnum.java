package br.edu.ucsal.gestao_aula.enums;

public enum TipoSalaEnum {

	LABORATORIO(1, "Laboratório"), AUDITORIO(2, "Auditório"), SALA(3, "Sala");

	private Integer codigo;

	private String descricao;

	private TipoSalaEnum(Integer codigo, String descricao) {
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
