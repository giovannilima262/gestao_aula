package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Curso;
import br.edu.ucsal.gestao_aula.model.Materia;
import br.edu.ucsal.gestao_aula.model.MateriaCurso;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class MateriaCursoCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<MateriaCurso> filtrar(MateriaCurso materiaCurso) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<MateriaCurso> cq = cb.createQuery(MateriaCurso.class);

        Root<MateriaCurso> materiaCursoRoot = cq.from(MateriaCurso.class);
        Join<MateriaCurso, Materia> materiaJoin = materiaCursoRoot.join("materia", JoinType.LEFT);
        Join<MateriaCurso, Curso> cursoJoin = materiaCursoRoot.join("curso", JoinType.LEFT);
        List<Predicate> predicates = new ArrayList<>();

        if (materiaCurso.getMateria() != null && materiaCurso.getMateria().getNome() != null && materiaCurso.getMateria().getNome() != "") {
            predicates.add(cb.like(materiaJoin.get("nome"), "%" + materiaCurso.getMateria().getNome() + "%"));
        }

        if (materiaCurso.getCurso() != null && materiaCurso.getCurso().getNome() != null && materiaCurso.getCurso().getNome() != "") {
            predicates.add(cb.like(cursoJoin.get("nome"), "%" + materiaCurso.getCurso().getNome() + "%"));
        }

        cq.orderBy(cb.asc(materiaJoin.get("nome")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<MateriaCurso> materias = em.createQuery(cq).getResultList();
        return materias;
    }
}
