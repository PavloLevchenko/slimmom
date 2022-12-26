import { Helmet } from 'react-helmet-async';
import { SideBar } from 'components/SideBar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar/DiaryDateCalendar';
// import { BlockContainer } from './DiaryPage.styled';
import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import { getAllDiaryProduct } from 'redux/services/operations';
import { Container } from '@mui/system';
import { useMediaQuery } from 'react-responsive';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Wrapper } from 'pages/MainPage/MainPage.styled';
export default function CalculatorPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const dispatch = useDispatch();
  // all time send request with date now
  const date = new Date().toISOString();
  useEffect(() => {
    dispatch(getAllDiaryProduct(date));
  }, [date, dispatch]);

  return (
    <Wrapper>
      <Container>
        <Helmet>
          <title>Diary</title>
        </Helmet>

        {isMobile ? (
          <>
            <DiaryDateCalendar />
            <DiaryProductsListItem />
            <DiaryAddProductForm />
          </>
        ) : (
          <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsListItem />
          </>
        )}
      </Container>
      <SideBar />
    </Wrapper>
  );
}
