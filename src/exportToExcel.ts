import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

export const exportToExcel = (data: any[], email: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

  const filename = `${email.replace(/@/g, '_').replace(/\./g, '_')}.xlsx`;
  const directoryPath = path.join(__dirname, '..', 'exports');

  // Ensure the directory exists
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const filePath = path.join(directoryPath, filename);
  XLSX.writeFile(workbook, filePath);
  console.log(`File saved to ${filePath}`);
};

export const exportToExcelOrder = (data: any[], email: string) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions');

  const filename = `${email.replace(/@/g, '_').replace(/\./g, '_')}.xlsx`;
  const directoryPath = path.join(__dirname, '..', 'exports-order');

  // Ensure the directory exists
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const filePath = path.join(directoryPath, filename);
  XLSX.writeFile(workbook, filePath);
  console.log(`File saved to ${filePath}`);
};