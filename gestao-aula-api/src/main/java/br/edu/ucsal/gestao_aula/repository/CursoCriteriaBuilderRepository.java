package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Curso;
import br.edu.ucsal.gestao_aula.model.Materia;
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
public class CursoCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Curso> filtrar(Curso curso) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Curso> cq = cb.createQuery(Curso.class);

        Root<Curso> cursoRoot = cq.from(Curso.class);
        List<Predicate> predicates = new ArrayList<>();

        if (curso.getNome() != null && curso.getNome() != "") {
            predicates.add(cb.like(cursoRoot.get("nome"), "%" + curso.getNome() + "%"));
        }

        cq.orderBy(cb.asc(cursoRoot.get("nome")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<Curso> cursos = em.createQuery(cq).getResultList();
        return cursos;
    }
}
