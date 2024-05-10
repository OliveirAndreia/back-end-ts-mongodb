import * as mongoose from 'mongoose';

export const ProfessorSchema = new mongoose. Schema({
nome: { type: String, required: true},
nRegistro: { type: String, required: true},
modulo: { type: String, required: true}
 })
export interface Teacher extends mongoose.Document{ 
id: string;
nome: string;
nRegistro: string;
modulo: string;
}