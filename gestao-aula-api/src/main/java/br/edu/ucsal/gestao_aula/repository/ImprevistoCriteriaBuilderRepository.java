package br.edu.ucsal.gestao_aula.repository;

import br.edu.ucsal.gestao_aula.model.Imprevisto;
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
public class ImprevistoCriteriaBuilderRepository {

    @PersistenceContext
    private EntityManager em;

    public List<Imprevisto> filtrar(Imprevisto imprevisto) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Imprevisto> cq = cb.createQuery(Imprevisto.class);

        Root<Imprevisto> imprevistoRoot = cq.from(Imprevisto.class);
        List<Predicate> predicates = new ArrayList<>();

        if (imprevisto.getDescricao() != null && imprevisto.getDescricao() != "") {
            predicates.add(cb.like(imprevistoRoot.get("descricao"), "%" + imprevisto.getDescricao() + "%"));
        }

        if (imprevisto.getStatus() != null) {
            predicates.add(cb.equal(imprevistoRoot.get("status"), imprevisto.getStatus()));
        }
        cq.orderBy(cb.asc(imprevistoRoot.get("descricao")));
        cq.where(predicates.toArray(new Predicate[0]));
        List<Imprevisto> imprevistos = em.createQuery(cq).getResultList();
        return imprevistos;
    }
}
