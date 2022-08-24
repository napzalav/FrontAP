package com.portfolio.cda.Controller;

import com.portfolio.cda.Entity.Persona;
import com.portfolio.cda.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin

public class PersonaController {

    @Autowired
    private IPersonaService ipersonaService;

    @GetMapping("personas/traer")
    public List<Persona> getPersona() {
        return ipersonaService.getPersona();
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona) {
        ipersonaService.savePersona(persona);
        return "La persona fue creada correctamente";
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/personas/borrar/{id}")
    public String deletePersona(@PathVariable Long id) {
        ipersonaService.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }

    //URL:PUERTO/personas/editar/4(id)/nombre & apellido & img
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/personas/editar(id)")
    public Persona editPersona(@PathVariable ("id") Long id,
            @RequestBody Persona personaNueva,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("apellido") String nuevoApellido,
            @RequestParam("img") String nuevoImg) {
        Persona persona = ipersonaService.findPersona(id);

        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);

        ipersonaService.savePersona(persona);
        return persona;
    }

    @GetMapping("/personas/traer/perfil")
    public Persona findPersona() {
        return ipersonaService.findPersona((long) 1);
    }

}

/*
@PreAuthorize("hasRole('ADMIN')")
@PutMapping("/personas/editar(id)")
public Persona editPersona(@PathVariable ("id") Long id,
        @RequestBody Persona personaNueva,
        @RequestParam("nombre") String nuevoNombre,
        @RequestParam("apellido") String nuevoApellido,
        @RequestParam("img") String nuevoImg) {
    Persona persona = ipersonaService.findPersona(id);

    persona.setNombre(nuevoNombre);
    persona.setApellido(nuevoApellido);
    persona.setImg(nuevoImg);

    ipersonaService.savePersona(persona);
    return persona;
}



@PutMapping("/update/{id}")
public Experiencia editExperiencia(@PathVariable("id") Long id, @RequestBody Experiencia experienciaNueva) {
        Experiencia experiencia = iExperiencia.findExperiencia(id);
       
        experiencia.setEmpresa(experienciaNueva.getEmpresa());
        experiencia.setDesde(experienciaNueva.getDesde());
        experiencia.setHasta(experienciaNueva.getHasta());
        experiencia.setDescripcion(experienciaNueva.getDescripcion());
       
        iExperiencia.saveExperiencia(experiencia);
        return experiencia;
    }
*/