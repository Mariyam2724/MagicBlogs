const multer = require("multer");
const router = require("express").Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./static/uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const myStorage = multer({ storage: storage });

// router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
//   console.log(req.file.filename);
//   res.status(200).json({ url: "http://localhost:5000/"+req.file.filename });
// });


const { Deepgram } = require("@deepgram/sdk");
const { SMTPClient } = require("emailjs");
const deepgram = new Deepgram("51add8e9258c2cac6235ffd9da383d34bb9e2e30");
const fs = require("fs");
const videoModel = require("../models/videoModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./static/uploads");
  },
  filename: (req, file, cb) => {
    const datetime =
      new Date().toLocaleDateString() + "_" + new Date().toLocaleTimeString();
    cb(null, file.originalname);
  },
});

const myStorage = multer({ storage: storage });

router.post("/uploadfile", myStorage.single("myfile"), (req, res) => {
  res.status(200).json({ status: "success" });
});

async function transcriber(audioSource, cb) {
  const response = await deepgram.transcription.preRecorded(audioSource, {
    punctuate: true,
  });

  const { transcript, confidence, words } =
    response.results.channels[0].alternatives[0];
  // console.log(transcript);
  console.log('done');
  cb({ transcript, confidence, words });
}

router.get("/transcribe/:videoid", (req, res) => {
  videoModel
    .findById(req.params.videoid)
    .then((data) => {
      if (data.transcription) {
        console.log("trascript exists");
        res.status(200).json(data);
      } else {
        // console.log('trascript doesnt exists');
        console.log("transcribing " + data.file + " ...");
        const audioSource = {
          stream: fs.createReadStream("./static/uploads/" + data.file),
          mimetype: "video/mp4",
        };
        
        transcriber(audioSource, ({ transcript, confidence, words }) => {
          videoModel
            .findByIdAndUpdate(
              req.params.videoid,
              { transcription: transcript },
              { new: true }
            )
            .then((updatedata) => {
              // console.log(updatedata);
              res.status(200).json(updatedata);
            })
            .catch((err) => {
              console.error('error occured while transcribing');
              console.error(err.message);
            });
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

const initMail = () => {
  return new SMTPClient({
    user: "srivastavashikhar592@gmail.com",
    password: "klwvqnkzwycddgkj",
    host: "smtp.gmail.com",
    ssl: true,
  });
};

const client = initMail();
const sendMail = (to, subject, text) => {
  client.send(
    {
      text: text,
      from: "srivastavashikhar592@gmail.com",
      to: to,

      cc: "",
      subject: subject,
    },
    (err, message) => {
      console.log(err || message);
    }
  );
};

router.post("/sendmail", (req, res) => {
  const data = req.body;
  sendMail(data.to, data.subject, data.text);
  res.status(200).json({ message: "mail sent successfully" });
});

router.post("/", (req, res) => {
  console.log(req.body);

  new Model(req.body)
    .save()
    .then((data) => {
      console.log("Email Sent successfully..");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;


