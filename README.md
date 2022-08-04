# Next.js TEslo Shop

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL Local:

```
mongodb://localhost:27017/shopteslodb
```

## Configurar las variables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llena la base de datos con información de pruebas

Llenar:
```
http://localhost:3000/api/seed
```
