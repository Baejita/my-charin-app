import React from "react";
import poohProfile from "../img/Pooh-attitude-speech.png";
import wassaProfile from "../img/Wassapong-attitude-speech.png";
import weeryut from "../img/Weerayut-attitude-speech.png";
import parnrada from "../img/Parnlada-attitude-speech.png";
const dataSpeech = [
  {
    name: "ชริน วงศ์พันธ์เที่ยง",
    attitude:
      " ประเทศนี้จะเปลี่ยนได้ก็ต่อเมื่อประชาชนเปลี่ยนความคิด ผมและเพื่อน ๆ สมาชิกทุกคนของพรรคก้าวไกล จะไม่ย่อท้อในการทำงานเพื่อเปลี่ยนประเทศนี้ให้ดีกว่าเดิม เพราะพวกเราเชื่อว่าประเทศไทยของเราดีกว่านี้ได้ ขอให้เชื่อมั่นในการทำงานของพรรคก้าวไกลครับ",
    position: "สส. เขต 2 พระนครศรีอยุธยา",
    img: `${poohProfile}`,
  },
  {
    name: "วัสพงศ์ วิทูรเมธา",
    attitude:
      " ก้าวแรก ก้าวเริ่ม ต้องเสริมต่อ ไม่รั้งรอ ก้าวสอง ต้องก้าวสาม อาจสะดุด แต่ตั้งหน้า พยายาม ถึงก้าวตาม ไม่เคยท้อ ก้าวต่อไป ความฝันที่จะสร้างอนาคตใหม่ให้ลูกหลาน กลับสะดุดหยุดลง แต่เราต้องไปต่อ ไม่รีรอที่จะลุกขึ้นก้าวต่อไป ก้าวให้ไกลกว่าเดิม เพื่อสานความฝันของเราให้เป็นจริง ก้าวให้ไกลกว่าเดิม",
    position: "",
    img: `${wassaProfile}`,
  },
  {
    name: "วีระยุทธ ใยวังหน้า",
    attitude:
      "การเมืองดี ปากท้องดี มีอนาคต ผมเชื่อมั่นในการเมืองแบบพรรคก้าวไกลที่จะทำให้ประเทศไทยไม่เหมือนเดิม มาร่วมเปลี่ยนแปลงการเมืองใหม่ด้วยกันนะครับ ",
    position: "",
    img: `${weeryut}`,
  },
  {
    name: "ปานรดา ปัณณธรวรเมธ",
    attitude:
      "ก้าวแรกจากคนธรรมดาสู่ก้าวแห่งการเปลี่ยนแปลงเริ่มสู่ก้าวใหม่  เพื่อปากท้องเพื่อเศรษฐกิจเพื่อการเมืองที่ดี ที่กินดีอยู่ดี และมีอนาคต ก้าวไปสู่อนาคต ก้าวให้ไกลมาร่วมก้าวไปด้วยกันคะ🧡",
    position: "",
    img: `${parnrada}`,
  },
];

function AttitudeSpeech() {
  return (
    <>
      <div className="container">
        {dataSpeech.map((e) => (
          <div className="container-attitude" key={e.name}>
            <div className="contianer-img-profile">
              <img src={e.img} alt="profileImage" className="img-profile"></img>
            </div>
            <div className="container-attitude--p">
              <span className="double-quote ">&#x275D;</span>
              <p style={{ color: "white" }}>{e.attitude}</p>
              <h3 style={{ color: `#ff6a00` }} className="padingTop">
                {e.name}
              </h3>
              <h4 style={{ color: "white" }}>{e.position}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AttitudeSpeech;
