import React, { useState } from 'react';

const terraformData = {
    title: "Infraestructura como Código (IaC)",
    subtitle: "Automatización del Despliegue Multi-Nube con Terraform",
    intro: {
        heading: "¿Qué es Terraform?",
        description: "Terraform es una herramienta de Infraestructura como Código (IaC) que permite definir, provisionar y gestionar infraestructura en la nube mediante archivos de configuración declarativos. En lugar de configurar manualmente recursos en AWS y Azure, escribimos código que define exactamente qué infraestructura necesitamos, y Terraform se encarga de crearla, actualizarla o destruirla de forma automatizada.",
        benefits: [
            "Reproducibilidad: La misma configuración genera idéntica infraestructura",
            "Versionamiento: Control de cambios con Git como cualquier código",
            "Automatización: Eliminación de errores humanos en configuraciones manuales",
            "Multi-nube: Un solo lenguaje para gestionar AWS, Azure, GCP y más"
        ]
    },
    codeBlocks: [
        {
            title: "1. Configuración de Proveedores",
            description: "Define los proveedores cloud que Terraform gestionará. En este caso, AWS como primario y Azure como secundario.",
            code: `provider "aws" {
  region = "us-east-1"
}

provider "azurerm" {
  features {}
}`,
            explanation: "Establece las credenciales y regiones donde se desplegarán los recursos. Terraform usará las APIs de ambos proveedores simultáneamente."
        },
        {
            title: "2. Base de Datos Primaria (AWS DynamoDB)",
            description: "Crea la base de datos NoSQL principal con streaming habilitado para replicación.",
            code: `resource "aws_dynamodb_table" "core_db" {
  name           = "DB_DatosCriticos_Primary"
  hash_key       = "ID"
  billing_mode   = "PROVISIONED"
  read_capacity  = 5
  write_capacity = 5
  
  stream_enabled   = true
  stream_view_type = "NEW_AND_OLD_IMAGES"
}`,
            explanation: "El stream captura todos los cambios en tiempo real para replicarlos hacia Azure Cosmos DB, garantizando sincronización continua."
        },
        {
            title: "3. Base de Datos Secundaria (Azure Cosmos DB)",
            description: "Despliega la réplica en Azure que actuará como base de datos de respaldo en modo Warm Standby.",
            code: `resource "azurerm_cosmosdb_account" "core_db_replica" {
  name                = "cosmosdb-dr-replica"
  location            = "East US 2"
  resource_group_name = azurerm_resource_group.rg_dr.name
  offer_type          = "Standard"
  kind                = "GlobalDocumentDB"
  
  consistency_policy {
    consistency_level = "Session"
  }
}`,
            explanation: "Cosmos DB permanece activo con capacidad mínima, listo para escalar instantáneamente cuando Route 53 active el failover."
        },
        {
            title: "4. Configuración de Failover (Route 53)",
            description: "Implementa el DNS inteligente que monitorea AWS y redirige automáticamente a Azure en caso de fallo.",
            code: `resource "aws_route53_health_check" "aws_health_check" {
  fqdn              = aws_apigatewayv2_api.aws_endpoint.api_endpoint
  type              = "HTTP"
  failure_threshold = 3
  request_interval  = 30
}

resource "aws_route53_record" "primary_record" {
  zone_id = "Z1234567890ABC"
  name    = "app.energia.com"
  type    = "A"
  
  failover_routing_policy {
    type = "PRIMARY"
  }
  health_check_id = aws_route53_health_check.aws_health_check.id
}`,
            explanation: "Route 53 verifica la salud de AWS cada 30 segundos. Si detecta 3 fallos consecutivos, cambia automáticamente el registro DNS para apuntar a Azure."
        }
    ],
    workflow: {
        title: "Flujo de Trabajo con Terraform",
        steps: [
            {
                command: "terraform init",
                description: "Inicializa el proyecto y descarga los plugins necesarios para AWS y Azure",
                icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            },
            {
                command: "terraform plan",
                description: "Genera un plan de ejecución mostrando qué recursos se crearán, modificarán o destruirán",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            },
            {
                command: "terraform apply",
                description: "Ejecuta el plan y despliega toda la infraestructura multi-nube en minutos",
                icon: "M5 13l4 4L19 7"
            },
            {
                command: "terraform destroy",
                description: "Elimina completamente la infraestructura cuando ya no se necesita",
                icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            }
        ]
    },
    realWorldImpact: {
        title: "Impacto en el Mundo Real",
        scenarios: [
            {
                scenario: "Sin Terraform (Manual)",
                time: "4-6 horas",
                errors: "Alto riesgo",
                description: "Configurar manualmente 20+ recursos en AWS Console, luego repetir en Azure Portal. Alta probabilidad de inconsistencias y errores de configuración.",
                color: "from-red-500 to-red-700"
            },
            {
                scenario: "Con Terraform (Automatizado)",
                time: "5-10 minutos",
                errors: "Mínimo",
                description: "Ejecutar 'terraform apply' una sola vez. Infraestructura idéntica, versionada y auditable. Rollback instantáneo si algo falla.",
                color: "from-green-500 to-emerald-600"
            }
        ]
    }
};

const CodeBlock = ({ title, description, code, explanation, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-purple-500/30 overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-xl"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="p-6 border-b border-gray-700/50">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            
            <div className="relative">
                <div className="bg-gray-900 p-6 font-mono text-sm overflow-x-auto">
                    <pre className="text-green-400">
                        <code>{code}</code>
                    </pre>
                </div>
                
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-xs font-semibold transition-colors duration-300"
                >
                    {isExpanded ? 'Ocultar' : 'Ver'} Explicación
                </button>
            </div>
            
            {isExpanded && (
                <div className="p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
                    <div className="flex items-start space-x-3">
                        <div className="bg-purple-500/20 p-2 rounded-lg flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{explanation}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const WorkflowStep = ({ command, description, icon, index }) => (
    <div 
        className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-indigo-500/30 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20"
        style={{ animationDelay: `${index * 100}ms` }}
    >
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={icon}/>
            </svg>
        </div>
        <div className="flex-1">
            <code className="text-cyan-400 font-mono text-sm bg-gray-900/50 px-3 py-1 rounded">
                {command}
            </code>
            <p className="text-gray-400 text-sm mt-2">{description}</p>
        </div>
    </div>
);

const TerraformExplanation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black p-4 sm:p-8 font-sans antialiased">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-10 relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-indigo-900/30 p-10 sm:p-14 backdrop-blur-xl border border-purple-500/20 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                            </svg>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                            {terraformData.title}
                        </h1>
                        <p className="text-xl font-light text-gray-300">
                            {terraformData.subtitle}
                        </p>
                    </div>
                </header>

                {/* Introducción */}
                <section className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-indigo-500/20 shadow-2xl">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-6">
                        {terraformData.intro.heading}
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        {terraformData.intro.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {terraformData.intro.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start space-x-3 p-4 bg-indigo-900/20 rounded-xl border border-indigo-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span className="text-gray-300 text-sm">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bloques de Código */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8 text-center">
                        Componentes Clave del Código Terraform
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {terraformData.codeBlocks.map((block, index) => (
                            <CodeBlock key={index} index={index} {...block} />
                        ))}
                    </div>
                </section>

                {/* Workflow */}
                <section className="mb-10 p-8 sm:p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl border border-cyan-500/20 shadow-2xl">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 text-center">
                        {terraformData.workflow.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {terraformData.workflow.steps.map((step, index) => (
                            <WorkflowStep key={index} index={index} {...step} />
                        ))}
                    </div>
                </section>

                {/* Comparación */}
                <section className="mb-10">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-8 text-center">
                        {terraformData.realWorldImpact.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {terraformData.realWorldImpact.scenarios.map((scenario, index) => (
                            <div 
                                key={index}
                                className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700/50 p-8 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${scenario.color} opacity-10`}></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-4">
                                        {scenario.scenario}
                                    </h3>
                                    
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                            </svg>
                                            <span className={`font-bold ${index === 0 ? 'text-red-400' : 'text-green-400'}`}>
                                                {scenario.time}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                            </svg>
                                            <span className={`font-bold ${index === 0 ? 'text-red-400' : 'text-green-400'}`}>
                                                {scenario.errors}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-300 leading-relaxed">
                                        {scenario.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer className="p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl text-center border border-purple-500/20">
                    <p className="text-gray-400 text-sm mb-2">
                        <span className="font-bold text-purple-400">Resultado:</span> Con Terraform, desplegamos infraestructura multi-nube resiliente en minutos, no en horas.
                    </p>
                    <p className="text-gray-500 text-xs">
                        Código completo disponible en el repositorio del proyecto - Reto 6 (CLD)
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default TerraformExplanation;