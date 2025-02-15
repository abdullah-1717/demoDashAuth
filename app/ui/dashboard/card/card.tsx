"use client";
import PersonIcon from '@mui/icons-material/Person';
import './card.css';

const Card = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            width: "100%"
        }}>
            <div className="card">
                <PersonIcon />
                <div style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Total Users</span> <br />
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}>10,230</span> <br />
                    <span><span style={{ color: "green" }}>12%</span> more than previous week</span>
                </div>
            </div>
            <div className="card">
                <PersonIcon />
                <div style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Total Active Users</span> <br />
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}>8,450</span> <br />
                    <span><span style={{ color: "green" }}>10%</span> more than previous week</span>
                </div>
            </div>
            <div className="card">
                <PersonIcon />
                <div style={{ marginLeft: "10px" }}>
                    <span style={{ fontWeight: "bold" }}>Total Registered Users</span> <br />
                    <span style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}>15,000</span> <br />
                    <span><span style={{ color: "green" }}>5%</span> more than previous week</span>
                </div>
            </div>
        </div>
    );
}

export default Card;