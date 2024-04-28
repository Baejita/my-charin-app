function NavBarClickHam() {
  return (
    <div className="toggle-ham-nav">
      <div className="toggle-ham-nav-name">
        <h2 className="hero-header">ชริน วงศ์พันธ์เที่ยง</h2>
        <p className="hero-p">สส.เขต 2 พระนครศรีอยุธยา</p>
      </div>
      <ul className="nav-clik-ham">
        <li className="nav-clik-ham-link">
          <a href="https://lin.ee/7U79MeF">แจ้งปัญหา/รับเรื่องร้องเรียน</a>
        </li>
        <li className="nav-clik-ham-link">
          <a href="https://accounts.moveforwardparty.org/account/register">
            สมัครสมาชิกพรรค
          </a>
        </li>
        <li className="nav-clik-ham-link">
          <a href="#">อาสาก้าวไกลอยุธยา</a>
        </li>
        <li className="nav-clik-ham-link">
          <a href="#">ติดตามข้อมูลข่าวสาร</a>
        </li>
      </ul>
      {/* <div className="hero-btn-toclose-hamberger">
        <button
          type="button"
          className="btn button"
          // onClick={() => handleToggleContact({})}
        >
          ปิดหน้าต่าง
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default NavBarClickHam;
