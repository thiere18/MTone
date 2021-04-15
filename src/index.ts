import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv';
import { createConnection } from 'typeorm'
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import depotRoutes from './routes/depot.routes'
import categoryRoutes from './routes/category.routes'
import articleRoutes from './routes/article.routes'
const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        title: "MTP API",
        version: "1.0.0",
        description: "MTP API documentation"
      },
      servers: [
        {
          url: "http://localhost:4000"
        }
      ]
    },
    // apis: ["./routes/*.ts"]
    apis: ['./dist/routes/*.js']
  };
const specs = swaggerJsDoc(options)

const app = express();
createConnection().then(async (connection) => {
    console.log("connection established with MYSQL")
    dotenv.config({ path: './.env' })
}).catch((error) => {
    console.error(error)
});

// Middlewares
app.use("/api",swaggerUi.serve,swaggerUi.setup(specs))
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(depotRoutes);
app.use(categoryRoutes)
app.use(articleRoutes)

app.listen(4000);
console.log(`Listening on port ${process.env.PORT}`);