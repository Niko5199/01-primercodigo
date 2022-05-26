import SkillComponent from "./SkillComponent";
//import Perfil from "../images/perfil.js";

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
              <SkillComponent key={skill.id} {...skill}></SkillComponent>
            ))}
          </ul>
        </div>
      </div>
      <h2>Codigo Facilito</h2>
    </div>
  );
}

export default PerfilComponent;
