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

import com.juancarlos.backend.entity.models.Zoo;
import com.juancarlos.backend.entity.services.IZooService;


@RestController
@CrossOrigin(origins = "*")
public class ZooController {
	
	@Autowired
	IZooService zooService;
	
	@GetMapping("/zoo")
	public List<Zoo> getAllZoo(){
		return zooService.findAll();
	}
	
	@GetMapping("/zoo/{zoo_id}")
	public Zoo getZoo(@PathVariable(value = "zoo_id") long zoo_id) {
		return zooService.findOne(zoo_id);
	}
	
	@PostMapping("/zoo")
	public void save(Zoo zoo) {
		zooService.save(zoo);
	}
	
	@PutMapping("/zoo/{zoo_id}")
	public void put(Zoo zoo, @PathVariable(value = "zoo_id") long zoo_id) {
		zooService.update(zoo, zoo_id);
	}
	
	@DeleteMapping("/zoo/{zoo_id}")
	public void delete(@PathVariable(value = "zoo_id") long zoo_id) {
		zooService.delete(zoo_id);
	}
}
