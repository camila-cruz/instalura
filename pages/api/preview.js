export default function handler(req, res) {
  if (req.query.key !== process.env.NEXT_PREVIEW_MODE_KEY) {
    // res.writeHead(307, { location: '/404' });
    // return res.end();
    return res.status(401).json({ message: 'Invalid key to enable preview mode' });
  }

  res.setPreviewData({});

  res.writeHead(307, { location: '/' });

  return res.end();
}
