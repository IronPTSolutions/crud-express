# CRUD Express - Ejemplo de Arquitectura MVC

Proyecto de ejemplo que implementa una API REST con arquitectura MVC (Modelo-Vista-Controlador) utilizando Node.js, Express y MongoDB con Mongoose.

## 📋 Descripción

Este proyecto demuestra cómo estructurar una aplicación Express siguiendo el patrón de arquitectura MVC, implementando un CRUD completo para la gestión de cursos.

## 🏗️ Arquitectura MVC

El proyecto está organizado siguiendo el patrón MVC:

```
├── app.js                      # Punto de entrada de la aplicación
├── config/
│   ├── db.config.js           # Configuración de MongoDB/Mongoose
│   └── routes.config.js       # Definición de rutas (Router)
├── controllers/
│   └── course.controller.js   # Controladores (lógica de negocio)
├── models/
│   └── course.model.js        # Modelos (esquemas de datos)
└── package.json
```

### 🎯 Componentes del MVC

- **Model (Modelo)**: Define la estructura de datos usando Mongoose. Incluye validaciones y esquemas.
  - `models/course.model.js`

- **View (Vista)**: En este caso, la API REST retorna JSON (no hay vistas HTML tradicionales).

- **Controller (Controlador)**: Gestiona la lógica de negocio y coordina entre modelos y las respuestas.
  - `controllers/course.controller.js`

- **Routes (Rutas)**: Define los endpoints y los conecta con los controladores.
  - `config/routes.config.js`

## 🚀 Instalación

### Requisitos previos

- Node.js (v18 o superior)
- MongoDB (instalado localmente o acceso a una instancia remota)

### Pasos

1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd crud-express
```

2. Instalar dependencias

```bash
npm install
```

3. Configurar MongoDB
   - Asegúrate de que MongoDB esté ejecutándose en `mongodb://127.0.0.1:27017`
   - O modifica la conexión en `config/db.config.js`

4. Iniciar el servidor

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:3000`

## 📡 API Endpoints

### Cursos

| Método | Endpoint           | Descripción              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/courses`     | Crear un nuevo curso     |
| GET    | `/api/courses`     | Obtener todos los cursos |
| GET    | `/api/courses/:id` | Obtener un curso por ID  |
| PATCH  | `/api/courses/:id` | Actualizar un curso      |
| DELETE | `/api/courses/:id` | Eliminar un curso        |

### Ejemplos de uso

**Crear un curso (POST `/api/courses`)**

```json
{
  "name": "Introducción a JavaScript",
  "duration": "40 horas",
  "instructor": "María García",
  "price": 299.99,
  "level": "beginner",
  "description": "Curso completo de JavaScript desde cero"
}
```

**Actualizar un curso (PATCH `/api/courses/:id`)**

```json
{
  "price": 249.99,
  "level": "intermediate"
}
```

## 📝 Modelo de Datos

### Course (Curso)

```javascript
{
  name: String,          // Requerido, 3-100 caracteres
  duration: String,      // Opcional, máx 50 caracteres
  instructor: String,    // Opcional, máx 100 caracteres
  price: Number,         // Opcional, debe ser positivo
  level: String,         // Opcional: "beginner", "intermediate", "advanced"
  description: String,   // Opcional, máx 500 caracteres
  createdAt: Date,       // Auto-generado
  updatedAt: Date        // Auto-generado
}
```

## 🧪 Testing con Postman

El proyecto incluye una colección de Postman lista para usar:

1. Importar `Courses_CRUD.postman_collection.json` en Postman
2. La colección incluye todos los endpoints configurados
3. Ejemplos de payloads para cada operación

## 🛠️ Tecnologías

- **Express 5.2.1**: Framework web minimalista
- **Mongoose 9.2.0**: ODM para MongoDB
- **Joi 18.0.2**: Librería de validación de esquemas
- **Morgan 1.10.1**: Logger HTTP para desarrollo

## 📚 Características

✅ Arquitectura MVC bien definida  
✅ Validación de datos con Mongoose Schema  
✅ Operaciones CRUD completas  
✅ Timestamps automáticos (createdAt, updatedAt)  
✅ Manejo de errores básico  
✅ Hot reload en desarrollo con `--watch`  
✅ Logging de peticiones HTTP

## 🔄 Flujo de una petición

1. **Cliente** → Hace una petición HTTP (ej: `POST /api/courses`)
2. **Router** (`routes.config.js`) → Enruta la petición al controlador correspondiente
3. **Controller** (`course.controller.js`) → Procesa la lógica de negocio
4. **Model** (`course.model.js`) → Interactúa con la base de datos MongoDB
5. **Response** → El controlador devuelve la respuesta en formato JSON

```
Cliente → Router → Controller → Model → MongoDB
                              ↓
         JSON Response ←──────┘
```

## 📖 Scripts disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con hot reload

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

ISC
