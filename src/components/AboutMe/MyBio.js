import React from "react";
import Card from "react-bootstrap/Card";

function MyBio() {
  return (
    <Card className="quote-card-view">
      <Card.Body style={{paddingLeft:"0px"}}>
        <blockquote className="blockquote">
          <Card.Text style={{ textAlign: "left"}}>
            I was born in <span className="green">Vinh Long City</span>
            , it’s a small city in Western Vietnam's Mekong Delta.
            <br />
            <br />
            <img alt="vinh-long-province" className="my-bio-img" src="/images/AboutMe/vinh_long.png"/>
            <span style={{color:"#808080"}}>Credit: Vo Thanh Nhan</span>
            <br/>
            After I finished my high-school program, I decided to choose Canada
            as my next education environment. I realized that I love math and
            technology, so in 2019, I registered into{" "}
            <span className="green">
              Computer System Technology at Seneca College, Canada.{" "}
            </span>
            <br />
            <br />
            During my learning time at Seneca College, I learned a lot of new
            things about <span className="green">computer operating systems (Window Server and Linux)
            and networking services with Cisco CCNA</span>. Being an ambitious person,
            I always try my best to achieve the best result in my studies at
            school and in the society. Besides the school program, I tried to
            learn new knowledge in web service, cloud platform, and data analyst
            by using some materials on LinkedIn, Udemy, Coursera, freeCodeCamp,…
            
            <br />
            <br />
            Recently, I have <span className="green">graduated in Computer System Technology with honor
            recognition</span>. Generally, IT is a quickly developing and challenging
            field, so I need to improve my skill constantly. Therefore, if I
            have an opportunity, I want to continue my education at the
            university in the future. 
            <br />
            <br />
            Best wishes !!!
            <br />
            Anh Dung Pham
          </Card.Text>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default MyBio;
