// Servidor Express - Projeto #19: Cooperativa Agrícola & Safra
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient.js');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3019;

app.get('/api/cooperativa/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 19,
        sistema: "Cooperativa Agrícola & Safra",
        categoria: "Agronegócio Tech",
        tabela_conectada: process.env.TABELA_ALVO || "silos_colheita",
        parametro_ambiente: process.env.UNIDADE_SILO || "AGRO_COOP_19",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #19] Cooperativa Agrícola & Safra rodando em http://localhost:${PORT}/api/cooperativa/status`);
});