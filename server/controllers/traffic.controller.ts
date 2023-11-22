import {Request, Response, NextFunction} from "express";

import {trafficModel} from "../model";

const get = async (req: Request, res: Response, next: NextFunction) => {
  const timeFrame = (req.query.timeframe as string) ?? "today";
  const articleId = req.query.articleId as string;

  try {
    const data = await trafficModel.analyzeTrafficData(timeFrame, articleId);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
export {get};
