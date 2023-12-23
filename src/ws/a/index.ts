import { APIGatewayProxyWebsocketHandlerV2 } from 'aws-lambda/trigger/api-gateway-proxy';
import { ws } from '@architect/functions';

export const handler: APIGatewayProxyWebsocketHandlerV2 = (event) =>
  ws.send({
    id: event.requestContext.connectionId,
    payload: {
      text: 'response from a'
    }
  })
  .then(() => ({ statusCode: 200 }));
