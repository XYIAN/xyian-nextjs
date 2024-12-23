const stripe = require('stripe')("pk_test_51QYyPcEUUfeNESL5v8IYAyy7pzCnOvIJI6LgQjhLBbHpOLf0a8hgp512RsRQNdh7z6kXhuAgULNCqmWmWV52zi6b00cLTDUbVI");

export default async function handler(req: { method: any; headers: { origin: any; }; query: { session_id: any; }; }, res: { send: (arg0: { clientSecret?: any; status?: any; customer_email?: any; }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: any): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: any) => void; }) {
  switch (req.method) {
    case "POST":
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              price: 'price_1QYyafEUUfeNESL5427K1M7M',
              quantity: 1,
            },
          ],
          mode: 'payment',
          return_url:
            `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({clientSecret: session.client_secret});
      } catch (err : any) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case "GET":
      try {
        const session =
          await stripe.checkout.sessions.retrieve(req.query.session_id);

        res.send({
          status: session.status,
          customer_email: session.customer_details.email
        });
      } catch (err : any) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      res.setHeader('Allow', req.method);
      res.status(405).end('Method Not Allowed');
  }
}