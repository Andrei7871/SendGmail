const x=require('express');
const y=require('body-parser');
const app=x();
const nodemailer=require('nodemailer')
app.use(y.urlencoded({ extended: true })); 
app.post('/example', (req, res) => {
  var FEmail=req.body.from;
  var TEmail=req.body.to;
  var mess=req.body.message;
  var password=req.body.pass;
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: FEmail,
      pass: password
    }
  });
  var mailOptions = {
    from: FEmail,
    to: TEmail,
    subject: 'Sending Email using Node.js',
    text: mess
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(`Successsfully sent`);
 
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});