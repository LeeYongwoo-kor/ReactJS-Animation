import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 200px;
  margin: 10px;
  background-color: rgba(245, 208, 66, 0.7);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  background-color: #f5d042;
  width: 50px;
  height: 50px;
  border-radius: 35px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1.5rem;
  color: #f5d042;
  background: #0a174e;
  background-position: 1% 50%;
  background-size: 400% 300%;
  border: 1px solid #f5d042;
  border-radius: 10px;
  &:hover {
    color: #0a174e;
    background: #f5d042;
    background-position: 99% 50%;
  }
`;

const overlayVars = {
  basicColor: { backgroundColor: "rgba(0, 0, 0, 0)" },
  animateColor: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
};

function App() {
  const [showing, setShowing] = useState(true);
  const toggleButton = () => setShowing((prev) => !prev);
  const [id, setId] = useState<null | number>(null);
  return (
    <>
      <Wrapper>
        <Grid>
          {[1, 2, 3, 4].map((num) => {
            return (
              <Box
                onClick={() => setId(num)}
                whileHover={{ scale: 1.1 }}
                key={num}
                layoutId={num + ""}
              >
                {num === 2 ? (
                  <>{showing ? <Circle layoutId="circle" /> : null}</>
                ) : num === 3 ? (
                  <>{!showing ? <Circle layoutId="circle" /> : null}</>
                ) : null}
              </Box>
            );
          })}
        </Grid>
        <Footer>
          <Button onClick={() => toggleButton()}>Switch</Button>
        </Footer>
        <AnimatePresence>
          {id ? (
            <Overlay
              onClick={() => setId(null)}
              variants={overlayVars}
              initial="basicColor"
              animate="animateColor"
              exit="basicColor"
            >
              <Box layoutId={id + ""} style={{ backgroundColor: "#f5d042" }} />
            </Overlay>
          ) : null}
        </AnimatePresence>
      </Wrapper>
    </>
  );
}

export default App;
