export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "User Successfully Added" });
  } else {
    res.setHeader("Alow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
