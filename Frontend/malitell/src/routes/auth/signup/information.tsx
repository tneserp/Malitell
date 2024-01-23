import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import * as g from "../../../styles/grid";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  color: #1a5586;
  opacity: 0.6;
`;

const Form = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px 20px;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 16px;
  &::placeholder {
    color: lightgray;
  }
  &[type="submit"] {
    cursor: pointer;
    transition: all 0.2s;
    background-color: #1a5586;
    margin-top: 20px;
    color: white;
    opacity: 0.6;
    border: 1px solid #0c3351;
    &:hover {
      transition: all 0.2s;
      background-color: #0c3351;
    }
    &:focus {
      transition: all 0.2s;
      background-color: #0c3351;
      border: 1px solid lightgray;
    }
  }
  &:focus {
    outline: none;
    border: 1px solid #1a5586;
    opacity: 1;
    z-index: 5;
  }
`;

const Label = styled.label`
  line-height: 2lh;
  display: block;
`;

const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;

export default function Information() {

  interface IFormInput {
    name: string;
    nickname: string;
    email: string;
    password1: string;
    password2: string;
    birth: string;
    phone: string;
    gender: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<IFormInput>();

  const [error, setError] = useState("");

  /* 
  이메일 정규식
  [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + @ + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + . + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상]
  
  이름 정규식 
  1글자이상 30글자 이하

  비밀번호 정규식
  소문자 1글자이상, 숫자1글자이상, !@#중 1글자 이상, 숫자,대소문자,앞의특수문자를 포함한 8~16글자
  */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-zㄱ-ㅎ가-힣]{1,30}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/;
  const nicknameRegex = /^[a-zA-Z가-힣0-9]{2,15}$/;
  const birthRegex =
    /^(19\d{2}|20[0-2]\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;

  // 예시: 폼 제출 시 유효성 검사
  const onSubmit = (data: IFormInput) => {
    console.log("폼이 유효하므로 제출합니다:", data);
    console.log(typeof data.birth);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <g.Grid>
        <g.Box col="1/13" row="1/2">
          정보 입력
        </g.Box>
        <g.Box col="1/13" row="2/11">
          <Label htmlFor="name">이름</Label>
          <Input
            {...register("name", {
              required: "이름은 필수 입력 항목입니다.",
              pattern: {
                value: nameRegex,
                message: "최대 30자까지 입력 가능합니다.",
              },
            })}
            name="name"
            id="name"
            placeholder="Name"
            type="text"
          />
          {errors.name && <p role="alert">{errors.name.message}</p>}

          <Label htmlFor="nickname">별명</Label>
          <Input
            {...register("nickname", {
              required: "별명은 필수 입력 항목입니다.",
              pattern: {
                value: nicknameRegex,
                message: "올바른 별명이 아닙니다.",
              },
            })}
            name="nickname"
            id="nickname"
            placeholder="nickname"
            type="text"
          />
          {errors.nickname && <p role="alert">{errors.nickname.message}</p>}

          <Label htmlFor="email">이메일</Label>
          <Input
            {...register("email", {
              required: "이메일은 필수 입력 항목입니다.",
              pattern: {
                value: emailRegex,
                message: "이메일 형식이 아닙니다.",
              },
            })}
            name="email"
            id="email"
            placeholder="Email"
            type="text"
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}

          <Label htmlFor="password1">비밀번호</Label>
          <Input
            {...register("password1", {
              required: "비밀번호는 필수 입력 항목입니다.",
              pattern: {
                value: passwordRegex,
                message:
                  "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
              },
            })}
            name="password1"
            id="password1"
            placeholder="Password"
            type="password"
          />
          {errors.password1 && <p role="alert">{errors.password1.message}</p>}

          <Label htmlFor="password2">비밀번호 확인</Label>
          <Input
            {...register("password2", {
              required: "비밀번호 확인은 필수 입력 항목입니다.",
              validate: (value) =>
                value === getValues("password1") ||
                "비밀번호가 일치하지 않습니다.",
            })}
            name="password2"
            id="password2"
            placeholder="Verify Password"
            type="password"
          />

          {errors.password2 && <p role="alert">{errors.password2.message}</p>}

          <Label htmlFor="gender">성별</Label>
          <label>남자</label>
          <Input type="radio" value="M" {...register("gender")} />
          <label>여자</label>
          <Input type="radio" value="F" {...register("gender")} />

          <Label htmlFor="birth">생년월일(예: 19901231)</Label>
          <Input
            {...register("birth", {
              required: "생년월일은 필수 입력 항목입니다.",
              pattern: {
                value: birthRegex,
                message: "8글자의 생년월일을 작성해주세요. ",
              },
            })}
            name="birth"
            id="birth"
            placeholder="생년월일"
            type="number"
          />
          {errors.birth && <p role="alert">{errors.birth.message}</p>}

          <Label htmlFor="phone">전화번호(예: 010-1234-5678)</Label>
          <Input
            {...register("phone", {
              required: "휴대전화 번호는 필수 입력 항목입니다.",
              pattern: {
                value: phoneRegex,
                message: "올바른 전화번호를 작성해주세요. ",
              },
            })}
            name="phone"
            id="phone"
            placeholder="01x-xxxx-xxxx"
            type="text"
          />
          {errors.phone && <p role="alert">{errors.phone.message}</p>}

          {/* <p>이름</p>
        <p>닉네임</p>
        <p>아이디(중복확인)</p>
        <p>이메일</p>
        <p>비밀번호</p>
        <p>비밀번호 확인</p>
        <p>생년월일</p>
        <p>전화번호</p>
      <p>태그는 언제한다 했더랑</p> */}
        </g.Box>

        <g.Box col="9/11" row="10/11">
          뒤로가기
        </g.Box>
        <g.Box col="11/13" row="10/11">
          <Input type="submit" value="Sign Up" />
        </g.Box>
      </g.Grid>
    </form>
  );
}

// export default function Information() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useForm<IFormInput>();

//   interface IFormInput {
//     name: string;
//     email: string;
//     password1: string;
//     password2: string;
//   }

//   /*
//   이메일 정규식
//   [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + @ + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상] + . + [공백(띄어쓰기)와 @제외 아무 글자 1글자 이상]

//   이름 정규식
//   1글자이상 30글자 이하

//   비밀번호 정규식
//   소문자 1글자이상, 숫자1글자이상, !@#중 1글자 이상, 숫자,대소문자,앞의특수문자를 포함한 8~16글자
//   */
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const nameRegex = /^[A-Za-zㄱ-ㅎ가-힣]{1,30}$/;
//   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,16}$/;

//   // 예시: 폼 제출 시 유효성 검사
//   const onSubmit = (data: IFormInput) => {
//     console.log("폼이 유효하므로 제출합니다:", data);
//   };

//   return (
//     <Wrapper>
//       <Title>Sign Up</Title>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Input
//           {...register("name", {
//             required: "이름은 필수 입력 항목입니다.",
//             pattern: {
//               value: nameRegex,
//               message: "최대 30자까지 입력 가능합니다.",
//             },
//           })}
//           name="name"
//           placeholder="Name"
//           type="text"
//         />
//         {errors.name && <p role="alert">{errors.name.message}</p>}
//         <Input
//           {...register("email", {
//             required: "이메일은 필수 입력 항목입니다.",
//             pattern: {
//               value: emailRegex,
//               message: "이메일 형식이 아닙니다.",
//             },
//           })}
//           name="email"
//           placeholder="Email"
//           type="text"
//         />
//         {errors.email && <p role="alert">{errors.email.message}</p>}
//         <Input
//           {...register("password1", {
//             required: "비밀번호는 필수 입력 항목입니다.",
//             pattern: {
//               value: passwordRegex,
//               message:
//                 "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
//             },
//           })}
//           name="password1"
//           placeholder="Password"
//           type="password"
//         />
//         {errors.password1 && <p role="alert">{errors.password1.message}</p>}
//         <Input
//           {...register("password2", {
//             required: "비밀번호 확인은 필수 입력 항목입니다.",
//             validate: (value) =>
//               value === getValues("password1") ||
//               "비밀번호가 일치하지 않습니다.",
//           })}
//           name="password2"
//           placeholder="Verify Password"
//           type="password"
//         />
//         {errors.password2 && <p role="alert">{errors.password2.message}</p>}
//         <Input type="submit" value="Sign Up" />
//       </Form>
//     </Wrapper>
//   );
// }
