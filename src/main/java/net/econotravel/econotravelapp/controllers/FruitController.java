package net.econotravel.econotravelapp.controllers;

import net.econotravel.econotravelapp.domain.Fruit;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class FruitController {

    @GetMapping("/fruits")
    public List<Fruit> allFruits(){
        return List.of(
                new Fruit("Manzana", BigDecimal.valueOf(13.29), 200),
                new Fruit("Pera", BigDecimal.valueOf(6.80), 450),
                new Fruit("Sandía", BigDecimal.valueOf(4.80), 300)
        );
    }

}
