import type { Slide } from '../types'

/**
 * Guion completo de la presentación ejecutiva.
 * El orden del array define el orden de navegación; `id` debe coincidir con la posición 1-based.
 */
export const SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'VISIÓN GENERAL',
    title: 'La Inversión Detrás de la Plataforma',
    subtitle: 'Plataforma de personalización, cotización y producción',
    objective: 'Abrir la conversación desde el valor de la solución, no desde el precio.',
    presenterScript:
      'Antes de hablar de cifras queremos explicar qué representa realmente esta inversión. El proyecto no consiste únicamente en construir una tienda online. Estamos construyendo una plataforma que conecta la experiencia del cliente con el cálculo de precios, el proceso de compra y posteriormente con la producción. Por eso la inversión debe analizarse como la construcción de un activo tecnológico para el negocio y no simplemente como el costo de desarrollar unas páginas o unas funcionalidades.',
    type: 'hero_nodes',
  },
  {
    id: 2,
    tag: 'ALCANCE INTEGRADO',
    title: 'Qué Estamos Construyendo',
    subtitle: 'Solución tecnológica integrada end-to-end',
    objective:
      'Mostrar que se trata de una solución tecnológica integrada y no de un e-commerce convencional.',
    presenterScript:
      'Lo importante aquí es entender que cada componente tiene una función dentro del proceso completo. El cliente inicia personalizando su producto, el sistema debe interpretar esa personalización, calcular correctamente el precio, procesar la compra y posteriormente entregar a producción la información necesaria para fabricar. La inversión existe porque necesitamos conectar todos estos procesos dentro de una misma operación.',
    type: 'process_flow',
  },
  {
    id: 3,
    tag: 'DIAGNÓSTICO',
    title: 'El Problema que Estamos Resolviendo',
    subtitle: 'Transformación de vulnerabilidades operativas manuales',
    objective: 'Generar contexto antes de presentar los costos.',
    presenterScript:
      'La justificación de la inversión comienza en el problema. Hoy existen diferentes momentos del proceso donde una persona tiene que intervenir, interpretar información, calcular precios o trasladar datos de un lugar a otro. Eso genera tiempo operativo, dependencia del conocimiento de determinadas personas y también posibilidades de error. La plataforma busca precisamente convertir esos pasos manuales en procesos estructurados y automatizados.',
    type: 'before_after',
  },
  {
    id: 4,
    tag: 'JUSTIFICACIÓN DE VALOR',
    title: 'Dónde se Genera el Valor',
    subtitle: 'Mapeo directo entre ineficiencia actual y solución tecnológica',
    objective: 'Conectar cada inversión con un beneficio empresarial.',
    presenterScript:
      'Esta es la relación que queremos que quede clara durante toda la presentación. No estamos proponiendo funcionalidades porque sí. Cada componente responde a una ineficiencia concreta. El editor responde al proceso de personalización, el motor de cotización al cálculo de precios, el motor de impresión y el panel de producción a los problemas que aparecen al momento de fabricar. De esta manera podemos relacionar cada parte de la inversión con una necesidad real.',
    type: 'matrix_value',
  },
  {
    id: 5,
    tag: 'DESGLOSE ESTRUCTURAL',
    title: 'Cómo se Compone la Inversión',
    subtitle: 'Categorización transparente de los rubros financieros',
    objective: 'Separar claramente los diferentes tipos de costos.',
    presenterScript:
      'Una de las cosas que queremos hacer con esta propuesta es separar claramente los conceptos. El desarrollo corresponde al trabajo necesario para construir la plataforma. La infraestructura corresponde a los recursos tecnológicos que permiten operarla. Existen además servicios de terceros, funcionalidades opcionales y algunos costos externos que corresponden directamente al cliente. Separarlos permite saber exactamente qué se está pagando.',
    type: 'five_pillars',
  },
  {
    id: 6,
    tag: 'DESARROLLO TÉCNICO',
    title: 'La Inversión en Desarrollo',
    subtitle: 'Distribución de días y costos por módulos clave (110 días)',
    objective: 'Mostrar de manera transparente cómo se distribuye la inversión de desarrollo.',
    presenterScript:
      'Aquí podemos ver cómo se distribuye la inversión de desarrollo. El mayor componente es el editor porque concentra una parte importante de la experiencia de personalización. Después encontramos cotización, catálogo, tienda, producción, infraestructura y seguridad y finalmente el motor de impresión. La intención de mostrar este detalle es que el cliente pueda ver que el valor no es una cifra global sin explicación, sino la suma de diferentes componentes que cumplen funciones específicas.',
    type: 'dev_table',
  },
  {
    id: 7,
    tag: 'NÚCLEO COMERCIAL',
    title: 'Por Qué el Editor Concentra Mayor Inversión',
    subtitle: '33,75 días / $18.900.000 — Punto focal de la venta',
    objective: 'Defender el componente de mayor valor.',
    presenterScript:
      'El editor concentra una parte importante de la inversión porque es uno de los componentes más cercanos al proceso comercial. No estamos hablando simplemente de colocar una imagen sobre una camiseta. El sistema debe permitir que el usuario personalice, posicione, visualice y valide su diseño. Además, esa información debe poder continuar posteriormente hacia cotización y producción. Por eso su valor está relacionado tanto con la complejidad como con el impacto que tiene directamente sobre la experiencia de venta.',
    type: 'editor_deep_dive',
  },
  {
    id: 8,
    tag: 'PROTECCIÓN FINANCIERA',
    title: 'Protección del Margen',
    subtitle: 'Motor de cotización centralizado en servidor',
    objective: 'Mostrar que el motor de cotización protege directamente el negocio.',
    presenterScript:
      'El objetivo del motor de cotización no es únicamente automatizar una operación matemática. El sistema tiene que aplicar reglas comerciales y técnicas de manera consistente. Esto es especialmente importante porque diferentes técnicas y cantidades pueden modificar el costo final. Centralizar estas reglas reduce la dependencia de cálculos manuales y ayuda a proteger el margen del negocio.',
    type: 'margin_engine',
  },
  {
    id: 9,
    tag: 'CALIDAD OPERATIVA',
    title: 'Protección de la Producción',
    subtitle: 'Estructuración de datos e impresión sin reprocesos',
    objective: 'Justificar la inversión en producción, impresión y trazabilidad.',
    presenterScript:
      'Una parte importante del valor está después de la venta. No basta con conseguir el pedido. Ese pedido tiene que llegar a producción con información clara y estructurada. El panel, la ficha técnica y el motor de impresión ayudan a reducir la necesidad de reconstruir manualmente la información. Esto permite que el pedido pase de la venta a producción de una manera mucho más controlada.',
    type: 'production_protection',
  },
  {
    id: 10,
    tag: 'CONTINUIDAD OPERATIVA',
    title: 'Infraestructura y Seguridad',
    subtitle: 'Arquitectura aislada y protocolos de resiliencia',
    objective: 'Demostrar que la infraestructura es parte de la continuidad del negocio.',
    presenterScript:
      'Cuando hablamos de infraestructura no estamos hablando únicamente de dónde se aloja la página. Estamos hablando de cómo protegemos una operación comercial. La solución contempla separación de ambientes, respaldos, monitoreo y pruebas antes de afectar producción. La intención es reducir el riesgo de que un problema técnico termine afectando las ventas o la información de los pedidos.',
    type: 'infra_security',
  },
  {
    id: 11,
    tag: 'RETORNO DE INVERSIÓN',
    title: 'Qué Gana el Negocio',
    subtitle: 'Beneficios cuantitativos y cualitativos documentados',
    objective: 'Traducir la inversión tecnológica a beneficios empresariales.',
    presenterScript:
      'El retorno de esta inversión no debe medirse únicamente como ingresos adicionales. También existe valor en el tiempo que deja de consumirse en actividades repetitivas, en los errores que pueden evitarse y en la capacidad de atender al cliente de manera más autónoma. El documento identifica, bajo su escenario de referencia, más de 170 horas anuales potencialmente recuperables únicamente en cotización.',
    type: 'kpi_value',
  },
  {
    id: 12,
    tag: 'OPERACIÓN POST-LANZAMIENTO',
    title: 'Costos Recurrentes',
    subtitle: 'Mantenimiento operativo predecible sin comisiones por pedido',
    objective:
      'Mostrar cuánto cuesta mantener la plataforma operativa después del desarrollo.',
    presenterScript:
      'Es importante separar el costo de construir la plataforma del costo de mantenerla funcionando. Una vez implementada, la infraestructura presentada tiene un costo operativo relativamente controlado. A esto se suma el dominio anual y la comisión de Wompi cuando efectivamente existe una transacción. No existe un costo por cada diseño creado ni una comisión de plataforma por cada pedido.',
    type: 'recurrent_costs',
  },
  {
    id: 13,
    tag: 'ESCALABILIDAD MODULAR',
    title: 'Funcionalidades Opcionales',
    subtitle: 'Crecimiento por etapas según la madurez del negocio',
    objective:
      'Mostrar que el cliente no está obligado a pagar desde el inicio por funcionalidades que puede implementar posteriormente.',
    presenterScript:
      'Una ventaja de estructurar la plataforma por módulos es que no necesitamos construir absolutamente todo desde el primer día. Hay funcionalidades que pueden tener sentido cuando el catálogo o el negocio alcance determinado nivel. Esto permite priorizar la inversión inicial y posteriormente ampliar la plataforma según las necesidades reales del negocio.',
    type: 'optionals_roadmap',
  },
  {
    id: 14,
    tag: 'TRANSPARENCIA TOTAL',
    title: 'Costos Externos y Transparencia',
    subtitle: 'Elementos fuera del alcance del desarrollo tecnológico',
    objective: 'Eliminar sorpresas posteriores.',
    presenterScript:
      'Queremos dejar claramente identificados también los costos que no forman parte del desarrollo. Esto incluye fotografía, modelos 3D, fuentes comerciales y el tiempo que deberá aportar el equipo del cliente. No significa que todos estos costos tengan que ejecutarse de inmediato, sino que es importante identificarlos desde el comienzo para evitar sorpresas durante la implementación.',
    type: 'external_costs',
  },
  {
    id: 15,
    tag: 'SOBERANÍA TECNOLÓGICA',
    title: 'Propiedad y Control',
    subtitle: 'Transferencia total de activos y cuentas a nombre del cliente',
    objective: 'Demostrar que el cliente está adquiriendo un activo tecnológico propio.',
    presenterScript:
      'Este es uno de los elementos que queremos destacar especialmente. La inversión no deja al cliente dependiendo de una cuenta tecnológica propiedad del proveedor. Las cuentas principales se manejan bajo la empresa y el código fuente se entrega al finalizar. Eso significa que la plataforma se convierte en un activo del negocio y no simplemente en un servicio que depende permanentemente de un tercero.',
    type: 'ownership_map',
  },
  {
    id: 16,
    tag: 'RESUMEN ECONÓMICO',
    title: 'La Inversión Económica',
    subtitle: 'Presentación transparente y aclaración de versiones comerciales',
    objective: 'Presentar el valor económico de la propuesta de manera clara.',
    presenterScript:
      'En este punto queremos ser completamente transparentes. El documento detallado de costos presenta una inversión de 73 millones 304 mil pesos IVA incluido. Sin embargo, el documento de justificación presenta una segunda versión económica de 96 millones 628 mil pesos IVA incluido. No vamos a mezclar estas cifras ni asumir cuál es la correcta. Antes de emitir la propuesta definitiva debemos validar qué alcance comercial corresponde a cada versión.',
    type: 'financial_summary',
  },
  {
    id: 17,
    tag: 'VALOR ESTRATÉGICO',
    title: '¿Por Qué Existe Esta Inversión?',
    subtitle: 'Los 5 pilares del activo tecnológico empresarial',
    objective: "Responder a la pregunta: '¿Por qué invertir esta cantidad?'",
    presenterScript:
      'La pregunta correcta no es únicamente cuánto cuesta desarrollar la plataforma. La pregunta es qué activo obtiene el negocio al finalizar. Obtiene un canal de venta, un motor comercial, un sistema que conecta con producción y una infraestructura tecnológica que puede seguir evolucionando. Por eso entendemos la inversión como la construcción de un activo empresarial y no simplemente como el pago por horas de programación.',
    type: 'five_pillars_value',
  },
  {
    id: 18,
    tag: 'MITIGACIÓN DE RIESGO',
    title: 'Hitos de Inversión',
    subtitle: 'Esquema de pagos vinculado al avance real de entregables',
    objective: 'Mostrar cómo se puede estructurar el pago contra avances concretos.',
    presenterScript:
      'La recomendación es que la inversión acompañe el avance real del proyecto. De esta manera, cada etapa del pago está asociada a un bloque de trabajo y a un resultado verificable. Esto también permite reducir la percepción de riesgo porque el proyecto avanza por hitos y no como una entrega única al final.',
    type: 'milestones_timeline',
  },
  {
    id: 19,
    tag: 'CONCLUSIÓN COMERCIAL',
    title: 'Cierre: El Valor de la Inversión',
    subtitle: 'Transformación de operación manual a activo escalable',
    objective: 'Cerrar la presentación con una conclusión comercial fuerte.',
    presenterScript:
      'Para cerrar, queremos volver al punto principal. Esta inversión no está destinada únicamente a crear una tienda online. Está destinada a construir un activo tecnológico propio que permita automatizar la venta, estructurar la producción, reducir errores y mantener el control sobre la tecnología. La plataforma puede comenzar con un alcance definido y posteriormente crecer. Esa es la lógica detrás de la inversión.',
    type: 'closing_value',
  },
  {
    id: 20,
    tag: 'HOJA DE RUTA',
    title: 'Próximos Pasos',
    subtitle: 'Ruta clara de aprobación y puesta en marcha',
    objective: 'Terminar con una acción concreta.',
    presenterScript:
      'El siguiente paso es muy concreto. Primero debemos cerrar la versión definitiva del alcance, especialmente las diferencias que existen entre los documentos económicos. Una vez validado el alcance, podemos confirmar la inversión, formalizar el proyecto y comenzar la ejecución. De esta manera iniciamos el desarrollo con claridad sobre qué se construye, cuánto cuesta y qué resultado debe entregarse.',
    type: 'next_steps',
  },
  {
    id: 21,
    tag: 'RESPALDO COMERCIAL',
    title: 'Preguntas Difíciles del Cliente',
    subtitle: 'Guía de respuestas estratégicas para objeciones comunes',
    objective: 'Proporcionar respaldo rápido para el equipo comercial en la sesión de Q&A.',
    presenterScript:
      'Esta sección es una herramienta de consulta rápida para resolver dudas sobre el editor, infraestructura, cotización, costos recurrentes, propiedad del código y variaciones de alcance.',
    type: 'faq_backup',
  },
]
