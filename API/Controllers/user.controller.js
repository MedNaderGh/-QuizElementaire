const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
var config = require('../config/config');
const User = mongoose.model('User');
let Result = require('../models/result');
const Questions = mongoose.model('Questions');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.fullname = req.body.fullname;
    user.inscription = req.body.inscription;
    user.class = req.body.class;
    user.gender = req.body.gender;
    user.date = req.body.date;
    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['email']);
            else
                return next(err);
        }

    });
}
module.exports.saveresult = (req, res, next) => {
  var result = new Result();
  result.fullname = req.body.fullname;
  result.inscription = req.body.inscription;
  result.class = req.body.class;
  result.gender = req.body.gender;
  result.date = req.body.date;
  result.level = req.body.level;
  result.score = req.body.score;
  result.subject = req.body.subject;
  result.save((err, doc) => {
      if (!err)
          res.send(doc);
      else {
          if (err.code == 11000)
              res.status(422).send();
          else
              return next(err);
      }

  });
}

module.exports.allexam = (req, res, next) => {
  var questions = new Questions();
  Questions.insertMany([ 
    {
      "class": "6",
      "subject":"science",
      "question": "ماذا يحدث عندما لا يتساوى مركز توازنك؟",
      "choice1": "توازن",
      "choice2": "لا شيئ",
      "choice3": "تطفو في الهواء",
      "choice4": "تقع",
      "response": "تقع"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "كان اليوم يومًا صيفيًا حارًا وأنت تتعرق. لذلك تلوح بيدك أمام وجهك. ما نوع القوة التي تخلقها؟",
      "choice1": " حرارة",
      "choice2": "رياح",
      "choice3": "الجاذبية",
      "choice4": "توازن",
      "response": "رياح"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "ماذا نسمي شيئًا يلتصق بالمغناطيس؟",
      "choice1": "لزج",
      "choice2": "مغناطيسي",
      "choice3": "سحر",
      "choice4": "غروي",
      "response": "مغناطيسي"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "ماذا يسمى العالم الذي يدرس الفضاء على الأرض؟",
      "choice1": "عالم الفلك",
      "choice2": "عالم الحيوان",
      "choice3": "أحيائي",
      "choice4": "جيولوجي",
      "response": "عالم الفلك"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "ستكون دودة الأرض هي الأسعد في:",
      "choice1": "زجاجة زجاجية على منضدة سريرك",
      "choice2": "بركة",
      "choice3": "صحراء",
      "choice4": "كومة السماد",
      "response": "كومة السماد"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "ماذا يقيس المسطرة؟",
      "choice1": "غاز",
      "choice2": "كميات المياه",
      "choice3": "وزن",
      "choice4": "طول",
      "response": "طول"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "إذا رأيت نباتًا يبدأ في الذبول ، فماذا يمكنك أن تحاول إعطائه؟",
      "choice1": "المزيد من الديدان",
      "choice2": "مزيد من الظلام",
      "choice3": "المزيد من العناق",
      "choice4": "المزيد من ضوء الشمس",
      "response": "المزيد من ضوء الشمس"
  },
  {
    "class": "6",
    "subject":"science",
    "question": "ستكون دودة الأرض هي الأسعد في:",
    "choice1": "زجاجة زجاجية على منضدة سريرك",
    "choice2": "بركة",
    "choice3": "صحراء",
    "choice4": "كومة السماد",
    "response": "كومة السماد"
},
  {
      "class": "6",
      "subject":"science",
      "question": "ماذا يسمى القمر عندما يكون كبيرًا ومشرقًا بقدر ما يمكن أن يحصل عليه؟",
      "choice1": "قمر جديد",
      "choice2": "اكتمال القمر",
      "choice3": "شمس",
      "choice4": "رجل على القمر",
      "response": "اكتمال القمر"
  },
  {
      "class": "6",
      "subject":"science",
      "question": "أي من هذه الأجسام لا يدور حول شيء ما في الفضاء؟",
      "choice1": "القمر",
      "choice2": "أرض",
      "choice3": "الشمس",
      "choice4": "المريخ",
      "response": "الشمس"
  } 
]).then(function(){ 
    console.log("Data inserted")  // Success 
}).catch(function(error){ 
    console.log(error)      // Failure 
});
}
module.exports.addexam = (req, res, next) => {
  var questions = new Questions();
  questions.class = req.body.class;
  questions.subject = req.body.subject;
  questions.question = req.body.question;
  questions.choice1 = req.body.choice1;
  questions.choice2 = req.body.choice2;
  questions.choice3 = req.body.choice3;
  questions.choice4 = req.body.choice4;
  questions.response = req.body.response;
  questions.save((err, doc) => {
      if (!err)
          res.send(doc);
      else {
          if (err.code == 11000)
              res.status(422).send(['email']);
          else
              return next(err);
      }

  });
}
module.exports.getexam = (req, res) => {
  Questions.find({class:req.body.level,subject:req.body.subject},function (err, questions) {
    if (err) {res.send('error');
  next();}
    res.json(questions);
})}
module.exports.getresult = (req, res) => {
  Result.find({class:req.body.niveau},function (err, result) {
    if (err) {res.send('error');
  next();}
    res.json(result);
})}

