import { LSM } from "../localStorage/localStorageManager.js";

export default () => {
  //LSM.RESET(); //RESETEA EL LOCALSTORAGE
  if (!localStorage.getItem("localQuizzes")) {
    LSM.createItem("localQuizzes");

    LSM.addQuiz(
      "¿Quién definió la salud pública como el arte y ciencia de prevenir enfermedades y prolongar la vida?",
      "Winslow",
      "Winslow definió la salud pública en los años 20 con un enfoque higiénico y colectivo.",
      ["Hanlon", "Frenk", "Piédrola Gil"]
    );
    
    LSM.addQuiz(
      "¿Qué autor incorporó el concepto de restauración de la salud en su definición?",
      "Piédrola Gil",
      "Piédrola amplió el enfoque incluyendo protección, promoción y restauración.",
      ["Winslow", "Terris", "Hanlon"]
    );
    
    LSM.addQuiz(
      "¿Qué autor propuso que la salud pública opera a nivel poblacional?",
      "Frenk",
      "Frenk diferencia entre los niveles subindividual, individual y poblacional.",
      ["Testa", "Hanlon", "Engel"]
    );
    
    LSM.addQuiz(
      "¿Qué autor concibe la salud pública como una práctica social construida históricamente?",
      "Testa",
      "Testa aporta una visión sociopolítica del concepto de salud.",
      ["Winslow", "Terris", "Hanlon"]
    );
    
    LSM.addQuiz(
      "¿Qué organismo propuso una definición regional en el año 2002?",
      "OPS",
      "La OPS la formuló dentro de la Iniciativa de Salud Pública de las Américas.",
      ["OMS", "UNICEF", "PAHO"]
    );
    
    LSM.addQuiz(
      "¿Cuál es el objetivo principal de la salud pública?",
      "Mejorar la salud de la población",
      "La salud pública se orienta al bienestar colectivo, no solo individual.",
      ["Tratar pacientes", "Reducir costos", "Atender urgencias"]
    );
    
    LSM.addQuiz(
      "¿Qué disciplina no pertenece a las que integran la salud pública?",
      "Astronomía",
      "Aunque diversas ciencias se integran, la astronomía no es una de ellas.",
      ["Estadística", "Psicología", "Economía"]
    );
    
    LSM.addQuiz(
      "¿Cuál es una Función Esencial de la Salud Pública?",
      "Promoción de la salud",
      "FESP 3 se enfoca en empoderar estilos de vida saludables.",
      ["Diagnóstico médico", "Curación individual", "Cirugías públicas"]
    );
    
    LSM.addQuiz(
      "¿Cuál FESP corresponde al monitoreo de salud poblacional?",
      "FESP 1",
      "El monitoreo es la base para detectar y priorizar problemas de salud.",
      ["FESP 3", "FESP 6", "FESP 8"]
    );
    
    LSM.addQuiz(
      "¿Qué FESP se enfoca en vigilancia, investigación y control de riesgos?",
      "FESP 2",
      "Implica responder ante amenazas como epidemias o contaminaciones.",
      ["FESP 1", "FESP 5", "FESP 9"]
    );
    
    LSM.addQuiz(
      "¿Qué función esencial corresponde a la promoción de salud?",
      "FESP 3",
      "Busca influir en los comportamientos saludables de la población.",
      ["FESP 2", "FESP 6", "FESP 7"]
    );
    
    LSM.addQuiz(
      "¿Cuál FESP garantiza calidad en servicios de salud?",
      "FESP 9",
      "Evalúa la efectividad, seguridad y satisfacción de los servicios.",
      ["FESP 3", "FESP 4", "FESP 10"]
    );
    
    LSM.addQuiz(
      "¿Qué FESP se relaciona con equidad en el acceso a servicios?",
      "FESP 7",
      "Promueve que todos tengan acceso, sin importar su condición social.",
      ["FESP 2", "FESP 6", "FESP 10"]
    );
    
    LSM.addQuiz(
      "¿Qué actividad pública corresponde al control del agua y alimentos?",
      "Protección de la salud",
      "Se enfoca en prevenir riesgos ambientales que afectan la salud.",
      ["Restauración de la salud", "Prevención secundaria", "Promoción de la salud"]
    );
    
    LSM.addQuiz(
      "¿Qué acción corresponde a la promoción de salud?",
      "Educación sanitaria comunitaria",
      "Busca generar conciencia sobre estilos de vida saludables.",
      ["Diagnóstico por imagen", "Hospitalización", "Tamizaje clínico"]
    );
    
    LSM.addQuiz(
      "¿Qué actividad corresponde a la restauración de la salud?",
      "Tratamiento hospitalario",
      "Se realiza cuando la enfermedad ya está presente y se busca recuperar la salud.",
      ["Campañas de vacunación", "Promoción educativa", "Mejora del entorno"]
    );
    
    LSM.addQuiz(
      "¿Qué actividad se relaciona con la prevención primaria?",
      "Vacunación",
      "La prevención primaria actúa antes de que ocurra la enfermedad.",
      ["Quimioterapia", "Rehabilitación", "Diálisis"]
    );
    
    LSM.addQuiz(
      "¿Qué etapa describe lesiones sin síntomas clínicos visibles?",
      "Período subclínico",
      "En esta etapa hay daño anatómico o funcional sin signos claros.",
      ["Prepatogénico", "Clínico", "Prodrómico"]
    );
    
    LSM.addQuiz(
      "¿Qué etapa incluye síntomas vagos y generales?",
      "Período prodrómico",
      "Aquí los síntomas no son específicos, dificultando el diagnóstico.",
      ["Período clínico", "Resolución", "Subclínico"]
    );
    
    LSM.addQuiz(
      "¿Qué nivel de prevención intenta detectar enfermedades tempranas?",
      "Prevención secundaria",
      "Utiliza pruebas de tamizaje para encontrar casos no diagnosticados.",
      ["Primaria", "Terciaria", "Cuaternaria"]
    );
    
    LSM.addQuiz(
      "¿Qué acción pertenece a la prevención terciaria?",
      "Rehabilitación de secuelas",
      "Busca mejorar la calidad de vida tras la enfermedad.",
      ["Vacunación", "Detección precoz", "Campaña educativa"]
    );
    
    LSM.addQuiz(
      "¿Cuál es una concepción biológica de la salud?",
      "Somático-fisiológica",
      "Define salud como el correcto funcionamiento físico del cuerpo.",
      ["Político-legal", "Cultural", "Ecológica"]
    );
    
    LSM.addQuiz(
      "¿Qué concepción incorpora el entorno físico y social?",
      "Sanitaria",
      "Es la visión de salud pública enfocada en lo colectivo.",
      ["Somática", "Psíquica", "Económica"]
    );
    
    LSM.addQuiz(
      "¿Qué concepción se basa en la influencia de la cultura sobre la salud?",
      "Cultural",
      "Cada grupo social define salud según su contexto cultural.",
      ["Biologicista", "Económica", "Clínica"]
    );
    
    LSM.addQuiz(
      "¿Qué modelo representa la interacción entre huésped, agente y ambiente?",
      "Triada ecológica",
      "Es un modelo biologicista que describe la causa de enfermedades.",
      ["Modelo biopsicosocial", "Modelo clínico", "Modelo de Lalonde"]
    );
    
  }

  console.log(LSM.getLocalQuizzes());
};
