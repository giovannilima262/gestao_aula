package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.model.Pessoa;
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
public class MateriaCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Materia> filtrar(Materia materia) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Materia> cq = cb.createQuery(Materia.class);

        Root<Materia> materiaRoot = cq.from(Materia.class);
        List<Predicate> predicates = new ArrayList<>();

        if (materia.getNome() != null && materia.getNome() != "") {
            predicates.add(cb.like(materiaRoot.get("nome"), "%" + materia.getNome() + "%"));
        }

        cq.orderBy(cb.asc(materiaRoot.get("nome")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<Materia> materias = em.createQuery(cq).getResultList();
        return materias;
    }
}
