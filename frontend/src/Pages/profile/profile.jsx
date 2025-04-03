import React from "react";
import { Card } from "./card";  
import { Button } from "./button";
import { Avatar } from "./avatar";
import "./profile.css";
import kkkImage from "./kkk.png";
import Footer from '../../components/footer/footer';

const Profile = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul>
          <li className="active">My Dashboard</li>
          <li>Accounts</li>
          <li>Mobile</li>
          <li>Payments</li>
          <li>Complaints</li>
          <li>Support</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        {/* Profile Card */}
        <Card className="profile-card">
        <Avatar src={kkkImage} className="avatar" />
          <div>
            <h2 className="profile-name">Sami Rahman</h2>
            <p className="profile-info">+1 856-589-996-1236</p>
            <p className="profile-info">samirahman002@gmail.com</p>
            <Button className="edit-profile">Edit Profile</Button>
          </div>
        </Card>

        {/* xPay Accounts */}
        <Card className="account-card">
          <h3>My xPay Accounts</h3>
          <div>
            <p>Active Account: 8643 5680 8890 4256</p>
            <Button className="block-account">Block Account</Button>
          </div>
          <div>
            <p>Blocked Account: ---</p>
            <Button className="unblock-account">Unblock Account</Button>
          </div>
        </Card>

        {/* My Bills */}
        <Card className="bills-card">
          <h3>My Bills</h3>
          <ul>
            <li>Phone Bill <span className="paid">Paid</span></li>
            <li>Internet Bill <span className="not-paid">Not Paid</span></li>
            <li>House Rent <span className="paid">Paid</span></li>
            <li>Income Tax <span className="paid">Paid</span></li>
          </ul>
        </Card>

        {/* Order History */}
        <Card className="order-history">
          <h3>Order History</h3>
          <ul>
            <li>Order #1023 <span className="completed">Completed</span></li>
            <li>Order #1024 <span className="pending">Pending</span></li>
            <li>Order #1025 <span className="cancelled">Cancelled</span></li>
          </ul>
        </Card>
      </div>
    </div>
  );
};

export default Profile;