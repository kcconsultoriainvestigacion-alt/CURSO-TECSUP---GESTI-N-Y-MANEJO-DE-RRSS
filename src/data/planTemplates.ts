import { WastePlanData } from '../types';

export const EMPTY_WASTE_PLAN: WastePlanData = {
  companyName: '',
  ruc: '',
  locationCity: '',
  department: 'Lima',
  industrySector: 'Metalmecánica y Fabricación',
  facilityArea: 'Planta Principal y Almacenes',
  ssomaOfficer: '',
  operationalDescription: '',
  keyProcesses: '',
  inventory: [
    {
      id: 'inv-1',
      wasteName: 'Cartón de embalaje de repuestos',
      wasteType: 'No peligroso aprovechable',
      colorCategory: 'papel_carton',
      estimatedQuantity: '120',
      unit: 'kg/mes',
      originProcess: 'Recepción y desembalaje en almacén',
      disposalMethod: 'Acopio selectivo y entrega a reciclador formal'
    },
    {
      id: 'inv-2',
      wasteName: 'Trapos y waypes impregnados con grasa/aceite',
      wasteType: 'Peligroso',
      colorCategory: 'peligrosos',
      estimatedQuantity: '45',
      unit: 'kg/mes',
      originProcess: 'Mantenimiento preventivo de maquinaria',
      disposalMethod: 'Almacén central y retiro por EO-RS autorizada'
    }
  ],
  minimizationStrategies: [
    'Sustitución de envases plásticos descartables por bidones retornables de insumos.',
    'Capacitación mensual de 15 minutos en segregación en la fuente a la cuadrilla de planta.',
    'Control de dosificación de lubricantes para reducir trapos y waypes empapados.'
  ],
  minimizationCustomNote: 'Priorizar la reducción en origen y compras con proveedores que utilicen empaques retornables.',
  storageLocationType: 'Almacén Central Techado con Losa de Concreto',
  storageSafetyMeasures: [
    'Piso impermeable con pendiente hacia canaleta ciega y dique de contención.',
    'Señalética de seguridad conforme a NTP 399.010-1 y pictogramas SGA.',
    'Extintor de Polvo Químico Seco (PQS) de 6 kg operativo y vigente.',
    'Kit Antiderrames de 55 galones con salchichas y paños absorbentes oleofílicos.'
  ],
  hazardousStorageCondition: 'Contenedores metálicos herméticos de 55 galones rotulados en color rojo.',
  operatorPpe: [
    'Guantes de nitrilo para manipulación de residuos químicos/grasas',
    'Zapatos con puntera de seguridad de acero',
    'Lentes de seguridad con protección lateral',
    'Respirador con cartuchos para vapores orgánicos si aplica'
  ],
  contractedEors: 'Empresa Operadora de Residuos Sólidos registrada ante MINAM (ficticia para fines académicos)',
  eorsRegistrationPlaceholder: 'EO-RS-2026-MINAM-EJEMPLO',
  rolesResponsibilities: [
    {
      role: 'Jefe / Coordinador SSOMA',
      nameOrTitle: 'Ing. Supervisor SSOMA',
      responsibility: 'Supervisar el cumplimiento del plan, auditar los registros de generación y gestionar el contrato con la EO-RS.'
    },
    {
      role: 'Supervisor de Planta / Operaciones',
      nameOrTitle: 'Jefe de Turno',
      responsibility: 'Verificar diariamente que los operarios mantengan los tachos limpios y sin contaminación cruzada.'
    },
    {
      role: 'Personal Operativo de Planta',
      nameOrTitle: 'Operarios y Cuadrilla',
      responsibility: 'Segregar los residuos de forma inmediata en el puesto de trabajo en el contenedor correspondiente.'
    }
  ],
  schedule: [
    {
      id: 'sch-1',
      activity: 'Auditoría interna de segregación de residuos en puestos de trabajo',
      frequency: 'Semanal',
      responsible: 'Supervisor SSOMA',
      targetQuarter: 'Trimestres I, II, III y IV'
    },
    {
      id: 'sch-2',
      activity: 'Capacitación al personal sobre Código de Colores (NTP 900.058)',
      frequency: 'Mensual',
      responsible: 'Equipo SSOMA',
      targetQuarter: 'Inicio de cada mes'
    },
    {
      id: 'sch-3',
      activity: 'Retiro y transporte de residuos peligrosos mediante EO-RS con Manifiesto',
      frequency: 'Bimestral',
      responsible: 'Coordinación Logística / SSOMA',
      targetQuarter: 'Meses pares'
    },
    {
      id: 'sch-4',
      activity: 'Revisión y actualización del inventario interno de residuos',
      frequency: 'Trimestral',
      responsible: 'Jefe SSOMA',
      targetQuarter: 'Fin de cada trimestre'
    }
  ],
  lastUpdated: new Date().toLocaleDateString('es-PE')
};

export const SAMPLE_TEMPLATE_PLANT: WastePlanData = {
  companyName: 'Metalmecánica y Servicios del Sur S.A.C.',
  ruc: '20608976541',
  locationCity: 'Arequipa - Parque Industrial Río Seco',
  department: 'Arequipa',
  industrySector: 'Metalmecánica y Fabricación de Estructuras',
  facilityArea: 'Planta de Maquinado, Soldadura y Patio de Maniobras',
  ssomaOfficer: 'Ing. Carlos Mendoza Quispe (Reg. CIP 184521)',
  operationalDescription: 'Fabricación y reparación de piezas mecánicas, corte por plasma, torneado de ejes y soldadura estructural para empresas mineras y constructoras del sur del país.',
  keyProcesses: 'Corte de perfiles, desbaste mecánico, soldadura MIG/MAG, pintura electrostática y mantenimiento preventivo de tornos.',
  inventory: [
    {
      id: 'inv-s1',
      wasteName: 'Retazos y viruta limpia de acero',
      wasteType: 'No peligroso aprovechable',
      colorCategory: 'metales',
      estimatedQuantity: '450',
      unit: 'kg/mes',
      originProcess: 'Área de torneado y corte de planchas',
      disposalMethod: 'Venta/entrega a fundición siderúrgica autorizada'
    },
    {
      id: 'inv-s2',
      wasteName: 'Cajas de cartón y empaques de consumibles de soldadura',
      wasteType: 'No peligroso aprovechable',
      colorCategory: 'papel_carton',
      estimatedQuantity: '80',
      unit: 'kg/mes',
      originProcess: 'Desembalaje en almacén de insumos',
      disposalMethod: 'Plegado, acopio en tacho azul y entrega a asociación de recicladores'
    },
    {
      id: 'inv-s3',
      wasteName: 'Botellas plásticas y film de protección limpio',
      wasteType: 'No peligroso aprovechable',
      colorCategory: 'plastico',
      estimatedQuantity: '35',
      unit: 'kg/mes',
      originProcess: 'Protección de piezas terminadas y comedor',
      disposalMethod: 'Compactación y acopio en contenedor blanco'
    },
    {
      id: 'inv-s4',
      wasteName: 'Trapos y waypes con hidrocarburos y grasas',
      wasteType: 'Peligroso',
      colorCategory: 'peligrosos',
      estimatedQuantity: '60',
      unit: 'kg/mes',
      originProcess: 'Limpieza de máquinas herramienta y lubricación',
      disposalMethod: 'Cilindro metálico rojo hermético y entrega a EO-RS'
    },
    {
      id: 'inv-s5',
      wasteName: 'Latas vacías de solventes y pinturas sintéticas',
      wasteType: 'Peligroso',
      colorCategory: 'peligrosos',
      estimatedQuantity: '25',
      unit: 'unidades/mes',
      originProcess: 'Cabina de pintura y acabado anticorrosivo',
      disposalMethod: 'Confinamiento en almacén de peligrosos y retiro por EO-RS'
    },
    {
      id: 'inv-s6',
      wasteName: 'Filtros usados de aceite de compresores y grupos electrógenos',
      wasteType: 'Peligroso',
      colorCategory: 'peligrosos',
      estimatedQuantity: '8',
      unit: 'unidades/mes',
      originProcess: 'Mantenimiento de equipos de fuerza',
      disposalMethod: 'Drenado en bandeja y entrega formalizada con Manifiesto'
    },
    {
      id: 'inv-s7',
      wasteName: 'Residuos de servicios higiénicos y barrido general',
      wasteType: 'No aprovechable',
      colorCategory: 'no_aprovechables',
      estimatedQuantity: '70',
      unit: 'kg/mes',
      originProcess: 'Aseo de vestuarios y oficinas',
      disposalMethod: 'Bolsas negras al servicio municipal de recojo'
    }
  ],
  minimizationStrategies: [
    'Optimización del patronaje de corte con software CAD para reducir retazos metálicos en un 12%.',
    'Transición a desengrasantes acuosos biodegradables en lugar de solventes a base de hidrocarburos.',
    'Implementación de paños reutilizables lavables mediante servicio especializado con circuito cerrado.',
    'Eliminación de botellas plásticas individuales mediante instalación de dispensadores de agua potable.'
  ],
  minimizationCustomNote: 'Se estableció una meta anual de reducir en un 15% los residuos peligrosos mediante sustitución de solventes químicos.',
  storageLocationType: 'Almacén Central Exclusivo techado, ubicado a 25 metros de la nave principal',
  storageSafetyMeasures: [
    'Piso de concreto pulido impermeabilizado con recubrimiento epóxico antiácido.',
    'Bandeja de contención secundaria con dique perimetral para retener posibles derrames de líquidos.',
    'Dos extintores de Polvo Químico Seco (PQS) de 9 kg y un extintor de CO2 para tableros.',
    'Estación de Kit Antiderrames de 55 galones con absorbente granulado, mangas y paños oleofílicos.',
    'Puerta metálica con candado, señalización de peligro y acceso exclusivo a personal capacitado.'
  ],
  hazardousStorageCondition: 'Tambores metálicos de 55 galones cerrados con aro de presión, pintados de color rojo con identificación de residuo.',
  operatorPpe: [
    'Guantes de nitrilo resistente a hidrocarburos y grasas',
    'Botas de seguridad dieléctricas con puntera de acero',
    'Lentes de seguridad con protección UV y antiempañante',
    'Delantal de PVC para trasvase de líquidos residuales',
    'Respirador de media cara con cartuchos para vapores orgánicos'
  ],
  contractedEors: 'Ecoeficiencia Andina Operadores S.A.C.',
  eorsRegistrationPlaceholder: 'Registro Autoritativo MINAM N° EO-RS-00452-2024',
  rolesResponsibilities: [
    {
      role: 'Ingeniero Residente SSOMA',
      nameOrTitle: 'Ing. Carlos Mendoza Quispe',
      responsibility: 'Liderar la implementación del plan, auditar almacenes, emitir Manifiestos de Residuos Peligrosos y reportar a gerencia.'
    },
    {
      role: 'Supervisor de Mantenimiento Mecánico',
      nameOrTitle: 'Téc. Jorge Huamán',
      responsibility: 'Asegurar que los mecánicos depositen los waypes con grasa exclusivamente en los cilindros rojos herméticos.'
    },
    {
      role: 'Operarios y Cuadrilla de Producción',
      nameOrTitle: 'Personal de Taller (18 operarios)',
      responsibility: 'Separar virutas en tacho amarillo, plásticos limpios en blanco y mantener despejadas las estaciones de acopio.'
    },
    {
      role: 'Encargado de Almacén General',
      nameOrTitle: 'Sr. Roberto Vargas',
      responsibility: 'Recibir los embalajes de cartón, desarmarlos, apilarlos en el área seca y gestionar la entrega a recicladores formalizados.'
    }
  ],
  schedule: [
    {
      id: 'sch-s1',
      activity: 'Inspección técnica semanal de almacenes primarios y almacén central de residuos',
      frequency: 'Semanal (cada viernes)',
      responsible: 'Supervisor SSOMA',
      targetQuarter: 'Todo el año'
    },
    {
      id: 'sch-s2',
      activity: 'Charla de 5 minutos sobre segregación y prevención de contaminación cruzada',
      frequency: 'Quincenal',
      responsible: 'Supervisores de Turno',
      targetQuarter: 'Trimestres I, II, III y IV'
    },
    {
      id: 'sch-s3',
      activity: 'Retiro y transporte de residuos peligrosos mediante EO-RS con firma de Manifiesto',
      frequency: 'Cada 45 días',
      responsible: 'Jefe SSOMA y Logística',
      targetQuarter: 'Febrero, Abril, Junio, Agosto, Octubre, Diciembre'
    },
    {
      id: 'sch-s4',
      activity: 'Mantenimiento preventivo e inspección de kits antiderrames y extintores del almacén',
      frequency: 'Mensual',
      responsible: 'Brigada de Emergencia SSOMA',
      targetQuarter: 'Todo el año'
    },
    {
      id: 'sch-s5',
      activity: 'Revisión y consolidación de la Declaración Anual de Manejo de Residuos Sólidos',
      frequency: 'Anual (primer trimestre)',
      responsible: 'Jefe SSOMA y Gerencia General',
      targetQuarter: 'Trimestre I'
    }
  ],
  lastUpdated: new Date().toLocaleDateString('es-PE')
};
