import experss, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = experss();
const port = 3000;

// parser
app.use(experss.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  res.send(a);
});

export default app;
