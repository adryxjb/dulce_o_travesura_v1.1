import { Injectable } from "@angular/core";
import { Usuario } from "../registro/usuario";

@Injectable()
export class RegistroService {
  public titulo: string;
  /*
  //Inicio Sin objeto Usuario
  public nombre: string;
  public usuarios = ["Pedro", "Juan", "Maria", "Rosa"];

  getUsuario(): Array<string> {
    return this.usuarios;
  }

  addUsuario(nombre: string) {
    this.usuarios.push(nombre);
    return this.usuarios;
  }
  //Fin Sin objeto Usuario
*/
  public usuario: Usuario;
  public usuarios: Array<Usuario>;

  getUsuario(): Array<Usuario> {
    return this.usuarios;
  }

  addUsuario(nuevo_usuario: Usuario) {
    return this.usuario;
  }
}
