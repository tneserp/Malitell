import * as s from '../../../styles/auth/profile/menu';
import malitell from '../../../assets/images/malitell.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfileMenu } from '../../../store/auth/profileSlice';

export default function Menu() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMenu = (menu: string, menuKo: string) => {
    dispatch(setProfileMenu({menu , menuKo}))
    navigate(`/profile/${menu}`);
  }
  const menuItems = [
    { menu: 'myInfo', menuKo: '내 정보' },
    { menu: 'myScrab', menuKo: '내 스크랩' },
    { menu: 'myReservation', menuKo: '내 예약' },
    { menu: 'myArticle', menuKo: '내 글' },
    { menu: 'myReview', menuKo: '내 리뷰' },
    { menu: 'myCounsel', menuKo: '내 상담 일지' },
    { menu: 'myGathering', menuKo: '내 모임' },
    { menu: 'passwordChange', menuKo: '비밀번호 변경 / 회원 탈퇴' },
  ];
  
  return (
    <s.Wrapper>
      <s.Title>프로필</s.Title>
      <s.Image src={malitell} alt='malitell' />
      <s.Tag>여기에 프로필 태그 들어가요~~</s.Tag>
      <s.Nav>
      {menuItems.map((item) => (
        <s.NavItem key={item.menu} onClick={() => handleMenu(item.menu, item.menuKo)}>
          {item.menuKo}
        </s.NavItem>
      ))}
      </s.Nav>
    </s.Wrapper>
  )
}
