package com.juancarlos.backend.entity.services;

import java.util.List;

import com.juancarlos.backend.entity.models.Animal;

public interface IAnimalService {
	
	public Animal findOne(Long animal_id);
	public List<Animal> findAll();
	public List<Animal> getAllAnimalsByZooId(long zoo_id);
	public List<Animal> getAllAnimalsByAnimalTypeId(long animal_type_id);
	public void save(Animal animal);
	public void saveAnimalInZooByZooId(Animal animal, long zoo_id);
	public void saveAnimalInAnimalTypeByAnimalTypeId(Animal animal, long animal_type_id);
	public void update(Animal animal, long animal_id);
	public void delete(long animal_id);
	
	public void addZooToAnimal(long zoo_id, long animal_id);
	public void addAnimalTypeToAnimal(long animal_typr_id, long animal_id);
	
}
