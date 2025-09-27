import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailtrapClient, sender } from "./mailtrap.config.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })

        console.log("Email sent successfully", response);

    } catch (error) {
        console.error(`Error sending verification ${error}`);
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sentWelcomeEmail = async (email, name) => {
    const recipient = [{ email }];

    try {
        const response =  await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: process.env.WELLCOME_EMAIL_TEMPLATE_UUID,
            template_variables: {
                "company_info_name": "auth-system",
                "name": name
            }
        })

        console.log("Welcome email sent successfully", response);
        
    } catch (error) {
        console.log(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);        
    }
}