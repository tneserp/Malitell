import styled from "styled-components";

const Button = styled.button`
  width: 50px;
  height: 30px;
`;

interface Props {
  counselorSeq: number;
}

export default function CreateChat({ counselorSeq }: Props) {
  const CreateChat = () => {
    if (window.sessionStorage.getItem("Access_Token")) {
      fetch(`http://localhost:8080/chat/room`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Access_Token: `${window.sessionStorage.getItem("Access_Token")}`,
        },
        body: JSON.stringify({
          "counselorSeq": counselorSeq,
          "clientSeq": window.sessionStorage.getItem("mySeq"),
        }),
      }).then((res) => {
        console.log(res);
      });
    } else {
      window.alert("로그인 후 이용해주세요.");
    }
  };
  return <Button onClick={CreateChat}>채팅하기</Button>;
}
