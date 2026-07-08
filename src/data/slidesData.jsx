import React from 'react';
import {
  Server24Regular, 
  Settings24Regular,
  Database24Regular, 
  Desktop24Regular,
  People24Regular,
  ShieldLock24Regular,
  ArrowDownload24Filled
} from '@fluentui/react-icons';

export const slidesData = [
  {
    id: 1,
    title: "Inicio y Topología del Laboratorio",
    icon: <Server24Regular />,
    content: [
      "Creación de entorno cerrado en VirtualBox mediante la red interna 'redlab'.",
      "SRV-DC01 (Jefe): Servidor Windows con IP fija 192.168.10.10.",
      "PC01 (Empleado): Equipo Windows 10 con asignación automática de IP.",
      "Identificador del ecosistema: Dominio inacap.local."
    ]
  },
  {
    id: 2,
    title: "Configuración Básica del Servidor",
    icon: <Settings24Regular />,
    content: [
      "Instalación de Windows Server (Experiencia de escritorio).",
      "Asignación del nombre de equipo SRV-DC01.",
      "Configuración de IP estática (192.168.10.10) para estabilidad de servicios.",
      "Configuración del DNS apuntando a localhost (127.0.0.1)."
    ]
  },
  {
    id: 3,
    title: "Active Directory y Dominio",
    icon: <Database24Regular />,
    content: [
      "Instalación del rol Servicios de dominio de Active Directory (AD DS).",
      "Promoción del servidor a Controlador de Dominio.",
      "Creación del nuevo bosque raíz inacap.local.",
      "Habilitación automática de resolución de nombres internos (DNS)."
    ]
  },
  {
    id: 4,
    title: "Conectar al Empleado (PC01)",
    icon: <Desktop24Regular />,
    content: [
      "Instalación de Windows 10 Pro y conexión a la red interna.",
      "Verificación de conectividad (ping) hacia el servidor.",
      "Paso crítico: Sincronización exacta de hora para evitar bloqueos de Kerberos.",
      "Unión formal del equipo al dominio inacap.local."
    ]
  },
  {
    id: 5,
    title: "Servicios DHCP y Usuarios",
    icon: <People24Regular />,
    content: [
      "Creación de la Unidad Organizativa 'Ventas' y el grupo 'G-Ventas'.",
      "Generación de cuentas de usuario con contraseñas sin expiración.",
      "Instalación del rol de Servidor DHCP.",
      "Creación del ámbito 'RedLab' para entregar IPs dinámicas (192.168.10.50 a .100)."
    ]
  },
  {
    id: 6,
    title: "Políticas de Grupo (GPO)",
    icon: <ShieldLock24Regular />,
    content: [
      "Creación de la directiva GPO-Ventas vinculada a la Unidad Organizativa.",
      "Activación de la regla: 'Prohibir el acceso al Panel de control y a la configuración'.",
      "Actualización forzada en el cliente usando el comando gpupdate /force.",
      "Asegura que los empleados no desconfiguren las estaciones de trabajo."
    ]
  },
  {
    id: "download",
    title: "Material de Apoyo",
    icon: <ArrowDownload24Filled />,
    content: [
      "Toda la documentación técnica y comandos detallados están disponibles."
    ],
    isDownloadSlide: true
  }
];