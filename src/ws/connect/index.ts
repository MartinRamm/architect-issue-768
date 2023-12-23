import { APIGatewayProxyWebsocketHandlerV2 } from 'aws-lambda/trigger/api-gateway-proxy';

export const handler: APIGatewayProxyWebsocketHandlerV2 = (event) =>
  Promise.resolve({ statusCode: 200 });
