import { Callback, Context, Handler } from 'aws-lambda';

export class IResponse {

  constructor(statusCode: number, body: string) {
    this.statusCode = statusCode;
    this.body = body;
  }

  statusCode: number;
  headers: any = corsHeader;
  body: string;
}

const corsHeader = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': true,
};

const hello: Handler = async (event: any, context: Context, callback: Callback) => {
  const msg: string = JSON.stringify({
    message: 'Hello, sls-ts-seq-boilerplate',
  });

  const res: IResponse = new IResponse(200, msg);
  callback(undefined, res);
};
export { hello };
