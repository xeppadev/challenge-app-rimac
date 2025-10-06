# RIMAC Health Insurance App

Una aplicación móvil desarrollada con **React Native** y **Expo** para cotización de seguros de salud, siguiendo los principios de **Clean Architecture** y mejores prácticas de desarrollo.

## 🚀 Características

- ✅ **3 Pantallas principales**: Home, Plans y Resume
- ✅ **Navegación fluida** con React Navigation
- ✅ **Manejo de estado** con React Query
- ✅ **Diseño responsive** adaptable a diferentes tamaños de pantalla
- ✅ **Accesibilidad** completa con soporte para lectores de pantalla
- ✅ **Manejo de errores** y estados de carga
- ✅ **Performance optimizada** con FlatList y lazy loading
- ✅ **Arquitectura limpia** con separación de responsabilidades

## 📱 Pantallas

### 1. Home Screen

- Muestra saludo personalizado al usuario
- Opciones para cotizar para uno mismo o para alguien más
- Información del usuario obtenida de la API

### 2. Plans Screen

- Lista de planes disponibles con FlatList optimizada
- Lazy loading para mejor performance
- Selección de plan con feedback visual

### 3. Resume Screen

- Resumen completo del plan seleccionado
- Información del responsable de pago
- Beneficios del plan elegido

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework principal
- **Expo** - Herramientas de desarrollo
- **TypeScript** - Tipado estático
- **React Navigation** - Navegación entre pantallas
- **React Query** - Manejo de estado remoto y cache
- **Axios** - Cliente HTTP para peticiones API
- **Biome** - Linter y formateador de código

## 📦 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/xeppadev/challenge-app-rimac.git
cd my-app
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Inicia el servidor de desarrollo**

```bash
npm start
```

4. **Ejecuta en dispositivos**

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 🏗️ Estructura del Proyecto

```
src/
├── features/                 # Features por funcionalidad
│   ├── Home/               # Feature Home
│   │   ├── components/     # Componentes específicos
│   │   ├── hooks/          # Hooks personalizados
│   │   └── screens/        # Pantallas
│   ├── Plans/              # Feature Plans
│   └── Resume/             # Feature Resume
├── shared/                  # Código compartido
│   ├── components/         # Componentes reutilizables
│   ├── constants/          # Constantes globales
│   ├── contexts/           # Context providers
│   ├── hooks/              # Hooks compartidos
│   ├── navigation/         # Configuración de navegación
│   ├── services/           # Servicios de API
│   ├── types/              # Tipos TypeScript
│   └── utils/              # Utilidades
```

## 🎨 Diseño

La aplicación sigue el diseño de RIMAC con:

- **Colores**: Rojo RIMAC (#EF3340), azul oscuro, grises
- **Tipografía**: Sans-serif moderna y legible
- **Espaciado**: Sistema de espaciado consistente
- **Componentes**: Reutilizables y accesibles

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia el servidor de desarrollo
npm run android        # Ejecuta en Android
npm run ios           # Ejecuta en iOS
npm run web           # Ejecuta en web

# Calidad de código
npm run lint          # Ejecuta el linter
npm run format        # Formatea el código
npm run typecheck     # Verifica tipos TypeScript
```

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests con coverage
npm run test:coverage
```

## 📡 APIs Utilizadas

- **Usuario**: `https://rimac-front-end-challenge.netlify.app/api/user.json`
- **Planes**: `https://rimac-front-end-challenge.netlify.app/api/plans.json`

## ♿ Accesibilidad

La aplicación incluye:

- Labels descriptivos para lectores de pantalla
- Roles de accesibilidad apropiados
- Estados de accesibilidad para elementos interactivos
- Navegación por teclado
- Contraste de colores adecuado

## 📱 Responsive Design

- Adaptación automática a diferentes tamaños de pantalla
- Uso de `useWindowDimensions` para mediciones dinámicas
- Componentes que escalan apropiadamente
- Soporte para tablets y dispositivos grandes

## 🚀 Performance

- **FlatList** con lazy loading para listas grandes
- **React.memo** para evitar re-renders innecesarios
- **useCallback** para funciones estables
- **React Query** para cache inteligente
- **Optimizaciones** de memoria y renderizado

## 🏗️ Arquitectura

Sigue los principios de **Clean Architecture**:

- **Separación de responsabilidades**
- **Inversión de dependencias**
- **Componentes reutilizables**
- **Hooks personalizados**
- **Servicios independientes**

## 📋 Próximas Mejoras

- [ ] Implementar notificaciones push
- [ ] Agregar modo offline
- [ ] Integrar con sistema de pagos
- [ ] Añadir más tests unitarios
- [ ] Implementar analytics
- [ ] Agregar internacionalización

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo

Desarrollado con ❤️ usando React Native y Expo.
