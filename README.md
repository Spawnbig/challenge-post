# Posts Challenge TCIT

## **Índice**
1. [Configuración del Ambiente de Desarrollo](#configuración-del-ambiente-de-desarrollo)
   - [Opción 1: Usando Docker Compose](#opción-1-usando-docker-compose)
   - [Opción 2: Sin Docker Compose](#opción-2-sin-docker-compose)
2. [Configuración del Ambiente de Producción](#iniciar-en-modo-producción)

## Configuración del Ambiente de Desarrollo

Este proyecto puede levantarse en un entorno de desarrollo de dos maneras:

1. **[Usando Docker Compose](#opción-1-usando-docker-compose)** (Recomendado para una configuración más sencilla).
2. **[Sin Docker Compose](#opción-2-sin-docker-compose)** (Configuración manual).

### Opción 1: Usando Docker Compose

Esta es la forma más sencilla de levantar el proyecto.

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Spawnbig/challenge-post.git
    cd challenge-post
    ```

2. **Copiar el archivo de configuración de entorno**:
    ```bash
    cp .env.example .env
    ```

3. **Levantar los servicios**:
    Ejecuta el siguiente comando para iniciar todos los servicios definidos en el archivo `docker-compose.yml`:
    ```bash
    docker-compose up --build 
    o
    docker-compose up --build -d 
    ```

4. **Acceso al proyecto**:
    - La aplicación frontend estará disponible en [http://localhost:5173](http://localhost:5173).
    - La aplicación de servidor (backend) estará disponible en [http://localhost:4000](http://localhost:4000) o el puerto designado en el archivo .env 

5. **Detener los servicios**:
    Para detener y limpiar los contenedores, ejecuta:
    ```bash
    docker-compose down
    ```

### Opción 2: Sin Docker Compose

Esta opción requiere configurar manualmente cada servicio necesario.

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/tuusuario/nombre-del-repo.git
    cd nombre-del-repo
    ```

2. **Copiar el archivo de configuración de entorno**:
    ```bash
    cp .env.example .env
    ```

3. **Configurar variables de entorno**:
    - Modificar el valor de las variables de entorno a lo requerido
    - Cada variable tiene una pequeña explicación de su contenido

4. **Instalar dependencias**:
    ```bash
    npm install --prefix backend && npm install --prefix frontend
    ```

5. **Iniciar servicios**:
    Para iniciar el servicio backend
    ```bash
    cd backend
    npm run dev
    ```

    Para iniciar el servicio frontend
    ```bash
    cd frontend
    npm start
    ```

## Iniciar en modo Producción

Para iniciar el proyecto, sin modo desarrollo se puede realizar lo siguiente.

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Spawnbig/challenge-post.git
    cd challenge-post
    ```

2. **Copiar el archivo de configuración de entorno**:
    ```bash
    cp .env.example .env.prod
    ```

3. **Levantar los servicios**:
    Ejecuta el siguiente comando para iniciar todos los servicios definidos en el archivo `docker-compose.yml`:
    ```bash
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
    ```

