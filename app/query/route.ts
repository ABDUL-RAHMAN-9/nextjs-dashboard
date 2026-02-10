import postgres from "postgres";

// This connects to your Supabase database using the variable in your .env file
const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

async function listInvoices() {
    const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

    return data;
}

export async function GET() {
    try {
        const invoices = await listInvoices();
        return Response.json(invoices);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
