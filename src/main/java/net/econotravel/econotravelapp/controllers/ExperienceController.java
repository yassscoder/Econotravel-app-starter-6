package net.econotravel.econotravelapp.controllers;

import net.econotravel.econotravelapp.domain.Experience;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
public class ExperienceController {

    @GetMapping("/experiences")
    public List<Experience> allExperiences() {
        return List.of(
                new Experience("Paseo en bicicleta por el Montseny", BigDecimal.valueOf(13.29)),
                new Experience("Descubre la costa en barco de vela", BigDecimal.valueOf(6.80)),
                new Experience("Descubre la Barcelona Modernista de noche", BigDecimal.valueOf(4.80)),
                new Experience("Del huerto a la mesa", BigDecimal.valueOf(3.20))
        );
    }

}
