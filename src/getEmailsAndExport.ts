import { db } from './db';
import { exportToExcel, exportToExcelOrder } from './exportToExcel';
import { RowDataPacket } from 'mysql2';

const getEmails = async (): Promise<string[]> => {
  const [rows] = await db.execute<RowDataPacket[]>('SELECT email FROM `user`');
  return rows.map(row => row.email);
};

const getTransactionsByEmail = async (email: string): Promise<any[]> => {
  const startDate = '2024-03-09';
  const endDate = '2024-06-30';
  const [rows] = await db.execute<[RowDataPacket[], any]>('CALL SP_GetFilteredTransactionsByEmail(?, ?, ?)', [email, startDate, endDate]);
  return rows[0]; // Access the first element of the tuple
};

const getTransactionsOrderByEmail = async (email: string): Promise<any[]> => {
  const startDate = '2024-03-09';
  const endDate = '2024-06-30';
  const [rows] = await db.execute<[RowDataPacket[], any]>('CALL SP_GetDataByEmail(?, ?, ?)', [email, startDate, endDate]);
  return rows[0]; // Access the first element of the tuple
};

export const processAndExport = async () => {
  const emails = await getEmails();
  for (const email of emails) {
      const transactions = await getTransactionsByEmail(email);
      exportToExcel(transactions, email);
  }
};

export const processAndExportOrder = async () => {
  const emails = await getEmails();
  for (const email of emails) {
      const transactions = await getTransactionsOrderByEmail(email);
      exportToExcelOrder(transactions, email);
  }
};

