package com.juancarlos.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juancarlos.backend.entity.models.AnimalType;
import com.juancarlos.backend.entity.services.IAnimalTypeService;

@CrossOrigin(origins = "*")
@RestController
public class AnimalTypeController {
	
	@Autowired
	IAnimalTypeService animaltypeService;
	
	@GetMapping("/animaltype")
	public List<AnimalType> getAllAnimalType(){
		return animaltypeService.findAll();
	}
	
	@GetMapping("/animaltype/{animal_type_id}")
	public AnimalType getAnimalType(@PathVariable(value = "animal_type_id") long animal_type_id) {
		return animaltypeService.findOne(animal_type_id);
	}
	
	@PostMapping("/animaltype")
	public void save(AnimalType animaltype) {
		animaltypeService.save(animaltype);
	}
	
	@PutMapping("/animaltype/{animal_type_id}")
	public void update(AnimalType animaltype, @PathVariable(value = "animal_type_id") long animal_type_id) {
		animaltypeService.update(animaltype, animal_type_id);
	}
	
	@DeleteMapping("/animaltype/{animal_type_id}")
	public void delete(@PathVariable(value = "animal_type_id") long animal_type_id) {
		animaltypeService.delete(animal_type_id);
	}
}
