# Custom Vision Project IA

Este proyecto permite a los usuarios seleccionar un tipo de calzado de un menú desplegable y subir una imagen del calzado. La imagen se sube a Cloudinary, y la URL devuelta por Cloudinary se envía a una API de Custom Vision de Azure. Basado en el resultado de la API, la aplicación valida si el calzado puede ser devuelto o no y muestra un mensaje apropiado.

## Características

- Selección de tipo de calzado
- Subida de imagen del calzado
- Subida de imagen a Cloudinary
- Envío de URL de imagen a la API de Custom Vision de Azure para validación
- Mostrar elegibilidad de devolución basada en el resultado de la API

## Tecnologías Utilizadas

- React
- Node.js
- Cloudinary
- Azure Custom Vision

## Prerrequisitos

- Node.js y npm instalados
- Cuenta de Cloudinary
- Cuenta de Azure con Custom Vision API configurada

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/enyeldev/custom-vision-project-ia.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd custom-vision-project-ia
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en el directorio raíz y agrega tus credenciales de Cloudinary y Azure Custom Vision:
    ```
    VITE_API_KEY="Tu clave de Cloudinary"
    VITE_UPLOAD_PRESET="El preset de Cloudinary"
    VITE_NAME_CLOUDINARY="Nombre de Cloudinary"
    VITE_PREDICTION_KEY="Clave de Custom Vision"
    VITE_URL_AI="Url API Custom Vision"
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

2. Abre tu navegador y navega a `http://localhost:3000`.

3. Selecciona un tipo de calzado del menú desplegable.

4. Sube una imagen del calzado.

5. Espera el resultado de la validación y verifica si el calzado puede ser devuelto o no.

## Capturas de Pantalla

### Selección de Tipo de Calzado
![Selección de Tipo de Calzado](https://res.cloudinary.com/dwxtdihyk/image/upload/v1721782651/grhdfik1dwqgmycwjsdm.png)

### Subida de Imagen
![Subida de Imagen](https://res.cloudinary.com/dwxtdihyk/image/upload/v1721782876/viuo21hriadjyqux7xro.png)

### Resultado de la Validación
![Resultado de la Validación](https://res.cloudinary.com/dwxtdihyk/image/upload/v1721783044/yrrtmchyunzaz5qzajei.png)

## Referencia de API

### Cloudinary

- **Endpoint**: `https://api.cloudinary.com/v1_1/${VITE_NAME_CLOUDINARY}/image/upload`
- **Método**: `POST`
- **Parámetros**:
    - `file`: El archivo de imagen a subir
    - `upload_preset`: Tu preset de subida de Cloudinary

### Azure Custom Vision

- **Endpoint**: `https://paylesscustomvision-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/8fab6f4c-fbe2-4ad7-863a-da3712d1d4fc/classify/iterations/Iteration6/url`
- **Método**: `POST`
- **Headers**:
    - `Prediction-Key`: Tu clave de predicción
    - `Content-Type`: `application/json`
- **Cuerpo**:
    ```json
    {
        "Url": "url_de_imagen_de_cloudinary"
    }
    ```

## Contribuciones

1. Haz un fork del repositorio
2. Crea una nueva rama (`git checkout -b feature-rama`)
3. Realiza tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Empuja la rama (`git push origin feature-rama`)
5. Crea un nuevo Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier pregunta o sugerencia, no dudes en abrir un issue o contactarme a [medranogarciaenyel@gmail.com](mailto:medranogarciaenyel@gmail.com).
