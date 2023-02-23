import { createServer } from 'http';
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

createServer((req, res) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://app.atendezap.net/30382/broadcast');
  res.end();
  
  
  
}).listen(process.env.PORT);
