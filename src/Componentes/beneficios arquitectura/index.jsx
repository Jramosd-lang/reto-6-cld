
const architectureData = {
    hero: {
        title: "Arquitectura Multi-Nube Resiliente",
        subtitle: "Solución Serverless para Datos Energéticos Críticos",
        tagline: "Alta Disponibilidad • Tolerancia a Fallos • Zero Downtime"
    },
    problem: {
        title: "El Desafío",
        description: "La disponibilidad continua de datos energéticos regionales es crítica para la toma de decisiones y la operación de infraestructuras. Sin embargo, depender de un único proveedor de nube expone el sistema a riesgos significativos ante fallos críticos, interrupciones regionales o problemas de conectividad.",
        risks: [
            { icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z", text: "Pérdida de información crítica", color: "red" },
            { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", text: "Retrasos en la respuesta operativa", color: "orange" },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Afectación a la resiliencia del sistema", color: "yellow" }
        ]
    },
    solution: {
        title: "La Solución",
        description: "Diseñar una arquitectura multi-nube (AWS como proveedor primario y Azure como secundario) que garantice alta disponibilidad y resiliencia mediante un modelo Serverless Activo-Pasivo Caliente (Warm Standby) con tolerancia a fallos a nivel de proveedor.",
        model: "Warm Standby"
    },
    benefits: [
        {
            title: "Alta Disponibilidad",
            description: "Garantiza operación continua 24/7/365 con SLA del 99.99%, incluso ante fallos críticos del proveedor primario.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 2.532.99 4.908 2.553 6.945A11.956 11.956 0 0112 21.056c2.532-.045 4.908-.99 6.945-2.553A11.956 11.956 0 0021.056 12c-.045-2.532-.99-4.908-2.553-6.945z",
            color: "from-green-500 to-emerald-600",
            metric: "99.99%",
            metricLabel: "Uptime"
        },
        {
            title: "Failover Automático",
            description: "Detección y conmutación automática en menos de 7 minutos sin intervención humana mediante Route 53 y Traffic Manager.",
            icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
            color: "from-blue-500 to-cyan-600",
            metric: "<7 min",
            metricLabel: "RTO"
        },
        {
            title: "Escalabilidad Serverless",
            description: "Lambda y Azure Functions escalan automáticamente según demanda, eliminando la gestión de servidores y optimizando costos.",
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            color: "from-purple-500 to-pink-600",
            metric: "Auto",
            metricLabel: "Scaling"
        },
        {
            title: "Mitigación de Vendor Lock-in",
            description: "Reduce dependencia de un solo proveedor, permitiendo flexibilidad en gestión de costos y negociación de contratos.",
            icon: "M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z",
            color: "from-orange-500 to-red-600",
            metric: "2",
            metricLabel: "Providers"
        },
        {
            title: "RPO Optimizado",
            description: "Replicación asíncrona continua entre DynamoDB y Cosmos DB garantiza pérdida de datos menor a 5 minutos.",
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
            color: "from-indigo-500 to-purple-600",
            metric: "<5 min",
            metricLabel: "RPO"
        },
        {
            title: "Costos Optimizados",
            description: "Modelo Warm Standby mantiene Azure en capacidad mínima hasta que se necesite, reduciendo costos de DR hasta 70%.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            color: "from-yellow-500 to-orange-600",
            metric: "-70%",
            metricLabel: "Costos DR"
        }
    ],
    characteristics: [
        {
            title: "Replicación Continua",
            description: "DynamoDB Streams captura cambios en tiempo real y los replica a Cosmos DB mediante Lambda/Functions, manteniendo ambas bases sincronizadas.",
            tech: ["DynamoDB Streams", "Change Data Capture", "Async Replication"]
        },
        {
            title: "Monitoreo Proactivo",
            description: "Health checks cada 30 segundos verifican disponibilidad de AWS. Tres fallos consecutivos activan el failover automático a Azure.",
            tech: ["Route 53 Health Checks", "CloudWatch Alarms", "Azure Monitor"]
        },
        {
            title: "Enrutamiento Inteligente",
            description: "DNS global gestiona tráfico con políticas de failover, dirigiendo usuarios al proveedor activo sin cambios en la aplicación.",
            tech: ["Route 53 DNS", "Traffic Manager", "Global Load Balancing"]
        },
        {
            title: "Conexión Dedicada",
            description: "Direct Connect y ExpressRoute proporcionan enlaces privados de alta velocidad para replicación, reduciendo latencia y costos.",
            tech: ["AWS Direct Connect", "Azure ExpressRoute", "Private Connectivity"]
        }
    ],
    sprints: [
        {
            number: 1,
            title: "Análisis y Planificación",
            description: "Análisis del proyecto multi-nube con el Product Owner y equipo de desarrollo. Organización de tareas y definición de alcance.",
            deliverables: ["Backlog priorizado", "Estimaciones de esfuerzo", "Roadmap del proyecto"],
            color: "from-blue-500 to-blue-600"
        },
        {
            number: 2,
            title: "Diseño de Arquitectura",
            description: "Establecimiento del diseño arquitectónico con supervisión del Scrum Master para correcta ejecución de tareas asignadas.",
            deliverables: ["Diagrama de arquitectura", "Selección de servicios", "Definición de KPIs"],
            color: "from-purple-500 to-purple-600"
        },
        {
            number: 3,
            title: "Revisión y Correcciones",
            description: "Verificación e identificación de errores. Correcciones necesarias en el diagrama y componentes del proyecto.",
            deliverables: ["Diagrama validado", "Documentación técnica", "Plan de contingencia"],
            color: "from-green-500 to-green-600"
        },
        {
            number: 4,
            title: "Presentación Final",
            description: "Elaboración de presentación en Word y web. Inclusión de caso crítico y demostración de Terraform para despliegue.",
            deliverables: ["Presentación web", "Caso de estudio", "Código Terraform"],
            color: "from-orange-500 to-orange-600"
        }
    ],
    metrics: [
        { label: "Disponibilidad", value: "99.99%", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "RTO", value: "< 7 min", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
        { label: "RPO", value: "< 5 min", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
        { label: "Ahorro Costos", value: "70%", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
    ]
};

const BenefitCard = ({ title, description, icon, color, metric, metricLabel, index }) => (
    <div 
        className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2 relative overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        <div className="flex items-start justify-between mb-4">
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
                </svg>
            </div>
            
            <div className="text-right">
                <div className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br ${color}`}>
                    {metric}
                </div>
                <div className="text-xs text-gray-500 uppercase">{metricLabel}</div>
            </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
            {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const CharacteristicCard = ({ title, description, tech, index }) => (
    <div 
        className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
            {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {description}
        </p>
        <div className="flex flex-wrap gap-2">
            {tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-purple-900/30 border border-purple-500/30 rounded-full text-xs text-purple-300">
                    {t}
                </span>
            ))}
        </div>
    </div>
);

const SprintCard = ({ number, title, description, deliverables, color, index }) => (
    <div 
        className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group"
        style={{ animationDelay: `${index * 150}ms` }}
    >
        <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${color}`}></div>
        
        <div className="flex items-start space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xl">{number}</span>
            </div>
            
            <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {description}
                </p>
                
                <div className="space-y-2">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Entregables:</p>
                    {deliverables.map((item, i) => (
                        <div key={i} className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                            </svg>
                            <span className="text-gray-400 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const ArchitectureBenefits = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <header className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 p-12 sm:p-16 backdrop-blur-xl border border-indigo-500/30 shadow-2xl">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full mb-6">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm text-indigo-300 font-semibold">{architectureData.hero.tagline}</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            {architectureData.hero.title}
                        </h1>
                        <p className="text-2xl font-light text-gray-300 max-w-3xl mx-auto">
                            {architectureData.hero.subtitle}
                        </p>
                    </div>
                </header>

                {/* Problem Section */}
                <section className="mb-12 p-8 sm:p-10 bg-gradient-to-br from-red-900/20 to-orange-900/20 rounded-3xl border border-red-500/30 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6 flex items-center">
                        <div className="bg-red-500/20 p-3 rounded-xl mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>
                        </div>
                        {architectureData.problem.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {architectureData.problem.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {architectureData.problem.risks.map((risk, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-gray-800/50 rounded-xl border border-red-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${risk.color}-500 flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d={risk.icon}/>
                                </svg>
                                <span className="text-gray-300 text-sm">{risk.text}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solution Section */}
                <section className="mb-12 p-8 sm:p-10 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-3xl border border-green-500/30 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6 flex items-center">
                        <div className="bg-green-500/20 p-3 rounded-xl mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.007 12.007 0 002.944 12c.045 2.532.99 4.908 2.553 6.945A11.956 11.956 0 0112 21.056c2.532-.045 4.908-.99 6.945-2.553A11.956 11.956 0 0021.056 12c-.045-2.532-.99-4.908-2.553-6.945z"/>
                            </svg>
                        </div>
                        {architectureData.solution.title}
                    </h2>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {architectureData.solution.description}
                    </p>
                    
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl">
                        <span className="text-green-300 font-semibold mr-3">Modelo de Despliegue:</span>
                        <span className="text-white font-bold text-lg">{architectureData.solution.model}</span>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 text-center">
                        Beneficios Clave de la Arquitectura
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {architectureData.benefits.map((benefit, index) => (
                            <BenefitCard key={index} index={index} {...benefit} />
                        ))}
                    </div>
                </section>

                {/* Characteristics */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center">
                        Características Técnicas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {architectureData.characteristics.map((char, index) => (
                            <CharacteristicCard key={index} index={index} {...char} />
                        ))}
                    </div>
                </section>

                {/* Metrics Bar */}
                <section className="mb-12 p-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl border border-indigo-500/30 shadow-2xl">
                    <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8">
                        KPIs de Rendimiento
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {architectureData.metrics.map((metric, index) => (
                            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105">
                                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl inline-flex mb-3 shadow-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d={metric.icon}/>
                                    </svg>
                                </div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">
                                    {metric.value}
                                </div>
                                <div className="text-sm text-gray-500 uppercase">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sprints Timeline */}
                <section className="mb-12">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-8 text-center">
                        Metodología de Desarrollo (Sprints)
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {architectureData.sprints.map((sprint, index) => (
                            <SprintCard key={index} index={index} {...sprint} />
                        ))}
                    </div>
                </section>

                {/* Footer CTA */}
                <footer className="p-10 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 rounded-3xl border border-indigo-500/30 text-center backdrop-blur-sm">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Resultado: Infraestructura Resiliente y Escalable
                    </h3>
                    <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
                        Esta arquitectura garantiza continuidad operativa ante cualquier escenario de fallo, protegiendo datos energéticos críticos y cumpliendo con los más altos estándares de disponibilidad.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white font-semibold shadow-lg">
                            ✓ Alta Disponibilidad
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl text-white font-semibold shadow-lg">
                            ✓ Tolerancia a Fallos
                        </div>
                        <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white font-semibold shadow-lg">
                            ✓ Optimización de Costos
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default ArchitectureBenefits;