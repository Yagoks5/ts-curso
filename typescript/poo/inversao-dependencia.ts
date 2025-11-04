// inversão de dependencia.ts

interface RepositorioDeUsuarios {
  salvar(usuario: Usuario): void;
}

class Usuario {
  constructor(public nome: string, public email: string) {}
}

class RepositorioDeUsuariosMySQL implements RepositorioDeUsuarios {
  salvar(usuario: Usuario): void {
    console.log(`Salvando usuário ${usuario.nome} no banco de dados MySQL.`);
    // Lógica para salvar o usuário no MySQL
  }
}

class RepositorioDeUsuariosMongoDB implements RepositorioDeUsuarios {
  salvar(usuario: Usuario): void {
    console.log(`Salvando usuário ${usuario.nome} no banco de dados MongoDB.`);
    // Lógica para salvar o usuário no MongoDB
  }
}

class ServicoDeUsuarios {
  constructor(private repositorio: RepositorioDeUsuarios) {}

  registrarUsuario(nome: string, email: string): void {
    const usuario = new Usuario(nome, email);
    this.repositorio.salvar(usuario);
  }
}

// Uso
const repositorioMySQL = new RepositorioDeUsuariosMySQL();
const servicoDeUsuariosMySQL = new ServicoDeUsuarios(repositorioMySQL);
servicoDeUsuariosMySQL.registrarUsuario("João", "joao@example.com");
