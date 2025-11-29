
const architectureData = {
    title: "Reto 6: Arquitectura Multi-Nube para Resiliencia Regional (CLD)",
    subtitle: "Garantizando la Continuidad de Negocio para Datos Energéticos Críticos",
    description: "Esta arquitectura adopta un modelo Serverless (Sin Servidor) Activo-Pasivo Caliente (Warm Standby), distribuyendo la carga de trabajo entre AWS (Primario) y Azure (Secundario) para lograr una tolerancia a fallos a nivel de proveedor (Cloud Provider).",
    services: [
        {
            component: "Base de Datos NoSQL",
            aws: "Amazon DynamoDB",
            azure: "Azure Cosmos DB",
            role: "Almacenamiento de datos transaccionales de alta disponibilidad con replicación asíncrona inter-cloud."
        },
        {
            component: "Lógica de Negocio / Cómputo",
            aws: "AWS Lambda",
            azure: "Azure Functions",
            role: "Ejecución de código de backend sin servidor, escalando dinámicamente según la demanda."
        },
        {
            component: "Enrutamiento Global y Failover",
            aws: "Amazon Route 53 (DNS)",
            azure: "Azure Front Door / Traffic Manager",
            role: "Monitoreo constante del estado de salud del servicio primario y redirección automática del tráfico en caso de desastre (Failover)."
        },
        {
            component: "Flujo de Eventos (Streaming)",
            aws: "Amazon Kinesis Stream",
            azure: "Azure Event Hub",
            role: "Ingesta y procesamiento en tiempo real de grandes volúmenes de datos de telemetría energética."
        },
        {
            component: "Interconexión Privada",
            aws: "AWS Direct Connect",
            azure: "Azure ExpressRoute",
            role: "Conexión dedicada y segura para la replicación de datos, minimizando la latencia y los costos de salida (Egress)."
        },
    ],
    justification: [
        {
            heading: "Homologación de Servicios y RPO/RTO",
            content: "La selección de servicios homólogos (ej. DynamoDB ↔ Cosmos DB) garantiza que la aplicación requiera mínimas modificaciones para operar en el entorno secundario. La replicación de datos es configurada para un RPO (Punto de Recuperación Objetivo) bajo, mientras que el Failover automático asegura un RTO (Tiempo de Recuperación Objetivo) mínimo."
        },
        {
            heading: "Distribución de Riesgos (Resiliencia)",
            content: "La separación de la carga de trabajo entre dos proveedores mitiga el riesgo de indisponibilidad total. Si AWS sufre un fallo regional o global, Azure actúa inmediatamente como un sitio de DR totalmente operativo, asegurando la continuidad de las operaciones críticas."
        },
        {
            heading: "Mitigación de 'Vendor Lock-in'",
            content: "Adoptar una estrategia Multi-Nube reduce la dependencia de un único proveedor, otorgando mayor flexibilidad en la gestión de costos, negociación de contratos y capacidad para migrar cargas de trabajo en el futuro."
        }
    ]
};


const ServiceRow = ({ component, aws, azure, role }) => (
    <tr className="border-b transition duration-300 ease-in-out hover:bg-gray-50">
        <td className="px-4 py-3 font-semibold text-gray-800">{component}</td>
        <td className="px-4 py-3 text-green-700 font-medium">{aws}</td>
        <td className="px-4 py-3 text-blue-700 font-medium">{azure}</td>
        <td className="px-4 py-3 text-sm text-gray-600 italic">{role}</td>
    </tr>
);


const Proveedores = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
                
                <header className="p-6 sm:p-10 bg-gray-800 text-white">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                        {architectureData.title}
                    </h1>
                    <p className="text-xl font-light text-gray-300">
                        {architectureData.subtitle}
                    </p>
                </header>


                <section className="p-6 sm:p-10 border-b border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 0v10m-9-3h-1m2 0h-1m-1 0h1" /></svg>
                        Estrategia Conceptual
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        {architectureData.description}
                    </p>
                    
                    <div className="mt-6 text-center">
                        
                        <div className=" object-cover bg-gray-200 h-fit flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
                            <img src="/Hackaton.svg" alt="Diagrama de Estrategia Conceptual" className="w-full h-96 sm:h-128" />
                            


                        </div>
                    </div>
                </section>


                <section className="p-6 sm:p-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Matriz de Servicios Homólogos y Resiliencia
                    </h2>
                    <div className="overflow-x-auto bg-white rounded-lg border border-gray-200 shadow-md">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Componente Crítico
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-green-600 uppercase tracking-wider">
                                        Proveedor Primario (AWS)
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-blue-600 uppercase tracking-wider">
                                        Proveedor Secundario (Azure)
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider">
                                        Rol en la Continuidad de Negocio
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {architectureData.services.map((service, index) => (
                                    <ServiceRow key={index} {...service} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>


                <section className="p-6 sm:p-10 bg-gray-50 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        Razonamiento Técnico Coherente (KPIs)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {architectureData.justification.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-500 transform hover:scale-[1.02] transition duration-300">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.heading}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <footer className="p-6 sm:p-10 bg-gray-800 text-center">
                    <p className="text-sm text-gray-400">
                        Propuesta técnica de resiliencia para el Reto 6 (CLD) - Modelo Serverless Multi-Nube.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Proveedores;