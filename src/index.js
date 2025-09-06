"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173",
}));
// Serve static media files from backend at /media
app.use("/media", express_1.default.static(path_1.default.join(__dirname, "../public")));
const securityCode = "GoodMorning123";
app.get("/", (_, res) => res.send("Express Is Working"));
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { security } = req.body;
        if (security === securityCode) {
            res.status(200).json({ authorized: true });
        }
        else {
            res.status(401).json({ authorized: false });
        }
    }
    catch (error) {
        console.log(error);
    }
}));
app.get("/videos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    }
    else {
        res.status(401).json({ message: "Not auth" });
    }
}));
app.get("/powerpoints", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.headers["x-password"];
    if (password === securityCode) {
        res.json({
            files: [
                { id: 1, src: "http://localhost:3000/media/الاقتران الزوجي.pdf" },
                { id: 2, src: "http://localhost:3000/media/solved.pdf" },
                { id: 3, src: "http://localhost:3000/media/HomeworkEven.jpg" },
                { id: 4, src: "http://localhost:3000/media/SummaryEven.jpg" },
            ],
        });
    }
    else {
        res.status(401).json({ message: "Not auth" });
    }
}));
app.get("/all", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.headers["x-password"];
    if (password === securityCode) {
        res.json({
            files: [
                { id: 1, src: "http://localhost:3000/media/الاقتران الزوجي.pdf" },
                { id: 2, src: "http://localhost:3000/media/solved.pdf" },
                { id: 3, src: "http://localhost:3000/media/HomeworkEven.jpg" },
                { id: 4, src: "http://localhost:3000/media/SummaryEven.jpg" },
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
    }
    else {
        res.status(401).json({ message: "Not auth" });
    }
}));
app.listen(port, () => {
    console.log("Working on Port 3000");
});
