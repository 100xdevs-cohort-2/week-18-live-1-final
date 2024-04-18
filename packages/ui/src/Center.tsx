import React from "react"

export const Center = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex justify-center flex-col md:h-full">
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}