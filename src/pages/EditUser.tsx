import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const EditUser = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return null;
  }

  const { usuario, setUsuario } = authContext;
  const [novoNome, setNovoNome] = useState(usuario ? usuario.nome : '');

  const atualizarUsuario = () => {
    const usuarioAtualizado = { ...usuario, nome: novoNome };
    setUsuario(usuarioAtualizado);
    localStorage.setItem('usuario', JSON.stringify(usuarioAtualizado));
  };

  return (
    <div>
      <h2>Editar Usuário</h2>
      <input
        type="text"
        value={novoNome}
        onChange={(e) => setNovoNome(e.target.value)}
      />
      <button onClick={atualizarUsuario}>Salvar</button>
    </div>
  );
};

export default EditUser;
