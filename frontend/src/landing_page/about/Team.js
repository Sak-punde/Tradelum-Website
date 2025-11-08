import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-4 mb-3 border-top">
        <h1 className="mt-5 text-center ">People</h1>
        <div className="row p-5 text-muted  ">
          <div className="col-6 p-5 text-center">
            <img
              src="media/Sak.jpg"
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h4 className="mt-5">Sakshi Punde</h4>
            <h6 className="text-muted">Founder</h6>
          </div>
          <div className="col-6 p-5">
            <p>
              Sakshi Punde, a final-year BSc Computer Science student, founded
              Tradelum with a dream to make trading and investing simple,
              smart, and accessible for everyone. Inspired by her love for
              technology and the growing fintech space in India, Sakshi combined
              her coding skills and market knowledge to create a platform that
              removes barriers, empowers retail investors, and promotes
              financial literacy.</p>
              <p>
               Tradelum started as a student project —
              today, it's growing into a platform with real impact. When she's
              not writing code or exploring new fintech trends, you’ll find her
              actively learning, building, and helping others grow in the world
              of tech and finance.</p>
              <p> Connect with Sakshi: 📍<a href="http://localhost:3000/" style={{textDecoration:"none"}}>Homepage</a>  | 
              <a href="https://www.instagram.com/punde2110/profilecard/?igsh=anZ1NXY2YXAzbnY3"  style={{textDecoration:"none"}}>Instagram</a> |  <a href="https://www.facebook.com/share/1YVWGoDPnr/"  style={{textDecoration:"none"}}>Facebook</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
