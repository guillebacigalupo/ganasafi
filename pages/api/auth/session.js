export default function handler(req, res) {
  console.log({request:req.body});
  try {
    res.status(200).json({
      result: "OK",
      payload: {
        hello: "world",
      },
    });
  } catch (e) {
    res.status(500).json({ error: e });
  }
}
