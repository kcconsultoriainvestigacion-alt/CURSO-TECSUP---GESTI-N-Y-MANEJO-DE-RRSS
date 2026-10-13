import React, { useState } from 'react';
import { WastePlanData, WasteInventoryRow, NTPColorCategory, ScheduleItem } from '../types';
import { NTP_COLORS } from '../data/ntpColors';
import { SAMPLE_TEMPLATE_PLANT, EMPTY_WASTE_PLAN } from '../data/planTemplates';
import { 
  FileText, 
  Save, 
  Printer, 
  Plus, 
  Trash2, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle, 
  Building, 
  Layers, 
  ShieldAlert, 
  Users, 
  Calendar, 
  Eye, 
  X,
  FileCheck,
  Sparkles,
  ClipboardList
} from 'lucide-react';

interface WastePlanSectionProps {
  planData: WastePlanData;
  onSavePlan: (updatedData: WastePlanData) => void;
  lastSavedAt: string | null;
}

export const WastePlanSection: React.FC<WastePlanSectionProps> = ({
  planData,
  onSavePlan,
  lastSavedAt
}) => {
  const [formData, setFormData] = useState<WastePlanData>(planData);
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [saveToast, setSaveToast] = useState<boolean>(false);

  // Update generic string field
  const handleChange = (field: keyof WastePlanData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      lastUpdated: new Date().toLocaleDateString('es-PE')
    }));
  };

  const handleSaveDraft = () => {
    const updated = {
      ...formData,
      lastUpdated: new Date().toLocaleString('es-PE')
    };
    onSavePlan(updated);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleLoadSample = () => {
    if (window.confirm('¿Deseas cargar una plantilla de ejemplo de una empresa metalmecánica? Esto sobrescribirá los campos actuales.')) {
      setFormData(SAMPLE_TEMPLATE_PLANT);
      onSavePlan(SAMPLE_TEMPLATE_PLANT);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 3000);
    }
  };

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que deseas limpiar el formulario?')) {
      setFormData(EMPTY_WASTE_PLAN);
      onSavePlan(EMPTY_WASTE_PLAN);
    }
  };

  // Inventory table row handlers
  const handleAddInventoryRow = () => {
    const newRow: WasteInventoryRow = {
      id: `inv-${Date.now()}`,
      wasteName: 'Nuevo residuo identificado',
      wasteType: 'No peligroso aprovechable',
      colorCategory: 'papel_carton',
      estimatedQuantity: '10',
      unit: 'kg/mes',
      originProcess: 'Área operativa',
      disposalMethod: 'Segregación en fuente'
    };
    setFormData((prev) => ({
      ...prev,
      inventory: [...prev.inventory, newRow]
    }));
  };

  const handleUpdateInventoryRow = (id: string, field: keyof WasteInventoryRow, val: any) => {
    setFormData((prev) => ({
      ...prev,
      inventory: prev.inventory.map((row) => (row.id === id ? { ...row, [field]: val } : row))
    }));
  };

  const handleRemoveInventoryRow = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      inventory: prev.inventory.filter((row) => row.id !== id)
    }));
  };

  // Schedule handlers
  const handleAddScheduleRow = () => {
    const newSch: ScheduleItem = {
      id: `sch-${Date.now()}`,
      activity: 'Nueva actividad de control SSOMA',
      frequency: 'Mensual',
      responsible: 'Supervisor SSOMA',
      targetQuarter: 'Trimestre I y II'
    };
    setFormData((prev) => ({
      ...prev,
      schedule: [...prev.schedule, newSch]
    }));
  };

  const handleUpdateScheduleRow = (id: string, field: keyof ScheduleItem, val: string) => {
    setFormData((prev) => ({
      ...prev,
      schedule: prev.schedule.map((row) => (row.id === id ? { ...row, [field]: val } : row))
    }));
  };

  const handleRemoveScheduleRow = (id: string) => {
    setFormData((prev) => ({
      ...prev,
      schedule: prev.schedule.filter((row) => row.id !== id)
    }));
  };

  const formSteps = [
    { num: 1, label: 'Datos Empresa', icon: Building },
    { num: 2, label: 'Procesos', icon: Layers },
    { num: 3, label: 'Inventario de Residuos', icon: ClipboardList },
    { num: 4, label: 'Minimización', icon: Sparkles },
    { num: 5, label: 'Manejo & Almacén', icon: ShieldAlert },
    { num: 6, label: 'Responsables', icon: Users },
    { num: 7, label: 'Cronograma', icon: Calendar },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-emerald-800 via-teal-800 to-cyan-900 rounded-3xl text-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-700/60 border border-cyan-400/50 text-cyan-200 text-xs font-semibold uppercase mb-3">
              <FileText className="w-3.5 h-3.5" />
              Herramienta de Formulación SSOMA
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Plan de Minimización y Manejo de Residuos Sólidos
            </h1>
            <p className="mt-2 text-cyan-100 text-sm md:text-base leading-relaxed">
              Diseña de manera guiada un plan formal de gestión de residuos para una empresa del ámbito no municipal en el Perú. Podrás guardar el borrador en tu navegador y generar una vista previa imprimible.
            </p>
            <div className="mt-3 inline-block bg-amber-500/20 border border-amber-400/50 text-amber-200 text-xs px-3 py-1.5 rounded-xl font-medium">
              Nota legal/académica: “Borrador educativo pendiente de revisión técnica”
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap lg:flex-col gap-2.5 shrink-0">
            <button
              onClick={handleSaveDraft}
              className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-md transition cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Guardar Borrador
            </button>

            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/30 transition cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              Vista Previa Imprimible
            </button>

            <button
              onClick={handleLoadSample}
              className="flex items-center gap-2 px-3 py-2 bg-teal-900/80 hover:bg-teal-900 text-teal-200 text-xs font-semibold rounded-xl border border-teal-600/50 transition cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Cargar Ejemplo Completo
            </button>
          </div>
        </div>

        {/* Save feedback indicator */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-200">
          <span>
            {lastSavedAt
              ? `Último guardado automático: ${lastSavedAt}`
              : 'El borrador se guardará en el almacenamiento local de tu navegador.'}
          </span>
          {saveToast && (
            <span className="inline-flex items-center gap-1 text-emerald-300 font-bold animate-pulse">
              <CheckCircle2 className="w-4 h-4" />
              ¡Guardado exitosamente en este equipo!
            </span>
          )}
        </div>
      </div>

      {/* Steps Navigation Bar */}
      <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-between min-w-max gap-2">
          {formSteps.map((step) => {
            const isCurrent = activeStep === step.num;
            const Icon = step.icon;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-100'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                  isCurrent ? 'bg-white text-emerald-800' : 'bg-slate-200 text-slate-700'
                }`}>
                  {step.num}
                </span>
                <Icon className="w-3.5 h-3.5" />
                <span>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FORM BODY BASED ON ACTIVE STEP */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs">
        {/* STEP 1: DATOS DE LA EMPRESA */}
        {activeStep === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-emerald-600" />
                1. Datos Generales de la Empresa
              </h2>
              <p className="text-xs text-slate-500">
                Información de identificación del titular generador según los formatos técnicos del MINAM.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Razón Social o Nombre de la Empresa:
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  placeholder="Ej. Metalmecánica del Sur S.A.C."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  RUC (11 dígitos):
                </label>
                <input
                  type="text"
                  value={formData.ruc}
                  onChange={(e) => handleChange('ruc', e.target.value)}
                  placeholder="Ej. 20601234567"
                  maxLength={11}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sector o Giro Económico:
                </label>
                <input
                  type="text"
                  value={formData.industrySector}
                  onChange={(e) => handleChange('industrySector', e.target.value)}
                  placeholder="Ej. Industria manufacturera, Construcción, Alimentos, etc."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ubicación de la Sede / Ciudad:
                </label>
                <input
                  type="text"
                  value={formData.locationCity}
                  onChange={(e) => handleChange('locationCity', e.target.value)}
                  placeholder="Ej. Parque Industrial Río Seco, Arequipa"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Departamento:
                </label>
                <select
                  value={formData.department}
                  onChange={(e) => handleChange('department', e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                >
                  {['Lima', 'Arequipa', 'La Libertad', 'Piura', 'Cusco', 'Junín', 'Áncash', 'Ica', 'Lambayeque', 'Moquegua', 'Tacna', 'Loreto', 'San Martín', 'Ucayali', 'Puno', 'Cajamarca'].map((dep) => (
                    <option key={dep} value={dep}>{dep}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Responsable Técnico SSOMA (Colegiado / Cargo):
                </label>
                <input
                  type="text"
                  value={formData.ssomaOfficer}
                  onChange={(e) => handleChange('ssomaOfficer', e.target.value)}
                  placeholder="Ej. Ing. Carlos Mendoza (CIP 184521)"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: ACTIVIDAD Y PROCESOS */}
        {activeStep === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-600" />
                2. Actividad y Procesos Productivos
              </h2>
              <p className="text-xs text-slate-500">
                Identificación de las líneas operativas donde se originan los residuos sólidos en la empresa.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Descripción Operacional de la Empresa:
                </label>
                <textarea
                  rows={3}
                  value={formData.operationalDescription}
                  onChange={(e) => handleChange('operationalDescription', e.target.value)}
                  placeholder="Describa brevemente qué bienes o servicios produce la empresa, turnos de trabajo y volumen general de operación."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Procesos Clave Generadores de Residuos:
                </label>
                <textarea
                  rows={3}
                  value={formData.keyProcesses}
                  onChange={(e) => handleChange('keyProcesses', e.target.value)}
                  placeholder="Ej. 1) Recepción de insumos y desembalaje; 2) Línea de mecanizado y corte; 3) Pintura y acabado; 4) Mantenimiento de taller mecánico; 5) Servicios higiénicos y comedor."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: INVENTARIO DE RESIDUOS (DINÁMICO) */}
        {activeStep === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-emerald-600" />
                  3. Inventario de Residuos Sólidos
                </h2>
                <p className="text-xs text-slate-500">
                  Caracterización y estimación periódica de residuos por tipo, contenedor NTP y proceso de origen.
                </p>
              </div>

              <button
                onClick={handleAddInventoryRow}
                className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Agregar Residuo
              </button>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-slate-700 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Nombre del Residuo</th>
                    <th className="p-3">Peligrosidad</th>
                    <th className="p-3">Código NTP</th>
                    <th className="p-3 w-28">Cant. Estimada</th>
                    <th className="p-3 w-28">Unidad</th>
                    <th className="p-3">Proceso Generador</th>
                    <th className="p-3 text-center w-12">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {formData.inventory.map((row) => (
                    <tr key={row.id} className="hover:bg-slate-50/60">
                      <td className="p-2.5">
                        <input
                          type="text"
                          value={row.wasteName}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'wasteName', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs focus:border-emerald-500 outline-hidden font-medium"
                        />
                      </td>

                      <td className="p-2.5">
                        <select
                          value={row.wasteType}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'wasteType', e.target.value)}
                          className={`w-full px-2 py-1.5 border rounded-lg text-xs outline-hidden font-semibold ${
                            row.wasteType === 'Peligroso'
                              ? 'bg-rose-50 border-rose-300 text-rose-800'
                              : row.wasteType === 'No peligroso aprovechable'
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-800'
                              : 'bg-neutral-100 border-neutral-300 text-neutral-800'
                          }`}
                        >
                          <option value="No peligroso aprovechable">No peligroso aprovechable</option>
                          <option value="Peligroso">Peligroso</option>
                          <option value="No aprovechable">No aprovechable</option>
                        </select>
                      </td>

                      <td className="p-2.5">
                        <select
                          value={row.colorCategory}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'colorCategory', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs outline-hidden"
                        >
                          {Object.keys(NTP_COLORS).map((k) => {
                            const c = NTP_COLORS[k as NTPColorCategory];
                            return (
                              <option key={k} value={k}>
                                {c.name} ({c.colorName})
                              </option>
                            );
                          })}
                        </select>
                      </td>

                      <td className="p-2.5">
                        <input
                          type="number"
                          value={row.estimatedQuantity}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'estimatedQuantity', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs focus:border-emerald-500 outline-hidden font-mono"
                        />
                      </td>

                      <td className="p-2.5">
                        <select
                          value={row.unit}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'unit', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs outline-hidden"
                        >
                          <option value="kg/mes">kg/mes</option>
                          <option value="ton/mes">ton/mes</option>
                          <option value="cilindros/mes">cilindros/mes</option>
                          <option value="m3/mes">m3/mes</option>
                          <option value="unidades/mes">unidades/mes</option>
                        </select>
                      </td>

                      <td className="p-2.5">
                        <input
                          type="text"
                          value={row.originProcess}
                          onChange={(e) => handleUpdateInventoryRow(row.id, 'originProcess', e.target.value)}
                          placeholder="Ej. Taller mecánico"
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs focus:border-emerald-500 outline-hidden"
                        />
                      </td>

                      <td className="p-2.5 text-center">
                        <button
                          onClick={() => handleRemoveInventoryRow(row.id)}
                          disabled={formData.inventory.length <= 1}
                          className="p-1.5 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded-lg transition disabled:opacity-30 cursor-pointer"
                          title="Eliminar fila"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-[11px] text-slate-500 bg-slate-50 p-3 rounded-xl flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Tip SSOMA: Registra los residuos peligrosos diferenciándolos siempre de los aprovechables para calcular adecuadamente el volumen del Almacén Central.
              </span>
            </div>
          </div>
        )}

        {/* STEP 4: MEDIDAS DE MINIMIZACIÓN */}
        {activeStep === 4 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                4. Medidas de Minimización y Prevención en Origen
              </h2>
              <p className="text-xs text-slate-500">
                Estrategias preventivas para reducir el volumen y peligrosidad antes de que los residuos se generen.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Estrategias Preventivas Seleccionadas (puedes editar o agregar):
                </label>
                <div className="space-y-2">
                  {formData.minimizationStrategies.map((strat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <input
                        type="text"
                        value={strat}
                        onChange={(e) => {
                          const updated = [...formData.minimizationStrategies];
                          updated[i] = e.target.value;
                          handleChange('minimizationStrategies', updated);
                        }}
                        className="flex-1 px-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                      />
                      <button
                        onClick={() => {
                          const updated = formData.minimizationStrategies.filter((_, idx) => idx !== i);
                          handleChange('minimizationStrategies', updated);
                        }}
                        className="p-1.5 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-lg cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    handleChange('minimizationStrategies', [
                      ...formData.minimizationStrategies,
                      'Nueva estrategia preventiva en la fuente'
                    ]);
                  }}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Agregar otra estrategia preventiva
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Metas y Compromiso de Economía Circular:
                </label>
                <textarea
                  rows={3}
                  value={formData.minimizationCustomNote}
                  onChange={(e) => handleChange('minimizationCustomNote', e.target.value)}
                  placeholder="Ej. Reducir en un 15% los descartes metálicos y eliminar en un 100% los envases plásticos de un solo uso en el comedor de trabajadores."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 5: MANEJO Y ALMACENAMIENTO */}
        {activeStep === 5 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-600" />
                5. Manejo, Almacenamiento Seguro y EPP
              </h2>
              <p className="text-xs text-slate-500">
                Requisitos técnicos para el almacén central, medidas de contingencia ante derrames y protección personal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Ubicación y Tipo de Almacén Central:
                </label>
                <input
                  type="text"
                  value={formData.storageLocationType}
                  onChange={(e) => handleChange('storageLocationType', e.target.value)}
                  placeholder="Ej. Almacén Central Techado con Losa y Cerco Perimétrico"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Condición de Contenedores para Residuos Peligrosos:
                </label>
                <input
                  type="text"
                  value={formData.hazardousStorageCondition}
                  onChange={(e) => handleChange('hazardousStorageCondition', e.target.value)}
                  placeholder="Ej. Cilindros metálicos de 55 galones con tapa hermética y rotulación roja"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Medidas de Seguridad e Infraestructura en Almacén:
                </label>
                <div className="space-y-2">
                  {formData.storageSafetyMeasures.map((measure, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      <input
                        type="text"
                        value={measure}
                        onChange={(e) => {
                          const updated = [...formData.storageSafetyMeasures];
                          updated[idx] = e.target.value;
                          handleChange('storageSafetyMeasures', updated);
                        }}
                        className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Equipos de Protección Personal (EPP) Requeridos:
                </label>
                <div className="space-y-2">
                  {formData.operatorPpe.map((ppe, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <input
                        type="text"
                        value={ppe}
                        onChange={(e) => {
                          const updated = [...formData.operatorPpe];
                          updated[idx] = e.target.value;
                          handleChange('operatorPpe', updated);
                        }}
                        className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Empresa Operadora Contratada (EO-RS autorizada MINAM):
                </label>
                <input
                  type="text"
                  value={formData.contractedEors}
                  onChange={(e) => handleChange('contractedEors', e.target.value)}
                  placeholder="Ej. Operadores Ambientales del Centro S.A.C."
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  N° de Registro Autoritativo EO-RS (Placeholder):
                </label>
                <input
                  type="text"
                  value={formData.eorsRegistrationPlaceholder}
                  onChange={(e) => handleChange('eorsRegistrationPlaceholder', e.target.value)}
                  placeholder="Ej. EO-RS-00215-2025-MINAM"
                  className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 focus:border-emerald-500 outline-hidden font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: RESPONSABLES */}
        {activeStep === 6 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                6. Asignación de Responsables
              </h2>
              <p className="text-xs text-slate-500">
                Roles y responsabilidades de los líderes y colaboradores en la cadena de manejo de residuos.
              </p>
            </div>

            <div className="space-y-4">
              {formData.rolesResponsibilities.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Rol / Función:</label>
                    <input
                      type="text"
                      value={item.role}
                      onChange={(e) => {
                        const updated = [...formData.rolesResponsibilities];
                        updated[idx].role = e.target.value;
                        handleChange('rolesResponsibilities', updated);
                      }}
                      className="w-full px-2.5 py-1.5 text-xs font-bold rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Nombre o Cargo:</label>
                    <input
                      type="text"
                      value={item.nameOrTitle}
                      onChange={(e) => {
                        const updated = [...formData.rolesResponsibilities];
                        updated[idx].nameOrTitle = e.target.value;
                        handleChange('rolesResponsibilities', updated);
                      }}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-0.5">Responsabilidad Principal:</label>
                    <input
                      type="text"
                      value={item.responsibility}
                      onChange={(e) => {
                        const updated = [...formData.rolesResponsibilities];
                        updated[idx].responsibility = e.target.value;
                        handleChange('rolesResponsibilities', updated);
                      }}
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 7: CRONOGRAMA */}
        {activeStep === 7 && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  7. Cronograma de Gestión y Seguimiento
                </h2>
                <p className="text-xs text-slate-500">
                  Planificación temporal de auditorías, capacitaciones, retiros de EO-RS y reportes ambientales.
                </p>
              </div>

              <button
                onClick={handleAddScheduleRow}
                className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Agregar Actividad
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-2xl">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100/80 text-slate-700 uppercase font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Actividad SSOMA</th>
                    <th className="p-3 w-36">Frecuencia</th>
                    <th className="p-3 w-40">Responsable</th>
                    <th className="p-3 w-40">Periodo / Plazo</th>
                    <th className="p-3 text-center w-12">Acción</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {formData.schedule.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/60">
                      <td className="p-2.5">
                        <input
                          type="text"
                          value={item.activity}
                          onChange={(e) => handleUpdateScheduleRow(item.id, 'activity', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </td>

                      <td className="p-2.5">
                        <input
                          type="text"
                          value={item.frequency}
                          onChange={(e) => handleUpdateScheduleRow(item.id, 'frequency', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </td>

                      <td className="p-2.5">
                        <input
                          type="text"
                          value={item.responsible}
                          onChange={(e) => handleUpdateScheduleRow(item.id, 'responsible', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </td>

                      <td className="p-2.5">
                        <input
                          type="text"
                          value={item.targetQuarter}
                          onChange={(e) => handleUpdateScheduleRow(item.id, 'targetQuarter', e.target.value)}
                          className="w-full px-2 py-1.5 border border-slate-200 rounded-lg text-xs"
                        />
                      </td>

                      <td className="p-2.5 text-center">
                        <button
                          onClick={() => handleRemoveScheduleRow(item.id)}
                          disabled={formData.schedule.length <= 1}
                          className="p-1.5 text-rose-600 hover:text-rose-800 rounded-lg transition disabled:opacity-30 cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* STEP BUTTONS */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className={`px-4 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer ${
              activeStep === 1
                ? 'opacity-30 cursor-not-allowed border-slate-200 text-slate-400'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            ← Paso anterior
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              Guardar Borrador
            </button>

            {activeStep < 7 ? (
              <button
                onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
              >
                Siguiente paso →
              </button>
            ) : (
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                Ver Reporte Imprimible
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MODAL / PRINTABLE PREVIEW */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header (Hidden during actual print) */}
            <div className="print:hidden p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                <span className="font-extrabold text-slate-900 text-sm">
                  Vista Previa Imprimible del Plan SSOMA
                </span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
                  Borrador educativo
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-xs cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  Imprimir / Guardar como PDF
                </button>
                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-2 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-200 transition cursor-pointer"
                  title="Cerrar vista previa"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-6 text-slate-800 print:p-0 print:m-0" id="printable-waste-plan">
              {/* Prominent Educational Draft Watermark Badge */}
              <div className="border-2 border-dashed border-amber-400 bg-amber-50 p-3 rounded-2xl text-center">
                <div className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-amber-900 flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600" />
                  Borrador educativo pendiente de revisión técnica
                </div>
                <div className="text-[11px] text-amber-700 mt-0.5">
                  Instrumento pedagógico para estudiantes y futuros supervisores SSOMA — EcoGestión Perú
                </div>
              </div>

              {/* Document Header */}
              <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-lg md:text-xl font-black text-slate-950 uppercase tracking-tight">
                    Plan de Minimización y Manejo de Residuos Sólidos
                  </h1>
                  <p className="text-xs text-slate-600 font-medium">
                    Ámbito de Gestión No Municipal — Cumplimiento D.L. 1278 y NTP 900.058:2019
                  </p>
                </div>
                <div className="text-right text-xs">
                  <div className="font-bold text-slate-900">{formData.companyName || 'Empresa Generadora Ficticia'}</div>
                  <div className="text-slate-500 font-mono">RUC: {formData.ruc || '20XXXXXXXXX'}</div>
                  <div className="text-slate-400 text-[10px]">Fecha: {formData.lastUpdated}</div>
                </div>
              </div>

              {/* 1. Datos Generales */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  1. Datos Generales del Titular
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-600">Razón Social:</span>
                    <div>{formData.companyName || 'No especificada'}</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">RUC:</span>
                    <div className="font-mono">{formData.ruc || 'No especificado'}</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">Sector Económico:</span>
                    <div>{formData.industrySector}</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">Ubicación / Ciudad:</span>
                    <div>{formData.locationCity || 'No especificada'}</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">Departamento:</span>
                    <div>{formData.department}</div>
                  </div>
                  <div>
                    <span className="font-bold text-slate-600">Responsable SSOMA:</span>
                    <div>{formData.ssomaOfficer || 'No asignado'}</div>
                  </div>
                </div>
              </div>

              {/* 2. Actividades y Procesos */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  2. Procesos Generadores de Residuos
                </h2>
                <div className="text-xs space-y-1.5 text-slate-700">
                  <p><span className="font-bold">Descripción Operacional: </span>{formData.operationalDescription || 'Operaciones ordinarias de planta industrial.'}</p>
                  <p><span className="font-bold">Procesos Clave: </span>{formData.keyProcesses || 'Líneas de producción, mantenimiento y servicios auxiliares.'}</p>
                </div>
              </div>

              {/* 3. Inventario */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  3. Inventario y Clasificación de Residuos Sólidos
                </h2>
                <table className="w-full text-[11px] border border-slate-300">
                  <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <tr>
                      <th className="p-2 border-r border-slate-200">Residuo</th>
                      <th className="p-2 border-r border-slate-200">Tipo</th>
                      <th className="p-2 border-r border-slate-200">Color NTP</th>
                      <th className="p-2 border-r border-slate-200">Generación</th>
                      <th className="p-2 border-r border-slate-200">Proceso Origen</th>
                      <th className="p-2">Disposición / Destino</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {formData.inventory.map((row) => (
                      <tr key={row.id}>
                        <td className="p-2 font-medium border-r border-slate-200">{row.wasteName}</td>
                        <td className="p-2 border-r border-slate-200">
                          <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                            row.wasteType === 'Peligroso' ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            {row.wasteType}
                          </span>
                        </td>
                        <td className="p-2 border-r border-slate-200 capitalize font-medium">{NTP_COLORS[row.colorCategory]?.colorName}</td>
                        <td className="p-2 font-mono border-r border-slate-200">{row.estimatedQuantity} {row.unit}</td>
                        <td className="p-2 border-r border-slate-200">{row.originProcess}</td>
                        <td className="p-2">{row.disposalMethod}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 4. Medidas de Minimización */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  4. Medidas de Minimización en la Fuente
                </h2>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                  {formData.minimizationStrategies.map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ul>
                {formData.minimizationCustomNote && (
                  <p className="text-xs text-slate-600 italic mt-1">
                    Nota de control: {formData.minimizationCustomNote}
                  </p>
                )}
              </div>

              {/* 5. Almacenamiento y Seguridad */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  5. Condiciones de Almacenamiento y Manejo Seguro
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800">Infraestructura del Almacén: </span>
                    <p className="text-slate-600 mt-0.5">{formData.storageLocationType}</p>
                    <span className="font-bold text-slate-800 mt-2 block">Residuos Peligrosos: </span>
                    <p className="text-slate-600">{formData.hazardousStorageCondition}</p>
                  </div>
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-800">Medidas de Emergencia: </span>
                    <ul className="list-disc list-inside text-slate-600 space-y-0.5 mt-0.5">
                      {formData.storageSafetyMeasures.slice(0, 3).map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-xs text-slate-600">
                  <span className="font-bold">Operador EO-RS contratado: </span>
                  {formData.contractedEors} ({formData.eorsRegistrationPlaceholder})
                </div>
              </div>

              {/* 6. Responsables */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  6. Asignación de Responsables
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {formData.rolesResponsibilities.map((r, i) => (
                    <div key={i} className="border border-slate-200 p-2 rounded-lg">
                      <div className="font-bold text-emerald-900">{r.role}</div>
                      <div className="text-slate-800 text-[11px] font-medium">{r.nameOrTitle}</div>
                      <div className="text-slate-500 text-[10px] mt-1">{r.responsibility}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Cronograma */}
              <div className="space-y-2">
                <h2 className="text-xs font-black uppercase text-emerald-800 tracking-wider border-b border-emerald-200 pb-1">
                  7. Cronograma de Cumplimiento
                </h2>
                <table className="w-full text-[11px] border border-slate-300">
                  <thead className="bg-slate-100 text-slate-900 font-bold border-b border-slate-300">
                    <tr>
                      <th className="p-2 border-r border-slate-200">Actividad</th>
                      <th className="p-2 border-r border-slate-200">Frecuencia</th>
                      <th className="p-2 border-r border-slate-200">Responsable</th>
                      <th className="p-2">Periodo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {formData.schedule.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2 font-medium border-r border-slate-200">{item.activity}</td>
                        <td className="p-2 border-r border-slate-200">{item.frequency}</td>
                        <td className="p-2 border-r border-slate-200">{item.responsible}</td>
                        <td className="p-2">{item.targetQuarter}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Signatures Area */}
              <div className="pt-8 border-t border-slate-200 grid grid-cols-2 gap-8 text-center text-xs">
                <div>
                  <div className="w-40 border-b border-slate-400 mx-auto mb-1"></div>
                  <div className="font-bold text-slate-800">Firma del Supervisor SSOMA</div>
                  <div className="text-slate-500 text-[10px]">{formData.ssomaOfficer || 'Ingeniero Responsable'}</div>
                </div>
                <div>
                  <div className="w-40 border-b border-slate-400 mx-auto mb-1"></div>
                  <div className="font-bold text-slate-800">Gerencia General / Representante Legal</div>
                  <div className="text-slate-500 text-[10px]">{formData.companyName || 'Empresa Titular'}</div>
                </div>
              </div>

              {/* Author footer in document */}
              <div className="mt-6 pt-3 border-t border-slate-100 text-center text-[10px] text-slate-500 font-medium">
                EcoGestión Perú — Elaborado por Ing. Keissy Siviruero — Borrador educativo pendiente de revisión técnica
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
