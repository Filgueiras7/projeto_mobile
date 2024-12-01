import React from 'react';

const JobComponent = ({ vaga }) => {
  const redirecionarParaWhatsApp = () => {
    const numeroWhatsApp = '71988774991'; 
    window.location.href = `https://wa.me/${71988774991}`;
  };

  return (
    <div>
      <h2>{vaga.titulo}</h2>
      <p>{vaga.descricao}</p>
      {vaga.status === 'aberta' && (
        <button onClick={redirecionarParaWhatsApp}>Contato</button>
      )}
    </div>
  );
};

export default JobComponent;
