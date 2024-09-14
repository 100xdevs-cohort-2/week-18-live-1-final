import { NextResponse } from "next/server"
import   client   from "@repo/db/client";



export const GET = async () => {
    
    return NextResponse.json({
        message: "hi there"
    })
}