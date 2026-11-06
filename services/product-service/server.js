const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// PostgreSQL connection pool using environment variables from our Kubernetes Secret
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres-service',
  database: process.env.DB_USER || 'admin',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'securepassword123',
  port: 5432,
});

app.use(express.json());

// Health check endpoint required by our Kubernetes readinessProbe
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Products API endpoint
app.get('/api/products', async (req, res) => {
  try {
    // For now, return a sample product list or query DB
    res.json([
      { id: 1, name: 'Wireless Mechanical Keyboard', price: 2999 },
      { id: 2, name: 'Ergonomic Mouse', price: 1499 }
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.listen(port, () => {
  console.log(`Product service running on port ${port}`);
});
