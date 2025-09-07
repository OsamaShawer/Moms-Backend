import express from "express";
import cors from "cors";
import path from "path";

const app = express();
const port = 3000;
app.use(express.json());
app.use(
  cors({
    origin: ["https://mathtest-xi.vercel.app", "https://mathtest-kr4lfn8zl-osamas-projects-0b06dd54.vercel.app", "http://localhost:5173", "https://mathtest-git-main-osamas-projects-0b06dd54.vercel.app"],
  })
);

// Serve static media files from backend at /media
app.use("/media", express.static(path.join(__dirname, "../public")));

const securityCode = "Happy";

app.get("/", (_, res) => res.send("Express Is Working"));

app.post("/", async (req, res) => {
  try {
    const { security } = req.body;
    if (security === securityCode) {
      res.status(200).json({ authorized: true });
    } else {
      res.status(401).json({ authorized: false });
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/videos", async (req, res) => {
  const password = req.headers["x-password"];
  if (password === securityCode) {
    res.json({
      videos: [
        {
          id: 1,
          src: "https://drive.google.com/file/d/1jORF6ky6pHd6znFHHXJONO-KJCbcqJFv/view?usp=drivesdk",
          title: "ُEven Function",
        },
      ],
      downloads: [
        {
          id: 1,
          src: "https://drive.google.com/uc?export=download&id=1jORF6ky6pHd6znFHHXJONO-KJCbcqJFv",
          title: "ُDownload Even Function",
        },
      ],
    });
  } else {
    res.status(401).json({ message: "Not auth" });
  }
});

app.get("/powerpoints", async (req, res) => {
  const password = req.headers["x-password"];
  if (password === securityCode) {
    res.json({
      files: [
        { id: 1, src: "https://moms-backend-production.up.railway.app/media/الاقتران الزوجي.pdf" },
        { id: 2, src: "https://moms-backend-production.up.railway.app/media/solved.pdf" },
        { id: 3, src: "https://moms-backend-production.up.railway.app/media/HomeworkEven.jpg" },
        { id: 4, src: "https://moms-backend-production.up.railway.app/media/SummaryEven.jpg" },
      ],
    });
  } else {
    res.status(401).json({ message: "Not auth" });
  }
});
app.get("/all", async (req, res) => {
  const password = req.headers["x-password"];
  if (password === securityCode) {
    res.json({
      files: [
        { id: 1, src: "https://moms-backend-production.up.railway.app/media/الاقتران الزوجي.pdf" },
        { id: 2, src: "https://moms-backend-production.up.railway.app/media/solved.pdf" },
        { id: 3, src: "https://moms-backend-production.up.railway.app/media/HomeworkEven.jpg" },
        { id: 4, src: "https://moms-backend-production.up.railway.app/media/SummaryEven.jpg" },
      ],
      videos: [
        {
          id: 1,
          src: "https://drive.google.com/file/d/1jORF6ky6pHd6znFHHXJONO-KJCbcqJFv/view?usp=drivesdk",
          title: "ُEven Function",
        },
      ],
      downloads: [
        {
          id: 1,
          src: "https://drive.google.com/uc?export=download&id=1jORF6ky6pHd6znFHHXJONO-KJCbcqJFv",
          title: "ُDownload Even Function",
        },
      ],
    });
  } else {
    res.status(401).json({ message: "Not auth" });
  }
});

app.listen(port, () => {
  console.log("Working on Port 3000");
});
