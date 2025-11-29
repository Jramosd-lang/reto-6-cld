import React, { useState, useEffect } from 'react';

const crisisData = {
    title: "CASO DE ESTUDIO CRÍTICO: El 'Apagón' de Proveedor",
    subtitle: "DEMOSTRACIÓN DE RESILIENCIA EN TIEMPO REAL GRACIAS A LA ARQUITECTURA MULTI-NUBE",
    crisis: {
        heading: "La Amenaza: Ciberataque Catastrófico al Punto Cero (AWS)",
        description: "A las 04:30 AM, un ataque de denegación de servicio distribuido (DDoS) a una escala sin precedentes impacta directamente la infraestructura regional de red del Proveedor Primario (AWS). Esto resulta en la pérdida total de conectividad a los servicios de cómputo y bases de datos, amenazando la operatividad de los sistemas energéticos críticos."
    },
    responseSteps: [
        { 
            time: "04:31 AM", 
            event: "DETECCIÓN AUTOMÁTICA", 
            detail: "Amazon Route 53 (DNS Global) detecta la falla masiva en los Health Checks y activa la alarma de 'Fallo de Infraestructura'." 
        },
        { 
            time: "04:32 AM", 
            event: "INICIO DEL FAILOVER", 
            detail: "El Balanceador de Carga Global (Azure Traffic Manager) recibe la señal. El DNS global redirige todo el tráfico de usuarios y sistemas al Proveedor Secundario (Azure)." 
        },
        { 
            time: "04:35 AM", 
            event: "OPERACIÓN RESTAURADA", 
            detail: "Gracias al modelo 'Warm Standby', Azure Functions y Cosmos DB, alimentados por la última réplica asíncrona (RPO < 5 min), están listos. La aplicación se levanta completamente en Azure." 
        },
        { 
            time: "04:40 AM", 
            event: "IMPACTO CERO EN EL NEGOCIO", 
            detail: "Los sistemas energéticos críticos mantuvieron la conectividad y la operación sin interrupciones significativas. El RTO (Tiempo de Recuperación Objetivo) se cumplió en 7 minutos, muy por debajo de las 4 horas planeadas." 
        }
    ],
    testimonial: {
        quote: "Diseñar una infraestructura que opera sobre dos gigantes tecnológicos no fue un costo, fue la única póliza de seguro que nos garantizó cero tiempo de inactividad ante un evento de esta magnitud.",
        source: "Jefe de Arquitectura e Infraestructura, Sector Energético Regional (Ficticio)"
    }
};

const TimelineStep = ({ time, event, detail, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), index * 200);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className={`flex relative pb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="h-full w-0.5 bg-gradient-to-b from-red-500 via-red-600 to-red-700 absolute inset-0 left-2.5 top-5 sm:left-4.5 sm:top-5"></div>
            
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 inline-flex items-center justify-center text-white relative z-10 shadow-lg shadow-red-500/50 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/>
                </svg>
            </div>
            
            <div className="flex-grow pl-6 group">
                <time className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 block mb-1">
                    {time}
                </time>
                <h3 className="font-extrabold text-white text-lg sm:text-xl mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {event}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {detail}
                </p>
            </div>
        </div>
    );
};

const CasoCritico = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                {/* Header con efecto de brillo */}
                <header className="mb-8 text-center relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/20 via-red-800/20 to-red-900/20 p-8 sm:p-12 backdrop-blur-sm border border-red-500/20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent animate-shimmer"></div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-3 relative z-10">
                        {crisisData.subtitle}
                    </p>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600 relative z-10 animate-gradient">
                        {crisisData.title}
                    </h1>
                </header>

                {/* Contenido principal con grid mejorado */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {/* Panel de Crisis */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-red-500/30 hover:border-red-500/50 transition-all duration-500 hover:shadow-red-500/20 group">
                        <div className="absolute inset-0 bg-red-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 mb-6 flex items-center relative z-10">
                            <div className="bg-red-500/20 p-2 rounded-lg mr-3 group-hover:bg-red-500/30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                            </div>
                            {crisisData.crisis.heading}
                        </h2>
                        
                        <p className="text-gray-300 leading-relaxed text-lg relative z-10 mb-8">
                            {crisisData.crisis.description}
                        </p>
                        
                        <div className="mt-8 p-5 bg-gradient-to-r from-red-900/40 to-red-800/40 rounded-xl border border-red-600/40 backdrop-blur-sm relative z-10 overflow-hidden group/alert">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/10 to-red-600/0 animate-pulse"></div>
                            <p className="font-mono text-sm text-red-200 relative z-10">
                                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                                Causa Raíz Ficticia: Fallo de Routing Regional en la Nube Primaria (AWS).
                            </p>
                        </div>
                    </div>

                    {/* Panel de Respuesta */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-green-500/30 hover:border-green-500/50 transition-all duration-500 hover:shadow-green-500/20 group">
                        <div className="absolute inset-0 bg-green-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-8 flex items-center relative z-10">
                            <div className="bg-green-500/20 p-2 rounded-lg mr-3 group-hover:bg-green-500/30 transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 2.532.99 4.908 2.553 6.945A11.956 11.956 0 0112 21.056c2.532-.045 4.908-.99 6.945-2.553A11.956 11.956 0 0021.056 12c-.045-2.532-.99-4.908-2.553-6.945z"/>
                                </svg>
                            </div>
                            Respuesta de Resiliencia (RTO Cumplido)
                        </h2>
                        
                        <div className="relative z-10">
                            {crisisData.responseSteps.map((step, index) => (
                                <TimelineStep key={index} index={index} {...step} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial mejorado */}
                <footer className="mt-8 p-8 sm:p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-red-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-red-500/5"></div>
                    
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="mb-6">
                            <svg className="w-12 h-12 text-red-500/30 mx-auto" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                            </svg>
                        </div>
                        
                        <p className="text-2xl sm:text-3xl italic font-light text-gray-200 mb-6 leading-relaxed">
                            {crisisData.testimonial.quote}
                        </p>
                        
                        <div className="flex items-center justify-center">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-500 mr-4"></div>
                            <p className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                                {crisisData.testimonial.source}
                            </p>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-500 ml-4"></div>
                        </div>
                    </div>
                </footer>
            </div>

            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes gradient {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite;
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 3s ease infinite;
                }
            `}</style>
            {/* Footer */}
                <footer className="p-8 mt-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl text-center border border-indigo-500/20">
                    <p className="text-sm text-gray-400">
                        Propuesta técnica de resiliencia para el Reto 6 (CLD) - Modelo Serverless Multi-Nube.
                    </p>
                </footer>
        </div>
    );
};

export default CasoCritico;