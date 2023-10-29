package com.juancarlos.backend.entity.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "animaltype")
public class AnimalType implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long animal_type_id;
	
	private String type_name;
	
	@JsonIgnore
	@OneToMany(mappedBy = "animalType", cascade = CascadeType.ALL)
    private List<Animal> animals;

	public long getAnimalType_id() {
		return animal_type_id;
	}

	public void setAnimalType_id(long animal_type_id) {
		this.animal_type_id = animal_type_id;
	}

	public String getType_name() {
		return type_name;
	}

	public void setType_name(String type_name) {
		this.type_name = type_name;
	}

	public List<Animal> getAnimals() {
		return animals;
	}

	public void setAnimals(List<Animal> animals) {
		this.animals = animals;
	}

	public AnimalType(String type_name) {
		super();
		this.type_name = type_name;
	}
	
	public AnimalType() {
		
	}
	
}
