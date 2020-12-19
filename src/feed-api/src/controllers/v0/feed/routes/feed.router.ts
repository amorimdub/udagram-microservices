import { Router, Request, Response } from 'express';
import { FeedItem } from '../models/FeedItem';
import * as AWS from '../../../../aws';

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
  const items = await FeedItem.findAndCountAll({ order: [['id', 'DESC']] });
  items.rows.map((item) => {
    if (item.url) {
      item.url = AWS.getGetSignedUrl(item.url);
    }
  });
  res.send(items);
});

router.get('/:id',
  async (req: Request, res: Response) => {

    const { id } = req.params;

    if (!id) {
      return res.status(400).send({ message: 'ID is required' });
    }

    const item = await FeedItem.findByPk(id);

    if (!item) {
      return res.status(404).send({ message: 'Not found' });
    }

    item.url = AWS.getGetSignedUrl(item.url);

    res.send(item);
  });

router.patch('/:id',
  async (req: Request, res: Response) => {

    const { id } = req.params;
    const { caption } = req.body;

    if (!id) {
      return res.status(400).send({ message: 'ID is required' });
    }

    const item = await FeedItem.findByPk(id);

    if (!item) {
      return res.status(404).send({ message: 'Not found' });
    }

    item.caption = caption;
    const updated_item = await item.save();

    updated_item.url = AWS.getGetSignedUrl(updated_item.url);
    res.send(updated_item);
  });

router.get('/signed-url/:fileName',
  async (req: Request, res: Response) => {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);
    res.status(201).send({ url: url });
  });

router.post('/',
  async (req: Request, res: Response) => {
    const caption = req.body.caption;
    const fileName = req.body.url;

    if (!caption) {
      return res.status(400).send({ message: 'Caption is required or malformed' });
    }

    if (!fileName) {
      return res.status(400).send({ message: 'File url is required' });
    }

    const item = await new FeedItem({
      caption: caption,
      url: fileName
    });

    const saved_item = await item.save();

    saved_item.url = AWS.getGetSignedUrl(saved_item.url);
    res.status(201).send(saved_item);
  });

export const FeedRouter: Router = router;
