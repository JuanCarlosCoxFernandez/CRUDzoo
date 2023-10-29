package com.juancarlos.backend.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.juancarlos.backend.entity.models.Zoo;

public interface IZooDao extends CrudRepository<Zoo, Long>{

}
