import React from "react";
import Link from "next/link";
function landing() {
  return (
    <div class="back" style={{
        width: "100%",
        height: "100vh",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)), url(back3.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }}>
        <div class="navbar ml-2">
            <img src="eventify logo (1).png" width="100" alt="" class="logo" />
            <ul>
                <li><Link href="/signup">Sign Up</Link></li>
                <li><Link href="/login">Login</Link></li>
            </ul>
        </div>
        <div class="content">
            <h1>Eventify</h1>
            <h3>From Concept to Reality: Your Dream Event Starts Here</h3>
            <div>
            <Link href="/eventPage">
                <button type="button"><span></span> GET STARTED</button>               
            </Link>
            </div>
        </div>
    </div>
  );
}

export default landing;
