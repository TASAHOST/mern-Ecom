const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const productRouter = require("./routes/product.router");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const cartRouter = require("./routes/cart.router");
const userRouter = require("./routes/user.router");
const jwt = require("jsonwebtoken");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. It retrieves data from JSONPlaceholder.",
    license: {
      name: "Licensed Under MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "Tossapon Nilpech",
      url: "https://github.com/TASAHOST",
      email: "644259008@webmail.npru.ac.th",
    },
  },
  externalDocs:{
      description:"Download Swagger.json",
      url:"/swagger.json"

  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

//เพื่อเรียกใช้ไฟล์ .env
dotenv.config();
const app = express();
const CLIENT_URL = process.env.CLIENT_URL;
app.use(cors({ credentials: true, origin: CLIENT_URL }));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/swagger.json", (req,res)=>{
  res.header("Content-Type","application.json");
  res.send(swaggerSpec);
}

)
//เชื่อมต่อกับ mongo
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

//ลองว่าเชื่อมต่อกับเซิฟเวอร์ได้ไหม
app.get("/", (req, res) => {
  res.send("This is a RESFUL");
});

app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/users", userRouter);

app.post("/jwt" , async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,
    {expiresIn:"1h",
  });
  res.send({ token });
});

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("server is running 0n http://localhost:" + PORT);
});
