# 📋 Template-Driven Forms

## (Formularios Basados en Plantillas)

### 🧠 Características:

+ Declarados directamente en el HTML usando directivas (ngModel, ngForm, etc.).

+ Angular genera automáticamente los objetos de formulario en segundo plano.

+ Usa data binding bidireccional con [(ngModel)].

+ Ideal para formularios simples y pequeños.

### Ventajas:

+ Más simple y rápido de implementar.

+ Menos código TypeScript.

+ Ideal para prototipos o apps pequeñas.

### ⚠️ Desventajas:

+ Difícil de escalar y mantener con formularios complejos.

+ Menor control programático del formulario.

+ Validaciones y estados más acoplados a la vista.

### 📍 Casos de uso típicos:

- Formularios de contacto simples.

- Formularios con pocos campos.

- Apps pequeñas sin lógica de validación compleja.

----


# ⚙️ Reactive Forms

## (Formularios Reactivos o Basados en Código)

### 🧠 Características:

- Declarados y controlados completamente desde TypeScript.

- Usa clases como FormGroup, FormControl, FormArray.

- No hay data binding bidireccional automático; se sincroniza por medio de APIs reactivas (Observables).

- Ideal para formularios grandes, dinámicos o complejos.
  
+ ### ✅ Ventajas:

+ Mayor control programático sobre cada campo y su estado.

+ Escalable y mantenible en formularios grandes.

+ Validaciones personalizadas más fáciles de implementar.

+ Ideal para lógica compleja o dinámica (agregar/eliminar campos en tiempo real).

### ⚠️ Desventajas:

+ Más código y configuración inicial.

+ Curva de aprendizaje un poco más alta.

### 📍 Casos de uso típicos:

+ Formularios de registro complejos.

+ Formularios dinámicos que cambian según la entrada del usuario.

+ Formularios con validaciones condicionales y lógica de negocio avanzada.