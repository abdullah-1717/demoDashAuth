"use client";
import Card from "../ui/dashboard/card/card";
import Transaction from "../ui/dashboard/transaction/transaction";
import Chart from "../ui/dashboard/chart/chart";


const dashboardPage = () => {
    return (
        <div style={{
            display: "flex",
            flex: "3",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px"
        }}>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "20px"
            }}>
                <Card/>
            </div>
            <Transaction/>
            <Chart/>
        </div>
    );
}

export default dashboardPage;