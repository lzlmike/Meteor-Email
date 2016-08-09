import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.startup(() => {
  // code to run on server at startup
    process.env.MAIL_URL = 'smtp://postmaster@mikeandiana.com:e818aff6ca8db35df0b52a64fadc46d5@smtp.mailgun.org:587';
});


Meteor.methods({
    sendEmail: function(email) {
        // send the email!
        Email.send({to:email, from:'lzlmike2@gmail.com', subject:'Thank you for signing up for our project', text:'We will share with you some news about us in a near future. See you soon!'});
    }
});
