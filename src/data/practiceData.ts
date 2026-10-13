import { WasteItemPractice, CaseStudy } from '../types';

export const PRACTICE_WASTE_ITEMS: WasteItemPractice[] = [
  {
    id: 1,
    name: 'Cajas de cartón corrugado desarmadas y limpias',
    materialComposition: 'Fibra de celulosa virgen y reciclada, 100% biodegradable y reutilizable.',
    contaminationStatus: 'Completamente secas, libres de grasa, humedad y sin restos químicos.',
    generationArea: 'Área de recepción de insumos y almacén general.',
    correctCategory: 'papel_carton',
    options: ['papel_carton', 'plastico', 'no_aprovechables', 'peligrosos'],
    criticalFactor: 'Al estar secas y libres de hidrocarburos o humedad, mantienen íntegro su valor de reciclaje.',
    explanation: 'Corresponde al contenedor AZUL (Papel y Cartón) según NTP 900.058:2019. Al no estar manchadas ni mojadas, pueden apilarse, compactarse y entregarse a recicladores formalizados o EO-RS para valorización material.'
  },
  {
    id: 2,
    name: 'Botellas de plástico PET de bebidas vacías y enjuagadas',
    materialComposition: 'Polietileno Tereftalato (PET - Tipo 1), plástico termoplástico reciclable.',
    contaminationStatus: 'Vacías, sin líquidos residuales y con taparroscas plásticas.',
    generationArea: 'Comedor de la empresa y módulos de hidratación de planta.',
    correctCategory: 'plastico',
    options: ['papel_carton', 'plastico', 'vidrio', 'no_aprovechables'],
    criticalFactor: 'Plástico de consumo limpio sin contacto con solventes ni sustancias tóxicas.',
    explanation: 'Corresponde al contenedor BLANCO (Plásticos) según NTP 900.058:2019. El plástico PET limpio es un material prioritario para la economía circular. Aplastarlas antes de colocarlas optimiza el espacio de almacenamiento.'
  },
  {
    id: 3,
    name: 'Galonera plástica con restos de aceite de motor usado',
    materialComposition: 'Polietileno de alta densidad (HDPE), pero con residuo líquido de hidrocarburo.',
    contaminationStatus: 'Contaminada internamente con restos oleosos de aceite mineral quemado.',
    generationArea: 'Taller de mantenimiento automotriz y maquinaria pesada.',
    correctCategory: 'peligrosos',
    options: ['plastico', 'peligrosos', 'no_aprovechables', 'metales'],
    criticalFactor: '¡Criterio de contaminación! El envase contuvo una sustancia peligrosa (hidrocarburo combustible/tóxico).',
    explanation: 'Corresponde al contenedor ROJO (Peligrosos) según NTP 900.058:2019. Según la legislación peruana, cualquier envase que haya contenido sustancias peligrosas se clasifica como RESIDUO PELIGROSO y nunca debe colocarse en el tacho blanco de plásticos comunes.'
  },
  {
    id: 4,
    name: 'Virutas y retazos de tubería de acero al carbono limpios',
    materialComposition: 'Aleación metálica de hierro y carbono sin revestimientos tóxicos.',
    contaminationStatus: 'Secas, sin mezclar con emulsiones refrigerantes cloradas ni solventes.',
    generationArea: 'Área de maquinado, corte y torneado de piezas.',
    correctCategory: 'metales',
    options: ['metales', 'peligrosos', 'no_aprovechables', 'vidrio'],
    criticalFactor: 'Metal puro limpio, altamente valorizable en fundiciones sidurúrgicas.',
    explanation: 'Corresponde al contenedor AMARILLO (Metales) según NTP 900.058:2019. La chatarra metálica limpia es 100% reciclable en acerías. Nota: Si la viruta estuviera empapada con taladrina o aceite usado, requeriría desengrasado previo o manejo especial.'
  },
  {
    id: 5,
    name: 'Cáscaras de plátano, restos de lechuga y borra de café',
    materialComposition: 'Materia orgánica de origen vegetal y restos de alimentos preparados.',
    contaminationStatus: 'Biodegradable, sin presencia de vidrios rotos ni químicos de limpieza.',
    generationArea: 'Comedor de operarios y cafetería de oficinas.',
    correctCategory: 'organicos',
    options: ['organicos', 'no_aprovechables', 'papel_carton', 'peligrosos'],
    criticalFactor: 'Materia biodegradable susceptible a descomposición biológica rápida.',
    explanation: 'Corresponde al contenedor MARRÓN (Orgánicos) según NTP 900.058:2019. Estos residuos son ideales para procesos de valorización biológica como compostaje o lombricultura para abonos de áreas verdes.'
  },
  {
    id: 6,
    name: 'Frascos de vidrio que contuvieron ácido sulfúrico (vacíos)',
    materialComposition: 'Vidrio borosilicato resistente a agentes químicos.',
    contaminationStatus: 'Restos de vapores y trazas de ácido corrosivo concentrado.',
    generationArea: 'Laboratorio de control de calidad químico.',
    correctCategory: 'peligrosos',
    options: ['vidrio', 'peligrosos', 'no_aprovechables', 'metales'],
    criticalFactor: 'Peligrosidad por reactividad y corrosividad del remanente químico.',
    explanation: 'Corresponde al contenedor ROJO (Peligrosos) según NTP 900.058:2019. Aunque el material base sea vidrio, al haber almacenado una sustancia altamente corrosiva, el envase no neutralizado se categoriza como residuo peligroso.'
  },
  {
    id: 7,
    name: 'Botellas de gaseosa y agua mineral de vidrio transparente',
    materialComposition: 'Vidrio sílice convencional 100% reutilizable y fundible.',
    contaminationStatus: 'Vacías, enjuagadas, sin sustancias tóxicas ni material biológico.',
    generationArea: 'Cafetín y área de descanso de personal administrativo.',
    correctCategory: 'vidrio',
    options: ['vidrio', 'plastico', 'peligrosos', 'no_aprovechables'],
    criticalFactor: 'Vidrio de grado alimentario limpio sin contaminantes químicos.',
    explanation: 'Corresponde al contenedor PLOMO / GRIS (Vidrio) según NTP 900.058:2019. El vidrio no pierde propiedades al fundirse repetidamente, lo que lo convierte en un insumo excelente para valorización en plantas vidrieras.'
  },
  {
    id: 8,
    name: 'Papel toalla de baños, papel higiénico y envoltura de snacks',
    materialComposition: 'Fibras sanitarias usadas y plástico metalizado bicapa no reciclable.',
    contaminationStatus: 'Contiene restos biológicos cotidianos y películas plásticas complejas.',
    generationArea: 'Servicios higiénicos y pasillos comunes de la planta.',
    correctCategory: 'no_aprovechables',
    options: ['papel_carton', 'no_aprovechables', 'organicos', 'peligrosos'],
    criticalFactor: 'Materiales no higiénicos o de difícil recuperación técnica que no ameritan reciclaje.',
    explanation: 'Corresponde al contenedor NEGRO (No Aprovechables) según NTP 900.058:2019. Por razones sanitarias y limitaciones técnicas de separación, su destino final debe ser el relleno sanitario seguro.'
  },
  {
    id: 9,
    name: 'Fluorescentes tubulares fundidos y pilas alcalinas AA gastadas',
    materialComposition: 'Tubos de vidrio con vapor de mercurio y celdas con metales pesados (cadmio, zinc).',
    contaminationStatus: 'Contienen metales pesados altamente tóxicos y ecotóxicos.',
    generationArea: 'Mantenimiento de luminarias de almacén y oficinas.',
    correctCategory: 'peligrosos',
    options: ['vidrio', 'metales', 'peligrosos', 'no_aprovechables'],
    criticalFactor: 'Toxicidad y lixiviación de metales pesados (mercurio, plomo, cadmio).',
    explanation: 'Corresponde al contenedor ROJO (Peligrosos) según NTP 900.058:2019. Las luminarias y pilas liberan sustancias neurotóxicas si se quiebran o desechan en basura común. Requieren recojo especializado por EO-RS para tratamiento seguro.'
  },
  {
    id: 10,
    name: 'Trapos y waypes empapados con grasa automotriz y diésel',
    materialComposition: 'Hilaza de algodón textil impregnada con hidrocarburos aromáticos.',
    contaminationStatus: 'Saturados con aceites combustibles, altamente inflamables.',
    generationArea: 'Mantenimiento preventivo de motores de camiones cisterna.',
    correctCategory: 'peligrosos',
    options: ['no_aprovechables', 'peligrosos', 'metales', 'organicos'],
    criticalFactor: 'Inflamabilidad y riesgo inminente de fuego o autoignición por hidrocarburos.',
    explanation: 'Corresponde al contenedor ROJO (Peligrosos) según NTP 900.058:2019. Un residuo textil empapado con derivados del petróleo es inflamable y tóxico; guardarlo en contenedores comunes representaría un serio peligro de incendio industrial.'
  }
];

export const PRACTICE_CASES: CaseStudy[] = [
  {
    id: 'caso-almacen',
    title: 'Caso 1: El Almacén con Residuos Mezclados',
    location: 'Patio de Almacén General de Suministros',
    fictionalCompany: 'Distribuidora Logística Pacasmayo S.A.C.',
    description: 'Durante la ronda de inspección SSOMA mensual en la sucursal de almacenamiento, descubres que en el patio exterior se ha dispuesto un cilindro de 200 litros rotulado "PLÁSTICOS" de color blanco. Sin embargo, al inspeccionar el interior, encuentras botellas de gaseosa vacías mezcladas con galoneras de thinner abiertas con líquido residual, latas de pintura a medio vaciar y cajas de cartón empapadas de solvente.',
    problem: 'El supervisor de operaciones logísticas, presionado por la prisa de despacho, le dice a su cuadrilla que traslade todo ese cilindro mezclado al contenedor municipal de basura común para evitar una no-conformidad en la auditoría de mañana.',
    evidence: [
      'Cilindro blanco etiquetado "Plásticos" pero con químicos volátiles inflamables en su interior.',
      'Fuerte olor a vapores de thinner y solvente sintético en el área de tránsito peatonal.',
      'Riesgo directo de ignición y de intoxicación del personal de limpieza.',
      'Infracción grave por pretender entregar residuos peligrosos no municipales al camión de basura común.'
    ],
    options: [
      {
        id: 'opt-a',
        text: 'Aceptar la propuesta del supervisor de operaciones para no retrasar los despachos y prometer ordenar los tachos la próxima semana.',
        isCorrect: false,
        feedback: 'Acción inaceptable y de alto riesgo legal y de seguridad. Entregar residuos peligrosos al servicio municipal común es una infracción calificada como muy grave y pone en riesgo la salud de los trabajadores recolectores municipales.',
        ssomaImpact: 'Riesgo de sanciones por fiscalización ambiental (OEFA/Municipalidad) e incidentes de intoxicación o amagos de incendio.'
      },
      {
        id: 'opt-b',
        text: 'Ordenar a un operario que meta la mano al cilindro para sacar las botellas de gaseosa plásticas y dejar los químicos adentro.',
        isCorrect: false,
        feedback: 'Acción peligrosa. Manipular residuos empapados en solventes sin EPP específico ni procedimiento seguro expone al trabajador a contacto dérmico e inhalación de vapores tóxicos.',
        ssomaImpact: 'Vulneración de la Ley de Seguridad y Salud en el Trabajo N° 29783 por exposición no controlada a agentes químicos.'
      },
      {
        id: 'opt-c',
        text: 'Detener el traslado, reclasificar todo el contenido del cilindro como Residuo Peligroso (Rojo), trasladarlo al Almacén Central con EPP adecuado y registrar una acción correctiva con capacitación a la cuadrilla.',
        isCorrect: true,
        feedback: '¡Excelente decisión de supervisión SSOMA! Debido a la regla de contaminación cruzada, todo el material mezclado con thinner ya es peligroso. Debe confinarse en tambor rojo hermético dentro del Almacén Central de Residuos Peligrosos y gestionarse mediante una EO-RS autorizada con Manifiesto de Residuos Peligrosos.',
        ssomaImpact: 'Garantiza la seguridad física de los colaboradores, el cumplimiento normativo estricto y la trazabilidad formal del residuo.'
      }
    ],
    learningSummary: 'Regla SSOMA Fundamental: Cuando un residuo no peligroso entra en contacto o se empapa con una sustancia química peligrosa, TODO el conjunto debe gestionarse como residuo peligroso (Contenedor Rojo) y nunca puede entregarse a servicios municipales convencionales.'
  },
  {
    id: 'caso-taller',
    title: 'Caso 2: Taller de Mantenimiento con Trapos Contaminados',
    location: 'Taller Central de Mantenimiento de Maquinaria Pesada',
    fictionalCompany: 'Flota Minera del Centro S.A.C.',
    description: 'En el taller mecánico de cambio de orugas y motores diésel, los mecánicos usan diariamente decenas de waypes y paños absorbentes para limpiar grasa pesada y combustible. Al finalizar el turno, suelen embolsar los trapos en bolsas plásticas negras delgadas y dejarlas apiladas en el piso, a menos de 2 metros del puesto donde el soldador realiza oxicorte y esmerilado de planchas de acero.',
    problem: 'Existe una condición subestándar crítica: chispas incandescentes de esmeril saltando a corta distancia de bolsas con trapos saturados de hidrocarburos volátiles, sin extintor visible a menos de 15 metros y sin registro de generación.',
    evidence: [
      'Trapos con hidrocarburos depositados en bolsas negras convencionales en el piso.',
      'Trabajos en caliente (soldadura y esmeril) a menos de 2 metros de material inflamable.',
      'Ausencia de contenedores metálicos herméticos con pedal para residuos combustibles.',
      'Falta de rotulación y peligro latente de amago de incendio industrial de clase B.'
    ],
    options: [
      {
        id: 'opt-t1',
        text: 'Paralizar temporalmente el trabajo en caliente, retirar de inmediato las bolsas al Almacén Central de Residuos Peligrosos, implementar cilindros metálicos rojos con tapa oscilante/hermética y capacitar en permisos de trabajo en caliente (PETAR).',
        isCorrect: true,
        feedback: '¡Medida preventiva y correctiva impecable! Los trapos oleosos son residuos peligrosos inflamables. Exigen recipientes metálicos herméticos rotulados de color ROJO, ubicados lejos de cualquier fuente de ignición o chispa, protegidos por extintores PQS y con procedimiento de evacuación diaria al almacén central.',
        ssomaImpact: 'Eliminación del riesgo crítico de incendio en planta, cumplimiento de estándares de almacenamiento de residuos peligrosos y alineamiento con la gestión de permisos para trabajos de alto riesgo.'
      },
      {
        id: 'opt-t2',
        text: 'Decirle al soldador que apunte la chispa del esmeril hacia el otro lado de la pared y que sigan trabajando con normalidad.',
        isCorrect: false,
        feedback: 'Medida insuficiente e irresponsable. Las chispas de esmerilado alcanzan temperaturas superiores a 900 °C y pueden rebotar o proyectarse hasta 10 metros, encendiendo los vapores de hidrocarburo.',
        ssomaImpact: 'Fallo grave en la jerarquía de control de riesgos y potencial siniestro con pérdidas humanas y materiales.'
      },
      {
        id: 'opt-t3',
        text: 'Llevar las bolsas de trapos grasosos al tacho de residuos no aprovechables del patio general para que se sequen al aire libre.',
        isCorrect: false,
        feedback: 'Inadecuado. Los hidrocarburos no desaparecen por secado al sol; además emiten compuestos orgánicos volátiles perjudiciales y mantienen el riesgo de combustión espontánea en el patio abierto.',
        ssomaImpact: 'Contaminación atmosférica por vapores y vulneración de normas de almacenamiento seguro.'
      }
    ],
    learningSummary: 'Regla SSOMA Fundamental: Los materiales combustibles impregnados con hidrocarburos deben almacenarse en contenedores metálicos ignífugos de color rojo con tapa hermética para evitar la mezcla de oxígeno y vapores, manteniéndose aislados de cualquier trabajo en caliente (soldadura, corte o esmeril).'
  }
];
