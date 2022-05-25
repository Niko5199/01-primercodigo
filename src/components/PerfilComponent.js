function PerfilComponent({ name, skills }) {
  return (
    <div className="containerPerfil">
      <h1>Hola mi nombre es {name} </h1>
      <div className="containerFlex">
        <div className="containerImg">
          <img className="imagePerfil" alt="Logo Perfil"></img>
        </div>
        <div className="containerSkills">
          <p>Mis habilidades son:</p>
          <ul className="skillsList">
            {skills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <h2>Codigo Facilito</h2>
    </div>
  );
}

export default PerfilComponent;
