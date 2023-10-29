package com.juancarlos.backend.entity.services;

import java.util.List;

import com.juancarlos.backend.entity.models.Zoo;

public interface IZooService {
	
	public Zoo findOne(Long zoo_id);
	public List<Zoo> findAll();
	public void save(Zoo zoo);
	public void update(Zoo zoo, long zoo_id);
	public void delete(long zoo_id);

}
