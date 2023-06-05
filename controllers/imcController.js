const express = require("express");

const IMCService = require("../services/imcService");

const router = express.Router();

const imcService = new IMCService();

router.post("/calculate", (req, res) => {
  const { weight, height } = req.body;

  const { imc, description } = imcService.calculate(Number(weight), Number(height));
  return res.json({ imc, description });
});

module.exports = router;