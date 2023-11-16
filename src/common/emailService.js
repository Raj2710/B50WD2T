import sgMail from '@sendgrid/mail'

const sendMail = ({to,subject,text,html})=>{
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
        to:to, // Change to your recipient
        from: 'nagarajansai2727@gmail.com', // Change to your verified sender
        subject:subject,
        text:text,
        html:html,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

const forgetPassword = async({name,email,url})=>{
    try {
        let to = email
        let subject = 'Reset Password Request'
        let html = `
        <p>Dear ${name},</p>
        <p>We have received your request to reset the password. If you really want to reset it kindly click the button below.</p>
        <button style="background-color: black; border: none; padding: 5px;"> 
            <a href="${url}" style="text-decoration: none; color: white;">Reset Passoword</a>
        </button>
        <p>* If the above button does not work kindly click the url. <a href="${url}">${url}</a></p>`

        await sendMail({to,subject,text:html,html})

    } catch (error) {
        return error
    }
}

export default {forgetPassword}