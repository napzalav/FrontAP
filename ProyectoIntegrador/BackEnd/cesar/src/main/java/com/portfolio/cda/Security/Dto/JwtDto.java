/*cda
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 
*/
package com.portfolio.cda.Security.Dto;

import java.util.Collection;
import org.springframework.security.core.GrantedAuthority;

/**
 *
 * @author Cesar
 */
public class JwtDto {
    private String token;
    private String bearer = "Bearer";
    private String nombreusuario;
    private Collection<? extends GrantedAuthority> authorities;
    
    //Constructor

    public JwtDto(String token, String nombreusuario, Collection<? extends GrantedAuthority> authorities) {
        this.token = token;
        this.nombreusuario = nombreusuario;
        this.authorities = authorities;
    }
    
    
    //Getters y Setters

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getBearer() {
        return bearer;
    }

    public void setBearer(String bearer) {
        this.bearer = bearer;
    }

    public String getNombreusuario() {
        return nombreusuario;
    }

    public void setNombreusuario(String nombreusuario) {
        this.nombreusuario = nombreusuario;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }
    
}
