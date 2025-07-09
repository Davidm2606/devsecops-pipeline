const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('✅ Aplicación DevSecOps funcionando 🚀');
});

// Ruta de estado del sistema (simula monitoreo post-despliegue)
app.get('/status', (req, res) => {
    res.json({
      status: 'OK',
      uptime: `${process.uptime().toFixed(2)} segundos`,
      timestamp: new Date(),
      secure: true,
      vulnerabilities: 0
    });
  });
  
  app.get('/version', (req, res) => {
    res.json({
      version: '1.0.0',
      author: 'David Terán',
      commit: process.env.GITHUB_SHA || 'no disponible'
    });
  });
  

// Ruta tipo API
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Ana' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Carlos' }
  ]);
});

// Ruta tipo POST (para pruebas básicas)
app.post('/api/register', (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `Usuario ${name} registrado con éxito.`,
    email
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
