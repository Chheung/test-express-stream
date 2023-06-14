import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

const timeout = async (time: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ timeout: true });
    }, time);
  });
};

app.get("/", async (_: Request, res: Response) => {
  for (let i = 0; i <= 10; i++) {
    res.write("[hello]\n");
    await timeout(1000);
  }

  res.end();
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
