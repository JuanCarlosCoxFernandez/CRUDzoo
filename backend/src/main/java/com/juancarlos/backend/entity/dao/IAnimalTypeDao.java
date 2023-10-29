package com.juancarlos.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.juancarlos.backend.entity.models.AnimalType;

public interface IAnimalTypeDao extends CrudRepository<AnimalType, Long>{

}
