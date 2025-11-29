import React, { useState } from 'react';

const architectureData = {
    title: "Reto 6: Arquitectura Multi-Nube para Resiliencia Regional (CLD)",
    subtitle: "Garantizando la Continuidad de Negocio para Datos Energéticos Críticos",
    description: "Esta arquitectura adopta un modelo Serverless (Sin Servidor) Activo-Pasivo Caliente (Warm Standby), distribuyendo la carga de trabajo entre AWS (Primario) y Azure (Secundario) para lograr una tolerancia a fallos a nivel de proveedor (Cloud Provider).",
    services: [
        {
            component: "Base de Datos NoSQL",
            aws: "Amazon DynamoDB",
            azure: "Azure Cosmos DB",
            role: "Almacenamiento de datos transaccionales de alta disponibilidad con replicación asíncrona inter-cloud.",
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        },
        {
            component: "Lógica de Negocio / Cómputo",
            aws: "AWS Lambda",
            azure: "Azure Functions",
            role: "Ejecución de código de backend sin servidor, escalando dinámicamente según la demanda.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        },
        {
            component: "Enrutamiento Global y Failover",
            aws: "Amazon Route 53 (DNS)",
            azure: "Azure Front Door / Traffic Manager",
            role: "Monitoreo constante del estado de salud del servicio primario y redirección automática del tráfico en caso de desastre (Failover).",
            icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            component: "Flujo de Eventos (Streaming)",
            aws: "Amazon Kinesis Stream",
            azure: "Azure Event Hub",
            role: "Ingesta y procesamiento en tiempo real de grandes volúmenes de datos de telemetría energética.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            component: "Interconexión Privada",
            aws: "AWS Direct Connect",
            azure: "Azure ExpressRoute",
            role: "Conexión dedicada y segura para la replicación de datos, minimizando la latencia y los costos de salida (Egress).",
            icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        },
    ],
    justification: [
        {
            heading: "Homologación de Servicios y RPO/RTO",
            content: "La selección de servicios homólogos (ej. DynamoDB ↔ Cosmos DB) garantiza que la aplicación requiera mínimas modificaciones para operar en el entorno secundario. La replicación de datos es configurada para un RPO (Punto de Recuperación Objetivo) bajo, mientras que el Failover automático asegura un RTO (Tiempo de Recuperación Objetivo) mínimo.",
            icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
            color: "from-blue-500 to-cyan-500"
        },
        {
            heading: "Distribución de Riesgos (Resiliencia)",
            content: "La separación de la carga de trabajo entre dos proveedores mitiga el riesgo de indisponibilidad total. Si AWS sufre un fallo regional o global, Azure actúa inmediatamente como un sitio de DR totalmente operativo, asegurando la continuidad de las operaciones críticas.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 2.532.99 4.908 2.553 6.945A11.956 11.956 0 0112 21.056c2.532-.045 4.908-.99 6.945-2.553A11.956 11.956 0 0021.056 12c-.045-2.532-.99-4.908-2.553-6.945z",
            color: "from-green-500 to-emerald-500"
        },
        {
            heading: "Mitigación de 'Vendor Lock-in'",
            content: "Adoptar una estrategia Multi-Nube reduce la dependencia de un único proveedor, otorgando mayor flexibilidad en la gestión de costos, negociación de contratos y capacidad para migrar cargas de trabajo en el futuro.",
            icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
            color: "from-purple-500 to-pink-500"
        }
    ]
};

const ServiceRow = ({ component, aws, azure, role, icon, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <tr 
            className="border-b border-gray-700/50 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-900/20 hover:to-purple-900/20"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <td className="px-6 py-5">
                <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                        </svg>
                    </div>
                    <span className="font-semibold text-gray-100">{component}</span>
                </div>
            </td>
            <td className="px-6 py-5">
                <div className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg shadow-orange-500/20' : ''}`}>
                    <span className="font-medium text-orange-300">{aws}</span>
                </div>
            </td>
            <td className="px-6 py-5">
                <div className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 transition-all duration-300 ${isHovered ? 'scale-105 shadow-lg shadow-blue-500/20' : ''}`}>
                    <span className="font-medium text-blue-300">{azure}</span>
                </div>
            </td>
            <td className="px-6 py-5">
                <p className="text-sm text-gray-400 italic leading-relaxed">{role}</p>
            </td>
        </tr>
    );
};

const Proveedores = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                {/* Header con animación */}
                <header className="mb-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/30 via-purple-900/30 to-pink-900/30 p-10 sm:p-14 backdrop-blur-xl border border-indigo-500/20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            {architectureData.title}
                        </h1>
                        <p className="text-xl font-light text-gray-300">
                            {architectureData.subtitle}
                        </p>
                    </div>
                </header>

                {/* Estrategia Conceptual */}
                <section className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-indigo-500/20 shadow-2xl">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6 flex items-center">
                        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl mr-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 0v10m-9-3h-1m2 0h-1m-1 0h1" />
                            </svg>
                        </div>
                        Estrategia Conceptual
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {architectureData.description}
                    </p>
                    
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-2xl p-6 border border-indigo-500/20">
                        <img src="/Hackaton.svg" alt="Diagrama de Estrategia Conceptual" className="w-full h-auto rounded-xl shadow-2xl" />
                    </div>
                </section>

                {/* Matriz de Servicios */}
                <section className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-purple-500/20 shadow-2xl">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 flex items-center">
                        <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-xl mr-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        Matriz de Servicios Homólogos y Resiliencia
                    </h2>
                    
                    <div className="overflow-x-auto rounded-2xl border border-gray-700/50 shadow-xl">
                        <table className="min-w-full">
                            <thead className="bg-gradient-to-r from-gray-700 to-gray-800">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-indigo-300 uppercase tracking-wider">
                                        Componente Crítico
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-orange-300 uppercase tracking-wider">
                                        Proveedor Primario (AWS)
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-blue-300 uppercase tracking-wider">
                                        Proveedor Secundario (Azure)
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-purple-300 uppercase tracking-wider">
                                        Rol en la Continuidad de Negocio
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800/50 backdrop-blur-sm">
                                {architectureData.services.map((service, index) => (
                                    <ServiceRow key={index} index={index} {...service} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* KPIs Cards */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 flex items-center justify-center">
                        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-xl mr-4 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        Razonamiento Técnico Coherente (KPIs)
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {architectureData.justification.map((item, index) => (
                            <div 
                                key={index} 
                                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 relative overflow-hidden"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                
                                <div className={`inline-flex items-center justify-center p-4 rounded-xl bg-gradient-to-br ${item.color} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon}/>
                                    </svg>
                                </div>
                                
                                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                                    {item.heading}
                                </h3>
                                
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                
            </div>
        </div>
    );
};

export default Proveedores;