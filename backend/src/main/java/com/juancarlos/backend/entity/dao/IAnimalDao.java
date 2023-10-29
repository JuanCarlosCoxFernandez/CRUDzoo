package com.juancarlos.backend.entity.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.juancarlos.backend.entity.models.Animal;

public interface IAnimalDao extends CrudRepository<Animal, Long>{
	@Query("select a from Animal a where a.animal_id = :animal_id")
	List<Animal> findByZooId(@Param("animal_id") long zoo_id);
	@Query("select a from Animal a where a.animal_id = :animal_id")
	List<Animal> findByAnimalTypeId(@Param("animal_id") long animal_type_id);
}
