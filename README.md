# EcoGestión Perú 🇵🇪🌱

Aplicación web interactiva para estudiantes y futuros supervisores **SSOMA** (Seguridad, Salud Ocupacional y Medio Ambiente) enfocada en la gestión y manejo integral de residuos sólidos en empresas e industrias del Perú.

Desarrollada con **React**, **TypeScript**, **Tailwind CSS**, y basada en los lineamientos técnicos del **Decreto Legislativo N° 1278**, su Reglamento (**D.S. N° 014-2017-MINAM**) y el Código de Colores de la **NTP 900.058:2019** (ámbito no municipal / industrial).

---

## 🚀 Características Principales

### 1. 📖 APRENDER (Módulo Teórico con Casos y Cuestionarios)
- **Lección 1: Fundamentos de gestión de residuos**: Jerarquía de manejo (reducción en origen > valorización > disposición final), ámbito no municipal y responsabilidades del generador (Art. 55 D.L. 1278). Ejemplo: *Manufacturas del Mantaro S.A.C.*
- **Lección 2: Identificación y segregación**: Código de colores oficial (Azul, Blanco, Amarillo, Marrón, Plomo/Gris, Rojo, Negro), características de peligrosidad y regla de contaminación cruzada. Ejemplo: *Agroindustrias San Martín S.A.C.*
- **Lección 3: Almacenamiento y manejo seguro**: Niveles de almacenamiento (primario, intermedio y central), requisitos técnicos de almacenes de residuos peligrosos (piso impermeable, dique de contención al 110%, kit antiderrames, extintores y EPP). Ejemplo: *Metalmecánica Andina del Rímac S.A.C.*
- **Lección 4: Minimización y valorización**: Economía circular, concepto de material de descarte vs. residuo sólido, valorización material/energética y Empresas Operadoras (EO-RS). Ejemplo: *Constructora e Inmobiliaria Pacífico S.A.C.*
- *3 preguntas con retroalimentación explicada en cada lección.*

### 2. 🎯 PRACTICAR (Entrenamiento Técnico en Campo)
- **Clasificador de 10 Residuos Industriales**: Selección por botones con los colores de la NTP 900.058:2019, evaluando estado físico y condiciones de contaminación (residuos limpios vs. contaminados con hidrocarburos o químicos).
- **Caso Ficticio 1 (Almacén con residuos mezclados)**: Toma de decisiones ante químicos mezclados con reciclables y riesgo de entrega a recojo municipal común (*Distribuidora Logística Pacasmayo S.A.C.*).
- **Caso Ficticio 2 (Taller con trapos contaminados)**: Medidas de control ante trapos empapados de hidrocarburos expuestos a trabajos en caliente de soldadura y oxicorte (*Flota Minera del Centro S.A.C.*).

### 3. 📝 MI PLAN DE RESIDUOS (Formulador Guiado & Reporte Imprimible)
- Formulario técnico estructurado:
  1. Datos generales de la empresa (Razón social, RUC, sector y sede).
  2. Actividad y procesos generadores.
  3. Inventario dinámico de residuos (agrega, edita y elimina filas con cantidades y unidades).
  4. Medidas de minimización en origen.
  5. Manejo, almacenamiento seguro y EPP.
  6. Asignación de responsabilidades SSOMA.
  7. Cronograma de cumplimiento.
- Opción para cargar una **plantilla de ejemplo completa** de una planta metalmecánica real.
- Guardado de borrador en el navegador (`localStorage`).
- **Vista previa imprimible / exportación a PDF** (`window.print()`), con la leyenda reglamentaria: **“Borrador educativo pendiente de revisión técnica”**.

### 4. 📊 MI PROGRESO (Seguimiento del Alumno)
- Porcentaje global de avance del curso.
- Desglose de actividades completadas, aciertos y puntajes.
- 4 insignias de competencia SSOMA desbloqueables.
- Opción para reiniciar el progreso para nuevos estudiantes.

---

## 🛠️ Tecnologías

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons**
- **Vite**

---

## 👩‍💻 Autoría

**Elaborado por:** Ing. Keissy Siviruero  
**Propósito:** Formación y práctica técnica de estudiantes y futuros supervisores SSOMA en la gestión integral de residuos sólidos (Perú).

---

## 💻 Instalación y Ejecución Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU-USUARIO/ecogestion-peru.git
   cd ecogestion-peru
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre `http://localhost:3000` en tu navegador.
