import express from 'express';
import { processAndExport, processAndExportOrder } from './getEmailsAndExport';

const app = express();
const port = 3000;

app.get('/export', async (req, res) => {
  try {
    await processAndExport();
    res.send('Export completed');
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.get('/export-order', async (req, res) => {
  try {
    await processAndExportOrder();
    res.send('Export Order completed');
  } catch (error: any) { // Explicitly typing error as any
    res.status(500).send(`Error: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
