package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.enums.StatusAulaEnum;
import br.edu.ucsal.gestao_aula.model.*;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AulaCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Aula> filtrar(Aula aula) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Aula> cq = cb.createQuery(Aula.class);

        Root<Aula> aulaRoot = cq.from(Aula.class);
        List<Predicate> predicates = new ArrayList<>();
        Join<Aula, Sala> salaJoin = aulaRoot.join("sala", JoinType.LEFT);
        Join<Aula, Imprevisto> imprevistoJoin = aulaRoot.join("imprevisto", JoinType.LEFT);
        Join<Aula, MateriaCurso> materiaCursoJoin = aulaRoot.join("materiaCurso", JoinType.LEFT);

        if (aula.getSala() != null && aula.getSala().getId() != null) {
            predicates.add(cb.equal(salaJoin.get("id"), aula.getSala().getId()));
        }

        if (aula.getData() != null) {
            predicates.add(cb.equal(aulaRoot.get("data"), aula.getData()));
        }

        if (aula.getMateriaCurso() != null && aula.getMateriaCurso().getId() != null) {
            predicates.add(cb.equal(materiaCursoJoin.get("id"), aula.getMateriaCurso().getId()));
        }

        if(aula.getImprevisto() != null && aula.getImprevisto().getStatus() != null) {
            Predicate predicateStatus = cb.equal(imprevistoJoin.get("status"), aula.getImprevisto().getStatus());
            if(aula.getImprevisto().getStatus().equals(StatusAulaEnum.TEM_AULA)) {
                Predicate predicateImprevisto = cb.isNull(aulaRoot.get("imprevisto"));
                predicateStatus = cb.or(predicateStatus, predicateImprevisto);
            }
            predicates.add(predicateStatus);

        }

        cq.where(predicates.toArray(new Predicate[0]));
        List<Aula> aulas = em.createQuery(cq).getResultList();
        return aulas;
    }
}
