

import request from 'supertest'
import { server, app } from '../../../src/index'

/**
 * El objetivo de este test de integración es probar
 * el endpoint para evaluar si la aplicación responde
 */
describe('GET /health', () => {
    afterAll(() => {
        server.close()
    })

    test('should respond ok message', async () => {
        const response = await request(app.callback()).get('/health')
        expect(response.status).toBe(200)
        expect(response.body).toEqual({ message: 'ok' })
    })
})
describe('Enpoints GET',()=>{
    it('Debe devolver estado 200 y todas las ocurrencias con ac', async () => {
        const ocurrence = "ac";
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        const events = response.body;
        for (let i = 1; i < events.length; i++) {
            expect(events[i - 1].date).toBeLessThanOrEqual(events[i].date);
        }

        for (const event of events) {
            expect(event.date).toBeLessThanOrEqual(0);}
        
        
    });
    it('Debe devolver estado 200 y todas las ocurrencias con dc', async () => {
        const ocurrence = "dc";
        const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        const events = response.body;
        for (let i = 1; i < events.length; i++) {
            expect(events[i - 1].date).toBeLessThanOrEqual(events[i].date);
        }

        for (const event of events) {
            expect(event.date).toBeLessThanOrEqual(0);}
        
    });
    it('Debe devolver error 400 si no se ingresa un string ', async() => {
        const ocurrences = ['a1', '1a', '11', '99'];
        for (const ocurrence of ocurrences) {
            const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
            expect(response.status).toBe(400);
            expect(response.body).toEqual({ message: 'Solo se aceptan caracteres no numéricos' });
        }
    });
    
    it('Debe devolver error si el string no es de largo 2', async () => {
        const ocurrences = ['hola',''];
        for (const ocurrence of ocurrences) {
            const response = await request(app.callback()).get(`/api/history/${ocurrence}`);
            expect(response.status).toBe(400);
            expect(response.body).toEqual({ message: 'El input debe ser ac o dc' });
        }
        
        
        
    



});})