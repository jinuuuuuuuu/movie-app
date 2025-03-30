import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ name, fontSize, onClick }) {
  return (
    <button
      className={styles.btn}
      style={{
        fontSize: `${fontSize}px`,
        padding: "10px",
        margin: "5px",
      }}
      onClick={onClick} // ✅ 컴포넌트 버튼도 클릭 이벤트 연결
      //3. 자식 컴포넌트에서, 전달받은 함수를 이벤트 핸들러로 설정
      //📌 부모(App)에서 onClick 함수를 Button 컴포넌트에 전달하고, Button에서 실행.
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired, // 문자열 필수
  fontSize: PropTypes.number.isRequired, // 숫자 필수
  onClick: PropTypes.func, // 함수 타입 추가
};

export default Button;
