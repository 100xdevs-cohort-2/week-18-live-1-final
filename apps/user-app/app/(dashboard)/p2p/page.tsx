import { getServerSession } from "next-auth";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { time } from "console";

async function getP2pTranstions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        status: "",
        provider: ""
    }))
}

export default async function() {
    const transactions = await getP2pTranstions();

    return <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4 w-screen">
        <SendCard />
        <div className="flex items-center">
            <OnRampTransactions transactions={transactions}/>   
        </div>
    </div>
}