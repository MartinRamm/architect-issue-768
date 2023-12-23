import { APIGatewayProxyHandlerV2 } from 'aws-lambda/trigger/api-gateway-proxy';

export const handler: APIGatewayProxyHandlerV2 = () => {
  return Promise.resolve({ statusCode: 200 });
}
