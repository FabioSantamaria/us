# 🎁 Guía de Preparación - Escape Room Romántico (Nueva Arquitectura)

## 📋 Resumen de la Estructura

**8 niveles + 1 final** con arquitectura modular clara:
- **Puzzle digital** → **Pista física** → **Búsqueda** → **Regalo** → **Código de 4 dígitos**

Cada nivel tiene:
1. **Desafío digital**: Tipo variado (emocional, lógico, interactivo)
2. **Pista física**: Lugar exacto donde buscar
3. **Regalo**: Pequeño detalle especial
4. **Código**: 4 dígitos para siguiente nivel

## 🧩 Los 8 Niveles + Final

### Nivel 1: Desafío Emocional
- **Tipo**: Pregunta emocional (opción múltiple)
- **Pregunta**: "¿Qué momento especial compartimos bajo las estrellas?"
- **Respuesta correcta**: "Cuando dijiste 'te quiero'"
- **Lugar del regalo**: Donde guardamos nuestros primeros recuerdos juntos
- **Código**: 1234

### Nivel 2: Adivinanza Misteriosa
- **Tipo**: Adivinanza clásica
- **Pregunta**: "Tengo ciudades pero no casas, montañas pero no árboles..."
- **Respuesta**: MAPA
- **Lugar del regalo**: Donde guardamos el café (estantería)
- **Código**: 5678

### Nivel 3: Puzzle Cifrado
- **Tipo**: Cifrado A=1
- **Mensaje cifrado**: "3-15-4-9-7-15"
- **Respuesta**: CODIGO
- **Lugar del regalo**: Cocina (junto a utensilios)
- **Código**: 9012

### Nivel 4: Detección de Error
- **Tipo**: Corrección de error del sistema
- **Error**: "Andrea odia los gatos"
- **Corrección**: AMA
- **Lugar del regalo**: Salón (detrás del sofá)
- **Código**: 3456

### Nivel 5: El Momento de la Verdad
- **Tipo**: Elección entre opciones
- **Opción correcta**: "Seguir el Corazón"
- **Lugar del regalo**: Dormitorio (mesita de noche)
- **Código**: 2468

### Nivel 6: Mensaje Oculto
- **Tipo**: Primeras letras de texto
- **Mensaje oculto**: "NOS" (de "NO MI...")
- **Lugar del regalo**: Baño (dentro del armario)
- **Código**: 1357

### Nivel 7: Reto Interactivo
- **Tipo**: Secuencia de memoria contrarreloj
- **Secuencia**: 2 → 4 → 1 → 3
- **Lugar del regalo**: Entrada (junto a las llaves)
- **Código**: 8642

### Nivel 8: Reconocimiento Visual
- **Tipo**: Identificar lugar en imagen
- **Respuesta**: VENTANA
- **Lugar del regalo**: Terraza o balcón
- **Código**: 9753

### Nivel Final: Gran Final
- **Código final**: 7890 (del último regalo)
- **Recompensa**: Playlist privada de YouTube

## 📝 Tabla Resumen

| Nivel | Tipo | Respuesta | Lugar | Código |
|-------|--------|-----------|-------|---------|
| 1 | Emocional | "Cuando dijiste 'te quiero'" | Primeros recuerdos | 1234 |
| 2 | Adivinanza | MAPA | Café/Estantería | 5678 |
| 3 | Cifrado | CODIGO | Cocina | 9012 |
| 4 | Error | AMA | Salón | 3456 |
| 5 | Elección | Corazón | Dormitorio | 2468 |
| 6 | Mensaje oculto | NOS | Baño | 1357 |
| 7 | Interactivo | Secuencia 2-4-1-3 | Entrada | 8642 |
| 8 | Visual | VENTANA | Terraza | 9753 |
| Final | Código 7890 | - | Playlist | - |

## 🎁 Sugerencias de Regalos (pequeños y económicos)

- **Nivel 1 (Recuerdos)**: Foto enmarcada, postal, chocolate
- **Nivel 2 (Café)**: Café especial, taza personalizada, galletas
- **Nivel 3 (Cocina)**: Especias, utensilio decorativo, receta especial
- **Nivel 4 (Salón)**: Vela aromática, cojín pequeño, decoración
- **Nivel 5 (Dormitorio)**: Pijama, libro, perfume pequeño
- **Nivel 6 (Baño)**: Jabón artesanal, sales de baño, aceites
- **Nivel 7 (Entrada)**: Llavero, adorno para puerta, planta pequeña
- **Nivel 8 (Terraza)**: Linterna, planta, decoración exterior

## 🏠 Adaptación de Lugares

Si no tienes alguno de estos lugares, puedes adaptar:

- **Primeros recuerdos** → Caja especial, álbum, armario
- **Café/Estantería** → Cocina, despensa, salón
- **Cocina** → Nevera, microondas, despensa
- **Salón** → Sala de estar, rincón especial
- **Dormitorio** → Cuarto, mesita, armario
- **Baño** → Aseo, lavabo, armario
- **Entrada** → Puerta, recibidor, perchero
- **Terraza/Balcón** → Ventana, jardín, patio

## 🎯 Preparación Paso a Paso

1. **Prepara 8 regalos pequeños** (uno por nivel)
2. **Escribe los códigos** en papeles pequeños:
   - 1234, 5678, 9012, 3456, 2468, 1357, 8642, 9753
3. **Coloca cada regalo** con su código correspondiente
4. **Prepara la playlist** de YouTube para el final
5. **Ajusta las preguntas** si es necesario
6. **Haz una prueba rápida** para verificar flujo

## 🚀 Características Técnicas

- **Arquitectura modular**: Componentes reutilizables
- **Persistencia**: Guarda progreso en localStorage
- **Validación**: Códigos de 4 dígitos estrictos
- **Feedback**: Visual claro (✔️/❌)
- **Transiciones**: Suaves entre niveles
- **Responsive**: Funciona en móviles y escritorio

## 🎥 Playlist YouTube (Nivel Final)

Sustituye los IDs por vídeos reales:
- Vídeos de momentos especiales
- Fotos convertidas en vídeo
- Mensajes de amigos/familia
- Canciones significativas
- Recuerdos compartidos

## 🔧 Personalización Fácil

Para personalizar el juego:

1. **Cambiar nombre**: Modificar `PARTNER_NAME` en App.jsx
2. **Ajustar niveles**: Editar array `LEVELS` en App.jsx
3. **Modificar desafíos**: Editar componentes en `/challenges/`
4. **Cambiar códigos**: Modificar `expectedCode` en cada nivel
5. **Adaptar pistas**: Editar `clue` en cada nivel

## 🚀 Consejos Finales

- **Mantén los desafíos accesibles**: No demasiado difíciles
- **Enfócate en la experiencia**: Lo importante es el viaje
- **Personaliza los regalos**: Adaptarlos a los gustos de Andrea
- **Ten flexibilidad**: Si algo no funciona, improvisa
- **Disfruta el proceso**: La preparación también es parte del regalo

¡Este escape room es modular, fácil de personalizar y muy divertido de preparar! 💕
