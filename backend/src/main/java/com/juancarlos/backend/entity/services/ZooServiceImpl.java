package com.juancarlos.backend.entity.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.juancarlos.backend.entity.dao.IZooDao;
import com.juancarlos.backend.entity.models.Zoo;

@Service
public class ZooServiceImpl implements IZooService{
	
	@Autowired
	private IZooDao zooDao;

	@Override
	public Zoo findOne(Long zoo_id) {
		return zooDao.findById(zoo_id).get();
	}

	@Override
	public List<Zoo> findAll() {
		return (List<Zoo>) zooDao.findAll();
	}

	@Override
	public void save(Zoo zoo) {
		zooDao.save(zoo);
		
	}

	@Override
	public void update(Zoo zoo, long zoo_id) {
		zooDao.findById(zoo_id).ifPresent((x)->{
			zoo.setZoo_id(x.getZoo_id());
			zooDao.save(zoo);
		});
		
	}

	@Override
	public void delete(long zoo_id) {
		zooDao.deleteById(zoo_id);
		
	}
	

}
