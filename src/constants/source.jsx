import { footerSvg } from "../utils";

export const Source = () => {
  const tg = footerSvg.tg;
  const inst = footerSvg.inst;
  const vk = footerSvg.vk;

  const styles = {
    width: "48px",
    height: "48px",
    marginRight: "20px",
  };

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ listStyleType: "none" }}>
          <a href="https://t.me/thatgirlshop">
            <img src={tg} style={styles} />
          </a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="https://vk.com/thatgirlshop">
            <img src={vk} style={styles} />
          </a>
        </li>
        <li style={{ listStyleType: "none" }}>
          <a href="https://www.instagram.com/that.girl.shop/">
            <img src={inst} style={styles} />
          </a>
        </li>
      </ul>
    </div>
  );
};
