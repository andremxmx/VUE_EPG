
## OBJETIVO
Desarrollar un sistema simple de gestión de productos que permita evaluar los conocimientos del candidato en desarrollo full-stack con API RESTful, Node.js/PHP y MySQL.

## DESCRIPCIÓN DEL PROYECTO
Se requiere un sistema web que permita:

1. **Gestión de usuarios con dos roles**:
   - Administrador: Puede gestionar productos (crear, editar, eliminar, ver)
   - Usuario regular: Solo puede visualizar productos y sus precios

2. **Funcionalidades principales**:
   - Sistema de autenticación (login/registro)
   - Panel de administración para gestión de productos
   - Catálogo de productos visible para todos los usuarios

## TECNOLOGÍAS REQUERIDAS
- **Backend**: Node.js o PHP 
- **Base de datos**: MySQL
- **API**: RESTful
- **Frontend**: HTML, CSS, JavaScript (puede usar frameworks a elección, react, vue, angular)

## REQUERIMIENTOS TÉCNICOS MÍNIMOS

### Base de datos
- Tabla de usuarios (id, username, password, email, role)
- Tabla de productos (id, nombre, descripción, precio, stock, imagen)

### API RESTful
- Endpoints para autenticación (login/registro)
- Endpoints para gestión de productos (CRUD)
- Implementación de autorización basada en roles

### Frontend
- Interfaz de login/registro
- Panel de administración para productos
- Catálogo de productos para usuarios regulares

## ESTRUCTURA SUGERIDA DE LA BASE DE DATOS
```sql
-- Base de datos
CREATE DATABASE product_management;

-- Tabla de usuarios
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role ENUM('admin', 'regular') DEFAULT 'regular'
);

-- Tabla de productos
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    image_url VARCHAR(255)
);
```

## ENTREGABLES
- Código fuente completo del proyecto
- Script SQL para crear la base de datos
- Archivo README con instrucciones de instalación y uso
- Documentación básica de los endpoints de la API

- Funcionalidad completa según los requisitos
- Calidad y estructura del código
- Implementación correcta de la API RESTful
- Seguridad básica (autenticación, autorización)
- Interfaz de usuario funcional y usable
