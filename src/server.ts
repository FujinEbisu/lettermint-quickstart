import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the HTML form
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/api/contact', async (req: Request, res: Response) => {
    const { email, name, message } = req.body;

    const LETTERMINT_API_URL = 'https://api.lettermint.com/v1/send';
    const API_KEY = process.env.LETTERMINT_API_KEY;

    if (!API_KEY) {
        return res.status(500).json({ error: 'API Key missing in .env file' });
    }

    try {
        const response = await fetch(LETTERMINT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                recipient: email, // Sending a confirmation to the user
                subject: `Hello ${name}, we received your message!`,
                html: `<p>Thanks for reaching out! You said: <strong>"${message}"</strong></p>`,
                replyTo: "support@yourdomain.com"
            })
        });

        if (response.ok) {
            res.status(200).send('Email sent successfully via Lettermint!');
        } else {
            const errorData = await response.json();
            res.status(response.status).json(errorData);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});