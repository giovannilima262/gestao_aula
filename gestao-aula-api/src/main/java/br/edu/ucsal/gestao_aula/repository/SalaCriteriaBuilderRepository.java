package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Pessoa;
import br.edu.ucsal.gestao_aula.model.Sala;
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
public class SalaCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Sala> filtrar(Sala sala) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Sala> cq = cb.createQuery(Sala.class);

        Root<Sala> salaRoot = cq.from(Sala.class);
        List<Predicate> predicates = new ArrayList<>();

        if (sala.getNome() != null && sala.getNome() != "") {
            predicates.add(cb.like(salaRoot.get("nome"), "%" + sala.getNome() + "%"));
        }

        if (sala.getTipo() != null) {
            predicates.add(cb.equal(salaRoot.get("tipo"), sala.getTipo()));
        }
        cq.orderBy(cb.asc(salaRoot.get("nome")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<Sala> salas = em.createQuery(cq).getResultList();
        return salas;
    }
}
