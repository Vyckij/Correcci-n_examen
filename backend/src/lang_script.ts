import { OpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Cargar la clave de API desde las variables de entorno
const apiKey = process.env.OPENAI_API_KEY;

// Cargar las incrustaciones de OpenAI una sola vez
const openAIEmbeddings = new OpenAIEmbeddings({ openAIApiKey: apiKey });

export const process_doc = async (filePath: string, question: string) => {
    try {
        if (!filePath) {
            throw new Error('File path is required');
        }
        
        // Crear una instancia de OpenAI
        const model = new OpenAI({ openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo-instruct' });

        const pdfBuffer = fs.readFileSync(filePath);
        // Crear una instancia de PDFLoader con el buffer del PDF
        const loader = new PDFLoader(filePath, { splitPages: false });
        const doc = await loader.load();

        // Crear un vectorStore a partir del documento y las incrustaciones de OpenAI
        const vectorStore = await MemoryVectorStore.fromDocuments(doc, openAIEmbeddings);
        const vectorStoreRetriever = vectorStore.asRetriever();

        // Crear una cadena de recuperación de preguntas y respuestas desde el modelo y el vectorStoreRetriever
        const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

        // Realizar la llamada a la cadena con la pregunta y devolver el resultado
        console.log(question);
        const result = await chain.invoke({ query: question });
        
        const totalTokens = result.usage ? result.usage.total_tokens : 'Token info not available';
        
        if (result && result.text) {
            // Devuelve solo el texto si hay un problema con los tokens
            const totalTokens = result.usage ? result.usage.total_tokens : 'Token info not available';
            return {
                text: result.text,
                token: totalTokens
            };
        } else {
            throw new Error('Respuesta del procesamiento inesperada');
        } 
    } catch (error) {
        // Manejar cualquier error que ocurra durante el proceso
        console.error("Error XX:", error);
        throw error; 
    }
};
