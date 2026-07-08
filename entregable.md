# 📄 Reporte de Entregable: Infraestructura de Oficina Virtual y Plataforma Web

## 📊 1. Resumen Ejecutivo de la Infraestructura
Este proyecto consolida el despliegue técnico completo de una red empresarial privada y aislada mediante el uso de la suite de virtualización **VirtualBox**[cite: 18]. La arquitectura simula de extremo a extremo las interacciones operativas reales entre una entidad centralizadora de directivas y recursos empresariales (**Controlador de Dominio en Windows Server**) y una estación de trabajo operativa corporativa (**Cliente en Windows 10 Pro**).

### 🛠️ Ficha Técnica del Entorno
*   **Nombre de Dominio Interno:** `inacap.local`[cite: 18]
*   **Segmento de Red Aislado (Cable Invisible):** Red Interna en VirtualBox configurada bajo el identificador estricto `redlab`.
*   **Servidor de Infraestructura (SRV-DC01):**
    *   **Dirección IP Estática:** `192.168.10.10`[cite: 18]
    *   **Máscara de Subred:** `255.255.255.0`[cite: 18]
    *   **Servidor de DNS Asignado:** Localhost (`127.0.0.1`) promoviéndose a sí mismo como raíz de resolución de nombres.
    *   **Roles Activos:** Servicios de Dominio de Active Directory (AD DS), Servidor DNS, Servidor DHCP.
*   **Estación de Trabajo Cliente (PC01):**
    *   **Sistema Operativo:** Windows 10 Pro (Versión mandatoria para compatibilidad e integración empresarial).
    *   **Dirección IP:** Dinámica, suministrada automáticamente por el ámbito de exclusión DHCP (`192.168.10.50` - `192.168.10.100`).
    *   **Mecanismo de Confianza:** Sincronización horaria estricta vía protocolo Kerberos.

---

## 💻 2. Componentes Estratégicos Configurados
1.  **Estructuración Organizativa (Active Directory):** Creación de la Unidad Organizativa (UO) denominada `Ventas`, integrando el grupo de seguridad corporativo `G-Ventas` y cuentas operativas parametrizadas con contraseñas de alta complejidad y sin expiración predeterminada.
2.  **Automatización de Red (DHCP):** Despliegue del Ámbito `RedLab` para mitigar errores humanos de direccionamiento manual, facilitando la escalabilidad del laboratorio informático.
3.  **Gobernanza Informática (GPO):** Implementación de la directiva de seguridad `GPO-Ventas` vinculada directamente a la Unidad Organizativa. Restringe de forma inflexible el acceso al **Panel de Control** y configuraciones del sistema, mitigando vulnerabilidades internas y alteraciones del sistema por parte de usuarios finales.

---

## 🌐 3. Ecosistema de Despliegue y Acceso Web
Para maximizar el alcance del proyecto técnico y presentar la documentación de una forma disruptiva y moderna, las diapositivas de defensa del laboratorio se programaron como una aplicación de software en **React**

*   **🌐 Enlace de Acceso Público:** [https://diapo-pos-ang.vercel.app/](https://diapo-pos-ang.vercel.app/)[cite: 18]
*   **📦 Código Fuente Versionado:** [https://github.com/AnglerPosada-30/DiapoPosAng.git](https://github.com/AnglerPosada-30/DiapoPosAng.git)[cite: 18]
*   **📚 Repositorio de Documentación Completa:** Al finalizar el flujo interactivo de las diapositivas de la aplicación, se ha incrustado un componente con un botón estilo Microsoft Fluent que enlaza de manera directa al **Manual Técnico Completo de la Oficina Virtual**, garantizando la portabilidad del conocimiento para el evaluador o espectadores[cite: 18].

---