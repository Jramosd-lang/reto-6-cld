import React from 'react';

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


const TimelineStep = ({ time, event, detail }) => (
    <div className="flex relative pb-12">
        
        <div className="h-full w-px bg-red-600 absolute inset-0 left-2.5 top-5 sm:left-4.5 sm:top-5"></div>
        
        
        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-700 inline-flex items-center justify-center text-white relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg>
        </div>
        
        <div className="flex-grow pl-6">
            <time className="font-bold text-xl text-red-400 block mb-1">{time}</time>
            <h3 className="font-extrabold text-white text-lg sm:text-xl mb-2">{event}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{detail}</p>
        </div>
    </div>
);

const CasoCritico = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto bg-gray-800 shadow-2xl rounded-xl overflow-hidden border-t-8 border-red-600">
                
                <header className="p-6 sm:p-10 bg-gray-900 text-white text-center">
                    <p className="text-sm font-semibold uppercase text-red-500 mb-2">{crisisData.subtitle}</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                        {crisisData.title}
                    </h1>
                </header>

                
                <section className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    
                    <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-red-500 mb-4 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                            {crisisData.crisis.heading}
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {crisisData.crisis.description}
                        </p>
                        <div className="mt-8 p-4 bg-red-800 bg-opacity-30 rounded-lg border border-red-700 text-red-200">
                            <p className="font-mono text-sm">Causa Raíz Ficticia: Fallo de Routing Regional en la Nube Primaria (AWS).</p>
                        </div>
                    </div>

                    
                    <div className="bg-gray-700 p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold text-green-400 mb-6 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 2.532.99 4.908 2.553 6.945A11.956 11.956 0 0112 21.056c2.532-.045 4.908-.99 6.945-2.553A11.956 11.956 0 0121.056 12c-.045-2.532-.99-4.908-2.553-6.945z"/></svg>
                            Respuesta de Resiliencia (RTO Cumplido)
                        </h2>
                        <div className="relative">
                            {crisisData.responseSteps.map((step, index) => (
                                <TimelineStep key={index} {...step} />
                            ))}
                        </div>
                    </div>
                </section>

                
                <footer className="p-6 sm:p-10 bg-gray-900 border-t-4 border-red-600">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-2xl italic font-light text-gray-200 mb-4">
                            "{crisisData.testimonial.quote}"
                        </p>
                        <p className="text-base font-semibold text-red-500">
                            — {crisisData.testimonial.source}
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default CasoCritico;