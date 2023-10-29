package com.juancarlos.backend.entity.models;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "zoo")
public class Zoo implements Serializable{
	
	private static final long serialVersionUID = 1L;
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long zoo_id;
	
	@Column
	private String zoo_name;
	
	@JsonIgnore
	@OneToMany(mappedBy = "zoo", cascade = CascadeType.ALL)
	private List<Animal> animals;

	public long getZoo_id() {
		return zoo_id;
	}

	public void setZoo_id(long zoo_id) {
		this.zoo_id = zoo_id;
	}

	public String getName() {
		return zoo_name;
	}

	public void setName(String zoo_name) {
		this.zoo_name = zoo_name;
	}

	public List<Animal> getAnimals() {
		return animals;
	}

	public void setAnimals(List<Animal> animals) {
		this.animals = animals;
	}

	public Zoo(String zoo_name) {
		super();
		this.zoo_name = zoo_name;
	}

	public Zoo() {
		
	}
}
