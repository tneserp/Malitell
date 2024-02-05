import * as s from "../../../styles/auth/signup/certification";
import malitell from "../../../assets/images/malitell.png";
import { useForm } from "react-hook-form";

interface FormProps {
  userId: string;
  email: string;
}

export default function Certification({ userId, email }: FormProps) {
  interface FormData {
    userId: string;
    email: string;
    certificationNumber: string;
  }

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      userId: userId,
      email: email,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);

    fetch(`http://localhost:8080/auth/check-certification`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        return res;
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("성공");
        }
      });
  };

  return (
    <s.Wrapper>
      <s.Image src={malitell} alt="malitell" />
      <s.TextBox>
        <s.MailText>인증메일이 발송되었습니다.</s.MailText>
        <s.Explanation>
          가입하신 메일로 인증메일이 발송되며,
          <br />
          메일을 확인 후 하단에 인증번호를 입력해 주세요.
          <br />
        </s.Explanation>
      </s.TextBox>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.Input
          {...register("certificationNumber", {
            required: "인증번호를 입력해 주세요",
          })}
        />
        <s.Submit type="submit" value="인증하기" />
      </s.Form>
    </s.Wrapper>
  );
}
