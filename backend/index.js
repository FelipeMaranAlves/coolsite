import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota teste
app.get("/", (req, res) => {
  res.send("Backend rodando 🚀");
});

// Start do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
