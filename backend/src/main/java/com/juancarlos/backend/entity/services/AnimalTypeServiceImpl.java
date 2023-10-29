package com.juancarlos.backend.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juancarlos.backend.entity.dao.IAnimalTypeDao;
import com.juancarlos.backend.entity.models.AnimalType;



@Service
public class AnimalTypeServiceImpl implements IAnimalTypeService{
	
	@Autowired
	private IAnimalTypeDao animaltypeDao;

	@Override
	public AnimalType findOne(Long animal_type_id) {
		return animaltypeDao.findById(animal_type_id).get();
	}

	@Override
	public List<AnimalType> findAll() {
		return (List<AnimalType>) animaltypeDao.findAll();
	}

	@Override
	public void save(AnimalType animaltype) {
		animaltypeDao.save(animaltype);
		
	}

	@Override
	public void update(AnimalType animaltype, long animal_type_id) {
		animaltypeDao.findById(animal_type_id).ifPresent((x)->{
			animaltype.setAnimalType_id(x.getAnimalType_id());
			animaltypeDao.save(animaltype);
		});
		
	}

	@Override
	public void delete(long animal_type_id) {
		animaltypeDao.deleteById(animal_type_id);
		
	}

	

}
