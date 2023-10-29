package com.juancarlos.backend.entity.models;

import java.io.Serializable;


import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "animal")
public class Animal implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long animal_id;
	
	private String name;
	
    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "zoo_id", nullable = true)
    private Zoo zoo;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "animalType_id", nullable = true)
    private AnimalType animalType;

	public long getAnimal_id() {
		return animal_id;
	}

	public void setAnimal_id(long animal_id) {
		this.animal_id = animal_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Zoo getZoo() {
		return zoo;
	}

	public void setZoo(Zoo zoo) {
		this.zoo = zoo;
	}

	public AnimalType getAnimalType() {
		return animalType;
	}

	public void setAnimalType(AnimalType animalType) {
		this.animalType = animalType;
	}

	public Animal( String name) {
		super();
		this.name = name;
	}
	
    
    public Animal() {
    	
    }
}
