package com.juancarlos.backend.entity.services;

import java.util.List;

import com.juancarlos.backend.entity.models.AnimalType;

public interface IAnimalTypeService {
	
	public AnimalType findOne(Long animal_type_id);
	public List<AnimalType> findAll();
	public void save(AnimalType animaltype);
	public void update(AnimalType animaltype, long animal_type_id);
	public void delete(long animal_type_id);
}
