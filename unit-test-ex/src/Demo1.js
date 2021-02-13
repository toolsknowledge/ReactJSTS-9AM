import Demo from "./Demo";
import { render,screen } from "@testing-library/react";
test("check msg in Demo component",()=>{
    render(<Demo />);
    const msg = screen.getByText("welcome to ashokit");
    expect(msg).toBeInTheDocument();
});