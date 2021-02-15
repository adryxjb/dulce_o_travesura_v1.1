import { Component, OnInit } from "@angular/core";
import { RegistroService } from "../services/registro.service";
import { Usuario } from "./usuario";

@Component({
  selector: "registroComponent",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {
  public titulo: string;
  /* 
  //Inicio Sin objeto Usuario   
   public nombre: string;
  public usuarios: Array<string>;

  constructor(private _registroService: RegistroService) {
    this.titulo = "Registrate";
  }

  ngOnInit() {
    this.titulo = "Registrate";
    //console.log(this.usuario);
    this.usuarios = this._registroService.getUsuario();
    console.log(this.usuarios);
  }

  guardarUsuario() {
    this._registroService.addUsuario(this.nombre);
    this.nombre = null;
  } 
  //Fin Sin objeto Usuario
  */

  public usuario: Usuario;
  public usuarios: Array<Usuario>;

  constructor(private _registroService: RegistroService) {
    this.titulo = "Registrate";
  }

  ngOnInit() {
    this.titulo = "Registrate";
    this.usuarios = this._registroService.getUsuario();
    console.log(this.usuarios);
  }

  guardarUsuario() {
    this._registroService.addUsuario(this.usuario);
    this.usuarios = null;
  }
}
