require('dotenv').config();
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const cors = require("cors");

app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN || "*",
    methods: ["GET", "POST"],
}));

app.post("/api/checkout_sessions", async (req, res) => {
    try {
        const { lineItems } = req.body;

        if (!lineItems || !Array.isArray(lineItems)) {
            return res.status(400).json({ error: "Invalid or missing lineItems array" });
        }

        const session = await stripe.checkout.sessions.create({
            ui_mode: 'embedded',
            line_items: lineItems,
            mode: 'payment',
            return_url: process.env.RETURN_URL || 'http://localhost:3003/store/confirmation',
        });

        res.send({ clientSecret: session.client_secret });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
