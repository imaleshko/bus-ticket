import Advantage from "./Advantage";
import img from "@/assets/advantages/busIcon.svg";

describe("<Advantage />", () => {
  it("renders icon and text", () => {
    const props = {
      img: img,
      text: "Швидкість",
    };

    cy.mount(<Advantage {...props} />);

    cy.contains(props.text).should("be.visible");
    cy.get("img").should("be.visible");
  });
});
