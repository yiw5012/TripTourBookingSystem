import { createPool } from "mysql2/promise";

export const conn = createPool({
  connectionLimit: 10,
  host: 'sql.freedb.tech',
  user: 'freedb_triptour',   
  password: 'K2Wym%#W#U7WtdK',
  database: 'freedb_triptourBooking',
  port: 3306,                        
  connectTimeout: 10000              
});