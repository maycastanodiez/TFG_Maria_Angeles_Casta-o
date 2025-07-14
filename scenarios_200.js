const allScenarios = [
  {
    "question": "Un paciente te pide enviarle datos médicos por WhatsApp. ¿Qué haces?",
    "options": [
      "Accedo por ayudar",
      "Me niego y explico los canales oficiales",
      "Lo derivo al médico responsable"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Me niego y explico los canales oficiales'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Ves un compañero dejando su sesión abierta. ¿Qué haces?",
    "options": [
      "Lo ignoro",
      "La bloqueo y se lo aviso",
      "Uso su sesión rápidamente"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'La bloqueo y se lo aviso'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un correo con asunto 'asunto sospechoso '. ¿Qué haces?",
    "options": [
      "Lo abro sin pensar",
      "Lo borro sin abrir",
      "Lo reporto como sospechoso"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Lo reporto como sospechoso'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Encuentras un USB tirado en el pasillo. ¿Qué haces?",
    "options": [
      "Lo conecto al ordenador",
      "Lo entrego al departamento TIC",
      "Lo dejo en el mostrador"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo entrego al departamento TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un email del 'CEO' te pide urgentemente que hagas una transferencia. ¿Qué haces?",
    "options": [
      "La realizo, es el CEO",
      "Verifico la solicitud por otro medio (teléfono, reunión)",
      "Lo ignoro"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico la solicitud por otro medio (teléfono, reunión)'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un compañero te pide tu contraseña para acceder a un sistema. ¿Qué haces?",
    "options": [
      "Se la doy, confío en él",
      "Me niego y le explico las políticas de seguridad",
      "Accedo yo mismo con su cuenta"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Me niego y le explico las políticas de seguridad'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una llamada diciendo que tu ordenador tiene un virus y piden acceso remoto. ¿Qué haces?",
    "options": [
      "Les doy acceso inmediatamente",
      "Cuelgo y contacto al departamento TIC",
      "Intento solucionarlo yo mismo"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Cuelgo y contacto al departamento TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Instalas una app no oficial en tu móvil del trabajo. ¿Qué haces?",
    "options": [
      "No pasa nada",
      "La desinstalo y aviso a TIC",
      "Se lo comento a un compañero"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'La desinstalo y aviso a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Te solicitan tu contraseña por teléfono indicando ser de soporte técnico. ¿Qué haces?",
    "options": [
      "La proporciono si suena convincente",
      "La pido por escrito",
      "No la doy y reporto el incidente"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'No la doy y reporto el incidente'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un correo te informa que tu cuenta será suspendida si no haces clic en un enlace. ¿Qué haces?",
    "options": [
      "Hago clic para verificar",
      "Verifico el remitente y reporto si es sospechoso",
      "Lo ignoro y lo muevo a spam"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico el remitente y reporto si es sospechoso'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Necesitas enviar un archivo grande y confidencial a un colega. ¿Qué haces?",
    "options": [
      "Lo envío por correo personal",
      "Utilizo la plataforma segura del hospital (si existe)",
      "Lo subo a un servicio de almacenamiento en la nube no corporativo"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Utilizo la plataforma segura del hospital (si existe)'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Ves un pop-up en tu navegador que dice que tu ordenador está infectado. ¿Qué haces?",
    "options": [
      "Hago clic para descargar el software antivirus recomendado",
      "Cierro la ventana y aviso a TIC",
      "Reinicio el ordenador sin hacer nada más"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Cierro la ventana y aviso a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Estás en una cafetería y necesitas revisar un informe confidencial. ¿Qué haces?",
    "options": [
      "Uso la Wi-Fi pública sin protección",
      "Utilizo mi conexión de datos móviles o una VPN del hospital",
      "Espero a llegar al hospital para revisar el informe"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Utilizo mi conexión de datos móviles o una VPN del hospital'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una invitación de calendario sospechosa de un remitente desconocido. ¿Qué haces?",
    "options": [
      "La acepto para ver los detalles",
      "La elimino directamente y bloqueo al remitente",
      "La reenvío a soporte TIC para que la revisen"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'La elimino directamente y bloqueo al remitente'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un compañero te pide que le dejes usar tu ordenador un momento para 'un tema urgente'. ¿Qué haces?",
    "options": [
      "Se lo presto si veo que tiene prisa",
      "Le pido que use su propio equipo o le ayudo yo si es un acceso sencillo y permitido",
      "Bloqueo mi sesión y le pido que inicie la suya"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Bloqueo mi sesión y le pido que inicie la suya'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un mensaje de texto de un número desconocido con un enlace para 'actualizar tus datos bancarios'. ¿Qué haces?",
    "options": [
      "Hago clic en el enlace para no perder mis datos",
      "Lo borro inmediatamente y no hago clic",
      "Intento llamar al número para verificar"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo borro inmediatamente y no hago clic'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Descargas un archivo de internet que te parece útil para tu trabajo pero no sabes si es seguro. ¿Qué haces?",
    "options": [
      "Lo abro directamente para ver si funciona",
      "Lo escaneo con el antivirus del hospital antes de abrirlo",
      "Lo comparto con compañeros para que lo revisen"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo escaneo con el antivirus del hospital antes de abrirlo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Alguien te envía por redes sociales un enlace a una noticia muy interesante, pero de una fuente desconocida. ¿Qué haces?",
    "options": [
      "Hago clic para leer la noticia",
      "Copio el título y lo busco en una fuente de noticias fiable",
      "Se lo envío a un amigo para que lo revise primero"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Copio el título y lo busco en una fuente de noticias fiable'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Tu supervisor te pide los datos de inicio de sesión de un paciente para una auditoría urgente. ¿Qué haces?",
    "options": [
      "Se los proporciono, es mi supervisor",
      "Me niego y le indico el procedimiento oficial de acceso a datos para auditorías",
      "Los busco y se los dicto por teléfono"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Me niego y le indico el procedimiento oficial de acceso a datos para auditorías'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Ves a alguien intentando entrar en una zona restringida con una tarjeta de acceso que no funciona. ¿Qué haces?",
    "options": [
      "Le abro la puerta para ayudarle",
      "Le pregunto por qué necesita entrar y si tiene autorización",
      "Ignoro la situación"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Le pregunto por qué necesita entrar y si tiene autorización'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un correo con el asunto 'Error de Facturación'. ¿Qué haces?",
    "options": [
      "Lo abro inmediatamente para ver la factura",
      "Verifico el remitente y la validez de la factura antes de abrirlo",
      "Lo borro sin más si no espero ninguna factura"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico el remitente y la validez de la factura antes de abrirlo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un compañero te pide que te conectes a su cuenta para 'un segundo' desde tu ordenador. ¿Qué haces?",
    "options": [
      "Accedo para agilizar el trabajo",
      "Le indico que use su propia cuenta y equipo",
      "Le pregunto para qué necesita mi ordenador"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Le indico que use su propia cuenta y equipo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Encuentras un documento confidencial impreso en la impresora de la zona común. ¿Qué haces?",
    "options": [
      "Lo leo para ver de qué trata",
      "Lo guardo o entrego a la persona responsable",
      "Lo dejo allí, alguien lo recogerá"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo guardo o entrego a la persona responsable'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una alerta de seguridad en tu móvil de trabajo que no reconoces. ¿Qué haces?",
    "options": [
      "La cierro sin más",
      "Busco información sobre la alerta o contacto a TIC",
      "Reinicio el móvil"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Busco información sobre la alerta o contacto a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Te llega un mensaje de un número desconocido diciendo '¿Eres tú en este video?'. ¿Qué haces?",
    "options": [
      "Hago clic por curiosidad",
      "Lo borro y bloqueo el número",
      "Lo reenvío a un amigo para que lo vea"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo borro y bloqueo el número'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Almacenas información sensible de pacientes en tu disco duro personal. ¿Qué haces?",
    "options": [
      "No pasa nada, es solo para mi",
      "La borro y uso solo los sistemas oficiales",
      "La cifro para protegerla"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'La borro y uso solo los sistemas oficiales'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un consultor externo te pide acceso a una base de datos con datos de pacientes. ¿Qué haces?",
    "options": [
      "Le doy acceso, confío en los consultores",
      "Verifico su autorización con la dirección y sigo los protocolos de acceso",
      "Le digo que se ponga en contacto con el DPO"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico su autorización con la dirección y sigo los protocolos de acceso'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Te conectas a la red WiFi de 'Invitados' con tu portátil del trabajo. ¿Qué haces?",
    "options": [
      "No pasa nada, es una red del hospital",
      "La uso solo para navegar por internet no confidencial",
      "Me aseguro de usar la red corporativa segura o VPN"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Me aseguro de usar la red corporativa segura o VPN'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una llamada automática que te pide confirmar tu número de seguridad social. ¿Qué haces?",
    "options": [
      "Lo confirmo, parece oficial",
      "Cuelgo inmediatamente",
      "Intento llamar de vuelta al número"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Cuelgo inmediatamente'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un colega te envía un archivo ejecutable (.exe) por correo diciendo que es una 'actualización'. ¿Qué haces?",
    "options": [
      "Lo abro e instalo inmediatamente",
      "Lo elimino y le pregunto a mi colega por qué me lo envió",
      "Lo reenvío a TIC sin abrirlo"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Lo reenvío a TIC sin abrirlo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Estás trabajando con datos de pacientes y necesitas dejar el puesto un momento. ¿Qué haces?",
    "options": [
      "Dejo la sesión abierta, vuelvo en un minuto",
      "Bloqueo la pantalla para proteger los datos",
      "Pido a un compañero que vigile mi sesión"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Bloqueo la pantalla para proteger los datos'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un aviso en tu pantalla dice '¡Su equipo ha sido cifrado! Pague un rescate'. ¿Qué haces?",
    "options": [
      "Pago el rescate para recuperar mis archivos",
      "Apago el equipo inmediatamente y aviso a TIC",
      "Intento descifrar los archivos yo mismo"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Apago el equipo inmediatamente y aviso a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un compañero te envía un enlace por chat interno con el texto 'mira este paciente'. ¿Qué haces?",
    "options": [
      "Hago clic directamente, es un compañero",
      "Le pregunto a mi compañero si el enlace es seguro o qué contiene exactamente",
      "Lo reporto como posible phishing"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Le pregunto a mi compañero si el enlace es seguro o qué contiene exactamente'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Te piden instalar un software de un proveedor externo que no está homologado por TIC. ¿Qué haces?",
    "options": [
      "Lo instalo si parece útil",
      "No lo instalo y pregunto a TIC si está autorizado",
      "Lo instalo y luego pregunto a TIC"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'No lo instalo y pregunto a TIC si está autorizado'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una notificación de una red social sobre un evento de empresa. ¿Qué haces?",
    "options": [
      "Hago clic y pongo mis credenciales para ver el evento",
      "Busco el evento directamente en la web oficial de la empresa",
      "Ignoro la notificación"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Busco el evento directamente en la web oficial de la empresa'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Actualizas tu sistema operativo solo cuando te lo exige el ordenador. ¿Qué haces?",
    "options": [
      "Siempre lo hago, es automático",
      "Lo configuro para actualizaciones automáticas y periódicas",
      "Las pospongo hasta que sea realmente necesario"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo configuro para actualizaciones automáticas y periódicas'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un paciente te trae un CD con sus antecedentes médicos para que los veas en tu ordenador. ¿Qué haces?",
    "options": [
      "Lo inserto directamente para revisarlo",
      "Lo entrego a la unidad de registros médicos para que lo escaneen y procesen",
      "Lo rechazo indicando que no aceptamos medios externos"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo entrego a la unidad de registros médicos para que lo escaneen y procesen'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Ves a alguien que no lleva identificación accediendo a una zona restringida. ¿Qué haces?",
    "options": [
      "Asumo que es nuevo o se le ha olvidado",
      "Le pregunto quién es y qué hace allí",
      "Aviso a seguridad o a mi supervisor"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Aviso a seguridad o a mi supervisor'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un email de un proveedor conocido con un archivo adjunto que no esperabas. ¿Qué haces?",
    "options": [
      "Lo abro directamente, confío en el remitente",
      "Contacto al proveedor por otro medio para verificar la autenticidad del email",
      "Lo elimino por si acaso"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Contacto al proveedor por otro medio para verificar la autenticidad del email'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Tu cuenta de correo personal es la misma que usas para el trabajo. ¿Qué haces?",
    "options": [
      "No hay problema, es más cómodo",
      "Utilizo una contraseña fuerte y diferente para cada una",
      "Creo una cuenta de correo separada y exclusiva para el trabajo"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Creo una cuenta de correo separada y exclusiva para el trabajo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Necesitas desechar documentos con información de pacientes. ¿Qué haces?",
    "options": [
      "Los tiro a la papelera normal",
      "Los trituro o los deposito en los contenedores de destrucción segura",
      "Los rompo con la mano y los tiro"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Los trituro o los deposito en los contenedores de destrucción segura'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Una ventana emergente te pide 'actualizar Java'. ¿Qué haces?",
    "options": [
      "Hago clic en 'Actualizar ahora'",
      "Cierro la ventana y busco actualizaciones en la web oficial de Java o TIC",
      "Dejo la ventana abierta hasta que desaparezca"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Cierro la ventana y busco actualizaciones en la web oficial de Java o TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un colega te pide que le imprimas un documento confidencial desde tu ordenador. ¿Qué haces?",
    "options": [
      "Lo imprimo sin problema",
      "Le indico que él mismo debe imprimirlo desde su sesión o equipo autorizado",
      "Le digo que se lo imprima en casa"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Le indico que él mismo debe imprimirlo desde su sesión o equipo autorizado'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Te envían un enlace por SMS que dice '¡Felicidades, has ganado un premio!'. ¿Qué haces?",
    "options": [
      "Hago clic para reclamar mi premio",
      "Lo borro inmediatamente sin hacer clic",
      "Respondo preguntando de qué se trata"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo borro inmediatamente sin hacer clic'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Dejas tu portátil personal conectado a la red corporativa. ¿Qué haces?",
    "options": [
      "No hay problema, es mi portátil",
      "Me aseguro de que cumple con las políticas de seguridad del hospital",
      "Lo desconecto y utilizo solo equipos corporativos para trabajo"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Lo desconecto y utilizo solo equipos corporativos para trabajo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes una solicitud de amistad en una red profesional de alguien que no conoces. ¿Qué haces?",
    "options": [
      "La acepto para ampliar mi red de contactos",
      "Reviso su perfil y si parece legítimo, la acepto",
      "La rechazo si no lo conozco personalmente o no tiene conexión directa con mi trabajo"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'La rechazo si no lo conozco personalmente o no tiene conexión directa con mi trabajo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un colega te pide que revises un archivo en un sistema al que él tiene acceso y tú no. ¿Qué haces?",
    "options": [
      "Le pido sus credenciales para acceder y ayudarle",
      "Le indico que me envíe el archivo por un medio seguro o que lo revise él mismo",
      "Le digo que no puedo ayudarle"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Le indico que me envíe el archivo por un medio seguro o que lo revise él mismo'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Instalas una extensión en tu navegador del trabajo para 'mayor productividad'. ¿Qué haces?",
    "options": [
      "La instalo sin pensar si es útil",
      "Verifico que la extensión sea de una fuente confiable y no tenga permisos excesivos",
      "Preparo un informe para TIC para que la revisen"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico que la extensión sea de una fuente confiable y no tenga permisos excesivos'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un correo con el asunto 'Tu paquete no ha podido ser entregado'. ¿Qué haces?",
    "options": [
      "Hago clic en el enlace para reprogramar la entrega",
      "Verifico el número de seguimiento en la web oficial del transportista",
      "Lo borro si no espero ningún paquete"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Verifico el número de seguimiento en la web oficial del transportista'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Estás hablando de un paciente en un lugar público y hay gente cerca. ¿Qué haces?",
    "options": [
      "Continuo la conversación en voz baja",
      "Me muevo a un lugar privado o pospongo la conversación",
      "Solo doy detalles muy generales"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Me muevo a un lugar privado o pospongo la conversación'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Tu antivirus te notifica una amenaza. ¿Qué haces?",
    "options": [
      "Lo ignoro si no me molesta el ordenador",
      "Sigo las instrucciones del antivirus (cuarentena/eliminar) y aviso a TIC",
      "Deshabilito el antivirus temporalmente"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Sigo las instrucciones del antivirus (cuarentena/eliminar) y aviso a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Un colega te envía una memoria USB de su casa con fotos de las vacaciones. ¿Qué haces?",
    "options": [
      "La conecto a mi ordenador del trabajo para verlas",
      "La guardo sin conectarla",
      "Le pido que me las envíe por un método seguro (nube personal, correo electrónico)"
    ],
    "correct": 2,
    "explanation": "La opción correcta es 'Le pido que me las envíe por un método seguro (nube personal, correo electrónico)'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Ves un cargador de móvil desconocido conectado a un puerto USB de un ordenador del hospital. ¿Qué haces?",
    "options": [
      "Lo ignoro, es solo un cargador",
      "Lo desconecto y lo reporto a TIC",
      "Conecto mi móvil para cargarlo"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Lo desconecto y lo reporto a TIC'. Se recomienda actuar con precaución ante estos casos."
  },
  {
    "question": "Recibes un correo diciendo 'Su cuenta de Microsoft ha sido bloqueada. Verifique aquí'. ¿Qué haces?",
    "options": [
      "Hago clic para desbloquearla",
      "Accedo a Microsoft por la vía habitual y compruebo mi cuenta, si no, lo reporto a TIC",
      "Lo borro sin más"
    ],
    "correct": 1,
    "explanation": "La opción correcta es 'Accedo a Microsoft por la vía habitual y compruebo mi cuenta, si no, lo reporto a TIC'. Se recomienda actuar con precaución ante estos casos."
  }
];