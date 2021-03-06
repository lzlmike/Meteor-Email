import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.startup(() => {
  // code to run on server at startup
   
});


Meteor.methods({
    sendEmail: function(email) {
        // send the email!
        SSR.compileTemplate('email', Assets.getText('email.html'));
        Email.send({to:email, from:'lzlmike2@gmail.com',
            subject:'Thank you for signing up for our project',
            html: SSR.render('email'),
        });
        console.log('email sent');
    }
});
