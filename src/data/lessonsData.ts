import { Lesson } from '../types';

export const LESSONS_DATA: Lesson[] = [
  {
    id: 'leccion-1',
    title: 'Fundamentos de Gestión de Residuos',
    category: 'Módulo I: Principios y Marco Técnico',
    readingTime: '5 min de lectura',
    summary: 'Aprende los conceptos esenciales de la gestión integral de residuos sólidos en empresas peruanas, la jerarquía de manejo y el rol de un supervisor SSOMA.',
    content: [
      {
        sectionTitle: '1. ¿Qué es un residuo sólido y qué abarca la gestión integral?',
        paragraphs: [
          'En el contexto ambiental y laboral del Perú, un residuo sólido es cualquier objeto, material, sustancia o elemento resultante del consumo o uso de un bien o servicio del cual su poseedor se desprende o tiene la obligación legal de desprenderse.',
          'La gestión integral comprende todas las actividades técnicas y administrativas de planificación, coordinación, diseño, aplicación y evaluación para asegurar un manejo sanitario y ambientalmente adecuado, priorizando siempre la valorización antes que la disposición final.'
        ],
        keyPoints: [
          'Se clasifica por ámbito de gestión en Municipal (domiciliario, barrido, comercial) y No Municipal (actividades industriales, mineras, agrarias, de salud, construcción).',
          'Se clasifica por su peligrosidad en Residuos Peligrosos y Residuos No Peligrosos.'
        ]
      },
      {
        sectionTitle: '2. La Jerarquía de Gestión de Residuos en las Empresas',
        paragraphs: [
          'Todo supervisor SSOMA debe promover una cultura operativa basada en la jerarquía de manejo recomendada por los estándares ambientales peruanos:',
          '1° Prevención y Minimización en origen: Evitar generar residuos mediante ecodiseño, compras responsables y optimización de insumos.',
          '2° Valorización material o energética: Reutilización, reciclaje, compostaje y aprovechamiento energético.',
          '3° Disposición final segura: Solo como última alternativa en rellenos sanitarios o de seguridad debidamente autorizados.'
        ],
        regulationNote: 'Principio de Responsabilidad Compartida: Quien genera el residuo en su actividad productiva es responsable de su manejo seguro hasta su destino final adecuado.'
      },
      {
        sectionTitle: '3. El Rol Clave del Supervisor SSOMA',
        paragraphs: [
          'El supervisor de Seguridad, Salud Ocupacional y Medio Ambiente (SSOMA) no es solo un inspector; es el facilitador del cumplimiento ambiental. Debe diagnosticar fuentes generadoras, capacitar a los colaboradores en planta, monitorear el acondicionamiento correcto y fiscalizar que los operadores contratados cuenten con las autorizaciones vigentes.'
        ]
      }
    ],
    businessExample: {
      companyName: 'Manufacturas del Mantaro S.A.C.',
      rubro: 'Fábrica de hilados y prendas industriales (Huancayo, Junín)',
      scenario: 'La empresa generaba mensualmente 4 toneladas de retazos de tela, conos plásticos y cajas de cartón que se mezclaban en un solo contenedor abierto en el patio trasero.',
      actionTaken: 'El nuevo supervisor SSOMA realizó un diagnóstico inicial: identificó que los retazos de tela podían reutilizarse como relleno textil y los conos plásticos podían devolverse al proveedor de hilado mediante un acuerdo de logística inversa.',
      ssomaLearning: 'Al aplicar la jerarquía de residuos (reutilización y retorno al proveedor), redujeron un 65% el volumen enviado a disposición final, ahorrando costos logísticos y eliminando focos de contaminación en planta.'
    },
    questions: [
      {
        id: 'l1-q1',
        question: '¿Cuál es la primera prioridad en la jerarquía de la gestión integral de residuos sólidos?',
        options: [
          'La incineración controlada con recuperación de energía.',
          'La prevención o minimización de residuos en la fuente u origen.',
          'El confinamiento en un relleno de seguridad autorizado.',
          'La recolección diaria por una empresa operadora.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. La jerarquía técnica y legal prioriza la prevención o minimización en origen frente a cualquier otra alternativa, seguida de la valorización (reciclaje/reutilización) y dejando la disposición final como última opción.'
      },
      {
        id: 'l1-q2',
        question: '¿En qué ámbito de gestión se clasifican los residuos generados en talleres mecánicos, plantas textiles o minas?',
        options: [
          'Ámbito de gestión municipal domiciliaria.',
          'Ámbito de gestión no municipal.',
          'Ámbito de saneamiento urbano comunal.',
          'Ámbito informal de recojo primario.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. Las actividades productivas, extractivas y de servicios (industria, minería, hidrocarburos, construcción, agroindustria) pertenecen al ámbito de gestión no municipal.'
      },
      {
        id: 'l1-q3',
        question: 'Si una empresa contrata a un tercero para el transporte y disposición de sus residuos, ¿deja de ser responsable de lo que ocurra?',
        options: [
          'Sí, toda responsabilidad se transfiere inmediatamente al chofer del camión.',
          'No, el generador mantiene responsabilidad de verificar que la empresa operadora esté formalmente autorizada y garantizar un manejo seguro.',
          'Sí, siempre y cuando el pago se realice en efectivo contra entrega.',
          'Solo es responsable si se trata de papel y cartón limpio.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. La contratación de terceros no exime al generador de verificar que la Empresa Operadora de Residuos Sólidos (EO-RS) cuente con registro vigente, ni de asegurar el destino final adecuado.'
      }
    ]
  },
  {
    id: 'leccion-2',
    title: 'Identificación y Segregación',
    category: 'Módulo II: Clasificación y Código de Colores',
    readingTime: '6 min de lectura',
    summary: 'Domina el código de colores peruano según la NTP 900.058:2019, la identificación de residuos peligrosos y la regla fundamental de contaminación cruzada.',
    content: [
      {
        sectionTitle: '1. ¿Por qué es vital la segregación en la fuente?',
        paragraphs: [
          'Segregar es la acción de agrupar y separar los residuos en el mismo lugar donde se generan, clasificándolos según sus características físicas, químicas y biológicas.',
          'Una segregación deficiente inutiliza materiales reciclables de alto valor y multiplica los costos de disposición si un residuo peligroso contamina todo un contenedor limpio.'
        ],
        keyPoints: [
          'La segregación debe realizarse obligatoriamente en el punto de generación (puesto de trabajo, estación de línea, taller).',
          'Evita riesgos de reacciones químicas peligrosas por incompatibilidad de materiales.'
        ]
      },
      {
        sectionTitle: '2. Código de Colores Técnico (NTP 900.058:2019 - Ámbito No Municipal)',
        paragraphs: [
          'En las empresas e industrias peruanas se aplica el código normalizado de siete colores fundamentales:',
          '• AZUL: Papel y Cartón (limpio, seco, plegado).',
          '• BLANCO: Plásticos (botellas PET, embalaje, film limpio).',
          '• AMARILLO: Metales (chatarra, latas, alambres, perfiles).',
          '• MARRÓN: Orgánicos (restos de alimentos, residuos de jardinería).',
          '• PLOMO / GRIS: Vidrio (botellas y frascos limpios).',
          '• ROJO: Peligrosos (trapos oleosos, tóners, químicos, baterías, fluorescentes).',
          '• NEGRO: No Aprovechables (servilletas usadas, papel higiénico, colillas, empaques metalizados de galletas/snacks).'
        ]
      },
      {
        sectionTitle: '3. La Regla de Oro de la Contaminación Cruzada',
        paragraphs: [
          '¿Qué pasa si una caja de cartón limpia (Azul) cae dentro de una bandeja con aceite de motor quemado?',
          'Ese cartón ya NO puede depositarse en el contenedor azul. Al haberse impregnado con un hidrocarburo (residuo peligroso), adquiere la característica de peligrosidad por contaminación y DEBE ser manejado en el contenedor ROJO como residuo peligroso.',
          'Cualquier mezcla entre residuo no peligroso y residuo peligroso convierte a toda la masa resultante en PELIGROSA.'
        ]
      }
    ],
    businessExample: {
      companyName: 'Agroindustrias San Martín S.A.C.',
      rubro: 'Planta de procesamiento y empaque de espárragos (Ica)',
      scenario: 'En la zona de empaque, los operarios botaban guantes descartables de nitrilo, restos de cinta adhesiva y botellas de agua en los mismos tachos donde iban los tallos descartados de espárrago.',
      actionTaken: 'El equipo SSOMA reemplazó los tachos genéricos por dos estaciones dobles claramente rotuladas: tacho Marrón (restos de espárrago orgánicos) y tacho Blanco (plásticos limpios) + tacho Negro (guantes y cintas no aprovechables).',
      ssomaLearning: 'Los restos orgánicos limpios ahora se trasladan directamente a una compostera local en lugar de pagar sobrecosto por retiro de basura mezclada.'
    },
    questions: [
      {
        id: 'l2-q1',
        question: 'Según la NTP 900.058:2019 en el ámbito no municipal, ¿de qué color debe ser el contenedor para residuos plásticos limpios?',
        options: [
          'Color Amarillo.',
          'Color Blanco.',
          'Color Azul.',
          'Color Verde.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. La Norma Técnica Peruana NTP 900.058:2019 establece el color BLANCO para plásticos limpios en el ámbito no municipal/industrial (el amarillo es para metales y el azul para papel y cartón).'
      },
      {
        id: 'l2-q2',
        question: 'Un trabajador arroja un cartón limpio a un tacho con solvente químico industrial. ¿Cómo debe clasificarse ese cartón?',
        options: [
          'En el tacho Azul de cartón, porque el material original sigue siendo cartón.',
          'En el tacho Negro de no aprovechables comunes.',
          'En el tacho Rojo de residuos peligrosos, porque al impregnarse con un solvente químico adquiere características de peligrosidad.',
          'Se debe secar al sol y devolverlo a reciclaje.'
        ],
        correctIndex: 2,
        explanation: 'Correcto. Todo residuo que entra en contacto con sustancias químicas peligrosas o hidrocarburos se convierte automáticamente en residuo peligroso y debe ir al contenedor ROJO.'
      },
      {
        id: 'l2-q3',
        question: '¿Dónde deben disponerse los empaques multicapa de galletas y papas fritas (envoltorios aluminizados)?',
        options: [
          'En el contenedor Amarillo de metales por su brillo metálico.',
          'En el contenedor Blanco de plásticos.',
          'En el contenedor Negro de residuos no aprovechables.',
          'En el contenedor Azul de papel.'
        ],
        correctIndex: 2,
        explanation: 'Correcto. Los empaques tipo bilaminado o metalizado de snacks son mezclas de plástico y película de aluminio que no se pueden separar con tecnologías convencionales, clasificándose como No Aprovechables (Color Negro).'
      }
    ]
  },
  {
    id: 'leccion-3',
    title: 'Almacenamiento y Manejo Seguro',
    category: 'Módulo III: Seguridad Operacional en Planta',
    readingTime: '6 min de lectura',
    summary: 'Conoce los 3 niveles de almacenamiento de residuos, las condiciones de seguridad obligatorias para almacenes centrales y el uso de EPP.',
    content: [
      {
        sectionTitle: '1. Los 3 Niveles de Almacenamiento en Empresas',
        paragraphs: [
          'En instalaciones industriales o comerciales se distinguen tres etapas de almacenamiento:',
          'a) Almacenamiento Inicial o Primario: En el mismo puesto o estación de trabajo (tachos o papeleras de 20 a 50 litros con bolsa correspondiente).',
          'b) Almacenamiento Intermedio: Puntos de acopio intermedio entre áreas o pabellones para descongestionar puestos de trabajo (opcional según tamaño).',
          'c) Almacén Central de Residuos: Instalación técnica principal y delimitada de la empresa, previa al retiro definitivo por la EO-RS.'
        ]
      },
      {
        sectionTitle: '2. Requisitos Técnicos del Almacén Central de Residuos Peligrosos',
        paragraphs: [
          'El almacén central para residuos peligrosos (color rojo) no puede ser una esquina improvisada. Debe contar con:',
          '• Estructura techada, ventilada e independizada con cerco perimétrico y acceso restringido.',
          '• Piso impermeable, resistente y con pendiente hacia canaletas ciegas o bandejas de contención secundaria (dique con capacidad del 110% del contenedor mayor).',
          '• Señalización clara de seguridad (rombos NFPA / pictogramas SGA de riesgo químico e inflamabilidad).',
          '• Equipamiento de emergencia: Extintores PQS/CO2 vigentes, lavaojos de emergencia y estación con Kit Antiderrames (salchichas absorbentes, paños, pala antichispa y arena/aserrín absorbente).',
          '• Tiempo de almacenamiento: Los residuos peligrosos no deben permanecer almacenados más de 12 meses.'
        ]
      },
      {
        sectionTitle: '3. Protección del Personal y Manejo Ergonómico (EPP)',
        paragraphs: [
          'El personal que manipula residuos debe portar EPP adecuado al tipo de material: guantes de nitrilo o cuero según aplique, zapatos con puntera de seguridad, lentes herméticos y mascarilla con filtro si hay emisión de vapores.',
          'Jamás se debe compactar residuos dentro de tachos con las manos o pies desnudos debido a riesgos de punzocortantes ocultos.'
        ]
      }
    ],
    businessExample: {
      companyName: 'Metalmecánica Andina del Rímac S.A.C.',
      rubro: 'Taller de calderería y mecanizado pesado (Lima Industrial)',
      scenario: 'Los cilindros con aceite usado y filtros de grasa se guardaban sobre tierra suelta a la intemperie. Una lluvia ligera provocó escorrentía oleosa hacia el canal de drenaje pluvial.',
      actionTaken: 'El supervisor SSOMA construyó una losa de concreto con bordillo de contención, techo de policarbonato, instaló un kit antiderrames de 55 galones y capacitó a la brigada interna.',
      ssomaLearning: 'El almacenamiento con dique secundario impermeable previno sanciones ambientales y evitó el riesgo de contaminación de suelos y acuíferos.'
    },
    questions: [
      {
        id: 'l3-q1',
        question: '¿Cuál es una característica técnica indispensable en el Almacén Central de Residuos Peligrosos?',
        options: [
          'Piso de tierra apisonada para absorber derrames de líquidos.',
          'Piso impermeable con sistema de contención secundaria (dique o bandeja) y techo.',
          'Ventanas de vidrio transparente sin protección para iluminación solar directa.',
          'Estar ubicado dentro del comedor del personal para fácil acceso.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. El almacén central de residuos peligrosos debe tener piso impermeable (cemento tratado), dique o pendiente de contención para evitar filtraciones al subsuelo, y techo para protegerlo de radiación y lluvias.'
      },
      {
        id: 'l3-q2',
        question: '¿Cuál es el tiempo máximo general que pueden permanecer almacenados los residuos peligrosos en instalaciones del generador?',
        options: [
          'Máximo 7 días calendario.',
          'Máximo 30 días calendario.',
          'Hasta un plazo máximo de 12 meses.',
          'Indefinidamente hasta que el almacén se llene.'
        ],
        correctIndex: 2,
        explanation: 'Correcto. La normativa peruana establece que los residuos sólidos peligrosos no deben permanecer almacenados en las instalaciones del generador por más de 12 meses antes de su entrega a un operador autorizado.'
      },
      {
        id: 'l3-q3',
        question: '¿Qué elemento de respuesta rápida debe estar permanentemente disponible en la zona de almacenamiento de residuos químicos u oleosos?',
        options: [
          'Un kit de emergencia para derrames con absorbentes y pala antichispa.',
          'Una manguera de alta presión para lavar el derrame hacia el desagüe.',
          'Detergente aromático para disimular los olores.',
          'Un tacho azul para papel mojado.'
        ],
        correctIndex: 0,
        explanation: 'Correcto. Se debe contar con un Kit Antiderrames debidamente equipado (paños absorbentes, barreras oleofílicas, pala antichispa y bolsas rojas) para contener cualquier fuga de manera segura sin verter al desagüe.'
      }
    ]
  },
  {
    id: 'leccion-4',
    title: 'Minimización y Valorización',
    category: 'Módulo IV: Economía Circular y Operadores',
    readingTime: '5 min de lectura',
    summary: 'Aprende a diferenciar un residuo de un material de descarte, las técnicas de valorización material y energética, y el trabajo con EO-RS autorizadas.',
    content: [
      {
        sectionTitle: '1. De la Economía Lineal a la Economía Circular',
        paragraphs: [
          'El modelo tradicional de "extraer, fabricar y desechar" genera altos costos e impactos ambientales. La economía circular busca mantener los materiales y componentes en su mayor utilidad y valor durante el mayor tiempo posible.',
          'En las empresas peruanas, las estrategias de minimización comienzan desde el abastecimiento (compras con menos embalaje, envases retornables en lugar de descartables) y la eficiencia del proceso productivo.'
        ]
      },
      {
        sectionTitle: '2. ¿Residuo Sólido o Material de Descarte?',
        paragraphs: [
          'Un concepto legal y técnico muy relevante en la normativa peruana es el Material de Descarte:',
          'Si un subproducto o merma generado en un proceso productivo puede ser aprovechado DIRECTAMENTE como insumo por la misma empresa o transferido a otra empresa del mismo giro sin requerir tratamiento de una EO-RS, NO se considera residuo sólido, sino material de descarte aprovechable.',
          'Esto fomenta la simbiosis industrial y la reducción en origen.'
        ]
      },
      {
        sectionTitle: '3. Formas de Valorización y Empresas Operadoras (EO-RS)',
        paragraphs: [
          '• Valorización Material: Reciclaje mecánico de plásticos, fundición de metales, compostaje de mermas orgánicas y recuperación de aceites.',
          '• Valorización Energética: Coprocesamiento en hornos de cemento (utilizando residuos no reciclables de alto poder calorífico como combustible alterno) y generación de biogás.',
          '• Transporte y Disposición: El traslado formal fuera de planta debe realizarse exclusivamente mediante Empresas Operadoras de Residuos Sólidos (EO-RS) registradas ante el MINAM, acompañadas de Manifiestos de Manejo para residuos peligrosos.'
        ]
      }
    ],
    businessExample: {
      companyName: 'Constructora e Inmobiliaria Pacífico S.A.C.',
      rubro: 'Edificación de complejos habitacionales (Trujillo, La Libertad)',
      scenario: 'En sus obras de demolición y albañilería generaban mensualmente decenas de toneladas de escombros de concreto y ladrillo que se enviaban a botaderos informales con costo elevado.',
      actionTaken: 'El área SSOMA implementó una chancadora móvil en obra para triturar los restos de concreto y cascote, utilizándolos como material de base para veredas internas y afirmado de accesos.',
      ssomaLearning: 'Reincorporaron el 40% del desmonte como insumo directo en la misma obra, reduciendo viajes en volquete y cumpliendo con las buenas prácticas de economía circular en construcción.'
    },
    questions: [
      {
        id: 'l4-q1',
        question: '¿Cuál de las siguientes acciones representa una forma de Valorización Material?',
        options: [
          'Arrojar las botellas plásticas en una celda de relleno sanitario.',
          'Elaborar compost orgánico a partir de las cáscaras de frutas del comedor.',
          'Quemar los trapos sucios al aire libre en un descampado.',
          'Almacenar los residuos peligrosos por 3 años consecutivos.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. El compostaje es una valorización material biológica que transforma residuos orgánicos biodegradables en abono nutritivo para áreas verdes o agricultura, evitando su envío a disposición final.'
      },
      {
        id: 'l4-q2',
        question: '¿Qué es una Empresa Operadora de Residuos Sólidos (EO-RS) en el Perú?',
        options: [
          'Cualquier transportista informal con camión de carga pesada.',
          'Una persona jurídica debidamente registrada y autorizada por el MINAM para operaciones de recolección, transporte, valorización o disposición final.',
          'Una asociación vecinal dedicada exclusivamente a barrer parques.',
          'El comité de seguridad y salud del sindicato.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. Las EO-RS son empresas formalmente constituidas e inscritas ante el Ministerio del Ambiente (MINAM) con dirección técnica y vehículos autorizados para el manejo seguro de residuos.'
      },
      {
        id: 'l4-q3',
        question: '¿Qué documento técnico oficial debe acompañar el traslado de residuos peligrosos desde la empresa hasta su disposición final?',
        options: [
          'Una boleta de venta simple o recibo por honorarios.',
          'El Manifiesto de Manejo de Residuos Sólidos Peligrosos suscrito por generador, transportista y operador.',
          'Una fotografía del camión tomada con celular.',
          'El carné de vacunación del chofer.'
        ],
        correctIndex: 1,
        explanation: 'Correcto. El Manifiesto de Manejo de Residuos Peligrosos (MRSP) es el documento técnico administrativo obligatorio que certifica la trazabilidad y custodia desde el origen hasta la celda de seguridad autorizada.'
      }
    ]
  }
];
