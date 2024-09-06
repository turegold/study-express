//메서드들을 모아두는 파일
"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl")

router.get('/', ctrl.output.hello);
router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);

module.exports = router;