import { createServer, Response } from 'miragejs';

export function makeServer() {
  return createServer({
    routes() {
      this.namespace = 'api';

      // Login Endpoint
      this.post('/login', (schema, request) => {
        const { email, password } = JSON.parse(request.requestBody);

        // Mock login logic
        if (email === 'test@example.com' && password === 'password123') {
          return {
            token: 'mock-token-123',
            user: { id: 1, name: 'John Doe', email },
          };
        }

        return new Response(
          401,
          {},
          { error: 'Invalid email or password' }
        );
      });

      // Get Users Endpoint
      this.get('/users', () => {
        return {
          users: [
            { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
          ],
        };
      });
    },
  });
}