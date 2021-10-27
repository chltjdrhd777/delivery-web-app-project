import React, { useState, useEffect } from "react";
import styled from "@emotion/styled/macro";

//hooks
//스크롤 이벤트로 인한 값의 변화를 상태로 등록하고 있을 경우, 해당 작업은 sideEffect이다.(인자가 아닌, 외부 스크롤의 상태변화에 따라 값이 계속 달라지고 있기 때문)
//따라서 해당 sideEffect는 useEffect로 다뤄줘야 한다. 이를 재사용하기 위한 방식으로 관습적인 'use'를 붙인 훅으로 감싸서 의미단위로 분리하도록 한다.
export function useScroll() {
  const [scrollActive, setScrollActive] = useState<boolean>(false);
  let mounted = true;

  const debounce = (() => {
    let debounceId: any;

    return () => {
      if (!scrollActive) {
        setScrollActive(true);
      }

      if (debounceId) {
        clearTimeout(debounceId);
      }

      debounceId = setTimeout(() => {
        setScrollActive(false);
      }, 300);
    };
  })();

  const throttle = (() => {
    let throttleId: any;

    return () => {
      if (throttleId) return;
      setScrollActive(true);

      throttleId = setTimeout(() => {
        throttleId = null;
        setScrollActive(false);
      }, 1500);
    };
  })();

  useEffect(() => {
    if (mounted) {
      window.addEventListener("scroll", debounce);
    }

    return () => {
      mounted = false;
      window.removeEventListener("scroll", debounce);
    };
  }, []);

  return { scrollActive };
}

//main

const ScollContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  & button {
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    cursor: pointer;
    padding: 1.8rem 2rem;
    border: 2px solid ${({ theme }) => theme.colors.pointColorYello};
    border-radius: 10rem;
    color: ${({ theme }) => theme.colors.indigo};
    &:first-of-type {
      margin-right: 1rem;
    }
    font-size: 1.5rem;
  }
`;

function Scroll() {
  return (
    <ScollContainer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <i className="fas fa-arrow-up"></i>
      </button>
      <button
        onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-down"></i>
      </button>
    </ScollContainer>
  );
}

export default Scroll;
