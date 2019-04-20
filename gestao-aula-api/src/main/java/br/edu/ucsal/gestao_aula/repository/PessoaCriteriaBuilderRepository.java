package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PessoaCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Pessoa> filtrar(Pessoa pessoa) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Pessoa> cq = cb.createQuery(Pessoa.class);

        Root<Pessoa> pessoaRoot = cq.from(Pessoa.class);
        List<Predicate> predicates = new ArrayList<>();

        if (pessoa.getNome() != null && pessoa.getNome() != "") {
            predicates.add(cb.like(pessoaRoot.get("nome"), "%" + pessoa.getNome() + "%"));
        }

        if (pessoa.getMatricula() != null && pessoa.getMatricula() != "") {
            predicates.add(cb.equal(pessoaRoot.get("matricula"), pessoa.getMatricula()));
        }

        if (pessoa.getCpf() != null && pessoa.getCpf() != "") {
            predicates.add(cb.equal(pessoaRoot.get("cpf"), pessoa.getCpf()));
        }

        if (pessoa.getTipo() != null) {
            predicates.add(cb.equal(pessoaRoot.get("tipo"), pessoa.getTipo()));
        }
        cq.orderBy(cb.asc(pessoaRoot.get("nome")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<Pessoa> pessoas = em.createQuery(cq).getResultList();
        return pessoas;
    }
}
